import { describe, it, expect } from "vitest";
import { Shogi, Status, XY } from "../src";

describe("Shogi", () => {
  describe("clone()", () => {
    it("Regular rule", () => {
      const shogi = Shogi.ofRuleId(0);
      shogi.start();
      shogi.move(new XY(7, 7), new XY(7, 6));
      shogi.move(new XY(3, 3), new XY(3, 4));
      shogi.move(new XY(8, 8), new XY(2, 2));

      const shogi3 = shogi.clone(3);
      expect(shogi3.kifu.getTesuu()).toBe(3);
      expect(shogi3.teban.get()).toBe(1);
      expect(shogi3.getObject()).toEqual(shogi.getObject());
      shogi3.move(new XY(3, 1), new XY(2, 2));

      const shogi2 = shogi.clone(2);
      expect(shogi2.kifu.getTesuu()).toBe(2);
      expect(shogi2.teban.get()).toBe(0);
      shogi2.move(new XY(6, 7), new XY(6, 6));

      const shogi1 = shogi.clone(1);
      expect(shogi1.kifu.getTesuu()).toBe(1);
      expect(shogi1.teban.get()).toBe(1);
      shogi1.move(new XY(8, 3), new XY(8, 4));
    });
    it("Rule with irregular turns", () => {
      const shogi = Shogi.ofRuleId(75); // バレーボール
      shogi.start();
      shogi.move(new XY(7, 7), new XY(7, 6));
      shogi.move(new XY(6, 7), new XY(6, 6));
      shogi.move(new XY(5, 7), new XY(5, 6));

      shogi.move(new XY(3, 3), new XY(3, 4));

      const shogi4 = shogi.clone(4);
      expect(shogi4.kifu.getTesuu()).toBe(4);
      expect(shogi4.getObject()).toEqual(shogi.getObject());
      expect(shogi4.teban.get()).toBe(4);
      shogi4.move(new XY(8, 2), new XY(3, 2));
      shogi4.move(new XY(2, 2), new XY(4, 4));
      shogi4.move(new XY(6, 6), new XY(6, 5));
      shogi4.move(new XY(8, 8), new XY(4, 4));

      const shogi3 = shogi.clone(3);
      expect(shogi3.kifu.getTesuu()).toBe(3);
      expect(shogi3.teban.get()).toBe(3);
      shogi3.move(new XY(3, 3), new XY(3, 4));
      shogi3.move(new XY(8, 2), new XY(3, 2));
      shogi3.move(new XY(2, 2), new XY(4, 4));

      const shogi2 = shogi.clone(2);
      expect(shogi2.kifu.getTesuu()).toBe(2);
      expect(shogi2.teban.get()).toBe(2);
      shogi2.move(new XY(5, 7), new XY(5, 6));
    });
    it("Rule with pass", () => {
      const shogi = Shogi.ofRuleId(66); // スピード将棋
      shogi.start();
      shogi.move(new XY(7, 7), new XY(7, 6));
      shogi.move(new XY(7, 6), new XY(7, 5));
      shogi.move(new XY(7, 5), new XY(7, 4));
      shogi.pass();
      shogi.move(new XY(3, 3), new XY(3, 4));

      const shogi4 = shogi.clone(4);
      expect(shogi4.kifu.getTesuu()).toBe(4);
      expect(shogi4.getObject()).toEqual(shogi.getObject());
      expect(shogi4.teban.get()).toBe(1);
      shogi4.pass();
      expect(shogi4.teban.get()).toBe(0);
      shogi4.move(new XY(8, 8), new XY(2, 2));
      expect(shogi4.teban.get()).toBe(1);

      const shogi3 = shogi.clone(3);
      expect(shogi3.kifu.getTesuu()).toBe(3);
      expect(shogi3.teban.get()).toBe(1);

      const shogi2 = shogi.clone(2);
      const shogi2Snapshot = shogi2.getObject();
      expect(shogi2.kifu.getTesuu()).toBe(0);
      expect(shogi2.teban.get()).toBe(0);
      shogi2.move(new XY(7, 7), new XY(7, 6));
      shogi2.move(new XY(7, 6), new XY(7, 5));
      shogi2.move(new XY(7, 5), new XY(7, 4));
      shogi2.pass();
      shogi2.move(new XY(3, 3), new XY(3, 4));
      expect(shogi2.teban.get()).toBe(1);

      const shogi1 = shogi.clone(1);
      expect(shogi1.getObject()).toEqual(shogi2Snapshot);

      const shogi0 = shogi.clone(0);
      expect(shogi0.getObject()).toEqual(shogi2Snapshot);
    });
    it.only("Piece with moving", () => {
      const shogi = Shogi.ofRuleId(22); // 獅子王
      shogi.start();
      shogi.move(new XY(5, 1), new XY(5, 2));
      shogi.move(new XY(5, 2), new XY(5, 3));
      shogi.move(new XY(7, 7), new XY(7, 6));
      shogi.move(new XY(5, 3), new XY(5, 4));
      expect(shogi.teban.get()).toBe(0); // 上手

      const shogi4 = shogi.clone(4);
      expect(shogi4.kifu.getTesuu()).toBe(4);
      expect(shogi4.teban.get()).toBe(0); // 上手
      expect(shogi4.getObject()).toEqual(shogi.getObject());
      shogi4.move(new XY(5, 4), new XY(5, 5));
      shogi4.move(new XY(8, 8), new XY(5, 5));
      expect(shogi4.status.num).toBe(Status.ENDED);

      const shogi3 = shogi.clone(3);
      expect(shogi3.kifu.getTesuu()).toBe(3);
      expect(shogi3.teban.get()).toBe(0); // 上手
      shogi3.move(new XY(5, 3), new XY(5, 4));
      shogi3.move(new XY(5, 4), new XY(5, 5));
      shogi3.move(new XY(8, 8), new XY(5, 5));
      expect(shogi3.status.num).toBe(Status.ENDED);

      const shogi2 = shogi.clone(2);
      expect(shogi2.kifu.getTesuu()).toBe(2);
      expect(shogi2.teban.get()).toBe(1); // 下手
      shogi2.move(new XY(2, 7), new XY(2, 6));
      expect(shogi2.teban.get()).toBe(0); // 上手

      const shogi1 = shogi.clone(1);
      expect(shogi1.kifu.getTesuu()).toBe(0);
    });
  });
});
