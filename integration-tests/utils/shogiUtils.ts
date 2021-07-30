import Shogi from "../../src/Shogi";
import XY from "../../src/XY";
import {Direction, Species} from "../../src/Ban";
import {serialize} from "./ShogiSerializer";

export function move(shogi: Shogi, fromX: number, fromY: number, toX: number, toY: number, nari = false) {
    try {
        rawMove(shogi, fromX, fromY, toX, toY, nari);
    } catch (e) {
        console.error(serialize(shogi, null, null, null, null, null))
        throw e;
    }
}

export function rawMove(shogi: Shogi, fromX: number, fromY: number, toX: number, toY: number, nari = false) {
    shogi.runCommand({
        type: "move",
        from: [fromX, fromY],
        to: [toX, toY],
        nari
    })
}

export function put(shogi: Shogi, toX: number, toY: number, species: Species, id?: number) {
    try {
        rawPut(shogi, toX, toY, species, id);
    } catch (e) {
        console.error(serialize(shogi, null, null, null, null, null))
        throw e;
    }
}

export function rawPut(shogi: Shogi, toX: number, toY: number, species: Species, id?: number) {
    shogi.runCommand({
        type: "put",
        to: [toX, toY],
        put: species,
        direction: shogi.teban.getNowDirection(),
        id
    })
}

export function assertCellIsNull(shogi: Shogi, x: number, y: number) {
    expect(shogi.ban.get(new XY(x, y)).isNull()).toBeTruthy;
}

export function assertCell(shogi: Shogi, x: number, y: number, direction: Direction, species: Species) {
    const koma = shogi.ban.get(new XY(x, y));
    expect(koma.isNull()).toBeFalsy();
    expect(koma.species).toBe(species);
    expect(koma.direction).toBe(direction);
}
