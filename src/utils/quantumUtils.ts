import { RelXY } from "../XY";
import { QuantumData } from "../strategy/MoveEffectStrategy";
import { Direction } from "../Direction";
import { ShogitterCoreException } from "./phpCompat";

export type QuantumPiece =
  | "Fu"
  | "Ky"
  | "Ke"
  | "Gi"
  | "Ki"
  | "Ka"
  | "Hi"
  | "Ou";
const allPieces: QuantumPiece[] = [
  "Fu",
  "Ky",
  "Ke",
  "Gi",
  "Ki",
  "Ka",
  "Hi",
  "Ou",
];
const initialPieces: { [piece in QuantumPiece]: number } = {
  Fu: 9,
  Ky: 2,
  Ke: 2,
  Gi: 2,
  Ki: 2,
  Ka: 1,
  Hi: 1,
  Ou: 1,
};
type Move = [number, number];
const kin: Move[] = [
  [1, -1],
  [0, -1],
  [-1, -1],
  [1, 0],
  [-1, 0],
  [0, 1],
];
const moves: { [piece in QuantumPiece]: Move[] }[] = [
  {
    Fu: [[0, -1]],
    Ky: [
      [0, -1],
      [0, -2],
    ],
    Ke: [
      [-1, -2],
      [1, -2],
    ],
    Gi: [
      [1, -1],
      [0, -1],
      [-1, -1],
      [1, 1],
      [-1, 1],
    ],
    Ki: kin,
    Ka: [
      [1, -1],
      [-1, -1],
      [1, 1],
      [-1, 1],
      [2, -2],
      [-2, -2],
      [2, 2],
      [-2, 2],
    ],
    Hi: [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [2, 0],
      [-2, 0],
      [0, 2],
      [0, -2],
    ],
    Ou: [
      [1, -1],
      [-1, -1],
      [1, 1],
      [-1, 1],
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ],
  },
  {
    Fu: kin,
    Ky: kin,
    Ke: kin,
    Gi: kin,
    Ki: [],
    Ka: [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, -1],
      [-1, -1],
      [1, 1],
      [-1, 1],
      [2, -2],
      [-2, -2],
      [2, 2],
      [-2, 2],
    ],
    Hi: [
      [1, -1],
      [-1, -1],
      [1, 1],
      [-1, 1],
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [2, 0],
      [-2, 0],
      [0, 2],
      [0, -2],
    ],
    Ou: [],
  },
];
const movingBoards: { [vec: string]: SuperPiece }[] = [{}, {}];
[0, 1].forEach((promoted) => {
  allPieces.map((piece) => {
    moves[promoted][piece].forEach((move) => {
      const vec = move[0] + "," + move[1];
      if (!movingBoards[promoted][vec]) movingBoards[promoted][vec] = [];
      movingBoards[promoted][vec].push(piece);
    });
  });
});

export enum MoveType {
  Promote,
  NoPromote1,
  NoPromote2,
  Captured,
  Normal,
}

export type Result = {
  kinds: SuperPiece[];
  fulls: QuantumPiece[];
};
type SuperPiece = QuantumPiece[];
type Possibilities = Possibility[];
type Possibility = {
  piece: SuperPiece;
  indices: number[];
};

export type QuantumMove = {
  vec: RelXY;
  promote: boolean;
};
export const runQuantum = (
  position: number,
  move: QuantumMove | null,
  moveType: MoveType,
  kinds: SuperPiece[]
) => {
  const superr = move == null ? allPieces.slice() : move2superPiece(move);
  const sp = filterByType(moveType, superr);
  const newKinds = kinds.slice();
  if (position < kinds.length) {
    newKinds[position] = kinds[position].filter(
      (kind) => sp.indexOf(kind) >= 0
    );
  } else {
    newKinds.push(sp);
  }
  return getResult(newKinds);
};

export const findQuantumMochigoma = (
  data: QuantumData[],
  direction: Direction,
  id: number
) => {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < data[i].xys.length; j++) {
      if (data[i].xys[j] == "mochi" + direction + "-" + id)
        return data[i].d.kinds[j];
    }
  }

  throw new ShogitterCoreException(
    `quantum mochigoma not found for dir=${direction}, id=${id}`
  );
};
export const findQuantumKoma = (
  data: QuantumData[] | undefined,
  x: number,
  y: number,
  direction: Direction
) => {
  if (!data) return allPieces.slice();

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < data[i].xys.length; j++) {
      if (data[i].xys[j] == `(${x}, ${y})`) {
        return data[i].d.kinds[j];
      }
    }
  }
  // Haven't moved yet
  return allPieces.filter((s) => data[direction!].d.fulls.indexOf(s) == -1);
};

export const stringifyQuantumPiece = (
  piece: QuantumPiece,
  promoted = false
) => {
  if (promoted) {
    return {
      Fu: "と",
      Ky: "杏",
      Ke: "圭",
      Gi: "全",
      Ki: "",
      Ka: "馬",
      Hi: "龍",
      Ou: "",
    }[piece];
  }
  return {
    Fu: "歩",
    Ky: "香",
    Ke: "桂",
    Gi: "銀",
    Ki: "金",
    Ka: "角",
    Hi: "飛",
    Ou: "玉",
  }[piece];
};

function checkFromSuperPiece(pieces: SuperPiece[]) {
  // superPiece2union
  const superPiece2Indices: { [superPiece: string]: number[] } = {};
  pieces.map((piece, index) => {
    if (piece.length == 0)
      throw new Error(`Invalid move combination at ${index}`);
    const p = piece.slice().sort().join(",");
    if (!superPiece2Indices[p]) superPiece2Indices[p] = [];
    superPiece2Indices[p].push(index);
  });
  let possibilities: Possibilities = [];
  for (let superPiece in superPiece2Indices) {
    possibilities.push({
      piece: superPiece.split(",") as QuantumPiece[],
      indices: superPiece2Indices[superPiece],
    });
  }
  const allNonemptySubsets = getAllSubsets(possibilities).slice(1);
  // countsUnionWithIndices
  return allNonemptySubsets
    .map((subset) => {
      const pieceSet = new Set<QuantumPiece>();
      let indicesList: number[] = [];
      subset.forEach(({ piece, indices }) => {
        piece.forEach((p) => pieceSet.add(p));
        indicesList = indicesList.concat(indices);
      });
      return { piece: Array.from(pieceSet), indices: indicesList };
    })
    .map(({ piece, indices }) => {
      const max = calcMax(piece);
      // console.log(max, piece, piece.length, indices, indices.length)
      if (indices.length < max) return { piece: [], indices };
      if (indices.length == max) return { piece, indices };
      throw new Error(`Piece exhausted ${piece} (max ${max}) & ${indices}`);
    });
}

function calcMax(superPiece: SuperPiece) {
  let max = 0;
  for (let [kind, amount] of Object.entries(initialPieces)) {
    if (superPiece.indexOf(kind as QuantumPiece) < 0) continue;
    max += amount;
  }
  return max;
}

const getAllSubsets: <T>(arr: T[]) => T[][] = (theArray) =>
  theArray.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );
type Assign = {
  fst: Possibilities;
  snd: Possibilities;
};

function assign2list(length: number, { fst, snd }: Assign) {
  const unwinded = fst
    .concat(snd)
    .reduce(
      (acc, { piece, indices }) =>
        acc.concat(indices.map((i) => ({ piece, i }))),
      [] as { piece: SuperPiece; i: number }[]
    );
  // TODO: nub
  unwinded.sort((a, b) => a.i - b.i);
  let ret: string[][] = [];
  unwinded.forEach(({ piece, i }) => {
    ret[i] = piece;
  });
  for (let i = 0; i < length; i++) {
    if (!ret[i]) ret[i] = [];
  }
  return ret;
}

function assign(details: Possibilities): Assign {
  const details2 = details.filter((detail) => detail.piece.length > 0);
  const res = assign1(details2);
  if (!res) {
    return { fst: [], snd: details2 };
  }
  const { fst, snd } = assign(res.rest);
  return { fst: fst.concat(res.found), snd: snd };
}

type Assign1 = {
  found: Possibility;
  rest: Possibilities;
};

function assign1(xs: Possibilities): Assign1 {
  const found = xs.find(({ piece: x }) => {
    return xs.every(
      ({ piece: xx }) => pieceEquals(x, xx) || !isSubsetOf(xx, x)
    );
  });
  if (!found) return null;
  return {
    found,
    rest: xs
      .filter((x) => !pieceEquals(x.piece, found.piece))
      .map(({ piece, indices }) => ({
        piece: piece.filter((kind) => found.piece.indexOf(kind) < 0),
        indices: indices.filter((i) => found.indices.indexOf(i) < 0),
      })),
  };
}

function isSubsetOf<T>(xs: T[], ys: T[]) {
  return xs.every((x) => ys.indexOf(x) >= 0);
}

function pieceEquals(piece1: SuperPiece, piece2: SuperPiece) {
  return piece1.slice().sort().join(",") === piece2.slice().sort().join(",");
}

function getResult(pieces: SuperPiece[]): Result {
  console.log("getResult", pieces);
  const details = checkFromSuperPiece(pieces);
  const ps = assign2list(pieces.length, assign(details));
  const fullSet = new Set<QuantumPiece>();
  details.forEach(({ piece }) => piece.forEach((p) => fullSet.add(p)));
  const fulls = Array.from(fullSet);

  // console.log(details, fulls, ps)
  return {
    fulls,
    kinds: ps.map((p, i) => {
      const sp = pieces[i];
      if (p.length == 0) {
        return sp.filter((sp1) => fulls.indexOf(sp1) < 0);
      }
      return sp.filter((sp1) => p.indexOf(sp1) >= 0);
    }),
  };
}

const move2superPiece = ({ vec, promote }: QuantumMove) => {
  return movingBoards[promote ? 1 : 0][vec.x + "," + vec.y];
};

const filterByType: (
  moveType: MoveType,
  superPiece: SuperPiece
) => SuperPiece = (moveType, superPiece) => {
  const filter = filteringPiece(moveType);
  return superPiece.filter((kind) => filter.indexOf(kind) < 0);
};

const filteringPiece: (moveType: MoveType) => SuperPiece = (moveType) => {
  switch (moveType) {
    case MoveType.Promote:
      return ["Ki", "Ou"];
    case MoveType.NoPromote1:
      return ["Fu", "Ky", "Ke"];
    case MoveType.NoPromote2:
      return ["Ke"];
    case MoveType.Captured:
      return ["Ou"];
    default:
      return [];
  }
};
