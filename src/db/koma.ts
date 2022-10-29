import {db, ObjectId} from "./mongoCompat";
const coll = db.getCollection("koma");
export default coll;

/** koma indexes **/
db.getCollection("koma").ensureIndex({
  "_id": 1
},[
  
]);

/** koma indexes **/
db.getCollection("koma").ensureIndex({
  "species": 1
},[
  
]);

/** koma records **/
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000000"),
  "species": "aa",
  "name": "歩兵",
  "shortname": "歩",
  "csaname": "FU",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    }
  ],
  "nifu": 2
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000001"),
  "species": "ab",
  "name": "香車",
  "shortname": "香",
  "csaname": "KY",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000002"),
  "species": "ac",
  "name": "桂馬",
  "shortname": "桂",
  "csaname": "KE",
  "move": [
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000003"),
  "species": "ad",
  "name": "銀将",
  "shortname": "銀",
  "csaname": "GI",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000004"),
  "species": "ae",
  "name": "金将",
  "shortname": "金",
  "csaname": "KI",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000005"),
  "species": "af",
  "name": "角行",
  "shortname": "角",
  "csaname": "KA",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000006"),
  "species": "ag",
  "name": "飛車",
  "shortname": "飛",
  "csaname": "HI",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000007"),
  "species": "ah",
  "name": "王将",
  "shortname": "玉",
  "csaname": "OU",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000008"),
  "species": "ai",
  "name": "と金",
  "shortname": "と",
  "csaname": "TO",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000009"),
  "species": "aj",
  "name": "成香",
  "csaname": "NY",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f00000a"),
  "species": "ak",
  "name": "成桂",
  "csaname": "NK",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f00000b"),
  "species": "al",
  "name": "成銀",
  "csaname": "NG",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f00000c"),
  "species": "am",
  "name": "竜馬",
  "shortname": "馬",
  "csaname": "UM",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f00000d"),
  "species": "an",
  "name": "竜王",
  "shortname": "龍",
  "csaname": "RY",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f00000e"),
  "species": "ao",
  "name": "銅将",
  "shortname": "銅",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f00000f"),
  "species": "ap",
  "name": "鉄将",
  "shortname": "鉄",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000010"),
  "species": "aq",
  "name": "横行",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000011"),
  "species": "ar",
  "name": "猛虎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000012"),
  "species": "as",
  "name": "飛龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000013"),
  "species": "at",
  "name": "奔車",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000014"),
  "species": "au",
  "name": "注人",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000015"),
  "species": "av",
  "name": "鵬",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000016"),
  "species": "aw",
  "name": "鶴",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000017"),
  "species": "ax",
  "name": "雉",
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000018"),
  "species": "ay",
  "name": "鶉",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48b9cf4325a2053f000019"),
  "species": "az",
  "name": "鶉",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00001b"),
  "species": "bb",
  "name": "燕",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    }
  ],
  "nifu": 3
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000020"),
  "species": "bg",
  "name": "ひよこ",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00001a"),
  "species": "ba",
  "name": "鷹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00001c"),
  "species": "bc",
  "name": "鵰",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00001d"),
  "species": "bd",
  "name": "雁",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00001e"),
  "species": "be",
  "name": "八方桂",
  "move": [
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00001f"),
  "species": "bf",
  "name": "八方成桂",
  "move": [
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000021"),
  "species": "bh",
  "name": "きりん",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000022"),
  "species": "bi",
  "name": "ぞう",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000023"),
  "species": "bj",
  "name": "ライオン",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000024"),
  "species": "bk",
  "name": "にわとり",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000025"),
  "change": {
    "8": 0
  },
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ],
  "name": "獅子",
  "species": "bl",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000027"),
  "class": "Unmovable",
  "move": [
    
  ],
  "name": "コイン",
  "species": "bn"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000029"),
  "species": "bp",
  "name": "歩兵(斜)",
  "shortname": "歩",
  "move": [
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    }
  ],
  "nifu": 2
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00002a"),
  "species": "bq",
  "name": "香車(斜)",
  "shortname": "香",
  "move": [
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00002b"),
  "species": "br",
  "name": "桂馬(斜)",
  "shortname": "桂",
  "move": [
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00002c"),
  "species": "bs",
  "name": "銀将(斜)",
  "shortname": "銀",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00002d"),
  "species": "bt",
  "name": "金将(斜)",
  "shortname": "金",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00002e"),
  "species": "bu",
  "name": "角行(斜)",
  "shortname": "角",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00002f"),
  "species": "bv",
  "name": "飛車(斜)",
  "shortname": "飛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000030"),
  "species": "bw",
  "name": "王将(斜)",
  "shortname": "玉",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000031"),
  "species": "bx",
  "name": "と金(斜)",
  "shortname": "と",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000032"),
  "species": "by",
  "name": "成香(斜)",
  "shortname": "成香",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000033"),
  "species": "bz",
  "name": "成桂(斜)",
  "shortname": "成桂",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000034"),
  "species": "ca",
  "name": "成銀(斜)",
  "shortname": "成銀",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000035"),
  "species": "cb",
  "name": "竜馬(斜)",
  "shortname": "馬",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000036"),
  "species": "cc",
  "name": "竜王(斜)",
  "shortname": "竜",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000037"),
  "species": "cd",
  "name": "歩兵(はさみ将棋)",
  "shortname": "歩",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 4
    },
    {
      "move": [
        1,
        0
      ],
      "type": 4
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 4
    },
    {
      "move": [
        0,
        1
      ],
      "type": 4
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000038"),
  "species": "ce",
  "name": "と金(はさみ将棋)",
  "shortname": "と",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 4
    },
    {
      "move": [
        1,
        0
      ],
      "type": 4
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 4
    },
    {
      "move": [
        0,
        1
      ],
      "type": 4
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000039"),
  "species": "cf",
  "name": "醉象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00003a"),
  "species": "cg",
  "name": "太子",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00003b"),
  "species": "ch",
  "name": "京翔",
  "shortname": "京",
  "move": [
    {
      "move": [
        1,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -3
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00003c"),
  "species": "ci",
  "name": "銅将",
  "shortname": "銅",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00003d"),
  "species": "cj",
  "name": "成京",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00003e"),
  "species": "ck",
  "name": "成銅",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00003f"),
  "species": "cl",
  "name": "猛豹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000040"),
  "species": "cm",
  "name": "反車",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000041"),
  "species": "cn",
  "name": "盲虎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000042"),
  "species": "co",
  "name": "麒麟",
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000043"),
  "species": "cp",
  "name": "鳳凰",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000044"),
  "species": "cq",
  "name": "仲人",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "nifu": 2
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000045"),
  "species": "cr",
  "name": "横行",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000046"),
  "species": "cs",
  "name": "竪行",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000047"),
  "species": "ct",
  "name": "奔王",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000048"),
  "species": "cu",
  "name": "白駒",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000049"),
  "species": "cv",
  "name": "鯨鯢",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00004a"),
  "species": "cw",
  "name": "飛鹿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00004b"),
  "species": "cx",
  "name": "奔猪",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00004c"),
  "species": "cy",
  "name": "飛牛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00004d"),
  "change": {
    "8": 0
  },
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "name": "角鷹",
  "species": "cz",
  "status": [
    {
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00004f"),
  "change": {
    "11": 0,
    "10": 1
  },
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "name": "飛鷲",
  "species": "db",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000051"),
  "species": "dd",
  "name": "飛車",
  "shortname": "飛",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000052"),
  "species": "de",
  "name": "竪行",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000053"),
  "species": "df",
  "name": "横行",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000054"),
  "species": "dg",
  "name": "角行",
  "shortname": "角",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000055"),
  "change": {
    "8": 0
  },
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ],
  "name": "獅子",
  "species": "dh",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 8
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 8
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 8
        },
        {
          "move": [
            1,
            0
          ],
          "type": 8
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 8
        },
        {
          "move": [
            1,
            1
          ],
          "type": 8
        },
        {
          "move": [
            0,
            1
          ],
          "type": 8
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 8
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000057"),
  "species": "dj",
  "name": "奔王",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000058"),
  "species": "dk",
  "name": "酔象",
  "shortname": "象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000059"),
  "species": "dl",
  "name": "竜馬",
  "shortname": "馬",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00005a"),
  "species": "dm",
  "name": "竜王",
  "shortname": "竜",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00005c"),
  "species": "do",
  "name": "金将",
  "shortname": "金",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00005d"),
  "species": "dp",
  "name": "鉄将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00005e"),
  "species": "dq",
  "name": "石将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00005f"),
  "species": "dr",
  "name": "悪狼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000060"),
  "species": "ds",
  "name": "嗔猪",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000061"),
  "species": "dt",
  "name": "猫刄",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000062"),
  "species": "du",
  "name": "猛牛",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000063"),
  "species": "dv",
  "name": "飛龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000064"),
  "species": "dw",
  "name": "靏玉",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000065"),
  "species": "dx",
  "name": "風馬",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000066"),
  "species": "dy",
  "name": "登猿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000067"),
  "species": "dz",
  "name": "鴟行",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000068"),
  "species": "ea",
  "name": "鶏飛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000069"),
  "species": "eb",
  "name": "猛鹿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00006a"),
  "species": "ec",
  "name": "猛狼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00006b"),
  "species": "ed",
  "name": "鳫飛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00006c"),
  "species": "ee",
  "name": "烏行",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00006d"),
  "species": "ef",
  "name": "盲犬",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00006e"),
  "species": "eg",
  "name": "牛車",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00006f"),
  "species": "eh",
  "name": "雲鷲",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000070"),
  "species": "ei",
  "name": "燕羽",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000071"),
  "species": "ej",
  "name": "飛鷹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000072"),
  "species": "ek",
  "name": "走兎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000073"),
  "species": "el",
  "name": "隠狐",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000074"),
  "species": "em",
  "name": "萑歩",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000075"),
  "species": "en",
  "name": "天馬",
  "move": [
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000076"),
  "species": "eo",
  "name": "猛鹿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000077"),
  "species": "ep",
  "name": "雲鷲",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000078"),
  "species": "eq",
  "name": "延鷹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000079"),
  "species": "er",
  "name": "行猪",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00007a"),
  "species": "es",
  "name": "熊眼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00007b"),
  "species": "et",
  "name": "燕羽",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00007c"),
  "species": "eu",
  "name": "飛鷹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00007d"),
  "species": "ev",
  "name": "猛狼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00007e"),
  "species": "ew",
  "name": "歬牛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00007f"),
  "species": "ex",
  "name": "燕行",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000080"),
  "species": "ey",
  "name": "鶏鷹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000081"),
  "species": "ez",
  "name": "隠狐",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000082"),
  "species": "fa",
  "name": "金鳥",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000083"),
  "species": "fb",
  "name": "車兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000084"),
  "change": {
    "8": 0
  },
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ],
  "name": "獅鷹",
  "species": "fc",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000085"),
  "species": "fd",
  "name": "奔鷲",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 101
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 101
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 101
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 101
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000089"),
  "species": "fh",
  "name": "水牛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00008a"),
  "species": "fi",
  "name": "竪兵",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00008b"),
  "species": "fj",
  "name": "横兵",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00008c"),
  "species": "fk",
  "name": "大将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        1,
        1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 6
    }
  ],
  "jumpException": [
    "ah",
    "cg",
    "fk",
    "kz"
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000090"),
  "species": "fo",
  "name": "犬",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000091"),
  "change": {
    "10": 0,
    "11": 1,
    "12": 2,
    "13": 3,
    "14": 4,
    "15": 5,
    "16": 6,
    "17": 7
  },
  "limit": {
    "18": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": [
        2,
        10
      ]
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": [
        2,
        12
      ]
    },
    {
      "move": [
        1,
        0
      ],
      "type": [
        18,
        13
      ]
    },
    {
      "move": [
        -1,
        0
      ],
      "type": [
        18,
        14
      ]
    },
    {
      "move": [
        1,
        1
      ],
      "type": [
        2,
        15
      ]
    },
    {
      "move": [
        0,
        1
      ],
      "type": 16
    },
    {
      "move": [
        -1,
        1
      ],
      "type": [
        2,
        17
      ]
    }
  ],
  "mustNotBeEmpty": {
    "10": {
      "move": [
        0,
        0
      ],
      "type": 2
    },
    "11": {
      "move": [
        0,
        0
      ],
      "type": 2
    },
    "12": {
      "move": [
        0,
        0
      ],
      "type": 2
    },
    "13": {
      "move": [
        0,
        0
      ],
      "type": 2
    },
    "14": {
      "move": [
        0,
        0
      ],
      "type": 2
    },
    "15": {
      "move": [
        0,
        0
      ],
      "type": 2
    },
    "16": {
      "move": [
        0,
        0
      ],
      "type": 2
    },
    "17": {
      "move": [
        0,
        0
      ],
      "type": 2
    }
  },
  "name": "四天王",
  "nopass": true,
  "skip": {
    "2": 1,
    "18": 1
  },
  "species": "fp",
  "status": [
    {
      "change": {
        "1": -1
      },
      "move": [
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ]
    },
    {
      "change": {
        "1": -1
      },
      "move": [
        {
          "move": [
            0,
            1
          ],
          "type": 1
        }
      ]
    },
    {
      "change": {
        "1": -1
      },
      "move": [
        {
          "move": [
            1,
            1
          ],
          "type": 1
        }
      ]
    },
    {
      "change": {
        "1": -1
      },
      "move": [
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        }
      ]
    },
    {
      "change": {
        "1": -1
      },
      "move": [
        {
          "move": [
            1,
            0
          ],
          "type": 1
        }
      ]
    },
    {
      "change": {
        "1": -1
      },
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        }
      ]
    },
    {
      "change": {
        "1": -1
      },
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        }
      ]
    },
    {
      "change": {
        "1": -1
      },
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        }
      ]
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000092"),
  "species": "fq",
  "name": "雜将",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000093"),
  "initial": {
    "move": [
      {
        "move": [
          1,
          -1
        ],
        "type": 5
      },
      {
        "move": [
          0,
          -1
        ],
        "type": 4
      },
      {
        "move": [
          -1,
          -1
        ],
        "type": 5
      }
    ],
    "limit": {
      "4": 2
    }
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 5
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 3
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 5
    }
  ],
  "name": "ポーン",
  "species": "fr"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000095"),
  "species": "ft",
  "name": "クイーン",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000099"),
  "species": "fx",
  "name": "右将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00009a"),
  "species": "fy",
  "name": "左将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00009b"),
  "species": "fz",
  "name": "奔獏",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00009c"),
  "species": "ga",
  "name": "奔鬼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00009d"),
  "species": "gb",
  "name": "方行",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00009e"),
  "species": "gc",
  "name": "走車",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00009f"),
  "limit": {
    "10": 2,
    "11": 5
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        1,
        1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 10
    }
  ],
  "name": "夜叉",
  "species": "gd"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000a0"),
  "limit": {
    "10": 2,
    "11": 5
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        1,
        1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        1
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 11
    }
  ],
  "name": "鳩槃",
  "species": "ge"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000a1"),
  "change": {
    "2": 0
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "name": "天狗",
  "species": "gf",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 2
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 2
        },
        {
          "move": [
            1,
            1
          ],
          "type": 2
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 2
        }
      ],
      "change": {
        "2": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000a3"),
  "change": {
    "2": 0
  },
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "name": "鉤行",
  "species": "gh",
  "status": [
    {
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 2
        },
        {
          "move": [
            1,
            0
          ],
          "type": 2
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 2
        },
        {
          "move": [
            0,
            1
          ],
          "type": 2
        }
      ],
      "change": {
        "2": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000a5"),
  "species": "gj",
  "name": "近王",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000a6"),
  "species": "gk",
  "name": "行鳥",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000a7"),
  "species": "gl",
  "name": "踊鹿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000a8"),
  "species": "gm",
  "name": "老鼠",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000a9"),
  "species": "gn",
  "name": "盲猿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000aa"),
  "change": {
    "10": 0,
    "11": 1,
    "12": 2,
    "13": 3,
    "14": 4,
    "15": 5,
    "16": 6,
    "17": 7,
    "18": 8,
    "19": 9,
    "20": 10,
    "21": 11,
    "22": 8,
    "23": 9,
    "24": 10,
    "25": 11
  },
  "move": [
    {
      "move": [
        3,
        -3
      ],
      "type": 28
    },
    {
      "move": [
        0,
        -3
      ],
      "type": 27
    },
    {
      "move": [
        -3,
        -3
      ],
      "type": 28
    },
    {
      "move": [
        2,
        -2
      ],
      "type": 21
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 20
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 19
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 13
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 12
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        3,
        0
      ],
      "type": 26
    },
    {
      "move": [
        2,
        0
      ],
      "type": 22
    },
    {
      "move": [
        1,
        0
      ],
      "type": 14
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 18
    },
    {
      "move": [
        -3,
        0
      ],
      "type": 26
    },
    {
      "move": [
        1,
        1
      ],
      "type": 15
    },
    {
      "move": [
        0,
        1
      ],
      "type": 16
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 17
    },
    {
      "move": [
        2,
        2
      ],
      "type": 23
    },
    {
      "move": [
        0,
        2
      ],
      "type": 24
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 25
    },
    {
      "move": [
        3,
        3
      ],
      "type": 28
    },
    {
      "move": [
        0,
        3
      ],
      "type": 27
    },
    {
      "move": [
        -3,
        3
      ],
      "type": 28
    }
  ],
  "mustNotBeEmpty": {
    "18": {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    "22": {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    "20": {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    "24": {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    "19": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "21": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "23": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "25": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "26": [
      {
        "move": [
          -1,
          0
        ],
        "type": 1
      },
      {
        "move": [
          -2,
          0
        ],
        "type": 1
      }
    ],
    "27": [
      {
        "move": [
          0,
          -1
        ],
        "type": 1
      },
      {
        "move": [
          0,
          -2
        ],
        "type": 1
      }
    ],
    "28": [
      {
        "move": [
          -1,
          -1
        ],
        "type": 1
      },
      {
        "move": [
          -2,
          -2
        ],
        "type": 1
      }
    ]
  },
  "name": "狛犬",
  "species": "go",
  "status": [
    {
      "move": [
        {
          "move": [
            -1,
            0
          ],
          "type": 10
        },
        {
          "move": [
            1,
            0
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 8,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 10
        },
        {
          "move": [
            1,
            1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 9,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 10
        },
        {
          "move": [
            0,
            1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 10,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 10
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 11,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            0
          ],
          "type": 10
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 8,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            1
          ],
          "type": 10
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 9,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            1
          ],
          "type": 10
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 10,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            1
          ],
          "type": 10
        },
        {
          "move": [
            1,
            -1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 11,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000b7"),
  "limit": {
    "10": 2,
    "11": 3
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        1
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 11
    }
  ],
  "name": "大龍",
  "species": "hb"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000b8"),
  "change": {
    "2": 0
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "name": "天狗",
  "species": "hc",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 2
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 2
        },
        {
          "move": [
            1,
            1
          ],
          "type": 2
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 2
        }
      ],
      "change": {
        "2": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000ba"),
  "limit": {
    "11": 2,
    "10": 3
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        1,
        1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 10
    }
  ],
  "name": "金翅",
  "species": "he"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000bb"),
  "species": "hf",
  "name": "古鵄",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000bc"),
  "species": "hg",
  "name": "毒蛇",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000bd"),
  "limit": {
    "11": 2,
    "10": 3
  },
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 10
    }
  ],
  "name": "大龍",
  "species": "hh"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000be"),
  "species": "hi",
  "name": "馬麟",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000bf"),
  "species": "hj",
  "name": "変狸",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000c0"),
  "species": "hk",
  "name": "変狐",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000c1"),
  "limit": {
    "11": 2,
    "10": 3
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        1,
        1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 10
    }
  ],
  "name": "金翅",
  "species": "hl"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000c2"),
  "species": "hm",
  "name": "木将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000c3"),
  "species": "hn",
  "name": "東夷",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000c4"),
  "species": "ho",
  "name": "南蛮",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000c5"),
  "species": "hp",
  "name": "西戎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000c6"),
  "species": "hq",
  "name": "北狄",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000c7"),
  "species": "hr",
  "name": "白象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000c8"),
  "species": "hs",
  "name": "香象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000c9"),
  "species": "ht",
  "name": "青龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000ca"),
  "species": "hu",
  "name": "白虎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000cb"),
  "species": "hv",
  "name": "前旗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000cd"),
  "species": "hx",
  "name": "猛熊",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000ce"),
  "species": "hy",
  "name": "右車",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000cf"),
  "species": "hz",
  "name": "左車",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000d0"),
  "species": "ia",
  "name": "キ犬",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000d1"),
  "species": "ib",
  "name": "キ犬",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000d2"),
  "species": "ic",
  "name": "仙鶴",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000d3"),
  "species": "id",
  "name": "山母",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000d4"),
  "change": {
    "10": 0
  },
  "limit": {
    "8": 3
  },
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": [
        10,
        8
      ]
    },
    {
      "move": [
        0,
        -1
      ],
      "type": [
        10,
        8
      ]
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": [
        10,
        8
      ]
    },
    {
      "move": [
        -2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": [
        10,
        8
      ]
    },
    {
      "move": [
        -1,
        0
      ],
      "type": [
        10,
        8
      ]
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": [
        10,
        8
      ]
    },
    {
      "move": [
        0,
        1
      ],
      "type": [
        10,
        8
      ]
    },
    {
      "move": [
        -1,
        1
      ],
      "type": [
        10,
        8
      ]
    },
    {
      "move": [
        -2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ],
  "name": "奮迅",
  "species": "ie",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000d6"),
  "species": "ig",
  "name": "大象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000d7"),
  "species": "ih",
  "name": "無明",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000d8"),
  "species": "ii",
  "name": "提婆",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000d9"),
  "species": "ij",
  "name": "瓦将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000da"),
  "species": "ik",
  "name": "土将",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000db"),
  "species": "il",
  "name": "臥龍",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000dc"),
  "species": "im",
  "name": "蟠蛇",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000dd"),
  "species": "in",
  "name": "淮鶏",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000de"),
  "species": "io",
  "name": "古猿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000df"),
  "species": "ip",
  "name": "盲熊",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000e0"),
  "species": "iq",
  "name": "金剛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000e1"),
  "species": "ir",
  "name": "力士",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000e2"),
  "species": "is",
  "name": "羅刹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000e3"),
  "species": "it",
  "name": "驢馬",
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000e4"),
  "change": {
    "2": 0
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "name": "摩羯",
  "species": "iu",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 2
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 2
        },
        {
          "move": [
            1,
            1
          ],
          "type": 2
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 2
        }
      ],
      "change": {
        "2": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000e6"),
  "species": "iw",
  "name": "横飛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000e7"),
  "class": "Jizaitenno",
  "move": [
    
  ],
  "name": "自在天王",
  "species": "ix"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000e8"),
  "species": "iy",
  "name": "王子",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000e9"),
  "change": {
    "8": 0
  },
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        0,
        -1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -1,
        0
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        0,
        1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -1,
        1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ],
  "name": "法性",
  "species": "iz",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbba4325a2633e0000eb"),
  "change": {
    "10": 0,
    "11": 1,
    "12": 2,
    "13": 3,
    "14": 4,
    "15": 5,
    "16": 6,
    "17": 7,
    "18": 8,
    "19": 9,
    "20": 10,
    "21": 11,
    "22": 8,
    "23": 9,
    "24": 10,
    "25": 11
  },
  "move": [
    {
      "move": [
        3,
        -3
      ],
      "type": 28
    },
    {
      "move": [
        0,
        -3
      ],
      "type": 27
    },
    {
      "move": [
        -3,
        -3
      ],
      "type": 28
    },
    {
      "move": [
        2,
        -2
      ],
      "type": 21
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 20
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 19
    },
    {
      "move": [
        1,
        -1
      ],
      "type": [
        13,
        2
      ]
    },
    {
      "move": [
        0,
        -1
      ],
      "type": [
        12,
        2
      ]
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": [
        11,
        2
      ]
    },
    {
      "move": [
        3,
        0
      ],
      "type": 26
    },
    {
      "move": [
        2,
        0
      ],
      "type": 22
    },
    {
      "move": [
        1,
        0
      ],
      "type": [
        14,
        2
      ]
    },
    {
      "move": [
        -1,
        0
      ],
      "type": [
        10,
        2
      ]
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 18
    },
    {
      "move": [
        -3,
        0
      ],
      "type": 26
    },
    {
      "move": [
        1,
        1
      ],
      "type": [
        15,
        2
      ]
    },
    {
      "move": [
        0,
        1
      ],
      "type": [
        16,
        2
      ]
    },
    {
      "move": [
        -1,
        1
      ],
      "type": [
        17,
        2
      ]
    },
    {
      "move": [
        2,
        2
      ],
      "type": 23
    },
    {
      "move": [
        0,
        2
      ],
      "type": 24
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 25
    },
    {
      "move": [
        3,
        3
      ],
      "type": 28
    },
    {
      "move": [
        0,
        3
      ],
      "type": 27
    },
    {
      "move": [
        -3,
        3
      ],
      "type": 28
    }
  ],
  "mustNotBeEmpty": {
    "18": {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    "22": {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    "20": {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    "24": {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    "19": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "21": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "23": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "25": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "26": [
      {
        "move": [
          -1,
          0
        ],
        "type": 1
      },
      {
        "move": [
          -2,
          0
        ],
        "type": 1
      }
    ],
    "27": [
      {
        "move": [
          0,
          -1
        ],
        "type": 1
      },
      {
        "move": [
          0,
          -2
        ],
        "type": 1
      }
    ],
    "28": [
      {
        "move": [
          -1,
          -1
        ],
        "type": 1
      },
      {
        "move": [
          -2,
          -2
        ],
        "type": 1
      }
    ]
  },
  "name": "教王",
  "species": "jb",
  "status": [
    {
      "move": [
        {
          "move": [
            -1,
            0
          ],
          "type": 10
        },
        {
          "move": [
            1,
            0
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 8,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 10
        },
        {
          "move": [
            1,
            1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 9,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 10
        },
        {
          "move": [
            0,
            1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 10,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 10
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 11,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            0
          ],
          "type": 10
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 8,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            1
          ],
          "type": 10
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 9,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            1
          ],
          "type": 10
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 10,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            1
          ],
          "type": 10
        },
        {
          "move": [
            1,
            -1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 11,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbba4325a2633e0000f8"),
  "species": "jo",
  "name": "仙鶴",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbba4325a2633e0000f9"),
  "species": "jp",
  "name": "奔鬼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbba4325a2633e0000fa"),
  "species": "jq",
  "name": "白象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000011"),
  "species": "jr",
  "name": "前旗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000012"),
  "species": "js",
  "name": "蝙蝠",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000013"),
  "species": "jt",
  "name": "奔虎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000014"),
  "species": "ju",
  "name": "奔豹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000015"),
  "species": "jv",
  "name": "奔蛇",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000016"),
  "species": "jw",
  "name": "奔龍",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000017"),
  "species": "jx",
  "name": "奔狼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000018"),
  "species": "jy",
  "name": "奔熊",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000019"),
  "species": "jz",
  "name": "奔金",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900001a"),
  "species": "ka",
  "name": "奔銀",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900001b"),
  "species": "kb",
  "name": "奔銅",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900001c"),
  "species": "kc",
  "name": "奔鉄",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900001d"),
  "species": "kd",
  "name": "奔瓦",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900001e"),
  "species": "ke",
  "name": "奔石",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900001f"),
  "species": "kf",
  "name": "奔土",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000020"),
  "species": "kg",
  "name": "奔猫",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000021"),
  "species": "kh",
  "name": "奔人",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000022"),
  "initial": {
    "limit": {
      "4": 2
    },
    "move": [
      {
        "move": [
          1,
          -1
        ],
        "type": 5
      },
      {
        "move": [
          0,
          -1
        ],
        "type": 4
      },
      {
        "move": [
          -1,
          -1
        ],
        "type": 5
      }
    ]
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 5
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 5
    }
  ],
  "name": "ポーン",
  "shortname": "ポーン",
  "species": "ki",
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000024"),
  "species": "kk",
  "name": "ナイト",
  "move": [
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000025"),
  "change": {
    "8": 0
  },
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "name": "角鷹",
  "species": "kl",
  "status": [
    {
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000027"),
  "change": {
    "11": 0,
    "10": 1
  },
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "name": "飛鷲",
  "species": "kn",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900002a"),
  "species": "kq",
  "name": "車兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900002b"),
  "change": {
    "8": 0
  },
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -2,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -2,
        1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ],
  "name": "獅鷹",
  "species": "kr",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000030"),
  "species": "kw",
  "name": "水牛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000031"),
  "species": "kx",
  "name": "竪兵",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000032"),
  "species": "ky",
  "name": "横兵",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000033"),
  "species": "kz",
  "name": "大将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        1,
        1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 6
    }
  ],
  "jumpException": [
    "ah",
    "cg",
    "fk",
    "kz"
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000039"),
  "change": {
    "10": 0,
    "11": 1,
    "12": 2,
    "13": 3,
    "14": 4,
    "15": 5,
    "16": 6,
    "17": 7,
    "18": 8,
    "19": 9,
    "20": 10,
    "21": 11,
    "22": 8,
    "23": 9,
    "24": 10,
    "25": 11
  },
  "move": [
    {
      "move": [
        3,
        -3
      ],
      "type": 28
    },
    {
      "move": [
        0,
        -3
      ],
      "type": 27
    },
    {
      "move": [
        -3,
        -3
      ],
      "type": 28
    },
    {
      "move": [
        2,
        -2
      ],
      "type": 21
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 20
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 19
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 13
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 12
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        3,
        0
      ],
      "type": 26
    },
    {
      "move": [
        2,
        0
      ],
      "type": 22
    },
    {
      "move": [
        1,
        0
      ],
      "type": 14
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 18
    },
    {
      "move": [
        -3,
        0
      ],
      "type": 26
    },
    {
      "move": [
        1,
        1
      ],
      "type": 15
    },
    {
      "move": [
        0,
        1
      ],
      "type": 16
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 17
    },
    {
      "move": [
        2,
        2
      ],
      "type": 23
    },
    {
      "move": [
        0,
        2
      ],
      "type": 24
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 25
    },
    {
      "move": [
        3,
        3
      ],
      "type": 28
    },
    {
      "move": [
        0,
        3
      ],
      "type": 27
    },
    {
      "move": [
        -3,
        3
      ],
      "type": 28
    }
  ],
  "mustNotBeEmpty": {
    "18": {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    "22": {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    "20": {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    "24": {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    "19": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "21": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "23": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "25": {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    "26": [
      {
        "move": [
          -1,
          0
        ],
        "type": 1
      },
      {
        "move": [
          -2,
          0
        ],
        "type": 1
      }
    ],
    "27": [
      {
        "move": [
          0,
          -1
        ],
        "type": 1
      },
      {
        "move": [
          0,
          -2
        ],
        "type": 1
      }
    ],
    "28": [
      {
        "move": [
          -1,
          -1
        ],
        "type": 1
      },
      {
        "move": [
          -2,
          -2
        ],
        "type": 1
      }
    ]
  },
  "name": "狛犬",
  "species": "lf",
  "status": [
    {
      "move": [
        {
          "move": [
            -1,
            0
          ],
          "type": 10
        },
        {
          "move": [
            1,
            0
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 8,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 10
        },
        {
          "move": [
            1,
            1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 9,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 10
        },
        {
          "move": [
            0,
            1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 10,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 10
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 11,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            0
          ],
          "type": 10
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 8,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            1
          ],
          "type": 10
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 9,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            1
          ],
          "type": 10
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 10,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            1
          ],
          "type": 10
        },
        {
          "move": [
            1,
            -1
          ],
          "type": 11
        }
      ],
      "change": {
        "10": 11,
        "11": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000054"),
  "species": "mg",
  "name": "猛鷲",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000055"),
  "species": "mh",
  "name": "横龍",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000056"),
  "species": "mi",
  "name": "金鹿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000057"),
  "species": "mj",
  "name": "銀兎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000058"),
  "species": "mk",
  "name": "羊兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000059"),
  "change": {
    "2": 0
  },
  "limit": {
    "8": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "name": "孔雀",
  "species": "ml",
  "status": [
    {
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 2
        },
        {
          "move": [
            1,
            1
          ],
          "type": 2
        },
        {
          "move": [
            1,
            -1
          ],
          "type": 2
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 2
        }
      ],
      "change": {
        "2": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900005c"),
  "species": "mo",
  "name": "兵士",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900005d"),
  "species": "mp",
  "name": "朱雀",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900005e"),
  "species": "mq",
  "name": "玄武",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900005f"),
  "species": "mr",
  "name": "古鵄",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000060"),
  "species": "ms",
  "name": "後旗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000061"),
  "species": "mt",
  "name": "中旗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000062"),
  "species": "mu",
  "name": "鳩盤",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000063"),
  "species": "mv",
  "name": "地龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000064"),
  "species": "mw",
  "name": "雨龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000065"),
  "species": "mx",
  "name": "走馬",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000066"),
  "species": "my",
  "name": "奔鬼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000067"),
  "species": "mz",
  "name": "獣曹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000068"),
  "limit": {
    "11": 3,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        1,
        1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 11
    }
  ],
  "name": "獣吏",
  "species": "na"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000069"),
  "species": "nb",
  "name": "山鷲(左)",
  "shortname": "山鷲",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900006a"),
  "species": "nc",
  "name": "山鷲(右)",
  "shortname": "山鷲",
  "move": [
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900006b"),
  "species": "nd",
  "name": "飛鷲",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900006c"),
  "species": "ne",
  "name": "走熊",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900006d"),
  "species": "nf",
  "name": "奔熊",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900006e"),
  "species": "ng",
  "name": "走虎",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900006f"),
  "species": "nh",
  "name": "大鳩",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000070"),
  "species": "ni",
  "name": "鳩槃",
  "move": [
    {
      "move": [
        5,
        -5
      ],
      "type": 10
    },
    {
      "move": [
        -5,
        -5
      ],
      "type": 10
    },
    {
      "move": [
        4,
        -4
      ],
      "type": 11
    },
    {
      "move": [
        -4,
        -4
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        4,
        4
      ],
      "type": 11
    },
    {
      "move": [
        -4,
        4
      ],
      "type": 11
    },
    {
      "move": [
        5,
        5
      ],
      "type": 10
    },
    {
      "move": [
        -5,
        5
      ],
      "type": 10
    }
  ],
  "mustBeEmpty": {
    "10": {
      "move": [
        -2,
        -2
      ]
    },
    "11": {
      "move": [
        -1,
        -1
      ]
    }
  },
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000071"),
  "species": "nj",
  "name": "横蛇",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000072"),
  "limit": {
    "11": 5,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 10
    }
  ],
  "name": "大鱗",
  "species": "nk"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000073"),
  "species": "nl",
  "name": "走蛇",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000074"),
  "species": "nm",
  "name": "走狗",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000075"),
  "species": "nn",
  "name": "山鹿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        0,
        1
      ],
      "type": 12
    }
  ],
  "limit": {
    "10": 3,
    "11": 2,
    "12": 4
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000076"),
  "species": "no",
  "name": "大鹿",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000077"),
  "species": "np",
  "name": "森鬼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000078"),
  "species": "nq",
  "name": "雷走",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 4
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000079"),
  "species": "nr",
  "name": "雨龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900007a"),
  "species": "ns",
  "name": "大龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900007b"),
  "limit": {
    "11": 3,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        1,
        1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 11
    }
  ],
  "name": "禽吏",
  "species": "nt"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900007c"),
  "limit": {
    "11": 3,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "name": "禽鳥",
  "species": "nu"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900007d"),
  "species": "nv",
  "name": "飛燕",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900007e"),
  "species": "nw",
  "name": "山鳩",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900007f"),
  "species": "nx",
  "name": "大鳩",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000080"),
  "species": "ny",
  "name": "鳳師",
  "move": [
    {
      "move": [
        3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        -3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000081"),
  "species": "nz",
  "name": "麟師",
  "move": [
    {
      "move": [
        0,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        3
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000082"),
  "limit": {
    "11": 4,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 10
    }
  ],
  "name": "火龍",
  "species": "oa"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000083"),
  "limit": {
    "11": 2,
    "10": 4
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 10
    }
  ],
  "name": "水龍",
  "species": "ob"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000084"),
  "species": "oc",
  "name": "奔狗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000085"),
  "species": "od",
  "name": "奔犬",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000086"),
  "species": "oe",
  "name": "風龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000087"),
  "species": "of",
  "name": "奔龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000088"),
  "limit": {
    "11": 3,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        1,
        1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 11
    }
  ],
  "name": "獣吏",
  "species": "og"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000089"),
  "limit": {
    "11": 3,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "name": "獣鳥",
  "species": "oh"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900008a"),
  "species": "oi",
  "name": "右龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900008b"),
  "species": "oj",
  "name": "青龍",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900008c"),
  "species": "ok",
  "name": "左龍",
  "move": [
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900008d"),
  "species": "ol",
  "name": "朱雀",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900008e"),
  "species": "om",
  "name": "右虎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900008f"),
  "species": "on",
  "name": "白虎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000090"),
  "species": "oo",
  "name": "左虎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000091"),
  "species": "op",
  "name": "玄武",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000092"),
  "species": "oq",
  "name": "走狼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000093"),
  "species": "or",
  "name": "走鹿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000094"),
  "species": "os",
  "name": "奔鹿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000095"),
  "species": "ot",
  "name": "金車",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000096"),
  "species": "ou",
  "name": "遊母",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        1,
        1
      ],
      "type": 12
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 12
    }
  ],
  "limit": {
    "10": 3,
    "11": 5,
    "12": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000097"),
  "species": "ov",
  "name": "林鬼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000098"),
  "species": "ow",
  "name": "右鵰",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000099"),
  "species": "ox",
  "name": "猛龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 100
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 100
    }
  ],
  "limit": {
    "8": 2
  },
  "jumpException": [
    "wz",
    "cg",
    "qj",
    "ql",
    "xe",
    "wa",
    "wc",
    "ox",
    "wd"
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900009a"),
  "species": "oy",
  "name": "大鹿",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900009b"),
  "species": "oz",
  "name": "禽曹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900009c"),
  "limit": {
    "11": 3,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        1,
        1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 11
    }
  ],
  "name": "禽吏",
  "species": "pa"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900009d"),
  "species": "pb",
  "name": "横猪",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900009e"),
  "species": "pc",
  "name": "奔猪",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a2114900009f"),
  "species": "pd",
  "name": "中旗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000a0"),
  "species": "pe",
  "name": "前旗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000a1"),
  "species": "pf",
  "name": "牛将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000a2"),
  "species": "pg",
  "name": "奔牛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000a3"),
  "species": "ph",
  "name": "馬将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000a4"),
  "species": "pi",
  "name": "奔馬",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000a5"),
  "species": "pj",
  "name": "狗将",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 4
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000a6"),
  "species": "pk",
  "name": "奔狗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000a7"),
  "species": "pl",
  "name": "鶏将",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 4
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000a8"),
  "species": "pm",
  "name": "奔鶏",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000a9"),
  "limit": {
    "11": 4,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        1
      ],
      "type": 10
    }
  ],
  "name": "豚将",
  "species": "pn"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000aa"),
  "species": "po",
  "name": "奔豚",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000ab"),
  "species": "pp",
  "name": "竪熊",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000ac"),
  "species": "pq",
  "name": "銀車",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000ad"),
  "species": "pr",
  "name": "鴻翼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000ae"),
  "species": "ps",
  "name": "銅車",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000af"),
  "species": "pt",
  "name": "銅象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000b0"),
  "species": "pu",
  "name": "雲龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000b1"),
  "species": "pv",
  "name": "小旗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000b2"),
  "species": "pw",
  "name": "後旗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000b3"),
  "species": "px",
  "name": "竪虎",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000b4"),
  "species": "py",
  "name": "山鷹",
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000b5"),
  "species": "pz",
  "name": "角鷹",
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000b6"),
  "species": "qa",
  "name": "飛猫",
  "move": [
    {
      "move": [
        3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        -3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000b7"),
  "species": "qb",
  "name": "横狼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000b8"),
  "species": "qc",
  "name": "石車",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000b9"),
  "species": "qd",
  "name": "歩振",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000ba"),
  "species": "qe",
  "name": "大亀",
  "move": [
    {
      "move": [
        0,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        3
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000bb"),
  "species": "qf",
  "name": "霊亀",
  "move": [
    {
      "move": [
        0,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        3
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000bc"),
  "species": "qg",
  "name": "小亀",
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000bd"),
  "species": "qh",
  "name": "宝亀",
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000be"),
  "species": "qi",
  "name": "火将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000bf"),
  "species": "qj",
  "name": "大将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        1,
        0
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 100
    },
    {
      "move": [
        1,
        1
      ],
      "type": 100
    },
    {
      "move": [
        0,
        1
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 100
    }
  ],
  "jumpException": [
    "wz",
    "cg",
    "qj"
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000c0"),
  "species": "qk",
  "name": "水将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000c1"),
  "species": "ql",
  "name": "副将",
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 100
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    }
  ],
  "jumpException": [
    "wz",
    "cg",
    "qj",
    "ql",
    "xe"
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000c2"),
  "species": "qm",
  "name": "木車",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000c3"),
  "species": "qn",
  "name": "風鼈",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000c4"),
  "species": "qo",
  "name": "鵬師",
  "move": [
    {
      "move": [
        3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        -3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000c5"),
  "species": "qp",
  "name": "中師",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000c6"),
  "species": "qq",
  "name": "横牛",
  "move": [
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000c7"),
  "species": "qr",
  "name": "飛牛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000c8"),
  "species": "qs",
  "name": "竪狼",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000c9"),
  "species": "qt",
  "name": "走狼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000ca"),
  "species": "qu",
  "name": "瓦車",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000cb"),
  "species": "qv",
  "name": "走瓦",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000cc"),
  "species": "qw",
  "name": "騎兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a211490000cd"),
  "species": "qx",
  "name": "騎士",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000ce"),
  "species": "qy",
  "name": "土車",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000cf"),
  "species": "qz",
  "name": "尺鳥",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000d0"),
  "species": "ra",
  "name": "大師",
  "move": [
    {
      "move": [
        3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        -3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000d1"),
  "species": "rb",
  "name": "大旗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000d2"),
  "species": "rc",
  "name": "熊兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000d3"),
  "species": "rd",
  "name": "強熊",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000d4"),
  "species": "re",
  "name": "豹兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000d5"),
  "species": "rf",
  "name": "走豹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000d6"),
  "species": "rg",
  "name": "猪兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000d7"),
  "species": "rh",
  "name": "走猪",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000d8"),
  "species": "ri",
  "name": "牛兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000d9"),
  "species": "rj",
  "name": "走牛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000da"),
  "species": "rk",
  "name": "馬兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000db"),
  "species": "rl",
  "name": "走馬",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000dd"),
  "species": "rn",
  "name": "泰山",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000de"),
  "species": "ro",
  "name": "川将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000df"),
  "species": "rp",
  "name": "淮川",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000e0"),
  "species": "rq",
  "name": "風将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000e1"),
  "species": "rr",
  "name": "暴風",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000e2"),
  "species": "rs",
  "name": "吼犬",
  "move": [
    {
      "move": [
        3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        -3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        3
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000e3"),
  "species": "rt",
  "name": "狛犬",
  "move": [
    {
      "move": [
        3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        -3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        3,
        3
      ],
      "type": 1
    },
    {
      "move": [
        0,
        3
      ],
      "type": 1
    },
    {
      "move": [
        -3,
        3
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000e4"),
  "limit": {
    "11": 3,
    "10": 5
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "name": "弓兵",
  "species": "ru"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000e5"),
  "species": "rv",
  "name": "弓将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        0,
        1
      ],
      "type": 12
    }
  ],
  "limit": {
    "10": 5,
    "11": 3,
    "12": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000e6"),
  "species": "rw",
  "name": "竪豹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000e7"),
  "limit": {
    "11": 3,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "name": "大豹",
  "species": "rx"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000e8"),
  "species": "ry",
  "name": "鎗兵",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000e9"),
  "limit": {
    "11": 3,
    "10": 2
  },
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        0,
        1
      ],
      "type": 10
    }
  ],
  "name": "鎗将",
  "species": "rz"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000ea"),
  "species": "sa",
  "name": "刀兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000eb"),
  "species": "sb",
  "name": "刀将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000ec"),
  "species": "sc",
  "name": "炮兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 10
    },
    {
      "move": [
        1,
        0
      ],
      "type": 12
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 12
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "10": 5,
    "11": 7,
    "12": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000ed"),
  "limit": {
    "11": 3,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 11
    },
    {
      "move": [
        0,
        1
      ],
      "type": 10
    }
  ],
  "name": "炮将",
  "species": "sd"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000ee"),
  "species": "se",
  "name": "竪馬",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000ef"),
  "species": "sf",
  "name": "竪狗",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000f0"),
  "species": "sg",
  "name": "豹王",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000f1"),
  "limit": {
    "11": 5,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "name": "弩兵",
  "species": "sh"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000f2"),
  "species": "si",
  "name": "弩将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000f3"),
  "species": "sj",
  "name": "横猿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000f4"),
  "species": "sk",
  "name": "左車",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000f5"),
  "species": "sl",
  "name": "左鉄車",
  "move": [
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000f6"),
  "species": "sm",
  "name": "火牛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000f7"),
  "species": "sn",
  "name": "角鷹",
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000f8"),
  "species": "so",
  "name": "大鷹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000f9"),
  "species": "sp",
  "name": "飛鷲",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000fa"),
  "species": "sq",
  "name": "大鷲",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000fb"),
  "species": "sr",
  "name": "猛虎",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000fc"),
  "species": "ss",
  "name": "大虎",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000fd"),
  "species": "st",
  "name": "狛犬",
  "move": [
    {
      "move": [
        3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        -3,
        -3
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        3,
        3
      ],
      "type": 1
    },
    {
      "move": [
        0,
        3
      ],
      "type": 1
    },
    {
      "move": [
        -3,
        3
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000fe"),
  "species": "su",
  "name": "大象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        1,
        1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 6
    }
  ],
  "limit": {
    "8": 3
  },
  "jumpLimit": {
    "6": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000ff"),
  "species": "sv",
  "name": "右車",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000100"),
  "species": "sw",
  "name": "右鉄車",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000101"),
  "species": "sx",
  "name": "四天王",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        1,
        1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 6
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000102"),
  "species": "sy",
  "name": "前旗",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000103"),
  "species": "sz",
  "name": "歬牛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000104"),
  "species": "ta",
  "name": "白象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000105"),
  "species": "tb",
  "name": "青龍",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000106"),
  "species": "tc",
  "name": "神龍",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000107"),
  "species": "td",
  "name": "変狸",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000108"),
  "species": "te",
  "name": "雲鷲",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000109"),
  "species": "tf",
  "name": "横龍",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900010a"),
  "species": "tg",
  "name": "盲熊",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900010b"),
  "species": "th",
  "name": "老鼠",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900010c"),
  "species": "ti",
  "name": "寺鳥",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900010d"),
  "species": "tj",
  "name": "方行",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900010e"),
  "species": "tk",
  "name": "強車",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900010f"),
  "species": "tl",
  "name": "蟠龍",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000110"),
  "species": "tm",
  "name": "臥龍",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000111"),
  "change": {
    "10": 0,
    "11": 1,
    "12": 2,
    "13": 3,
    "14": 4,
    "15": 5,
    "16": 6,
    "17": 7,
    "18": 8,
    "19": 9,
    "20": 10,
    "21": 11,
    "22": 12,
    "23": 13
  },
  "move": [
    {
      "move": [
        3,
        -3
      ],
      "type": 23
    },
    {
      "move": [
        -3,
        -3
      ],
      "type": 22
    },
    {
      "move": [
        2,
        -2
      ],
      "type": 21
    },
    {
      "move": [
        0,
        -2
      ],
      "type": 20
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 19
    },
    {
      "move": [
        1,
        -1
      ],
      "type": [
        2,
        13
      ]
    },
    {
      "move": [
        0,
        -1
      ],
      "type": [
        2,
        12
      ]
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": [
        2,
        11
      ]
    },
    {
      "move": [
        2,
        0
      ],
      "type": 18
    },
    {
      "move": [
        1,
        0
      ],
      "type": [
        2,
        14
      ]
    },
    {
      "move": [
        -1,
        0
      ],
      "type": [
        2,
        10
      ]
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 18
    },
    {
      "move": [
        1,
        1
      ],
      "type": [
        2,
        15
      ]
    },
    {
      "move": [
        0,
        1
      ],
      "type": [
        2,
        16
      ]
    },
    {
      "move": [
        -1,
        1
      ],
      "type": [
        2,
        17
      ]
    },
    {
      "move": [
        2,
        2
      ],
      "type": 22
    },
    {
      "move": [
        0,
        2
      ],
      "type": 20
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 23
    }
  ],
  "name": "奔鷲",
  "species": "tn",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 18
        },
        {
          "move": [
            -2,
            0
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1,
        "18": 8
      }
    },
    {
      "move": [
        {
          "move": [
            -3,
            -3
          ],
          "type": 1
        },
        {
          "move": [
            -2,
            -2
          ],
          "type": 22
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 19
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1,
        "22": 12,
        "19": 9
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            -2
          ],
          "type": 1
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 20
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1,
        "20": 10
      }
    },
    {
      "move": [
        {
          "move": [
            3,
            -3
          ],
          "type": 1
        },
        {
          "move": [
            2,
            -2
          ],
          "type": 23
        },
        {
          "move": [
            1,
            -1
          ],
          "type": 21
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1,
        "23": 13,
        "21": 11
      }
    },
    {
      "move": [
        {
          "move": [
            2,
            0
          ],
          "type": 1
        },
        {
          "move": [
            1,
            0
          ],
          "type": 18
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1,
        "18": 8
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 22
        },
        {
          "move": [
            2,
            2
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1,
        "22": 12
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 20
        },
        {
          "move": [
            0,
            2
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1,
        "20": 10
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 23
        },
        {
          "move": [
            -2,
            2
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1,
        "23": 13
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            -2,
            -2
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 22
        },
        {
          "move": [
            1,
            1
          ],
          "type": 22
        },
        {
          "move": [
            2,
            2
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1,
        "22": 12
      }
    },
    {
      "move": [
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            2,
            -2
          ],
          "type": 1
        },
        {
          "move": [
            1,
            -1
          ],
          "type": 23
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 23
        },
        {
          "move": [
            -2,
            2
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1,
        "23": 13
      }
    },
    {
      "move": [
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000120"),
  "species": "uc",
  "name": "太子",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000121"),
  "species": "ud",
  "name": "ビショップ",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000122"),
  "species": "ue",
  "name": "朱雀",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000123"),
  "species": "uf",
  "name": "神雀",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000124"),
  "species": "ug",
  "name": "驢馬",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000125"),
  "species": "uh",
  "name": "馬麟",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000126"),
  "species": "ui",
  "name": "大熊",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000127"),
  "species": "uj",
  "name": "嗔猪",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000128"),
  "species": "uk",
  "name": "毒狼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000129"),
  "species": "ul",
  "name": "風馬",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900012a"),
  "species": "um",
  "name": "天馬",
  "move": [
    {
      "move": [
        1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900012b"),
  "species": "un",
  "name": "延鷹",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900012c"),
  "species": "uo",
  "name": "山母",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900012d"),
  "species": "up",
  "name": "仙鷦",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900012e"),
  "species": "uq",
  "name": "西戎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900012f"),
  "species": "ur",
  "name": "東夷",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000130"),
  "species": "us",
  "name": "隠狐",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000131"),
  "species": "ut",
  "name": "山鶻",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000132"),
  "species": "uu",
  "name": "南蛮",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000133"),
  "species": "uv",
  "name": "金翅",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  },
  "jumpLimit": {
    "6": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000134"),
  "species": "uw",
  "name": "北狄",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000135"),
  "species": "ux",
  "name": "大駒",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000136"),
  "species": "uy",
  "name": "左犬",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000137"),
  "species": "uz",
  "name": "右犬",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000138"),
  "species": "va",
  "name": "踊鹿",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000139"),
  "species": "vb",
  "name": "方行",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900013a"),
  "species": "vc",
  "name": "大獏",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -3,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900013b"),
  "species": "vd",
  "name": "猛鷲",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900013c"),
  "species": "ve",
  "name": "飛龍",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        2,
        2
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900013d"),
  "species": "vf",
  "name": "麒麟",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900013e"),
  "species": "vg",
  "name": "雲鷲",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900013f"),
  "species": "vh",
  "name": "勁鷲",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000140"),
  "species": "vi",
  "name": "兵士",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000141"),
  "species": "vj",
  "name": "走車",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000142"),
  "species": "vk",
  "name": "炮車",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000143"),
  "species": "vl",
  "name": "羊兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000144"),
  "species": "vm",
  "name": "虎兵",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000145"),
  "species": "vn",
  "name": "猛牛",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000146"),
  "species": "vo",
  "name": "ルーク(居飛車)",
  "shortname": "ルーク",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ],
  "baseChange": "ym",
  "nopostfix": 1
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000147"),
  "species": "vp",
  "name": "大龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000148"),
  "species": "vq",
  "name": "元龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000149"),
  "species": "vr",
  "name": "金翅",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  },
  "jumpLimit": {
    "6": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900014a"),
  "species": "vs",
  "name": "奔翅",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  },
  "jumpLimit": {
    "6": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900014b"),
  "species": "vt",
  "name": "提婆",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900014c"),
  "species": "vu",
  "name": "教王",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        1,
        1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 6
    }
  ],
  "jumpLimit": {
    "6": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900014d"),
  "species": "vv",
  "name": "無明",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900014e"),
  "species": "vw",
  "name": "鯨鯢",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900014f"),
  "species": "vx",
  "name": "白駒",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000150"),
  "species": "vy",
  "name": "横龍",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000151"),
  "species": "vz",
  "name": "走龍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000152"),
  "species": "wa",
  "name": "角将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        1,
        1
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 100
    }
  ],
  "jumpException": [
    "wz",
    "cg",
    "qj",
    "ql",
    "xe",
    "wa",
    "wc",
    "ox",
    "wd"
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000153"),
  "limit": {
    "11": 3,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 10
    },
    {
      "move": [
        1,
        1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 10
    }
  ],
  "name": "霖鬼",
  "species": "wb"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000154"),
  "species": "wc",
  "name": "飛将",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        1,
        0
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 100
    },
    {
      "move": [
        0,
        1
      ],
      "type": 100
    }
  ],
  "jumpException": [
    "wz",
    "cg",
    "qj",
    "ql",
    "xe",
    "wa",
    "wc",
    "ox",
    "wd"
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000155"),
  "jumpException": [
    "wz",
    "cg",
    "qj",
    "ql",
    "xe",
    "wa",
    "wc",
    "ox",
    "wd"
  ],
  "limit": {
    "11": 3,
    "10": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 11
    },
    {
      "move": [
        1,
        0
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 100
    },
    {
      "move": [
        1,
        1
      ],
      "type": 10
    },
    {
      "move": [
        0,
        1
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 10
    }
  ],
  "name": "飛鰐",
  "species": "wd"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000156"),
  "species": "we",
  "name": "行鳥",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000157"),
  "species": "wf",
  "name": "奔鬼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000158"),
  "species": "wg",
  "name": "古鵄",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000159"),
  "change": {
    "2": 0
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "name": "天狗",
  "species": "wh",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 2
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 2
        },
        {
          "move": [
            1,
            1
          ],
          "type": 2
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 2
        }
      ],
      "change": {
        "2": -1
      }
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900015b"),
  "species": "wj",
  "name": "白象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900015c"),
  "species": "wk",
  "name": "象王",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900015d"),
  "species": "wl",
  "name": "四天",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 4
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900015e"),
  "species": "wm",
  "name": "力士",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900015f"),
  "species": "wn",
  "name": "金剛",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000160"),
  "species": "wo",
  "name": "夜叉",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "limit": {
    "8": 3
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000161"),
  "species": "wp",
  "name": "香象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000162"),
  "species": "wq",
  "name": "神亀",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000163"),
  "species": "wr",
  "name": "走兎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000164"),
  "species": "ws",
  "name": "隠狐",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000165"),
  "species": "wt",
  "name": "大鯨",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000166"),
  "species": "wu",
  "name": "火鬼",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000167"),
  "species": "wv",
  "name": "奔火",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000168"),
  "species": "ww",
  "name": "奔獏",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ],
  "limit": {
    "8": 5
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000169"),
  "species": "wx",
  "name": "左将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900016a"),
  "species": "wy",
  "name": "左軍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900016b"),
  "species": "wz",
  "name": "玉将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900016c"),
  "species": "xa",
  "name": "右将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900016d"),
  "species": "xb",
  "name": "右軍",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900016e"),
  "species": "xc",
  "name": "白虎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900016f"),
  "species": "xd",
  "name": "神虎",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "limit": {
    "8": 2
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000170"),
  "species": "xe",
  "name": "副将",
  "move": [
    {
      "move": [
        0,
        -2
      ],
      "type": 1
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 100
    },
    {
      "move": [
        2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -2,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 100
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 100
    },
    {
      "move": [
        0,
        2
      ],
      "type": 1
    }
  ],
  "jumpException": [
    "wz",
    "cg",
    "qj",
    "ql",
    "xe"
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000171"),
  "species": "xf",
  "name": "犬",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000172"),
  "species": "xg",
  "name": "雜将",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000173"),
  "species": "xh",
  "name": "醉象",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000190"),
  "species": "yk",
  "name": "クイーン",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        1,
        1
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000191"),
  "species": "yl",
  "name": "キング(居玉)",
  "shortname": "キング",
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "baseChange": "yn",
  "nopostfix": 1
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000194"),
  "class": "Unmovable",
  "move": [
    
  ],
  "name": "オセロ",
  "shortname": " ",
  "species": "yo"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000195"),
  "species": "yp",
  "name": "ポーン(チェッカー)",
  "shortname": "ポーン",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 8
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 3
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 3
    }
  ],
  "mustNotBeEmpty": {
    "8": {
      "move": [
        -1,
        -1
      ],
      "type": 2
    }
  },
  "mustBeEmpty": {
    "8": {
      "move": [
        0,
        0
      ]
    }
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000196"),
  "species": "yq",
  "name": "キング(チェッカー)",
  "shortname": "キング",
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 8
    },
    {
      "move": [
        1,
        -1
      ],
      "type": 3
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 3
    },
    {
      "move": [
        1,
        1
      ],
      "type": 3
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 3
    },
    {
      "move": [
        2,
        2
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 8
    }
  ],
  "mustNotBeEmpty": {
    "8": {
      "move": [
        -1,
        -1
      ],
      "type": 2
    }
  },
  "mustBeEmpty": {
    "8": {
      "move": [
        0,
        0
      ]
    }
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000197"),
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "name": "帥",
  "species": "yr"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000198"),
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 1
    }
  ],
  "name": "仕",
  "species": "ys"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a21149000199"),
  "species": "yt",
  "name": "馬",
  "move": [
    {
      "move": [
        1,
        -2
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -2
      ],
      "type": 8
    },
    {
      "move": [
        2,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        2,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        1
      ],
      "type": 8
    },
    {
      "move": [
        1,
        2
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        2
      ],
      "type": 8
    }
  ],
  "mustBeEmpty": {
    "8": {
      "move": [
        -1,
        -1
      ]
    }
  }
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900019a"),
  "move": [
    {
      "move": [
        2,
        -2
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        -2
      ],
      "type": 8
    },
    {
      "move": [
        2,
        2
      ],
      "type": 8
    },
    {
      "move": [
        -2,
        2
      ],
      "type": 8
    }
  ],
  "mustBeEmpty": {
    "8": {
      "move": [
        -1,
        -1
      ]
    }
  },
  "name": "相",
  "species": "yu"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900019b"),
  "species": "yv",
  "name": "俥",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 2
    },
    {
      "move": [
        1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 2
    },
    {
      "move": [
        0,
        1
      ],
      "type": 2
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900019c"),
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": [
        4,
        7
      ]
    },
    {
      "move": [
        1,
        0
      ],
      "type": [
        4,
        7
      ]
    },
    {
      "move": [
        -1,
        0
      ],
      "type": [
        4,
        7
      ]
    },
    {
      "move": [
        0,
        1
      ],
      "type": [
        4,
        7
      ]
    }
  ],
  "name": "炮",
  "species": "yw"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900019d"),
  "species": "yx",
  "name": "兵",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a2114900019e"),
  "species": "yy",
  "name": "兵(敵陣)",
  "shortname": "兵",
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        1,
        0
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 1
    }
  ]
});
db.getCollection("koma").insert({
  "_id": ObjectId("50b0872f0209d85ef8000000"),
  "class": "Unmovable",
  "move": [
    
  ],
  "name": "オセロ(白)",
  "shortname": "○",
  "species": "yn"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3224325a211490000dc"),
  "limit": {
    "8": 3
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 1
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 1
    }
  ],
  "name": "山将",
  "species": "rm"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e0000cc"),
  "limit": {
    "8": 2
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    }
  ],
  "name": "猛虎",
  "species": "hw"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00008d"),
  "change": {
    "8": "0"
  },
  "jumpException": [
    "ah",
    "cg",
    "fk",
    "kz",
    "fl"
  ],
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": [
        6,
        8
      ]
    },
    {
      "move": [
        0,
        -1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": [
        6,
        8
      ]
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": [
        6,
        8
      ]
    },
    {
      "move": [
        0,
        1
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        1
      ],
      "type": [
        6,
        8
      ]
    }
  ],
  "name": "副将",
  "species": "fl",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": 1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ],
  "stopWhenCapture": true
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e000086"),
  "change": {
    "8": 0
  },
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        0,
        -1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 8
    },
    {
      "move": [
        1,
        1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        0,
        1
      ],
      "type": [
        8,
        2
      ]
    },
    {
      "move": [
        -1,
        1
      ],
      "type": [
        8,
        2
      ]
    }
  ],
  "name": "火鬼",
  "species": "fe",
  "status": [
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": 1
      }
    },
    {
      "move": [
        {
          "move": [
            1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            -1
          ],
          "type": 1
        },
        {
          "move": [
            1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            0
          ],
          "type": 1
        },
        {
          "move": [
            1,
            1
          ],
          "type": 1
        },
        {
          "move": [
            0,
            1
          ],
          "type": 1
        },
        {
          "move": [
            -1,
            1
          ],
          "type": 1
        }
      ],
      "change": {
        "1": -1
      }
    }
  ],
  "stopWhenCapture": true
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000038"),
  "jumpException": [
    "ah",
    "cg",
    "fk",
    "kz",
    "fl",
    "fm",
    "ld",
    "fn",
    "le"
  ],
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 6
    }
  ],
  "name": "角将",
  "species": "le"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48d3214325a21149000037"),
  "jumpException": [
    "ah",
    "cg",
    "fk",
    "kz",
    "fl",
    "fm",
    "ld"
  ],
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        0,
        1
      ],
      "type": 6
    }
  ],
  "name": "飛将",
  "species": "ld"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00008f"),
  "jumpException": [
    "ah",
    "cg",
    "fk",
    "kz",
    "fl",
    "fm",
    "ld",
    "fn",
    "le"
  ],
  "move": [
    {
      "move": [
        1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        1
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        1
      ],
      "type": 6
    }
  ],
  "name": "角将",
  "species": "fn"
});
db.getCollection("koma").insert({
  "_id": ObjectId("4e48cbb94325a2633e00008e"),
  "jumpException": [
    "ah",
    "cg",
    "fk",
    "kz",
    "fl",
    "fm",
    "ld"
  ],
  "move": [
    {
      "move": [
        0,
        -1
      ],
      "type": 6
    },
    {
      "move": [
        1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        -1,
        0
      ],
      "type": 6
    },
    {
      "move": [
        0,
        1
      ],
      "type": 6
    }
  ],
  "name": "飛将",
  "species": "fm"
});
db.getCollection("koma").insert({
  "_id": ObjectId("52639beae90c10fd0f000000"),
  "move": [
    
  ],
  "name": "量子駒(表)",
  "shortname": "量子",
  "species": "ff"
});
db.getCollection("koma").insert({
  "_id": ObjectId("52639bf5e90c10db0f000000"),
  "move": [
    
  ],
  "name": "量子駒(裏)",
  "shortname": "成量子",
  "species": "fg"
});
