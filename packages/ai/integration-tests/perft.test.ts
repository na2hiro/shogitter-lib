import { Shogi } from "@shogitter/core";
import { perft } from "../src/search/perft";
import { ShogiGame } from "../src/search/ShogiGame";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { Game } from "../src/search/Game";
import { Move, shogitterDB } from "@shogitter/core";

describe(perft, () => {
  describe("rule=0", () => {
    let game: Game<Move>;
    let started: number;
    beforeEach(() => {
      const shogi = Shogi.ofRuleId(0);
      shogi.start();
      game = new ShogiGame(shogi);

      started = performance.now();
    });
    afterEach(() => {
      expect((performance.now() - started).toFixed(0)).toMatchSnapshot("time");
    });
    it("depth=0", () => {
      expect(perft(game, 0)).toBe(1);
    });
    it("depth=1", () => {
      expect(perft(game, 1)).toBe(30);
    });

    it("depth=2", () => {
      expect(perft(game, 2)).toBe(900);
    });
    it("depth=3", () => {
      expect(perft(game, 3)).toBe(25470);
    });
  });
  for (let ruleId = 1; ruleId <= 110; ruleId++) {
    const rule = shogitterDB.getRule(ruleId);
    describe(`rule=${ruleId} (${rule.name})`, () => {
      let game: Game<Move>;
      beforeEach(() => {
        const shogi = Shogi.ofRuleId(ruleId);

        shogi.start();
        game = new ShogiGame(shogi);
      });
      it("depth=0", () => {
        expect(perft(game, 0)).toBe(1);
      });
      it("depth=1", () => {
        expect(perft(game, 1)).toMatchSnapshot();
      });
      it.skip("depth=2", () => {
        expect(perft(game, 2)).toMatchSnapshot();
      });
    });
  }
});
