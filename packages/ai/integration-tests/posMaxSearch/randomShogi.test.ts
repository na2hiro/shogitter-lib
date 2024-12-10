import {describe, expect, it, vi} from "vitest";
import {getShogiHelper} from "../utils/helper";
import {PossibilityScoringShogiGame} from "../../src/players/possibilityistPlayer";
import {minimax} from "../../src/search/minimax";
import type {randomSelect} from "../../src/search/utils";

vi.mock("../../src/search/utils", () => {
    const randomSelectMock: typeof randomSelect = <T>(arr: T[]) => {
        return arr[0];
    };
    return {
        randomSelect: randomSelectMock,
    };
});

describe("Random shogi", () => {
    it("doesn't throw 行きどころがありません", () => {
        const {shogi, move, put} = getShogiHelper(107);
        move(7, 7, 7, 6);
        move(8, 3, 8, 4)
        move(6, 7, 6, 6)
        move(9, 3, 9, 4)
        move(6, 6, 6, 5)
        move(9, 4, 9, 5)
        move(8, 9, 7, 7)
        move(9, 5, 9, 6)
        move(7, 7, 8, 5)
        move(8, 4, 8, 5)
        move(9, 7, 9, 6)

        const game = new PossibilityScoringShogiGame(shogi);
        minimax(game, 1, true);
        minimax(game, 2, true);
    });
});
