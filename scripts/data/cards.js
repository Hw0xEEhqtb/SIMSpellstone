var CARDS = {
  "1000": {
    "id": "1000",
    "name": "Pegasus",
    "desc": "\"Majestic Hooved Beast, Sky Galloper, Long Faced Bird\" - Rejected names from the historical text 'Mythical Nomenclature'.",
    "picture": "Pegasus_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 2,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "health": 6,
        "skill": [],
      },
    }
  },
  "1001": {
    "id": "1001",
    "name": "Angelic Knight",
    "desc": "The fighting prowess of an angel is not questioned by many. At least not for long.",
    "picture": "Angel_Knight_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 1,
    "health": 3,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1002": {
    "id": "1002",
    "name": "Windstorm Elemental",
    "desc": "\"Woosh woosh woosh woosh\" - Ancient Windstorm Elemental saying.",
    "picture": "Cloud_Elemental_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 6,
    "cost": 2,
    "skill": [],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
    }
  },
  "1003": {
    "id": "1003",
    "name": "Kestrel",
    "desc": "Kestrels are the favored form of guard for noble Aether mages.",
    "picture": "Kestral_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 2,
    "health": 4,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "1004": {
    "id": "1004",
    "name": "Wind Sprite",
    "desc": "Manifestations of the wind itself, these creatures buffet their enemies with strong gusts and laughter.",
    "picture": "Wind_Spirit_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 5,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "1005": {
    "id": "1005",
    "name": "Angelic Brawler",
    "desc": "\"Fight me in singular combat, bro!\"",
    "picture": "Warrior_Angel_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 7,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
    }
  },
  "1006": {
    "id": "1006",
    "name": "Soul Wisp",
    "desc": "\"WoooOOOoooOOOooo\"",
    "picture": "Light_Wisp_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
    }
  },
  "1007": {
    "id": "1007",
    "name": "Fox Trickster",
    "desc": "Foxes often specialize in small magic or illusions, confusing their opponents so they can escape.",
    "picture": "Fox_Trickster_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 5,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "3": {
        "attack": 2,
        "health": 6,
        "skill": [],
      },
    }
  },
  "1010": {
    "id": "1010",
    "name": "Lightning Elemental",
    "desc": "Lightning strikes where it pleases.",
    "picture": "Lightning_Elemental_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 1,
    "health": 6,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "1011": {
    "id": "1011",
    "name": "Archive Keeper",
    "desc": "Those looking for their secrets can find them under archive \"P\" for pain.",
    "picture": "Living_Heiroglyphic_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 9,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
    }
  },
  "1012": {
    "id": "1012",
    "name": "Cloud Sylph",
    "desc": "\"Ooooh! Fluffy!\" - Last Words of Bilmior the Adventurer",
    "picture": "Sylph_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 1,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "1014": {
    "id": "1014",
    "name": "Cherub",
    "desc": "Shot through the heart, and you're to blame.",
    "picture": "Cherub_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 1,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "1015": {
    "id": "1015",
    "name": "Windfrog",
    "desc": "\"It's impossible to attack them when they keep knocking us off our feet!\" - Frustrated Soldier",
    "picture": "Wind_Frog_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 1,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "1017": {
    "id": "1017",
    "name": "Judgment",
    "picture": "Judgement_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "1018": {
    "id": "1018",
    "name": "Armored Eagle",
    "desc": "\"Jarad, is that bird wearing a suit of armor?\" - Unsuspecting Castle Guard",
    "picture": "Armored_Eagle_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 3,
    "health": 5,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "health": 7,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 8,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "1019": {
    "id": "1019",
    "name": "Oracle",
    "desc": "Aether Oracles channel the strength of storms to protect their allies.",
    "picture": "Devote_Oracle_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "health": 7,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "1025": {
    "id": "1025",
    "name": "Lightbound Archer",
    "picture": "Young_Angel_Archer_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "1026": {
    "id": "1026",
    "name": "Glass Colossus",
    "desc": "The army thought that because he was made of glass, he would shatter easily... right up until arrows deflected off him.",
    "picture": "Glass_Colossuss_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "1027": {
    "id": "1027",
    "name": "Griffin Knight",
    "picture": "Griffin_Knight_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 2,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 7,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "1028": {
    "id": "1028",
    "name": "Heroic Frog",
    "desc": "\"He's not the frog we deserve, but he is the frog we need.\" - Samael, Leader of Aether",
    "picture": "Frog_Hero_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 1,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 8,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 9,
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "1029": {
    "id": "1029",
    "name": "Elementalist",
    "picture": "Master_Of_Elements_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "1030": {
    "id": "1030",
    "name": "Paladin",
    "picture": "Paladin_Angel_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "1031": {
    "id": "1031",
    "name": "Noble Champion",
    "picture": "Angel_Champion_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "11031": {
    "id": "11031",
    "name": "Righteous Champion",
    "picture": "Angel_Champion_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "21031": {
    "id": "21031",
    "name": "Light's Champion",
    "picture": "Angel_Champion_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "1032": {
    "id": "1032",
    "name": "Lunar Elemental",
    "picture": "Lunar_Elemental_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "11032": {
    "id": "11032",
    "name": "Crescent Elemental",
    "picture": "Lunar_Elemental_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 3,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "5": {
        "health": 21,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "21032": {
    "id": "21032",
    "name": "Moonlight Elemental",
    "picture": "Lunar_Elemental_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "5": {
        "health": 25,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "1040": {
    "id": "1040",
    "name": "Storm Dragon",
    "picture": "Storm_Dragon_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 17,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "11040": {
    "id": "11040",
    "name": "Stormspawn Dragon",
    "picture": "Storm_Dragon_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 22,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 25,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "21040": {
    "id": "21040",
    "name": "Stormcleaver Dragon",
    "picture": "Storm_Dragon_C",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 26,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
    }
  },
  "1041": {
    "id": "1041",
    "name": "Avenging Angel",
    "picture": "Avenging_Angel_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 3,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 4,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "1042": {
    "id": "1042",
    "name": "Archgeneral",
    "picture": "Grand_Archgeneral_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "11042": {
    "id": "11042",
    "name": "High Archgeneral",
    "picture": "Grand_Archgeneral_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 6,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "21042": {
    "id": "21042",
    "name": "Grand Archgeneral",
    "picture": "Grand_Archgeneral_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 7,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 3,
        "y": "6",
        "z": 6,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "health": 20,
        "skill": [],
      },
      "6": {
        "health": 21,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "1043": {
    "id": "1043",
    "name": "Lilypad Bard",
    "picture": "Frog_Bard_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "4",
        "z": 4,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "4",
        "z": 4,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "11043": {
    "id": "11043",
    "name": "Lilypad Minstrel",
    "picture": "Frog_Bard_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 2,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "z": 4,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "21043": {
    "id": "21043",
    "name": "Lilypad Muse",
    "picture": "Frog_Bard_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 3,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "4",
        "z": 4,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 3,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "1300": {
    "id": "1300",
    "name": "Skeleton Warrior",
    "desc": "\"They may not have brains, but they have... well, not much.\" - Aria, Necromancer",
    "picture": "Skeleton_Warrior_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 1,
    "health": 2,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 3,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1301": {
    "id": "1301",
    "name": "Flame Spirit",
    "desc": "\"Help! Help! I'm on fire! ...Oh wait.\"",
    "picture": "Flame_Spirit_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 1,
    "health": 3,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1302": {
    "id": "1302",
    "name": "Phase Imp",
    "desc": "Bending the lines between realities, the Phase Imp can poison you before you even know it exists.",
    "picture": "Phase_Imp_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 3,
    "cost": 2,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 5,
        "skill": [],
      },
    }
  },
  "1303": {
    "id": "1303",
    "name": "Undead Brute",
    "desc": "\"They may not have brains, but they have... well, at least this one is big. That's a start.\" - Aria, Necromancer",
    "picture": "Undead_Brute_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 8,
    "cost": 3,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
    }
  },
  "1304": {
    "id": "1304",
    "name": "Goblin Rogue",
    "desc": "Quick and nimble, they can cut your purse and your stomach before you know they are there.",
    "picture": "Goblin_Rogue_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 2,
    "health": 1,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "1305": {
    "id": "1305",
    "name": "Smoldering Elemental",
    "desc": "\"I thought you said I had to CROSS the lava, not FIGHT the lava!\" - Bilmior the Adventurer",
    "picture": "Molten_Flame_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 6,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "1306": {
    "id": "1306",
    "name": "Lava Crab",
    "desc": "*snap* *snap*",
    "picture": "Lava_Crab_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "12",
    "attack": 3,
    "health": 4,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
    }
  },
  "1307": {
    "id": "1307",
    "name": "Horned Rakken",
    "desc": "\"It's not their speed or their weakening poison you need to look out for, it's their knives!\" - Desert Nomad",
    "picture": "Horned_Lizard_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 1,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1311": {
    "id": "1311",
    "name": "Molten Skeleton",
    "picture": "Flaming_Skeleton_Warrior_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 4,
    "cost": 1,
    "skill": [],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 5,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "1312": {
    "id": "1312",
    "name": "Scythe Demon",
    "picture": "Scythe_Demon_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 6,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 9,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "1313": {
    "id": "1313",
    "name": "Lavafrog",
    "desc": "\"I once stepped on one, dang near melted my entire boot!\" - Valjhor, Traveling Merchant",
    "picture": "Hellfrog_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 1,
    "health": 5,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "health": 7,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "1314": {
    "id": "1314",
    "name": "Skeletal Hound",
    "picture": "Skeleton_Hound_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 6,
        "skill": [],
      },
    }
  },
  "1315": {
    "id": "1315",
    "name": "Nix Elemental",
    "picture": "Void_Elemental_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "poison",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "1317": {
    "id": "1317",
    "name": "Fire Imp",
    "desc": "Fire Imp tongue is considered by many to be the spiciest food ingredient in the known world. Some days even they cannot handle it.",
    "picture": "Fire_Imp_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 1,
    "cost": 2,
    "skill": [],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 2,
        "skill": [],
      },
    }
  },
  "1318": {
    "id": "1318",
    "name": "Smelted Lava Slug",
    "desc": "\"Move! Get out of the way! It's going to trample you! ...Eventually.\" - Wyld Ranger",
    "picture": "Lava_Slug_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 2,
    "health": 11,
    "cost": 4,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "1319": {
    "id": "1319",
    "name": "Wraith",
    "picture": "Wraith_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "1325": {
    "id": "1325",
    "name": "Chaos Storm",
    "picture": "Storm_Elemental_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 1,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 9,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "1326": {
    "id": "1326",
    "name": "Titan of Fire",
    "picture": "Fire_Titan_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "1327": {
    "id": "1327",
    "name": "Fallen Angel",
    "desc": "\"Only those that have truly flown can know what it means to fall.\"",
    "picture": "Fallen_Angel_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 3,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 4,
        "health": 10,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "1328": {
    "id": "1328",
    "name": "Poison Bullfrog",
    "picture": "Poison_Frog_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "1329": {
    "id": "1329",
    "name": "Shadow Assassin",
    "picture": "Invisible_Assassin_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 1,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "cost": 0,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "1330": {
    "id": "1330",
    "name": "Devouring Locusts",
    "desc": "\"A thirty foot skeleton or a dragon? I can fight those. This? I cannot even hope to slow this.\" - Eos, Hero of Llarym",
    "picture": "Plague_of_Fire_Locusts_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [
          {
            "id": "poison",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [
          {
            "id": "poison",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 10,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "1331": {
    "id": "1331",
    "name": "Fallen Soldiers",
    "picture": "Undead_Soldiers_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "11331": {
    "id": "11331",
    "name": "Haunted Soldiers",
    "picture": "Undead_Soldiers_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "21331": {
    "id": "21331",
    "name": "Cursed Soldiers",
    "picture": "Undead_Soldiers_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "1332": {
    "id": "1332",
    "name": "Vampiric Emira",
    "picture": "Vampire_Lord_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "7",
        "z": 7,
      },
      {
        "id": "poison",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "11332": {
    "id": "11332",
    "name": "Cloaked Emira",
    "picture": "Vampire_Lord_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "7",
        "z": 7,
      },
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "21332": {
    "id": "21332",
    "name": "Nocturn Emira",
    "picture": "Vampire_Lord_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 23,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "1340": {
    "id": "1340",
    "name": "Blazekin Dragon",
    "picture": "Fire_Dragon_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 15,
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "1341": {
    "id": "1341",
    "name": "Blood Demon",
    "picture": "Blood_Demon_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "1342": {
    "id": "1342",
    "name": "Ronin",
    "picture": "Undead_Samurai_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "11342": {
    "id": "11342",
    "name": "Risen Ronin",
    "picture": "Undead_Samurai_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "21342": {
    "id": "21342",
    "name": "Dai Ronin",
    "picture": "Undead_Samurai_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "1343": {
    "id": "1343",
    "name": "Firehorn",
    "picture": "Fire_Elemental_Bull_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 6,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "11343": {
    "id": "11343",
    "name": "Burnhorn",
    "picture": "Fire_Elemental_Bull_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 7,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 27,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "21343": {
    "id": "21343",
    "name": "Blazehorn",
    "picture": "Fire_Elemental_Bull_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 9,
    "health": 27,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 29,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 30,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 31,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "1600": {
    "id": "1600",
    "name": "Woodland Fairy",
    "desc": "Mischievous by nature, they appear before you can even spot them, and are gone just as fast.",
    "picture": "Fairy_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 2,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "health": 6,
        "skill": [],
      },
    }
  },
  "1601": {
    "id": "1601",
    "name": "Moss Golem",
    "desc": "\"Beware when sitting on a boulder in the Wyldwood, it may not enjoy your choice of seat.\" -Tellum, Novice Adventurer",
    "picture": "Moss_Golem_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 3,
    "cost": 1,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
        ],
      },
    }
  },
  "1602": {
    "id": "1602",
    "name": "Dire Wolf",
    "desc": "\"Have ya ever gotten between a wolf and her pups? No? I wouldn't suggest it.\" - Wyld Ranger",
    "picture": "Dire_Wolf_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
    }
  },
  "1603": {
    "id": "1603",
    "name": "Mermaid Mage",
    "desc": "Some myths claim that the origin of all healing magic came first from the seas, carried by the hands of mermaids.",
    "picture": "Mermaid_Mage_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 1,
    "health": 5,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
    }
  },
  "1604": {
    "id": "1604",
    "name": "Toad Warrior",
    "desc": "\"They say he doesn't talk much, but I disagree. I've seen him do a lot of talking with that sword.\" - Frans, Elaria Bartender",
    "picture": "Frog_Warrior_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
    "health": 1,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 2,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "1605": {
    "id": "1605",
    "name": "Flying Squirrel",
    "desc": "\"Mark my words, that squirrel is smarter than it looks!\" - Valjhor, moments after his magical trinkets were stolen.",
    "picture": "Air_Nymph_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 3,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1606": {
    "id": "1606",
    "name": "Angler Fish",
    "desc": "Their prey is lured in with their hypnotic lantern. The last thing they see is the large mouth before everything goes dark.",
    "picture": "Angler_Fish_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 2,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "1607": {
    "id": "1607",
    "name": "Turtle Tamer",
    "desc": "Slow and steady... crushes its enemies underfoot.",
    "picture": "Turtle_Tamer_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 2,
    "health": 10,
    "cost": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 11,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "health": 13,
        "skill": [],
      },
    }
  },
  "1610": {
    "id": "1610",
    "name": "Ranger",
    "desc": "Protectors of Elaria, they tread the woodland as their second home.",
    "picture": "Ranger_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "1613": {
    "id": "1613",
    "name": "Acidic Spider",
    "desc": "\"Their poison can bring a full grown Tusker to its knees\" - Elyse, Ranger",
    "picture": "Giant_Spider_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "13",
    "attack": 2,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
    }
  },
  "1614": {
    "id": "1614",
    "name": "Druid",
    "desc": "\"No one is allowed to touch these bunnies.\"",
    "picture": "Druid_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 8,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "1615": {
    "id": "1615",
    "name": "Rune Panther",
    "desc": "When angered, they pull the energy of the earth around them to glow with awesome power.",
    "picture": "Rune_Panther_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 8,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "1616": {
    "id": "1616",
    "name": "Werewarg",
    "picture": "Werewarg_Alpha_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 9,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 10,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "1617": {
    "id": "1617",
    "name": "Water Elemental",
    "picture": "Water_Elemental_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 10,
    "cost": 4,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "1618": {
    "id": "1618",
    "name": "Frog Scout",
    "desc": "\"Their scouts are invaluable, but we need to stop letting them name the new settlements. I can't take another Flytopia.\" - Expedition Researcher",
    "picture": "Frog_Scout_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 1,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "health": 7,
        "skill": [],
      },
      "4": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1619": {
    "id": "1619",
    "name": "Earth Elemental",
    "desc": "\"Sticks and stones can break my bones... No, that's the end of the rhyme.\" - Frans, Elaria Bartender",
    "picture": "Earth_Elemental_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 3,
    "health": 10,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
        ],
      },
    }
  },
  "1631": {
    "id": "1631",
    "name": "Venom Dragon",
    "picture": "Poison_Dragon_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "11631": {
    "id": "11631",
    "name": "Toxic Dragon",
    "picture": "Poison_Dragon_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 5,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "21631": {
    "id": "21631",
    "name": "Tainted Dragon",
    "picture": "Poison_Dragon_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 4,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "1632": {
    "id": "1632",
    "name": "Shadow Rider",
    "picture": "Undead_Rider_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "z": 7,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "11632": {
    "id": "11632",
    "name": "Dark Rider",
    "picture": "Undead_Rider_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "21632": {
    "id": "21632",
    "name": "Shade Rider",
    "picture": "Undead_Rider_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 7,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "1625": {
    "id": "1625",
    "name": "Ferocious Clawkin",
    "picture": "Bear_Warrior_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "1626": {
    "id": "1626",
    "name": "Tusker",
    "picture": "Oliphant_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 19,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 23,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "1627": {
    "id": "1627",
    "name": "Sage of Croaks",
    "picture": "Frog_Sage_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 1,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "4",
        "z": 4,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 15,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
    }
  },
  "1628": {
    "id": "1628",
    "name": "Garganotos",
    "picture": "Forest_Beast_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "11",
    "attack": 3,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 10,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "1629": {
    "id": "1629",
    "name": "Rock Titan",
    "desc": "Who watches the horse watcher?",
    "picture": "Rock_Titan_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 5,
    "health": 13,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "3": {
        "attack": 6,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "1630": {
    "id": "1630",
    "name": "Giant Squid",
    "picture": "Giant_Squid_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 3,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "1640": {
    "id": "1640",
    "name": "Life Dragon",
    "picture": "Dragon_Of_Life_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 3,
    "health": 15,
    "cost": 4,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 18,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "1641": {
    "id": "1641",
    "name": "Rhythm of the Wyld",
    "picture": "Heart_Of_The_Woods_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "11641": {
    "id": "11641",
    "name": "Beat of the Wyld",
    "picture": "Heart_Of_The_Woods_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "21641": {
    "id": "21641",
    "name": "Heart of the Wyld",
    "picture": "Heart_Of_The_Woods_C",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "1642": {
    "id": "1642",
    "name": "Icestone Beast",
    "picture": "Ice_Elemental_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 5,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
    }
  },
  "11642": {
    "id": "11642",
    "name": "Icestone Brute",
    "picture": "Ice_Elemental_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 6,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
    }
  },
  "21642": {
    "id": "21642",
    "name": "Icestone Demon",
    "picture": "Ice_Elemental_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 7,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 5,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 20,
        "skill": [
          {
            "id": "rally",
            "x": 6,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
    }
  },
  "1643": {
    "id": "1643",
    "name": "Nimble Leaper",
    "picture": "Swift_Frog_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "leech",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "leech",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "11643": {
    "id": "11643",
    "name": "Swift Leaper",
    "picture": "Swift_Frog_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 6,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "health": 13,
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "21643": {
    "id": "21643",
    "name": "Lightning Leaper",
    "picture": "Swift_Frog_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 7,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "2000": {
    "id": "2000",
    "name": "Wasteland Nomad",
    "picture": "Wasteland_Nomad_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "12000": {
    "id": "12000",
    "name": "Wasteland Wanderer",
    "picture": "Wasteland_Nomad_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "22000": {
    "id": "22000",
    "name": "Wasteland Warrior",
    "picture": "Wasteland_Nomad_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "2001": {
    "id": "2001",
    "name": "Dunetooth Demon",
    "picture": "Desert_Lizard_Demon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "12001": {
    "id": "12001",
    "name": "Dunetooth Devil",
    "picture": "Desert_Lizard_Demon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 3,
        "health": 19,
        "skill": [],
      },
    }
  },
  "22001": {
    "id": "22001",
    "name": "Dunetooth Rex",
    "picture": "Desert_Lizard_Demon_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
    }
  },
  "2002": {
    "id": "2002",
    "name": "Lantern Guardian",
    "picture": "Lantern_Guardian_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "12002": {
    "id": "12002",
    "name": "Beacon Guardian",
    "picture": "Lantern_Guardian_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "22002": {
    "id": "22002",
    "name": "Lumin Guardian",
    "picture": "Lantern_Guardian_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
    }
  },
  "2003": {
    "id": "2003",
    "name": "Dragon Tamer",
    "picture": "Dragon_Tamer_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "attack": 3,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "12003": {
    "id": "12003",
    "name": "Dragon Breeder",
    "picture": "Dragon_Tamer_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "22003": {
    "id": "22003",
    "name": "Dragon Master",
    "picture": "Dragon_Tamer_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 4,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "2004": {
    "id": "2004",
    "name": "Lavatail Dragon",
    "picture": "Molten_Dragon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 2,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 3,
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
    }
  },
  "12004": {
    "id": "12004",
    "name": "Magmatail Dragon",
    "picture": "Molten_Dragon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "22004": {
    "id": "22004",
    "name": "Obsidiantail Dragon",
    "picture": "Molten_Dragon_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 3,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "2005": {
    "id": "2005",
    "name": "Sailing Drake",
    "picture": "Windsear_Drake_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 1,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 2,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "12005": {
    "id": "12005",
    "name": "Windsear Drake",
    "picture": "Windsear_Drake_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 2,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "22005": {
    "id": "22005",
    "name": "Blazing Drake",
    "picture": "Windsear_Drake_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "2006": {
    "id": "2006",
    "name": "Zhulong",
    "picture": "Henry_Zhao_Dragon_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "12006": {
    "id": "12006",
    "name": "Zhulong the Cunning",
    "picture": "Henry_Zhao_Dragon_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "22006": {
    "id": "22006",
    "name": "Zhulong the Wise",
    "picture": "Henry_Zhao_Dragon_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "2007": {
    "id": "2007",
    "name": "Platinum Golem",
    "picture": "Platinum_Elemental_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "12007": {
    "id": "12007",
    "name": "Platinum Armorer",
    "picture": "Platinum_Elemental_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 6,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "attack": 7,
        "health": 23,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "22007": {
    "id": "22007",
    "name": "Platinum Champion",
    "picture": "Platinum_Elemental_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 8,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "legion",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "legion",
        "x": 3,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "2008": {
    "id": "2008",
    "name": "Shadow of Ash",
    "picture": "Ash_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "12008": {
    "id": "12008",
    "name": "Soul of Ash",
    "picture": "Ash_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "22008": {
    "id": "22008",
    "name": "Ash Bringer",
    "picture": "Ash_Elemental_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "2009": {
    "id": "2009",
    "name": "Sapling",
    "picture": "Sap_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "12009": {
    "id": "12009",
    "name": "Spirit of Sap",
    "picture": "Sap_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "22009": {
    "id": "22009",
    "name": "Specter of Sap",
    "picture": "Sap_Elemental_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 6,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 7,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "fervor",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 7,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "2010": {
    "id": "2010",
    "name": "Silver Wind",
    "picture": "Silver_Wind_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 1,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "12010": {
    "id": "12010",
    "name": "Silver Wind Spirit",
    "picture": "Silver_Wind_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "attack": 3,
        "health": 14,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "22010": {
    "id": "22010",
    "name": "Silver Wind Soul",
    "picture": "Silver_Wind_Elemental_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 3,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "2011": {
    "id": "2011",
    "name": "Poliworg",
    "picture": "Poliworg_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 5,
    "health": 12,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "4",
        "z": 4,
      },
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "12011": {
    "id": "12011",
    "name": "Poliworg Blitz",
    "picture": "Poliworg_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 5,
    "health": 17,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 3,
        "y": "4",
        "z": 4,
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "22011": {
    "id": "22011",
    "name": "Poliworg Barrage",
    "picture": "Poliworg_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 6,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 4,
        "y": "4",
        "z": 4,
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 5,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "2012": {
    "id": "2012",
    "name": "Frogling Swarm",
    "picture": "Frogling_Swarm_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 2,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 12,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "12012": {
    "id": "12012",
    "name": "Frogling Mob",
    "picture": "Frogling_Swarm_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 3,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "22012": {
    "id": "22012",
    "name": "Frogling Army",
    "picture": "Frogling_Swarm_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 4,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "2013": {
    "id": "2013",
    "name": "Stoneclad Toad",
    "picture": "Armored_Rock_Frog_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 8,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "12013": {
    "id": "12013",
    "name": "Ironclad Toad",
    "picture": "Armored_Rock_Frog_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 9,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 10,
        "skill": [],
      },
    }
  },
  "22013": {
    "id": "22013",
    "name": "Steelplated Toad",
    "picture": "Armored_Rock_Frog_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 11,
    "health": 24,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "6": {
        "attack": 12,
        "skill": [],
      },
    }
  },
  "2014": {
    "id": "2014",
    "name": "Tadpole Warmage",
    "picture": "Tadpole_Warmage_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "12014": {
    "id": "12014",
    "name": "Froglet Warmage",
    "picture": "Tadpole_Warmage_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "22014": {
    "id": "22014",
    "name": "Frog Warmage",
    "picture": "Tadpole_Warmage_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "2015": {
    "id": "2015",
    "name": "Pumpking",
    "picture": "Arcane_Pumpkin_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "12015": {
    "id": "12015",
    "name": "Pumpkhan",
    "picture": "Arcane_Pumpkin_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 4,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 20,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "22015": {
    "id": "22015",
    "name": "Pumpking Kong",
    "picture": "Arcane_Pumpkin_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 21,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "poison",
        "x": 5,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 24,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 6,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "2016": {
    "id": "2016",
    "name": "Atlas, the Ancient",
    "picture": "wyldBoss_A",
    "rarity": "5",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 9,
    "health": 32,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 11,
        "health": 37,
        "skill": [],
      },
      "7": {
        "health": 38,
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "2017": {
    "id": "2017",
    "name": "Solaron, the Origin",
    "picture": "aetherBoss_A",
    "rarity": "5",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 8,
    "health": 29,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "legion",
        "x": 5,
      },
      {
        "id": "protect",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "3": {
        "attack": 9,
        "health": 30,
        "skill": [],
      },
      "4": {
        "health": 31,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 10,
        "health": 34,
        "skill": [],
      },
      "7": {
        "health": 35,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 5,
            "all": "1",
          },
        ],
      },
    }
  },
  "2018": {
    "id": "2018",
    "name": "Vulcanos, the Forge",
    "picture": "chaosBoss_A",
    "rarity": "5",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 26,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 7,
        "health": 29,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 8,
        "health": 31,
        "skill": [],
      },
      "7": {
        "health": 33,
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "burn",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "2019": {
    "id": "2019",
    "name": "Chalistomper",
    "picture": "Chalicotherium_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "attack": 5,
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "12019": {
    "id": "12019",
    "name": "Chalistamper",
    "picture": "Chalicotherium_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "22019": {
    "id": "22019",
    "name": "Chalirazer",
    "picture": "Chalicotherium_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "2020": {
    "id": "2020",
    "name": "Tidetaken Fighter",
    "picture": "Frozen_Skeleton_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "12020": {
    "id": "12020",
    "name": "Tidetaken Warrior",
    "picture": "Frozen_Skeleton_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "22020": {
    "id": "22020",
    "name": "Tidetaken Destroyer",
    "picture": "Frozen_Skeleton_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "2021": {
    "id": "2021",
    "name": "Snowstep Ranger",
    "picture": "Snowstep_Ranger_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "12021": {
    "id": "12021",
    "name": "Snowstep Scout",
    "picture": "Snowstep_Ranger_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
    }
  },
  "22021": {
    "id": "22021",
    "name": "Snowstep Strider",
    "picture": "Snowstep_Ranger_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
    }
  },
  "2022": {
    "id": "2022",
    "name": "Avalanche Equine",
    "picture": "Avalanche_Spirit_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 6,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "12022": {
    "id": "12022",
    "name": "Snowslide Equine",
    "picture": "Avalanche_Spirit_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 7,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "attack": 8,
        "skill": [],
      },
    }
  },
  "22022": {
    "id": "22022",
    "name": "Snowcrush Equine",
    "picture": "Avalanche_Spirit_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 8,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "2023": {
    "id": "2023",
    "name": "Grizzly Terror",
    "picture": "Undead_Bear_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 3,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 1,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "12023": {
    "id": "12023",
    "name": "Grizzly Tear",
    "picture": "Undead_Bear_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 4,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "22023": {
    "id": "22023",
    "name": "Grizzly Despair",
    "picture": "Undead_Bear_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 5,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "2024": {
    "id": "2024",
    "name": "Dusk Noble",
    "picture": "Vampire_Noble_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "poison",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 1,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "12024": {
    "id": "12024",
    "name": "Dusk Aristocrat",
    "picture": "Vampire_Noble_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "22024": {
    "id": "22024",
    "name": "Dusk Highborn",
    "picture": "Vampire_Noble_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "2025": {
    "id": "2025",
    "name": "Blight Knight",
    "picture": "Void_Infected_Knight_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
    }
  },
  "12025": {
    "id": "12025",
    "name": "Infected Knight",
    "picture": "Void_Infected_Knight_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
    }
  },
  "22025": {
    "id": "22025",
    "name": "Void Knight",
    "picture": "Void_Infected_Knight_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 3,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "frost",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
    }
  },
  "2026": {
    "id": "2026",
    "name": "Lazarus",
    "picture": "Undead_King_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "12026": {
    "id": "12026",
    "name": "Lazarus, Harbinger",
    "picture": "Undead_King_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 3,
        "y": "7",
        "z": 7,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 4,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "22026": {
    "id": "22026",
    "name": "Lazarus, Betrayer",
    "picture": "Undead_King_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 4,
        "y": "7",
        "z": 7,
      },
      {
        "id": "enfeeble",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 4,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 4,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "2027": {
    "id": "2027",
    "name": "Halo Mage",
    "picture": "Angel_Mage_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "12027": {
    "id": "12027",
    "name": "Halo Wizard",
    "picture": "Angel_Mage_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "22027": {
    "id": "22027",
    "name": "Halomancer",
    "picture": "Angel_Mage_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "6",
        "z": 6,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "6",
            "z": 6,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "2028": {
    "id": "2028",
    "name": "Infinity",
    "picture": "Infinity_Angel_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "12028": {
    "id": "12028",
    "name": "Shifting Infinity",
    "picture": "Infinity_Angel_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "22028": {
    "id": "22028",
    "name": "Diverging Infinity",
    "picture": "Infinity_Angel_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 19,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "2029": {
    "id": "2029",
    "name": "Sly Critters",
    "picture": "Cute_Angel_Critter_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "6",
    "attack": 3,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "12029": {
    "id": "12029",
    "name": "Cunning Critters",
    "picture": "Cute_Angel_Critter_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "6",
    "attack": 3,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 4,
        "y": "3",
        "z": 3,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "22029": {
    "id": "22029",
    "name": "Devilish Critters",
    "picture": "Cute_Angel_Critter_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "6",
    "attack": 4,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 5,
        "y": "3",
        "z": 3,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "2030": {
    "id": "2030",
    "name": "Ebon Duelist",
    "picture": "Fencing_Angel_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "12030": {
    "id": "12030",
    "name": "Ebonox Duelist",
    "picture": "Fencing_Angel_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "22030": {
    "id": "22030",
    "name": "Ebonfire Duelist",
    "picture": "Fencing_Angel_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 5,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "berserk",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "2031": {
    "id": "2031",
    "name": "Dryad",
    "picture": "Shrine_Wood_Nymph_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "12031": {
    "id": "12031",
    "name": "Forest Dryad",
    "picture": "Shrine_Wood_Nymph_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 18,
        "skill": [],
      },
    }
  },
  "22031": {
    "id": "22031",
    "name": "Anima Dryad",
    "picture": "Shrine_Wood_Nymph_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 6,
    "health": 19,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "2032": {
    "id": "2032",
    "name": "Brimstone",
    "picture": "Brimestone_Monster_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 5,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 13,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
    }
  },
  "12032": {
    "id": "12032",
    "name": "Brimstone Gorger",
    "picture": "Brimestone_Monster_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 6,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "22032": {
    "id": "22032",
    "name": "Brimstone Spewer",
    "picture": "Brimestone_Monster_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 7,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
    }
  },
  "2033": {
    "id": "2033",
    "name": "Arcblaze Dragon",
    "picture": "Promo_Dragon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "3": {
        "attack": 5,
        "health": 16,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "2034": {
    "id": "2034",
    "name": "Leap Frog Duo",
    "picture": "Leap_Frog_Duo_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "12034": {
    "id": "12034",
    "name": "High Jump Duo",
    "picture": "Leap_Frog_Duo_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 5,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "4",
        "z": 4,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 24,
        "skill": [],
      },
    }
  },
  "22034": {
    "id": "22034",
    "name": "Bash Fist Duo",
    "picture": "Leap_Frog_Duo_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 7,
    "health": 24,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "4",
        "z": 4,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 8,
        "health": 26,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "2035": {
    "id": "2035",
    "name": "Mysterious Egg",
    "desc": "A mysterious egg we picked up during our travels. No one knows where it came from, but it begins to move when near Embersouls.",
    "picture": "Common_Dragon_A",
    "rarity": "1",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 0,
    "health": 3,
    "cost": 2,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "health": 5,
        "skill": [],
      },
    }
  },
  "2036": {
    "id": "2036",
    "name": "Narix, Dragon Whelp",
    "desc": "The egg has hatched into a newborn dragon! He's got an appetite for Embersouls.",
    "picture": "Rare_Dragon_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
    }
  },
  "2037": {
    "id": "2037",
    "name": "Narix, the Defiant",
    "desc": "Narix has grown in size, and he's becoming harder to control. He still follows your orders, but he's getting more intelligent every day.",
    "picture": "Epic_Dragon_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 3,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "2038": {
    "id": "2038",
    "name": "Narix, the Tyrant",
    "picture": "Legendary_Dragon_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 21,
    "cost": 2,
    "skill": [
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 8,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 7,
          },
        ],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "2039": {
    "id": "2039",
    "name": "Narix, Dragonlord",
    "picture": "mythicDragon_A",
    "rarity": "5",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 24,
    "cost": 2,
    "skill": [
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
      "7": {
        "skill": [
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "2040": {
    "id": "2040",
    "name": "Owlmancer",
    "picture": "Avian_Mage_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "10",
        "z": 10,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "10",
            "z": 10,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "10",
            "z": 10,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "12040": {
    "id": "12040",
    "name": "Ardent Owlmancer",
    "picture": "Avian_Mage_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 5,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 4,
        "y": "10",
        "z": 10,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "10",
            "z": 10,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "10",
            "z": 10,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "22040": {
    "id": "22040",
    "name": "Devout Owlmancer",
    "picture": "Avian_Mage_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 5,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 4,
        "y": "10",
        "z": 10,
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 5,
            "y": "10",
            "z": 10,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 19,
        "skill": [
          {
            "id": "protect",
            "x": 5,
            "y": "10",
            "z": 10,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "2041": {
    "id": "2041",
    "name": "Sharpwing",
    "picture": "Sharp_Wing_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "10",
    "attack": 2,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
    }
  },
  "12041": {
    "id": "12041",
    "name": "Bladewing",
    "picture": "Sharp_Wing_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "10",
    "attack": 3,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "22041": {
    "id": "22041",
    "name": "Razorwing",
    "picture": "Sharp_Wing_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "10",
    "attack": 4,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "2042": {
    "id": "2042",
    "name": "Carrion Hunter",
    "picture": "Vulture_Pack_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 3,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "12042": {
    "id": "12042",
    "name": "Carrion Feeder",
    "picture": "Vulture_Pack_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 4,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "berserk",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "berserk",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "22042": {
    "id": "22042",
    "name": "Carrion Pack",
    "picture": "Vulture_Pack_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 5,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "berserk",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "berserk",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "2043": {
    "id": "2043",
    "name": "Eos",
    "desc": "The creature appeared after the battle of Llarym. The soldiers named it to honor the great hero Eos, whom had lead them to victory.",
    "picture": "Crystal_Light_Bird_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "12043": {
    "id": "12043",
    "name": "Eos Raybringer",
    "picture": "Crystal_Light_Bird_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "22043": {
    "id": "22043",
    "name": "Eos Dawnbringer",
    "picture": "Crystal_Light_Bird_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 5,
    "health": 15,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "2044": {
    "id": "2044",
    "name": "Quillhide Dragon",
    "picture": "Spike_Tail_Basher_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 3,
    "health": 18,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 4,
        "health": 22,
        "skill": [],
      },
    }
  },
  "12044": {
    "id": "12044",
    "name": "Spikehide Dragon",
    "picture": "Spike_Tail_Basher_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 26,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "health": 27,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 28,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "22044": {
    "id": "22044",
    "name": "Spearhide Dragon",
    "picture": "Spike_Tail_Basher_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 30,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "fervor",
        "x": 4,
        "y": "9",
        "z": 9,
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "3": {
        "attack": 6,
        "health": 32,
        "skill": [],
      },
      "4": {
        "health": 33,
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 35,
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "fervor",
            "x": 5,
            "y": "9",
            "z": 9,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
    }
  },
  "2045": {
    "id": "2045",
    "name": "Chillbeard Giant",
    "desc": "\"Did that dragon just ask you to please chill out?\" - Concerned Adventurer",
    "picture": "Hairy_Chest_Ice_Dragon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "12045": {
    "id": "12045",
    "name": "Chillbeard Monster",
    "picture": "Hairy_Chest_Ice_Dragon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 4,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "22045": {
    "id": "22045",
    "name": "Chillbeard Beast",
    "picture": "Hairy_Chest_Ice_Dragon_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 24,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "2046": {
    "id": "2046",
    "name": "Leaping Dragon",
    "picture": "Floppy_Ear_Dragon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 10,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "12046": {
    "id": "12046",
    "name": "Bounding Dragon",
    "picture": "Floppy_Ear_Dragon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 3,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 13,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "22046": {
    "id": "22046",
    "name": "Pouncing Dragon",
    "picture": "Floppy_Ear_Dragon_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 4,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "2047": {
    "id": "2047",
    "name": "Conjured Dragon",
    "picture": "Spirit_Dragon_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 5,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "health": 21,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 6,
        "health": 22,
        "skill": [],
      },
    }
  },
  "12047": {
    "id": "12047",
    "name": "Mystical Dragon",
    "picture": "Spirit_Dragon_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 7,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "health": 25,
        "skill": [],
      },
      "6": {
        "health": 25,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "22047": {
    "id": "22047",
    "name": "Lustrous Dragon",
    "picture": "Spirit_Dragon_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 9,
    "health": 26,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "3": {
        "attack": 10,
        "health": 27,
        "skill": [],
      },
      "4": {
        "attack": 11,
        "health": 28,
        "skill": [],
      },
      "5": {
        "health": 29,
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 30,
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "2048": {
    "id": "2048",
    "name": "Sandmite",
    "picture": "Desert_Sprinter_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 3,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "12048": {
    "id": "12048",
    "name": "Sandspeck",
    "picture": "Desert_Sprinter_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 4,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "health": 13,
        "skill": [],
      },
    }
  },
  "22048": {
    "id": "22048",
    "name": "Sandroach",
    "picture": "Desert_Sprinter_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 5,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "3": {
        "attack": 6,
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "2049": {
    "id": "2049",
    "name": "Contrapede",
    "picture": "Bug_Of_Fire_and_Ice_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 1,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 2,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "12049": {
    "id": "12049",
    "name": "Dualipede",
    "picture": "Bug_Of_Fire_and_Ice_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 2,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
    }
  },
  "22049": {
    "id": "22049",
    "name": "Duplicipede",
    "picture": "Bug_Of_Fire_and_Ice_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 3,
    "health": 16,
    "cost": 1,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "2050": {
    "id": "2050",
    "name": "Slithering Pincer",
    "picture": "Monkey_Bug_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "13",
    "attack": 2,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "13",
        "z": 13,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 3,
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "12050": {
    "id": "12050",
    "name": "Swaying Pincer",
    "picture": "Monkey_Bug_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "13",
    "attack": 3,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 3,
        "y": "13",
        "z": 13,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "22050": {
    "id": "22050",
    "name": "Pendulum Pincer",
    "picture": "Monkey_Bug_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "13",
    "attack": 4,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 3,
        "y": "13",
        "z": 13,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
    }
  },
  "2051": {
    "id": "2051",
    "name": "Dune Hopper",
    "picture": "Legendary_Savanna_Crusher_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "13",
    "attack": 6,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "health": 20,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "12051": {
    "id": "12051",
    "name": "Dune Leaper",
    "picture": "Legendary_Savanna_Crusher_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "13",
    "attack": 7,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 8,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "health": 23,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "health": 25,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
    }
  },
  "22051": {
    "id": "22051",
    "name": "Dune Slammer",
    "picture": "Legendary_Savanna_Crusher_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "13",
    "attack": 8,
    "health": 25,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 3,
      },
      {
        "id": "berserk",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 9,
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "attack": 10,
        "health": 28,
        "skill": [],
      },
      "5": {
        "health": 29,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "berserk",
            "x": 4,
          },
        ],
      },
    }
  },
  "2052": {
    "id": "2052",
    "name": "Protector of Skyhaven",
    "picture": "Protective_Angel_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "valor",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 8,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "12052": {
    "id": "12052",
    "name": "Shield of Skyhaven",
    "picture": "Protective_Angel_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "22052": {
    "id": "22052",
    "name": "Aegis of Skyhaven",
    "picture": "Protective_Angel_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "valor",
        "x": 5,
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "attack": 6,
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "2053": {
    "id": "2053",
    "name": "Rocket Rider",
    "picture": "Bomb_Rider_Goblin_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 3,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "12053": {
    "id": "12053",
    "name": "Rocket Racer",
    "picture": "Bomb_Rider_Goblin_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "22053": {
    "id": "22053",
    "name": "Rocket Jockey",
    "picture": "Bomb_Rider_Goblin_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 4,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "2054": {
    "id": "2054",
    "name": "Pack Runner",
    "picture": "Pack_Leader_Angel_Angel_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "6",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "6",
        "z": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "6",
            "z": 6,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "12054": {
    "id": "12054",
    "name": "Pack Leader",
    "picture": "Pack_Leader_Angel_Angel_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "6",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "22054": {
    "id": "22054",
    "name": "Pack Alpha",
    "picture": "Pack_Leader_Angel_Angel_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "6",
    "attack": 5,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
    }
  },
  "2055": {
    "id": "2055",
    "name": "Wrath",
    "picture": "Angel_Muscle_Monster_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 4,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 1,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "12055": {
    "id": "12055",
    "name": "Wrath, Fury Incarnate",
    "picture": "Angel_Muscle_Monster_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 5,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "health": 14,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "22055": {
    "id": "22055",
    "name": "Wrath, Worldrender",
    "picture": "Angel_Muscle_Monster_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 5,
    "health": 15,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
    }
  },
  "2056": {
    "id": "2056",
    "name": "Drainor",
    "picture": "Whirl_Pool_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 5,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "jam",
        "c": 7,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 6,
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 20,
        "skill": [
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "12056": {
    "id": "12056",
    "name": "Drainor Whirlpool",
    "picture": "Whirl_Pool_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 6,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 22,
        "skill": [],
      },
      "5": {
        "health": 23,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "22056": {
    "id": "22056",
    "name": "Drainor Monsoon",
    "picture": "Whirl_Pool_Elemental_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 7,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "2057": {
    "id": "2057",
    "name": "Twister",
    "picture": "Sand_Warrior_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "health": 10,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "12057": {
    "id": "12057",
    "name": "Rising Twister",
    "picture": "Sand_Warrior_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 4,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "22057": {
    "id": "22057",
    "name": "Ascending Twister",
    "picture": "Sand_Warrior_Elemental_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 5,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "2058": {
    "id": "2058",
    "name": "Bismuth Bully",
    "picture": "Bismuth_Beast_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "12058": {
    "id": "12058",
    "name": "Bismuth Brute",
    "picture": "Bismuth_Beast_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "22058": {
    "id": "22058",
    "name": "Bismuth Beast",
    "picture": "Bismuth_Beast_Elemental_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 6,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "5000": {
    "id": "5000",
    "name": "Azure Sphinx",
    "picture": "Marble_Sphinx_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "15000": {
    "id": "15000",
    "name": "Marble Sphinx",
    "picture": "Marble_Sphinx_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "25000": {
    "id": "25000",
    "name": "Alabaster Sphinx",
    "picture": "Marble_Sphinx_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 5,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "health": 25,
        "skill": [],
      },
    }
  },
  "5001": {
    "id": "5001",
    "name": "Aven Skypiercer",
    "picture": "Eagle_Warrior_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 2,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "6": {
        "attack": 3,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15001": {
    "id": "15001",
    "name": "Feather Skypiercer",
    "picture": "Eagle_Warrior_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 3,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25001": {
    "id": "25001",
    "name": "Fierce Skypiercer",
    "picture": "Eagle_Warrior_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 19,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5002": {
    "id": "5002",
    "name": "Twilight Mirror",
    "picture": "Twilight_Mirror_Warrior_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 0,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 1,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 2,
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15002": {
    "id": "15002",
    "name": "Twilight Reflector",
    "picture": "Twilight_Mirror_Warrior_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 6,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "attack": 3,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "25002": {
    "id": "25002",
    "name": "Twilight Specular",
    "picture": "Twilight_Mirror_Warrior_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 7,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 8,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 8,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "5003": {
    "id": "5003",
    "name": "White Knight",
    "picture": "White_Knight_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "15003": {
    "id": "15003",
    "name": "Ivory Knight",
    "picture": "White_Knight_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 6,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "25003": {
    "id": "25003",
    "name": "Opal Knight",
    "picture": "White_Knight_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 7,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "5004": {
    "id": "5004",
    "name": "Lightning Lord",
    "picture": "Lighting_Lord_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 4,
        "health": 12,
        "skill": [],
      },
    }
  },
  "15004": {
    "id": "15004",
    "name": "Lightning Baron",
    "picture": "Lighting_Lord_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "25004": {
    "id": "25004",
    "name": "Lightning Demigod",
    "picture": "Lighting_Lord_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5005": {
    "id": "5005",
    "name": "Storm Giant",
    "picture": "Storm_Giant_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 21,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 23,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "15005": {
    "id": "15005",
    "name": "Thunderhead Giant",
    "picture": "Storm_Giant_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 7,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "25005": {
    "id": "25005",
    "name": "Windtempest Giant",
    "picture": "Storm_Giant_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 8,
    "health": 30,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 4,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "5": {
        "attack": 9,
        "health": 34,
        "skill": [],
      },
    }
  },
  "5006": {
    "id": "5006",
    "name": "Arms Enforcer",
    "desc": "Champion of the people, master of all armaments.",
    "picture": "Chariot_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 10,
    "cost": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
    }
  },
  "15006": {
    "id": "15006",
    "name": "Arms Gladiator",
    "picture": "Chariot_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 11,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "25006": {
    "id": "25006",
    "name": "Arms Champion",
    "picture": "Chariot_C",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 13,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "5007": {
    "id": "5007",
    "name": "Arcane Scroll",
    "desc": "\"Brushing your finger along the wrong rune can unleash its stored magic to disastrous effects.\" - Last Lesson of Magi Neyaroi",
    "picture": "Floating_Word_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 2,
    "cost": 1,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 3,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "15007": {
    "id": "15007",
    "name": "Ancient Scroll",
    "picture": "Floating_Word_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 3,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 5,
        "skill": [],
      },
    }
  },
  "25007": {
    "id": "25007",
    "name": "Ancient Manuscript",
    "picture": "Floating_Word_C",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 7,
        "skill": [],
      },
    }
  },
  "5008": {
    "id": "5008",
    "name": "Ice Dragon",
    "picture": "Ice_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "15008": {
    "id": "15008",
    "name": "Blizzard Dragon",
    "picture": "Ice_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 26,
    "cost": 4,
    "skill": [
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 29,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "25008": {
    "id": "25008",
    "name": "Hailstone Dragon",
    "picture": "Ice_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 7,
    "health": 30,
    "cost": 4,
    "skill": [
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "weaken",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "health": 33,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 35,
        "skill": [],
      },
      "6": {
        "attack": 8,
        "skill": [
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "5009": {
    "id": "5009",
    "name": "Royal Guardian",
    "picture": "Royal_Guardian_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15009": {
    "id": "15009",
    "name": "Majestic Guardian",
    "picture": "Royal_Guardian_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 7,
        "health": 17,
        "skill": [],
      },
    }
  },
  "25009": {
    "id": "25009",
    "name": "High Guardian",
    "picture": "Royal_Guardian_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 7,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "5010": {
    "id": "5010",
    "name": "Concealed Dragon",
    "picture": "Concealed_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 4,
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "15010": {
    "id": "15010",
    "name": "Lurking Dragon",
    "picture": "Concealed_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "25010": {
    "id": "25010",
    "name": "Veiled Dragon",
    "picture": "Concealed_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 4,
        "y": "1",
        "z": 1,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
    }
  },
  "5011": {
    "id": "5011",
    "name": "Sky Whale",
    "picture": "Sky_Whale_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "15011": {
    "id": "15011",
    "name": "Soaring Whale",
    "picture": "Sky_Whale_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "health": 26,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "25011": {
    "id": "25011",
    "name": "Celestial Whale",
    "picture": "Sky_Whale_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 29,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "5012": {
    "id": "5012",
    "name": "Static Drake",
    "picture": "Static_Drake_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 2,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "attack": 3,
        "health": 9,
        "skill": [],
      },
    }
  },
  "15012": {
    "id": "15012",
    "name": "Lightning Drake",
    "picture": "Static_Drake_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "25012": {
    "id": "25012",
    "name": "Thunder Drake",
    "picture": "Static_Drake_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "5013": {
    "id": "5013",
    "name": "Radiance",
    "picture": "Light_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 3,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "15013": {
    "id": "15013",
    "name": "Shining Radiance",
    "picture": "Light_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "25013": {
    "id": "25013",
    "name": "Brilliant Radiance",
    "picture": "Light_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "5014": {
    "id": "5014",
    "name": "Winged Raptor",
    "desc": "Application for Avian classification denied. Maybe in a few million years.",
    "picture": "Raptor_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15014": {
    "id": "15014",
    "name": "Charging Raptor",
    "picture": "Raptor_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "25014": {
    "id": "25014",
    "name": "Swift Raptor",
    "picture": "Raptor_Bird_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "5015": {
    "id": "5015",
    "name": "Gravity Swell",
    "picture": "Gravity_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 3,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15015": {
    "id": "15015",
    "name": "Gravity Tide",
    "picture": "Gravity_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "25015": {
    "id": "25015",
    "name": "Gravity Bender",
    "picture": "Gravity_Elemental_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 21,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5016": {
    "id": "5016",
    "name": "Fowl Swarm",
    "picture": "Flock_of_Birds_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "health": 9,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "15016": {
    "id": "15016",
    "name": "Fowl Drove",
    "picture": "Flock_of_Birds_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 3,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "25016": {
    "id": "25016",
    "name": "Fowl Horde",
    "picture": "Flock_of_Birds_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 3,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "5017": {
    "id": "5017",
    "name": "Steam Tempest",
    "picture": "Steam_Elemental_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 1,
    "health": 4,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
    }
  },
  "15017": {
    "id": "15017",
    "name": "Piping Tempest",
    "picture": "Steam_Elemental_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "25017": {
    "id": "25017",
    "name": "Scalding Tempest",
    "picture": "Steam_Elemental_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "5018": {
    "id": "5018",
    "name": "Grand Knight Frog",
    "picture": "High_Knight_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "15018": {
    "id": "15018",
    "name": "High Knight Frog",
    "picture": "High_Knight_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 5,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "25018": {
    "id": "25018",
    "name": "Supreme Knight Frog",
    "picture": "High_Knight_Frog_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 6,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "5019": {
    "id": "5019",
    "name": "Vivid Aurora",
    "picture": "Great_Aurora_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "15019": {
    "id": "15019",
    "name": "Brilliant Aurora",
    "picture": "Great_Aurora_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "25019": {
    "id": "25019",
    "name": "Blazing Aurora",
    "picture": "Great_Aurora_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "5020": {
    "id": "5020",
    "name": "Frost Frog",
    "picture": "Frozen_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 5,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15020": {
    "id": "15020",
    "name": "Frozen Frog",
    "picture": "Frozen_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 7,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
    }
  },
  "25020": {
    "id": "25020",
    "name": "Arctic Frog",
    "picture": "Frozen_Frog_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 8,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "5021": {
    "id": "5021",
    "name": "Tower Spirit",
    "picture": "Tower_Spirit_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15021": {
    "id": "15021",
    "name": "Spire Spirit",
    "picture": "Tower_Spirit_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "25021": {
    "id": "25021",
    "name": "Citadel Spirit",
    "picture": "Tower_Spirit_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "5022": {
    "id": "5022",
    "name": "Webfoot Raider",
    "picture": "Bombardier_Frog_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 1,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "15022": {
    "id": "15022",
    "name": "Webfoot Bombardier",
    "picture": "Bombardier_Frog_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 1,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "25022": {
    "id": "25022",
    "name": "Webfoot Marauder",
    "picture": "Bombardier_Frog_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 2,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "5023": {
    "id": "5023",
    "name": "Nightfall Dragon",
    "picture": "Night_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "15023": {
    "id": "15023",
    "name": "Nighttide Dragon",
    "picture": "Night_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 5,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "25023": {
    "id": "25023",
    "name": "Twilight Dragon",
    "picture": "Night_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 4,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "5024": {
    "id": "5024",
    "name": "Cloudtop Dragon",
    "picture": "Sky_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "15024": {
    "id": "15024",
    "name": "Billowtop Dragon",
    "picture": "Sky_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "25024": {
    "id": "25024",
    "name": "Skytop Dragon",
    "picture": "Sky_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 7,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "5025": {
    "id": "5025",
    "name": "Steelskin Dragon",
    "picture": "Steel_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "15025": {
    "id": "15025",
    "name": "Plateskin Dragon",
    "picture": "Steel_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 7,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
    }
  },
  "25025": {
    "id": "25025",
    "name": "Silverskin Dragon",
    "picture": "Steel_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 8,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "5026": {
    "id": "5026",
    "name": "Frostfire Wyrm",
    "picture": "Frost_Wyrm_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "15026": {
    "id": "15026",
    "name": "Frostflame Wyrm",
    "picture": "Frost_Wyrm_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25026": {
    "id": "25026",
    "name": "Frostscour Wyrm",
    "picture": "Frost_Wyrm_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 15,
    "cost": 1,
    "skill": [
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5027": {
    "id": "5027",
    "name": "Northern War-kin",
    "picture": "Polar_Bear_Warrior_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 17,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "health": 19,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15027": {
    "id": "15027",
    "name": "Northern Clash-kin",
    "picture": "Polar_Bear_Warrior_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "attack": 7,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 8,
        "health": 23,
        "skill": [],
      },
    }
  },
  "25027": {
    "id": "25027",
    "name": "Northern Strife-kin",
    "picture": "Polar_Bear_Warrior_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "attack": 8,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "attack": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5028": {
    "id": "5028",
    "name": "Winter Blacksmith",
    "picture": "Winter_Blacksmith_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "15028": {
    "id": "15028",
    "name": "Winter Armorer",
    "picture": "Winter_Blacksmith_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "25028": {
    "id": "25028",
    "name": "Winter Bladesmith",
    "picture": "Winter_Blacksmith_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 7,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 4,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "5029": {
    "id": "5029",
    "name": "Snowback Dragon",
    "picture": "Snowhidden_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 2,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "15029": {
    "id": "15029",
    "name": "Snowmasked Dragon",
    "picture": "Snowhidden_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 23,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "25029": {
    "id": "25029",
    "name": "Snowcloaked Dragon",
    "picture": "Snowhidden_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 4,
    "health": 25,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 28,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "5030": {
    "id": "5030",
    "name": "Loxphas Mage",
    "picture": "Mastodon_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "15030": {
    "id": "15030",
    "name": "Loxphas Sorcerer",
    "picture": "Mastodon_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "25030": {
    "id": "25030",
    "name": "Loxphas Wizard",
    "picture": "Mastodon_Mage_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "5031": {
    "id": "5031",
    "name": "Frostlance Valkyrie",
    "picture": "Winter_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 8,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15031": {
    "id": "15031",
    "name": "Snowlance Valkyrie",
    "picture": "Winter_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25031": {
    "id": "25031",
    "name": "Icelance Valkyrie",
    "picture": "Winter_Angel_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 6,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5032": {
    "id": "5032",
    "name": "Hail Hurler",
    "picture": "Hail_Hurler_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 0,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "15032": {
    "id": "15032",
    "name": "Iceblock Hurler",
    "picture": "Hail_Hurler_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 0,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "25032": {
    "id": "25032",
    "name": "Frostshard Hurler",
    "picture": "Hail_Hurler_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 0,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "5033": {
    "id": "5033",
    "name": "Lost Soul",
    "picture": "Lost_Soul_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "z": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "7",
            "z": 7,
          },
        ],
      },
    }
  },
  "15033": {
    "id": "15033",
    "name": "Wandering Soul",
    "picture": "Lost_Soul_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 3,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "7",
        "z": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "7",
            "z": 7,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "7",
            "z": 7,
          },
        ],
      },
    }
  },
  "25033": {
    "id": "25033",
    "name": "Dread Soul",
    "picture": "Lost_Soul_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 3,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "7",
        "z": 7,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "7",
            "z": 7,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "7",
            "z": 7,
          },
        ],
      },
    }
  },
  "5034": {
    "id": "5034",
    "name": "Skyward Guardian",
    "picture": "Skyward_Guardian_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 4,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "health": 18,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15034": {
    "id": "15034",
    "name": "Skyward Defender",
    "picture": "Skyward_Guardian_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 5,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "health": 22,
        "skill": [],
      },
      "5": {
        "health": 23,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "25034": {
    "id": "25034",
    "name": "Skyward Sentinel",
    "picture": "Skyward_Guardian_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 6,
    "health": 24,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "5035": {
    "id": "5035",
    "name": "Vapor Guard",
    "picture": "Vapor_Ghost_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "7",
        "z": 7,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "7",
            "z": 7,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "15035": {
    "id": "15035",
    "name": "Vapor Defender",
    "picture": "Vapor_Ghost_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "7",
        "z": 7,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "7",
            "z": 7,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 6,
        "health": 15,
        "skill": [],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "7",
            "z": 7,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "25035": {
    "id": "25035",
    "name": "Vapor Warden",
    "picture": "Vapor_Ghost_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 6,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "7",
        "z": 7,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "7",
            "z": 7,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "7",
            "z": 7,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "5036": {
    "id": "5036",
    "name": "Winter Tail",
    "picture": "Fox_Spirit_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 1,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "z": 7,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "attack": 2,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "z": 7,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "15036": {
    "id": "15036",
    "name": "Spring Tail",
    "picture": "Fox_Spirit_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 2,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "z": 7,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "z": 7,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
      "6": {
        "attack": 3,
        "health": 14,
        "skill": [],
      },
    }
  },
  "25036": {
    "id": "25036",
    "name": "Summer Tail",
    "picture": "Fox_Spirit_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 3,
    "health": 16,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "z": 7,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "z": 7,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "health": 19,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "z": 7,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5037": {
    "id": "5037",
    "name": "Dauntless Baneblade",
    "picture": "Phantom_Swordsman_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "7",
        "z": 7,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
      "6": {
        "health": 14,
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15037": {
    "id": "15037",
    "name": "Dauntless Claymore",
    "picture": "Phantom_Swordsman_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 2,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "7",
        "z": 7,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25037": {
    "id": "25037",
    "name": "Dauntless Deathknell",
    "picture": "Phantom_Swordsman_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "7",
    "attack": 3,
    "health": 19,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "health": 23,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5038": {
    "id": "5038",
    "name": "Celestial Monarch",
    "picture": "Angel_Queen_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 7,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "15038": {
    "id": "15038",
    "name": "Celestial Empress",
    "picture": "Angel_Queen_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "25038": {
    "id": "25038",
    "name": "Celestial Queen",
    "picture": "Angel_Queen_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 25,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 28,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "5039": {
    "id": "5039",
    "name": "Ethereal Knight",
    "picture": "Ethereal_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "15039": {
    "id": "15039",
    "name": "Ethereal Paladin",
    "picture": "Ethereal_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 6,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "25039": {
    "id": "25039",
    "name": "Ethereal Champion",
    "picture": "Ethereal_Angel_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 6,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "2",
        "z": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "health": 20,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "2",
            "z": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "5040": {
    "id": "5040",
    "name": "Winged Trumpeter",
    "picture": "Angel_Trumpetier_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15040": {
    "id": "15040",
    "name": "Celestial Trumpeter",
    "picture": "Angel_Trumpetier_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25040": {
    "id": "25040",
    "name": "Divine Trumpeter",
    "picture": "Angel_Trumpetier_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 4,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 25,
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5041": {
    "id": "5041",
    "name": "Skylance Raiders",
    "picture": "Swiftlance_Raiders_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15041": {
    "id": "15041",
    "name": "Divelance Raiders",
    "picture": "Swiftlance_Raiders_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "25041": {
    "id": "25041",
    "name": "Swiftlance Raiders",
    "picture": "Swiftlance_Raiders_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "5042": {
    "id": "5042",
    "name": "Tinkerer",
    "picture": "The_Tinkerer_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
    }
  },
  "15042": {
    "id": "15042",
    "name": "Wingspan Tinkerer",
    "picture": "The_Tinkerer_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
    }
  },
  "25042": {
    "id": "25042",
    "name": "Steelfeather Tinkerer",
    "picture": "The_Tinkerer_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
    }
  },
  "5043": {
    "id": "5043",
    "name": "Empyrean",
    "picture": "Firewing_Warrior_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "15043": {
    "id": "15043",
    "name": "Empyrean Flame",
    "picture": "Firewing_Warrior_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "25043": {
    "id": "25043",
    "name": "Empyrean Fire",
    "picture": "Firewing_Warrior_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "5044": {
    "id": "5044",
    "name": "Telepathic Magi",
    "picture": "Telepathic_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 3,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "15044": {
    "id": "15044",
    "name": "Clairvoyant Magi",
    "picture": "Telepathic_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25044": {
    "id": "25044",
    "name": "Ascended Magi",
    "picture": "Telepathic_Mage_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "5045": {
    "id": "5045",
    "name": "Echo Elemental",
    "picture": "Sound_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
        ],
      },
    }
  },
  "15045": {
    "id": "15045",
    "name": "Echo Essence",
    "picture": "Sound_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 4,
        "y": "5",
        "z": 5,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "5",
        "z": 5,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 22,
        "skill": [],
      },
      "4": {
        "health": 23,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "5",
            "z": 5,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 24,
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "5",
            "z": 5,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
        ],
      },
    }
  },
  "25045": {
    "id": "25045",
    "name": "Echo Incarnate",
    "picture": "Sound_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 25,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 5,
        "y": "5",
        "z": 5,
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "5",
        "z": 5,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "health": 28,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 6,
            "y": "5",
            "z": 5,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 6,
            "y": "5",
            "z": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
        ],
      },
    }
  },
  "5046": {
    "id": "5046",
    "name": "Dawn",
    "picture": "Dawn_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 3,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "15046": {
    "id": "15046",
    "name": "Dawnset",
    "picture": "Dawn_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "25046": {
    "id": "25046",
    "name": "Dawnrise",
    "picture": "Dawn_Elemental_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 4,
        "y": "5",
        "z": 5,
      },
      {
        "id": "legion",
        "x": 3,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "5047": {
    "id": "5047",
    "name": "Sky Fisher",
    "picture": "Sky_Picker_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 5,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "15047": {
    "id": "15047",
    "name": "Sky Picker",
    "picture": "Sky_Picker_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 6,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25047": {
    "id": "25047",
    "name": "Sky Angler",
    "picture": "Sky_Picker_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 6,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 26,
        "skill": [],
      },
      "5": {
        "health": 27,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5048": {
    "id": "5048",
    "name": "Highborn Rose",
    "picture": "Rose_Elemental_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15048": {
    "id": "15048",
    "name": "Noble Rose",
    "picture": "Rose_Elemental_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25048": {
    "id": "25048",
    "name": "Royal Rose",
    "picture": "Rose_Elemental_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 19,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 22,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5049": {
    "id": "5049",
    "name": "Joryl",
    "desc": "The boy Amiri always had an affinity for magic involving stone, even at a very young age.",
    "picture": "Marble_Golem_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 10,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "attack": 11,
        "health": 26,
        "skill": [],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 28,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
        ],
      },
    }
  },
  "15049": {
    "id": "15049",
    "name": "Joryl of Marble",
    "desc": "The marble that Amiri used to awaken Joryl was the very bedrock of his home.",
    "picture": "Marble_Golem_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 12,
    "health": 29,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 31,
        "skill": [],
      },
      "4": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 4,
          },
        ],
      },
      "5": {
        "attack": 13,
        "health": 33,
        "skill": [],
      },
      "6": {
        "health": 34,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 5,
          },
        ],
      },
    }
  },
  "25049": {
    "id": "25049",
    "name": "Joryl of Onyx Marble",
    "desc": "Joryl followed Amiri, defending their land from invaders and becoming a living legend.",
    "picture": "Marble_Golem_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 14,
    "health": 35,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "counter",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "attack": 15,
        "health": 37,
        "skill": [],
      },
      "4": {
        "health": 38,
        "skill": [],
      },
      "5": {
        "health": 39,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "counter",
            "x": 5,
          },
        ],
      },
      "6": {
        "health": 40,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "counter",
            "x": 6,
          },
        ],
      },
    }
  },
  "5050": {
    "id": "5050",
    "name": "Cloud Spear",
    "picture": "Cloud_Pike_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "15050": {
    "id": "15050",
    "name": "Soaring Spear",
    "picture": "Cloud_Pike_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 3,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "4",
        "z": 4,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "25050": {
    "id": "25050",
    "name": "Lightning Spear",
    "picture": "Cloud_Pike_Frog_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 4,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "4",
        "z": 4,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "5051": {
    "id": "5051",
    "name": "Amphibious Digger",
    "picture": "Shinning_Explorer_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 5,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "4",
        "z": 4,
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "15051": {
    "id": "15051",
    "name": "Amphibious Explorer",
    "picture": "Shinning_Explorer_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 6,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "4",
        "z": 4,
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "25051": {
    "id": "25051",
    "name": "Amphibious Spelunker",
    "picture": "Shinning_Explorer_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 7,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 4,
        "y": "4",
        "z": 4,
      },
      {
        "id": "nullify",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "4",
            "z": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "4",
            "z": 4,
          },
          {
            "id": "nullify",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 7,
          },
        ],
      },
    }
  },
  "5052": {
    "id": "5052",
    "name": "Paradise Avian",
    "picture": "Paradise_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 3,
        "skill": [],
      },
      "6": {
        "health": 14,
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15052": {
    "id": "15052",
    "name": "Wonder Avian",
    "picture": "Paradise_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 3,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "25052": {
    "id": "25052",
    "name": "Utopia Avian",
    "picture": "Paradise_Bird_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 19,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "5053": {
    "id": "5053",
    "name": "Anura Witch",
    "desc": "\"Owl's wing, bat's fur, a touch of baboon blood and... TOAD?!\"",
    "picture": "Frog_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15053": {
    "id": "15053",
    "name": "Anura Sorceress",
    "picture": "Frog_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 5,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25053": {
    "id": "25053",
    "name": "Anuramancer",
    "picture": "Frog_Mage_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 6,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5054": {
    "id": "5054",
    "name": "Reckless Ballista",
    "picture": "Reckless_Ballista_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 2,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "4",
        "z": 4,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 3,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15054": {
    "id": "15054",
    "name": "Intrepid Ballista",
    "picture": "Reckless_Ballista_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 3,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "4",
        "z": 4,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "25054": {
    "id": "25054",
    "name": "Fearless Ballista",
    "picture": "Reckless_Ballista_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 3,
    "health": 15,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 4,
        "y": "4",
        "z": 4,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "4",
            "z": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "4",
            "z": 4,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "5055": {
    "id": "5055",
    "name": "Galewing",
    "picture": "Wind_Puffer_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "15055": {
    "id": "15055",
    "name": "Galewing Blast",
    "picture": "Wind_Puffer_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "25055": {
    "id": "25055",
    "name": "Galewing Tempest",
    "picture": "Wind_Puffer_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 19,
    "cost": 2,
    "skill": [
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "5056": {
    "id": "5056",
    "name": "Kaliri the Foremost",
    "picture": "Avian_Highborn_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "10",
        "z": 10,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "10",
            "z": 10,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "10",
            "z": 10,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15056": {
    "id": "15056",
    "name": "Kaliri the Champion",
    "picture": "Avian_Highborn_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "10",
        "z": 10,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "10",
            "z": 10,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "10",
            "z": 10,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "25056": {
    "id": "25056",
    "name": "Kaliri the Paramount",
    "picture": "Avian_Highborn_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 5,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "10",
        "z": 10,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "10",
            "z": 10,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "attack": 6,
        "health": 22,
        "skill": [],
      },
      "5": {
        "health": 23,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "10",
            "z": 10,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5057": {
    "id": "5057",
    "name": "Skystriker",
    "picture": "Avian_General_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "10",
        "z": 10,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 1,
        "y": "10",
        "z": 10,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "10",
            "z": 10,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
            "z": 10,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "10",
            "z": 10,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
            "z": 10,
          },
        ],
      },
      "6": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "10",
            "z": 10,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
            "z": 10,
          },
        ],
      },
    }
  },
  "15057": {
    "id": "15057",
    "name": "Great Skystriker",
    "picture": "Avian_General_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "10",
        "z": 10,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "10",
        "z": 10,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "10",
            "z": 10,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
            "z": 10,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "10",
            "z": 10,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "10",
            "z": 10,
          },
        ],
      },
    }
  },
  "25057": {
    "id": "25057",
    "name": "Imperial Skystriker",
    "picture": "Avian_General_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "10",
        "z": 10,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 3,
        "y": "10",
        "z": 10,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "10",
            "z": 10,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "10",
            "z": 10,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "10",
            "z": 10,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 4,
            "y": "10",
            "z": 10,
          },
        ],
      },
    }
  },
  "5058": {
    "id": "5058",
    "name": "Crescent Moon Owl",
    "picture": "Owl_Knight_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "10",
        "z": 10,
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
            "z": 10,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
            "z": 10,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "10",
            "z": 10,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15058": {
    "id": "15058",
    "name": "Crescent Moon Guard",
    "picture": "Owl_Knight_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 3,
        "y": "10",
        "z": 10,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "10",
            "z": 10,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "10",
            "z": 10,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25058": {
    "id": "25058",
    "name": "Crescent Moon Sentry",
    "picture": "Owl_Knight_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 5,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 4,
        "y": "10",
        "z": 10,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "10",
            "z": 10,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 5,
            "y": "10",
            "z": 10,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5059": {
    "id": "5059",
    "name": "Bemola",
    "desc": "\"Winter is coming.\"",
    "picture": "Ice_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 1,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "6": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "15059": {
    "id": "15059",
    "name": "Bemola the Wind",
    "picture": "Ice_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 2,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
    }
  },
  "25059": {
    "id": "25059",
    "name": "Bemola the Frost",
    "picture": "Ice_Bird_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 2,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
    }
  },
  "5060": {
    "id": "5060",
    "name": "Quack Apprentice",
    "picture": "Avian_Scientist_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 7,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "15060": {
    "id": "15060",
    "name": "Quack Researcher",
    "picture": "Avian_Scientist_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "25060": {
    "id": "25060",
    "name": "Quack Arcanist",
    "picture": "Avian_Scientist_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "10",
    "attack": 6,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "5061": {
    "id": "5061",
    "name": "Thunderfist Rex",
    "picture": "Legendary_Lightning_Fist_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
    }
  },
  "15061": {
    "id": "15061",
    "name": "Flashfist Rex",
    "picture": "Legendary_Lightning_Fist_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 8,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 8,
          },
        ],
      },
    }
  },
  "25061": {
    "id": "25061",
    "name": "Boltfist Rex",
    "picture": "Legendary_Lightning_Fist_Dragon_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 8,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 9,
          },
        ],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 22,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 10,
          },
        ],
      },
    }
  },
  "5062": {
    "id": "5062",
    "name": "Cliffhanger Wyrm",
    "picture": "Spike_Blade_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "attack": 5,
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "15062": {
    "id": "15062",
    "name": "Cliffrider Wyrm",
    "picture": "Spike_Blade_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25062": {
    "id": "25062",
    "name": "Cliffgazer Wyrm",
    "picture": "Spike_Blade_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 24,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5063": {
    "id": "5063",
    "name": "Runic Dragon",
    "picture": "Rune_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "health": 14,
        "skill": [],
      },
    }
  },
  "15063": {
    "id": "15063",
    "name": "Runeworn Dragon",
    "picture": "Rune_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "health": 18,
        "skill": [],
      },
    }
  },
  "25063": {
    "id": "25063",
    "name": "Runeglow Dragon",
    "picture": "Rune_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 19,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
    }
  },
  "5064": {
    "id": "5064",
    "name": "Anshar",
    "picture": "Airship_Stalker_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
        "z": 9,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "health": 22,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "15064": {
    "id": "15064",
    "name": "Anshar, the Airbane",
    "picture": "Airship_Stalker_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "9",
        "z": 9,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "25064": {
    "id": "25064",
    "name": "Anshar, the Skybane",
    "picture": "Airship_Stalker_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 7,
    "health": 26,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 5,
        "y": "9",
        "z": 9,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 29,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "health": 30,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "5065": {
    "id": "5065",
    "name": "Hive Guard",
    "desc": "The members of a colony charged with its defense have often evolved precisely for that task.",
    "picture": "Hive_Guard_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "13",
        "z": 13,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "13",
            "z": 13,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "attack": 5,
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "13",
            "z": 13,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15065": {
    "id": "15065",
    "name": "Hive Defender",
    "picture": "Hive_Guard_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "13",
        "z": 13,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 15,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "13",
            "z": 13,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "25065": {
    "id": "25065",
    "name": "Hive Sentry",
    "picture": "Hive_Guard_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 6,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "13",
        "z": 13,
      },
      {
        "id": "protect",
        "x": 4,
        "y": "1",
        "z": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 18,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "13",
            "z": 13,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "5070": {
    "id": "5070",
    "name": "Hornslicer",
    "picture": "Horn_Head_Warrior_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 4,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "13",
        "z": 13,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "13",
            "z": 13,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 5,
        "health": 20,
        "skill": [],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "health": 22,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "13",
            "z": 13,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "15070": {
    "id": "15070",
    "name": "Horncutter",
    "picture": "Horn_Head_Warrior_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 5,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "13",
        "z": 13,
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "13",
            "z": 13,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "13",
            "z": 13,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 6,
        "health": 25,
        "skill": [],
      },
      "5": {
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "13",
            "z": 13,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 27,
        "skill": [],
      },
    }
  },
  "25070": {
    "id": "25070",
    "name": "Hornsaber",
    "picture": "Horn_Head_Warrior_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 6,
    "health": 28,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "rally",
        "x": 6,
        "y": "13",
        "z": 13,
      },
      {
        "id": "nullify",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 7,
            "y": "13",
            "z": 13,
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 30,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 31,
        "skill": [],
      },
      "5": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 7,
            "y": "13",
            "z": 13,
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 8,
            "y": "13",
            "z": 13,
          },
          {
            "id": "nullify",
            "x": 4,
          },
        ],
      },
    }
  },
  "5066": {
    "id": "5066",
    "name": "Scarab Beast",
    "picture": "MultiWeapon_Fat_Stack_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 5,
    "health": 22,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 26,
        "skill": [],
      },
      "6": {
        "health": 27,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "15066": {
    "id": "15066",
    "name": "Scarab Brute",
    "picture": "MultiWeapon_Fat_Stack_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 6,
    "health": 28,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 31,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 33,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 34,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "25066": {
    "id": "25066",
    "name": "Scarab Barbarian",
    "picture": "MultiWeapon_Fat_Stack_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 8,
    "health": 35,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 5,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
      "4": {
        "attack": 9,
        "health": 36,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
      "6": {
        "health": 37,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 7,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
    }
  },
  "5067": {
    "id": "5067",
    "name": "Squito Roamer",
    "picture": "Stinger_Fist_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 14,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "15067": {
    "id": "15067",
    "name": "Squito Bandit",
    "picture": "Stinger_Fist_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 6,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "25067": {
    "id": "25067",
    "name": "Bansquito",
    "picture": "Stinger_Fist_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 6,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "5068": {
    "id": "5068",
    "name": "Aht-Aht Carrier",
    "picture": "Longleg_Mountain_Nomad_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 2,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "13",
        "z": 13,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "13",
            "z": 13,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "13",
            "z": 13,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "15068": {
    "id": "15068",
    "name": "Aht-Aht Transporter",
    "picture": "Longleg_Mountain_Nomad_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 2,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "13",
        "z": 13,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "13",
            "z": 13,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "13",
            "z": 13,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "25068": {
    "id": "25068",
    "name": "Aht-Aht Trekker",
    "picture": "Longleg_Mountain_Nomad_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 3,
    "health": 16,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 4,
        "y": "13",
        "z": 13,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "13",
            "z": 13,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "5069": {
    "id": "5069",
    "name": "Heralidae",
    "picture": "Mysterious_Wing_Cloak_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 0,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "13",
        "z": 13,
      },
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "13",
            "z": 13,
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "health": 21,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "13",
            "z": 13,
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15069": {
    "id": "15069",
    "name": "Heralidae Aegis",
    "picture": "Mysterious_Wing_Cloak_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 0,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 4,
        "y": "13",
        "z": 13,
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "13",
            "z": 13,
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "13",
            "z": 13,
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 26,
        "skill": [],
      },
    }
  },
  "25069": {
    "id": "25069",
    "name": "Heralidae Bastion",
    "picture": "Mysterious_Wing_Cloak_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "13",
    "attack": 0,
    "health": 27,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 5,
        "y": "13",
        "z": 13,
      },
      {
        "id": "heal",
        "x": 3,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 29,
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "13",
            "z": 13,
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 30,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "13",
            "z": 13,
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "5071": {
    "id": "5071",
    "name": "Stoic Watcher",
    "picture": "Void_Conqueror_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 3,
        "health": 22,
        "skill": [],
      },
      "6": {
        "health": 23,
        "skill": [],
      },
    }
  },
  "15071": {
    "id": "15071",
    "name": "Stoic Onlooker",
    "picture": "Void_Conqueror_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "valor",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "health": 27,
        "skill": [],
      },
      "6": {
        "health": 28,
        "skill": [],
      },
    }
  },
  "25071": {
    "id": "25071",
    "name": "Fray the Stoic",
    "picture": "Void_Conqueror_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 28,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "valor",
        "x": 5,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "3": {
        "attack": 5,
        "health": 29,
        "skill": [],
      },
      "4": {
        "health": 30,
        "skill": [],
      },
      "5": {
        "health": 31,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "valor",
            "x": 7,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5072": {
    "id": "5072",
    "name": "Blind Seer",
    "picture": "Feather_Eyes_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
    }
  },
  "15072": {
    "id": "15072",
    "name": "Blind Sage",
    "picture": "Feather_Eyes_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [],
      },
    }
  },
  "25072": {
    "id": "25072",
    "name": "Blind Enlightened",
    "picture": "Feather_Eyes_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 6,
          },
        ],
      },
    }
  },
  "5073": {
    "id": "5073",
    "name": "Shell Invader",
    "picture": "Crustacean_Hell_Bringer_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "12",
    "attack": 3,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "12",
        "z": 12,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "12",
            "z": 12,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "12",
            "z": 12,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
    }
  },
  "15073": {
    "id": "15073",
    "name": "Shell Emerger",
    "picture": "Crustacean_Hell_Bringer_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "12",
    "attack": 4,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "12",
        "z": 12,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "12",
            "z": 12,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "12",
            "z": 12,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
    }
  },
  "25073": {
    "id": "25073",
    "name": "Shell Buckler",
    "picture": "Crustacean_Hell_Bringer_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "12",
    "attack": 4,
    "health": 24,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 5,
        "y": "12",
        "z": 12,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 26,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "12",
            "z": 12,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "12",
            "z": 12,
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
    }
  },
  "5074": {
    "id": "5074",
    "name": "Godfried the Hunter",
    "desc": "\"And in the face of the beast Godfried sang the song of his death, proudly and with a smile on his face.\" - the Tales of Luminis",
    "picture": "Beast_Slayer_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 8,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 7,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15074": {
    "id": "15074",
    "name": "Godfried the Slayer",
    "picture": "Beast_Slayer_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25074": {
    "id": "25074",
    "name": "Godfried Goldfyre",
    "picture": "Beast_Slayer_Angel_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 22,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5075": {
    "id": "5075",
    "name": "Arith",
    "picture": "Blind_Justice_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "valor",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "health": 11,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "15075": {
    "id": "15075",
    "name": "Arith the Justicar",
    "picture": "Blind_Justice_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "valor",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "25075": {
    "id": "25075",
    "name": "Arith, Grand Justicar",
    "picture": "Blind_Justice_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 6,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
    }
  },
  "5076": {
    "id": "5076",
    "name": "Sorath, the Valkyrie",
    "picture": "Ice_Head_Angel_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [],
      },
      "6": {
        "health": 23,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "15076": {
    "id": "15076",
    "name": "Sorath, the Champion",
    "picture": "Ice_Head_Angel_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 24,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "health": 27,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "5": {
        "health": 28,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "25076": {
    "id": "25076",
    "name": "Sorath, the Frostedge",
    "picture": "Ice_Head_Angel_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 29,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "frost",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 31,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "health": 32,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 33,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
    }
  },
  "5077": {
    "id": "5077",
    "name": "Everspark Ace",
    "desc": "When Everspark enters the battlefield it tends to shock the opposition.",
    "picture": "Lightning_Angel_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 1,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "valor",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "valor",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "valor",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 4,
          },
        ],
      },
    }
  },
  "15077": {
    "id": "15077",
    "name": "Everbolt Ace",
    "picture": "Lightning_Angel_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 1,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "valor",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 5,
          },
        ],
      },
      "5": {
        "attack": 2,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 5,
          },
        ],
      },
    }
  },
  "25077": {
    "id": "25077",
    "name": "Everstorm Ace",
    "picture": "Lightning_Angel_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 16,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "valor",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 6,
          },
        ],
      },
    }
  },
  "5078": {
    "id": "5078",
    "name": "Asariel",
    "picture": "Cannon_Angel_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15078": {
    "id": "15078",
    "name": "Asariel the Arbalest",
    "picture": "Cannon_Angel_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 6,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "attack": 7,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25078": {
    "id": "25078",
    "name": "Asariel the Wrath Engine",
    "picture": "Cannon_Angel_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 7,
    "health": 22,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "health": 25,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5079": {
    "id": "5079",
    "name": "Cyclopnid",
    "picture": "Steel_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 5,
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "15079": {
    "id": "15079",
    "name": "Cyclopnid Alloyborn",
    "picture": "Steel_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "25079": {
    "id": "25079",
    "name": "Cyclopnid Oreborn",
    "picture": "Steel_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 6,
    "health": 25,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "3": {
        "attack": 7,
        "health": 27,
        "skill": [],
      },
      "4": {
        "health": 28,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
    }
  },
  "6000": {
    "id": "6000",
    "name": "Furnace Mech",
    "picture": "Fire_Furnace_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "16000": {
    "id": "16000",
    "name": "Furnace Smasher",
    "picture": "Fire_Furnace_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "26000": {
    "id": "26000",
    "name": "Furnace Breaker",
    "picture": "Fire_Furnace_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "6001": {
    "id": "6001",
    "name": "Orobas",
    "picture": "Balrog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "16001": {
    "id": "16001",
    "name": "Orobas Ignited",
    "picture": "Balrog_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "26001": {
    "id": "26001",
    "name": "Orobas Unleashed",
    "picture": "Balrog_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "6002": {
    "id": "6002",
    "name": "Spirit of Madness",
    "picture": "Chaos_Spirit_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "16002": {
    "id": "16002",
    "name": "Spirit of Dementia",
    "picture": "Chaos_Spirit_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "26002": {
    "id": "26002",
    "name": "Spirit of Insanity",
    "picture": "Chaos_Spirit_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "6003": {
    "id": "6003",
    "name": "Black Knight",
    "picture": "Black_Knight_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "16003": {
    "id": "16003",
    "name": "Onyx Knight",
    "picture": "Black_Knight_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "26003": {
    "id": "26003",
    "name": "Obsidian Knight",
    "picture": "Black_Knight_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 5,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "6004": {
    "id": "6004",
    "name": "Branding Construct",
    "picture": "Branding_Metal_Construct_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 9,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 13,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "16004": {
    "id": "16004",
    "name": "Branding Automaton",
    "picture": "Branding_Metal_Construct_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "26004": {
    "id": "26004",
    "name": "Branding Engine",
    "picture": "Branding_Metal_Construct_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "6005": {
    "id": "6005",
    "name": "Gloomkin",
    "picture": "Burning_Golem_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 5,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "16005": {
    "id": "16005",
    "name": "Candle Gloomkin",
    "picture": "Burning_Golem_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 11,
        "skill": [],
      },
    }
  },
  "26005": {
    "id": "26005",
    "name": "Lantern Gloomkin",
    "picture": "Burning_Golem_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
    }
  },
  "6006": {
    "id": "6006",
    "name": "Chaos Golem",
    "picture": "Chaos_Golem_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 8,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "16006": {
    "id": "16006",
    "name": "Discord Golem",
    "picture": "Chaos_Golem_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 13,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "26006": {
    "id": "26006",
    "name": "Anarchy Golem",
    "picture": "Chaos_Golem_C",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 15,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "6007": {
    "id": "6007",
    "name": "Goblin Crew",
    "desc": "\"What they lack in intelligence, they make up for in numbers.\" - Decim, the Firebringer",
    "picture": "Goblin_Gang_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 3,
    "health": 3,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 5,
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "16007": {
    "id": "16007",
    "name": "Goblin Band",
    "picture": "Goblin_Gang_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 4,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 7,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "26007": {
    "id": "26007",
    "name": "Goblin Gang",
    "picture": "Goblin_Gang_C",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 5,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "6008": {
    "id": "6008",
    "name": "Thousand Arm Demon",
    "picture": "Thousand_Arm_Demon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 3,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "flurry",
        "c": 6,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 7,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 4,
        "health": 8,
        "skill": [],
      },
    }
  },
  "16008": {
    "id": "16008",
    "name": "Thousand Arm Fiend",
    "picture": "Thousand_Arm_Demon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 4,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "26008": {
    "id": "26008",
    "name": "Thousand Arm Hellion",
    "picture": "Thousand_Arm_Demon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 5,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "6009": {
    "id": "6009",
    "name": "Siphon Dragon",
    "picture": "Siphon_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "16009": {
    "id": "16009",
    "name": "Devouring Dragon",
    "picture": "Siphon_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 18,
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "26009": {
    "id": "26009",
    "name": "Ravaging Dragon",
    "picture": "Siphon_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 5,
      },
      {
        "id": "poison",
        "x": 5,
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "weaken",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "6010": {
    "id": "6010",
    "name": "Cliffpass Defender",
    "picture": "Mountainpass_Defender_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "16010": {
    "id": "16010",
    "name": "Cliffpass Apostle",
    "picture": "Mountainpass_Defender_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "26010": {
    "id": "26010",
    "name": "Cliffpass Champion",
    "picture": "Mountainpass_Defender_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "6011": {
    "id": "6011",
    "name": "Bomb Spirit",
    "picture": "Bomb_Spirit_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 0,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "16011": {
    "id": "16011",
    "name": "Flashbomb Spirit",
    "picture": "Bomb_Spirit_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 0,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "26011": {
    "id": "26011",
    "name": "Firebomb Spirit",
    "picture": "Bomb_Spirit_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 0,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "6012": {
    "id": "6012",
    "name": "Ember Drake",
    "picture": "Ember_Drake_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 3,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 4,
        "health": 8,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "16012": {
    "id": "16012",
    "name": "Burning Drake",
    "picture": "Ember_Drake_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "26012": {
    "id": "26012",
    "name": "Scorching Drake",
    "picture": "Ember_Drake_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "6013": {
    "id": "6013",
    "name": "Rust Goliath",
    "picture": "Rust_Elemental_Ac",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 5,
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "16013": {
    "id": "16013",
    "name": "Rust Colossus",
    "picture": "Rust_Elemental_Ac",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 6,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "26013": {
    "id": "26013",
    "name": "Rust Titan",
    "picture": "Rust_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 7,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "6014": {
    "id": "6014",
    "name": "Armored Siegefist",
    "picture": "Armored_Ogre_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 6,
    "health": 22,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
    }
  },
  "16014": {
    "id": "16014",
    "name": "Hired Siegefist",
    "picture": "Armored_Ogre_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 7,
    "health": 28,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "health": 32,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "26014": {
    "id": "26014",
    "name": "Mercenary Siegefist",
    "picture": "Armored_Ogre_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 8,
    "health": 33,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [],
      },
      "3": {
        "attack": 9,
        "health": 36,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "6015": {
    "id": "6015",
    "name": "Acidic Sludge",
    "picture": "Acid_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 1,
          },
        ],
      },
    }
  },
  "16015": {
    "id": "16015",
    "name": "Acidic Ooze",
    "picture": "Acid_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
    }
  },
  "26015": {
    "id": "26015",
    "name": "Acid Reaver",
    "picture": "Acid_Elemental_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "6016": {
    "id": "6016",
    "name": "Skeletal Giant",
    "picture": "Skeleton_Giant_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "16016": {
    "id": "16016",
    "name": "Tormented Giant",
    "picture": "Skeleton_Giant_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "26016": {
    "id": "26016",
    "name": "Boneclaw Giant",
    "picture": "Skeleton_Giant_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 7,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
    }
  },
  "6017": {
    "id": "6017",
    "name": "Tar Pit Stalker",
    "picture": "Tar_Elemental_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 1,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "16017": {
    "id": "16017",
    "name": "Tar Pit Shambler",
    "picture": "Tar_Elemental_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "26017": {
    "id": "26017",
    "name": "Tar Pit Swallower",
    "picture": "Tar_Elemental_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "6018": {
    "id": "6018",
    "name": "Underwater Lasher",
    "picture": "Legendary_Chaos_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "16018": {
    "id": "16018",
    "name": "Underwater Wallop",
    "picture": "Legendary_Chaos_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 4,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 3,
        "y": "2",
        "z": 2,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "26018": {
    "id": "26018",
    "name": "Underwater Clobberer",
    "picture": "Legendary_Chaos_Frog_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 5,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "fervor",
        "x": 3,
        "y": "2",
        "z": 2,
      },
      {
        "id": "legion",
        "x": 3,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "5": {
        "health": 25,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "6019": {
    "id": "6019",
    "name": "Canopy Horror",
    "picture": "Canopy_Horror_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "16019": {
    "id": "16019",
    "name": "Canopy Chiller",
    "picture": "Canopy_Horror_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "26019": {
    "id": "26019",
    "name": "Canopy Terror",
    "picture": "Canopy_Horror_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 4,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "6020": {
    "id": "6020",
    "name": "Croak Piercer",
    "picture": "Spike_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 5,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "16020": {
    "id": "16020",
    "name": "Croak Lancer",
    "picture": "Spike_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 6,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "26020": {
    "id": "26020",
    "name": "Croak Impaler",
    "picture": "Spike_Frog_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 7,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
    }
  },
  "6021": {
    "id": "6021",
    "name": "Marsh Ogre",
    "picture": "Marsh_Ogre_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 7,
    "health": 16,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "attack": 8,
        "health": 19,
        "skill": [],
      },
      "5": {
        "health": 20,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "16021": {
    "id": "16021",
    "name": "Mire Ogre",
    "picture": "Marsh_Ogre_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 8,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "26021": {
    "id": "26021",
    "name": "Swamp Ogre",
    "picture": "Marsh_Ogre_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 8,
    "health": 25,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 9,
        "health": 28,
        "skill": [],
      },
      "5": {
        "health": 29,
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "6022": {
    "id": "6022",
    "name": "Illusion Caster",
    "picture": "Hypnofrog_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 1,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "16022": {
    "id": "16022",
    "name": "Delusion Caster",
    "picture": "Hypnofrog_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "26022": {
    "id": "26022",
    "name": "Hypno Caster",
    "picture": "Hypnofrog_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 2,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "6023": {
    "id": "6023",
    "name": "Broodmother",
    "picture": "Broodmother_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "16023": {
    "id": "16023",
    "name": "Fierce Broodmother",
    "picture": "Broodmother_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "26023": {
    "id": "26023",
    "name": "Vicious Broodmother",
    "picture": "Broodmother_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "6024": {
    "id": "6024",
    "name": "Bane Dragon",
    "picture": "Ruination_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "16024": {
    "id": "16024",
    "name": "Blight Dragon",
    "picture": "Ruination_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "26024": {
    "id": "26024",
    "name": "Ruination Dragon",
    "picture": "Ruination_Dragon_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 7,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
    }
  },
  "6025": {
    "id": "6025",
    "name": "Dragon Keeper",
    "picture": "Dragon_Warlord_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 5,
        "health": 10,
        "skill": [],
      },
    }
  },
  "16025": {
    "id": "16025",
    "name": "Dragon Commander",
    "picture": "Dragon_Warlord_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "26025": {
    "id": "26025",
    "name": "Dragon Warlord",
    "picture": "Dragon_Warlord_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 15,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "6026": {
    "id": "6026",
    "name": "Smokefang",
    "picture": "Smoke_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "16026": {
    "id": "16026",
    "name": "Sootfang",
    "picture": "Smoke_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "26026": {
    "id": "26026",
    "name": "Crimsonfang",
    "picture": "Smoke_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 7,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "6027": {
    "id": "6027",
    "name": "Frigela, the Dread",
    "picture": "Ice_Witch_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "16027": {
    "id": "16027",
    "name": "Frigela, the Terror",
    "picture": "Ice_Witch_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "health": 16,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "26027": {
    "id": "26027",
    "name": "Frigela, the Absolute",
    "picture": "Ice_Witch_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
    }
  },
  "6028": {
    "id": "6028",
    "name": "Brahmet",
    "picture": "Multi_Armed_Beast_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "16028": {
    "id": "16028",
    "name": "Great Brahmet",
    "picture": "Multi_Armed_Beast_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "26028": {
    "id": "26028",
    "name": "Vast Brahmet",
    "picture": "Multi_Armed_Beast_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 7,
    "health": 24,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "skill": [],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "6029": {
    "id": "6029",
    "name": "Spinehead Stalker",
    "picture": "Spinehead_Undead_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "z": 7,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "16029": {
    "id": "16029",
    "name": "Spinehead Trapper",
    "picture": "Spinehead_Undead_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "26029": {
    "id": "26029",
    "name": "Spinehead Huntress",
    "picture": "Spinehead_Undead_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "7",
        "z": 7,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "6030": {
    "id": "6030",
    "name": "Noveria Yeti",
    "picture": "Ice_Yeti_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "16030": {
    "id": "16030",
    "name": "Noveria Hulk",
    "picture": "Ice_Yeti_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 25,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 28,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "26030": {
    "id": "26030",
    "name": "Noveria Abomination",
    "picture": "Ice_Yeti_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 29,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 31,
        "skill": [],
      },
      "4": {
        "health": 32,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "6": {
        "health": 33,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
    }
  },
  "6031": {
    "id": "6031",
    "name": "Iceblood Assassin",
    "picture": "Snow_Assassin_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "16031": {
    "id": "16031",
    "name": "Iceblood Cutthroat",
    "picture": "Snow_Assassin_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 11,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "26031": {
    "id": "26031",
    "name": "Iceblood Rogue",
    "picture": "Snow_Assassin_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 7,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "6032": {
    "id": "6032",
    "name": "Mumohotep",
    "picture": "Giant_Mummy_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "16032": {
    "id": "16032",
    "name": "Lord Mumohotep",
    "picture": "Giant_Mummy_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 6,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 23,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 7,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "26032": {
    "id": "26032",
    "name": "King Mumohotep",
    "picture": "Giant_Mummy_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 24,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "enfeeble",
        "x": 7,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 7,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 8,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "6033": {
    "id": "6033",
    "name": "Firebeard",
    "picture": "Lost_Captain_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
      "6": {
        "health": 14,
        "skill": [],
      },
    }
  },
  "16033": {
    "id": "16033",
    "name": "Pirate Firebeard",
    "picture": "Lost_Captain_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "health": 17,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "26033": {
    "id": "26033",
    "name": "Captain Firebeard",
    "picture": "Lost_Captain_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 4,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "6034": {
    "id": "6034",
    "name": "Bone Viper",
    "picture": "Snake_Skeleton_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "poison",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 8,
        "skill": [],
      },
      "5": {
        "attack": 3,
        "skill": [
          {
            "id": "pierce",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "16034": {
    "id": "16034",
    "name": "Grave Rattle Viper",
    "picture": "Snake_Skeleton_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "health": 11,
        "skill": [],
      },
    }
  },
  "26034": {
    "id": "26034",
    "name": "Death Rattle Viper",
    "picture": "Snake_Skeleton_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "6035": {
    "id": "6035",
    "name": "Demos",
    "picture": "Devil_Vanguard_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "16035": {
    "id": "16035",
    "name": "Demos, Vanguard",
    "picture": "Devil_Vanguard_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 3,
        "y": "2",
        "z": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "26035": {
    "id": "26035",
    "name": "Demos, Wrathhammer",
    "picture": "Devil_Vanguard_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 22,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 3,
        "y": "2",
        "z": 2,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 4,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "6036": {
    "id": "6036",
    "name": "Cursed Ogre",
    "picture": "Void_Ogre_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 19,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "16036": {
    "id": "16036",
    "name": "Plaguecursed Ogre",
    "picture": "Void_Ogre_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 23,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "26036": {
    "id": "26036",
    "name": "Deathcursed Ogre",
    "picture": "Void_Ogre_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 29,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 3,
        "all": "1",
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 32,
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
    }
  },
  "6037": {
    "id": "6037",
    "name": "Keeper of Souls",
    "picture": "Keeper_Of_The_Dead_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 4,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 23,
        "skill": [],
      },
      "4": {
        "health": 24,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 25,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "16037": {
    "id": "16037",
    "name": "Keeper of the Lost",
    "picture": "Keeper_Of_The_Dead_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 6,
    "health": 26,
    "cost": 4,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "poison",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 28,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 29,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "health": 30,
        "skill": [],
      },
      "6": {
        "health": 31,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "26037": {
    "id": "26037",
    "name": "Keeper of the Dead",
    "picture": "Keeper_Of_The_Dead_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 7,
    "health": 31,
    "cost": 4,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
        "all": "1",
      },
      {
        "id": "poison",
        "x": 6,
      },
      {
        "id": "leech",
        "x": 6,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 8,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 7,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "4": {
        "attack": 9,
        "health": 33,
        "skill": [],
      },
      "5": {
        "health": 34,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 7,
          },
          {
            "id": "leech",
            "x": 7,
          },
        ],
      },
      "6": {
        "health": 35,
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 7,
          },
          {
            "id": "leech",
            "x": 7,
          },
        ],
      },
    }
  },
  "6038": {
    "id": "6038",
    "name": "Hemlock",
    "picture": "Fat_Belly_Angel_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 1,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
      "4": {
        "attack": 2,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
    }
  },
  "16038": {
    "id": "16038",
    "name": "Hemlock Striker",
    "picture": "Fat_Belly_Angel_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 2,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "26038": {
    "id": "26038",
    "name": "Hemlock Fade",
    "picture": "Fat_Belly_Angel_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 3,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "6039": {
    "id": "6039",
    "name": "Auroch",
    "picture": "Flying_Behemoth_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 4,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "berserk",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "16039": {
    "id": "16039",
    "name": "Auroch the Infernal",
    "picture": "Flying_Behemoth_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 5,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "berserk",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "health": 24,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "berserk",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "26039": {
    "id": "26039",
    "name": "Auroch the Wicked",
    "picture": "Flying_Behemoth_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 6,
    "health": 25,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "6040": {
    "id": "6040",
    "name": "Scorching Cutlass",
    "picture": "Fire_Sword_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "16040": {
    "id": "16040",
    "name": "Blazing Cutlass",
    "picture": "Fire_Sword_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 5,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "26040": {
    "id": "26040",
    "name": "Devouring Cutlass",
    "picture": "Fire_Sword_Angel_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 6,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "6041": {
    "id": "6041",
    "name": "Reaper",
    "picture": "Angel_Of_Death_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 7,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "5": {
        "attack": 8,
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "16041": {
    "id": "16041",
    "name": "Grim Reaper",
    "picture": "Angel_Of_Death_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 8,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 9,
        "skill": [],
      },
      "6": {
        "health": 22,
        "skill": [
          {
            "id": "weaken",
            "x": 5,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "26041": {
    "id": "26041",
    "name": "Death Reaper",
    "picture": "Angel_Of_Death_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 9,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 5,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "attack": 10,
        "health": 24,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 6,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 7,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "weaken",
            "x": 6,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 8,
          },
        ],
      },
    }
  },
  "6042": {
    "id": "6042",
    "name": "Shadow of Thunder",
    "picture": "Storm_Shadow_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 0,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 1,
        "health": 22,
        "skill": [],
      },
      "4": {
        "health": 23,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "16042": {
    "id": "16042",
    "name": "Shadow of Lightning",
    "picture": "Storm_Shadow_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 1,
    "health": 25,
    "cost": 4,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 2,
        "health": 28,
        "skill": [],
      },
      "4": {
        "health": 29,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 30,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "26042": {
    "id": "26042",
    "name": "Shadow of Storms",
    "picture": "Storm_Shadow_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 31,
    "cost": 4,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 32,
        "skill": [],
      },
      "3": {
        "health": 33,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 34,
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 36,
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "6043": {
    "id": "6043",
    "name": "Sandstorm",
    "picture": "Sandstorm_Elemental_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 5,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "16043": {
    "id": "16043",
    "name": "Sandsurge",
    "picture": "Sandstorm_Elemental_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 6,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "26043": {
    "id": "26043",
    "name": "Sandsunder",
    "picture": "Sandstorm_Elemental_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 7,
    "health": 25,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "skill": [],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "6044": {
    "id": "6044",
    "name": "Firewalker",
    "picture": "Fire_Walker_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 3,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "16044": {
    "id": "16044",
    "name": "Firetreader",
    "picture": "Fire_Walker_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "26044": {
    "id": "26044",
    "name": "Firestomper",
    "picture": "Fire_Walker_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 4,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 3,
        "y": "2",
        "z": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "2",
            "z": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "6045": {
    "id": "6045",
    "name": "Darkflame",
    "picture": "Dark_Fire_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "16045": {
    "id": "16045",
    "name": "Duskflame",
    "picture": "Dark_Fire_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "26045": {
    "id": "26045",
    "name": "Shadowflame",
    "picture": "Dark_Fire_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 6,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "6046": {
    "id": "6046",
    "name": "Celerity",
    "desc": "\"It means to be very fast, look it up!\" - Defensive Researcher",
    "picture": "Swiftness_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 1,
    "health": 4,
    "cost": 0,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "16046": {
    "id": "16046",
    "name": "Celerity Force",
    "picture": "Swiftness_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 5,
    "cost": 0,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "4": {
        "health": 7,
        "skill": [],
      },
      "5": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "26046": {
    "id": "26046",
    "name": "Celerity Burst",
    "picture": "Swiftness_Elemental_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 7,
    "cost": 0,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "6047": {
    "id": "6047",
    "name": "Wither",
    "picture": "Death_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "6": {
        "health": 15,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "16047": {
    "id": "16047",
    "name": "Withering Touch",
    "picture": "Death_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 4,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "26047": {
    "id": "26047",
    "name": "Withering Grip",
    "picture": "Death_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 5,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "6048": {
    "id": "6048",
    "name": "Bulwraag",
    "picture": "Dino_Frog_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 3,
    "health": 28,
    "cost": 4,
    "skill": [
      {
        "id": "legion",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "legion",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 31,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "health": 32,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "16048": {
    "id": "16048",
    "name": "Bulwraag Angered",
    "picture": "Dino_Frog_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 4,
    "health": 33,
    "cost": 4,
    "skill": [
      {
        "id": "legion",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [
          {
            "id": "legion",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "health": 36,
        "skill": [
          {
            "id": "legion",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "attack": 5,
        "health": 37,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "26048": {
    "id": "26048",
    "name": "Bulwraag the Hungry",
    "picture": "Dino_Frog_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 5,
    "health": 38,
    "cost": 4,
    "skill": [
      {
        "id": "legion",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 39,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 40,
        "skill": [],
      },
      "4": {
        "health": 41,
        "skill": [],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "legion",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "6049": {
    "id": "6049",
    "name": "Goblin Explosioneer",
    "picture": "Goblin_Explosioneer_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "health": 14,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "16049": {
    "id": "16049",
    "name": "Crazed Explosioneer",
    "picture": "Goblin_Explosioneer_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 4,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "26049": {
    "id": "26049",
    "name": "Unhinged Explosioneer",
    "picture": "Goblin_Explosioneer_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 5,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "6050": {
    "id": "6050",
    "name": "Wortwog",
    "picture": "Frog_Executioner_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 3,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "16050": {
    "id": "16050",
    "name": "Wortwog Grinder",
    "picture": "Frog_Executioner_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 4,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "26050": {
    "id": "26050",
    "name": "Wortwog Torturer",
    "picture": "Frog_Executioner_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 6,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "6051": {
    "id": "6051",
    "name": "Treeblade Thief",
    "desc": "\"In the shade or in the glade, there is always a blade.\" - Treeblade Saying",
    "picture": "Camouflaged_Assassin_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 4,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 8,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 7,
          },
        ],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 7,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "16051": {
    "id": "16051",
    "name": "Treeblade Rogue",
    "picture": "Camouflaged_Assassin_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 5,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 11,
        "skill": [],
      },
    }
  },
  "26051": {
    "id": "26051",
    "name": "Treeblade Assassin",
    "picture": "Camouflaged_Assassin_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 6,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 14,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "6052": {
    "id": "6052",
    "name": "Fuming Beast",
    "picture": "Fuming_Horror_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 3,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 10,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "16052": {
    "id": "16052",
    "name": "Fuming Ghoul",
    "picture": "Fuming_Horror_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 4,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "26052": {
    "id": "26052",
    "name": "Fuming Horror",
    "picture": "Fuming_Horror_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 5,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
    }
  },
  "6053": {
    "id": "6053",
    "name": "Squire Gorger",
    "picture": "Avian_Devourer_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 3,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
    }
  },
  "16053": {
    "id": "16053",
    "name": "Guard Gorger",
    "picture": "Avian_Devourer_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 4,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 5,
      },
      {
        "id": "berserk",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 6,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 6,
          },
          {
            "id": "berserk",
            "x": 4,
          },
        ],
      },
    }
  },
  "26053": {
    "id": "26053",
    "name": "Knight Gorger",
    "picture": "Avian_Devourer_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 5,
    "health": 28,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 6,
      },
      {
        "id": "berserk",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 30,
        "skill": [],
      },
      "4": {
        "health": 31,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 6,
          },
          {
            "id": "berserk",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 7,
          },
          {
            "id": "berserk",
            "x": 5,
          },
        ],
      },
    }
  },
  "6054": {
    "id": "6054",
    "name": "Shadowcrafter",
    "desc": "\"Never trust a magpie.\" - Kor'ladesh, Minos Poisonmancer",
    "picture": "Magpie_Rogue_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 4,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "attack": 5,
        "health": 10,
        "skill": [],
      },
    }
  },
  "16054": {
    "id": "16054",
    "name": "Shadowslicer",
    "picture": "Magpie_Rogue_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 5,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "26054": {
    "id": "26054",
    "name": "Shadowdagger",
    "picture": "Magpie_Rogue_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 6,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "6055": {
    "id": "6055",
    "name": "Phoenix",
    "desc": "Born once in a thousand years, the Phoenix can never truely die.",
    "picture": "Pheonix_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 3,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "16055": {
    "id": "16055",
    "name": "Phoenix Departed",
    "picture": "Pheonix_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "26055": {
    "id": "26055",
    "name": "Phoenix Reborn",
    "picture": "Pheonix_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 5,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "6056": {
    "id": "6056",
    "name": "Potoo",
    "picture": "Potoo_Hypnotist_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 3,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "16056": {
    "id": "16056",
    "name": "Potoo Hypnotist",
    "picture": "Potoo_Hypnotist_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "26056": {
    "id": "26056",
    "name": "Potoo Mindwarper",
    "picture": "Potoo_Hypnotist_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "10",
    "attack": 4,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 5,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "6057": {
    "id": "6057",
    "name": "Beammite",
    "picture": "Laser_Insect_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 3,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 1,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 4,
        "skill": [
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "16057": {
    "id": "16057",
    "name": "Beambug",
    "picture": "Laser_Insect_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 4,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "26057": {
    "id": "26057",
    "name": "Beambeetle",
    "picture": "Laser_Insect_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 5,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 4,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 23,
        "skill": [
          {
            "id": "burn",
            "x": 5,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
    }
  },
  "6058": {
    "id": "6058",
    "name": "Tarragon Cuttail",
    "picture": "Scythe_Tail_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "16058": {
    "id": "16058",
    "name": "Tarragon Carvetail",
    "picture": "Scythe_Tail_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 20,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "26058": {
    "id": "26058",
    "name": "Tarragon Cleavetail",
    "picture": "Scythe_Tail_Dragon_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 21,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 3,
        "y": "9",
        "z": 9,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
    }
  },
  "6059": {
    "id": "6059",
    "name": "Violetfire Igniter",
    "picture": "Purple_Fire_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "6": {
        "health": 21,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
    }
  },
  "16059": {
    "id": "16059",
    "name": "Violetfire Erupter",
    "picture": "Purple_Fire_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 25,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "26059": {
    "id": "26059",
    "name": "Violetfire Besieger",
    "picture": "Purple_Fire_Dragon_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 7,
    "health": 27,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "health": 29,
        "skill": [],
      },
      "4": {
        "health": 30,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
    }
  },
  "6060": {
    "id": "6060",
    "name": "Pudgytusk",
    "picture": "Spear_Face_Pug_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 2,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "16060": {
    "id": "16060",
    "name": "Slobbering Pudgytusk",
    "picture": "Spear_Face_Pug_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 3,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "26060": {
    "id": "26060",
    "name": "Incensed Pudgytusk",
    "picture": "Spear_Face_Pug_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 5,
          },
        ],
      },
    }
  },
  "6061": {
    "id": "6061",
    "name": "Decagon",
    "picture": "Centipede_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 15,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "16061": {
    "id": "16061",
    "name": "Centigon",
    "picture": "Centipede_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "26061": {
    "id": "26061",
    "name": "Milligon",
    "picture": "Centipede_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 8,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "6062": {
    "id": "6062",
    "name": "Abzu",
    "picture": "Ship_Destroyer_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 14,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "16062": {
    "id": "16062",
    "name": "Abzu, the Wavebane",
    "picture": "Ship_Destroyer_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "26062": {
    "id": "26062",
    "name": "Abzu, the Seabane",
    "picture": "Ship_Destroyer_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 8,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 9,
        "health": 22,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "6063": {
    "id": "6063",
    "name": "Firetail Dragon",
    "desc": "\"Often found roaming the great plains of Nuramatha, it is hypothesized that they are the reason for the lack of forests in the area.\" - Researcher's Notes",
    "picture": "Fire_Tip_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "16063": {
    "id": "16063",
    "name": "Flametail Dragon",
    "picture": "Fire_Tip_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "26063": {
    "id": "26063",
    "name": "Blazetail Dragon",
    "picture": "Fire_Tip_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "6064": {
    "id": "6064",
    "name": "Dreaded Shock",
    "picture": "Fat_Fist_Brute_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 5,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "13",
        "z": 13,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "13",
            "z": 13,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "13",
            "z": 13,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [],
      },
      "6": {
        "health": 23,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "13",
            "z": 13,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "16064": {
    "id": "16064",
    "name": "Dreaded Tremor",
    "picture": "Fat_Fist_Brute_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 5,
    "health": 24,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "fervor",
        "x": 3,
        "y": "13",
        "z": 13,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "13",
            "z": 13,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "13",
            "z": 13,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "13",
            "z": 13,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
    }
  },
  "26064": {
    "id": "26064",
    "name": "Dreaded Quake",
    "picture": "Fat_Fist_Brute_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 6,
    "health": 28,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "fervor",
        "x": 4,
        "y": "13",
        "z": 13,
      },
      {
        "id": "berserk",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 29,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "13",
            "z": 13,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 32,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 5,
            "y": "13",
            "z": 13,
          },
          {
            "id": "berserk",
            "x": 4,
          },
        ],
      },
    }
  },
  "6065": {
    "id": "6065",
    "name": "Torchsnout",
    "picture": "Fire_Face_Bug_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 1,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 10,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
    }
  },
  "16065": {
    "id": "16065",
    "name": "Flameface",
    "picture": "Fire_Face_Bug_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 1,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "26065": {
    "id": "26065",
    "name": "Infernose",
    "picture": "Fire_Face_Bug_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 2,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "6066": {
    "id": "6066",
    "name": "Psychic Beetle",
    "picture": "Telekinetic_Bug_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "16066": {
    "id": "16066",
    "name": "Psycho Beetle",
    "picture": "Telekinetic_Bug_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 5,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "26066": {
    "id": "26066",
    "name": "Psychosis Beetle",
    "picture": "Telekinetic_Bug_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 5,
    "health": 21,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "6067": {
    "id": "6067",
    "name": "Gurgitater",
    "picture": "Legendary_Acid_Spitter_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 3,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "13",
        "z": 13,
      },
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 4,
        "health": 17,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "16067": {
    "id": "16067",
    "name": "Gurgitater Grub",
    "picture": "Legendary_Acid_Spitter_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 4,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "13",
        "z": 13,
      },
      {
        "id": "poison",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "health": 21,
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "26067": {
    "id": "26067",
    "name": "Gurgitater Grublord",
    "picture": "Legendary_Acid_Spitter_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 5,
    "health": 21,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "13",
        "z": 13,
      },
      {
        "id": "poison",
        "x": 5,
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 23,
        "skill": [],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "13",
            "z": 13,
          },
          {
            "id": "poison",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "6068": {
    "id": "6068",
    "name": "Night Larva",
    "picture": "Face_Eatter_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 4,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "health": 20,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 21,
        "skill": [],
      },
    }
  },
  "16068": {
    "id": "16068",
    "name": "Cradle Larva",
    "picture": "Face_Eatter_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 4,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "health": 26,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 5,
        "health": 27,
        "skill": [],
      },
    }
  },
  "26068": {
    "id": "26068",
    "name": "Swaddler Larva",
    "picture": "Face_Eatter_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 5,
    "health": 28,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "berserk",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 31,
        "skill": [],
      },
      "5": {
        "health": 32,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 33,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 4,
          },
        ],
      },
    }
  },
  "6069": {
    "id": "6069",
    "name": "Arachnolite",
    "picture": "Protective_Spider_Hybrid_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 5,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 14,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "16069": {
    "id": "16069",
    "name": "Arachnoss",
    "picture": "Protective_Spider_Hybrid_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 6,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "26069": {
    "id": "26069",
    "name": "Arachnolos",
    "picture": "Protective_Spider_Hybrid_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "13",
    "attack": 7,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 8,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 20,
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "6070": {
    "id": "6070",
    "name": "Petrifier",
    "picture": "Claw_Hand_Demon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 4,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 5,
        "health": 9,
        "skill": [],
      },
      "5": {
        "health": 10,
        "skill": [],
      },
    }
  },
  "16070": {
    "id": "16070",
    "name": "Graceful Petrifier",
    "picture": "Claw_Hand_Demon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 6,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "26070": {
    "id": "26070",
    "name": "Enraged Petrifier",
    "picture": "Claw_Hand_Demon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 7,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "pierce",
        "x": 5,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "6071": {
    "id": "6071",
    "name": "Masked Heraid",
    "picture": "Masked_Seductress_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "health": 16,
        "skill": [],
      },
    }
  },
  "16071": {
    "id": "16071",
    "name": "Veiled Heraid",
    "picture": "Masked_Seductress_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 5,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "health": 20,
        "skill": [],
      },
    }
  },
  "26071": {
    "id": "26071",
    "name": "Revealed Heraid",
    "picture": "Masked_Seductress_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 6,
    "health": 21,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "6072": {
    "id": "6072",
    "name": "Bone Wielder",
    "picture": "Boomerang_Goblin_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 2,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 7,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 7,
          },
        ],
      },
      "5": {
        "health": 8,
        "skill": [],
      },
    }
  },
  "16072": {
    "id": "16072",
    "name": "Bone Thrower",
    "picture": "Boomerang_Goblin_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 2,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "berserk",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 11,
        "skill": [],
      },
    }
  },
  "26072": {
    "id": "26072",
    "name": "Bone Specialist",
    "picture": "Boomerang_Goblin_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "11",
    "attack": 3,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "berserk",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "berserk",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "6073": {
    "id": "6073",
    "name": "Obsidian",
    "picture": "Legendary_Midnight_Demon_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 7,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 3,
      },
      {
        "id": "berserk",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "health": 24,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
    }
  },
  "16073": {
    "id": "16073",
    "name": "Obsidian Awakened",
    "picture": "Legendary_Midnight_Demon_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 8,
    "health": 25,
    "cost": 3,
    "skill": [
      {
        "id": "nullify",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 4,
      },
      {
        "id": "berserk",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 5,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 6,
          },
          {
            "id": "berserk",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
      "5": {
        "attack": 9,
        "health": 29,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "nullify",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 6,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
    }
  },
  "26073": {
    "id": "26073",
    "name": "Obsidian, Death's Wing",
    "picture": "Legendary_Midnight_Demon_Angel_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 9,
    "health": 30,
    "cost": 3,
    "skill": [
      {
        "id": "nullify",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 6,
      },
      {
        "id": "berserk",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "nullify",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 7,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 10,
        "skill": [],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
      "5": {
        "health": 34,
        "skill": [
          {
            "id": "nullify",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 7,
          },
          {
            "id": "berserk",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "nullify",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 8,
          },
          {
            "id": "berserk",
            "x": 4,
          },
        ],
      },
    }
  },
  "6074": {
    "id": "6074",
    "name": "Deific Channeler",
    "picture": "Uncanny_Valley_Woman_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 2,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "6",
        "z": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "16074": {
    "id": "16074",
    "name": "Divinity Channeler",
    "picture": "Uncanny_Valley_Woman_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 3,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "26074": {
    "id": "26074",
    "name": "Celestial Channeler",
    "picture": "Uncanny_Valley_Woman_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 4,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "6075": {
    "id": "6075",
    "name": "Consuming Mireling",
    "picture": "Mud_Slinger_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 5,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "16075": {
    "id": "16075",
    "name": "Engrossing Mireling",
    "picture": "Mud_Slinger_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 6,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "26075": {
    "id": "26075",
    "name": "Heaving Mire",
    "picture": "Mud_Slinger_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 6,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "poison",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 5,
          },
        ],
      },
    }
  },
  "6079": {
    "id": "6079",
    "name": "Heinous Smoggler",
    "picture": "Volcanic_Ash_Elemental_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "health": 16,
        "skill": [],
      },
      "6": {
        "health": 17,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "16079": {
    "id": "16079",
    "name": "Nefarious Smoggler",
    "picture": "Volcanic_Ash_Elemental_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 4,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 20,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "26079": {
    "id": "26079",
    "name": "Erupting Smoggler",
    "picture": "Volcanic_Ash_Elemental_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 4,
    "health": 21,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 5,
          },
        ],
      },
    }
  },
  "7000": {
    "id": "7000",
    "name": "Treant King",
    "picture": "Treant_King_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 7,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "health": 21,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 4,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "17000": {
    "id": "17000",
    "name": "Treant Edict",
    "picture": "Treant_King_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "health": 26,
        "skill": [],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "27000": {
    "id": "27000",
    "name": "Treant Dictate",
    "picture": "Treant_King_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 26,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 3,
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "health": 29,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "7001": {
    "id": "7001",
    "name": "Hekaton",
    "picture": "Colossal_Beast_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "17001": {
    "id": "17001",
    "name": "Hekaton, Son of Earth",
    "picture": "Colossal_Beast_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "27001": {
    "id": "27001",
    "name": "Hekaton, Sky Scraper",
    "picture": "Colossal_Beast_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 7,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "rally",
        "x": 5,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "7002": {
    "id": "7002",
    "name": "Cerberus",
    "picture": "Cerberus_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "17002": {
    "id": "17002",
    "name": "Cerberus, the Sentry",
    "picture": "Cerberus_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 7,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "27002": {
    "id": "27002",
    "name": "Cerberus, the Gate",
    "picture": "Cerberus_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 8,
    "health": 29,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 7,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 7,
          },
        ],
      },
    }
  },
  "7003": {
    "id": "7003",
    "name": "Kraken",
    "picture": "Kraken_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 4,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "17003": {
    "id": "17003",
    "name": "Kraken of Depths",
    "picture": "Kraken_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 6,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 4,
        "y": "3",
        "z": 3,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "health": 25,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "27003": {
    "id": "27003",
    "name": "Kraken of Fears",
    "picture": "Kraken_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 6,
    "health": 26,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 5,
        "y": "3",
        "z": 3,
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 6,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "7004": {
    "id": "7004",
    "name": "Ice Golem",
    "picture": "Ice_Golem_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "17004": {
    "id": "17004",
    "name": "Frost Golem",
    "picture": "Ice_Golem_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "27004": {
    "id": "27004",
    "name": "Coldbite Golem",
    "picture": "Ice_Golem_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 8,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "3",
        "z": 3,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "7005": {
    "id": "7005",
    "name": "Tsunamari",
    "picture": "Water_Manipulator_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "17005": {
    "id": "17005",
    "name": "Mentor Tsunamari",
    "picture": "Water_Manipulator_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 3,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "27005": {
    "id": "27005",
    "name": "Sage Tsunamari",
    "picture": "Water_Manipulator_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 4,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "7006": {
    "id": "7006",
    "name": "Treant Sapling",
    "desc": "One touch can pull the life force right out of you.",
    "picture": "Treant_Sapling_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "17006": {
    "id": "17006",
    "name": "Treepalm Sapling",
    "picture": "Treant_Sapling_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "27006": {
    "id": "27006",
    "name": "Treefist Sapling",
    "picture": "Treant_Sapling_C",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "7007": {
    "id": "7007",
    "name": "Water Serpent",
    "desc": "\"He looks so happy!\" \"Of course he does. He just found lunch!\" - Boloros Sailors",
    "picture": "Water_Serpent_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 1,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 7,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "17007": {
    "id": "17007",
    "name": "Lake Serpent",
    "picture": "Water_Serpent_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
    }
  },
  "27007": {
    "id": "27007",
    "name": "Sea Serpent",
    "picture": "Water_Serpent_C",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 2,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "7008": {
    "id": "7008",
    "name": "Rock Dragon",
    "picture": "Rock_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 5,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "17008": {
    "id": "17008",
    "name": "Bedrock Dragon",
    "picture": "Rock_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "27008": {
    "id": "27008",
    "name": "Mountain Dragon",
    "picture": "Rock_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 5,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 25,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "6": {
        "health": 26,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "7009": {
    "id": "7009",
    "name": "Rhino Beast",
    "picture": "Rhino_Beast_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 9,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "17009": {
    "id": "17009",
    "name": "Rhino Brute",
    "picture": "Rhino_Beast_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "27009": {
    "id": "27009",
    "name": "Rhino Savage",
    "picture": "Rhino_Beast_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
    }
  },
  "7010": {
    "id": "7010",
    "name": "Honeycomb Dragon",
    "picture": "Honeycomb_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "17010": {
    "id": "17010",
    "name": "Toxichive Dragon",
    "picture": "Honeycomb_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "9",
        "z": 9,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "27010": {
    "id": "27010",
    "name": "Deadlyhive Dragon",
    "picture": "Honeycomb_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 5,
        "y": "9",
        "z": 9,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "7011": {
    "id": "7011",
    "name": "Wolf Girl",
    "picture": "Wolf_Girl_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "17011": {
    "id": "17011",
    "name": "Wolf Matriarch",
    "picture": "Wolf_Girl_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "27011": {
    "id": "27011",
    "name": "Wolf Queen",
    "picture": "Wolf_Girl_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "7012": {
    "id": "7012",
    "name": "Life Drake",
    "picture": "Life_Drake_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 2,
    "health": 9,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "health": 11,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "17012": {
    "id": "17012",
    "name": "LifeLink Drake",
    "picture": "Life_Drake_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "27012": {
    "id": "27012",
    "name": "LifeBlood Drake",
    "picture": "Life_Drake_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 5,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 4,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "7013": {
    "id": "7013",
    "name": "Gold Elemental",
    "picture": "Gold_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
    }
  },
  "17013": {
    "id": "17013",
    "name": "Gold Incarnate",
    "picture": "Gold_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 3,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "armored",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 3,
          },
        ],
      },
    }
  },
  "27013": {
    "id": "27013",
    "name": "Avatar of Gold",
    "picture": "Gold_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 3,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "armored",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 4,
          },
        ],
      },
    }
  },
  "7014": {
    "id": "7014",
    "name": "Genbu",
    "picture": "Turtle_Island_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 5,
    "health": 18,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "evade",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 1,
          },
        ],
      },
    }
  },
  "17014": {
    "id": "17014",
    "name": "Genbu, the Garrison",
    "picture": "Turtle_Island_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 7,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "evade",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "health": 27,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 2,
          },
        ],
      },
    }
  },
  "27014": {
    "id": "27014",
    "name": "Genbu, the Stronghold",
    "picture": "Turtle_Island_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "12",
    "attack": 8,
    "health": 28,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "evade",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "attack": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 3,
          },
        ],
      },
    }
  },
  "7015": {
    "id": "7015",
    "name": "Bog Aberration",
    "picture": "Swamp_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 3,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
    }
  },
  "17015": {
    "id": "17015",
    "name": "Marsh Aberration",
    "picture": "Swamp_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 4,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
    }
  },
  "27015": {
    "id": "27015",
    "name": "Swamp Aberration",
    "picture": "Swamp_Elemental_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 4,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "enfeeble",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
        ],
      },
    }
  },
  "7016": {
    "id": "7016",
    "name": "Webfist Shaman",
    "picture": "Frog_Shaman_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 2,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "4",
        "z": 4,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "17016": {
    "id": "17016",
    "name": "Glowfist Shaman",
    "picture": "Frog_Shaman_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "4",
        "z": 4,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "27016": {
    "id": "27016",
    "name": "Pondfist Shaman",
    "picture": "Frog_Shaman_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
    "health": 16,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 5,
        "y": "4",
        "z": 4,
      },
      {
        "id": "pierce",
        "x": 5,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 7,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 7,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "7017": {
    "id": "7017",
    "name": "Coral Elemental",
    "picture": "Coral_Elemental_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
    }
  },
  "17017": {
    "id": "17017",
    "name": "Coral Ambusher",
    "picture": "Coral_Elemental_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "27017": {
    "id": "27017",
    "name": "Coral Lurker",
    "picture": "Coral_Elemental_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "7018": {
    "id": "7018",
    "name": "Frog Emperor",
    "picture": "Emperor_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "17018": {
    "id": "17018",
    "name": "Grand Frog Emperor",
    "picture": "Emperor_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 5,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 3,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "27018": {
    "id": "27018",
    "name": "Supreme Frog Emperor",
    "picture": "Emperor_Frog_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 6,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 4,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 5,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 5,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "7019": {
    "id": "7019",
    "name": "Lady of the Swamp",
    "picture": "Lady_of_the_Swamp_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "17019": {
    "id": "17019",
    "name": "Duchess of the Swamp",
    "picture": "Lady_of_the_Swamp_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "27019": {
    "id": "27019",
    "name": "Queen of the Swamp",
    "picture": "Lady_of_the_Swamp_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 5,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 6,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "7020": {
    "id": "7020",
    "name": "Trapper Frog",
    "picture": "Huntress_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "4",
        "z": 4,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "17020": {
    "id": "17020",
    "name": "Stalker Frog",
    "picture": "Huntress_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 5,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "27020": {
    "id": "27020",
    "name": "Huntress Frog",
    "picture": "Huntress_Frog_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 6,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "7021": {
    "id": "7021",
    "name": "Shadow Elemental",
    "type": "3",