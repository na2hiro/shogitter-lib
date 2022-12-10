import {RuleGenreCollection, db, ObjectId} from "./mongoCompat";

const coll = db.getCollection("rulegenre") as RuleGenreCollection;
export default coll;

/** rulegenre indexes **/
db.getCollection("rulegenre").ensureIndex({
    "_id": 1
},[

]);

/** rulegenre records **/
db.getCollection("rulegenre").insert({
    "_id": ObjectId("4e5d0a0d6502f38ef8bffc20"),
    "id": 0,
    "name": "本将棋",
    "rules": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
    ],
    "refRule": [
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000000")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000001")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000002")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000003")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000004")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000005")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000006")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000007")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000008")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000009")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900000a")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900000b")
        }
    ]
});
db.getCollection("rulegenre").insert({
    "_id": ObjectId("4e5d0a0d6502f38ef8bffc21"),
    "id": 1,
    "name": "古将棋",
    "rules": [
        12,
        13,
        14,
        15,
        16,
        43,
        48,
        49,
        50,
        59,
        60,
        61,
        63,
        64
    ],
    "refRule": [
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900000c")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900000d")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900000e")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900000f")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000010")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900002b")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000030")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000031")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000032")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900003b")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900003c")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900003d")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900003f")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000040")
        }
    ]
});
db.getCollection("rulegenre").insert({
    "_id": ObjectId("4e5d0a0d6502f38ef8bffc25"),
    "id": 5,
    "name": "持ち駒手番系変則",
    "refRule": [
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000018")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000023")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000035")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000036")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000039")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000019")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900004b")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900005d")
        }
    ],
    "rules": [
        24,
        35,
        53,
        54,
        57,
        25,
        66,
        75,
        93
    ]
});
db.getCollection("rulegenre").insert({
    "_id": ObjectId("4e5d0a0d6502f38ef8bffc27"),
    "id": 7,
    "name": "世界の将棋",
    "rules": [
        76,
        99,
        100,
        101,
        102
    ],
    "refRule": [
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900004c")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000063")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000064")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000065")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000066")
        }
    ]
});
db.getCollection("rulegenre").insert({
    "_id": ObjectId("4e5d0a0d6502f38ef8bffc26"),
    "id": 6,
    "name": "初形変則",
    "refRule": [
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000011")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000027")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000013")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900001b")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000020")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900002c")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900002d")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900002e")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900002f")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000033")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000034")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000041")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900004f")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900005a")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900005b")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900005c")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000060")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000061")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000062")
        }
    ],
    "rules": [
        17,
        39,
        19,
        27,
        32,
        44,
        45,
        46,
        47,
        51,
        52,
        65,
        79,
        90,
        91,
        92,
        96,
        97,
        98,
        103,
        104,
        109,
        110
    ]
});
db.getCollection("rulegenre").insert({
    "_id": ObjectId("4e5d0a0d6502f38ef8bffc28"),
    "id": 8,
    "name": "将棋以外",
    "refRule": [
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000050")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000051")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000052")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000053")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000054")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000055")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000059")
        }
    ],
    "rules": [
        39,
        80,
        81,
        82,
        83,
        84,
        85,
        89,
        105
    ]
});
db.getCollection("rulegenre").insert({
    "_id": ObjectId("4e5d0a0d6502f38ef8bffc23"),
    "id": 3,
    "name": "副作用系変則",
    "refRule": [
        {
            "$ref": "rule",
            "$id": ObjectId("4e5d03226502f38ef8bffc1e")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000017")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900002a")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000024")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000045")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000049")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900004d")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900004e")
        }
    ],
    "rules": [
        18,
        23,
        42,
        36,
        69,
        73,
        77,
        78,
        106,
        111
    ]
});
db.getCollection("rulegenre").insert({
    "_id": ObjectId("4e5d0a0d6502f38ef8bffc22"),
    "id": 2,
    "name": "動き系変則",
    "refRule": [
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900001a")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000037")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900005f")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900005e")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000038")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900001c")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900001d")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000028")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000022")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000025")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000021")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000029")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000026")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900003e")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000043")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000044")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000046")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000047")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000056")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000057")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000048")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900004a")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000058")
        }
    ],
    "rules": [
        26,
        55,
        95,
        94,
        56,
        28,
        29,
        40,
        34,
        37,
        33,
        41,
        38,
        62,
        67,
        68,
        70,
        71,
        86,
        87,
        72,
        74,
        88,
        107
    ]
});
db.getCollection("rulegenre").insert({
    "_id": ObjectId("4e5d0a0d6502f38ef8bffc24"),
    "id": 4,
    "name": "新駒系変則",
    "refRule": [
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000014")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000015")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a21249000016")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900001e")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900001f")
        },
        {
            "$ref": "rule",
            "$id": ObjectId("4e490b014325a2124900003a")
        }
    ],
    "rules": [
        20,
        21,
        22,
        30,
        31,
        58,
        108
    ]
});
