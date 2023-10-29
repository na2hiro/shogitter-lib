import { describe, it, expect, beforeEach } from "vitest";
import { Shogi, XY } from "../../src";

describe("Othello", () => {
  describe("passes", () => {
    let shogi: Shogi;
    beforeEach(() => {
      // Shorted position with passes https://www.hasera.net/othello/mame006.html
      shogi = Shogi.ofRuleId(80);
      shogi.start();
      shogi.put(new XY(3, 5), "yo", 0);
      shogi.put(new XY(3, 6), "yo", 1);
      shogi.put(new XY(5, 3), "yo", 0);
      shogi.put(new XY(2, 5), "yo", 1);
      shogi.put(new XY(1, 5), "yo", 0);
      shogi.put(new XY(1, 4), "yo", 1);
      shogi.put(new XY(3, 7), "yo", 0);
      shogi.put(new XY(1, 6), "yo", 1);
      // black has to pass
    });
    it("can generate pass", () => {
      const moves = shogi.generateMoves();
      const passes = moves.filter((m) => m.type == "pass");
      expect(passes).toHaveLength(1);
    });
    it("can accept pass and roll back correctly", () => {
      const snapshotBeforePass = shogi.getObject();
      expect(
        shogi.generateMoves().filter((m) => m.type === "pass")
      ).toHaveLength(1);

      shogi.pass();
      expect(
        shogi.generateMoves().filter((m) => m.type === "pass")
      ).toHaveLength(0);
      const snapshotAfterPass = shogi.getObject();

      shogi.put(new XY(6, 5), "yo", 1);

      shogi.rollback(1);
      expect(shogi.getObject()).toStrictEqual(snapshotAfterPass);

      shogi.rollback(1);
      expect(shogi.getObject()).toStrictEqual(snapshotBeforePass);
    });
  });
});
