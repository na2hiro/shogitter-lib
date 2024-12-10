import Shogi from "../../src/Shogi";
import XY from "../../src/XY";
import { describe, it, expect } from "vitest";

describe("Shogi 2494800", () => {
  it("always has fixed FU and other placement", () => {
    for (let i = 0; i < 10; i++) {
      let shogi = Shogi.ofRuleId(115);
      shogi.start();
      const { ban } = shogi;
      expect(ban.get(new XY(9, 8)).species).toBeNull();
      expect(ban.get(new XY(1, 8)).species).toBeNull();
      expect(ban.get(new XY(2, 7)).species).toBe("aa");
      expect(ban.get(new XY(9, 7)).species).toBe("aa");

      expect(ban.get(new XY(9, 9)).species).not.toBeNull();
      expect(ban.get(new XY(8, 9)).species).not.toBeNull();
      expect(ban.get(new XY(7, 9)).species).not.toBeNull();
      expect(ban.get(new XY(6, 9)).species).not.toBeNull();
      expect(ban.get(new XY(8, 8)).species).not.toBeNull();

      expect(ban.get(new XY(5, 9)).species).not.toBeNull();

      expect(ban.get(new XY(1, 1)).species).not.toBeNull();
      expect(ban.get(new XY(2, 1)).species).not.toBeNull();
      expect(ban.get(new XY(3, 1)).species).not.toBeNull();
      expect(ban.get(new XY(4, 1)).species).not.toBeNull();
      expect(ban.get(new XY(2, 2)).species).not.toBeNull();

      // point symmetry
      expect(ban.get(new XY(8, 2)).species).toBe(ban.get(new XY(2, 8)).species);
      expect(ban.get(new XY(5, 8)).species).toBe(ban.get(new XY(5, 2)).species);
      expect(ban.get(new XY(7, 9)).species).toBe(ban.get(new XY(3, 1)).species);
    }
  });
});
