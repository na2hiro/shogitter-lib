import { Shogi } from "@shogitter/core";
import { PossibilityScoringShogiGame } from "../../src/players/possibilityistPlayer";
import { minimax } from "../../src/search/minimax";
import type { randomSelect } from "../../src/search/utils";
import { getShogiHelper } from "../utils/helper";
import { describe, it, expect, beforeEach, vi } from "vitest";

vi.mock("../../src/search/utils", () => {
  const randomSelectMock: typeof randomSelect = <T>(arr: T[]) => {
    return arr[0];
  };
  return {
    randomSelect: randomSelectMock,
  };
});

describe("posMaxSearch with Shogi", () => {
  let shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(0);
    shogi.start();
  });

  it("returns no move with depth=0", async () => {
    const game = new PossibilityScoringShogiGame(shogi);

    const result = minimax(game, 0);

    expect(result.moves).toHaveLength(0);
  });

  it("returns something with depth=1", async () => {
    const game = new PossibilityScoringShogiGame(shogi);

    const result = minimax(game, 1);

    expect(result).toMatchInlineSnapshot(`"7776 4"`);
  });
  describe("position related to check mate", () => {
    let helper;
    beforeEach(() => {
      helper = getShogiHelper(0);
      const { shogi, move, put } = helper;
      move(7, 7, 7, 6);
      move(4, 3, 4, 4);
      move(8, 8, 4, 4);
      move(8, 2, 4, 2);
      move(4, 4, 5, 3, true);
      move(4, 2, 4, 7, true);
      move(8, 9, 7, 7);
      move(4, 7, 5, 7);
      move(2, 8, 5, 8);
      move(5, 7, 5, 3);
      move(5, 8, 5, 3, true);
      put(5, 2, "aa");
      move(5, 3, 6, 3);
      move(3, 3, 3, 4);
      put(6, 4, "ag");
      move(2, 2, 7, 7, true);
      move(7, 9, 6, 8);
      move(7, 7, 9, 9);
      put(4, 3, "aa");
    });
    it("finds check mate", async () => {
      const { shogi, move, put } = helper;
      move(9, 9, 2, 2);

      const game = new PossibilityScoringShogiGame(shogi);

      const result1 = minimax(game, 1, true);
      const { trace, ...result1_ } = result1;
      expect(result1_).toMatchInlineSnapshot(`"6361 Infinity"`);
      expect(result1).toMatchSnapshot();

      {
        const result2 = minimax(game, 2, true);
        const { trace, ...result2_ } = result2;
        expect(result2_).toMatchInlineSnapshot(`"6361 Infinity"`);
        expect(result2).toMatchSnapshot();
      }
    });

    it("avoids check mate", async () => {
      const { shogi, move, put } = helper;

      const game = new PossibilityScoringShogiGame(shogi);

      const result1 = minimax(game, 1, true);
      const { trace, ...result1_ } = result1;
      expect(result1_).toMatchInlineSnapshot(`"9966 -141"`);
      expect(result1).toMatchSnapshot();

      {
        const result2 = minimax(game, 2, true);
        const { trace, ...result2_ } = result2;
        expect(result2_).toMatchInlineSnapshot(`"7162 -82"`);
        expect(result2).toMatchSnapshot();
      }
    });
  });
});
