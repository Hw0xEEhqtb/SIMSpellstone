var SIMULATOR = {};
(function () {
	
    var log = require('log');
	var cardApi = require('cardApi');
    var skillApi = require('skillApi');
	var base64 = require('base64');
	var unitInfo = require('unitInfo');
	var loadDeck = require('loadDeck');
	var debugLog = require('debugLog');
	var animations = require('animations');
    var simController = require('simController');
    var ui = require('ui');
    var config = require('config');

	var max_turns = 100;
	var playerDeckCached;
	var cpuDeckCached;
	var cpuCardsCached;
	var playerCardsCached;

	"use strict";

	// Play card
	function playCard(card, p, turn, quiet) {
		var field_p_assaults = field[p]['assaults'];

		// Not a valid card
		if (!card.id) return 0;

		var newKey = field_p_assaults.length;
		unitInfo.initializeUnit(card, p, newKey);
		card.played = true;

		if (card.isAssault()) {
			field_p_assaults[newKey] = card;
		}

		if ((debugLog.enabled || play_debug) && !quiet) {
			debugLog.appendLines(log.name(field[p].commander) + ' plays ' + log.name(card));
		}

		if (card.isTrap()) {
			doEarlyActivationSkills(card);
			activation_skills(card);
		} else {
			// Activate trap/onPlay battlegrounds
			for (var i = 0; i < battlegrounds.onCardPlayed.length; i++) {
				var battleground = battlegrounds.onCardPlayed[i];
				var o = (p === 'player' ? 'cpu' : 'player');

				if (battleground.defender) {
					if (!surge && p !== 'cpu') continue;
					if (surge && p !== 'player') continue;
					battleground.owner = o;
				} else if (battleground.attacker) {
					if (!surge && p !== 'player') continue;
					if (surge && p !== 'cpu') continue;
					battleground.owner = p;
				} else {
					if (battleground.enemy_only && p !== 'cpu') continue;
					if (battleground.ally_only && p !== 'player') continue;
					battleground.owner = p;
				}

				if (turn > 1 && battleground.first_play) {
					continue;
				}

				battleground.onCardPlayed(card, deck[p].deck, deck[o].deck);
			}
		}
		if (animations.areShown) {
			animations.drawField(field, null, null, turn);
		}
	}

	// Dead cards are removed from both fields. Cards on both fields all shift over to the left if there are any gaps.
	function removeDead() {
		removeDeadUnits('player');
		removeDeadUnits('cpu');
	}

	// Shift over to the left if there are any gaps.
	function removeDeadUnits(p) {
		var units = field[p].assaults;
		// Find first dead unit (don't need to update the keys of any units before this one)
		for (var key = 0, len = units.length; key < len; key++) {
			var current_assault = units[key];
			// Starting at the first dead unit, start shifting.
			if (!current_assault.isAlive()) {
				if (debugLog.enabled) {
					debugLog.appendLines(log.name(current_assault) + ' <strong>is removed from field</strong>');
				}
				var newkey = key;	// Store the new key value for the next alive unit
				for (key++; key < len; key++) {
					current_assault = units[key];
					// If this unit is dead, don't update newkey, we still need to fill that slot
					if (!current_assault.isAlive()) {
						if (debugLog.enabled){
							debugLog.appendLines(log.name(current_assault) + ' <strong>is removed from field</strong>');
						}
					}
					// If this unit is alive, set its key to newkey, and then update newkey to be the next slot
					else {
						current_assault['key'] = newkey;
						units[newkey] = current_assault;
						newkey++;
					}
				}
				// We are done shifting slots, so set the length of the array (to get rid of the extra indices on the end)
				// and break out of the for-loop.
				units.length = newkey;
				break;
			}
		}
	}

	// Picks one target by random
	function chooseRandomTarget(targets) {
		var targetIndex = ~~(Math.random() * targets.length);
		return [targets[targetIndex]];
	}

	function getOwner(card) {
		return card.owner;
	}

	function getAlliedField(card) {
		return field[getOwner(card)];
	}

	function getOpponent(card) {
		if (card.owner == 'cpu') return 'player';
		if (card.owner == 'player') return 'cpu';
	}

	function getOpposingField(card) {
		return field[getOpponent(card)];
	}

	// Deal damage to card
	// and keep track of cards that have died this turn
	function doDamage(sourceUnit, targetUnit, damage, shatter, logFn) {
		if (damage >= targetUnit.health_left) {
			targetUnit.health_left = 0;
		} else {
			targetUnit.health_left -= damage;
		}

		if (debugLog.enabled) logFn(sourceUnit, targetUnit, damage);

		if (shatter) {
			iceshatter(targetUnit);
		}
		if (!targetUnit.isAlive() && sourceUnit) {
			doOnDeathSkills(targetUnit, sourceUnit);
		}
	}

	function iceshatter(sourceUnit) {
		// Bug 27391 - If Barrier is partially reduced before being completely depleted, Iceshatter still deals full damage
		var amount = sourceUnit.barrier_ice;
		//if (amount > sourceUnit.barrier_ice) amount = sourceUnit.barrier_ice;
		var opposingField = getOpposingField(sourceUnit);
		var targetUnit = opposingField.assaults[sourceUnit.key];
		if (!targetUnit || !targetUnit.isAlive()) targetUnit = opposingField.commander;

		doDamage(sourceUnit, targetUnit, amount, null, function (source, target, amount) {
			debugLog.append(log.name(source) + "'s barrier shatters and hits " + log.name(target) + ' for ' + amount + ' damage');
			debugLog.appendLines(!target.isAlive() ? ' and it dies' : '');
		});
	}

	function getActivatedSkill(skillMap, skillId) {
		return (skillMap[skillId] || notImplemented);
	}

	function notImplemented(sourceUnit, skill) {
		if (debugLog.enabled) {
			var skillName = (SKILL_DATA[skill.id] ? SKILL_DATA[skill.id].name : skill.id);
			debugLog.appendLines(log.name(sourceUnit) + ' attempts to use ' + skillName + ', but it is not implemented.');
		}

		return 0;
	}

	// Empower, Legion, and Fervor all activate at the beginning of the turn, after commander
	function doEarlyActivations(fieldOfActivePlayer) {
		var unitsOfActivePlayer = fieldOfActivePlayer.assaults;
		for (var unit_key = 0, unit_len = unitsOfActivePlayer.length; unit_key < unit_len; unit_key++) {
			var currentUnit = unitsOfActivePlayer[unit_key];

			if (currentUnit.isAlive() && currentUnit.isActive() && currentUnit.isUnjammed()) {

				// Check for Dualstrike
				var dualstrike = currentUnit.flurry;
				if (dualstrike && dualstrike.countdown === 0) {
					// Dual-strike does not activate if unit has 0 attack
					if (currentUnit.hasAttack()) {
						dualstrike.countdown = dualstrike.c;
						currentUnit.dualstrike_triggered = true;
					}
				}

				doEarlyActivationSkills(currentUnit);
			}
		}
	}

	function doEarlyActivationSkills(sourceCard) {
		var skills = sourceCard.earlyActivationSkills;
		var len = skills.length;
		if (!len) return;

		if (sourceCard.silenced) {
			if (debugLog.enabled) {
				debugLog.appendLines(log.name(sourceCard) + " is silenced and cannot use skills");
			}
			return;
		}

		var dualstrike = sourceCard.dualstrike_triggered;
		if (debugLog.enabled && dualstrike) {
			// var main attack loop deal with resetting timer
			debugLog.appendLines(log.name(sourceCard) + ' activates dualstrike');
		}

		var activations = (dualstrike ? 2 : 1);
		var isAlive = makeLivenessCheck(sourceCard);
		for (var a = 0; a < activations; a++) {
			for (var i = 0; i < len && isAlive(); i++) {
				var skill = skills[i];
				if (!skill.countdown) {
					var skillFn = getActivatedSkill(earlyActivationSkills, skill.id);
					var affected = skillFn(sourceCard, skill);
					if (skill.c && affected > 0) {
						skill.countdown = skill.c;
					}

					if (animations.areShown) {
						animations.drawField(field, null, null, turn, sourceCard);
					}
				}
			}
		}
	}

	function alwaysTrue() {
		return true;
	}
	
	function makeLivenessCheck(maybeUnit) {
		if (maybeUnit.isAlive) {
			return maybeUnit.isAlive.bind(maybeUnit);
		} else {
			return alwaysTrue;
		}
	}

	function doOnDeathSkills(dying, killer) {

		if (dying.ondeath_triggered) return; // Check to make sure we don't trigger this twice
		var skills = dying.onDeathSkills;
		var len = skills.length;
		if (len == 0) return;

		for (var i = 0; i < len; i++) {
			var skill = skills[i];
			onDeathSkills[skill.id](dying, killer, skill);

			if (animations.areShown) {
				animations.drawField(field, null, null, turn, dying);
			}
		}

		dying.ondeath_triggered = true;
	}

	var passiveSkills = ['backlash', 'counter', 'counterburn', 'counterpoison', 'armored', 'evade', 'stasis'];
	function requiresActiveTurn(skillName) {
		return passiveSkills.indexOf(skillName) === -1;
	}

	function backlash(attacker, defender) {
		if (attacker.isAssault() && defender.isAlive()) {
			var baseDamage = defender.backlash;
			var enhancement = unitInfo.getEnhancement(defender, 'backlash', baseDamage);
			doCounterDamage(attacker, defender, 'Backlash', baseDamage, enhancement);
		}
	}

	function checkShroud(unit) {
		if (unit.isActive() && unit.isUnjammed()) {
			return 0;
		} else {
			return (unit.stasis || 0);
		}
	}

	var activationSkills = {

		burnself: function burnself(sourceUnit, skill) {
			var scorch = skill.x;

			if (!sourceUnit.scorched) {
				sourceUnit.scorched = {
					amount: scorch,
					timer: 2
				};
			} else {
				sourceUnit.scorched.amount += scorch;
				sourceUnit.scorched.timer = 2;
			}
			if (debugLog.enabled) {
				debugLog.appendLines(log.name(sourceUnit) + ' inflicts scorch(' + scorch + ') on itself');
			}

			return 1;
		},
		// Scorch
		// - cone-shaped scorch
		scorchbreath: function scorchbreath(sourceUnit, skill) {
			return activationSkills.burn(sourceUnit, skill);
		},
		// Scorch
		// - Target must be an assault
		burn: function burn(sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var field_o_assaults = field[o].assaults;

			var targets;
			switch (skill.id) {
				case 'scorchbreath':
					var startKey = Math.max(0, sourceUnit.key - 1);
					var endKey = Math.min(field_o_assaults.length, sourceUnit.key + 2);
					targets = field_o_assaults.slice(startKey, endKey);
					break;
				case 'burnself':
					targets = [sourceUnit];
					break;
				default:
					targets = field_o_assaults.slice(sourceUnit.key, sourceUnit.key + 1);
					break;
			}
			if (!targets.length) return 0;

			var scorch = skill.x;
			var enhanced = unitInfo.getEnhancement(sourceUnit, 'burn', scorch);
			scorch += enhanced;

			var affected = 0;
			for (var i = 0; i < targets.length; i++) {
				var target = targets[i];

				if (!target.scorched) {
					target.scorched = {
						amount: scorch,
						timer: 2
					};
				} else {
					target.scorched.amount += scorch;
					target.scorched.timer = 2;
				}
				if (debugLog.enabled) {
					debugLog.appendLines(log.name(sourceUnit) + ' inflicts scorch(' + scorch + ') on ' + log.name(target));
				}

				affected++;
			}

			return affected;
		},

		// Protect (Barrier)
		// - Can target specific faction
		// - Targets allied assaults
		// - Can be enhanced
		protect_ice: function (sourceUnit, skill) {
			return activationSkills.protect(sourceUnit, skill, "barrier_ice");
		},
		protect_seafolk: function (sourceUnit, skill) {
			return activationSkills.protect(sourceUnit, skill, null, null, true);
		},
		evadebarrier: function (sourceUnit, skill) {
			return activationSkills.protect(sourceUnit, skill, "invisible", function (target, amount) {
				return ' and imbues it with invisible ' + amount;
			});
		},
		protect: function (sourceUnit, skill, additional, additionalDebug, onlyOnDelay) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);

			var protect = skill.x;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];

			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
					&& (!onlyOnDelay || !target.isActive())) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, protect);
			protect += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debugLog.enabled) {
						debugLog.appendLines(log.name(sourceUnit) + ' protects ' + log.name(target) + ' but it is nullified!');
					}
					continue;
				}

				affected++;

				var protect_amt = protect;
				if (!protect_amt) {
					var mult = skill.mult;
					if (!target.isActive()) {
						mult += (skill.on_delay_mult || 0);
					}
					protect_amt = Math.ceil(target.health * mult);
				}

				target.protected += protect_amt;
				if (additional) {
					target[additional] = (target[additional] || 0) + protect_amt;
				}
				if (debugLog.enabled) {
					if (enhanced) {
						debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
					}
					var line = log.name(sourceUnit) + ' barriers ' + log.name(target) + ' by ' + protect_amt;
					if (typeof additionalDebug === "function") {
						line += additionalDebug(target, protect_amt);
					}
					debugLog.appendLines(line);
				}
			}

			return affected;
		},

		// Heal
		// - Can target specific faction
		// - Targets allied damaged assaults
		// - Can be enhanced
		heal: function (sourceUnit, skill) {

			var p = getOwner(sourceUnit);

			var faction = skill.y;
			var heal = skill.x;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];

			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
					&& (all || target.isDamaged())) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, heal);
			heal += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' heals ' + log.name(target) + ' but it is nullified!');
					continue;
				}

				affected++;

				var heal_amt = heal;
				if (!heal_amt) {
					var mult = skill.mult;
					heal_amt = Math.ceil(target.health * mult);
				}

				if (heal_amt > target['health'] - target['health_left']) heal_amt = target['health'] - target['health_left'];
				target['health_left'] += heal_amt;
				if (debugLog.enabled) {
					if (enhanced) debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
					debugLog.appendLines(log.name(sourceUnit) + ' heals ' + log.name(target) + ' by ' + heal_amt);
				}
			}

			return affected;
		},

		// Strike (Bolt)
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Must calculate enfeeble/protect
		// - Can be enhanced
		poisonstrike: function (sourceUnit, skill, poison) {
			return activationSkills.strike(sourceUnit, skill, true);
		},
		strike: function (sourceUnit, skill, poison) {

			var o = getOpponent(sourceUnit);

			var strike = skill.x;
			var faction = skill.y;
			var all = skill.all;

			var field_x_assaults = field[o].assaults;

			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}

			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, strike);
			strike += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' bolts ' + log.name(target) + ' but it is invisible!');
					continue;
				}

				affected++;

				var strike_damage = strike;

				// Check Protect/Enfeeble
				var damageInfo = modifySkillDamage(target, strike_damage);
				strike_damage = damageInfo.damage;
				var shatter = damageInfo.shatter;

				var poisonDamage = 0;
				if (strike_damage > 0 && poison && target.isAlive()) {
					if (strike > target['poisoned']) {
						poisonDamage = strike;
						target['poisoned'] = poisonDamage;
					}
				}

				doDamage(sourceUnit, target, strike_damage, shatter, function (source, target, amount) {
					debugLog.appendLines('<u>(Strike: +' + skill.x);
					if (enhanced) debugLog.appendLines(' Enhance: +' + enhanced);
					debugLog.appendLines(damageInfo.echo);
					debugLog.appendLines(') = ' + amount + ' damage</u>');
					debugLog.appendLines(log.name(source) + ' bolts ' + log.name(target) + ' for ' + amount + ' damage');
					if (!target.isAlive()) {
						debugLog.appendLines(' and it dies');
					} else if (poisonDamage) {
						debugLog.appendLines(' and inflicts poison(' + poisonDamage + ') on it');
					}
					debugLog.appendLines('');
				});

				if (target.backlash) {
					backlash(sourceUnit, target);
				}
			}

			return affected;
		},

		// Intensify
		// - Can target specific faction
		// - Targets poisoned/scorched enemy assaults
		// - Can be evaded
		// - Can be enhanced
		intensify: function (sourceUnit, skill, poison) {

			var o = getOpponent(sourceUnit);

			var intensify = skill.x;
			var faction = skill.y;
			var all = skill.all;

			var field_x_assaults = field[o].assaults;

			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
					&& (target.scorched || target.poisoned)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}

			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, intensify);
			intensify += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				var intensifiedFields = (target.scorched ? "scorch" : "");
				intensifiedFields += (target.poisoned ? (intensifiedFields ? " and poison" : "poison") : "");

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' intensifies ' + intensifiedFields + ' on ' + log.name(target) + ' but it is invisible!');
					continue;
				}

				affected++;

				if (target.scorched) {
					target.scorched.amount += intensify;
				}
				if (target.poisoned) {
					target.poisoned += intensify;
				}

				if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' intensifies ' + intensifiedFields + ' on ' + log.name(target) + ' by ' + intensify);

				if (target.backlash) {
					backlash(sourceUnit, target);
				}
			}

			return affected;
		},

		// Ignite
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Can be enhanced
		ignite: function (sourceUnit, skill, poison) {

			var o = getOpponent(sourceUnit);

			var ignite = skill.x;
			var faction = skill.y;
			var all = skill.all;

			var field_x_assaults = field[o].assaults;

			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)) {
					targets.push(key);
				}
			}

			var doApplyDebuff = function doApplyDebuff(target, skillValue) {
				target.scorch(skillValue);
			};
			return applyDebuff(sourceUnit, skill, 'ignites', targets, field_x_assaults, doApplyDebuff);
		},

		// Jam (Freeze)
		// - Has cooldown timer (only fires every x turns)
		// - Can target specific faction
		// - Targets active_next_turn, unjammed enemy assaults
		// - Can be evaded
		// - If evaded, cooldown timer is not reset (tries again next turn)
		jamself: function jamself(sourceUnit, skill) {

			sourceUnit.jammed = true;
			sourceUnit.jammedSelf = true;
			if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' freezes itself');

			return 1;
		},
		jam: function jam(sourceUnit, skill) {

			var p = getOwner(sourceUnit);
			var o = getOpponent(sourceUnit);

			var all = skill.all;

			var field_x_assaults = field[o].assaults;

			var targets = [];

			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
				if (target.isAlive()
					&& (all || (target.isActiveNextTurn() && target.isUnjammed()))) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) {
				return 0;
			}

			// Check All
			if (!all) targets = chooseRandomTarget(targets);

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					// Missed - retry next turn
					skill.countdown = 0;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' freezes ' + log.name(target) + ' but it is invisible!');
					continue;
				}

				affected++;

				target.jammed = true;
				if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' freezes ' + log.name(target));

				if (target.backlash) {
					backlash(sourceUnit, target);
				}
			}

			return affected;
		},

		// Frostbreath
		// - Targets opposing enemy unit and any adjacent enemy units
		// - Can be evaded
		// - Must calculate enfeeble/protect
		// - Can be enhanced
		frost: function (sourceUnit, skill) {

			var p = getOwner(sourceUnit);
			var o = getOpponent(sourceUnit);

			var frost = skill.x;
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, frost);
			frost += enhanced;

			var all = skill.all;

			var field_x_assaults = field[o]['assaults'];

			var targets = [];

			var i = sourceUnit['key'] - 1;
			var end = i + 2;
			for (; i <= end; i++) {
				var target = field_x_assaults[i];
				if (target && target.isAlive()) {
					targets.push(i);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' breathes frost at ' + log.name(target) + ' but it is invisible!');
					continue;
				}

				affected++;

				var frost_damage = frost;

				// Check Protect/Enfeeble
				// Check Protect/Enfeeble
				var damageInfo = modifySkillDamage(target, frost_damage);
				frost_damage = damageInfo.damage;
				var shatter = damageInfo.shatter;

				doDamage(sourceUnit, target, frost_damage, shatter, function (source, target, amount) {
					debugLog.appendLines('<u>(Frostbreath: +' + skill.x);
					if (enhanced) debugLog.appendLines(' Enhance: +' + enhanced);
					debugLog.appendLines(damageInfo.echo);
					debugLog.appendLines(') = ' + amount + ' damage</u>');
					debugLog.appendLines(log.name(source) + ' breathes frost at ' + log.name(target) + ' for ' + amount + ' damage');
					debugLog.appendLines(!target.isAlive() ? ' and it dies' : '');
				});

				if (target.backlash) {
					backlash(sourceUnit, target);
				}
			}

			return affected;
		},

		heartseeker: function (sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var heartseeker = skill.x;

			var target = field[o].assaults[sourceUnit.key];

			// No Targets
			if (!target) return 0;

			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, heartseeker);
			heartseeker += enhanced;

			target.heartseeker += heartseeker;
			target.enfeebled += heartseeker;
			if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' inflicts heartseeker ' + heartseeker + ' on ' + log.name(target));

			return 1;
		},
		// Enfeeble (Hex)
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Can be enhanced
		enfeeble: function (sourceUnit, skill) {

			var faction = skill['y'];

			var o = getOpponent(sourceUnit);

			var field_x_assaults = field[o]['assaults'];

			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)) {
					targets.push(key);
				}
			}

			var doApplyDebuff = function(target, skillValue) {
				target.enfeebled += skillValue;
			};
			return applyDebuff(sourceUnit, skill, 'hexes', targets, field_x_assaults, doApplyDebuff);
		},

		// Weaken
		// - Can target specific faction
		// - Targets active_next_turn, unjammed, enemy assaults with attack > 0
		// - Can be evaded
		// - Can be enhanced
		weakenself: function (sourceUnit, skill) {
			return activationSkills.weaken(sourceUnit, skill);
		},
		weaken: function (sourceUnit, skill) {

			var faction = skill['y'];

			var o;
			switch (skill.id) {
				case 'weakenself':
					o = getOwner(sourceUnit);
					break;
				default:
					o = getOpponent(sourceUnit);
					break;
			}

			var all = skill.all;

			var field_x_assaults = field[o]['assaults'];

			var targets = [];
			var getTargets = function (include0Strength) {
				for (var key = 0, len = field_x_assaults.length; key < len; key++) {
					var target = field_x_assaults[key];
					if (target.isAlive() && target.isInFaction(faction)
						&& (all || (target.isActiveNextTurn() && target.isUnjammed() && (include0Strength || target.hasAttack())))) {
						targets.push(key);
					}
				}
			};
			getTargets(false);
			// Only target 0-strength units if there are no 1+ strength units left
			if (!targets.length) {
				getTargets(true);
			}

			var doApplyDebuff = function(target, skillValue) {
				target.attack_weaken += skillValue;
			};
			return applyDebuff(sourceUnit, skill, 'weakens', targets, field_x_assaults, doApplyDebuff);
		}
	};

	function applyDebuff(sourceUnit, skill, skillVerb, targetKeys, targetField, doApplyDebuff) {

		// No Targets
		if (!targetKeys.length) return 0;

		var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, skill.x);
		var skillValue = skill.x + enhanced;

		// Check All
		if (!skill.all) {
			targetKeys = chooseRandomTarget(targetKeys);
		}

		var affected = 0;
		for (var key = 0, len = targetKeys.length; key < len; key++) {
			var target = targetField[targetKeys[key]];

			// Check Evade
			if (target.invisible) {
				target.invisible--;
				if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' ' + skillVerb + ' ' + log.name(target) + ' but it is invisible!');
				continue;
			}

			affected++;

			doApplyDebuff(target, skillValue);
			if (debugLog.enabled) {
				if (enhanced) debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
				debugLog.appendLines(log.name(sourceUnit) + ' ' + skillVerb + ' ' + log.name(target) + ' by ' + skillValue);
			}

			if (target.backlash) {
				backlash(sourceUnit, target);
			}
		}

		return affected;
	}

	var earlyActivationSkills = {
		// Rally
		// - Targets self
		// - Can be enhanced
		// - Cannot be nullified
		enlarge: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);

			var rally = skill.x;
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, rally);
			rally += enhanced;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];

			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
					&& (all || (target.isUnjammed() && target.isActive()))) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				var rally_amt = rally;
				if (!rally_amt) {
					var mult = skill.mult;
					rally_amt = Math.ceil(target.attack * mult);
				}

				target.attack_rally += rally_amt;
				if (debugLog.enabled) {
					if (enhanced) debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
					debugLog.appendLines(log.name(sourceUnit) + ' enlarges ' + log.name(target) + ' by ' + rally_amt);
				}

				affected++;
			}

			return affected;
		},

		// Rally
		// - Can target specific faction
		// - Targets allied unjammed, active assaults
		// - Can be enhanced
		rally: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);

			var rally = skill.x;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];

			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];

				if (target.isAlive() && target.isInFaction(faction)
					&& (all || (target.isActive() && target.isUnjammed()))) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, rally);
			rally += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {

				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' empowers ' + log.name(target) + ' but it is nullified!');
					continue;
				}

				affected++;

				var rally_amt = rally;
				if (!rally_amt) {
					var mult = skill.mult;
					rally_amt = Math.ceil(target.attack * mult);
				}

				target.attack_rally += rally_amt;
				if (debugLog.enabled) {
					if (enhanced) debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
					debugLog.appendLines(log.name(sourceUnit) + ' empowers ' + log.name(target) + ' by ' + rally_amt);
				}
			}

			return affected;
		},

		// Legion
		// - Targets specific faction
		// - Targets allied adjacent unjammed, active assaults
		// - Can be enhanced?
		legion: function (sourceUnit, skill) {

			var p = getOwner(sourceUnit);
			var field_p_assaults = field[p]['assaults'];

			var rally = skill.x;
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, rally);
			rally += enhanced;

			var faction = skill['y'];

			var target_key = sourceUnit['key'] - 1;
			var len = target_key + 2;
			if (target_key < 0) target_key += 2;

			var affected = 0;

			while (target_key <= len) {
				// Check left
				var target = field_p_assaults[target_key];
				if (target && target.isActive() && target.isInFaction(faction)) {
					// Check Nullify
					if (target.nullified) {
						target.nullified--;
						if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' activates legion and empowers ' + log.name(target) + ' but it is nullified!');
					} else {
						affected++;
						target.attack_rally += rally;
						if (debugLog.enabled) {
							if (enhanced) debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
							debugLog.appendLines(log.name(sourceUnit) + ' activates legion and empowers ' + log.name(target) + ' by ' + rally);
						}
					}
				}
				target_key += 2;
			}

			return affected;
		},

		// Fervor
		// - Targets self for each adjacent unjammed, active assault in specific faction
		// - Can be enhanced?
		fervor: function (sourceUnit, skill) {

			var p = getOwner(sourceUnit);
			var field_p_assaults = field[p]['assaults'];

			var rally = skill.x;
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, rally);
			rally += enhanced;

			var faction = skill['y'];

			var fervorAmount = 0;

			var target_key = sourceUnit['key'] - 1;
			var len = target_key + 2;
			if (target_key < 0) target_key += 2;

			while (target_key <= len) {
				var target = field_p_assaults[target_key];
				if (target && target.isInFaction(faction)) {
					fervorAmount += rally;
				}
				target_key += 2;
			}

			if (fervorAmount) {
				sourceUnit['attack_rally'] += fervorAmount;
				if (debugLog.enabled) {
					if (enhanced) debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
					debugLog.appendLines(log.name(sourceUnit) + ' activates fervor for ' + fervorAmount);
				}
				return 1;
			} else {
				return 0;
			}
		},

		// Barrage (Barrage X => X Bolt 1)
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Must calculate enfeeble/protect
		// - Can be enhanced
		barrage: function (sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var barrages = skill.x;
			var faction = skill.y;
			var all = skill.all;

			var field_x_assaults = field[o].assaults;

			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, barrages);
			barrages += enhanced;
			for (var i = 0; i < barrages; i++) {
				var targets = [];
				for (var key = 0, len = field_x_assaults.length; key < len; key++) {
					var target = field_x_assaults[key];
					if (target.isAlive() && target.isInFaction(faction)) {
						targets.push(key);
					}
				}

				// No Targets
				if (!targets.length) return 0;

				// Check All
				if (!all) {
					targets = chooseRandomTarget(targets);
				}

				var affected = 0;

				var strike = 1;
				for (var key = 0, len = targets.length; key < len; key++) {
					var target = field_x_assaults[targets[key]];

					// Check Evade
					if (target.invisible) {
						target.invisible--;
						if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' throws a bomb at ' + log.name(target) + ' but it is invisible!');
						continue;
					}

					affected++;

					var strike_damage = strike;

					// Check Protect/Enfeeble
					var damageInfo = modifySkillDamage(target, strike_damage, { enfeeble: true });
					strike_damage = damageInfo.damage;
					var shatter = damageInfo.shatter;

					doDamage(sourceUnit, target, strike_damage, shatter, function (source, target, amount) {
						debugLog.appendLines('<u>(Barrage: +1');
						debugLog.appendLines(damageInfo.echo);
						debugLog.appendLines(') = ' + amount + ' damage</u>');
						debugLog.appendLines(log.name(source) + ' throws a bomb at ' + log.name(target) + ' for ' + amount + ' damage');
						debugLog.appendLines(!target.isAlive() ? ' and it dies' : '');
					});
				}
			}

			return affected;
		},

		// Enhance
		// - Can target specific faction
		// - Targets allied, units
		// - Target must be active this turn (for activation skills only)
		// - Target must not be frozen (for activation skills only)
		// - Target must have specific "enhanceable skill"
		enhance: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);
			var o = getOpponent(sourceUnit);

			var x = skill.x;
			var faction = skill.y;
			var s = skill.s;
			var mult = skill.mult;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];
			var require_active_turn = requiresActiveTurn(s);
			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
					&& (all || !require_active_turn || (target.isActive() && target.isUnjammed()))
					&& target.hasSkill(s)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) {
				return 0;
			}

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' enhances ' + log.name(target) + ' but it is nullified!');
					continue;
				}

				affected++;

				var enhancements = target.enhanced;
				if (x > 0) {
					enhancements[s] = (enhancements[s] || 0) + x;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' enhances ' + s + ' of ' + log.name(target, false) + ' by ' + x);
				} else if (mult > 0) {
					// temporarily use negatives for multiplier
					enhancements[s] = -mult;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' enhances ' + s + ' of ' + log.name(target, false) + ' by ' + (mult * 100) + '%');
				}
			}

			return affected;
		},

		// Enrage
		// - Can target specific faction
		// - Targets allied assaults
		// - Can be enhanced
		enrage: function (sourceUnit, skill) {

			var p = getOwner(sourceUnit);

			var faction = skill.y;
			var enrage = skill.x;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];

			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, enrage);
			enrage += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];
				var amount = enrage;

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' enrages ' + log.name(target) + ' but it is nullified!');
					continue;
				}

				affected++;

				if (skill.mult) {
					amount = Math.ceil(skill.mult * target.health);
				}

				target['enraged'] += amount;
				if (debugLog.enabled) {
					if (enhanced) debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
					debugLog.appendLines(log.name(sourceUnit) + ' enrages ' + log.name(target) + ' by ' + amount);
				}
			}

			return affected;
		},

		// Enhance
		// - Can target specific faction
		// - Targets allied, units
		// - Target must be active this turn (for activation skills only)
		// - Target must not be frozen (for activation skills only)
		// - Target must have specific "enhanceable skill" ("all" versions aren't counted)
		imbue: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);
			var o = getOpponent(sourceUnit);

			var x = skill.x;
			var c = skill['c'];
			var s = skill['s'];
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];
			var require_active_turn = requiresActiveTurn(s);
			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
					&& (all || !require_active_turn || (target.isActive() && target.isUnjammed()))) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) {
				return 0;
			}

			var skill = {
				id: s,
				x: x
			};

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' enhances ' + log.name(target) + ' but it is nullified!');
					continue;
				}

				affected++;


				if (target.hasSkill(s)) {
					var enhancements = target.enhanced;
					enhancements[s] = (enhancements[s] || 0) + x;
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' imbues ' + log.name(target, false) + ' existing ' + log.skill(skill) + ' by ' + x);
				} else {
					target.imbue(skill);
					if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' imbues ' + log.name(target, false) + ' with ' + log.skill(skill));
				}
			}

			return affected;
		},

		mark: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);
			var o = getOpponent(sourceUnit);

			var mark = skill.x;

			var all = skill.all;

			var field_x_assaults = field[o]['assaults'];

			var markTarget = sourceUnit.mark_target;
			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)) {
					// Can only mark one target
					if (target.uid === markTarget) {
						targets = [key];
						break;
					}
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, mark);
			mark += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				affected++;

				target.enfeebled += mark;
				sourceUnit.mark_target = target.uid;

				if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + ' marks ' + log.name(target) + ' by ' + mark);

				// Set countdown so Mark can't trigger twice on dual-strike turn
				skill.countdown = 1;
			}

			return affected;
		}
	};

	var onPlaySkills = {

		ambush: function (sourceUnit, target, skill) {

			var x = skill.x;
			var base = skill.base;
			var mult = skill.mult;

			var damage = x;
			if (!damage) {
				var mult = skill.mult;
				damage = Math.ceil(target[base] * mult);
			}

			doDamage(sourceUnit, target, damage, null, function (source, target, amount) {
				debugLog.appendLines(log.name(source) + ' ambushes ' + log.name(target) + ' for ' + amount + ' damage');
				debugLog.appendLines(!target.isAlive() ? ' and it dies' : '');
			});

			return 1;
		},

		slow: function (sourceUnit, target, skill) {

			var x = skill.x;
			var base = skill.base;
			var mult = skill.mult;

			var slow = x;
			if (!slow) {
				var mult = skill.mult;
				slow = Math.ceil(target[base] * mult);
			}

			target.timer += slow;

			if (debugLog.enabled) {
				debugLog.appendLines(log.name(sourceUnit) + ' slows ' + log.name(target) + ' by ' + slow);
			}

			return 1;
		}
	};

	var onDeathSkills = {
		unearth: function (dying, killer, skill) {

			// Only nontoken creatures can use unearth
			if (dying.isToken) {
				return;
			}

			// Get base card
			var unearthedUnit = unitInfo.create((skill.card || dying.id), (skill.level || skill.x));
			var unearthedCard = cardApi.byIdWithBgeApplied(unearthedUnit, null, true);
			unearthedCard.isToken = true;

			var mult = skill.mult;
			if (mult) {
				// Unearthed card has scaled stats based on original card
				unearthedCard.attack = Math.floor(dying.attack * mult);
				unearthedCard.health = Math.floor(dying.health * mult);
			}

			playCard(unearthedCard, dying.owner, true);

			if (debugLog.enabled) {
				debugLog.appendLines(log.name(unearthedCard) + ' is unearthed</br>');
			}

			return 1;
		},

		reanimate: function (dying, killer, skill) {

			// Only trigger once
			if (dying.reanimated) {
				return 0;
			}

			dying.health_left = skill.x;
			dying.reanimated = true;

			if (debugLog.enabled) {
				debugLog.appendLines(' and is reanimated</br>');
			}

			return 1;
		}
	};

	// Activation Skills
	// - Must traverse through skills from top to bottom
	function activation_skills(sourceUnit) {

		if (sourceUnit.silenced) {
			if (debugLog.enabled) debugLog.appendLines(log.name(sourceUnit) + " is silenced and cannot use skills</br>");
			return;
		}

		var skills = sourceUnit.skill;

		var isAlive = makeLivenessCheck(sourceUnit);
		for (var i = 0, len = skills.length; i < len && isAlive(); i++) {
			var skill = skills[i];

			if (skill.countdown) {
				continue;
			}

			// Delegate to skill function
			var skillFn = getActivatedSkill(activationSkills, skill.id);
			var affected = skillFn(sourceUnit, skill);

			if (skill.c && affected > 0) {
				skill.countdown = skill.c;
			}

			if (animations.areShown) {
				animations.drawField(field, null, null, turn, sourceUnit);
			}
		}
	}

	function initializeBattle() {

		SIMULATOR.simulation_turns = 0;

		// Set up empty decks
		var deck = {
			cpu: {
				deck: []
			},
			player: {
				deck: []
			}
		};

		SIMULATOR.deck = deck;

		// Set up empty field
		var field = {
			cpu: {
				assaults: []
			},
			player: {
				assaults: []
			}
		};
		SIMULATOR.field = field;

		// Load player deck
		if (playerCardsCached) {
			deck['player'] = loadDeck.copyDeck(playerCardsCached);
		}

		// Load enemy deck
		if (getmission && missionlevel > 1 && missionlevel < 7) {
			cpuDeckCached = loadDeck.mission(getmission, missionlevel);
			cpuCardsCached = loadDeck.getDeckCards(cpuDeckCached, 'cpu');
		} else if (getraid) {
			cpuDeckCached = loadDeck.raid(getraid, raidlevel);
			cpuCardsCached = loadDeck.getDeckCards(cpuDeckCached, 'cpu');
		}
		if (cpuCardsCached) {
			deck['cpu'] = loadDeck.copyDeck(cpuCardsCached);
		}

		// Set up deck order priority reference
		if (getordered && !getexactorder) deck.player.ordered = loadDeck.copyCardList(deck.player.deck);
		if (getordered2 && !getexactorder2) deck.cpu.ordered = loadDeck.copyCardList(deck.cpu.deck);

		deck.player.chooseCard = (user_controlled ? chooseCardUserManually  // User_controlled mode has the player choose a card manually
			: getordered ? chooseCardOrdered           // Ordered mode tries to pick the card closest to the specified ordering
				: chooseCardRandomly);                     // Player AI falls back on picking a random card

		deck.cpu.chooseCard = (/*livePvP ? waitForOpponent                  // If this is "Live PvP" - wait for opponent to choose a card
								: */getordered2 ? chooseCardOrdered           // Ordered mode tries to pick the card closest to the specified ordering
				: config.pvpAI ? chooseCardByPoints                // PvP defenders have a special algorithm for determining which card to play
					: getexactorder2 ? chooseCardRandomly       // If deck is not shuffled, but we're not playing "ordered mode", pick a random card from hand
						: chooseFirstCard);                         // If none of the other options are true, this is the standard PvE AI and it just picks the first card in hand
	}

	function shuffle(list) {
		var i = list.length, j, tempi, tempj;
		if (i == 0) return false;
		while (--i) {
			j = ~~(Math.random() * (i + 1));
			tempi = list[i];
			tempj = list[j];
			list[i] = tempj;
			list[j] = tempi;
		}
	}

	// Simulate one game
	function simulate() {
		simulating = true;

		initializeBattle();

		// Shuffle decks
		if (getexactorder) {
			if (!getordered) {
				deck.player.shuffleHand = true;
			}
		} else {
			shuffle(deck.player.deck);
		}
		if (getexactorder2) {
			if (!getordered2) {
				deck.cpu.shuffleHand = true;
			}
		} else {
			shuffle(deck.cpu.deck);
		}

		setupField(field);

		if (getsiege) {
			var towerBGE = BATTLEGROUNDS[tower_type];
			var tower = towerBGE.effect[tower_level];
			if (tower) {
				tower = unitInfo.create(tower.id, tower.level);
				var towerCard = cardApi.byIdWithBgeApplied(tower);
				var uid = 150;
				towerCard.uid = uid;
				field.uids[uid] = towerCard;
				playCard(towerCard, 'cpu', -1, true);
			}
		}

		return performTurns(0);
	}

	function setupDecks() {
		// Cache decks where possible
		// Load player deck
		if (getdeck) {
			playerDeckCached = base64.decodeHash(getdeck);
		} else {
			playerDeckCached = loadDeck.defaultDeck();
		}
		playerCardsCached = loadDeck.getDeckCards(playerDeckCached, 'player');

		// Load enemy deck
		config.pvpAI = true;
		if (getdeck2) {
			cpuDeckCached = base64.decodeHash(getdeck2);
			if (getmission) config.pvpAI = false;
		} else if (getmission) {
			cpuDeckCached = loadDeck.mission(getmission, missionlevel);
			config.pvpAI = false;    // PvE decks do not use "Smart AI"
		} else if (getraid) {
			cpuDeckCached = loadDeck.raid(getraid, raidlevel);
			config.pvpAI = false;    // PvE decks do not use "Smart AI"
		} else {
			cpuDeckCached = loadDeck.defaultDeck();
		}
		cpuCardsCached = loadDeck.getDeckCards(cpuDeckCached, 'cpu');
	}

	function setupField(field) {
		// Initialize Commander on the fields and set uids
		var uids = field.uids = {};
		['player', 'cpu'].forEach(function (player) {
			var pDeck = deck[player];
			var cards = pDeck.deck;
			var uidBase = (player === 'player' ? 1 : 101);
			for (var i = 0; i < cards.length; i++) {
				var uid = uidBase + i;
				var card = cards[i];
				card.owner = player;
				card.played = false;
				card.uid = uid;
				uids[uid] = card;
			}

			var commander = pDeck.commander;
			commander.owner = player;
			commander.health_left = commander.health;
			if (!commander.reusableSkills) commander.resetTimers();

			var uid = (player === 'player' ? -1 : -2);
			commander.uid = uid;
			uids[uid] = commander;
			field[player].commander = commander;
		});
	}

	SIMULATOR.pause = false;

	function onCardChosen(turn, drawCards) {
		animations.clearFrames();
		performTurns(turn, drawCards);
	}

	function performTurns(turn, drawCards) {
		if (SIMULATOR.pause) {
			SIMULATOR.pause = false;
			return false;
		}
		var done = performTurnsInner(turn, drawCards);
		if (done && user_controlled) {
			simController.debug_end();
		}
		return done;
	}
	SIMULATOR.performTurns = performTurns;

	function performTurnsInner(turn, drawCards) {
		// Set up players
		var first_player, second_player;
		if (surge) {
			first_player = 'cpu';
			second_player = 'player';
		} else {
			first_player = 'player';
			second_player = 'cpu';
		}

		if (turn > 0) {
			if (livePvP) {
				if (!field.player.commander.isAlive() || !field.cpu.commander.isAlive()) {
					simulating = false;
					return true;
				}
			}
			// Retry this turn - don't bother doing setup all over again
			if (!performTurn(turn, field, first_player, second_player, drawCards)) {
				// Try this turn again
				return false;
			}
			if (!field.player.commander.isAlive() || !field.cpu.commander.isAlive()) {
				simulating = false;
				return true;
			}
		} else if (!surge && SIMULATOR.sendBattleUpdate) {
			SIMULATOR.sendBattleUpdate(turn);
		}

		turn++;
		// Continue simulation
		for (; turn <= max_turns + 1; turn++) {
			if (turn === max_turns + 1) {
				// Ended in draw
				simulating = false;
				return true;
			}

			var setup = setup_turn(turn, first_player, second_player, field);

			if (!performTurn(turn, field, first_player, second_player, true)) {
				// Try this turn again
				return false;
			} else if (!field.player.commander.isAlive() || !field.cpu.commander.isAlive()) {
				simulating = false;
				if (debugLog.enabled) debugLog.appendLines('<u>Turn ' + turn + ' ends</u><br><br></div>');
				return true;
			}
		}
		simulating = false;
		return true;
	}

	function performTurn(turn, field, first_player, second_player, drawCards) {
		if (turn % 2) {
			var p = first_player;
			var o = second_player;
		} else {
			var p = second_player;
			var o = first_player;
		}

		closeDiv = false;
		if (!choose_card(p, turn, drawCards)) {
			return false;
		} else {
			play_turn(p, o, field, turn);
			return true;
		}
	}

	function debugDraw(commander, deck, i) {
		var card = deck[i];
		if (card) {
			return commander + ' draws ' + log.name(card, true) + '<br/>';
		} else {
			return '';
		}
	}

	function setup_turn(turn, first_player, second_player, field) {
		simulation_turns = turn;

		choice = undefined;

		if (turn % 2) {
			var p = first_player;
			var o = second_player;
		} else {
			var p = second_player;
			var o = first_player;
		}

		if (debugLog.enabled) {
			var commander_p = log.name(field[p]['commander']);
			var deck_p = deck[p].deck;
			debugLog.appendLines('<div id="turn_"' + turn + ' class="turn-info"><hr/><br/><u>Turn ' + turn + ' begins for ' + commander_p + '</u>');

			if (turn <= 2) {
				debugLog.appendLines(debugDraw(commander_p, deck_p, 0));
				debugLog.appendLines(debugDraw(commander_p, deck_p, 1));
			}
			debugLog.appendLines(debugDraw(commander_p, deck_p, 2));
		}

		var field_p = field[p];
		var field_o = field[o];
		var field_p_assaults = field_p.assaults;
		var field_o_assaults = field_o.assaults;

		// countdown any skills with timers
		doCountDowns(field_p.commander);

		// Count down timer on your field
		// Remove from your field: Enfeeble, Protect
		for (var i = 0, len = field_p_assaults.length; i < len; i++) {
			var current_assault = field_p_assaults[i];

			if (current_assault.timer > 0) {
				if (turn !== 3 || !tournament) {
					current_assault.timer--;
					if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' reduces its timer');
				}
			}

			// Check valor
			if (current_assault.valor) {
				var enemy = field_o_assaults[i];
				if (enemy && current_assault.adjustedAttack() < enemy.adjustedAttack()) {
					current_assault.attack_valor += current_assault.valor;
					if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' activates valor, boosting its attack by ' + current_assault.valor);
				} else if (debugLog.enabled) {
					debugLog.appendLines(log.name(current_assault) + ' activates valor but ');
					if (!enemy) {
						debugLog.appendLines('there is no opposing enemy.');
					} else {
						debugLog.appendLines('enemy is not strong enough.');
					}
				}
			}

			current_assault.enfeebled = current_assault.envenomed + current_assault.heartseeker;
			current_assault.enraged = 0;
			current_assault.invisible = 0;
			current_assault.protected = 0;
			current_assault.barrier_ice = 0;
			current_assault.warded = 0;
			current_assault.enhanced = {};
			current_assault.removeImbue();

			// countdown any skills with timers
			doCountDowns(current_assault);
		}
	}

	function choose_card(p, turn, drawCards) {

		var deck_p = deck[p];
		var deck_p_deck = deck_p.deck;
		var deck_p_ordered = deck_p['ordered'];
		var isOrdered = (p == 'player' ? getordered : getordered2);

		if (livePvP && p === 'cpu' && drawCards) {
			waitForOpponent(p, deck_p_deck, deck_p_ordered, turn, drawCards);
			return false;
		} else if (deck_p_deck[0]) {
			// Deck not empty yet
			SIMULATOR.waiting = false;
			var card_picked = 0;

			if (deck_p_deck.length == 1) {
				card_picked = chooseFirstCard(p, deck_p_deck, deck_p_ordered, turn, drawCards);
			} else {
				for (var i = 0; i < deck_p_deck.length; i++) {
					var card = deck_p_deck[i];
					if (card.trap) {
						playCard(card.trap, p, turn);
						card.trap = false;
					}
					if (i === 2) break;
				}
				card_picked = deck_p.chooseCard(p, deck_p_deck, deck_p_ordered, turn, drawCards);
			}

			if (card_picked < 0) return false;

			playCard(deck_p_deck[card_picked], p, turn);

			removeFromDeck(deck_p_deck, card_picked);
		}
		return true;
	}

	function removeFromDeck(deck, index) {
		var key = index;
		var len = deck.length - 1;
		while (key < len) {
			deck[key] = deck[++key];
		}
		deck.length = key;

	}

	function waitForOpponent(p, shuffledDeck, orderedDeck, turn, drawCards) {

		SIMULATOR.waiting = true;
		closeDiv = true;

		if (drawCards) {
			ui.hideTable();
			ui.displayTurns();
			animations.drawField(field, null, performTurns, turn);
			SIMULATOR.sendBattleUpdate(turn);
		}

		return -1;
	}
	SIMULATOR.waitForOpponent = waitForOpponent;

	function chooseCardUserManually(p, shuffledDeck, orderedDeck, turn, drawCards) {
		// Prepare 3-card hand
		var hand = shuffledDeck.slice(0, 3);
		closeDiv = true;
		var cardsInHand = [];
		var drawableHand = [];
		for (var handIdx = 0, hand_len = hand.length; handIdx < hand_len; handIdx++) {
			var card = hand[handIdx];
			var text = handIdx + ": " + card['name'];
			if (card.maxLevel > 1) text += '{' + card.level + '/' + card.maxLevel + '}';
			cardsInHand.push(text);
			drawableHand.push(card);
		}
		if (drawCards) {
			ui.hideTable();
			ui.displayTurns();
			animations.drawField(field, drawableHand, onCardChosen, turn);
		}
		if (choice === undefined) {
			return -1;

		} else {
			var card_picked = choice;
			if (!card_picked) card_picked = 0;
			return card_picked;
		}
	}

	function chooseCardOrdered(p, shuffledDeck, orderedDeck, turn, drawCards) {
		// If deck isn't shuffled, just play the first card
		if (typeof orderedDeck === "undefined") {
			return 0;
		}

		// Prepare 3-card hand
		var hand = shuffledDeck.slice(0, 3);

		// Play highest priority card
		var played = false;
		for (var orderIdx = 0, deck_len = orderedDeck.length; orderIdx < deck_len; orderIdx++) {
			var desiredCard = orderedDeck[orderIdx];

			// Get advanced priority
			var priority_id = desiredCard.priority;

			var samePriority = -1;
			var cardInHand;
			for (var handIdx = 0, hand_len = hand.length; handIdx < hand_len; handIdx++) {
				cardInHand = hand[handIdx];
				var b_priority = cardInHand.priority;

				// If this is the exact card at this spot
				if (unitInfo.areEqual(desiredCard, cardInHand)) {
					played = true;
					break;
				}
				// Compare advanced priority field
				else if (priority_id > 0) {
					if (priority_id == b_priority) {
						samePriority = handIdx;
					}
				}
			}
			// If we didnt' find exact card, but found one of the same priority, pick that one
			if (!played && samePriority >= 0) {
				played = true;
				handIdx = samePriority;
				cardInHand = hand[handIdx];
			}
			// If we found the desired card, play it, otherwise move on to the next desired card
			if (played) {
				for (var len = orderedDeck.length - 1; orderIdx < len; orderIdx++) {
					orderedDeck[orderIdx] = orderedDeck[orderIdx + 1];
				}
				orderedDeck.length = orderIdx;
				return handIdx;
			}
		}
		return -1;
	}

	function chooseCardRandomly(p, shuffledDeck, orderedDeck, turn, drawCards) {
		// Prepare 3-card hand
		var hand = shuffledDeck.slice(0, 3);

		var card_picked = (~~(Math.random() * hand.length));
		return card_picked;
	}

	function chooseCardByPoints(p, shuffledDeck, orderedDeck, turn, drawCards) {
		// Prepare 3-card hand
		var hand = shuffledDeck.slice(0, 3);

		// Play card in hand with most upgrade points (first card is picked in the case of ties)
		var card_picked = -1;
		var bestRank = -1;
		for (var i = 0; i < hand.length; i++) {
			var card = hand[i];
			var rank = getCardRanking(card);
			if (rank > bestRank) {
				bestRank = rank;
				card_picked = i;
			}
		}
		return card_picked;
	}

	function chooseFirstCard(p, shuffledDeck, orderedDeck, turn, drawCards) {
		return 0;
	}

	function getCardRanking(card) {
		var cardID = card.id.toString();
		// Each rarity level is worth 6 points
		var rarity = parseInt(card.rarity) * 6;
		// Each fusion is worth half of a rarity
		var fusion = (cardID.length > 4 ? parseInt(cardID[0]) : 0) * 3;
		// Subtract a point for every missing upgrade level
		var level = parseInt(card.level) - parseInt(card.maxLevel);

		var ranking = rarity + fusion + level;

		return ranking;
	}

	function play_turn(p, o, field, turn) {

		var field_p = field[p];
		var field_p_commander = field_p['commander'];
		var field_p_assaults = field_p['assaults'];

		var field_o = field[o];
		var field_o_commander = field_o['commander'];
		var field_o_assaults = field_o['assaults'];

		// Activate battleground effects
		for (var i = 0; i < battlegrounds.onTurn.length; i++) {
			var battleground = battlegrounds.onTurn[i];
			if (battleground.enemy_only && p !== 'cpu') continue;
			if (battleground.ally_only && p !== 'player') continue;
			battleground.owner = p;
			doEarlyActivationSkills(battleground);
			activation_skills(battleground);
		}

		// Do Commander Early Activation Skills
		doEarlyActivationSkills(field_p.commander);

		// Set invisibile/ward/shrouded after enhance has had a chance to fire
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {
			var current_assault = field_p_assaults[key];
			setPassiveStatus(current_assault, 'evade', 'invisible');
			setPassiveStatus(current_assault, 'absorb', 'warded');
		}

		// Do Unit Early Activation Skills
		doEarlyActivations(field_p);

		// Commander
		// - activation skills after units do early activation skills
		activation_skills(field_p_commander);

		// Assaults
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {

			var current_assault = field_p_assaults[key];

			if (!current_assault.isAlive()) {
				continue;
			}

			// Check Timer
			if (!current_assault.isActive()) {
				continue;
			}

			// Check jammed ("frozen")
			if (current_assault['jammed']) {
				if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' is frozen and cannot attack');
				continue;
			}

			var activations = 1;
			if (current_assault.dualstrike_triggered) {
				activations++;
				if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' activates dualstrike');
			}

			for (; activations > 0; activations--) {

				// Activation skills
				activation_skills(current_assault);

				// See if unit died from Backlash/Iceshatter
				if (!current_assault.isAlive()) {
					continue;
				}

				// Check attack
				// - check rally and weaken
				if (!current_assault.hasAttack()) {
					if (debugLog.enabled && current_assault.permanentAttack() > 0) debugLog.appendLines(log.name(current_assault) + ' is weakened and cannot attack');
					continue;
				}

				doAttack(current_assault, field_o_assaults, field_o_commander);

				// WINNING CONDITION
				if (!field_o_commander.isAlive() || !field_p_commander.isAlive()) {
					return;
				}

				// If died from counter, make sure dualstrike doesn't do make it swing again!
				if (!current_assault.isAlive()) {
					// This assault is already dead and can't do anything!
					break;
				}

			} // -- END ACTIVATIONS --

			// -- END ATTACK SEQUENCE --
		}
		// End of Assaults

		// Remove from your field: Chaos, Jam, Enfeeble, Rally, Weaken, Enhance, Nullify
		// Process Scorch, Poison, and Corrosion
		processDOTs(field_p_assaults);

		// Dead cards are removed from both fields. Cards on both fields all shift over to the left if there are any gaps.
		removeDead();

		if (debugLog.enabled) debugLog.appendLines('<u>Turn ' + turn + ' ends</u><br><br></div>');
	}

	function setPassiveStatus(assault, skillName, statusName) {
		var statusValue = 0;

		if (assault[skillName]) {
			statusValue = assault[skillName];
			var enhanced = unitInfo.getEnhancement(assault, skillName, statusValue);
			statusValue += enhanced;
		}

		assault[statusName] = statusValue;
	}

	function modifySkillDamage(target, damage, exclusions) {
		// Check Protect/Enfeeble
		exclusions = (exclusions || {});
		var enfeeble = (exclusions.enfeeble ? 0 : (target.enfeebled || 0));
		var shrouded = (exclusions.stasis ? 0 : checkShroud(target));
		var protect = (exclusions.protect ? 0 : (target.protected || 0));
		var warded = (exclusions.ward ? 0 : (target.warded || 0));

		damage += enfeeble - shrouded;
		var shatter = false;
		if (warded) {
			damage -= applyDamageReduction(target, 'warded', damage);
		}
		if (protect) {
			damage -= applyDamageReduction(target, 'protected', damage);
			if (target.protected == 0) {
				shatter = target.barrier_ice;
			}
		}
		if (shrouded) {
			damage -= shrouded;
		}

		var echo = '';
		if (debugLog.enabled) {
			if (enfeeble) debugLog.appendLines(' Enfeeble: +' + enfeeble);
			if (shrouded) debugLog.appendLines(' Stasis: -' + shrouded);
			if (protect) debugLog.appendLines(' Barrier: -' + protect);
			if (warded) debugLog.appendLines(' Ward: -' + warded);
		}

		if (damage < 0) {
			damage = 0;
		}

		return {
			damage: damage,
			shatter: shatter,
			echo: echo
		};
	}

	function applyDamageReduction(target, statusName, damage) {
		var statusValue = target[statusName];
		if (damage >= statusValue) {
			target[statusName] = 0;
			return statusValue;
		} else {
			target[statusName] -= damage;
			return damage;
		}
	}

	function doCountDowns(unit) {
		doSkillCountDowns(unit, unit.skill);
		doSkillCountDowns(unit, unit.earlyActivationSkills);

		var dualStrike = unit.flurry;
		if (dualStrike && dualStrike.countdown) {
			dualStrike.countdown--;

			if (debugLog.enabled) {
				if (dualStrike.countdown) {
					debugLog.appendLines(log.name(unit) + ' charges  dualstrike (ready in ' + dualStrike.countdown + ' turns)');
				} else {
					debugLog.appendLines(log.name(unit) + ' readies dualstrike');
				}
			}
		}
	}

	function doSkillCountDowns(unit, skills) {
		for (var i = 0, len = skills.length; i < len; i++) {
			var skill = skills[i];
			if (skill.countdown) {
				skill.countdown--;
				if (debugLog.enabled) {
					if (skill.countdown) {
						debugLog.appendLines(log.name(unit) + ' charges ' + skillApi.nameFromId(skill.id) + ' (ready in ' + skill.countdown + ' turns)');
					} else {
						debugLog.appendLines(log.name(unit) + ' readies ' + skillApi.nameFromId(skill.id));
					}
				}
			}
		}
	}

	function processDOTs(field_p_assaults) {

		for (var key = 0, len = field_p_assaults.length; key < len; key++) {
			var current_assault = field_p_assaults[key];

			// Make sure jam-self doesn't wear off at end of turn it was applied
			if (current_assault.jammedSelf) {
				current_assault.jammedSelf = false;
			} else {
				current_assault.jammed = false;
			}
			current_assault.attack_rally = 0;
			current_assault.attack_weaken = 0;
			current_assault.nullified = 0;
			current_assault.dualstrike_triggered = false;
			current_assault.silenced = false;

			// Regenerate
			if (current_assault.regenerate && current_assault.isDamaged()) {

				var regen_health = current_assault.regenerate;
				var enhanced = unitInfo.getEnhancement(current_assault, 'regenerate', regen_health);
				regen_health += enhanced;
				var healthMissing = current_assault.health - current_assault.health_left;
				if (regen_health >= healthMissing) {
					regen_health = healthMissing;
				}

				current_assault.health_left += regen_health;
				if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' regenerates ' + regen_health + ' health');
			}

			// Poison
			var amount = current_assault.poisoned;
			if (amount) {
				var warded = current_assault.warded;
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
				}
				doDamage(null, current_assault, amount, null, function (source, target, amount) {
					debugLog.appendLines(log.name(target) + ' takes ' + amount);
					if (warded) debugLog.appendLines(' (Poison: +' + current_assault.poisoned + ' Ward: -' + warded + ')');
					debugLog.appendLines(' poison damage');
					debugLog.appendLines(!target.isAlive() ? ' and it dies' : '');
				});
			}

			// Venom
			var amount = current_assault.envenomed;
			if (amount) {
				var warded = current_assault.warded;
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
				}
				doDamage(null, current_assault, amount, null, function (source, target, amount) {
					debugLog.appendLines(log.name(target) + ' takes ' + amount);
					if (warded) debugLog.appendLines(' (Venom: +' + current_assault.envenomed + ' Ward: -' + warded + ')');
					debugLog.appendLines(' venom damage');
					debugLog.appendLines(!target.isAlive() ? ' and it dies' : '');
				});
			}

			// Scorch
			var scorch = current_assault.scorched;
			if (scorch) {
				amount = scorch.amount;
				var warded = current_assault.warded;
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
				}
				doDamage(null, current_assault, amount, null, function (source, target, amount) {
					debugLog.appendLines(log.name(target) + ' takes ' + amount);
					if (warded) debugLog.appendLines(' (Scorch: +' + scorch.amount + ' Ward: -' + warded + ')');
					debugLog.appendLines(' scorch damage');
					if (!target.isAlive()) debugLog.appendLines(' and it dies');
					else if (!target.scorched) debugLog.appendLines(' and scorch wears off');
					debugLog.appendLines('');
				});

				if (scorch['timer'] > 1) {
					scorch['timer']--;
				} else {
					current_assault['scorched'] = 0;
				}
			}

			// Corrosion
			var corroded = current_assault.corroded;
			if (corroded) {
				corroded.timer--;
				// TODO: Is this a bug in the game?
				if (corroded.timer < 0) {
					current_assault.corroded = false;
					current_assault.attack_corroded = 0;
					if (debugLog.enabled) {
						debugLog.appendLines(log.name(current_assault) + ' recovers from corrosion');
					}
				} else {
					var corrosion = corroded.amount;
					current_assault.attack_corroded = corrosion;
					if (debugLog.enabled) {
						debugLog.appendLines(log.name(current_assault) + ' loses ' + corrosion + ' attack to corrosion');
					}
				}
			}

			if (!current_assault.isAlive()) {
				doOnDeathSkills(current_assault, null);
			}
		}
	}

	function doAttack(current_assault, field_o_assaults, field_o_commander) {

		// -- START ATTACK SEQUENCE --
		var target = field_o_assaults[current_assault.key];
		if (!target || !target.isAlive()) {
			target = field_o_commander;
		} else {
			// Check for taunt; if unit has taunt, attacks directed at it can't be "taunted" elsewhere
			var taunted = false;
			if (!target.taunt) {
				// Check left first, then right
				var adjacent = field_o_assaults[current_assault.key - 1];
				if (adjacent && adjacent.taunt) {
					target = adjacent;
					taunted = true;
				} else {
					var adjacent = field_o_assaults[current_assault.key + 1];
					if (adjacent && adjacent.taunt) {
						target = adjacent;
						taunted = true;
					}
				}
			}
			if (taunted && debugLog.enabled) debugLog.appendLines(log.name(target) + ' taunts ' + log.name(current_assault));
		}

		// -- CALCULATE DAMAGE --
		var damage = current_assault.adjustedAttack(); // Get base damage + rally/weaken

		// Enfeeble
		var enfeeble = target.enfeebled;
		damage += enfeeble;

		if (debugLog.enabled) {
			debugLog.appendLines('<u>(Attack: +' + current_assault.attack);
			if (current_assault.attack_berserk) debugLog.appendLines(' Berserk: +' + current_assault.attack_berserk);
			if (current_assault.attack_valor) debugLog.appendLines(' Valor: +' + current_assault.attack_valor);
			if (current_assault.attack_rally) debugLog.appendLines(' Rally: +' + current_assault.attack_rally);
			if (current_assault.attack_weaken) debugLog.appendLines(' Weaken: -' + current_assault.attack_weaken);
			if (current_assault.attack_corroded) debugLog.appendLines(' Corrosion: -' + current_assault.attack_corroded);
			if (enfeeble) debugLog.appendLines(' Enfeeble: +' + enfeeble);
		}

		// Pierce
		// var pierce = current_assault['skill']['pierce'];
		var pierce = current_assault.pierce;
		if (pierce) {
			var enhanced = unitInfo.getEnhancement(current_assault, 'pierce', pierce);
			pierce += enhanced;
		} else {
			pierce = 0;
		}

		// Damage reduction
		var protect = target.protected;
		var shatter = false;
		var armor = target.armored;
		var shrouded = checkShroud(target);
		// Barrier is applied BEFORE Armor
		if (protect) {
			if (debugLog.enabled) {
				debugLog.appendLines(' Barrier: -' + protect);
			}
			// Remove pierce from Barrier
			if (pierce) {
				if (pierce >= protect) {
					if (debugLog.enabled) debugLog.appendLines(' Pierce: +' + protect);
					pierce -= protect;
					protect = 0;
					target.protected = 0;
				} else {
					if (debugLog.enabled) debugLog.appendLines(' Pierce: +' + pierce);
					protect -= pierce;
					target.protected -= pierce;
					// Bug 27415 - Pierce does NOT reduce potential Iceshatter damage unless protect is completely removed by it
					//target.barrier_ice -= pierce;
					pierce = 0;
				}
			}
			if (protect) {
				if (damage >= protect) {
					shatter = target.barrier_ice;
					damage -= protect;
					target.protected = 0;
				} else {
					target.protected -= damage;
					damage = 0;
				}
			}
		}
		if (shrouded) {
			shrouded += unitInfo.getEnhancement(target, 'stasis', shrouded);
			if (debugLog.enabled) {
				debugLog.appendLines(' Shroud: -' + shrouded);
			}
			// Remove pierce from Shroud
			if (pierce) {
				if (pierce > shrouded) {
					if (debugLog.enabled) debugLog.appendLines(' Pierce: +' + shrouded);
					shrouded = 0;
				} else {
					if (debugLog.enabled) debugLog.appendLines(' Pierce: +' + pierce);
					shrouded -= pierce;
				}
			}
			damage -= shrouded;
		}
		if (armor) {
			armor += unitInfo.getEnhancement(target, 'armored', armor);
			if (debugLog.enabled) {
				debugLog.appendLines(' Armor: -' + armor);
			}
			// Remove pierce from Armor
			if (pierce) {
				if (pierce > armor) {
					if (debugLog.enabled) debugLog.appendLines(' Pierce: +' + armor);
					armor = 0;
				} else {
					if (debugLog.enabled) debugLog.appendLines(' Pierce: +' + pierce);
					armor -= pierce;
				}
			}
			damage -= armor;
		}

		if (damage < 0) damage = 0;

		if (debugLog.enabled) debugLog.appendLines(') = ' + damage + ' damage</u>');

		// -- END OF CALCULATE DAMAGE --

		// Deal damage to target
		doDamage(current_assault, target, damage, null, function (source, target, amount) {
			debugLog.appendLines(log.name(source) + ' attacks ' + log.name(target) + ' for ' + amount + ' damage');
			debugLog.appendLines(!target.isAlive() ? ' and it dies' : '');
		});

		if (animations.areShown) {
			animations.drawField(field, null, null, turn, current_assault);
		}

		// WINNING CONDITION
		if (!field_o_commander.isAlive()) {
			return;
		}

		// Damage-dependent Status Inflictions
		if (damage > 0 && target.isAssault() && target.isAlive()) {
			// Poison
			// - Target must have taken damage
			// - Target must be an assault
			// - Target must not be already poisoned of that level
			if (current_assault.poison) {
				var poison = current_assault.poison;
				var enhanced = unitInfo.getEnhancement(current_assault, 'poison', poison);
				poison += enhanced;
				if (poison > target.poisoned) {
					target.poisoned = poison;
					if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' inflicts poison(' + poison + ') on ' + log.name(target));
				}
			}

			// Venom
			// - Target must have taken damage
			// - Target must be an assault
			// - Sets poisioned to greater of target's current poisioned or new poison
			// - Sets envenomed to greater of target's current envenomed or new venom
			if (current_assault.venom) {
				var venom = current_assault.venom;
				var enhanced = unitInfo.getEnhancement(current_assault, 'venom', venom);
				venom += enhanced;

				if (venom > target.envenomed) {
					var hexIncrease = venom - target.envenomed;
					target.envenomed = venom;
					target.enfeebled += hexIncrease;
					if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' inflicts venom(' + venom + ') on ' + log.name(target));
				}
			}

			// Nullify
			// - Attacker must have taken damage
			// - Target must be an assault
			if (current_assault.nullify) {
				var nullify = current_assault.nullify;
				var enhanced = unitInfo.getEnhancement(current_assault, 'nullify', nullify);
				nullify += enhanced;
				target.nullified += nullify;
				if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' inflicts nullify(' + nullify + ') on ' + log.name(target));
			}

			// Silence
			// - Attacker must have taken damage
			// - Target must be an assault
			if (current_assault.silence) {
				target.silenced = true;
				if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' inflicts silence on ' + log.name(target));
			}

			// Daze
			// - Target must have taken damage
			// - Target must be an assault
			if (current_assault.daze) {

				var dazed = current_assault.daze;
				var enhanced = unitInfo.getEnhancement(current_assault, 'daze', dazed);
				dazed += enhanced;

				target.attack_weaken += dazed;
				if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' dazed ' + log.name(target) + ' for ' + dazed);
			}
		}

		if (shatter) {
			iceshatter(target);
		}

		if (damage > 0 && current_assault.isAlive()) {
			// Leech
			// - Must have dealt damage
			// - Cannot leech more than damage dealt
			// - Cannot leech more health than damage sustained
			// - Leecher must not be already dead
			// - Leecher must not be at full health
			// - Increases attack too during Invigorate battleground effect
			if (current_assault.leech && current_assault.isDamaged()) {

				var leech_health = current_assault.leech;
				var enhanced = unitInfo.getEnhancement(current_assault, 'leech', leech_health);
				leech_health += enhanced;
				var healthMissing = current_assault.health - current_assault.health_left;
				if (leech_health >= healthMissing) {
					leech_health = healthMissing;
				}

				current_assault.health_left += leech_health;
				if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' siphons ' + leech_health + ' health');
			}

			if (current_assault.reinforce) {
				var reinforce = current_assault.reinforce;
				var enhanced = unitInfo.getEnhancement(current_assault, 'reinforce', reinforce);
				reinforce += enhanced;

				current_assault.protected += reinforce;
				if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' reinforces itself with barrier ' + reinforce);
			}

			// Counter
			// - Target must have received some amount of damage
			// - Attacker must not be already dead
			if (target.counter) {

				var counterBase = 0 + target.counter;
				var counterEnhancement = unitInfo.getEnhancement(target, 'counter', counterBase);

				doCounterDamage(current_assault, target, 'Vengance', counterBase, counterEnhancement);
			}

			// Counterburn
			// - Target must have received some amount of damage
			if (target.counterburn) {
				var scorch = target.counterburn || 0;
				var enhanced = unitInfo.getEnhancement(target, 'counterburn', scorch);
				scorch += enhanced;
				if (!current_assault.scorched) {
					current_assault.scorched = { 'amount': scorch, 'timer': 2 };
				} else {
					current_assault.scorched.amount += scorch;
					current_assault.scorched.timer = 2;
				}
				if (debugLog.enabled) debugLog.appendLines(log.name(target) + ' inflicts counterburn(' + scorch + ') on ' + log.name(current_assault));
			}

			// Counterpoison
			// - Target must have received some amount of damage
			if (target.counterpoison) {
				var poison = target.counterpoison || 0;
				var enhanced = unitInfo.getEnhancement(target, 'counterpoison', poison);
				poison += enhanced;

				if (poison > current_assault.poisoned) {
					current_assault.poisoned = poison;
					if (debugLog.enabled) debugLog.appendLines(log.name(target) + ' inflicts counterpoison(' + poison + ') on ' + log.name(current_assault));
				}
			}

			// Fury
			// - Target must have received some amount of damage
			if (target.fury) {
				var furyBase = target.fury;
				var furyEnhancement = unitInfo.getEnhancement(target, 'counter', furyBase);

				if (target.isAlive()) {
					var fury = furyBase + furyEnhancement;
					target.attack_berserk += fury;
					if (debugLog.enabled) {
						debugLog.appendLines(log.name(target) + ' activates fury and gains ' + fury + ' attack');
					}
				}

				doCounterDamage(current_assault, target, 'Fury', furyBase, furyEnhancement);
			}

			if (target.enraged > 0) {
				target.attack_berserk += target.enraged;
				if (debugLog.enabled) debugLog.appendLines(log.name(target) + " is enraged and gains " + target.enraged + " attack!</br>");
			}

			// Berserk
			// - Must have done some damage to an assault unit
			if (current_assault.berserk) {

				var berserk = current_assault.berserk;
				var enhanced = unitInfo.getEnhancement(current_assault, 'berserk', berserk);
				berserk += enhanced;

				current_assault.attack_berserk += berserk;
				if (debugLog.enabled) debugLog.appendLines(log.name(current_assault) + ' activates berserk and gains ' + berserk + ' attack');
			}
		}

		// -- CHECK STATUS INFLICTION --

		// Corrosion
		// - Target must have received some amount of damage
		if (target.corrosive) {
			var corrosion = target.corrosive || 0;
			var enhanced = unitInfo.getEnhancement(target, 'corrosive', corrosion);
			corrosion += enhanced;
			if (current_assault.corroded) {
				current_assault.corroded.amount += corrosion;
				current_assault.corroded.timer = 2;
			} else {
				current_assault.corroded = { amount: corrosion, timer: 2 };
			}
			if (debugLog.enabled) debugLog.appendLines(log.name(target) + ' inflicts corrosion(' + corrosion + ') on ' + log.name(current_assault));
			current_assault.attack_corroded = corrosion;
			if (debugLog.enabled) {
				debugLog.appendLines(log.name(current_assault) + ' loses ' + corrosion + ' attack to corrosion');
			}
		}

		if (!current_assault.isAlive()) {
			doOnDeathSkills(current_assault, target);
		}

		if (animations.areShown) {
			animations.drawField(field, null, null, turn, current_assault);
		}
		// -- END OF STATUS INFLICTION --
	}

	function doCounterDamage(attacker, defender, counterType, counterBase, counterEnhancement) {

		var counterDamage = counterBase + counterEnhancement;

		// Protect
		var damageInfo = modifySkillDamage(attacker, counterDamage, { enfeeble: true });
		counterDamage = damageInfo.damage;
		var shatter = damageInfo.shatter;

		if (debugLog.enabled) {
			debugLog.appendLines('<u>(' + counterType + ': +' + counterBase);
			if (counterEnhancement) debugLog.appendLines(' Enhance: +' + counterEnhancement);
			debugLog.appendLines(damageInfo.echo);
			debugLog.appendLines(') = ' + counterDamage + ' damage</u>');
		}

		doDamage(defender, attacker, counterDamage, null, function (source, target, amount) {
			debugLog.appendLines(log.name(target) + ' takes ' + amount + ' ' + counterType.toLowerCase() + ' damage');
			debugLog.appendLines(!target.isAlive() ? ' and it dies' : '');
		});
	}

	function calculatePoints(forceWin) {
		var uids = field.uids;
		var healthStats = {
			player: {
				total: 0,
				taken: 0
			},
			cpu: {
				total: 0,
				taken: 0
			}
		};

		for (var i in uids) {
			var unit = uids[i];
			var stats = healthStats[unit.owner];
			if (stats) {
				stats.total += unit.health;
				if (unit.played || unit.isCommander()) {
					stats.taken += (unit.health - unit.health_left);
				}
			}
		}
		healthStats.player.percent = stats.taken / stats.total;
		healthStats.cpu.percent = stats.taken / stats.total;

		var commander_o = field.cpu.commander;
		var matchPoints;
		if (getdeck2) {
			if (commander_o.isAlive() && !forceWin) {
				// 0-25 points, based on percentage of damage dealt to enemy
				matchPoints = Math.floor(healthStats.cpu.percent * 25);
			} else {
				// 115-130 points, based on percentage of damage taken
				matchPoints = 130 - Math.floor(healthStats.player.percent * 15);
			}
		} else {
			if (commander_o.isAlive() && !forceWin) {
				matchPoints = Math.floor(healthStats.cpu.percent / 0.02);
				matchPoints = Math.max(5, matchPoints);
			} else {
				matchPoints = 200 - Math.floor(healthStats.player.percent / 0.02);
			}
		}
		return matchPoints;
	}

	var deck = {};
	var field = {};
	var battlegrounds;
	var simulation_turns = 0;
	var simulating = false;
	var user_controlled = false;
	var livePvP = false;
	var turn = 0;
	var totalDeckHealth = 0;
	var totalCpuDeckHealth = 0;

	// public functions
	SIMULATOR.simulate = simulate;
	SIMULATOR.onPlaySkills = onPlaySkills;
	SIMULATOR.calculatePoints = calculatePoints;
	// public variables
	Object.defineProperties(SIMULATOR, {
		setupDecks: {
			get: function () {
				return setupDecks;
			},
			set: function (value) {
				setupDecks = value;
			}
		},
		setupField: {
			get: function () {
				return setupField;
			},
			set: function (value) {
				setupField = value;
			}
		},
		deck: {
			get: function () {
				return deck;
			},
			set: function (value) {
				deck = value;
			}
		},
		field: {
			get: function () {
				return field;
			},
			set: function (value) {
				field = value;
			}
		},
		battlegrounds: {
			get: function () {
				return battlegrounds;
			},
			set: function (value) {
				battlegrounds = value;
			}
		},
		simulation_turns: {
			get: function () {
				return simulation_turns;
			},
			set: function (value) {
				simulation_turns = value;
			}
		},
		simulating: {
			get: function () {
				return simulating;
			},
			set: function (value) {
				simulating = value;
			}
		},
		totalDeckHealth: {
			get: function () {
				return totalDeckHealth;
			},
			set: function (value) {
				totalDeckHealth = value;
			}
		},
		totalCpuDeckHealth: {
			get: function () {
				return totalCpuDeckHealth;
			},
			set: function (value) {
				totalCpuDeckHealth = value;
			}
		},
		user_controlled: {
			get: function () {
				return user_controlled;
			},
			set: function (value) {
				user_controlled = value;
			}
		},
		livePvP: {
			get: function () {
				return livePvP;
			},
			set: function (value) {
				livePvP = value;
			}
		}
	});
})();