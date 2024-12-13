import { describe, it, expect } from "vitest";
import { getShogiHelper } from "../utils/helper";
describe("Judge", () => {
  describe("multiple game ends", () => {
    it("respects the first game end if the winner is consistent", () => {
      const { move, shogi } = getShogiHelper(17); // どうぶつ
      move(2, 4, 1, 3);
      move(3, 1, 3, 2);
      move(1, 3, 1, 2);
      move(3, 2, 3, 3);
      move(1, 2, 2, 1);
      expect(shogi.status).toMatchInlineSnapshot(`
        {
          "message": "後手のライオンが取られました。",
          "num": 2,
        }
      `);
      expect(
        shogi.kifu.getKifu(shogi.kifu.getTesuu() - 1)
      ).toMatchInlineSnapshot(`"☖負け"`);
    });
    it("ends with draw if the winner is inconsistent", () => {
      const { move, shogi } = getShogiHelper(77); // 水中
      move(5, 9, 4, 8);
      move(5, 1, 4, 2);
      move(3, 7, 3, 6);
      move(3, 3, 3, 4);
      move(4, 8, 3, 7);
      move(4, 2, 3, 3);
      move(3, 7, 4, 6);
      move(3, 3, 4, 4);
      move(4, 6, 4, 5);
      move(4, 4, 4, 5);
      expect(shogi.status).toMatchInlineSnapshot(`
        {
          "message": "勝ちであり負けです：先手の王将が取られました。後手の王将が取られました。",
          "num": 2,
        }
      `);
      expect(
        shogi.kifu.getKifu(shogi.kifu.getTesuu() - 1)
      ).toMatchInlineSnapshot(`"引き分け"`);
    });
  });
});
