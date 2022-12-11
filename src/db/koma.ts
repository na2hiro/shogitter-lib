import {db} from "./mongoCompat";
const coll = db.getCollection("koma");
export default coll;

/** koma records **/
db.getCollection("koma").insert({
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
  "class": "Unmovable",
  "move": [
    
  ],
  "name": "コイン",
  "species": "bn"
});
db.getCollection("koma").insert({
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
  "class": "Jizaitenno",
  "move": [
    
  ],
  "name": "自在天王",
  "species": "ix"
});
db.getCollection("koma").insert({
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
  "class": "Unmovable",
  "move": [
    
  ],
  "name": "オセロ",
  "shortname": " ",
  "species": "yo"
});
db.getCollection("koma").insert({
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
  "class": "Unmovable",
  "move": [
    
  ],
  "name": "オセロ(白)",
  "shortname": "○",
  "species": "yn"
});
db.getCollection("koma").insert({
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
  "move": [
    
  ],
  "name": "量子駒(表)",
  "shortname": "量子",
  "species": "ff"
});
db.getCollection("koma").insert({
  "move": [
    
  ],
  "name": "量子駒(裏)",
  "shortname": "成量子",
  "species": "fg"
});
