import {RelXY} from "../XY";

var FU = "aa";
var KY = "ab";
var KE = "ac";
var GI = "ad";
var KI = "ae";
var KA = "af";
var HI = "ag";
var OU = "ah";
const allPieces = [FU, KY, KE, GI, KI, KA, HI, OU];
const initialPieces = {
    [FU]: 9,
    [KY]: 2,
    [KE]: 2,
    [GI]: 2,
    [KI]: 2,
    [KA]: 1,
    [HI]: 1,
    [OU]: 1,
}
const kin = [[1,-1],[0,-1],[-1,-1],[1,0],[-1,0],[0,1]];
const moves = [{
    [FU]: [[0, -1]],
    [KY]: [[0, -1], [0, -2]],
    [KE]: [[-1, -2], [1, -2]],
    [GI]: [[1, -1], [0, -1], [-1, -1], [1, 1], [-1, 1]],
    [KI]: kin,
    [KA]: [[1, -1], [-1, -1], [1, 1], [-1, 1], [2, -2], [-2, -2], [2, 2], [-2, 2]],
    [HI]: [[1, 0], [-1, 0], [0, 1], [0, -1], [2, 0], [-2, 0], [0, 2], [0, -2]],
    [OU]: [[1, -1], [-1, -1], [1, 1], [-1, 1], [1, 0], [-1, 0], [0, 1], [0, -1]],
}, {
    [FU]: kin,
    [KY]: kin,
    [KE]: kin,
    [GI]: kin,
    [KI]: [],
    [KA]: [[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,-1],[1,1],[-1,1],[2,-2],[-2,-2],[2,2],[-2,2]],
    [HI]: [[1,-1],[-1,-1],[1,1],[-1,1],[1,0],[-1,0],[0,1],[0,-1],[2,0],[-2,0],[0,2],[0,-2]],
    [OU]: [],
}]
const movingBoards: {[vec: string]: SuperPiece}[] = [{}, {}];
[0,1].forEach(promoted => {
    allPieces.map(piece => {
        moves[promoted][piece].forEach(move => {
            const vec = move[0]+","+move[1];
            if(!movingBoards[promoted][vec]) movingBoards[promoted][vec] = [];
            movingBoards[promoted][vec].push(piece);
        })
    })
})

export enum MoveType {
    Promote,
    NoPromote1,
    NoPromote2,
    Captured,
    Normal,
}
export type Result = {
    kinds: SuperPiece[];
    fulls: string[];
}
type SuperPiece = string[];
type Possibitilies = Possibility[];
type Possibility ={
    piece: SuperPiece,
    indices: number[],
};

export type QuantumMove = {
    vec: RelXY,
    promote: boolean,
}
export const runQuantum = (position: number, move: QuantumMove | null, movetype: MoveType, kinds: SuperPiece[]) => {
    let superr = move == null ? allPieces : move2superPiece(0, move);
    let sp = filterByType(movetype, superr);
    const newKinds = kinds.slice();
    if (position < kinds.length) {
        newKinds[position] = kinds[position].filter(kind => sp.indexOf(kind) >= 0);
    } else {
        newKinds.push(sp);
    }
    return getResult(newKinds);
}

function checkFromSuperPiece(pieces: SuperPiece[]) {
    // superPiece2union
    const superPiece2Indices: {[superPiece: string]: number[]} = {}
    pieces.map((piece, index)=>{
        if(piece.length==0) throw new Error(`Invalid move combination at ${index}`);
        const p = piece.sort().join(",");
        if(!superPiece2Indices[p]) superPiece2Indices[p] = [];
        superPiece2Indices[p].push(index);
    })
    let possibilities: Possibitilies = [];
    for (let superPiece in superPiece2Indices) {
        possibilities.push({piece: superPiece.split(","), indices: superPiece2Indices[superPiece]})
    }
    // console.log("possi", possibilities);
    const allNonemptySubsets = getAllSubsets(possibilities).slice(1);
    // countsUnionWithIndices
    return allNonemptySubsets
        .map(subset => {
            const pieceSet = new Set<string>();
            let indicesList: number[] = [];
            subset.forEach(({piece, indices}) => {
                piece.forEach(p => pieceSet.add(p));
                indicesList = indicesList.concat(indices);
            })
            return {piece: Array.from(pieceSet), indices: indicesList};
        })
        .map(({piece, indices}) => {
            const max = calcMax(piece);
            // console.log(max, piece, piece.length, indices, indices.length)
            if(indices.length<max) return {piece: [], indices};
            if(indices.length==max) return {piece, indices};
            throw new Error(`Piece exhausted ${piece} (max ${max}) & ${indices}`);
        })
}
function calcMax (superPiece: SuperPiece) {
    let max=0;
    for (let kind in initialPieces) {
        if(superPiece.indexOf(kind)<0) continue;
        max+=initialPieces[kind];
    }
    return max;
}

const getAllSubsets: <T>(arr: T[]) => T[][] =
    theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
            subsets.map(set => [value,...set])
        ),
        [[]]
    );
type Assign = {
    fst: Possibitilies,
    snd: Possibitilies,
}
function assign2list(length: number, {fst, snd}: Assign) {
    const unwinded = fst.concat(snd)
        .reduce((acc, {piece, indices})=>acc.concat(indices.map(i=>({piece, i}))), [] as {piece: SuperPiece, i: number}[]);
    // TODO: nub
    unwinded.sort((a, b)=>a.i-b.i);
    let ret: string[][] = [];
    unwinded.forEach(({piece, i})=>{
        ret[i] = piece;
    })
    for(let i=0; i<length; i++) {
        if(!ret[i]) ret[i] = [];
    }
    return ret;
}
function assign(details: Possibitilies): Assign {
    const details2 = details.filter(detail => detail.piece.length>0);
    const res = assign1(details2)
    if (!res) {
        return {fst: [], snd: details2};
    }
    const {fst, snd} = assign(res.rest);
    return {fst: fst.concat(res.found), snd: snd};
}
type Assign1 = {
    found: Possibility
    rest: Possibitilies;
}
function assign1(xs: Possibitilies): Assign1{
    const found = xs.find(({piece: x}) => {
        return xs.every(({piece: xx}) => pieceEquals(x, xx) || !isSubsetOf(xx, x))
    });
    if(!found) return null;
    return {
        found,
        rest: xs
            .filter(x=>!pieceEquals(x.piece, found.piece))
            .map(({piece, indices})=>({
                piece: piece.filter(kind=>found.piece.indexOf(kind)<0),
                indices: indices.filter(i => found.indices.indexOf(i)<0)
            }))
    }
}

function isSubsetOf<T>(xs: T[], ys: T[]) {
    return xs.every(x => ys.indexOf(x) >= 0);
}

function pieceEquals(piece1: SuperPiece, piece2: SuperPiece) {
    return piece1.sort().join(",") === piece2.sort().join(",");
}

function getResult(pieces: SuperPiece[]): Result {
    const details = checkFromSuperPiece(pieces);
    const ps = assign2list(pieces.length, assign(details))
    const fullSet = new Set<string>();
    details.forEach(({piece}) => piece.forEach(p=>fullSet.add(p)));
    const fulls = Array.from(fullSet);

    // console.log(details, fulls, ps)
    return {
        fulls,
        kinds: ps.map((p, i)=>{
            const sp = pieces[i];
            if(p.length==0) {
                return sp.filter(sp1=>fulls.indexOf(sp1)<0)
            }
            return sp.filter(sp1 => p.indexOf(sp1)>=0);
        })
    }
}

const move2superPiece = (index: number, {vec, promote}: QuantumMove) => {
    return movingBoards[promote ? 1 : 0][vec.x + "," + vec.y];
}

const filterByType: (moveType: MoveType, superPiece: SuperPiece) => SuperPiece = (moveType, superPiece) => {
    const filter = filteringPiece(moveType);
    return superPiece.filter(kind => filter.indexOf(kind) < 0);
}

const filteringPiece: (moveType: MoveType) => SuperPiece = (moveType) => {
    switch (moveType) {
        case MoveType.Promote:
            return [KI, OU];
        case MoveType.NoPromote1:
            return [FU, KY, KE];
        case MoveType.NoPromote2:
            return [KE];
        case MoveType.Captured:
            return [OU];
        default:
            return [];
    }
}
