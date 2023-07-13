import {MoveType, VariantName} from "../Koma";

import { Species } from "../Ban";
import { MoveAndPieceType } from "../ShogitterDB";

type KomaInfoMove = { move: [number, number]; type: MoveType | MoveType[] }[];
type KomaInfoChange = { [type: number]: number };
export type KomaInfo = {
  species: string;
  name: string;
  shortname?: string;
  csaname?: string;
  move: KomaInfoMove;
  nifu?: number;
  limit?: { [type: number]: number };
  jumpLimit?: { [type: number]: number };
  /**
   * Move consists of non-positive numbers, which indicates there must be a piece relative to the destination, in the direction closer to the original position
   */
  mustNotBeEmpty?: { [type: number]: MoveAndPieceType | MoveAndPieceType[] };
  mustBeEmpty?: { [type: number]: {moves: [number, number][]} };
  jumpException?: Species[];
  change?: KomaInfoChange;
  status?: {
    [type: number]: {
      move: KomaInfoMove;
      change: KomaInfoChange;
    };
  };
  initial?: Partial<KomaInfo>
  /**
   * Class name for custom logic
   */
  class?: VariantName;
  /**
   * Finish the move when capture
   */
  stopWhenCapture?: boolean;
};

const koma: { [species: string]: KomaInfo } = {
  aa: {
    species: "aa",
    name: "歩兵",
    shortname: "歩",
    csaname: "FU",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
    ],
    nifu: 2,
  },
  ab: {
    species: "ab",
    name: "香車",
    shortname: "香",
    csaname: "KY",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
    ],
  },
  ac: {
    species: "ac",
    name: "桂馬",
    shortname: "桂",
    csaname: "KE",
    move: [
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
    ],
  },
  ad: {
    species: "ad",
    name: "銀将",
    shortname: "銀",
    csaname: "GI",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ae: {
    species: "ae",
    name: "金将",
    shortname: "金",
    csaname: "KI",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  af: {
    species: "af",
    name: "角行",
    shortname: "角",
    csaname: "KA",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ag: {
    species: "ag",
    name: "飛車",
    shortname: "飛",
    csaname: "HI",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  ah: {
    species: "ah",
    name: "王将",
    shortname: "玉",
    csaname: "OU",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ai: {
    species: "ai",
    name: "と金",
    shortname: "と",
    csaname: "TO",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  aj: {
    species: "aj",
    name: "成香",
    csaname: "NY",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  ak: {
    species: "ak",
    name: "成桂",
    csaname: "NK",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  al: {
    species: "al",
    name: "成銀",
    csaname: "NG",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  am: {
    species: "am",
    name: "竜馬",
    shortname: "馬",
    csaname: "UM",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  an: {
    species: "an",
    name: "竜王",
    shortname: "龍",
    csaname: "RY",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ao: {
    species: "ao",
    name: "銅将",
    shortname: "銅",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  ap: {
    species: "ap",
    name: "鉄将",
    shortname: "鉄",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
    ],
  },
  aq: {
    species: "aq",
    name: "横行",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
    ],
  },
  ar: {
    species: "ar",
    name: "猛虎",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  as: {
    species: "as",
    name: "飛龍",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  at: {
    species: "at",
    name: "奔車",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  au: {
    species: "au",
    name: "注人",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  av: {
    species: "av",
    name: "鵬",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  aw: {
    species: "aw",
    name: "鶴",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ax: {
    species: "ax",
    name: "雉",
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ay: {
    species: "ay",
    name: "鶉",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  az: {
    species: "az",
    name: "鶉",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ba: {
    species: "ba",
    name: "鷹",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  bb: {
    species: "bb",
    name: "燕",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
    ],
    nifu: 3,
  },
  bc: {
    species: "bc",
    name: "鵰",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  bd: {
    species: "bd",
    name: "雁",
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [0, 2],
        type: 1,
      },
    ],
  },
  be: {
    species: "be",
    name: "八方桂",
    move: [
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [2, -1],
        type: 1,
      },
      {
        move: [-2, -1],
        type: 1,
      },
      {
        move: [2, 1],
        type: 1,
      },
      {
        move: [-2, 1],
        type: 1,
      },
      {
        move: [1, 2],
        type: 1,
      },
      {
        move: [-1, 2],
        type: 1,
      },
    ],
  },
  bf: {
    species: "bf",
    name: "八方成桂",
    move: [
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [2, -1],
        type: 1,
      },
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [-2, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [2, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-2, 1],
        type: 1,
      },
      {
        move: [1, 2],
        type: 1,
      },
      {
        move: [-1, 2],
        type: 1,
      },
    ],
  },
  bg: {
    species: "bg",
    name: "ひよこ",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
    ],
  },
  bh: {
    species: "bh",
    name: "きりん",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  bi: {
    species: "bi",
    name: "ぞう",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  bj: {
    species: "bj",
    name: "ライオン",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  bk: {
    species: "bk",
    name: "にわとり",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  bl: {
    change: {
      "8": 0,
    },
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [2, -1],
        type: 1,
      },
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [-2, -1],
        type: 1,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [2, 1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
      {
        move: [-2, 1],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [1, 2],
        type: 1,
      },
      {
        move: [0, 2],
        type: 1,
      },
      {
        move: [-1, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
    name: "獅子",
    species: "bl",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  bn: {
    class: "Unmovable",
    move: [],
    name: "コイン",
    species: "bn",
  },
  bp: {
    species: "bp",
    name: "歩兵(斜)",
    shortname: "歩",
    move: [
      {
        move: [-1, -1],
        type: 1,
      },
    ],
    nifu: 2,
  },
  bq: {
    species: "bq",
    name: "香車(斜)",
    shortname: "香",
    move: [
      {
        move: [-1, -1],
        type: 2,
      },
    ],
  },
  br: {
    species: "br",
    name: "桂馬(斜)",
    shortname: "桂",
    move: [
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [-2, -1],
        type: 1,
      },
    ],
  },
  bs: {
    species: "bs",
    name: "銀将(斜)",
    shortname: "銀",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  bt: {
    species: "bt",
    name: "金将(斜)",
    shortname: "金",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  bu: {
    species: "bu",
    name: "角行(斜)",
    shortname: "角",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  bv: {
    species: "bv",
    name: "飛車(斜)",
    shortname: "飛",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  bw: {
    species: "bw",
    name: "王将(斜)",
    shortname: "玉",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  bx: {
    species: "bx",
    name: "と金(斜)",
    shortname: "と",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  by: {
    species: "by",
    name: "成香(斜)",
    shortname: "成香",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  bz: {
    species: "bz",
    name: "成桂(斜)",
    shortname: "成桂",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ca: {
    species: "ca",
    name: "成銀(斜)",
    shortname: "成銀",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  cb: {
    species: "cb",
    name: "竜馬(斜)",
    shortname: "馬",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  cc: {
    species: "cc",
    name: "竜王(斜)",
    shortname: "竜",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  cd: {
    species: "cd",
    name: "歩兵(はさみ将棋)",
    shortname: "歩",
    move: [
      {
        move: [0, -1],
        type: 4,
      },
      {
        move: [1, 0],
        type: 4,
      },
      {
        move: [-1, 0],
        type: 4,
      },
      {
        move: [0, 1],
        type: 4,
      },
    ],
  },
  ce: {
    species: "ce",
    name: "と金(はさみ将棋)",
    shortname: "と",
    move: [
      {
        move: [0, -1],
        type: 4,
      },
      {
        move: [1, 0],
        type: 4,
      },
      {
        move: [-1, 0],
        type: 4,
      },
      {
        move: [0, 1],
        type: 4,
      },
    ],
  },
  cf: {
    species: "cf",
    name: "醉象",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  cg: {
    species: "cg",
    name: "太子",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ch: {
    species: "ch",
    name: "京翔",
    shortname: "京",
    move: [
      {
        move: [1, -3],
        type: 1,
      },
      {
        move: [-1, -3],
        type: 1,
      },
    ],
  },
  ci: {
    species: "ci",
    name: "銅将",
    shortname: "銅",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  cj: {
    species: "cj",
    name: "成京",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  ck: {
    species: "ck",
    name: "成銅",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  cl: {
    species: "cl",
    name: "猛豹",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  cm: {
    species: "cm",
    name: "反車",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  cn: {
    species: "cn",
    name: "盲虎",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  co: {
    species: "co",
    name: "麒麟",
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
      {
        move: [0, 2],
        type: 1,
      },
    ],
  },
  cp: {
    species: "cp",
    name: "鳳凰",
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
  },
  cq: {
    species: "cq",
    name: "仲人",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    nifu: 2,
  },
  cr: {
    species: "cr",
    name: "横行",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  cs: {
    species: "cs",
    name: "竪行",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  ct: {
    species: "ct",
    name: "奔王",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  cu: {
    species: "cu",
    name: "白駒",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  cv: {
    species: "cv",
    name: "鯨鯢",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  cw: {
    species: "cw",
    name: "飛鹿",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  cx: {
    species: "cx",
    name: "奔猪",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  cy: {
    species: "cy",
    name: "飛牛",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  cz: {
    change: {
      "8": 0,
    },
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    name: "角鷹",
    species: "cz",
    status: [
      {
        move: [
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  db: {
    change: {
      "11": 0,
      "10": 1,
    },
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 10,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    name: "飛鷲",
    species: "db",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  dd: {
    species: "dd",
    name: "飛車",
    shortname: "飛",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  de: {
    species: "de",
    name: "竪行",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  df: {
    species: "df",
    name: "横行",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  dg: {
    species: "dg",
    name: "角行",
    shortname: "角",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  dh: {
    change: {
      "8": 0,
    },
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [2, -1],
        type: 1,
      },
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [-2, -1],
        type: 1,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [2, 1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
      {
        move: [-2, 1],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [1, 2],
        type: 1,
      },
      {
        move: [0, 2],
        type: 1,
      },
      {
        move: [-1, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
    name: "獅子",
    species: "dh",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 8,
          },
          {
            move: [0, -1],
            type: 8,
          },
          {
            move: [-1, -1],
            type: 8,
          },
          {
            move: [1, 0],
            type: 8,
          },
          {
            move: [-1, 0],
            type: 8,
          },
          {
            move: [1, 1],
            type: 8,
          },
          {
            move: [0, 1],
            type: 8,
          },
          {
            move: [-1, 1],
            type: 8,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  dj: {
    species: "dj",
    name: "奔王",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  dk: {
    species: "dk",
    name: "酔象",
    shortname: "象",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  dl: {
    species: "dl",
    name: "竜馬",
    shortname: "馬",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  dm: {
    species: "dm",
    name: "竜王",
    shortname: "竜",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  do: {
    species: "do",
    name: "金将",
    shortname: "金",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  dp: {
    species: "dp",
    name: "鉄将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
    ],
  },
  dq: {
    species: "dq",
    name: "石将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
    ],
  },
  dr: {
    species: "dr",
    name: "悪狼",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
    ],
  },
  ds: {
    species: "ds",
    name: "嗔猪",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  dt: {
    species: "dt",
    name: "猫刄",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  du: {
    species: "du",
    name: "猛牛",
    move: [
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  dv: {
    species: "dv",
    name: "飛龍",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  dw: {
    species: "dw",
    name: "靏玉",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  dx: {
    species: "dx",
    name: "風馬",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  dy: {
    species: "dy",
    name: "登猿",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  dz: {
    species: "dz",
    name: "鴟行",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ea: {
    species: "ea",
    name: "鶏飛",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
    ],
  },
  eb: {
    species: "eb",
    name: "猛鹿",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ec: {
    species: "ec",
    name: "猛狼",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  ed: {
    species: "ed",
    name: "鳫飛",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  ee: {
    species: "ee",
    name: "烏行",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ef: {
    species: "ef",
    name: "盲犬",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  eg: {
    species: "eg",
    name: "牛車",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
    ],
  },
  eh: {
    species: "eh",
    name: "雲鷲",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  ei: {
    species: "ei",
    name: "燕羽",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  ej: {
    species: "ej",
    name: "飛鷹",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ek: {
    species: "ek",
    name: "走兎",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  el: {
    species: "el",
    name: "隠狐",
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [0, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
  },
  em: {
    species: "em",
    name: "萑歩",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
    ],
  },
  en: {
    species: "en",
    name: "天馬",
    move: [
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [1, 2],
        type: 1,
      },
      {
        move: [-1, 2],
        type: 1,
      },
    ],
  },
  eo: {
    species: "eo",
    name: "猛鹿",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ep: {
    species: "ep",
    name: "雲鷲",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  eq: {
    species: "eq",
    name: "延鷹",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  er: {
    species: "er",
    name: "行猪",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  es: {
    species: "es",
    name: "熊眼",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  et: {
    species: "et",
    name: "燕羽",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  eu: {
    species: "eu",
    name: "飛鷹",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ev: {
    species: "ev",
    name: "猛狼",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  ew: {
    species: "ew",
    name: "歬牛",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ex: {
    species: "ex",
    name: "燕行",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  ey: {
    species: "ey",
    name: "鶏鷹",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ez: {
    species: "ez",
    name: "隠狐",
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [0, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
  },
  fa: {
    species: "fa",
    name: "金鳥",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  fb: {
    species: "fb",
    name: "車兵",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  fc: {
    change: {
      "8": 0,
    },
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [2, -1],
        type: 1,
      },
      {
        move: [1, -1],
        type: [8, 2],
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: [8, 2],
      },
      {
        move: [-2, -1],
        type: 1,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [2, 1],
        type: 1,
      },
      {
        move: [1, 1],
        type: [8, 2],
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: [8, 2],
      },
      {
        move: [-2, 1],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [1, 2],
        type: 1,
      },
      {
        move: [0, 2],
        type: 1,
      },
      {
        move: [-1, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
    name: "獅鷹",
    species: "fc",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  fd: {
    species: "fd",
    name: "奔鷲",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 101,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 101,
      },
      {
        move: [-1, 0],
        type: 101,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 101,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  fe: {
    change: {
      "8": 0,
    },
    move: [
      {
        move: [1, -1],
        type: [8, 2],
      },
      {
        move: [0, -1],
        type: [8, 2],
      },
      {
        move: [-1, -1],
        type: [8, 2],
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: [8, 2],
      },
      {
        move: [0, 1],
        type: [8, 2],
      },
      {
        move: [-1, 1],
        type: [8, 2],
      },
    ],
    name: "火鬼",
    species: "fe",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": 1,
        },
      },
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
    stopWhenCapture: true,
  },
  ff: {
    move: [],
    name: "量子駒(表)",
    shortname: "量子",
    species: "ff",
  },
  fg: {
    move: [],
    name: "量子駒(裏)",
    shortname: "成量子",
    species: "fg",
  },
  fh: {
    species: "fh",
    name: "水牛",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  fi: {
    species: "fi",
    name: "竪兵",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  fj: {
    species: "fj",
    name: "横兵",
    move: [
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  fk: {
    species: "fk",
    name: "大将",
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [0, -1],
        type: 6,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 6,
      },
      {
        move: [-1, 0],
        type: 6,
      },
      {
        move: [1, 1],
        type: 6,
      },
      {
        move: [0, 1],
        type: 6,
      },
      {
        move: [-1, 1],
        type: 6,
      },
    ],
    jumpException: ["ah", "cg", "fk", "kz"],
  },
  fl: {
    change: {
      "8": 0,
    },
    jumpException: ["ah", "cg", "fk", "kz", "fl"],
    move: [
      {
        move: [1, -1],
        type: [6, 8],
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: [6, 8],
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: [6, 8],
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: [6, 8],
      },
    ],
    name: "副将",
    species: "fl",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": 1,
        },
      },
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
    stopWhenCapture: true,
  },
  fm: {
    jumpException: ["ah", "cg", "fk", "kz", "fl", "fm", "ld"],
    move: [
      {
        move: [0, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 6,
      },
      {
        move: [-1, 0],
        type: 6,
      },
      {
        move: [0, 1],
        type: 6,
      },
    ],
    name: "飛将",
    species: "fm",
  },
  fn: {
    jumpException: ["ah", "cg", "fk", "kz", "fl", "fm", "ld", "fn", "le"],
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 1],
        type: 6,
      },
      {
        move: [-1, 1],
        type: 6,
      },
    ],
    name: "角将",
    species: "fn",
  },
  fo: {
    species: "fo",
    name: "犬",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  fp: {
    change: {
      "10": 0,
      "11": 1,
      "12": 2,
      "13": 3,
      "14": 4,
      "15": 5,
      "16": 6,
      "17": 7,
    },
    limit: {
      "18": 2,
    },
    move: [
      {
        move: [1, -1],
        type: [2, 10],
      },
      {
        move: [0, -1],
        type: 11,
      },
      {
        move: [-1, -1],
        type: [2, 12],
      },
      {
        move: [1, 0],
        type: [18, 13],
      },
      {
        move: [-1, 0],
        type: [18, 14],
      },
      {
        move: [1, 1],
        type: [2, 15],
      },
      {
        move: [0, 1],
        type: 16,
      },
      {
        move: [-1, 1],
        type: [2, 17],
      },
    ],
    mustNotBeEmpty: {
      "10": {
        move: [0, 0],
        type: 2,
      },
      "11": {
        move: [0, 0],
        type: 2,
      },
      "12": {
        move: [0, 0],
        type: 2,
      },
      "13": {
        move: [0, 0],
        type: 2,
      },
      "14": {
        move: [0, 0],
        type: 2,
      },
      "15": {
        move: [0, 0],
        type: 2,
      },
      "16": {
        move: [0, 0],
        type: 2,
      },
      "17": {
        move: [0, 0],
        type: 2,
      },
    },
    name: "四天王",
    nopass: true,
    skip: {
      "2": 1,
      "18": 1,
    },
    species: "fp",
    status: [
      {
        change: {
          "1": -1,
        },
        move: [
          {
            move: [-1, 1],
            type: 1,
          },
        ],
      },
      {
        change: {
          "1": -1,
        },
        move: [
          {
            move: [0, 1],
            type: 1,
          },
        ],
      },
      {
        change: {
          "1": -1,
        },
        move: [
          {
            move: [1, 1],
            type: 1,
          },
        ],
      },
      {
        change: {
          "1": -1,
        },
        move: [
          {
            move: [-1, 0],
            type: 1,
          },
        ],
      },
      {
        change: {
          "1": -1,
        },
        move: [
          {
            move: [1, 0],
            type: 1,
          },
        ],
      },
      {
        change: {
          "1": -1,
        },
        move: [
          {
            move: [-1, -1],
            type: 1,
          },
        ],
      },
      {
        change: {
          "1": -1,
        },
        move: [
          {
            move: [0, -1],
            type: 1,
          },
        ],
      },
      {
        change: {
          "1": -1,
        },
        move: [
          {
            move: [1, -1],
            type: 1,
          },
        ],
      },
    ],
  },
  fq: {
    species: "fq",
    name: "雜将",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  fr: {
    initial: {
      move: [
        {
          move: [1, -1],
          type: 5,
        },
        {
          move: [0, -1],
          type: 4,
        },
        {
          move: [-1, -1],
          type: 5,
        },
      ],
      limit: {
        "4": 2,
      },
    },
    move: [
      {
        move: [1, -1],
        type: 5,
      },
      {
        move: [0, -1],
        type: 3,
      },
      {
        move: [-1, -1],
        type: 5,
      },
    ],
    name: "ポーン",
    species: "fr",
  },
  ft: {
    species: "ft",
    name: "クイーン",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  fx: {
    species: "fx",
    name: "右将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  fy: {
    species: "fy",
    name: "左将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  fz: {
    species: "fz",
    name: "奔獏",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  ga: {
    species: "ga",
    name: "奔鬼",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  gb: {
    species: "gb",
    name: "方行",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  gc: {
    species: "gc",
    name: "走車",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  gd: {
    limit: {
      "10": 2,
      "11": 5,
    },
    move: [
      {
        move: [1, -1],
        type: 10,
      },
      {
        move: [0, -1],
        type: 11,
      },
      {
        move: [-1, -1],
        type: 10,
      },
      {
        move: [1, 0],
        type: 11,
      },
      {
        move: [-1, 0],
        type: 11,
      },
      {
        move: [1, 1],
        type: 10,
      },
      {
        move: [0, 1],
        type: 11,
      },
      {
        move: [-1, 1],
        type: 10,
      },
    ],
    name: "夜叉",
    species: "gd",
  },
  ge: {
    limit: {
      "10": 2,
      "11": 5,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 10,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 10,
      },
      {
        move: [-1, 0],
        type: 10,
      },
      {
        move: [1, 1],
        type: 11,
      },
      {
        move: [0, 1],
        type: 10,
      },
      {
        move: [-1, 1],
        type: 11,
      },
    ],
    name: "鳩槃",
    species: "ge",
  },
  gf: {
    change: {
      "2": 0,
    },
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    name: "天狗",
    species: "gf",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 2,
          },
          {
            move: [-1, -1],
            type: 2,
          },
          {
            move: [1, 1],
            type: 2,
          },
          {
            move: [-1, 1],
            type: 2,
          },
        ],
        change: {
          "2": -1,
        },
      },
    ],
  },
  gh: {
    change: {
      "2": 0,
    },
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    name: "鉤行",
    species: "gh",
    status: [
      {
        move: [
          {
            move: [0, -1],
            type: 2,
          },
          {
            move: [1, 0],
            type: 2,
          },
          {
            move: [-1, 0],
            type: 2,
          },
          {
            move: [0, 1],
            type: 2,
          },
        ],
        change: {
          "2": -1,
        },
      },
    ],
  },
  gj: {
    species: "gj",
    name: "近王",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  gk: {
    species: "gk",
    name: "行鳥",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  gl: {
    species: "gl",
    name: "踊鹿",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  gm: {
    species: "gm",
    name: "老鼠",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  gn: {
    species: "gn",
    name: "盲猿",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  go: {
    change: {
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
      "25": 11,
    },
    move: [
      {
        move: [3, -3],
        type: 28,
      },
      {
        move: [0, -3],
        type: 27,
      },
      {
        move: [-3, -3],
        type: 28,
      },
      {
        move: [2, -2],
        type: 21,
      },
      {
        move: [0, -2],
        type: 20,
      },
      {
        move: [-2, -2],
        type: 19,
      },
      {
        move: [1, -1],
        type: 13,
      },
      {
        move: [0, -1],
        type: 12,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [3, 0],
        type: 26,
      },
      {
        move: [2, 0],
        type: 22,
      },
      {
        move: [1, 0],
        type: 14,
      },
      {
        move: [-1, 0],
        type: 10,
      },
      {
        move: [-2, 0],
        type: 18,
      },
      {
        move: [-3, 0],
        type: 26,
      },
      {
        move: [1, 1],
        type: 15,
      },
      {
        move: [0, 1],
        type: 16,
      },
      {
        move: [-1, 1],
        type: 17,
      },
      {
        move: [2, 2],
        type: 23,
      },
      {
        move: [0, 2],
        type: 24,
      },
      {
        move: [-2, 2],
        type: 25,
      },
      {
        move: [3, 3],
        type: 28,
      },
      {
        move: [0, 3],
        type: 27,
      },
      {
        move: [-3, 3],
        type: 28,
      },
    ],
    mustNotBeEmpty: {
      "18": {
        move: [-1, 0],
        type: 1,
      },
      "22": {
        move: [-1, 0],
        type: 1,
      },
      "20": {
        move: [0, -1],
        type: 1,
      },
      "24": {
        move: [0, -1],
        type: 1,
      },
      "19": {
        move: [-1, -1],
        type: 1,
      },
      "21": {
        move: [-1, -1],
        type: 1,
      },
      "23": {
        move: [-1, -1],
        type: 1,
      },
      "25": {
        move: [-1, -1],
        type: 1,
      },
      "26": [
        {
          move: [-1, 0],
          type: 1,
        },
        {
          move: [-2, 0],
          type: 1,
        },
      ],
      "27": [
        {
          move: [0, -1],
          type: 1,
        },
        {
          move: [0, -2],
          type: 1,
        },
      ],
      "28": [
        {
          move: [-1, -1],
          type: 1,
        },
        {
          move: [-2, -2],
          type: 1,
        },
      ],
    },
    name: "狛犬",
    species: "go",
    status: [
      {
        move: [
          {
            move: [-1, 0],
            type: 10,
          },
          {
            move: [1, 0],
            type: 11,
          },
        ],
        change: {
          "10": 8,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [-1, -1],
            type: 10,
          },
          {
            move: [1, 1],
            type: 11,
          },
        ],
        change: {
          "10": 9,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [0, -1],
            type: 10,
          },
          {
            move: [0, 1],
            type: 11,
          },
        ],
        change: {
          "10": 10,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, -1],
            type: 10,
          },
          {
            move: [-1, 1],
            type: 11,
          },
        ],
        change: {
          "10": 11,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, 0],
            type: 10,
          },
          {
            move: [-1, 0],
            type: 11,
          },
        ],
        change: {
          "10": 8,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, 1],
            type: 10,
          },
          {
            move: [-1, -1],
            type: 11,
          },
        ],
        change: {
          "10": 9,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [0, 1],
            type: 10,
          },
          {
            move: [0, -1],
            type: 11,
          },
        ],
        change: {
          "10": 10,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [-1, 1],
            type: 10,
          },
          {
            move: [1, -1],
            type: 11,
          },
        ],
        change: {
          "10": 11,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  hb: {
    limit: {
      "10": 2,
      "11": 3,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 10,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 11,
      },
      {
        move: [0, 1],
        type: 10,
      },
      {
        move: [-1, 1],
        type: 11,
      },
    ],
    name: "大龍",
    species: "hb",
  },
  hc: {
    change: {
      "2": 0,
    },
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    name: "天狗",
    species: "hc",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 2,
          },
          {
            move: [-1, -1],
            type: 2,
          },
          {
            move: [1, 1],
            type: 2,
          },
          {
            move: [-1, 1],
            type: 2,
          },
        ],
        change: {
          "2": -1,
        },
      },
    ],
  },
  he: {
    limit: {
      "11": 2,
      "10": 3,
    },
    move: [
      {
        move: [1, -1],
        type: 10,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 10,
      },
      {
        move: [1, 0],
        type: 11,
      },
      {
        move: [-1, 0],
        type: 11,
      },
      {
        move: [1, 1],
        type: 10,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 10,
      },
    ],
    name: "金翅",
    species: "he",
  },
  hf: {
    species: "hf",
    name: "古鵄",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hg: {
    species: "hg",
    name: "毒蛇",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hh: {
    limit: {
      "11": 2,
      "10": 3,
    },
    move: [
      {
        move: [0, -1],
        type: 11,
      },
      {
        move: [3, 0],
        type: 1,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [-3, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 10,
      },
      {
        move: [0, 1],
        type: 11,
      },
      {
        move: [-1, 1],
        type: 10,
      },
    ],
    name: "大龍",
    species: "hh",
  },
  hi: {
    species: "hi",
    name: "馬麟",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hj: {
    species: "hj",
    name: "変狸",
    move: [
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hk: {
    species: "hk",
    name: "変狐",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hl: {
    limit: {
      "11": 2,
      "10": 3,
    },
    move: [
      {
        move: [1, -1],
        type: 10,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 10,
      },
      {
        move: [1, 0],
        type: 11,
      },
      {
        move: [-1, 0],
        type: 11,
      },
      {
        move: [1, 1],
        type: 10,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 10,
      },
    ],
    name: "金翅",
    species: "hl",
  },
  hm: {
    species: "hm",
    name: "木将",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hn: {
    species: "hn",
    name: "東夷",
    move: [
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ho: {
    species: "ho",
    name: "南蛮",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hp: {
    species: "hp",
    name: "西戎",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hq: {
    species: "hq",
    name: "北狄",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hr: {
    species: "hr",
    name: "白象",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hs: {
    species: "hs",
    name: "香象",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ht: {
    species: "ht",
    name: "青龍",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hu: {
    species: "hu",
    name: "白虎",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hv: {
    species: "hv",
    name: "前旗",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hw: {
    limit: {
      "8": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    name: "猛虎",
    species: "hw",
  },
  hx: {
    species: "hx",
    name: "猛熊",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  hy: {
    species: "hy",
    name: "右車",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  hz: {
    species: "hz",
    name: "左車",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ia: {
    species: "ia",
    name: "キ犬",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  ib: {
    species: "ib",
    name: "キ犬",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  ic: {
    species: "ic",
    name: "仙鶴",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  id: {
    species: "id",
    name: "山母",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ie: {
    change: {
      "10": 0,
    },
    limit: {
      "8": 3,
    },
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [2, -1],
        type: 1,
      },
      {
        move: [1, -1],
        type: [10, 8],
      },
      {
        move: [0, -1],
        type: [10, 8],
      },
      {
        move: [-1, -1],
        type: [10, 8],
      },
      {
        move: [-2, -1],
        type: 1,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: [10, 8],
      },
      {
        move: [-1, 0],
        type: [10, 8],
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [2, 1],
        type: 1,
      },
      {
        move: [1, 1],
        type: [10, 8],
      },
      {
        move: [0, 1],
        type: [10, 8],
      },
      {
        move: [-1, 1],
        type: [10, 8],
      },
      {
        move: [-2, 1],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [1, 2],
        type: 1,
      },
      {
        move: [0, 2],
        type: 1,
      },
      {
        move: [-1, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
    name: "奮迅",
    species: "ie",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  ig: {
    species: "ig",
    name: "大象",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ih: {
    species: "ih",
    name: "無明",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
    ],
  },
  ii: {
    species: "ii",
    name: "提婆",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ij: {
    species: "ij",
    name: "瓦将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  ik: {
    species: "ik",
    name: "土将",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  il: {
    species: "il",
    name: "臥龍",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  im: {
    species: "im",
    name: "蟠蛇",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  in: {
    species: "in",
    name: "淮鶏",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  io: {
    species: "io",
    name: "古猿",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ip: {
    species: "ip",
    name: "盲熊",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  iq: {
    species: "iq",
    name: "金剛",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  ir: {
    species: "ir",
    name: "力士",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  is: {
    species: "is",
    name: "羅刹",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  it: {
    species: "it",
    name: "驢馬",
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [0, 2],
        type: 1,
      },
    ],
  },
  iu: {
    change: {
      "2": 0,
    },
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    name: "摩羯",
    species: "iu",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 2,
          },
          {
            move: [-1, -1],
            type: 2,
          },
          {
            move: [1, 1],
            type: 2,
          },
          {
            move: [-1, 1],
            type: 2,
          },
        ],
        change: {
          "2": -1,
        },
      },
    ],
  },
  iw: {
    species: "iw",
    name: "横飛",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ix: {
    class: "Jizaitenno",
    move: [],
    name: "自在天王",
    species: "ix",
  },
  iy: {
    species: "iy",
    name: "王子",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  iz: {
    change: {
      "8": 0,
    },
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [2, -1],
        type: 1,
      },
      {
        move: [1, -1],
        type: [8, 2],
      },
      {
        move: [0, -1],
        type: [8, 2],
      },
      {
        move: [-1, -1],
        type: [8, 2],
      },
      {
        move: [-2, -1],
        type: 1,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: [8, 2],
      },
      {
        move: [-1, 0],
        type: [8, 2],
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [2, 1],
        type: 1,
      },
      {
        move: [1, 1],
        type: [8, 2],
      },
      {
        move: [0, 1],
        type: [8, 2],
      },
      {
        move: [-1, 1],
        type: [8, 2],
      },
      {
        move: [-2, 1],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [1, 2],
        type: 1,
      },
      {
        move: [0, 2],
        type: 1,
      },
      {
        move: [-1, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
    name: "法性",
    species: "iz",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  jb: {
    change: {
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
      "25": 11,
    },
    move: [
      {
        move: [3, -3],
        type: 28,
      },
      {
        move: [0, -3],
        type: 27,
      },
      {
        move: [-3, -3],
        type: 28,
      },
      {
        move: [2, -2],
        type: 21,
      },
      {
        move: [0, -2],
        type: 20,
      },
      {
        move: [-2, -2],
        type: 19,
      },
      {
        move: [1, -1],
        type: [13, 2],
      },
      {
        move: [0, -1],
        type: [12, 2],
      },
      {
        move: [-1, -1],
        type: [11, 2],
      },
      {
        move: [3, 0],
        type: 26,
      },
      {
        move: [2, 0],
        type: 22,
      },
      {
        move: [1, 0],
        type: [14, 2],
      },
      {
        move: [-1, 0],
        type: [10, 2],
      },
      {
        move: [-2, 0],
        type: 18,
      },
      {
        move: [-3, 0],
        type: 26,
      },
      {
        move: [1, 1],
        type: [15, 2],
      },
      {
        move: [0, 1],
        type: [16, 2],
      },
      {
        move: [-1, 1],
        type: [17, 2],
      },
      {
        move: [2, 2],
        type: 23,
      },
      {
        move: [0, 2],
        type: 24,
      },
      {
        move: [-2, 2],
        type: 25,
      },
      {
        move: [3, 3],
        type: 28,
      },
      {
        move: [0, 3],
        type: 27,
      },
      {
        move: [-3, 3],
        type: 28,
      },
    ],
    mustNotBeEmpty: {
      "18": {
        move: [-1, 0],
        type: 1,
      },
      "22": {
        move: [-1, 0],
        type: 1,
      },
      "20": {
        move: [0, -1],
        type: 1,
      },
      "24": {
        move: [0, -1],
        type: 1,
      },
      "19": {
        move: [-1, -1],
        type: 1,
      },
      "21": {
        move: [-1, -1],
        type: 1,
      },
      "23": {
        move: [-1, -1],
        type: 1,
      },
      "25": {
        move: [-1, -1],
        type: 1,
      },
      "26": [
        {
          move: [-1, 0],
          type: 1,
        },
        {
          move: [-2, 0],
          type: 1,
        },
      ],
      "27": [
        {
          move: [0, -1],
          type: 1,
        },
        {
          move: [0, -2],
          type: 1,
        },
      ],
      "28": [
        {
          move: [-1, -1],
          type: 1,
        },
        {
          move: [-2, -2],
          type: 1,
        },
      ],
    },
    name: "教王",
    species: "jb",
    status: [
      {
        move: [
          {
            move: [-1, 0],
            type: 10,
          },
          {
            move: [1, 0],
            type: 11,
          },
        ],
        change: {
          "10": 8,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [-1, -1],
            type: 10,
          },
          {
            move: [1, 1],
            type: 11,
          },
        ],
        change: {
          "10": 9,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [0, -1],
            type: 10,
          },
          {
            move: [0, 1],
            type: 11,
          },
        ],
        change: {
          "10": 10,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, -1],
            type: 10,
          },
          {
            move: [-1, 1],
            type: 11,
          },
        ],
        change: {
          "10": 11,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, 0],
            type: 10,
          },
          {
            move: [-1, 0],
            type: 11,
          },
        ],
        change: {
          "10": 8,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, 1],
            type: 10,
          },
          {
            move: [-1, -1],
            type: 11,
          },
        ],
        change: {
          "10": 9,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [0, 1],
            type: 10,
          },
          {
            move: [0, -1],
            type: 11,
          },
        ],
        change: {
          "10": 10,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [-1, 1],
            type: 10,
          },
          {
            move: [1, -1],
            type: 11,
          },
        ],
        change: {
          "10": 11,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  jo: {
    species: "jo",
    name: "仙鶴",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  jp: {
    species: "jp",
    name: "奔鬼",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  jq: {
    species: "jq",
    name: "白象",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  jr: {
    species: "jr",
    name: "前旗",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  js: {
    species: "js",
    name: "蝙蝠",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  jt: {
    species: "jt",
    name: "奔虎",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ju: {
    species: "ju",
    name: "奔豹",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  jv: {
    species: "jv",
    name: "奔蛇",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  jw: {
    species: "jw",
    name: "奔龍",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  jx: {
    species: "jx",
    name: "奔狼",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
    ],
  },
  jy: {
    species: "jy",
    name: "奔熊",
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  jz: {
    species: "jz",
    name: "奔金",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  ka: {
    species: "ka",
    name: "奔銀",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  kb: {
    species: "kb",
    name: "奔銅",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  kc: {
    species: "kc",
    name: "奔鉄",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
    ],
  },
  kd: {
    species: "kd",
    name: "奔瓦",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  ke: {
    species: "ke",
    name: "奔石",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
    ],
  },
  kf: {
    species: "kf",
    name: "奔土",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  kg: {
    species: "kg",
    name: "奔猫",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  kh: {
    species: "kh",
    name: "奔人",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  ki: {
    initial: {
      limit: {
        "4": 2,
      },
      move: [
        {
          move: [1, -1],
          type: 5,
        },
        {
          move: [0, -1],
          type: 4,
        },
        {
          move: [-1, -1],
          type: 5,
        },
      ],
    },
    move: [
      {
        move: [1, -1],
        type: 5,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 5,
      },
    ],
    name: "ポーン",
    shortname: "ポーン",
    species: "ki",
  },
  kk: {
    species: "kk",
    name: "ナイト",
    move: [
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [2, -1],
        type: 1,
      },
      {
        move: [-2, -1],
        type: 1,
      },
      {
        move: [2, 1],
        type: 1,
      },
      {
        move: [-2, 1],
        type: 1,
      },
      {
        move: [1, 2],
        type: 1,
      },
      {
        move: [-1, 2],
        type: 1,
      },
    ],
  },
  kl: {
    change: {
      "8": 0,
    },
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    name: "角鷹",
    species: "kl",
    status: [
      {
        move: [
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  kn: {
    change: {
      "11": 0,
      "10": 1,
    },
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 10,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    name: "飛鷲",
    species: "kn",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  kq: {
    species: "kq",
    name: "車兵",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  kr: {
    change: {
      "8": 0,
    },
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [2, -1],
        type: 1,
      },
      {
        move: [1, -1],
        type: [8, 2],
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: [8, 2],
      },
      {
        move: [-2, -1],
        type: 1,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [2, 1],
        type: 1,
      },
      {
        move: [1, 1],
        type: [8, 2],
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: [8, 2],
      },
      {
        move: [-2, 1],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [1, 2],
        type: 1,
      },
      {
        move: [0, 2],
        type: 1,
      },
      {
        move: [-1, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
    name: "獅鷹",
    species: "kr",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  kw: {
    species: "kw",
    name: "水牛",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  kx: {
    species: "kx",
    name: "竪兵",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ky: {
    species: "ky",
    name: "横兵",
    move: [
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  kz: {
    species: "kz",
    name: "大将",
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [0, -1],
        type: 6,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 6,
      },
      {
        move: [-1, 0],
        type: 6,
      },
      {
        move: [1, 1],
        type: 6,
      },
      {
        move: [0, 1],
        type: 6,
      },
      {
        move: [-1, 1],
        type: 6,
      },
    ],
    jumpException: ["ah", "cg", "fk", "kz"],
  },
  ld: {
    jumpException: ["ah", "cg", "fk", "kz", "fl", "fm", "ld"],
    move: [
      {
        move: [0, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 6,
      },
      {
        move: [-1, 0],
        type: 6,
      },
      {
        move: [0, 1],
        type: 6,
      },
    ],
    name: "飛将",
    species: "ld",
  },
  le: {
    jumpException: ["ah", "cg", "fk", "kz", "fl", "fm", "ld", "fn", "le"],
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 1],
        type: 6,
      },
      {
        move: [-1, 1],
        type: 6,
      },
    ],
    name: "角将",
    species: "le",
  },
  lf: {
    change: {
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
      "25": 11,
    },
    move: [
      {
        move: [3, -3],
        type: 28,
      },
      {
        move: [0, -3],
        type: 27,
      },
      {
        move: [-3, -3],
        type: 28,
      },
      {
        move: [2, -2],
        type: 21,
      },
      {
        move: [0, -2],
        type: 20,
      },
      {
        move: [-2, -2],
        type: 19,
      },
      {
        move: [1, -1],
        type: 13,
      },
      {
        move: [0, -1],
        type: 12,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [3, 0],
        type: 26,
      },
      {
        move: [2, 0],
        type: 22,
      },
      {
        move: [1, 0],
        type: 14,
      },
      {
        move: [-1, 0],
        type: 10,
      },
      {
        move: [-2, 0],
        type: 18,
      },
      {
        move: [-3, 0],
        type: 26,
      },
      {
        move: [1, 1],
        type: 15,
      },
      {
        move: [0, 1],
        type: 16,
      },
      {
        move: [-1, 1],
        type: 17,
      },
      {
        move: [2, 2],
        type: 23,
      },
      {
        move: [0, 2],
        type: 24,
      },
      {
        move: [-2, 2],
        type: 25,
      },
      {
        move: [3, 3],
        type: 28,
      },
      {
        move: [0, 3],
        type: 27,
      },
      {
        move: [-3, 3],
        type: 28,
      },
    ],
    mustNotBeEmpty: {
      "18": {
        move: [-1, 0],
        type: 1,
      },
      "22": {
        move: [-1, 0],
        type: 1,
      },
      "20": {
        move: [0, -1],
        type: 1,
      },
      "24": {
        move: [0, -1],
        type: 1,
      },
      "19": {
        move: [-1, -1],
        type: 1,
      },
      "21": {
        move: [-1, -1],
        type: 1,
      },
      "23": {
        move: [-1, -1],
        type: 1,
      },
      "25": {
        move: [-1, -1],
        type: 1,
      },
      "26": [
        {
          move: [-1, 0],
          type: 1,
        },
        {
          move: [-2, 0],
          type: 1,
        },
      ],
      "27": [
        {
          move: [0, -1],
          type: 1,
        },
        {
          move: [0, -2],
          type: 1,
        },
      ],
      "28": [
        {
          move: [-1, -1],
          type: 1,
        },
        {
          move: [-2, -2],
          type: 1,
        },
      ],
    },
    name: "狛犬",
    species: "lf",
    status: [
      {
        move: [
          {
            move: [-1, 0],
            type: 10,
          },
          {
            move: [1, 0],
            type: 11,
          },
        ],
        change: {
          "10": 8,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [-1, -1],
            type: 10,
          },
          {
            move: [1, 1],
            type: 11,
          },
        ],
        change: {
          "10": 9,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [0, -1],
            type: 10,
          },
          {
            move: [0, 1],
            type: 11,
          },
        ],
        change: {
          "10": 10,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, -1],
            type: 10,
          },
          {
            move: [-1, 1],
            type: 11,
          },
        ],
        change: {
          "10": 11,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, 0],
            type: 10,
          },
          {
            move: [-1, 0],
            type: 11,
          },
        ],
        change: {
          "10": 8,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, 1],
            type: 10,
          },
          {
            move: [-1, -1],
            type: 11,
          },
        ],
        change: {
          "10": 9,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [0, 1],
            type: 10,
          },
          {
            move: [0, -1],
            type: 11,
          },
        ],
        change: {
          "10": 10,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [-1, 1],
            type: 10,
          },
          {
            move: [1, -1],
            type: 11,
          },
        ],
        change: {
          "10": 11,
          "11": -1,
        },
      },
      {
        move: [
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  mg: {
    species: "mg",
    name: "猛鷲",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  mh: {
    species: "mh",
    name: "横龍",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  mi: {
    species: "mi",
    name: "金鹿",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  mj: {
    species: "mj",
    name: "銀兎",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  mk: {
    species: "mk",
    name: "羊兵",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
    ],
  },
  ml: {
    change: {
      "2": 0,
    },
    limit: {
      "8": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    name: "孔雀",
    species: "ml",
    status: [
      {
        move: [
          {
            move: [-1, -1],
            type: 2,
          },
          {
            move: [1, 1],
            type: 2,
          },
          {
            move: [1, -1],
            type: 2,
          },
          {
            move: [-1, 1],
            type: 2,
          },
        ],
        change: {
          "2": -1,
        },
      },
    ],
  },
  mo: {
    species: "mo",
    name: "兵士",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  mp: {
    species: "mp",
    name: "朱雀",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  mq: {
    species: "mq",
    name: "玄武",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  mr: {
    species: "mr",
    name: "古鵄",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ms: {
    species: "ms",
    name: "後旗",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  mt: {
    species: "mt",
    name: "中旗",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  mu: {
    species: "mu",
    name: "鳩盤",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  mv: {
    species: "mv",
    name: "地龍",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  mw: {
    species: "mw",
    name: "雨龍",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  mx: {
    species: "mx",
    name: "走馬",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
  },
  my: {
    species: "my",
    name: "奔鬼",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  mz: {
    species: "mz",
    name: "獣曹",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  na: {
    limit: {
      "11": 3,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 11,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 10,
      },
      {
        move: [-1, 0],
        type: 10,
      },
      {
        move: [1, 1],
        type: 11,
      },
      {
        move: [-1, 1],
        type: 11,
      },
    ],
    name: "獣吏",
    species: "na",
  },
  nb: {
    species: "nb",
    name: "山鷲(左)",
    shortname: "山鷲",
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
      {
        move: [2, 2],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  nc: {
    species: "nc",
    name: "山鷲(右)",
    shortname: "山鷲",
    move: [
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  nd: {
    species: "nd",
    name: "飛鷲",
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ne: {
    species: "ne",
    name: "走熊",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  nf: {
    species: "nf",
    name: "奔熊",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ng: {
    species: "ng",
    name: "走虎",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  nh: {
    species: "nh",
    name: "大鳩",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  ni: {
    species: "ni",
    name: "鳩槃",
    move: [
      {
        move: [5, -5],
        type: 10,
      },
      {
        move: [-5, -5],
        type: 10,
      },
      {
        move: [4, -4],
        type: 11,
      },
      {
        move: [-4, -4],
        type: 11,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [4, 4],
        type: 11,
      },
      {
        move: [-4, 4],
        type: 11,
      },
      {
        move: [-3, -3],
        type: 1,
      },
      {
        move: [-3, 3],
        type: 1,
      },
      {
        move: [3, -3],
        type: 1,
      },
      {
        move: [3, 3],
        type: 1,
      },
      {
        move: [5, 5],
        type: 10,
      },
      {
        move: [-5, 5],
        type: 10,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
    ],
    mustBeEmpty: {
      "10": {
        moves: [[-2, -2], [-1, -1]],
      },
      "11": {
        moves: [[-1, -1]],
      },
    },
    limit: {
      "8": 2,
    },
  },
  nj: {
    species: "nj",
    name: "横蛇",
    move: [
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  nk: {
    limit: {
      "11": 5,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 10,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 10,
      },
    ],
    name: "大鱗",
    species: "nk",
  },
  nl: {
    species: "nl",
    name: "走蛇",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  nm: {
    species: "nm",
    name: "走狗",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  nn: {
    species: "nn",
    name: "山鹿",
    move: [
      {
        move: [1, -1],
        type: 10,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 10,
      },
      {
        move: [1, 0],
        type: 11,
      },
      {
        move: [-1, 0],
        type: 11,
      },
      {
        move: [0, 1],
        type: 12,
      },
    ],
    limit: {
      "10": 3,
      "11": 2,
      "12": 4,
    },
  },
  no: {
    species: "no",
    name: "大鹿",
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  np: {
    species: "np",
    name: "森鬼",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  nq: {
    species: "nq",
    name: "雷走",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 4,
    },
  },
  nr: {
    species: "nr",
    name: "雨龍",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ns: {
    species: "ns",
    name: "大龍",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  nt: {
    limit: {
      "11": 3,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 10,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 10,
      },
      {
        move: [-1, 0],
        type: 10,
      },
      {
        move: [1, 1],
        type: 11,
      },
      {
        move: [-1, 1],
        type: 11,
      },
    ],
    name: "禽吏",
    species: "nt",
  },
  nu: {
    limit: {
      "11": 3,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 11,
      },
      {
        move: [-1, 0],
        type: 11,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 10,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    name: "禽鳥",
    species: "nu",
  },
  nv: {
    species: "nv",
    name: "飛燕",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  nw: {
    species: "nw",
    name: "山鳩",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  nx: {
    species: "nx",
    name: "大鳩",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  ny: {
    species: "ny",
    name: "鳳師",
    move: [
      {
        move: [3, -3],
        type: 1,
      },
      {
        move: [-3, -3],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  nz: {
    species: "nz",
    name: "麟師",
    move: [
      {
        move: [0, -3],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
      {
        move: [0, 3],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  oa: {
    limit: {
      "11": 4,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 10,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 10,
      },
    ],
    name: "火龍",
    species: "oa",
  },
  ob: {
    limit: {
      "11": 2,
      "10": 4,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 10,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 10,
      },
    ],
    name: "水龍",
    species: "ob",
  },
  oc: {
    species: "oc",
    name: "奔狗",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  od: {
    species: "od",
    name: "奔犬",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  oe: {
    species: "oe",
    name: "風龍",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  of: {
    species: "of",
    name: "奔龍",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  og: {
    limit: {
      "11": 3,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 11,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 10,
      },
      {
        move: [-1, 0],
        type: 10,
      },
      {
        move: [1, 1],
        type: 11,
      },
      {
        move: [-1, 1],
        type: 11,
      },
    ],
    name: "獣吏",
    species: "og",
  },
  oh: {
    limit: {
      "11": 3,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 11,
      },
      {
        move: [-1, 0],
        type: 11,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 10,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    name: "獣鳥",
    species: "oh",
  },
  oi: {
    species: "oi",
    name: "右龍",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  oj: {
    species: "oj",
    name: "青龍",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ok: {
    species: "ok",
    name: "左龍",
    move: [
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ol: {
    species: "ol",
    name: "朱雀",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  om: {
    species: "om",
    name: "右虎",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  on: {
    species: "on",
    name: "白虎",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  oo: {
    species: "oo",
    name: "左虎",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  op: {
    species: "op",
    name: "玄武",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  oq: {
    species: "oq",
    name: "走狼",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
    ],
  },
  or: {
    species: "or",
    name: "走鹿",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  os: {
    species: "os",
    name: "奔鹿",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ot: {
    species: "ot",
    name: "金車",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ou: {
    species: "ou",
    name: "遊母",
    move: [
      {
        move: [1, -1],
        type: 10,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 10,
      },
      {
        move: [1, 0],
        type: 11,
      },
      {
        move: [-1, 0],
        type: 11,
      },
      {
        move: [1, 1],
        type: 12,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 12,
      },
    ],
    limit: {
      "10": 3,
      "11": 5,
      "12": 2,
    },
  },
  ov: {
    species: "ov",
    name: "林鬼",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ow: {
    species: "ow",
    name: "右鵰",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  ox: {
    species: "ox",
    name: "猛龍",
    move: [
      {
        move: [1, -1],
        type: 100,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 100,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 100,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 100,
      },
    ],
    limit: {
      "8": 2,
    },
    jumpException: ["wz", "cg", "qj", "ql", "xe", "wa", "wc", "ox", "wd"],
  },
  oy: {
    species: "oy",
    name: "大鹿",
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  oz: {
    species: "oz",
    name: "禽曹",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  pa: {
    limit: {
      "11": 3,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 10,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 10,
      },
      {
        move: [-1, 0],
        type: 10,
      },
      {
        move: [1, 1],
        type: 11,
      },
      {
        move: [-1, 1],
        type: 11,
      },
    ],
    name: "禽吏",
    species: "pa",
  },
  pb: {
    species: "pb",
    name: "横猪",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  pc: {
    species: "pc",
    name: "奔猪",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  pd: {
    species: "pd",
    name: "中旗",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  pe: {
    species: "pe",
    name: "前旗",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  pf: {
    species: "pf",
    name: "牛将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  pg: {
    species: "pg",
    name: "奔牛",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ph: {
    species: "ph",
    name: "馬将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  pi: {
    species: "pi",
    name: "奔馬",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  pj: {
    species: "pj",
    name: "狗将",
    move: [
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 4,
    },
  },
  pk: {
    species: "pk",
    name: "奔狗",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  pl: {
    species: "pl",
    name: "鶏将",
    move: [
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 4,
    },
  },
  pm: {
    species: "pm",
    name: "奔鶏",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  pn: {
    limit: {
      "11": 4,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [0, 1],
        type: 10,
      },
    ],
    name: "豚将",
    species: "pn",
  },
  po: {
    species: "po",
    name: "奔豚",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  pp: {
    species: "pp",
    name: "竪熊",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  pq: {
    species: "pq",
    name: "銀車",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  pr: {
    species: "pr",
    name: "鴻翼",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  ps: {
    species: "ps",
    name: "銅車",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  pt: {
    species: "pt",
    name: "銅象",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  pu: {
    species: "pu",
    name: "雲龍",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  pv: {
    species: "pv",
    name: "小旗",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  pw: {
    species: "pw",
    name: "後旗",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  px: {
    species: "px",
    name: "竪虎",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  py: {
    species: "py",
    name: "山鷹",
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  pz: {
    species: "pz",
    name: "角鷹",
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  qa: {
    species: "qa",
    name: "飛猫",
    move: [
      {
        move: [3, -3],
        type: 1,
      },
      {
        move: [0, -3],
        type: 1,
      },
      {
        move: [-3, -3],
        type: 1,
      },
      {
        move: [3, 0],
        type: 1,
      },
      {
        move: [-3, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  qb: {
    species: "qb",
    name: "横狼",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  qc: {
    species: "qc",
    name: "石車",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  qd: {
    species: "qd",
    name: "歩振",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  qe: {
    species: "qe",
    name: "大亀",
    move: [
      {
        move: [0, -3],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
      {
        move: [0, 3],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  qf: {
    species: "qf",
    name: "霊亀",
    move: [
      {
        move: [0, -3],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [3, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [-3, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
      {
        move: [0, 3],
        type: 1,
      },
    ],
  },
  qg: {
    species: "qg",
    name: "小亀",
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
      {
        move: [0, 2],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  qh: {
    species: "qh",
    name: "宝亀",
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
      {
        move: [0, 2],
        type: 1,
      },
    ],
  },
  qi: {
    species: "qi",
    name: "火将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  qj: {
    species: "qj",
    name: "大将",
    move: [
      {
        move: [1, -1],
        type: 100,
      },
      {
        move: [0, -1],
        type: 100,
      },
      {
        move: [-1, -1],
        type: 100,
      },
      {
        move: [1, 0],
        type: 100,
      },
      {
        move: [-1, 0],
        type: 100,
      },
      {
        move: [1, 1],
        type: 100,
      },
      {
        move: [0, 1],
        type: 100,
      },
      {
        move: [-1, 1],
        type: 100,
      },
    ],
    jumpException: ["wz", "cg", "qj"],
  },
  qk: {
    species: "qk",
    name: "水将",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  ql: {
    species: "ql",
    name: "副将",
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 100,
      },
      {
        move: [-1, -1],
        type: 100,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 100,
      },
      {
        move: [-1, 1],
        type: 100,
      },
      {
        move: [0, 2],
        type: 1,
      },
    ],
    jumpException: ["wz", "cg", "qj", "ql", "xe"],
  },
  qm: {
    species: "qm",
    name: "木車",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  qn: {
    species: "qn",
    name: "風鼈",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  qo: {
    species: "qo",
    name: "鵬師",
    move: [
      {
        move: [3, -3],
        type: 1,
      },
      {
        move: [-3, -3],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  qp: {
    species: "qp",
    name: "中師",
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
      {
        move: [0, 2],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  qq: {
    species: "qq",
    name: "横牛",
    move: [
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
    ],
  },
  qr: {
    species: "qr",
    name: "飛牛",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  qs: {
    species: "qs",
    name: "竪狼",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  qt: {
    species: "qt",
    name: "走狼",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
    ],
  },
  qu: {
    species: "qu",
    name: "瓦車",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  qv: {
    species: "qv",
    name: "走瓦",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  qw: {
    species: "qw",
    name: "騎兵",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  qx: {
    species: "qx",
    name: "騎士",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  qy: {
    species: "qy",
    name: "土車",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  qz: {
    species: "qz",
    name: "尺鳥",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ra: {
    species: "ra",
    name: "大師",
    move: [
      {
        move: [3, -3],
        type: 1,
      },
      {
        move: [0, -3],
        type: 1,
      },
      {
        move: [-3, -3],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  rb: {
    species: "rb",
    name: "大旗",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  rc: {
    species: "rc",
    name: "熊兵",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  rd: {
    species: "rd",
    name: "強熊",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  re: {
    species: "re",
    name: "豹兵",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  rf: {
    species: "rf",
    name: "走豹",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
    ],
  },
  rg: {
    species: "rg",
    name: "猪兵",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  rh: {
    species: "rh",
    name: "走猪",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  ri: {
    species: "ri",
    name: "牛兵",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  rj: {
    species: "rj",
    name: "走牛",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  rk: {
    species: "rk",
    name: "馬兵",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  rl: {
    species: "rl",
    name: "走馬",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
  },
  rm: {
    limit: {
      "8": 3,
    },
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    name: "山将",
    species: "rm",
  },
  rn: {
    species: "rn",
    name: "泰山",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  ro: {
    species: "ro",
    name: "川将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  rp: {
    species: "rp",
    name: "淮川",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  rq: {
    species: "rq",
    name: "風将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  rr: {
    species: "rr",
    name: "暴風",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  rs: {
    species: "rs",
    name: "吼犬",
    move: [
      {
        move: [3, -3],
        type: 1,
      },
      {
        move: [0, -3],
        type: 1,
      },
      {
        move: [-3, -3],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [3, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [-3, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
      {
        move: [0, 3],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  rt: {
    species: "rt",
    name: "狛犬",
    move: [
      {
        move: [3, -3],
        type: 1,
      },
      {
        move: [0, -3],
        type: 1,
      },
      {
        move: [-3, -3],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [3, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [-3, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
      {
        move: [3, 3],
        type: 1,
      },
      {
        move: [0, 3],
        type: 1,
      },
      {
        move: [-3, 3],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  ru: {
    limit: {
      "11": 3,
      "10": 5,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 10,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 11,
      },
      {
        move: [-1, 0],
        type: 11,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    name: "弓兵",
    species: "ru",
  },
  rv: {
    species: "rv",
    name: "弓将",
    move: [
      {
        move: [1, -1],
        type: 10,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 10,
      },
      {
        move: [1, 0],
        type: 11,
      },
      {
        move: [-1, 0],
        type: 11,
      },
      {
        move: [0, 1],
        type: 12,
      },
    ],
    limit: {
      "10": 5,
      "11": 3,
      "12": 2,
    },
  },
  rw: {
    species: "rw",
    name: "竪豹",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  rx: {
    limit: {
      "11": 3,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 10,
      },
      {
        move: [-1, 0],
        type: 10,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    name: "大豹",
    species: "rx",
  },
  ry: {
    species: "ry",
    name: "鎗兵",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  rz: {
    limit: {
      "11": 3,
      "10": 2,
    },
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 11,
      },
      {
        move: [-1, 0],
        type: 11,
      },
      {
        move: [0, 1],
        type: 10,
      },
    ],
    name: "鎗将",
    species: "rz",
  },
  sa: {
    species: "sa",
    name: "刀兵",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  sb: {
    species: "sb",
    name: "刀将",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  sc: {
    species: "sc",
    name: "炮兵",
    move: [
      {
        move: [1, -1],
        type: 10,
      },
      {
        move: [0, -1],
        type: 11,
      },
      {
        move: [-1, -1],
        type: 10,
      },
      {
        move: [1, 0],
        type: 12,
      },
      {
        move: [-1, 0],
        type: 12,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "10": 5,
      "11": 7,
      "12": 3,
    },
  },
  sd: {
    limit: {
      "11": 3,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 11,
      },
      {
        move: [-1, 0],
        type: 11,
      },
      {
        move: [0, 1],
        type: 10,
      },
    ],
    name: "炮将",
    species: "sd",
  },
  se: {
    species: "se",
    name: "竪馬",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  sf: {
    species: "sf",
    name: "竪狗",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  sg: {
    species: "sg",
    name: "豹王",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  sh: {
    limit: {
      "11": 5,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 10,
      },
      {
        move: [-1, 0],
        type: 10,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    name: "弩兵",
    species: "sh",
  },
  si: {
    species: "si",
    name: "弩将",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  sj: {
    species: "sj",
    name: "横猿",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  sk: {
    species: "sk",
    name: "左車",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
    ],
  },
  sl: {
    species: "sl",
    name: "左鉄車",
    move: [
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  sm: {
    species: "sm",
    name: "火牛",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  sn: {
    species: "sn",
    name: "角鷹",
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  so: {
    species: "so",
    name: "大鷹",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 6,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  sp: {
    species: "sp",
    name: "飛鷲",
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  sq: {
    species: "sq",
    name: "大鷲",
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  sr: {
    species: "sr",
    name: "猛虎",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
    ],
  },
  ss: {
    species: "ss",
    name: "大虎",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  st: {
    species: "st",
    name: "狛犬",
    move: [
      {
        move: [3, -3],
        type: 1,
      },
      {
        move: [0, -3],
        type: 1,
      },
      {
        move: [-3, -3],
        type: 1,
      },
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [3, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [-3, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
      {
        move: [3, 3],
        type: 1,
      },
      {
        move: [0, 3],
        type: 1,
      },
      {
        move: [-3, 3],
        type: 1,
      },
    ],
  },
  su: {
    species: "su",
    name: "大象",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 6,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 6,
      },
      {
        move: [-1, 0],
        type: 6,
      },
      {
        move: [1, 1],
        type: 6,
      },
      {
        move: [0, 1],
        type: 6,
      },
      {
        move: [-1, 1],
        type: 6,
      },
    ],
    limit: {
      "8": 3,
    },
    jumpLimit: {
      "6": 3,
    },
  },
  sv: {
    species: "sv",
    name: "右車",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  sw: {
    species: "sw",
    name: "右鉄車",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  sx: {
    species: "sx",
    name: "四天王",
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [0, -1],
        type: 6,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 6,
      },
      {
        move: [-1, 0],
        type: 6,
      },
      {
        move: [1, 1],
        type: 6,
      },
      {
        move: [0, 1],
        type: 6,
      },
      {
        move: [-1, 1],
        type: 6,
      },
    ],
  },
  sy: {
    species: "sy",
    name: "前旗",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  sz: {
    species: "sz",
    name: "歬牛",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ta: {
    species: "ta",
    name: "白象",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  tb: {
    species: "tb",
    name: "青龍",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  tc: {
    species: "tc",
    name: "神龍",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  td: {
    species: "td",
    name: "変狸",
    move: [
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  te: {
    species: "te",
    name: "雲鷲",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  tf: {
    species: "tf",
    name: "横龍",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
    ],
  },
  tg: {
    species: "tg",
    name: "盲熊",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  th: {
    species: "th",
    name: "老鼠",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ti: {
    species: "ti",
    name: "寺鳥",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  tj: {
    species: "tj",
    name: "方行",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  tk: {
    species: "tk",
    name: "強車",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  tl: {
    species: "tl",
    name: "蟠龍",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  tm: {
    species: "tm",
    name: "臥龍",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  tn: {
    change: {
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
      "23": 13,
    },
    move: [
      {
        move: [3, -3],
        type: 23,
      },
      {
        move: [-3, -3],
        type: 22,
      },
      {
        move: [2, -2],
        type: 21,
      },
      {
        move: [0, -2],
        type: 20,
      },
      {
        move: [-2, -2],
        type: 19,
      },
      {
        move: [1, -1],
        type: [2, 13],
      },
      {
        move: [0, -1],
        type: [2, 12],
      },
      {
        move: [-1, -1],
        type: [2, 11],
      },
      {
        move: [2, 0],
        type: 18,
      },
      {
        move: [1, 0],
        type: [2, 14],
      },
      {
        move: [-1, 0],
        type: [2, 10],
      },
      {
        move: [-2, 0],
        type: 18,
      },
      {
        move: [1, 1],
        type: [2, 15],
      },
      {
        move: [0, 1],
        type: [2, 16],
      },
      {
        move: [-1, 1],
        type: [2, 17],
      },
      {
        move: [2, 2],
        type: 22,
      },
      {
        move: [0, 2],
        type: 20,
      },
      {
        move: [-2, 2],
        type: 23,
      },
    ],
    name: "奔鷲",
    species: "tn",
    status: [
      {
        move: [
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 18,
          },
          {
            move: [-2, 0],
            type: 1,
          },
        ],
        change: {
          "1": -1,
          "18": 8,
        },
      },
      {
        move: [
          {
            move: [-3, -3],
            type: 1,
          },
          {
            move: [-2, -2],
            type: 22,
          },
          {
            move: [-1, -1],
            type: 19,
          },
          {
            move: [1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
          "22": 12,
          "19": 9,
        },
      },
      {
        move: [
          {
            move: [0, -2],
            type: 1,
          },
          {
            move: [0, -1],
            type: 20,
          },
          {
            move: [0, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
          "20": 10,
        },
      },
      {
        move: [
          {
            move: [3, -3],
            type: 1,
          },
          {
            move: [2, -2],
            type: 23,
          },
          {
            move: [1, -1],
            type: 21,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
          "23": 13,
          "21": 11,
        },
      },
      {
        move: [
          {
            move: [2, 0],
            type: 1,
          },
          {
            move: [1, 0],
            type: 18,
          },
          {
            move: [-1, 0],
            type: 1,
          },
        ],
        change: {
          "1": -1,
          "18": 8,
        },
      },
      {
        move: [
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 1],
            type: 22,
          },
          {
            move: [2, 2],
            type: 1,
          },
        ],
        change: {
          "1": -1,
          "22": 12,
        },
      },
      {
        move: [
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 20,
          },
          {
            move: [0, 2],
            type: 1,
          },
        ],
        change: {
          "1": -1,
          "20": 10,
        },
      },
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 23,
          },
          {
            move: [-2, 2],
            type: 1,
          },
        ],
        change: {
          "1": -1,
          "23": 13,
        },
      },
      {
        move: [
          {
            move: [1, 0],
            type: 1,
          },
          {
            move: [-1, 0],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [-2, -2],
            type: 1,
          },
          {
            move: [-1, -1],
            type: 22,
          },
          {
            move: [1, 1],
            type: 22,
          },
          {
            move: [2, 2],
            type: 1,
          },
        ],
        change: {
          "1": -1,
          "22": 12,
        },
      },
      {
        move: [
          {
            move: [0, -1],
            type: 1,
          },
          {
            move: [0, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [2, -2],
            type: 1,
          },
          {
            move: [1, -1],
            type: 23,
          },
          {
            move: [-1, 1],
            type: 23,
          },
          {
            move: [-2, 2],
            type: 1,
          },
        ],
        change: {
          "1": -1,
          "23": 13,
        },
      },
      {
        move: [
          {
            move: [-1, -1],
            type: 1,
          },
          {
            move: [1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
      {
        move: [
          {
            move: [1, -1],
            type: 1,
          },
          {
            move: [-1, 1],
            type: 1,
          },
        ],
        change: {
          "1": -1,
        },
      },
    ],
  },
  uc: {
    species: "uc",
    name: "太子",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ud: {
    species: "ud",
    name: "ビショップ",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ue: {
    species: "ue",
    name: "朱雀",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  uf: {
    species: "uf",
    name: "神雀",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ug: {
    species: "ug",
    name: "驢馬",
    move: [
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  uh: {
    species: "uh",
    name: "馬麟",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ui: {
    species: "ui",
    name: "大熊",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  uj: {
    species: "uj",
    name: "嗔猪",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  uk: {
    species: "uk",
    name: "毒狼",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ul: {
    species: "ul",
    name: "風馬",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  um: {
    species: "um",
    name: "天馬",
    move: [
      {
        move: [1, -2],
        type: 1,
      },
      {
        move: [-1, -2],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 2],
        type: 1,
      },
      {
        move: [-1, 2],
        type: 1,
      },
    ],
  },
  un: {
    species: "un",
    name: "延鷹",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
    ],
  },
  uo: {
    species: "uo",
    name: "山母",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  up: {
    species: "up",
    name: "仙鷦",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  uq: {
    species: "uq",
    name: "西戎",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ur: {
    species: "ur",
    name: "東夷",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  us: {
    species: "us",
    name: "隠狐",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  ut: {
    species: "ut",
    name: "山鶻",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  uu: {
    species: "uu",
    name: "南蛮",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  uv: {
    species: "uv",
    name: "金翅",
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
    jumpLimit: {
      "6": 3,
    },
  },
  uw: {
    species: "uw",
    name: "北狄",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ux: {
    species: "ux",
    name: "大駒",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  uy: {
    species: "uy",
    name: "左犬",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  uz: {
    species: "uz",
    name: "右犬",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  va: {
    species: "va",
    name: "踊鹿",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  vb: {
    species: "vb",
    name: "方行",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  vc: {
    species: "vc",
    name: "大獏",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [3, 0],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [-3, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  vd: {
    species: "vd",
    name: "猛鷲",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  ve: {
    species: "ve",
    name: "飛龍",
    move: [
      {
        move: [2, -2],
        type: 1,
      },
      {
        move: [-2, -2],
        type: 1,
      },
      {
        move: [2, 2],
        type: 1,
      },
      {
        move: [-2, 2],
        type: 1,
      },
    ],
  },
  vf: {
    species: "vf",
    name: "麒麟",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  vg: {
    species: "vg",
    name: "雲鷲",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  vh: {
    species: "vh",
    name: "勁鷲",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  vi: {
    species: "vi",
    name: "兵士",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  vj: {
    species: "vj",
    name: "走車",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  vk: {
    species: "vk",
    name: "炮車",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  vl: {
    species: "vl",
    name: "羊兵",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  vm: {
    species: "vm",
    name: "虎兵",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  vn: {
    species: "vn",
    name: "猛牛",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
  },
  vo: {
    species: "vo",
    name: "ルーク(居飛車)",
    shortname: "ルーク",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
    baseChange: "ym",
    nopostfix: 1,
  },
  vp: {
    species: "vp",
    name: "大龍",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  vq: {
    species: "vq",
    name: "元龍",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 6,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 6,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  vr: {
    species: "vr",
    name: "金翅",
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
    jumpLimit: {
      "6": 3,
    },
  },
  vs: {
    species: "vs",
    name: "奔翅",
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
    jumpLimit: {
      "6": 3,
    },
  },
  vt: {
    species: "vt",
    name: "提婆",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  vu: {
    species: "vu",
    name: "教王",
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [0, -1],
        type: 6,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 6,
      },
      {
        move: [-1, 0],
        type: 6,
      },
      {
        move: [1, 1],
        type: 6,
      },
      {
        move: [0, 1],
        type: 6,
      },
      {
        move: [-1, 1],
        type: 6,
      },
    ],
    jumpLimit: {
      "6": 3,
    },
  },
  vv: {
    species: "vv",
    name: "無明",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  vw: {
    species: "vw",
    name: "鯨鯢",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  vx: {
    species: "vx",
    name: "白駒",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  vy: {
    species: "vy",
    name: "横龍",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
    ],
  },
  vz: {
    species: "vz",
    name: "走龍",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  wa: {
    species: "wa",
    name: "角将",
    move: [
      {
        move: [1, -1],
        type: 100,
      },
      {
        move: [-1, -1],
        type: 100,
      },
      {
        move: [1, 1],
        type: 100,
      },
      {
        move: [-1, 1],
        type: 100,
      },
    ],
    jumpException: ["wz", "cg", "qj", "ql", "xe", "wa", "wc", "ox", "wd"],
  },
  wb: {
    limit: {
      "11": 3,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 6,
      },
      {
        move: [0, -1],
        type: 11,
      },
      {
        move: [-1, -1],
        type: 6,
      },
      {
        move: [1, 0],
        type: 10,
      },
      {
        move: [-1, 0],
        type: 10,
      },
      {
        move: [1, 1],
        type: 10,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 10,
      },
    ],
    name: "霖鬼",
    species: "wb",
  },
  wc: {
    species: "wc",
    name: "飛将",
    move: [
      {
        move: [0, -1],
        type: 100,
      },
      {
        move: [1, 0],
        type: 100,
      },
      {
        move: [-1, 0],
        type: 100,
      },
      {
        move: [0, 1],
        type: 100,
      },
    ],
    jumpException: ["wz", "cg", "qj", "ql", "xe", "wa", "wc", "ox", "wd"],
  },
  wd: {
    jumpException: ["wz", "cg", "qj", "ql", "xe", "wa", "wc", "ox", "wd"],
    limit: {
      "11": 3,
      "10": 2,
    },
    move: [
      {
        move: [1, -1],
        type: 11,
      },
      {
        move: [0, -1],
        type: 100,
      },
      {
        move: [-1, -1],
        type: 11,
      },
      {
        move: [1, 0],
        type: 100,
      },
      {
        move: [-1, 0],
        type: 100,
      },
      {
        move: [1, 1],
        type: 10,
      },
      {
        move: [0, 1],
        type: 100,
      },
      {
        move: [-1, 1],
        type: 10,
      },
    ],
    name: "飛鰐",
    species: "wd",
  },
  we: {
    species: "we",
    name: "行鳥",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  wf: {
    species: "wf",
    name: "奔鬼",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  wg: {
    species: "wg",
    name: "古鵄",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  wh: {
    change: {
      "2": 0,
    },
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    name: "天狗",
    species: "wh",
    status: [
      {
        move: [
          {
            move: [1, -1],
            type: 2,
          },
          {
            move: [-1, -1],
            type: 2,
          },
          {
            move: [1, 1],
            type: 2,
          },
          {
            move: [-1, 1],
            type: 2,
          },
        ],
        change: {
          "2": -1,
        },
      },
    ],
  },
  wj: {
    species: "wj",
    name: "白象",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  wk: {
    species: "wk",
    name: "象王",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  wl: {
    species: "wl",
    name: "四天",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 4,
    },
  },
  wm: {
    species: "wm",
    name: "力士",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  wn: {
    species: "wn",
    name: "金剛",
    move: [
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  wo: {
    species: "wo",
    name: "夜叉",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    limit: {
      "8": 3,
    },
  },
  wp: {
    species: "wp",
    name: "香象",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  wq: {
    species: "wq",
    name: "神亀",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  wr: {
    species: "wr",
    name: "走兎",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  ws: {
    species: "ws",
    name: "隠狐",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  wt: {
    species: "wt",
    name: "大鯨",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  wu: {
    species: "wu",
    name: "火鬼",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  wv: {
    species: "wv",
    name: "奔火",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  ww: {
    species: "ww",
    name: "奔獏",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
    limit: {
      "8": 5,
    },
  },
  wx: {
    species: "wx",
    name: "左将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  wy: {
    species: "wy",
    name: "左軍",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  wz: {
    species: "wz",
    name: "玉将",
    move: [
      {
        move: [1, -1],
        type: 8,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [-1, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 8,
      },
      {
        move: [-1, 0],
        type: 8,
      },
      {
        move: [1, 1],
        type: 8,
      },
      {
        move: [0, 1],
        type: 8,
      },
      {
        move: [-1, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  xa: {
    species: "xa",
    name: "右将",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  xb: {
    species: "xb",
    name: "右軍",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  xc: {
    species: "xc",
    name: "白虎",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 8,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  xd: {
    species: "xd",
    name: "神虎",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 8,
      },
    ],
    limit: {
      "8": 2,
    },
  },
  xe: {
    species: "xe",
    name: "副将",
    move: [
      {
        move: [0, -2],
        type: 1,
      },
      {
        move: [1, -1],
        type: 100,
      },
      {
        move: [-1, -1],
        type: 100,
      },
      {
        move: [2, 0],
        type: 1,
      },
      {
        move: [-2, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 100,
      },
      {
        move: [-1, 1],
        type: 100,
      },
      {
        move: [0, 2],
        type: 1,
      },
    ],
    jumpException: ["wz", "cg", "qj", "ql", "xe"],
  },
  xf: {
    species: "xf",
    name: "犬",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
    ],
  },
  xg: {
    species: "xg",
    name: "雜将",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  xh: {
    species: "xh",
    name: "醉象",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
  },
  yk: {
    species: "yk",
    name: "クイーン",
    move: [
      {
        move: [1, -1],
        type: 2,
      },
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [-1, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [1, 1],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
      {
        move: [-1, 1],
        type: 2,
      },
    ],
  },
  yl: {
    species: "yl",
    name: "キング(居玉)",
    shortname: "キング",
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    baseChange: "yn",
    nopostfix: 1,
  },
  yn: {
    class: "Unmovable",
    move: [],
    name: "オセロ(白)",
    shortname: "○",
    species: "yn",
  },
  yo: {
    class: "Unmovable",
    move: [],
    name: "オセロ",
    shortname: " ",
    species: "yo",
  },
  yp: {
    species: "yp",
    name: "ポーン(チェッカー)",
    shortname: "ポーン",
    move: [
      {
        move: [2, -2],
        type: 8,
      },
      {
        move: [-2, -2],
        type: 8,
      },
      {
        move: [1, -1],
        type: 3,
      },
      {
        move: [-1, -1],
        type: 3,
      },
    ],
    mustNotBeEmpty: {
      "8": {
        move: [-1, -1],
        type: 2,
      },
    },
    mustBeEmpty: {
      "8": {
        moves: [[0, 0]],
      },
    },
  },
  yq: {
    species: "yq",
    name: "キング(チェッカー)",
    shortname: "キング",
    move: [
      {
        move: [2, -2],
        type: 8,
      },
      {
        move: [-2, -2],
        type: 8,
      },
      {
        move: [1, -1],
        type: 3,
      },
      {
        move: [-1, -1],
        type: 3,
      },
      {
        move: [1, 1],
        type: 3,
      },
      {
        move: [-1, 1],
        type: 3,
      },
      {
        move: [2, 2],
        type: 8,
      },
      {
        move: [-2, 2],
        type: 8,
      },
    ],
    mustNotBeEmpty: {
      "8": {
        move: [-1, -1],
        type: 2,
      },
    },
    mustBeEmpty: {
      "8": {
        moves: [[0, 0]],
      },
    },
  },
  yr: {
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
      {
        move: [0, 1],
        type: 1,
      },
    ],
    name: "帥",
    species: "yr",
  },
  ys: {
    move: [
      {
        move: [1, -1],
        type: 1,
      },
      {
        move: [-1, -1],
        type: 1,
      },
      {
        move: [1, 1],
        type: 1,
      },
      {
        move: [-1, 1],
        type: 1,
      },
    ],
    name: "仕",
    species: "ys",
  },
  yt: {
    species: "yt",
    name: "馬",
    move: [
      {
        move: [1, -2],
        type: 8,
      },
      {
        move: [-1, -2],
        type: 8,
      },
      {
        move: [2, -1],
        type: 8,
      },
      {
        move: [-2, -1],
        type: 8,
      },
      {
        move: [2, 1],
        type: 8,
      },
      {
        move: [-2, 1],
        type: 8,
      },
      {
        move: [1, 2],
        type: 8,
      },
      {
        move: [-1, 2],
        type: 8,
      },
    ],
    mustBeEmpty: {
      "8": {
        moves: [[-1, -1]],
      },
    },
  },
  yu: {
    move: [
      {
        move: [2, -2],
        type: 8,
      },
      {
        move: [-2, -2],
        type: 8,
      },
      {
        move: [2, 2],
        type: 8,
      },
      {
        move: [-2, 2],
        type: 8,
      },
    ],
    mustBeEmpty: {
      "8": {
        moves: [[-1, -1]],
      },
    },
    name: "相",
    species: "yu",
  },
  yv: {
    species: "yv",
    name: "俥",
    move: [
      {
        move: [0, -1],
        type: 2,
      },
      {
        move: [1, 0],
        type: 2,
      },
      {
        move: [-1, 0],
        type: 2,
      },
      {
        move: [0, 1],
        type: 2,
      },
    ],
  },
  yw: {
    move: [
      {
        move: [0, -1],
        type: [4, 7],
      },
      {
        move: [1, 0],
        type: [4, 7],
      },
      {
        move: [-1, 0],
        type: [4, 7],
      },
      {
        move: [0, 1],
        type: [4, 7],
      },
    ],
    name: "炮",
    species: "yw",
  },
  yx: {
    species: "yx",
    name: "兵",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
    ],
  },
  yy: {
    species: "yy",
    name: "兵(敵陣)",
    shortname: "兵",
    move: [
      {
        move: [0, -1],
        type: 1,
      },
      {
        move: [1, 0],
        type: 1,
      },
      {
        move: [-1, 0],
        type: 1,
      },
    ],
  },
};
export default koma;
