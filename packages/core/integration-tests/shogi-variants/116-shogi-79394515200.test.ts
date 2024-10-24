import Shogi, { ShogitterCoreException } from "../../src/Shogi";
import XY from "../../src/XY";
import { Koma } from "../../src";

describe("Shogi 79394515200", () => {
  it("always has fixed FU", () => {
    for (let i = 0; i < 10; i++) {
      let shogi = Shogi.ofRuleId(116);
      shogi.start();
      const { ban } = shogi;
      expect(ban.get(new XY(2, 7)).species).toBe("aa");
      expect(ban.get(new XY(9, 7)).species).toBe("aa");

      // point symmetry
      expect(ban.get(new XY(8, 2)).species).toBe(ban.get(new XY(2, 8)).species);
      expect(ban.get(new XY(5, 8)).species).toBe(ban.get(new XY(5, 2)).species);
      expect(ban.get(new XY(7, 9)).species).toBe(ban.get(new XY(3, 1)).species);
    }
  });
});
