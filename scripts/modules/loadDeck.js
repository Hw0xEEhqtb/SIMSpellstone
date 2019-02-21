define('loadDeck', [
    'cardInfo',
    'cardApi',
    'unitInfoHelper'
], function (
    cardInfo,
    cardApi,
    unitInfoHelper
) {
    "use strict";
    
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
        if (maxedAt == 7) {
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
        if (unitInfo.level == maxLevel) {
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
        if (DoNotFuse.indexOf(cardID) == -1) {
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
});