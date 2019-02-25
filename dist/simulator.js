define('matchStats', [], function () {
   return {
      matchesPlayed: 0,
      matchesWon: 0,
      matchesLost: 0,
      matchesDrawn: 0,
      totalTurns: 0,
      totalPoints: 0,
      processMatch: function processMatch(simulator, result) {
         // Increment wins/losses/games
         if (result === 'draw') {
            this.matchesDrawn++;
         } else if (result) {
            this.matchesWon++;
         } else {
            this.matchesLost++;
         }
         this.totalPoints += simulator.calculatePoints();
         this.matchesPlayed++;

         // Increment total turn count
         this.totalTurns += simulator.simulation_turns;
      }
   };
});;define('debugLog', [], function() {
    var api = {
        enabled: false,
        getLog: getLog,
        clear: clear,
        prepend: prepend,
        prependLines: prependLines,
        append: append,
        appendLines: appendLines
    };

    var content = '';

    function clear() {
        content = '';
    }

    function getLog() {
        return content;
    }

    function prepend(message) {
        content = message + content;
    }

    function prependLines() {
        for(var i = 0; i < arguments.length; i++) {
            prepend(arguments[i] + '</br>');
        }
    }

    function append(message) {
        content += message;
    }

    function appendLines() {
        for(var i = 0; i < arguments.length; i++) {
            append(arguments[i] + '</br>');
        }
    }

    return api;
});;define('log', [
    'factions',
    'skillApi'
],
function(
    factions,
    skillApi
) {
    'use strict';

    var api = {
        skill: logSkill,
        name: logCardName
    };
    
    function truncate(value) {
        if (value > Math.floor(value)) {
            value = value.toFixed(1);
        }
        return value;
    }

    function logSkill(skill) {
        var output = skillApi.nameFromId(skill.id);
        if (skill.all) output += ' all';
        if (skill.y) output += ' ' + factions.names[skill.y];
        if (skill.s) output += ' ' + skillApi.nameFromId(skill.s);
        if (skill.c) output += ' every ' + skill.c + ' turns';
        else if (skill.x) output += ' ' + skill.x;
        return output;
    }

    function logCardName(card, hideStats) {
        if (card.owner === 'cpu') {
            var tag = 'i';
        } else {
            var tag = 'b';
        }
        var output = '<' + tag + '>';
        output += card.name;
        if (card.runes.length) output += "*";
        if (card.maxLevel > 1) output += '{' + card.level + '/' + card.maxLevel + '}';
        if (card.key !== undefined) output += ' (' + card.key + ')';
        output += '</' + tag + '>';
        if (!hideStats) {
            output += '<u>';
            if (card.isCommander()) {
                output += ' [';
                output += truncate(card.health_left);
                output += ' HP]';
            } else if (card.isAssault()) {
                output += ' [';
                output += card.adjustedAttack();
                output += '/';
                output += truncate(card.health_left);
                output += '/';
                output += card.timer;
                output += ']';
            }
            output += '</u>';
        }
    
        return output;
    }

    return api;
});;define('debugMessages', [
    'debugLog',
    'skillApi',
    'log'
], function (
    debugLog,
    skillApi,
    log
) {
    'use strict';

    var api = {
        logDead: logDead,
        logCardPlayed: logCardPlayed,
        logDamage: logDamage,
        logNotImplemented: logNotImplemented,
        logDualstrike: logDualstrike,
        logCannotValor: logCannotValor,
        logSilenced: _logCannotUseSkills('silenced'),
        logFrozen: _logCannotAttack('frozen'),
        logWeakened: _logCannotAttack('weakened'),
        logImbuesNew: logImbuesNew,
        logImbuesExisting: logImbuesExisting,
        logScorch: logScorch,
        logNullified: logNullified,
        logInvisibile: logInvisibile,
        logStatusEffect: logStatusEffect,
        logInflicts: logInflicts,
        logGainAttack: logGainAttack,
        logGainHealth: logGainHealth,
        logChargeSkill: logChargeSkill,
        logReanimate: logReanimate,
        logAction: logAction,
        logOutcome: logOutcome,
        logStartBattle: logStartBattle,
        logTurnStart: logTurnStart,
        logTurnEnd: logTurnEnd
    };

    function logDead(unit) {
        debugLog.appendLines(log.name(unit) + ' <strong>is removed from field</strong>');
    }

    function logCardPlayed(commander, card) {
        if ((debugLog.enabled || debugLog.cardsPlayedOnly)) {
            debugLog.appendLines(log.name(commander) + ' plays ' + _getTargetName(card));
        }
    }

    function logDamage(sourceUnit, targetUnit, skillName, skillVerb, damageInfo, logFn) {
        debugLog.append('<u>(' + skillName + ': +' + damageInfo.originalDamage);
        if (damageInfo.modifiers) {
            Object.keys(damageInfo.modifiers).forEach(function (name) {
                var value = damageInfo.modifiers[name];
                if (value) {
                    debugLog.append(' ' + name + ': ' + (value > 0 ? '+' : '') + value);
                }
            });
        }
        debugLog.appendLines(') = ' + (damageInfo.damage || damageInfo.originalDamage) + ' damage</u>');

        if (sourceUnit) {
            debugLog.append(log.name(sourceUnit) + ' ' + skillVerb + ' ' + _getTargetName(targetUnit, sourceUnit) + ' for ' + damageInfo.damage + ' damage');
        } else {
            debugLog.append(log.name(targetUnit) + ' takes ' + skillVerb + ' damage');
        }

        debugLog.append(!targetUnit.isAlive() ? ' and it dies' : '');

        var additionalDebug = logFn && logFn();
        if (additionalDebug) {
            debugLog.append(additionalDebug);
        }

        debugLog.appendLines();
    }

    function logNotImplemented(skillID, unit) {
        var skillName = (SKILL_DATA[skillID] ? SKILL_DATA[skillID].name : skillID);
        debugLog.appendLines(log.name(unit) + ' attempts to use ' + skillName + ', but it is not implemented.');
    }

    function _logCannotUseSkills(reason) {
        return _logCannotDo(reason, 'use skills');
    }

    function logReanimate(unit) {
        debugLog.appendLines(log.name(unit) + ' is reanimated</br>');
    }

    function logImbuesNew(sourceUnit, targetUnit, imbuedSkill, amount) {
        debugLog.appendLines(log.name(sourceUnit) + ' imbues ' + log.name(targetUnit, false) + ' existing ' + log.skill(imbuedSkill) + ' by ' + amount);
    }

    function logImbuesExisting(sourceUnit, targetUnit, imbuedSkill, amount) {
        debugLog.appendLines(log.name(sourceUnit) + ' imbues ' + log.name(targetUnit, false) + ' with ' + log.skill(imbuedSkill) + '(' + amount + ')');
    }

    function logCannotValor(unit, enemy) {
        debugLog.appendLines(log.name(unit) + ' activates valor but ');
        if (!enemy) {
            debugLog.appendLines('there is no opposing enemy.');
        } else {
            debugLog.appendLines('enemy is not strong enough.');
        }
    }

    function _logCannotAttack(reason) {
        return _logCannotDo(reason, 'attack');
    }

    function _logCannotDo(reason, action) {
        return function logCannotDoAction(unit) {
            debugLog.appendLines(log.name(unit) + ' is ' + reason + ' and cannot ' + action);
        };
    }

    function logDualstrike(unit) {
        debugLog.appendLines(log.name(unit) + ' activates dualstrike');
    }

    function logScorch(sourceUnit, amount, targetUnit) {
        debugLog.appendLines(log.name(sourceUnit) + ' inflicts scorch(' + amount + ') on ' + _getTargetName(targetUnit, sourceUnit));
    }

    function logNullified(sourceUnit, skillVerb, target) {
        logSkillStopped(sourceUnit, skillVerb, target, 'nullified');
    }

    function logInvisibile(sourceUnit, skillVerb, target) {
        logSkillStopped(sourceUnit, skillVerb, target, 'invisible');
    }

    function logSkillStopped(sourceUnit, skillVerb, target, reason) {
        debugLog.appendLines(log.name(sourceUnit) + ' ' + skillVerb + ' ' + _getTargetName(target, sourceUnit) + ' but it is ' + reason + '!');
    }

    function logStatusEffect(sourceUnit, skillVerb, target, enhanced, amount, additionalDebug) {
        if (enhanced) debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
        var line = log.name(sourceUnit) + ' ' + skillVerb + ' ' + _getTargetName(target, sourceUnit) + (amount ? ' by ' + amount : '');
        if (additionalDebug) {
            line += additionalDebug(target, amount);
        }
        debugLog.appendLines(line);
    }

    function logGainAttack(unit, skillVerb, amount) {
        debugLog.appendLines(log.name(unit) + ' ' + skillVerb + ' and gains ' + amount + " attack!</br>");
    }

    function logGainHealth(unit, verb, amount) {
        debugLog.appendLines(log.name(unit) + ' ' + verb + ' ' + amount + ' health');
    }

    function logChargeSkill(unit, skill) {
        if (skill.countdown) {
            debugLog.appendLines(log.name(unit) + ' charges ' + skillApi.nameFromId(skill.id) + ' (ready in ' + skill.countdown + ' turns)');
        } else {
            debugLog.appendLines(log.name(unit) + ' readies ' + skillApi.nameFromId(skill.id));
        }
    }

    function logInflicts(sourceUnit, statusName, statusValue, target) {
        debugLog.appendLines(log.name(sourceUnit) + ' inflicts ' + statusName + (statusValue ? '(' + statusValue + ')' : '') + ' on ' + _getTargetName(target, sourceUnit));
    }

    function logAction(sourceUnit, skillVerb, target) {
        debugLog.appendLines(log.name(sourceUnit) + '  ' + skillVerb + (target ? ' ' + _getTargetName(target, sourceUnit) : ''));
    }

    function logStartBattle(remainingSims) {
        if (debugLog.massDebug && remainingSims) {
            debugLog.appendLines('', '<hr>NEW BATTLE BEGINS<hr>');
        }
    }

    function logTurnStart(turn, activePlayer, field, deck) {
        var commander = log.name(field[activePlayer]['commander']);
        var deck = deck[activePlayer].deck;
        debugLog.appendLines('<div id="turn_' + turn + '" class="turn-info"><hr/><br/><u>Turn ' + turn + ' begins for ' + commander + '</u>');

        if (turn <= 2) {
            debugLog.appendLines(_logDrawCard(commander, deck, 0));
            debugLog.appendLines(_logDrawCard(commander, deck, 1));
        }
        debugLog.appendLines(_logDrawCard(commander, deck, 2));
    }

    function logTurnEnd(turn) {
        if (debugLog.massDebug) {
            debugLog.append('<u>Turn ' + turn + ' ends</u></br></br></div>');
        }
    }

    function _logOutcomeFound(desiredOutcome, matchesPlayed) {
        debugLog.prependLines(desiredOutcome + ' found after ' + matchesPlayed + ' games. Displaying debug output...', '');
        debugLog.appendLines('', '<h1>' + desiredOutcome.toUpperCase() + '</h1>');
    }

    function _logOutcomeNotFound(desiredOutcome, matchesPlayed) {
        debugLog.appendLines('No ' + desiredOutcome + ' found after ' + matchesPlayed + ' games. No debug output to display.');
    }

    function _logOutcome(result) {
        debugLog.appendLines('');
        if (result === 'draw') {
            debugLog.appendLines('<h1>DRAW</h1>');
        } else if (result) {
            debugLog.appendLines('<h1>WIN</h1>');
        } else {
            debugLog.appendLines('<h1>LOSS</h1>');
        }
    }

    function logOutcome(result, matchesPlayed, remainingSims) {
        if (debugLog.firstLoss) {
            if (result === 'draw') {
                _logOutcomeFound('Draw', matchesPlayed);
            } else if (result) {
                debugLog.clear();
                if (!remainingSims) {
                    _logOutcomeNotFound('losses', matchesPlayed);
                }
            } else {
                _logOutcomeFound('Loss', matchesPlayed);
            }
        } else if (debugLog.firstWin) {
            if (result && result !== 'draw') {
                _logOutcomeFound('Win', matchesPlayed);
            } else {
                debugLog.clear();
                if (!remainingSims) {
                    _logOutcomeNotFound('wins', matchesPlayed);
                }
            }
        } else if (debugLog.massDebug) {
            _logOutcome(result);
        }
    }
    

    function _getTargetName(target, source) {
        return (target === source ? 'itself' : log.name(target));
    }

    function _logDrawCard(commander, deck, i) {
        var card = deck[i];
        if (card) {
            return commander + ' draws ' + log.name(card, true) + '';
        } else {
            return '';
        }
    }

    return api;
});;define('debugDisabled', [
    'debugMessages'
], function (
    debugMessages
) {
    'use strict';

    var api = {};

    Object.keys(debugMessages).forEach(function makeFake(methodName) {
        api[methodName] = function () { };
    });

    api.logCardPlayed = debugMessages.logCardPlayed;

    return api;
});;define('simController', [
    'matchTimer',
    'debugLog',
    'debugMessages',
    'debugDisabled'
], function (
    matchTimer,
    debugLog,
    debugMessages,
    debugDisabled
) {
    'use strict';

    var api = {
        debugEnd: debugEnd,
        onDebugEnd: noop,

        onEndSims: noop,
        onStopSims: noop,
        setDebugLogger: setDebugLogger,
        getLogFunction: getLogFunction
    };

    function noop() {}

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debugEnd() {

        SIMULATOR.remainingSims = 0;
        matchTimer.stop();

        var result = api.processSimResult();
        var matchPoints;
        if (SIMULATOR.config.cpuHash) {
            matchPoints = SIMULATOR.calculatePoints();
        }

        api.onDebugEnd(result, matchPoints);

        api.onEndSims();
    }

    function setDebugLogger() {
        this.logger = (debugLog.enabled ? debugMessages : debugDisabled);
    }

    function getLogFunction() {
        if(debugLog.enabled) {
            var logger = this.logger;
            return function logMessage(messageType) {
                var logArgs = [].slice.call(arguments, 1);
                logger[messageType].apply(logger, logArgs);
            };
        } else {
            return noop;
        }
    }

    return api;
});;define('bgeApi', [
    'log',
    'cardApi',
    'debugLog',
    'unitInfoHelper'
], function (
    log,
    cardApi,
    debugLog,
    unitInfoHelper
) {
    var api = {
        getBattlegrounds: getBattlegrounds
    };

    function MakeSkillModifier(name, effect) {
        return {
            name: name,
            modifierType: effect.effect_type,
            effects: [effect]
        };
    }
    
    function MakeStatScalar(name, effect) {
        return {
            name: name,
            modifierType: "scale_stat",
            scaledStat: effect.effect_type.replace("scale_", ""),
            effects: [effect]
        };
    }
    
    var MakeOnPlayBGE = (function () {
        var OnPlayBGE = function (name, effect) {
            this.p = null;
            this.name = name;
            this.effect = effect;
            this.runes = [];
        };
    
        OnPlayBGE.prototype = {
            onCardPlayed: function (card) {
                SIMULATOR.onPlaySkills[this.effect.id](this, card, this.effect);
            },
    
            //Card ID is ...
            isCommander: function () {
                return false;
            },
    
            isAssault: function () {
                return false;
            }
    
        };
    
        return (function (name, effects) {
            return new OnPlayBGE(name, effects);
        });
    }());
    
    var MakeTrap = (function () {
        var Trap = function (name, trap_card) {
            this.name = name;
            this.id = trap_card.id;
            this.base = trap_card.base;
            this.mult = trap_card.mult;
            this.target_deck = trap_card.target_deck;
            this.y = trap_card.y;
        };
    
        Trap.prototype = {
            onCardPlayed: function (card, p_deck, o_deck) {
                var deck = (this.target_deck === "opponent" ? o_deck : p_deck);
                if (card.isInFaction(this.y)) {
    
                    var targets = [];
                    for (var t = 0; t < deck.length; t++) {
                        var card = deck[t];
                        if (!card.trap) {
                            targets.push(card);
                        }
                    }
    
                    if (targets.length) {
                        // Create a trap card
                        var trapLevel = Math.ceil(card[this.base] * this.mult);
                        var trapInfo = unitInfoHelper.create(this.id, trapLevel);
                        var trap = cardApi.byId(trapInfo);
    
                        // Shuffle the trap into opponent's deck
                        var index = (~~(Math.random() * targets.length));
                        targets[index].trap = trap;
    
                        if (debugLog.enabled) {
                            debugLog.appendLines(this.name + ' inserts ' + log.name(trap) + ' into the opposing deck.');
                        }
                    }
                }
            }
        };
    
        return (function (name, effects) {
            return new Trap(name, effects);
        });
    }());

    function addBgeFromList(battlegrounds, battleground, player) {
        for (var j = 0; j < battleground.effect.length; j++) {
            var effect = battleground.effect[j];
            var effect_type = effect.effect_type;
            if (effect_type === "skill") {
                var bge = cardApi.makeBattleground(battleground.name, effect);
                if (player === 'player') bge.ally_only = true;
                if (player === 'cpu') bge.enemy_only = true;
                battlegrounds.onTurn.push(bge);
            } else if (["evolve_skill", "add_skill", "scale_attributes", "statChange", "runeMultiplier"].indexOf(effect_type) >= 0) {
                var bge = MakeSkillModifier(battleground.name, effect);
                if (player === 'player') bge.ally_only = true;
                if (player === 'cpu') bge.enemy_only = true;
                battlegrounds.onCreate.push(bge);
            } else if (["scale_attack", "scale_health"].indexOf(effect_type) >= 0) {
                var bge = MakeStatScalar(battleground.name, effect);
                if (player === 'player') bge.ally_only = true;
                if (player === 'cpu') bge.enemy_only = true;
                battlegrounds.onCreate.push(bge);
            } else if (effect_type === "trap_card") {
                var bge = MakeTrap(battleground.name, effect);
                if (player === 'player') bge.ally_only = true;
                if (player === 'cpu') bge.enemy_only = true;
                battlegrounds.onCardPlayed.push(bge);
            } else if (effect_type === "on_play") {
                var bge = MakeOnPlayBGE(battleground.name, effect.effect);
                bge.attacker = effect.attacker;
                bge.defender = effect.defender;
                bge.first_play = effect.first_play;
                if (player === 'player') bge.ally_only = true;
                if (player === 'cpu') bge.enemy_only = true;
                battlegrounds.onCardPlayed.push(bge);
            }
        }
    }

    function addBgesFromList(currentBgeList, newBges, player) {
        if (!newBges) return null;
        var selected = newBges.split(",");
        for (var i = 0; i < selected.length; i++) {
            var id = selected[i];
            var battleground = BATTLEGROUNDS[id];
            addBgeFromList(currentBgeList, battleground, player);
        }
    }

    function addMissionBGE(battlegrounds, campaignID, missionLevel) {
        var campaign = CAMPAIGNS[campaignID];
        if (campaign) {
            var id = campaign.battleground_id;
            if (id) {
                var battleground = BATTLEGROUNDS[id];
                missionLevel = Number(missionLevel) - 1; // Convert to 0-based
                if (!battleground.starting_level || Number(battleground.starting_level) <= missionLevel) {
                    if (battleground.scale_with_level) {
                        battleground = JSON.parse(JSON.stringify(battleground));
                        var levelsToScale = missionLevel - Number(battleground.starting_level);
                        for (var i = 0; i < battleground.effect.length; i++) {
                            var effect = battleground.effect[i];
                            effect.mult = effect.base_mult + effect.mult * levelsToScale;
                        }
                    }
                    addBgeFromList(battlegrounds, battleground, 'cpu');
                }
            }
        }
    }

    function addRaidBGE(battlegrounds, raidID, raidLevel) {
        var bge_id = RAIDS[raidID].bge;
        if (bge_id) {
            var battleground = BATTLEGROUNDS[bge_id];
            if (battleground && Number(raidLevel) >= Number(battleground.starting_level)) {
                var enemy_only = battleground.enemy_only;

                for (var j = 0; j < battleground.effect.length; j++) {
                    var effect = battleground.effect[j];
                    var effect_type = effect.effect_type;
                    if (effect_type === "skill") {
                        if (battleground.scale_with_level) {
                            var mult = battleground.scale_with_level * (raidLevel - battleground.starting_level + 1);
                        } else {
                            var mult = 1;
                        }
                        var bge = cardApi.makeBattleground(battleground.name, effect, mult);
                        bge.enemy_only = enemy_only;
                        battlegrounds.onTurn.push(bge);
                    } else if (["evolve_skill", "add_skill", "scale_attributes", "statChange", "runeMultiplier"].indexOf(effect_type) >= 0) {
                        var bge = MakeSkillModifier(battleground.name, effect);
                        bge.enemy_only = enemy_only;
                        battlegrounds.onCreate.push(bge);
                    } else if (["scale_attack", "scale_health"].indexOf(effect_type) >= 0) {
                        var bge = MakeStatScalar(battleground.name, effect);
                        bge.enemy_only = enemy_only;
                        battlegrounds.onCreate.push(bge);
                    } else if (effect_type === "trap_card") {
                        var bge = MakeTrap(battleground.name, effect);
                        bge.enemy_only = enemy_only;
                        battlegrounds.onCardPlayed.push(bge);
                    }
                }
            }
        }
    }

    function addMapBGEs(battlegrounds, mapbges, player) {
        if (!mapbges) return null;
        var selected = mapbges.split(",");
        for (var i = 0; i < selected.length; i++) {
            var parts = selected[i].split("-");
            var location = parts[0];
            var index = parts[1];
            var value = parts[2];
            var mapBGE = Object.keys(MAP_BATTLEGROUNDS).filter(function (id) {
                return MAP_BATTLEGROUNDS[id].location_id === location;
            })[0];
            mapBGE = MAP_BATTLEGROUNDS[mapBGE];
            var battleground = mapBGE.effects[index].upgrades[value];
            addBgeFromList(battlegrounds, battleground, player);
        }
    }

    function getBattlegrounds(matchBges, selfBges, enemyBges, mapBges, campaignID, missionLevel, raidID, raidLevel) {

        // Set up battleground effects, if any
        var battlegrounds = {
            onCreate: [],
            onTurn: [],
            onCardPlayed: []
        };

        addBgesFromList(battlegrounds, matchBges);
        addBgesFromList(battlegrounds, selfBges, 'player');
        addBgesFromList(battlegrounds, enemyBges, 'cpu');
        addMapBGEs(battlegrounds, mapBges, 'player');

        if (campaignID) {
            addMissionBGE(battlegrounds, campaignID, missionLevel);
        } else if (raidID) {
            addRaidBGE(battlegrounds, raidID, raidLevel);
        }
        return battlegrounds;
    }

    return api;
});;define('loadDeck', [
    'cardInfo',
    'cardApi',
    'unitInfoHelper'
], function (
    cardInfo,
    cardApi,
    unitInfoHelper
) {
    'use strict';
    
    var api = {
        mission: loadMissionDeck,
        raid: loadRaidDeck,
        defaultDeck: getDefaultDeck,
        copyCardList: copyCardList,
        copyDeck: copyDeck,
        getDeckCards: getDeckCards
    };

    function getUpgradePoints(level, maxedAt, maxUpgradePoints) {
        var percentCompvare;
        if (maxedAt === 7) {
            percentCompvare = (level - 1) / (maxedAt - 1);
        } else {
            percentCompvare = (level / maxedAt);
        }
        var points = Math.ceil(maxUpgradePoints * percentCompvare);
        return points;
    }

    function baseFusion(unit) {
        var baseID = unit.id;
        var id;
        do {
            id = baseID;
            baseID = REVERSE_FUSIONS[id];
        } while (typeof baseID !== "undefined");
        return id;
    }

    function getMaxFusions(unit) {
        var id = baseFusion(unit);
        var fusion = -1;
        while (typeof id !== "undefined") {
            fusion++;
            id = FUSIONS[id];
        }
        return fusion;
    }

    function getMaxUpgradePoints(deck) {
        var maxUpgradePoints = 0;
        for (var i = 0; i < deck.length; i++) {
            var unit = deck[i];
            var card = cardApi.byId(unit);
            var maxFusions = getMaxFusions(card);
            var maxLevel = card.maxLevel;
            maxUpgradePoints += ((maxFusions + 1) * maxLevel - 1);
        }
        return maxUpgradePoints;
    }

    function getRandomCard(unitInfo) {
        var possibilities = [];
        for (var id in CARDS) {
            if (REVERSE_FUSIONS[id]) continue;
            var card = cardInfo.loadCard(id);
            if (card.card_type === '1') {
                continue;
            }
            if (unitInfo.max_rarity && Number(unitInfo.max_rarity) < Number(card.rarity) ||
                unitInfo.min_rarity && Number(unitInfo.min_rarity) > Number(card.rarity)) {
                continue;
            }
            if (unitInfo.type && !(unitInfo.type === card.type || card.sub_type.indexOf(unitInfo.type) >= 0)) {
                continue;
            }
            if (unitInfo.set) {
                var sets = unitInfo.set.split(",");
                if (sets.indexOf(card.set) < 0) {
                    continue;
                }
            }
            possibilities.push(id);
        }
        var chosen = ~~(Math.random() * possibilities.length);
        return possibilities[chosen];
    }

    function getPresetUnit(unitInfo, level, maxedAt) {
        level = parseInt(level);
        if (unitInfo.mastery_level && level < parseInt(unitInfo.mastery_level)) return null;
        if (unitInfo.remove_mastery_level && level >= parseInt(unitInfo.remove_mastery_level)) return null;

        var cardID = unitInfo.id;
        var random = false;
        if (!cardID) {
            cardID = getRandomCard(unitInfo);
            random = true;
        }
        var unitLevel = (unitInfo.level || 1);

        if (level >= maxedAt) {
            unitLevel = 7;
            if (canFuse(cardID)) {
                cardID = fuseCard(cardID);
            }
        } else if (level > 1 && cardInfo.isCommander(cardID)) {
            var maxUpgrades = (Number(cardInfo.loadCard(cardID).rarity) + 1);
            var upgradesPerLevel = maxUpgrades / (maxedAt - 1);
            var levelsFromBase = level - 1;
            unitLevel = Math.ceil(upgradesPerLevel * levelsFromBase);
        }

        var unit = unitInfoHelper.create(cardID, unitLevel);

        if (random) {
            unit.randomInfo = { unitInfo: unitInfo, level: level, maxedAt: maxedAt };
        }
        return unit;
    }

    function upgradeCard(unitInfo) {
        var maxLevel = (parseInt(cardInfo.loadCard(unitInfo.id).rarity) + 2);
        if (unitInfo.level === maxLevel) {
            if (canFuse(unitInfo.id)) {
                unitInfo.id = fuseCard(unitInfo.id, 1);
                unitInfo.level = 1;
            } else {
                return false;
            }
        } else {
            unitInfo.level++;
        }
        return true;
    }

    function canFuse(cardID) {
        if (DoNotFuse.indexOf(cardID) > -1) {
            return false;
        } else if (cardInfo.isCommander(cardID)) {
            return false;
        } else if (FUSIONS[cardID]) {
            return true;
        }
        return false;
    }

    function fuseCard(cardID, fusion) {
        if (DoNotFuse.indexOf(cardID) === -1) {
            // Fuse X number of times
            if (fusion) {
                for (var i = 0; i < fusion; i++) {
                    cardID = doFuseCard(cardID);
                }
                // Max fusion
            } else {
                do {
                    var fused = doFuseCard(cardID);
                    cardID = fused;
                } while (cardID !== fused);
            }
        }
        return cardID;
    }

    function doFuseCard(cardID) {
        var fused = FUSIONS[cardID];
        if (fused) {
            return fused;
        } else {
            return cardID;
        }
    }

    function getPresetCommander(deckInfo, level) {
        level = parseInt(level);
        var commander = deckInfo.commander;
        if (commander.card) {
            var possibilities = [];
            for (var i = 0; i < commander.card.length; i++) {
                var card = commander.card[i];
                var minLevel = parseInt(card.min_mastery_level) || 0;
                var maxedAt = parseInt(card.max_mastery_level) || 999;
                if (level >= minLevel && level <= maxedAt) {
                    possibilities.push(card);
                }
            }
            var chosen = ~~(Math.random() * possibilities.length);
            commander = possibilities[chosen];
            commander.possibilities = possibilities;
        }
        return commander;
    }

    var DoNotFuse = ["8005", "8006", "8007", "8008", "8009", "8010"];
    function loadPresetDeck(deckInfo, level, upgradeLevels) {

        var maxedAt = upgradeLevels + 1;
        if (!level) level = maxedAt;

        var current_deck = [];
        current_deck.deck = [];
        var commanderInfo = getPresetCommander(deckInfo, level);
        var commander = getPresetUnit(commanderInfo, level, maxedAt);   // Set commander to max level
        if (commanderInfo.possibilities) {
            commander.randomInfo = { possibilities: commanderInfo.possibilities, level: level, maxedAt: maxedAt };
        }
        current_deck.commander = commander;
        var presetDeck = deckInfo.deck;

        var deck = current_deck.deck;
        for (var current_key in presetDeck) {
            var unitInfo = presetDeck[current_key];
            var unit = getPresetUnit(unitInfo, level, maxedAt);
            if (unit) {
                deck.push(unit);
            }
        }

        var maxUpgradePoints = getMaxUpgradePoints(deck);
        var upgradePoints = getUpgradePoints(level, maxedAt, maxUpgradePoints);
        if (level > 1 && level < maxedAt) {
            var canFuse = deck.slice();
            while (upgradePoints > 0 && canFuse.length > 0) {
                var index = Math.floor(Math.random() * canFuse.length);
                if (upgradeCard(canFuse[index])) {
                    upgradePoints--;
                } else {
                    canFuse.splice(index, 1);
                }
            }
        }

        return current_deck;
    }

    // Load mission deck
    function loadMissionDeck(id, level) {
        var missionInfo = MISSIONS[id];
        if (missionInfo) {
            return loadPresetDeck(missionInfo, level, 6);
        } else {
            return 0;
        }
    }

    function loadRaidDeck(id, level, maxedAt) {
        if (!maxedAt) maxedAt = 25;
        var raidInfo = RAIDS[id];
        if (raidInfo) {
            var newRaidInfo = {
                commander: raidInfo.commander,
                deck: raidInfo.deck.card
            };
            return loadPresetDeck(newRaidInfo, level, Number(raidInfo.upgradeLevels));
        } else {
            return 0;
        }
    }

    function getDefaultDeck() {
        return {
            commander: unitInfoHelper.defaultCommander,
            deck: []
        };
    }

    function copyCardList(original_card_list) {
        var new_card_list = [];
        for (var key = 0, len = original_card_list.length; key < len; key++) {
            new_card_list[key] = original_card_list[key];
        }
        return new_card_list;
    }

    function copyDeck(original_deck) {
        var new_deck = {};
        new_deck.commander = original_deck.commander;
        new_deck.deck = copyCardList(original_deck.deck);
        return new_deck;
    }

    function getDeckCards(original_deck, owner) {
        var new_deck = {};
        new_deck.commander = cardApi.byId(original_deck.commander);
        new_deck.deck = [];
        var list = original_deck.deck;
        var battlegrounds = SIMULATOR.battlegrounds.onCreate.filter(function (bge) {
            return !((owner === 'player' && bge.enemy_only) || (owner === 'cpu' && bge.ally_only));
        });
        for (var i = 0, len = list.length; i < len; i++) {
            new_deck.deck.push(cardApi.byIdWithBgeApplied(list[i], battlegrounds));
        }
        return new_deck;
    }

    return api;
});;define('animations', [
    'cardUI'
], function (
    cardUI
) {
    'use strict';

    var api = {
        areShown: false,
        drawField: drawField,
        clearFrames: clearFrames
    };

    var frames = [];
    var frameInterval = null;
    var disabledInterval = false;

    function drawField(field, hand, callback, turn, activeUnit) {
        var newFrame = cardUI.doDisplayField(field, hand, callback, turn, activeUnit);
        frames.push(newFrame);
        if (!frameInterval) {
            drawFrames();
            frameInterval = setInterval(drawFrames, 500);
        }
    }

    function clearFrames() {
        frames = [];
        clearInterval(frameInterval);
        frameInterval = null;
    }

    function drawFrames() {
        if (frames.length === 0) {
            if (disabledInterval) {
                clearInterval(frameInterval);
                frameInterval = null;
            } else {
                disabledInterval = true;
            }
        } else {
            var frame = frames.splice(0, 1)[0];
            $("#cardSpace").children().remove().end().append(frame);
            disabledInterval = false;
        }
    }

    return api;
});;define('ui', [
	'base64',
	'urlHelper',
	'loadDeck',
	'debugLog',
	'storageAPI',
	'dataUpdater',
	'matchStats',
	'animations',
	'simController',
	'simTutorial'
], function (
	base64,
	urlHelper,
	loadDeck,
	debugLog,
	storageAPI,
	dataUpdater,
	matchStats,
	animations,
	simController,
	simTutorial
) {
	'use strict';

	var api = {
		show: showUI,
		hide: hideUI,
		getSelectedBattlegrounds: getSelectedBattlegrounds,
		getSelectedMapBattlegrounds: getSelectedMapBattlegrounds,
		generateLink: generateLink,
		displayText: displayText,
		displayTurns: displayTurns,
		showWinrate: showWinrate,
		hideTable: hideTable,
		setSimStatus: setSimStatus,
		loadDeckBuilder: loadDeckBuilder,
		updateGameData: updateGameData,
		loadSavedDeck: loadSavedDeck,
		toggleTheme: toggleTheme,
		getConfiguration: getConfiguration
	};

	simController.onDebugEnd = displayDebugEnd;

	var loadDeckDialog,
		battleHistory;

	window.addEventListener('error', function onUncaughtException(message, url, lineNumber) {
		var errorDescription = "JavaScript error:\n " + message + "\n on line " + lineNumber + "\n for " + url;

		window.sa('send', 'exception', {
			'exDescription': errorDescription,
			'exFatal': false
		});

		if (lineNumber === 0) {
			var msg = "<br><br><i>Error Message:</i><br><br>" +
				"<i>It appears you're having trouble loading SimSpellstone. " +
				"Thanks.</i><br><br>";
			displayText(msg);
			return 1;
		}

		errorDescription += "\n";
		errorDescription += "Browser CodeName: " + navigator.appCodeName + "\n";
		errorDescription += "Browser Name: " + navigator.appName + "\n";
		errorDescription += "Browser Version: " + navigator.appVersion + "\n";
		errorDescription += "Cookies Enabled: " + navigator.cookieEnabled + "\n";
		errorDescription += "Platform: " + navigator.platform + "\n";
		errorDescription += "User-agent header: " + navigator.userAgent + "\n";
		try {
			errorDescription += "URL: " + generateLink() + "\n";
		} catch (err) {
			// Swallow
		}

		displayText("<br><br><i>Error Message:</i><br><textarea cols=50 rows=6 onclick=\"this.select()\"><blockquote>" + errorDescription + "</blockquote></textarea>");

		// Stop the recursion if any
		try {
			simController.clearStatusTimeout();
		} catch (err) {
			// Swallow
		}
	});

	function _toggleUI(display) {
		if (display) {
			$("#ui").show();
		} else {
			$("#ui").hide();
		}
	}

	function showUI() {
		// Show interface
		_toggleUI(true);
		// Hide stop button
		document.getElementById('stop').style.display = 'none';
	}

	function hideUI() {
		$(".accordion").accordion('option', 'active', null);
		// Hide interface
		_toggleUI(false);
		// Display stop button
		document.getElementById('stop').style.display = 'block';
	}

	function getSelectedBattlegrounds(prefix) {
		prefix = (prefix || "");
		var selectedBattlegrounds = [];
		var bgCheckBoxes = document.getElementsByName(prefix + "battleground");
		for (var i = 0; i < bgCheckBoxes.length; i++) {
			var checkbox = bgCheckBoxes[i];
			if (checkbox && checkbox.checked) {
				selectedBattlegrounds.push(checkbox.value);
			}
		}
		selectedBattlegrounds = selectedBattlegrounds.join();
		return selectedBattlegrounds;
	}

	function getSelectedMapBattlegrounds() {
		var selectedBattlegrounds = [];
		var locationID = $("#location").val();
		var selects = document.getElementsByName("map-battleground");
		for (var i = 0; i < selects.length; i++) {
			var select = selects[i];
			if (select.value > 0) {
				selectedBattlegrounds.push(locationID + "-" + i + "-" + select.value);
			}
		}
		selectedBattlegrounds = selectedBattlegrounds.join();
		return selectedBattlegrounds;
	}

	function displayDebugEnd(result, matchPoints) {
		var msg = '';
        if (matchPoints !== undefined) {
            msg = ' (' + SIMULATOR.calculatePoints() + ' points)';
        }
        if (result === 'draw') {
            msg = '<br><h1>DRAW' + msg + '</h1><br>';
        } else if (result) {
            msg = '<br><h1>WIN' + msg + '</h1><br>';
        } else {
            msg = '<br><h1>LOSS' + msg + '</h1><br>';
        }

        displayTurns();
        setSimStatus(msg);

        showUI();
	}

	// Modify HTML to output simulation results
	function displayText(text) {
		$('#content').html(text);
	}

	function displayTurns(closeDiv) {
		var turnData = debugLog.getLog();
		if (!turnData) {
			return;
		}

		if (closeDiv) {
			turnData += "</div>";
		}
		turnData = "<input id='show-turns' type='button' value='Show All' /> <div id='turn-container'>Turn: <select id='turn-picker'></select></div> <div>" + turnData + "</div>";
		displayText(turnData);
		var numTurns = $(".turn-info").hide().length;
		var options = [];
		for (var i = 0; i < numTurns; i++) {
			var turn = i + 1;
			options.push("<option value='" + i + "'>" + turn + "</option>");
		}
		var lastTurn = i - 1;
		if (lastTurn && closeDiv) lastTurn--;
		$("#turn-picker").append(options).change(function (event) {
			var turn = event.target.selectedIndex;
			$(".turn-info").hide().eq(turn).show();
		}).val(lastTurn).change();
		var hidden = true;
		$("#show-turns").click(function () {
			hidden = !hidden;
			if (hidden) {
				var turn = $("#turn-picker").val();
				$(".turn-info").hide().eq(turn).show();
				$("#turn-container").show();
				this.value = "Show All";
			} else {
				$(".turn-info").show();
				$("#turn-container").hide();
				this.value = "Show One";
			}
		});
	}

	// Return table of simulation results
	function showWinrate() {

		if (debugLog.enabled || SIMULATOR.remainingSims === 0) {
			// Generate links
			var links = '';
			links += '<br>' +
				'<br>' +
				'<i>Non-autostart link</i>' +
				'<br>' +
				'<a href="' + generateLink() + '">' + generateLink() + '</a>' +
				'<br>' +
				'<br>' +
				'<i>Autostart link</i>' +
				'<br>' +
				'<a href="' + generateLink(1) + '">' + generateLink(1) + '</a>' +
				'<br>' +
				'<br>';
			if (debugLog.enabled) return links;
		}
		// Win/Loss ratios
		var winPercent = matchStats.matchesWon / matchStats.matchesPlayed;
		var winrate = (winPercent * 100).toFixed(2) + "%";
		$("#wins").html(matchStats.matchesWon);
		$("#winrate").html(winrate);

		var lossrate = matchStats.matchesLost / matchStats.matchesPlayed * 100;
		lossrate = lossrate.toFixed(2) + "%";
		$("#losses").html(matchStats.matchesLost);
		$("#lossrate").html(lossrate);

		var drawrate = matchStats.matchesDrawn / matchStats.matchesPlayed * 100;
		drawrate = drawrate.toFixed(2) + "%";
		$("#draws").html(matchStats.matchesDrawn);
		$("#drawrate").html(drawrate);

		var mErr = _marginOfError(matchStats.matchesWon, matchStats.matchesPlayed);
		$("#marginGames").html((mErr * matchStats.matchesPlayed).toFixed(0));
		mErr = mErr.toFixed(2) + "%";
		$("#marginPercent").html(mErr);

		var totalSims = matchStats.matchesPlayed + SIMULATOR.remainingSims;
		var percentComplete = (matchStats.matchesPlayed * 100 / totalSims).toFixed("2") + "%";
		$(".battleCount").html(matchStats.matchesPlayed);
		$("#percentComplete").html(percentComplete);

		// Calculate Average length of battle
		$("#avgLength").html((matchStats.totalTurns / matchStats.matchesPlayed).toFixed(1));

		$("#avgPoints").html((matchStats.totalPoints / matchStats.matchesPlayed).toFixed(2));

		$("#winrateTable").show();
		// Final output
		var full_table = "";
		if (SIMULATOR.remainingSims === 0) {
			// Add generated links to final output
			full_table += links;

			// Append results to history

			var current_deck = '';
			var deck = [];
			var deck1Hash = document.getElementById('deck1').value;

			// Load player deck
			if (deck1Hash) {
				deck.player = base64.decodeHash(deck1Hash);
			}
			if (deck.player) {
				current_deck = base64.encodeHash(deck.player);
			}

			battleHistory += winrate + ' (+/- ' + mErr + ') &nbsp; &nbsp; ' + current_deck + '<br>';
		}

		return full_table;
	}

	function hideTable() {
		$("#winrateTable").hide();
	}

	function setSimStatus(simStatusMsg, elapse, simsPerSec) {
		$("#simStatusMsg").html(simStatusMsg);
		if (elapse && simsPerSec) {
			var totalSims = matchStats.matchesPlayed + SIMULATOR.remainingSims;
			var percentComplete = (matchStats.matchesPlayed * 100 / totalSims).toFixed("2") + "%";
			var progress = ('(' + matchStats.matchesPlayed + '/' + totalSims + ') ' + percentComplete);
			$("#progress").html(progress);
			$("#speed").show();
			$("#elapsed").html(elapse);
			$("#simsPerSec").html(simsPerSec);
		} else {
			$("#progress").html("");
			$("#speed").hide();
		}
		$("#simulationStatus").show();
	}

	// http://onlinestatbook.com/2/estimation/proportion_ci.html
	function _marginOfError(wins, games) {
		if (games <= 1) return 1;

		var p = wins / games;
		var N = games;
		var stdErr = Math.sqrt((p * (1 - p)) / N);
		var Z95 = 1.96;
		return ((stdErr * Z95) + 0.5 / N) * 100;
	}

	// Generate a link from current settings and input
	function generateLink(autostart) {
		var url_base = document.URL;
		var index_of_query = url_base.indexOf('?');
		if (index_of_query > 0) {
			url_base = url_base.substring(0, index_of_query);
		}

		var parameters = [];
		_addValueParam(parameters, "deck1");
		_addValueParam(parameters, "deck2");

		_addValueParam(parameters, "location");
		_addValueParam(parameters, "campaign");
		_addValueParam(parameters, "mission");
		_addValueParam(parameters, "mission_level");
		_addValueParam(parameters, "raid");
		_addValueParam(parameters, "raid_level");
		var mapBges = $('select[name=map-battleground]').toArray().reduce(function (acc, val) { return acc + val.value; }, "");
		if (mapBges.length) {
			parameters.push('mapBges=' + mapBges);
		}

		_addBoolParam(parameters, "surge");

		if (_addBoolParam(parameters, "siege")) {
			_addValueParam(parameters, "tower_level");
			_addValueParam(parameters, "tower_type");
		}

		_addBoolParam(parameters, "auto_mode");
		_addBoolParam(parameters, "tournament");
		_addBoolParam(parameters, "ordered");
		_addBoolParam(parameters, "exactorder");
		_addBoolParam(parameters, "ordered2");
		_addBoolParam(parameters, "exactorder2");

		_addBgeParam(parameters, 'battleground', 'bges', 0);
		_addBgeParam(parameters, 'self-battleground', 'selfbges', 10000);
		_addBgeParam(parameters, 'enemy-battleground', 'enemybges', 10000);

		_addValueParam(parameters, "sims");

		_addBoolParam(parameters, "debug");
		_addBoolParam(parameters, "mass_debug");
		_addBoolParam(parameters, "loss_debug");
		_addBoolParam(parameters, "win_debug");
		_addBoolParam(parameters, "play_debug");

		if (autostart) {
			parameters.push('autostart');
		}

		if (parameters.length > 0) {
			return url_base + '?' + parameters.join('&');
		} else {
			return url_base;
		}
	}

	function _addValueParam(params, paramName, fieldName) {
		var value = $("#" + (fieldName || paramName)).val();
		if (value) {
			params.push(paramName + "=" + value);
			return true;
		} else {
			return false;
		}
	}

	function _addBoolParam(params, paramName) {
		var checked = $("#" + paramName).is(":checked");
		if (checked) {
			params.push(paramName);
			return true;
		} else {
			return false;
		}
	}

	function _addBgeParam(params, elementName, paramName, offset) {
		var bges = [].slice.call(document.getElementsByName(elementName))
			.filter(function (bgeEl) { return bgeEl.checked; })
			.map(function (bgeEl) { return base64.fromDecimal(bgeEl.value - offset, 2); })
			.join('');
		if (bges) {
			params.push(paramName + '=' + bges);
		}
	}

	var deckBuilders = {};
	function loadDeckBuilder(player) {
		var deckHash;
		var selectedMission;
		var missionLevel;
		var selectedRaid;
		var raidLevel;
		var deck;

		if (player === 'player') {
			deckHash = $('#deck1').val();
		} else {
			deckHash = $('#deck2').val();
			selectedMission = $('#mission').val();
			missionLevel = $('#mission_level').val();
			selectedRaid = $('#raid').val();
			raidLevel = $('#raid_level').val();
		}

		// Load player deck
		if (deckHash) {
			deck = base64.decodeHash(deckHash);
		} else if (selectedMission) {
			deck = loadDeck.mission(selectedMission, missionLevel);
		} else if (selectedRaid) {
			deck = loadDeck.raid(selectedRaid, raidLevel);
		} else {
			deck = loadDeck.defaultDeck();
		}
		var hash = base64.encodeHash(deck);

		var name = (player === 'player' ? 'Player Deck' : 'Enemy Deck');
		var deckHashField = (player ? $("#" + (player === 'player' ? 'deck1' : 'deck2')) : null);

		var currentDeckBuilder = deckBuilders[player];
		if (!currentDeckBuilder || currentDeckBuilder.closed) {
			deckBuilders[player] = _openDeckBuilder(name, hash, null, deckHashField);
		}
		else {
			currentDeckBuilder.focus();
		}
	}

	function _openDeckBuilder(name, hash, inventory, deckHashField) {
		var parameters = ["nosort"];
		if (hash) {
			parameters.push("hash=" + hash);
		}
		if (inventory) {
			parameters.push("inventory=" + inventory);
		}

		if (name) {
			parameters.push("name=" + name);
		}
		if (urlHelper.paramDefined("ajax")) {
			parameters.push("ajax");
		}
		parameters.push("fromSim");

		var url = "DeckBuilder.html?" + parameters.join('&');

		var width = Math.min(screen.width, 1000);
		var height = Math.min(screen.height, 700);
		var left = Number((screen.width - width) / 2);
		var top = Number((screen.height - height) / 2);

		var windowFeatures = 'scrollbars,left=' + left + 'top=' + top + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
		var win = window.open(url, '', windowFeatures);

		// Push values to window once it has loaded
		//$(win).load((function (deckHashField) {
		win.addEventListener('load', (function createOnLoad(deckHashField) {
			return function linkToDeckHashField() {
				// Tie deck-builder back to the hash field in the simulator.
				if (deckHashField) win.updateSimulator = function (hash) { deckHashField.val(hash).change(); };
			};
		})(deckHashField));

		return win;
	}

	function _doneLoading() {
		$("body").removeClass("loading");
		simTutorial.checkTutorial();
	}

	function updateGameData(callback) {
		var done = _doneLoading;
		if (callback) {
			done = function () {
				_doneLoading();
				callback();
			};
		}
		dataUpdater.updateData(done, true);
	}

	function loadSavedDeck(hashField) {
		$('label[for="loadDeckName"]').html('<strong>Deck:</strong>');
		loadDeckDialog.dialog("open");
		loadDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });

		loadDeckDialog.hashField = hashField;
	}

	function _onDeckLoaded(newHash, hashField) {
		$(hashField).val(newHash).change();
	}

	var dark = false;
	function toggleTheme() {
		if (dark) {
			$("#theme").attr("href", "dist/light.min.css");
			$("#toggleTheme").val("Dark Theme");
		} else {
			$("#theme").attr("href", "dist/dark.min.css");
			$("#toggleTheme").val("Light Theme");
		}
		dark = !dark;
	}

	function getConfiguration() {
        var playerHash = $('#deck1').val();
        var playerOrdered = $('#ordered').is(':checked');
        var playerExactOrder = $('#exactorder').is(':checked');

        var cpuHash = $('#deck2').val();
        var selectedCampaign = $('#campaign').val();
        var selectedMission = $('#mission').val();
        var missionLevel = $('#mission_level').val();
        var selectedRaid = $('#raid').val();
        var raidLevel = $('#raid_level').val();
        var cpuOrdered = $('#ordered2').is(':checked');
        var cpuExactOrder = $('#exactorder2').is(':checked');
        var surgeMode = $('#surge').is(':checked');
        var pvpAI = (!cpuHash && (selectedMission || selectedRaid)); // PvE decks do not use "Smart AI"

        var siegeMode = $('#siege').is(':checked');
        var towerLevel = $('#tower_level').val();
        var towerType = $('#tower_type').val();

        var selectedBges = '';
        var selfbges = '';
        var enemybges = '';
        var mapbges = '';
        if (BATTLEGROUNDS) {
            selectedBges = getSelectedBattlegrounds();
            selfbges = getSelectedBattlegrounds("self-");
            enemybges = getSelectedBattlegrounds("enemy-");
            mapbges = (selectedMission ? getSelectedMapBattlegrounds() : "");
        }

        var simsToRun = $('#sims').val() || 1;

        debugLog.enabled = $('#debug').is(':checked');
        if(debugLog.enabled) {
            debugLog.cardsPlayedOnly = $('#play_debug').is(':checked');
            if (debugLog.cardsPlayedOnly) debugLog.enabled = false;
            debugLog.massDebug = $('#mass_debug').is(':checked');
            debugLog.firstWin = $('#win_debug').is(':checked');
            debugLog.firstLoss = $('#loss_debug').is(':checked');
        }
        animations.areShown = $('#animations').is(':checked');
		setSimulatorEventHandlers(animations.areShown);

        var userControlled = false;
        if ($('#auto_mode').length) {
            userControlled = !$('#auto_mode').is(':checked');
            SIMULATOR.user_controlled = userControlled;
        }

        // Not currently in UI - attacker's first card has +1 delay
        var tournamentMode = $("#tournament").is(":checked");

        return {
            playerHash: playerHash,
            playerOrdered: playerOrdered,
            playerExactOrder: playerExactOrder,
            cpuHash: cpuHash,
            selectedCampaign: selectedCampaign,
            selectedMission: selectedMission,
            missionLevel: missionLevel,
            selectedRaid: selectedRaid,
            raidLevel: raidLevel,
            cpuOrdered: cpuOrdered,
            cpuExactOrder: cpuExactOrder,
            surgeMode: surgeMode,
            siegeMode: siegeMode,
            towerLevel: towerLevel,
            towerType: towerType,
            selectedBges: selectedBges,
            selfbges: selfbges,
            enemybges: enemybges,
            mapbges: mapbges,
            simsToRun: simsToRun,
            userControlled: userControlled,
            tournamentMode: tournamentMode,
            pvpAI: pvpAI
        };
	}
	
	function setSimulatorEventHandlers(showAnimations) {
		if (showAnimations) {
			SIMULATOR.events.onCardPlayed = function onCardPlayed(field, turn) {
				animations.drawField(field, null, null, turn);
			};
			SIMULATOR.events.onEarlyActivationSkills = function onEarlyActivationSkills(field, turn, sourceCard) {
				animations.drawField(field, null, null, turn, sourceCard);
			};
			SIMULATOR.events.onActivationSkills = function (field, turn, sourceUnit) {
				animations.drawField(field, null, null, turn, sourceUnit);
			};
			SIMULATOR.events.onOnDeathSkills = function onOnDeathSkills(field, turn, dying) {
				animations.drawField(field, null, null, turn, dying);
			};
			SIMULATOR.events.onUnitAttacked = function onUnitAttacked(field, turn, current_assault) {
				animations.drawField(field, null, null, turn, current_assault);
			};
			SIMULATOR.events.onUnitDone = function onUnitDone(field, turn, current_assault) {
				animations.drawField(field, null, null, turn, current_assault);
			};
		} else {
			var noop = function noop() {};
			SIMULATOR.events.onCardPlayed = noop;
			SIMULATOR.events.onEarlyActivationSkills = noop;
			SIMULATOR.events.onActivationSkills = noop;
			SIMULATOR.events.onOnDeathSkills = noop;
			SIMULATOR.events.onUnitAttacked = noop;
			SIMULATOR.events.onUnitDone = noop;
		}

		SIMULATOR.events.onPresentCardChoice = function onPresentCardChoice(field, drawableHand, onCardChosen, turn) {
			hideTable();
			displayTurns(true);
			animations.drawField(field, drawableHand, onCardChosen, turn);
		};
		SIMULATOR.events.onCardChosen = animations.clearFrames;
	}


	function clearHistory() {
		battleHistory = '';
		displayHistory();
	}

	function displayHistory() {
		displayText('' +
			'<br>' +
			'<hr>' +
			(battleHistory || 'No history available.') +
			'<hr>' +
			'<br>' +
			'<br>' +
			'<input id="clear-history" type="button" value="Clear History" style="text-align: center; font-weight: normal;">' +
			'<br>' +
			'<br>' +
			'');
		$('#clear-history').click(clearHistory);
	}

	$(function () {
		loadDeckDialog = $("#loadDeckDialog").dialog({
			autoOpen: false,
			minWidth: 320,
			/*
			minHeight: 20,
			*/
			modal: true,
			resizable: false,
			buttons: {
				Delete: function () {
					var name = $("#loadDeckName").val();
					storageAPI.deleteDeck(name);
				},
				Load: function () {
					var name = $("#loadDeckName").val();
					var newHash = storageAPI.loadDeck(name);
					_onDeckLoaded(newHash, loadDeckDialog.hashField);
					loadDeckDialog.dialog("close");
				},
				Cancel: function () {
					loadDeckDialog.dialog("close");
				}
			}
		});

		$("#display_history").on("click", displayHistory);
	});

	// Temporary fix for HTML access
	window.ui = api;

	return api;
});;define('startup', [
	'base64',
	'urlHelper',
	'simController',
	'bgeApi',
	'cardUI',
	'loadDeck',
	'loadCardCache',
	'simTutorial',
	'ui'
], function (
	base64,
	urlHelper,
	simController,
	bgeApi,
	cardUI,
	loadDeck,
	loadCardCache,
	simTutorial,
	ui
) {
	'use strict';

    var mapBGEDialog;
	var deckPopupDialog;

    function setDeckSortable(deckField, associatedHashField) {
        $(deckField).sortable({
            items: '.card:not(.commander):not(.blank)',
            tolerance: "intersect",
            helper: function (event, ui) {
                return ui.clone();
            },
            start: function (event, ui) {
                var origPos = ui.placeholder.index() - 1;
                ui.item.data('origPos', origPos);
                $(ui.item).hide();
            },
            stop: function (event, ui) {
                var origPos = ui.item.data('origPos') - 1;
                var newPos = ui.item.index() - 1;

                var hashField = $(associatedHashField);
                var deck = base64.decodeHash(hashField.val());
                var array = deck.deck;
                array.splice(newPos, 0, array.splice(origPos, 1)[0]);
                var hash = base64.encodeHash(deck);
                hashField.val(hash);
            }
        });
    }

    function showTooltip(event) {
        var $container = $("#tooltip");
        var $text = $("#tooltip-text");

        $text.html($(event.target).attr('bge-desc'));
        $text.width(200);
        $container.show();

        $("#tooltip .arrow")
            .css("borderTopWidth", 0)
            .css("borderBottomWidth", 0);

        var offset = $(event.target).offset();
        offset.left -= 230;
        offset.top -= ($container.outerHeight() / 2) - 10;
        $container.offset(offset);

        var arrowHeight = $text.innerHeight() / 2 - 4;

        $("#tooltip .arrow")
            .css("borderTopWidth", arrowHeight)
            .css("borderBottomWidth", arrowHeight);
    }

    function hideTooltip() {
        $("#tooltip").hide();
    }

    function deckChanged(deckID, newDeck, owner) {
        var $deck = $("#" + deckID);
        $deck.children().remove();
        if (!urlHelper.paramDefined("seedtest")) {
			var config = ui.getConfiguration();
            var battlegrounds = bgeApi.getBattlegrounds(config.getbattleground, config.selfbges, config.enemybges, config.mapbges, config.selectedCampaign, config.missionLevel, config.selectedRaid, config.raidLevel);
            battlegrounds = battlegrounds.onCreate.filter(function (bge) {
                return !((owner === 'player' && bge.enemy_only) || (owner === 'cpu' && bge.ally_only));
            });

            $deck.append(cardUI.deckToHtml(newDeck, false, battlegrounds));
        }
    }

    function showMapBGEs() {
        mapBGEDialog.dialog("open");
        mapBGEDialog.dialog("option", "position", { my: "center", at: "center", of: window });
    }

	function displayGeneratedLink() {
		ui.displayText('' +
			'<br>' +
			'<i>Non-autostart link</i>' +
			'<br>' +
			'<a href="' + ui.generateLink() + '">' + ui.generateLink() + '</a>' +
			'<br>' +
			'<br>' +
			'<i>Autostart link</i>' +
			'<br>' +
			'<a href="' + ui.generateLink(1) + '">' + ui.generateLink(1) + '</a>' +
			'<br>' +
			'<br>' +
			'');
	}

	function setSelectedMapBattlegrounds(mapBgeString) {
		var selects = document.getElementsByName("map-battleground");
		for (var i = 0; i < mapBgeString.length && i < selects.length; i++) {
			selects[i].value = mapBgeString[i];
		}
	}

	// When Page Loads...
	function processQueryString() {

		$("#header").load("templates/header.html", function () {
			$("#help").click(simTutorial.showTutorial);
		});
		$.holdReady(true);
		$("#footer").load("templates/footer.html", function () {
			$.holdReady(false);
		});

		var ui = document.getElementById('ui');
		if (!ui) return 0;

		$("#generate_link").on("click", displayGeneratedLink);

		$("#btn_simulate").on("click", simController.startsim);
		$("#btnStop").on("click", simController.stopsim);

		$('#deck1').val(urlHelper.paramValue('deck1')).change();
		$('#deck2').val(urlHelper.paramValue('deck2')).change();

		$('#surge').prop("checked", urlHelper.paramDefined("surge"));
		$('#siege').prop("checked", urlHelper.paramDefined("siege"));
		var towerLevel = Math.min(Math.max(urlHelper.paramValue('tower_level') || 18, 0), 18);
		$('#tower_level').val(towerLevel);

		var towerType = (urlHelper.paramValue('tower_type') || 501);
		$("#tower_type").val(towerType);

		$('#auto_mode').prop("checked", urlHelper.paramDefined("auto_mode"));
		$('#tournament').prop("checked", urlHelper.paramDefined("tournament"));
		$('#ordered').prop("checked", urlHelper.paramDefined("ordered"));
		$('#exactorder').prop("checked", urlHelper.paramDefined("exactorder"));

		$('#ordered2').prop("checked", urlHelper.paramDefined("ordered2"));
		$('#exactorder2').prop("checked", urlHelper.paramDefined("exactorder2"));

		var locationID = urlHelper.paramValue('location');
		var campaignID = urlHelper.paramValue('campaign');
		var missionID = urlHelper.paramValue('mission');
		var raidID = urlHelper.paramValue('raid');
		if (locationID) $('#location').val(locationID).change();
		if (campaignID) {
			if (!locationID) {
				locationID = CAMPAIGNS[campaignID].location_id;
				$('#location').val(locationID).change();
			}
			$('#campaign').val(campaignID).change();
		}
		if (missionID) {
			$('#mission_level').val(urlHelper.paramValue('mission_level') || 7);
			$('#mission').val(missionID).change();
		}
		if (raidID) {
			$('#raid_level').val(urlHelper.paramValue('raid_level') || 25);
			$('#raid').val(raidID).change();
		}

		if (urlHelper.paramDefined("bges")) {
			var bges = urlHelper.paramValue('bges');
			// Each BGE is a 2-character ID in Base64
			for (var i = 0; i < bges.length; i += 2) {
				var bge = base64.toDecimal(bges.substring(i, i + 2));
				$("#battleground_" + bge).prop('checked', true);
			}
		} else {
			// Load current battlegrounds
			for (var i = 0; i < current_bges.length; i++) {
				$("#battleground_" + current_bges[i]).prop('checked', true);
			}
		}
		var bges = urlHelper.paramValue('selfbges');
		if (bges) {
			// Each BGE is a 2-character ID in Base64
			for (var i = 0; i < bges.length; i += 2) {
				var bge = base64.toDecimal(bges.substring(i, i + 2)) + 10000;
				$("#self-battleground_" + bge).prop('checked', true);
			}
		}
		var bges = urlHelper.paramValue('enemybges');
		if (bges) {
			// Each BGE is a 2-character ID in Base64
			for (var i = 0; i < bges.length; i += 2) {
				var bge = base64.toDecimal(bges.substring(i, i + 2)) + 10000;
				$("#enemy-battleground_" + bge).prop('checked', true);
			}
		}

		var mapBges = urlHelper.paramValue("mapBges");
		if (mapBges) {
			setSelectedMapBattlegrounds(mapBges);
		}

		$("#battleground").change();

		$('#sims').val(urlHelper.paramValue('sims') || 10000);

		if (urlHelper.paramDefined("debug")) $('#debug').click();
		if (urlHelper.paramDefined("mass_debug")) $('#mass_debug').click();
		if (urlHelper.paramDefined("loss_debug")) $('#loss_debug').click();
		if (urlHelper.paramDefined("win_debug")) $('#win_debug').click();
		if (urlHelper.paramDefined("play_debug")) $('#play_debug').click();

		document.title = "SimSpellstone " + text_version + " - The Spellstone Simulator that runs from your browser!";

		if (urlHelper.paramDefined('autostart') && !urlHelper.paramDefined("latestCards")) {
			simController.startsim();
		} else if (urlHelper.paramDefined('unit_tests')) {
			var body = document.getElementsByTagName("body")[0];
			var script = document.createElement("script");
			script.src = "scripts/unit_tests.js";
			body.appendChild(script);
			script.onload = function () {
				var script = document.createElement("script");
				script.src = "scripts/unit_test_runner.js";
				body.appendChild(script);
			};
		}

		if (document.getElementById("missionDeckDialog")) {
			deckPopupDialog = $("#missionDeckDialog").dialog({
				autoOpen: false,
				minWidth: 500,
				minHeight: 20,
				modal: true,
				resizable: false,
				draggable: false,
				buttons: {
					Close: function () {
						deckPopupDialog.dialog("close");
					}
				},
				open: function (event, ui) { $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); }
			});
		}
	}

    $(function () {

        $("#deck1").change(function () {
            this.value = this.value.trim();
            deckChanged("attack_deck", base64.decodeHash(this.value), 'player');
        });

        $("#deck2").change(function () {
            this.value = this.value.trim();
            deckChanged("defend_deck", base64.decodeHash(this.value), 'cpu');
        });

        $("#battleground").change(function () {
            $("#deck1").change();
            if ($("#deck2").val()) {
                $("#deck2").change();
            } else if ($("#mission").val()) {
                $("#mission").change();
            } else if ($("#raid").val()) {
                $("#raid").change();
            }
        });

        var bges = $('label[bge-desc]');
        for (var i = 0; i < bges.length; i++) {
            var lblBge = $(bges[i]);
            lblBge.hover(showTooltip, hideTooltip);
        }

        $(".accordion").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        }).filter(".start-open").accordion('option', 'active', 0);

        $("#raid, #raid_level").change(function () {
            var newDeck;
            var selectedRaid = $("#raid").val();
            var raidLevel = $('#raid_level');
            if (selectedRaid) {
                newDeck = loadDeck.raid(selectedRaid, raidLevel.val());
                if (RAIDS[selectedRaid].type === "Dungeon") {
                    raidLevel.attr("max", 150);
                } else {
                    raidLevel.attr("max", 40);
                }
            } else {
                newDeck = base64.decodeHash('');
                raidLevel.attr("max", 40);
            }

            deckChanged("defend_deck", newDeck, 'cpu');
        });

        $("#location, #campaign").change(function () {
            $("#mission").change();
        });

        $("#mission, #mission_level").change(function () {
            var newDeck;
            var missionID = $('#mission').val();
            if (missionID) {
                var missionLevel = $('#mission_level').val();
                newDeck = loadDeck.mission(missionID, missionLevel);
            } else {
                newDeck = base64.decodeHash('');
            }
            deckChanged("defend_deck", newDeck, 'cpu');
        });

		$('#config-map-bge').click(showMapBGEs);
		
		$('#restart').click(simController.startsim);
		$('#stop').click(simController.stopsim);

        mapBGEDialog = $("#bgeDialog").dialog({
            autoOpen: false,
            minWidth: 320,
            modal: true,
            resizable: false,
            buttons: {
                OK: function () {
                    mapBGEDialog.dialog("close");
                },
                Cancel: function () {
                    mapBGEDialog.dialog("close");
                }
            }
        });

        deckChanged("attack_deck", base64.decodeHash(''));
        deckChanged("defend_deck", base64.decodeHash(''));

        setDeckSortable("#attack_deck", '#deck1');
        setDeckSortable("#defend_deck", '#deck2');

		loadCardCache();

        processQueryString();
    });
});;// Convert skills to 1.0 version
for(var skillID in SKILL_DATA) {
	var skillInfo = SKILL_DATA[skillID];
	if(skillID === 'flurry') {
		skillInfo.type = 'flurry';
	} else if(['turnStart', 'onAttack', 'onDamaged', 'turnEnd'].indexOf(skillInfo.type) >= 0) {
		skillInfo.type = 'passive';
	}
}
// Create REVERSE_FUSIONS
var REVERSE_FUSIONS = {};
for(var id in FUSIONS) {
	var fusion = FUSIONS[id];
	REVERSE_FUSIONS[fusion] = id;
}

// Remove Iceshatter Barrier
delete BATTLEGROUNDS[104];;define('simulatorBase', [
	'cardApi',
	'base64',
	'unitInfoHelper',
	'loadDeck',
	'simController'
], function (
	cardApi,
	base64,
	unitInfoHelper,
	loadDeck,
	simController
) {
	'use strict';

	var SIMULATOR = {};
	window.SIMULATOR = SIMULATOR;
	
	var max_turns = 100;
	var playerDeckCached;
	var cpuDeckCached;
	var cpuCardsCached;
	var playerCardsCached;
	var logMessage;

	// Play card
	function playCard(card, p, turn, quiet) {
		var field_p_assaults = field[p]['assaults'];

		// Not a valid card
		if (!card.id) return 0;

		var newKey = field_p_assaults.length;
		unitInfoHelper.initializeUnit(card, p, newKey);
		card.played = true;

		if (card.isAssault()) {
			field_p_assaults[newKey] = card;
		}

		if (!quiet) {
			logMessage('logCardPlayed', field[p].commander, card);
		}

		if (card.isTrap()) {
			doEarlyActivationSkills(card);
			doActivationSkills(card);
		} else {
			// Activate trap/onPlay battlegrounds
			for (var i = 0; i < battlegrounds.onCardPlayed.length; i++) {
				var battleground = battlegrounds.onCardPlayed[i];
				var o = (p === 'player' ? 'cpu' : 'player');

				var surge = SIMULATOR.config.surgeMode;
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
		events.onCardPlayed(field, turn);
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
				logMessage('logDead', current_assault);
				var newkey = key;	// Store the new key value for the next alive unit
				for (key++; key < len; key++) {
					current_assault = units[key];
					// If this unit is dead, don't update newkey, we still need to fill that slot
					if (!current_assault.isAlive()) {
						logMessage('logDead', current_assault);
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
		if (card.owner === 'cpu') return 'player';
		if (card.owner === 'player') return 'cpu';
	}

	function getOpposingField(card) {
		return field[getOpponent(card)];
	}

	// Deal damage to card
	// and keep track of cards that have died this turn
	function doDamage(sourceUnit, targetUnit, damage, logFn) {
		if (damage >= targetUnit.health_left) {
			targetUnit.health_left = 0;
		} else {
			targetUnit.health_left -= damage;
		}

		logFn();

		if (!targetUnit.isAlive() && sourceUnit) {
			doOnDeathSkills(targetUnit, sourceUnit);
		}
	}

	function getActivatedSkill(skillMap, skillId) {
		return (skillMap[skillId] || notImplemented);
	}

	function notImplemented(sourceUnit, skill) {
		logMessage('logNotImplemented', sourceUnit, skill);
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
			logMessage('logSilenced', sourceCard);
			return;
		}

		var dualstrike = sourceCard.dualstrike_triggered;
		logMessage('logDualstrike', sourceCard);

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

					events.onEarlyActivationSkills(field, turn, sourceCard);
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
		if (len === 0) return;

		for (var i = 0; i < len; i++) {
			var skill = skills[i];
			onDeathSkills[skill.id](dying, killer, skill);

			events.onOnDeathSkills(field, turn, dying);
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
			var enhancement = unitInfoHelper.getEnhancement(defender, 'backlash', baseDamage);
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
			logMessage('logScorch', sourceUnit, scorch);

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
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, 'burn', scorch);
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
				logMessage('logScorch', sourceUnit, scorch, target);

				affected++;
			}

			return affected;
		},

		// Protect (Barrier)
		// - Can target specific faction
		// - Targets allied assaults
		// - Can be enhanced
		protect_seafolk: function (sourceUnit, skill) {
			return activationSkills.protect(sourceUnit, skill, null, null, true);
		},
		evadebarrier: function (sourceUnit, skill) {
			return activationSkills.protect(sourceUnit, skill, "invisible", function (target, amount) {
				return ' and imbues it with invisible ' + amount;
			});
		},
		protect: function (sourceUnit, skill, additionalStatus, additionalDebug, onlyOnDelay) {

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
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, protect);
			protect += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					logMessage('logNullified', sourceUnit, 'protects', target);
					continue;
				}

				affected++;

				var amount = protect;
				if (!amount) {
					var mult = skill.mult;
					if (!target.isActive()) {
						mult += (skill.on_delay_mult || 0);
					}
					amount = Math.ceil(target.health * mult);
				}

				target.protected += amount;
				if (additionalStatus) {
					target[additionalStatus] = (target[additionalStatus] || 0) + amount;
				}
				logMessage('logStatusEffect', sourceUnit, 'barriers', target, enhanced, amount, additionalDebug);
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
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, heal);
			heal += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					logMessage('logNullified', sourceUnit, 'heals', target);
					continue;
				}

				affected++;

				var amount = heal;
				if (!amount) {
					var mult = skill.mult;
					amount = Math.ceil(target.health * mult);
				}

				if (amount > target['health'] - target['health_left']) amount = target['health'] - target['health_left'];
				target['health_left'] += amount;
				logMessage('logStatusEffect', sourceUnit, 'heals', target, enhanced, amount);
			}

			return affected;
		},

		// Strike (Bolt)
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Must calculate enfeeble/protect
		// - Can be enhanced
		poisonstrike: function (sourceUnit, skill) {
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
				var targetUnit = field_x_assaults[key];
				if (targetUnit.isAlive() && targetUnit.isInFaction(faction)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}

			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, strike);
			strike += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var targetUnit = field_x_assaults[targets[key]];

				// Check Evade
				if (targetUnit.invisible) {
					targetUnit.invisible--;
					logMessage('logInvisibile', sourceUnit, 'bolts', targetUnit);
					continue;
				}

				affected++;

				var strike_damage = strike;

				// Check Protect/Enfeeble
				var damageInfo = modifySkillDamage(targetUnit, strike_damage, enhanced);
				strike_damage = damageInfo.damage;

				var poisonDamage = 0;
				if (strike_damage > 0 && poison && targetUnit.isAlive()) {
					if (strike > targetUnit['poisoned']) {
						poisonDamage = strike;
						targetUnit['poisoned'] = poisonDamage;
					}
				}

				doDamage(sourceUnit, targetUnit, strike_damage, function () {
					logMessage('logDamage', sourceUnit, targetUnit, 'Strike', 'bolts', damageInfo, function() {
						if (poisonDamage && !targetUnit.isAlive()) {
							return ' and inflicts poison(' + poisonDamage + ') on it';
						}
					});
				});

				if (targetUnit.backlash) {
					backlash(sourceUnit, targetUnit);
				}
			}

			return affected;
		},

		// Intensify
		// - Can target specific faction
		// - Targets poisoned/scorched enemy assaults
		// - Can be evaded
		// - Can be enhanced
		intensify: function (sourceUnit, skill) {

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

			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, intensify);
			intensify += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				var intensifiedFields = (target.scorched ? "scorch" : "");
				intensifiedFields += (target.poisoned ? (intensifiedFields ? " and poison" : "poison") : "");

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					logMessage('logInvisibile', sourceUnit, 'intensifies ' + intensifiedFields + ' on', target);
					continue;
				}

				affected++;

				if (target.scorched) {
					target.scorched.amount += intensify;
				}
				if (target.poisoned) {
					target.poisoned += intensify;
				}

				logMessage('logStatusEffect', sourceUnit, 'intensifies ' + intensifiedFields + ' on', target, enhanced, intensify);

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
		ignite: function (sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var faction = skill.y;

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
		jamself: function jamself(sourceUnit) {

			sourceUnit.jammed = true;
			sourceUnit.jammedSelf = true;
			logMessage('logStatusEffect', sourceUnit, 'freezes', sourceUnit);

			return 1;
		},
		jam: function jam(sourceUnit, skill) {

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
					logMessage('logInvisibile', sourceUnit, 'freezes', target);
					continue;
				}

				affected++;

				target.jammed = true;
				logMessage('logStatusEffect', sourceUnit, 'freezes', target);

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

			var o = getOpponent(sourceUnit);

			var frost = skill.x;
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, frost);
			frost += enhanced;

			var field_x_assaults = field[o]['assaults'];

			var targets = [];

			var i = sourceUnit['key'] - 1;
			var end = i + 2;
			for (; i <= end; i++) {
				var targetUnit = field_x_assaults[i];
				if (targetUnit && targetUnit.isAlive()) {
					targets.push(i);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var targetUnit = field_x_assaults[targets[key]];

				// Check Evade
				if (targetUnit.invisible) {
					targetUnit.invisible--;
					logMessage('logInvisibile', sourceUnit, 'breathes frost at', targetUnit);
					continue;
				}

				affected++;

				var frost_damage = frost;

				// Check Protect/Enfeeble
				// Check Protect/Enfeeble
				var damageInfo = modifySkillDamage(targetUnit, frost_damage, enhanced);
				frost_damage = damageInfo.damage;

				doDamage(sourceUnit, targetUnit, frost_damage, function () {
					logMessage('logDamage', sourceUnit, targetUnit, 'Frostbreath', 'breathes frost at', damageInfo);
				});

				if (targetUnit.backlash) {
					backlash(sourceUnit, targetUnit);
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

			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, heartseeker);
			heartseeker += enhanced;

			target.heartseeker += heartseeker;
			target.enfeebled += heartseeker;
			logMessage('logInflicts', sourceUnit, 'heartseeker', heartseeker, target);

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

			var doApplyDebuff = function (target, skillValue) {
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

			var doApplyDebuff = function (target, skillValue) {
				target.attack_weaken += skillValue;
			};
			return applyDebuff(sourceUnit, skill, 'weakens', targets, field_x_assaults, doApplyDebuff);
		}
	};

	function applyDebuff(sourceUnit, skill, skillVerb, targetKeys, targetField, doApplyDebuff) {

		// No Targets
		if (!targetKeys.length) return 0;

		var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, skill.x);
		var amount = skill.x + enhanced;

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
				logMessage('logInvisibile', sourceUnit, skillVerb, target);
				continue;
			}

			affected++;

			doApplyDebuff(target, amount);
			logMessage('logStatusEffect', sourceUnit, skillVerb, target, enhanced, amount);

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
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, rally);
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

				var amount = rally;
				if (!amount) {
					var mult = skill.mult;
					amount = Math.ceil(target.attack * mult);
				}

				target.attack_rally += amount;
				logMessage('logStatusEffect', sourceUnit, 'enlarges', target, enhanced, amount);

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
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, rally);
			rally += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {

				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					logMessage('logNullified', sourceUnit, 'empowers', target);
					continue;
				}

				affected++;

				var amount = rally;
				if (!amount) {
					var mult = skill.mult;
					amount = Math.ceil(target.attack * mult);
				}

				target.attack_rally += amount;
				logMessage('logStatusEffect', sourceUnit, 'empowers', target, enhanced, amount);
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

			var amount = skill.x;
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, amount);
			amount += enhanced;

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
						logMessage('logNullified', sourceUnit, 'activates legion and empowers', target);
					} else {
						affected++;
						target.attack_rally += amount;
						logMessage('logStatusEffect', sourceUnit, 'activates legion and empowers', target, enhanced, amount);
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
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, rally);
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
				logMessage('logStatusEffect', sourceUnit, 'fervors', target, enhanced, fervorAmount);
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

			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, barrages);
			barrages += enhanced;
			for (var i = 0; i < barrages; i++) {
				var targets = [];
				for (var key = 0, len = field_x_assaults.length; key < len; key++) {
					var targetUnit = field_x_assaults[key];
					if (targetUnit.isAlive() && targetUnit.isInFaction(faction)) {
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
					var targetUnit = field_x_assaults[targets[key]];

					// Check Evade
					if (targetUnit.invisible) {
						targetUnit.invisible--;
						logMessage('logInvisibile', sourceUnit, 'throws a bomb at', targetUnit);
						continue;
					}

					affected++;

					var strike_damage = strike;

					// Check Protect/Enfeeble
					var damageInfo = modifySkillDamage(targetUnit, strike_damage, enhanced, { enfeeble: true });
					strike_damage = damageInfo.damage;

					doDamage(sourceUnit, targetUnit, strike_damage, function () {
						logMessage('logDamage', sourceUnit, targetUnit, 'Barrage', 'throws a bomb at', damageInfo);
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
					logMessage('logNullified', sourceUnit, 'enhances', target);
					continue;
				}

				affected++;

				var enhancements = target.enhanced;
				var amountEnhanced = x;
				if (x > 0) {
					enhancements[s] = (enhancements[s] || 0) + x;
				} else if (mult > 0) {
					// temporarily use negatives for multiplier
					enhancements[s] = -mult;
					var amountEnhanced = (mult * 100) + '%';
				}
				logMessage('logStatusEffect', sourceUnit, 'enhances ' + s + ' of ', target, 0, amountEnhanced);
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
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, enrage);
			enrage += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];
				var amount = enrage;

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					logMessage('logNullified', sourceUnit, 'enrages', target);
					continue;
				}

				affected++;

				if (skill.mult) {
					amount = Math.ceil(skill.mult * target.health);
				}

				target['enraged'] += amount;
				logMessage('logStatusEffect', sourceUnit, 'enrages', target, enhanced, amount);
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

			var faction = skill.y;

			var p = getOwner(sourceUnit);

			var x = skill.x;
			var s = skill.s;
			var all = skill.all;

			var field_p_assaults = field[p].assaults;
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
					logMessage('logNullified', sourceUnit, 'enhances', target);
					continue;
				}

				affected++;

				if (target.hasSkill(s)) {
					var enhancements = target.enhanced;
					enhancements[s] = (enhancements[s] || 0) + x;
					logMessage('logImbuesNew', sourceUnit, target, s, x);
				} else {
					target.imbue(skill);
					logMessage('logImbuesExisting', sourceUnit, target, s, x);
				}
			}

			return affected;
		},

		mark: function (sourceUnit, skill) {

			var faction = skill['y'];

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
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, mark);
			mark += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				affected++;

				target.enfeebled += mark;
				sourceUnit.mark_target = target.uid;

				logMessage('logStatusEffect', sourceUnit, 'marks', target, enhanced, mark);

				// Set countdown so Mark can't trigger twice on dual-strike turn
				skill.countdown = 1;
			}

			return affected;
		}
	};

	var onPlaySkills = {

		ambush: function (sourceUnit, targetUnit, skill) {

			var x = skill.x;
			var base = skill.base;
			var mult = skill.mult;

			var damage = x;
			if (!damage) {
				var mult = skill.mult;
				damage = Math.ceil(targetUnit[base] * mult);
			}

			doDamage(sourceUnit, targetUnit, damage, function () {
				logMessage('logDamage', sourceUnit, targetUnit, 'Ambush', 'ambushes', {
					originalDamage: damage,
					damage: damage
				});
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
			logMessage('logStatusEffect', sourceUnit, 'slows', target, 0, slow);

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
			var unearthedUnit = unitInfoHelper.create((skill.card || dying.id), (skill.level || skill.x));
			var unearthedCard = cardApi.byIdWithBgeApplied(unearthedUnit, null, true);
			unearthedCard.isToken = true;

			var mult = skill.mult;
			if (mult) {
				// Unearthed card has scaled stats based on original card
				unearthedCard.attack = Math.floor(dying.attack * mult);
				unearthedCard.health = Math.floor(dying.health * mult);
			}

			playCard(unearthedCard, dying.owner, true);

			logMessage('logAction', unearthedCard, 'is unearthed');

			return 1;
		},

		reanimate: function (dying, killer, skill) {

			// Only trigger once
			if (dying.reanimated) {
				return 0;
			}

			dying.health_left = skill.x;
			dying.reanimated = true;

			logMessage('logReanimate', dying);

			return 1;
		}
	};

	// Activation Skills
	// - Must traverse through skills from top to bottom
	function doActivationSkills(sourceUnit) {

		if (sourceUnit.silenced) {
			logMessage('logSilenced', sourceUnit);
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

			events.onActivationSkills(field, turn, sourceUnit);
		}
	}

	function initializeBattle(config) {

		SIMULATOR.config = config;
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
		SIMULATOR.field = {
			cpu: {
				assaults: []
			},
			player: {
				assaults: []
			}
		};

		// Load player deck
		if (playerCardsCached) {
			deck['player'] = loadDeck.copyDeck(playerCardsCached);
		}

		// Load enemy deck
		if (config.selectedMission && config.missionLevel > 1 && config.missionLevel < 7) {
			cpuDeckCached = loadDeck.mission(config.selectedMission, config.missionLevel);
			cpuCardsCached = loadDeck.getDeckCards(cpuDeckCached, 'cpu');
		} else if (config.selectedRaid) {
			cpuDeckCached = loadDeck.raid(config.selectedRaid, config.raidLevel);
			cpuCardsCached = loadDeck.getDeckCards(cpuDeckCached, 'cpu');
		}
		if (cpuCardsCached) {
			deck['cpu'] = loadDeck.copyDeck(cpuCardsCached);
		}

		// Set up deck order priority reference
		if (config.playerOrdered && !config.playerExactOrder) deck.player.ordered = loadDeck.copyCardList(deck.player.deck);
		if (config.cpuOrdered && !config.cpuExactOrder) deck.cpu.ordered = loadDeck.copyCardList(deck.cpu.deck);

		deck.player.chooseCard = (config.userControlled ? chooseCardUserManually  // User_controlled mode has the player choose a card manually
			: config.playerOrdered ? chooseCardOrdered           			// Ordered mode tries to pick the card closest to the specified ordering
				: chooseCardRandomly);                     					// Player AI falls back on picking a random card

		deck.cpu.chooseCard = (config.cpuOrdered ? chooseCardOrdered    	// Ordered mode tries to pick the card closest to the specified ordering
			: config.pvpAI ? chooseCardByPoints                			// PvP defenders have a special algorithm for determining which card to play
				: config.cpuExactOrder ? chooseCardRandomly       		// If deck is not shuffled, but we're not playing "ordered mode", pick a random card from hand
					: chooseFirstCard);                         		// If none of the other options are true, this is the standard PvE AI and it just picks the first card in hand
	}

	function shuffle(list) {
		var i = list.length, j, tempi, tempj;
		if (i === 0) return false;
		while (--i) {
			j = ~~(Math.random() * (i + 1));
			tempi = list[i];
			tempj = list[j];
			list[i] = tempj;
			list[j] = tempi;
		}
	}

	// Simulate one game
	function simulate(config) {
		logMessage = simController.getLogFunction();
		simulating = true;

		initializeBattle(config);

		// Shuffle decks
		if (config.playerExactOrder) {
			if (!config.playerOrdered) {
				deck.player.shuffleHand = true;
			}
		} else {
			shuffle(deck.player.deck);
		}
		if (config.cpuExactOrder) {
			if (!config.cpuOrdered) {
				deck.cpu.shuffleHand = true;
			}
		} else {
			shuffle(deck.cpu.deck);
		}

		setupField(field);

		if (config.siegeMode) {
			var towerBGE = BATTLEGROUNDS[config.towerType];
			var tower = towerBGE.effect[config.towerLevel];
			if (tower) {
				tower = unitInfoHelper.create(tower.id, tower.level);
				var towerCard = cardApi.byIdWithBgeApplied(tower);
				var uid = 150;
				towerCard.uid = uid;
				field.uids[uid] = towerCard;
				playCard(towerCard, 'cpu', -1, true);
			}
		}

		return performTurns(0);
	}

	function setupDecks(config) {
		// Cache decks where possible
		// Load player deck
		if (config.playerHash) {
			playerDeckCached = base64.decodeHash(config.playerHash);
		} else {
			playerDeckCached = loadDeck.defaultDeck();
		}
		playerCardsCached = loadDeck.getDeckCards(playerDeckCached, 'player');

		// Load enemy deck
		config.pvpAI = true;
		if (config.cpuHash) {
			cpuDeckCached = base64.decodeHash(config.cpuHash);
			if (config.selectedMission) config.pvpAI = false;
		} else if (config.selectedMission) {
			cpuDeckCached = loadDeck.mission(config.selectedMission, config.missionLevel);
			config.pvpAI = false;    // PvE decks do not use "Smart AI"
		} else if (config.selectedRaid) {
			cpuDeckCached = loadDeck.raid(config.selectedRaid, config.raidLevel);
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

	function onCardChosen(turn, chosenCard) {
		events.onCardChosen();
		performTurns(turn, makePlayChosenCard(chosenCard));
	}

	function performTurns(turn, resumeTurn) {
		if (SIMULATOR.pause) {
			SIMULATOR.pause = false;
			return false;
		}
		var done = performTurnsInner(turn, resumeTurn);
		if (done && user_controlled) {
			simController.debugEnd();
		}
		return done;
	}

	function performTurnsInner(turn, resumeTurn) {
		// Set up players
		var first_player, second_player;
		var surge = SIMULATOR.config.surgeMode;
		if (surge) {
			first_player = 'cpu';
			second_player = 'player';
		} else {
			first_player = 'player';
			second_player = 'cpu';
		}

		if (turn > 0) {
			// Retry this turn - don't bother doing setup all over again
			if (!resumeTurn(turn, field, first_player, second_player, false)) {
				// Try this turn again
				return false;
			}
			if (!field.player.commander.isAlive() || !field.cpu.commander.isAlive()) {
				simulating = false;
				return true;
			}
		}

		turn++;
		// Continue simulation
		for (; turn <= max_turns + 1; turn++) {
			if (turn === max_turns + 1) {
				// Ended in draw
				simulating = false;
				return true;
			}

			setupTurn(turn, first_player, second_player, field);

			if (!performTurn(turn, field, first_player, second_player)) {
				// Try this turn again
				return false;
			} else if (!field.player.commander.isAlive() || !field.cpu.commander.isAlive()) {
				simulating = false;
				logMessage('logTurnEnd', turn);
				return true;
			}
		}
		simulating = false;
		return true;
	}

	function performTurn(turn, field, first_player, second_player) {
		if (turn % 2) {
			var p = first_player;
			var o = second_player;
		} else {
			var p = second_player;
			var o = first_player;
		}

		if (!chooseCard(p, turn)) {
			return false;
		} else {
			performTurnActions(p, o, field, turn);
			return true;
		}
	}

	function setupTurn(turn, first_player, second_player, field) {
		simulation_turns = turn;

		if (turn % 2) {
			var p = first_player;
			var o = second_player;
		} else {
			var p = second_player;
			var o = first_player;
		}

		logMessage('logTurnStart', turn, p, field, deck);

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
				if (turn !== 3 || !SIMULATOR.config.tournamentMode) {
					current_assault.timer--;
					logMessage('logAction', current_assault, 'reduces its timer');
				}
			}

			// Check valor
			var valor = current_assault.valor;
			if (valor) {
				var enemy = field_o_assaults[i];
				if (enemy && current_assault.adjustedAttack() < enemy.adjustedAttack()) {
					current_assault.attack_valor += valor;
					logMessage('logGainAttack', current_assault, 'activates valor', valor);
				} else {
					logMessage('logCannotValor', current_assault, enemy);
				}
			}

			current_assault.enfeebled = current_assault.envenomed + current_assault.heartseeker;
			current_assault.enraged = 0;
			current_assault.invisible = 0;
			current_assault.protected = 0;
			current_assault.warded = 0;
			current_assault.enhanced = {};
			current_assault.removeImbue();

			// countdown any skills with timers
			doCountDowns(current_assault);
		}
	}

	function chooseCard(p, turn) {

		var deck_p = deck[p];
		var deck_p_deck = deck_p.deck;
		var deck_p_ordered = deck_p.ordered;

		if (deck_p_deck[0]) {
			// Deck not empty yet
			SIMULATOR.waiting = false;
			var card_picked = 0;

			if (deck_p_deck.length === 1) {
				card_picked = chooseFirstCard(p, deck_p_deck, deck_p_ordered, turn);
			} else {
				for (var i = 0; i < deck_p_deck.length; i++) {
					var card = deck_p_deck[i];
					if (card.trap) {
						playCard(card.trap, p, turn);
						card.trap = false;
					}
					if (i === 2) break;
				}
				card_picked = deck_p.chooseCard(deck_p_deck, deck_p_ordered, turn);
			}

			if (card_picked < 0) return false;

			playCard(deck_p_deck[card_picked], p, turn);

			removeFromDeck(deck_p_deck, card_picked);
		}
		return true;
	}

	function makePlayChosenCard(chosenCard) {
		return function playChosenCard(turn, field, first_player, second_player) {
			if (turn % 2) {
				var p = first_player;
				var o = second_player;
			} else {
				var p = second_player;
				var o = first_player;
			}
			var deck_p_deck = deck[p].deck;
			playCard(deck_p_deck[chosenCard], p, turn);
			removeFromDeck(deck_p_deck, chosenCard);
			performTurnActions(p, o, field, turn);
			return true;
		};
	}

	function removeFromDeck(deck, index) {
		var key = index;
		var len = deck.length - 1;
		while (key < len) {
			deck[key] = deck[++key];
		}
		deck.length = key;

	}

	function chooseCardUserManually(shuffledDeck, orderedDeck, turn) {
		// Prepare 3-card hand
		var hand = shuffledDeck.slice(0, 3);
		var cardsInHand = [];
		var drawableHand = [];
		for (var handIdx = 0, hand_len = hand.length; handIdx < hand_len; handIdx++) {
			var card = hand[handIdx];
			var text = handIdx + ": " + card['name'];
			if (card.maxLevel > 1) text += '{' + card.level + '/' + card.maxLevel + '}';
			cardsInHand.push(text);
			drawableHand.push(card);
		}
		
		events.onPresentCardChoice(field, drawableHand, onCardChosen, turn);

		return -1;
	}

	// eslint-disable-next-line no-unused-vars
	function chooseCardOrdered(shuffledDeck, orderedDeck, turn) {
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

			var cardInHand;
			for (var handIdx = 0, hand_len = hand.length; handIdx < hand_len; handIdx++) {
				cardInHand = hand[handIdx];

				// If this is the exact card at this spot
				if (unitInfoHelper.areEqual(desiredCard, cardInHand)) {
					played = true;
					break;
				}
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

	// eslint-disable-next-line no-unused-vars
	function chooseCardRandomly(shuffledDeck, orderedDeck, turn) {
		// Prepare 3-card hand
		var hand = shuffledDeck.slice(0, 3);

		var card_picked = (~~(Math.random() * hand.length));
		return card_picked;
	}

	// eslint-disable-next-line no-unused-vars
	function chooseCardByPoints(shuffledDeck, orderedDeck, turn) {
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

	// eslint-disable-next-line no-unused-vars
	function chooseFirstCard(shuffledDeck, orderedDeck, turn) {
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

	function performTurnActions(p, o, field, turn) {

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
			doActivationSkills(battleground);
		}

		// Do Commander Early Activation Skills
		doEarlyActivationSkills(field_p.commander);

		// Set invisibile/ward/shrouded after enhance has had a chance to fire
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {
			var currentUnit = field_p_assaults[key];
			setPassiveStatus(currentUnit, 'evade', 'invisible');
			setPassiveStatus(currentUnit, 'absorb', 'warded');
		}

		// Do Unit Early Activation Skills
		doEarlyActivations(field_p);

		// Commander
		// - activation skills after units do early activation skills
		doActivationSkills(field_p_commander);

		// Assaults
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {

			var currentUnit = field_p_assaults[key];

			if (!currentUnit.isAlive()) {
				continue;
			}

			// Check Timer
			if (!currentUnit.isActive()) {
				continue;
			}

			// Check jammed ("frozen")
			if (currentUnit['jammed']) {
				logMessage('logFrozen', currentUnit);
				continue;
			}

			var activations = 1;
			if (currentUnit.dualstrike_triggered) {
				activations++;
				logMessage('logDualstrike', currentUnit);
			}

			for (; activations > 0; activations--) {

				// Activation skills
				doActivationSkills(currentUnit);

				// See if unit died from Backlash
				if (!currentUnit.isAlive()) {
					continue;
				}

				// Check attack
				// - check rally and weaken
				if (!currentUnit.hasAttack()) {
					if (currentUnit.permanentAttack() > 0) logMessage('logWeakened', currentUnit);
					continue;
				}

				doAttack(currentUnit, field_o_assaults, field_o_commander);

				// WINNING CONDITION
				if (!field_o_commander.isAlive() || !field_p_commander.isAlive()) {
					return;
				}

				// If died from counter, make sure dualstrike doesn't do make it swing again!
				if (!currentUnit.isAlive()) {
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

		logMessage('logTurnEnd', turn);
	}

	function setPassiveStatus(assault, skillName, statusName) {
		var statusValue = 0;

		if (assault[skillName]) {
			statusValue = assault[skillName];
			var enhanced = unitInfoHelper.getEnhancement(assault, skillName, statusValue);
			statusValue += enhanced;
		}

		assault[statusName] = statusValue;
	}

	function modifySkillDamage(target, originalDamage, enhanced, exclusions) {
		// Check Protect/Enfeeble
		exclusions = (exclusions || {});
		var enfeeble = (exclusions.enfeeble ? 0 : (target.enfeebled || 0));
		var shrouded = (exclusions.stasis ? 0 : checkShroud(target));
		var protect = (exclusions.protect ? 0 : (target.protected || 0));
		var warded = (exclusions.ward ? 0 : (target.warded || 0));

		var damage = originalDamage + enfeeble - shrouded;
		if (warded) {
			damage -= applyDamageReduction(target, 'warded', damage);
		}
		if (protect) {
			damage -= applyDamageReduction(target, 'protected', damage);
		}
		if (shrouded) {
			damage -= shrouded;
		}

		if (damage < 0) {
			damage = 0;
		}

		return {
			originalDamage: originalDamage,
			damage: damage,
			modifiers: {
				Enhance: enhanced,
				Enfeeble: enfeeble,
				Stasis: -shrouded,
				Barrier: -protect,
				Ward: -warded
			}
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
			logMessage('logChargeSkill', unit, dualStrike);
		}
	}

	function doSkillCountDowns(unit, skills) {
		for (var i = 0, len = skills.length; i < len; i++) {
			var skill = skills[i];
			if (skill.countdown) {
				skill.countdown--;
				logMessage('logChargeSkill', unit, skill);
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
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'regenerate', regen_health);
				regen_health += enhanced;
				var healthMissing = current_assault.health - current_assault.health_left;
				if (regen_health >= healthMissing) {
					regen_health = healthMissing;
				}

				current_assault.health_left += regen_health;
				logMessage('logGainHealth', current_assault, 'regenerates', regen_health);
			}

			// Poison
			var amount = current_assault.poisoned;
			if (amount) {
				var warded = current_assault.warded;
				var damageInfo = {
					originalDamage: amount
				};
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
					damageInfo.damage = amount;
					damageInfo.modifiers = { Ward: warded };
				}
				doDamage(null, current_assault, amount, function () {
					logMessage('logDamage', null, current_assault, 'Poison', 'poison damage', damageInfo);
				});
			}

			// Venom
			var amount = current_assault.envenomed;
			if (amount) {
				var warded = current_assault.warded;
				var damageInfo = {
					originalDamage: amount
				};
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
					damageInfo.damage = amount;
					damageInfo.modifiers = { Ward: warded };
				}
				doDamage(null, current_assault, amount, function () {
					logMessage('logDamage', null, current_assault, 'Venom', 'venom damage', damageInfo);
				});
			}

			// Scorch
			var scorch = current_assault.scorched;
			if (scorch) {
				amount = scorch.amount;
				var damageInfo = {
					originalDamage: amount
				};
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
					damageInfo.damage = amount;
					damageInfo.modifiers = { Ward: warded };
				}
				doDamage(null, current_assault, amount, function () {
					logMessage('logDamage', null, current_assault, 'Scorch', 'scorch damage', damageInfo, function() {
						if (current_assault.isAlive() && !current_assault.scorched) {
							return ' and scorch wears off';
						}
					});
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
					logMessage('logAction', current_assault, 'recovers from corrosion');
				} else {
					var corrosion = corroded.amount;
					current_assault.attack_corroded = corrosion;
					logMessage('logAction', current_assault, 'loses ' + corrosion + ' attack to corrosion');
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
				if (adjacent && adjacent.taunt && adjacent.isalive()) {
					target = adjacent;
					taunted = true;
				} else {
					var adjacent = field_o_assaults[current_assault.key + 1];
					if (adjacent && adjacent.taunt && adjacent.isalive()) {
						target = adjacent;
						taunted = true;
					}
				}
			}
			if (taunted) {
				logMessage('logAction', target, 'taunts', current_assault);
			}
		}

		// -- CALCULATE DAMAGE --
		var damage = current_assault.adjustedAttack(); // Get base damage + rally/weaken

		var enfeeble = target.enfeebled;
		var pierce = current_assault.pierce;

		var damageInfo = {
			originalDamage: current_assault.attack,
			modifiers: {
				Berserk: current_assault.attack_berserk,
				Valor: current_assault.attack_valor,
				Rally: current_assault.attack_rally,
				Weaken: -current_assault.attack_weaken,
				Corrosion: -current_assault.attack_corroded,
				Enfeeble: enfeeble
			}
		};
		var damageModifiers = damageInfo.modifiers;

		damage += enfeeble;

		// Pierce
		if (pierce) {
			var enhanced = unitInfoHelper.getEnhancement(current_assault, 'pierce', pierce);
			pierce += enhanced;
		} else {
			pierce = 0;
		}

		// Damage reduction
		var protect = target.protected;
		var armor = target.armored;
		var shrouded = checkShroud(target);
		var remainingPierce = pierce;
		// Barrier is applied BEFORE Armor/Shroud
		if (protect) {
			damageModifiers.Barrier = -protect;
			// Remove pierce from Barrier
			if (remainingPierce) {
				damageModifiers.Pierce = pierce;
				if (remainingPierce >= protect) {
					remainingPierce -= protect;
					protect = 0;
				} else {
					protect -= remainingPierce;
					remainingPierce = 0;
				}
			}
			if (protect) {
				if (damage >= protect) {
					damage -= protect;
					protect = 0;
				} else {
					protect -= damage;
					damage = 0;
				}
			}
			target.protected = protect;
		}

		function applyModifier(logName, status, value) {
			if (value) {
				value += unitInfoHelper.getEnhancement(target, status, value);
				damageModifiers[logName] = -value;
				// Remove pierce from Shroud
				if (remainingPierce) {
					damageModifiers.Pierce = pierce;
					if (remainingPierce > value) {
						value = 0;
					} else {
						value -= remainingPierce;
					}
				}
				damage -= value;
			}
		}
		applyModifier('Shroud', 'stasis', shrouded);
		applyModifier('Armor', 'armored', armor);

		if (damage < 0) damage = 0;

		// -- END OF CALCULATE DAMAGE --

		// Deal damage to target
		doDamage(current_assault, target, damage, function () {
			logMessage('logDamage', current_assault, target, 'Attack', 'attacks', damageInfo);
		});

		events.onUnitAttacked(field, turn, current_assault);

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
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'poison', poison);
				poison += enhanced;
				if (poison > target.poisoned) {
					target.poisoned = poison;
					logMessage('logInflicts', current_assault, 'poison', poison, target);
				}
			}

			// Venom
			// - Target must have taken damage
			// - Target must be an assault
			// - Sets poisioned to greater of target's current poisioned or new poison
			// - Sets envenomed to greater of target's current envenomed or new venom
			if (current_assault.venom) {
				var venom = current_assault.venom;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'venom', venom);
				venom += enhanced;

				if (venom > target.envenomed) {
					var hexIncrease = venom - target.envenomed;
					target.envenomed = venom;
					target.enfeebled += hexIncrease;
					logMessage('logInflicts', current_assault, 'venom', venom, target);
				}
			}

			// Nullify
			// - Attacker must have taken damage
			// - Target must be an assault
			if (current_assault.nullify) {
				var nullify = current_assault.nullify;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'nullify', nullify);
				nullify += enhanced;
				target.nullified += nullify;
				logMessage('logInflicts', current_assault, 'nullify', nullify, target);
			}

			// Silence
			// - Attacker must have taken damage
			// - Target must be an assault
			if (current_assault.silence) {
				target.silenced = true;
				logMessage('logInflicts', current_assault, 'silence', null, target);
			}

			// Daze
			// - Target must have taken damage
			// - Target must be an assault
			if (current_assault.daze) {

				var dazed = current_assault.daze;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'daze', dazed);
				dazed += enhanced;

				target.attack_weaken += dazed;
				logMessage('logInflicts', current_assault, 'dazed', dazed, target);
			}
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
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'leech', leech_health);
				leech_health += enhanced;
				var healthMissing = current_assault.health - current_assault.health_left;
				if (leech_health >= healthMissing) {
					leech_health = healthMissing;
				}

				current_assault.health_left += leech_health;
				logMessage('logGainHealth', current_assault, 'siphons', leech_health);
			}

			if (current_assault.reinforce) {
				var reinforce = current_assault.reinforce;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'reinforce', reinforce);
				reinforce += enhanced;

				current_assault.protected += reinforce;
				logMessage('logStatusEffect', current_assault, 'reinforces', current_assault, enhanced, reinforce);
			}

			// Counter
			// - Target must have received some amount of damage
			// - Attacker must not be already dead
			if (target.counter) {

				var counterBase = 0 + target.counter;
				var counterEnhancement = unitInfoHelper.getEnhancement(target, 'counter', counterBase);

				doCounterDamage(current_assault, target, 'Vengance', counterBase, counterEnhancement);
			}

			// Counterburn
			// - Target must have received some amount of damage
			if (target.counterburn) {
				var scorch = target.counterburn || 0;
				var enhanced = unitInfoHelper.getEnhancement(target, 'counterburn', scorch);
				scorch += enhanced;
				if (!current_assault.scorched) {
					current_assault.scorched = { 'amount': scorch, 'timer': 2 };
				} else {
					current_assault.scorched.amount += scorch;
					current_assault.scorched.timer = 2;
				}
				logMessage('logInflicts', target, 'counterburn', scorch, current_assault);
			}

			// Counterpoison
			// - Target must have received some amount of damage
			if (target.counterpoison) {
				var poison = target.counterpoison || 0;
				var enhanced = unitInfoHelper.getEnhancement(target, 'counterpoison', poison);
				poison += enhanced;

				if (poison > current_assault.poisoned) {
					current_assault.poisoned = poison;
					logMessage('logInflicts', target, 'counterpoison', poison, current_assault);
				}
			}

			// Fury
			// - Target must have received some amount of damage
			if (target.fury) {
				var furyBase = target.fury;
				var furyEnhancement = unitInfoHelper.getEnhancement(target, 'counter', furyBase);

				if (target.isAlive()) {
					var fury = furyBase + furyEnhancement;
					target.attack_berserk += fury;
					logMessage('logGainAttack', target, 'activates fury', fury);
				}

				doCounterDamage(current_assault, target, 'Fury', furyBase, furyEnhancement);
			}

			if (target.enraged > 0) {
				target.attack_berserk += target.enraged;
				logMessage('logGainAttack', target, 'is enraged', target.enraged);
			}

			// Berserk
			// - Must have done some damage to an assault unit
			if (current_assault.berserk) {

				var berserk = current_assault.berserk;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'berserk', berserk);
				berserk += enhanced;

				current_assault.attack_berserk += berserk;
				logMessage('logGainAttack', target, 'activates berserk', berserk);
			}
			
			// Corrosion
			// - Target must have received some amount of damage
			if (target.corrosive) {
				var corrosion = target.corrosive || 0;
				var enhanced = unitInfoHelper.getEnhancement(target, 'corrosive', corrosion);
				corrosion += enhanced;
				if (current_assault.corroded) {
					current_assault.corroded.amount += corrosion;
					current_assault.corroded.timer = 2;
				} else {
					current_assault.corroded = { amount: corrosion, timer: 2 };
				}
				logMessage('logInflicts', target, 'corrosion', corrosion, current_assault);
				current_assault.attack_corroded = corrosion;
				logMessage('logAction', current_assault, 'loses ' + corrosion + ' attack to corrosion');
			}
		}

		// -- CHECK STATUS INFLICTION --

		if (!current_assault.isAlive()) {
			doOnDeathSkills(current_assault, target);
		}

		events.onUnitDone(field, turn, current_assault);
		// -- END OF STATUS INFLICTION --
	}

	function doCounterDamage(attacker, defender, counterType, counterBase, counterEnhancement) {
		var counterDamage = counterBase + counterEnhancement;
		var damageInfo = modifySkillDamage(attacker, counterDamage, counterEnhancement, { enfeeble: true });

		doDamage(defender, attacker, damageInfo.damage, function () {
			logMessage('logDamage', null, attacker, counterType, counterType.toLowerCase() + ' damage', damageInfo);
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
		if (SIMULATOR.config.cpuHash) {
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

	var noop = function noop() {};
	var events = {
		onCardPlayed: noop,
		onEarlyActivationSkills: noop,
		onActivationSkills: noop,
		onOnDeathSkills: noop,
		onPresentCardChoice: noop,
		onCardChosen: noop,
		onUnitAttacked: noop,
		onUnitDone: noop
	};

	var deck = {};
	var field = {};
	var battlegrounds;
	var simulation_turns = 0;
	var simulating = false;
	var user_controlled = false;
	var turn = 0;
	var totalDeckHealth = 0;
	var totalCpuDeckHealth = 0;

	// public functions
	SIMULATOR.simulate = simulate;
	SIMULATOR.setupDecks = setupDecks;
	SIMULATOR.onPlaySkills = onPlaySkills;
	SIMULATOR.calculatePoints = calculatePoints;
	// public variables
	Object.defineProperties(SIMULATOR, {
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
		events: {
			get: function () {
				return events;
			},
			set: function (value) {
				events = value;
			}
		}
	});

	return SIMULATOR;
});;
define('singleThreaded', [
    'bgeApi',
    'matchTimer',
    'urlHelper',
    'debugLog',
    'simController',
    'simulatorBase',
    'ui',
    'matchStats'
], function (
    bgeApi,
    matchTimer,
    urlHelper,
    debugLog,
    simController,
    simulator,
    ui,
    matchStats
) {
    'use strict';

    // Initialize simulation loop - runs once per simulation session
    simController.startsim = function () {
        matchStats.totalTurns = 0;
        matchTimer.reset();
        debugLog.clear();
        matchStats.matchesPlayed = 0;

        var config = ui.getConfiguration();
        simController.setDebugLogger();
        simulator.battlegrounds = bgeApi.getBattlegrounds(config.getbattleground, config.selfbges, config.enemybges, config.mapbges, config.selectedCampaign, config.missionLevel, config.selectedRaid, config.raidLevel);

        ui.hide();

        simulator.remainingSims = config.simsToRun;
        simulator.setupDecks(config);

        matchStats.matchesWon = 0;
        matchStats.matchesLost = 0;
        matchStats.matchesDrawn = 0;
        matchStats.totalPoints = 0;

        ui.displayText(""); // Clear display
        if (!config.userControlled) {
            ui.hideTable();
            ui.setSimStatus("Initializing simulations...");
        } else {
            ui.setSimStatus("");
        }

        window.ga('send', 'event', 'simulation', 'start', 'single-threaded', config.simsToRun);
        simController.statusTimeout = setTimeout(runSims, 0, config, 0);

        return false;
    };

    // Interrupt simulations
    simController.stopsim = function () {
        matchTimer.stop();
        var elapse = matchTimer.elapsed();
        var simpersec = matchStats.matchesPlayed / elapse;
        simpersec = simpersec.toFixed(2);
        simulator.simulating = false;

        if (!simulator.user_controlled) {
            ui.setSimStatus("Simulations interrupted.", elapse, simpersec);
            ui.showWinrate();
        }
        ui.show();

        simController.onStopSims();
    };

    simController.clearStatusTimeout = function clearStatusTimeout() {
        if (simController.statusTimeout) {
            clearTimeout(simController.statusTimeout);
        }
        simController.statusTimeout = null;
    };

    function runSims(config, simsPerBatch) {
        if (simulator.user_controlled) {
            runUserControlledSim(config);
        } else if ((debugLog.enabled || debugLog.cardsPlayedOnly) && !debugLog.massDebug && !debugLog.firstLoss && !debugLog.firstWin) {
            runSim(config, true);
            simController.debugEnd();
        } else if (simulator.remainingSims > 0) {
            runSimBatch(config, simsPerBatch);
        } else {
            finishedSims();
        }
    }

    function runUserControlledSim(config) {
        if (runSim(config, true)) {
            simController.debugEnd();
        }
    }

    function runSimBatch(config, simsPerBatch) {
        // Interval output - speeds up simulations
        var simsPerSecondLastBatch = 0;
        if (simsPerBatch > 0) { // Use simsPerBatch == 0 to imply a fresh set of simulations
            simsPerSecondLastBatch = simsPerBatch / matchTimer.batchElapsed();

            ui.setSimStatus("Running simulations...", matchTimer.elapsed(), simsPerSecondLastBatch.toFixed(1));
            ui.showWinrate();
        }

        simsPerBatch = 1;
        if ((debugLog.enabled || debugLog.cardsPlayedOnly) && (debugLog.massDebug || debugLog.firstLoss || debugLog.firstWin)) {
            // Batch messes up mass debug and loss debug! let's disable batch!
        } else {
            // If we can run more at one time, then let's try to
            if (simsPerSecondLastBatch > simsPerBatch)  {
                simsPerBatch = Math.ceil(simsPerSecondLastBatch / 8);
            }
            // Also limit by how many sims are left
            if (simsPerBatch > simulator.remainingSims) {   
                simsPerBatch = simulator.remainingSims;
            }
        }

        matchTimer.startBatch();
        simController.statusTimeout = setTimeout(runSims, 1, config, simsPerBatch);
        for (var i = 0; i < simsPerBatch; i++) {  // Start a new batch
            runSim(config);
        }
    }

    function finishedSims() {
        matchTimer.stop();

        var elapse = matchTimer.elapsed();
        var simpersec = matchStats.matchesPlayed / elapse;
        simpersec = simpersec.toFixed(2);

        ui.displayText(debugLog.getLog());
        ui.setSimStatus("Simulations complete.", elapse, simpersec);
        ui.showWinrate();

        ui.show();

        simController.onEndSims();
    }

    // Initializes a single simulation - runs once before each individual simulation
    // - needs to reset the decks and fields before each simulation
    var seedtest = (urlHelper.paramValue("seedtest") || 0);
    function runSim(config, skipResults) {
        if (seedtest) {
            Math.seedrandom(seedtest++);
        }
        if (!simulator.simulate(config)) return false;
        if (!skipResults) simController.processSimResult();
    }

    simController.processSimResult = function () {

        var result;
        if (!simulator.field.player.commander.isAlive()) {
            result = false;
        } else if (!simulator.field.cpu.commander.isAlive()) {
            result = true;
        } else {
            result = 'draw';
        }

        simulator.remainingSims--;

        matchStats.processMatch(simulator, result);

        if (debugLog.enabled || debugLog.cardsPlayedOnly) {
            if (debugLog.firstLoss) {
                if (result === 'draw' || !result) {
                    simulator.remainingSims = 0;
                }
            } else if (debugLog.firstWin) {
                if (result && result !== 'draw') {
                    simulator.remainingSims = 0;
                }
            }
            simController.logger.logOutcome(result, matchStats.matchesPlayed, SIMULATOR.remainingSims);
            simController.logger.logStartBattle(simulator.remainingSims);
        }

        return result;
    };
});;(function (angular, LOCATIONS, CAMPAIGNS, MISSIONS, RAIDS, BATTLEGROUNDS, MAP_BATTLEGROUNDS) {
    'use strict';

    var filterByParent = function (unfiltered, parentID, parentIDField) {
        return unfiltered.filter(function (entry) {
            return entry[parentIDField] == parentID;
        });
    };

    var filterChildren = function (unfiltered, parentID, parents, childrenField, childIDField) {
        var parent = parents.filter(function (parent) { return parent.id == parentID; })[0];
        if (parent) {
            var children = parent[childrenField];
            var filtered = unfiltered.filter(function (child) {
                var childID = child[childIDField];
                var isChildOfParent = children.indexOf(childID) >= 0;
                return isChildOfParent;
            });
            return filtered;
        } else {
            return [];
        }
    };

    angular.module('core', [])
        .filter('forMissions', function () {
            return function (campaigns, missions) {
                if (!campaigns || !missions) return campaigns;

                var newCampaigns = [];
                for (var i = 0, len = campaigns.length; i < len; i++) {
                    var campaign = campaigns[i];
                    var missionsInCampaign = campaign.missions;
                    var inCampaign = true;

                    for (var j = 0; j < missionsInCampaign.length; j++) {
                        var mission = missionsInCampaign[j];
                        if (!missions[mission]) {
                            inCampaign = false;
                            break;
                        }
                    }
                    if (inCampaign) {
                        newCampaigns.push(campaign);
                    }
                }
                return newCampaigns;
            };
        })
        .filter('filterByParent', function () {
            return filterByParent;
        })
        .filter('filterChildren', function () {
            return filterChildren;
        });

    angular.module('simulatorApp', ['core'])
        .controller('SimulatorCtrl', ['$scope', SimulatorCtrl]);

    function SimulatorCtrl($scope) {
        initialize();

        function initialize() {
            $scope.locations = toArray(LOCATIONS)
                .sort(function (locationA, locationB) {
                    return Number(locationA.id) - Number(locationB.id);
                });
            $scope.campaigns = toArray(CAMPAIGNS);
            $scope.missions = toArray(MISSIONS);

            $scope.mapBattlegrounds = toArray(MAP_BATTLEGROUNDS);

            $scope.campaignBGEs = [];

            $scope.tower = false;
            $scope.auto = false;

            $scope.debugMode = false;

            $scope.selections = {
                location: '',
                campaign: '',
                mission: '',
                raid: ''
            };

            $scope.filteredRaids = getFilteredRaids();
            $scope.getLocationClass = getLocationClass;
            $scope.getCampaignClass = getCampaignClass;
            $scope.selectableBattlegrounds = getSelectableBattlegrounds();
            $scope.personalBattlegrounds = getPersonalBattlegrounds();
            $scope.towerTypes = getTowerTypes();

            $scope.$watch("selections.location", resetCampaign);

            $scope.$watch("selections.campaign", resetMission);
        }

        function resetCampaign() {
            $scope.selections.campaign = '';
        }

        function resetMission() {
            $scope.selections.mission = '';
        }

        function toArray(object) {
            return Object.keys(object)
                .sort(function (a, b) {
                    return Number(a) - Number(b);
                })
                .map(function(key) {
                    return object[key];
                });
        }

        function getSelectableBattlegrounds() {
            return Object.keys(BATTLEGROUNDS)
                .map(Number)
                .sort()
                .map(getBgeById)
                .filter(function shouldBeShown(BGE) {
                    return !(BGE.hidden || BGE.isTower);
                });
        }

        function getPersonalBattlegrounds() {
            return Object.keys(BATTLEGROUNDS)
                .map(Number)
                .filter(function normalBge(bgeID) {
                    return(bgeID > 1000 && bgeID < 2000);
                })
                .sort()
                .map(getBgeById);
        }
        
        function getBgeById(bgeID) {
            return BATTLEGROUNDS[bgeID];
        }

        function getFilteredRaids() {
            var filtered = Object.keys(RAIDS)
                .reduce(function mostRecentByName(mostRecent, nextRaidId) {
                    var nextRaid = RAIDS[nextRaidId];
                    var currentRaid = mostRecent[nextRaid.name];
                    if(!currentRaid || Number(currentRaid.id) < Number(nextRaid.id)) {
                        mostRecent[nextRaid.name] = nextRaid;
                    }
                    return mostRecent;
                }, {});

            return toArray(filtered)
                .sort(function sortByName(raidA, raidB) {
                    return raidA.name.toLowerCase().localeCompare(raidB.name.toLowerCase());
                });
        }

        function getLocationClass(location) {
            if (!location) {
                var selected = $scope.selections.location;
                location = $scope.locations.find(function (location) {
                    return location.id === selected;
                });
            }
            if (!location) {
                return "grey";
            } else {
                var id = Number(location.id);
                if (id === 0) {
                    return "heroUpgrade";
                } else if (id >= 100) {
                    return "event";
                } else {
                    return "black";
                }
            }
        }

        function getCampaignClass(campaign) {
            if (!campaign) {
                var selected = $scope.selections.campaign;
                campaign = $scope.campaigns.find(function (campaign) {
                    return campaign.id === selected;
                });
            }
            if (!campaign) {
                return "grey";
            } else if (campaign.side_mission) {
                return (campaign.location_id === '0' ? "heroUpgrade" : "mythic");
            } else if (campaign.isLocation) {
                return "location";
            } else {
                return "black";
            }
        }

        function getTowerTypes() {
            var towerTypes = [];
            for (var id in BATTLEGROUNDS) {
                var BGE = BATTLEGROUNDS[id];
                if (BGE.isTower) towerTypes.push(BGE);
            }
            towerTypes.sort(function (a, b) { return a.id - b.id; });
            return towerTypes;
        }
    }

}(angular, LOCATIONS, CAMPAIGNS, MISSIONS, RAIDS, BATTLEGROUNDS, MAP_BATTLEGROUNDS));
;(function (angular) {
    'use strict';

    var storageAPI = require('storageAPI');

    var DeckStorageCtrl = function ($scope) {
        $scope.getSavedDecks = storageAPI.getSavedDecks;

        $scope.keys = function (obj) {
            return (obj ? Object.keys(obj) : []);
        };
    };
    var module;
    try {
        module = angular.module('simulatorApp');
    }
    catch (loadError) {
        module = angular.module('simulatorApp', []);
    }

    module.controller('DeckStorageCtrl', ['$scope', DeckStorageCtrl]);

}(angular));;define('tutorialScript', [
    'simTutorial'
], function getTutorialScript(
    simTutorial
) {
    'user strict';
    
    simTutorial.registerTutorial([
       {
           msg: "Welcome to SIM Spellstone!  This is a brief tutorial of how to use the Simulator."
       },
       {
           ui: "#setup-container",
           msg: 'Here is where you set everything up for a simulation.',
           actions: [showSetup]
       },
       {
           ui: "#setup-container",
           msg: 'When you are done, you can click the "Setup" bar to hide this section.',
           actions: [hideSetup]
       },
       {
           ui: "#setup-container",
           msg: 'Clicking it again will open it back up.',
           actions: [showSetup]
       },
       {
           ui: "#attacker-container",
           msg: 'Use this section to set up the deck for the attacker.'
       },
       {
           ui: "#edit-player",
           msg: 'Click "Edit" to open the DeckBuilder and create a deck.'
       },
       {
           ui: "#load-player",
           msg: 'Click "Load" to choose a deck from the ones you have saved in the DeckBuilder.'
       },
       {
           ui: "#attacker-hash-container",
           msg: 'If you have a deck hash, you can simply paste it here as well.'
       },
       {
           ui: "#attacker-advanced",
           msg: 'This section contains some additional settings for the attacker that determine how their deck is played.'
       },
       {
           ui: "#auto-container",
           msg: 'Check this to have fights run on auto, rather than playing them yourself.',
           showFor: "battle"
       },
       {
           ui: "#auto-container",
           msg: 'Setting the attacker to "auto" also enables the "Ordered" and "Do Not Shuffle" options.',
           showFor: "battle"
       },
       {
           ui: "#ordered-container",
           msg: 'Check this to have the AI attempt to play the attacker\'s deck as close as possible to the order that the cards are listed.'
       },
       {
           ui: "#exactorder-container",
           msg: 'Check this to disable shuffling of the attacker\'s deck.'
       },
       {
           ui: "#defender-container",
           msg: 'Use this section to set up the deck for the defender.'
       },
       {
           ui: "#defender-hash-container",
           msg: 'You can manually create a deck for the defender here.'
       },
       {
           ui: "#pve-container",
           msg: 'Or you can choose a PvE deck to sim against.',
           actions: [clearCampaign]
       },
       {
           ui: "#campaign-container",
           msg: 'To choose a campaign mission, first pick a Campaign from the dropdown...',
           actions: [chooseCampaign]
       },
       {
           ui: "#mission-container",
           msg: '... then pick a Mission from the mission dropdown.',
           actions: [clearRaid, chooseCampaign, chooseMission]
       },
       {
           ui: "#raid-container",
           msg: 'To fight against a raid boss, pick the desired Raid from the dropdown',
           actions: [clearCampaign, chooseRaid]
       },
       {
           ui: "#defender-advanced",
           msg: 'This section contains some additional settings for the defender that determine how their deck is played.',
           actions: [clearRaid]
       },
       {
           ui: "#surge-container",
           msg: 'Check this to have the defender go first.',
           showFor: "battle"
       },
       {
           ui: "#tower-container",
           msg: 'Use these fields to set up a tower for the defender.'
       },
       {
           ui: "#siege-container",
           msg: 'Check this field to turn the tower on.'
       },
       {
           ui: "#tower_level",
           msg: 'This field determines the BR of the defender.  The tower\'s level is one less than the defender\'s BR.'
       },
       {
           ui: "#tower_type",
           msg: 'This field determines which type of tower the defender will have.'
       },
       {
           ui: "#bge-container",
           msg: 'Check/uncheck boxes here to set active battleground effects.',
           actions: [hideView, showSetup]
       },
       {
           ui: "#view-container",
           msg: 'Click "View" to display the currently set decks for the attacker and defender.',
           actions: [hideSetup, showView]
       },
       {
           ui: "#view-container",
           msg: 'Click it again to hide it.',
           actions: [hideView]
       },
       {
           ui: "#sims-container",
           msg: 'This field determines how many fights to run.',
           showFor: "titans"
       },
       {
           ui: "#btn_simulate",
           msg: 'Click "Simulate" to run a batch of fights.',
           showFor: "titans"
       },
       {
           ui: "#btn_simulate",
           msg: 'Click "Battle" to start a fight.',
           showFor: "battle"
       },
       {
           ui: "#generate_link",
           msg: 'Click "Generate Link" to create a link that will open this tool with all of the current settings.'
       },
       {
           msg: 'To view this tutorial again at any time, you can click the "Help" button.  (Note: this will reset the Simulator.)'
       }
    ]);

    function hideSetup() {
        $("#setup-container").accordion('option', 'active', null);
    }

    function showSetup() {
        $("#setup-container").accordion('option', 'active', 0);
    }

    function hideView() {
        $("#view-container").accordion('option', 'active', null);
    }

    function showView() {
        $("#view-container").accordion('option', 'active', 0);
    }

    function chooseCampaign() {
        $('#campaign').val(1).change();
    }

    function chooseMission() {
        $('#mission').val(11).change();
    }

    function clearCampaign() {
        $('#campaign').val('').change();
    }

    function chooseRaid() {
        $('#raid').val(24005).change();
    }

    function clearRaid() {
        $('#raid').val('').change();
    }
});