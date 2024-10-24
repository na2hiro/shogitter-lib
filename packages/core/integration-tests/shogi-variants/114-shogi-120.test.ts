import Shogi, { ShogitterCoreException } from "../../src/Shogi";
import XY from "../../src/XY";
import { Koma } from "../../src";

describe("Shogi 120", () => {
  function expectEqualOrKaHi(a: Koma, b: Koma) {
    expect(a.direction).toBe(b.direction);
    if (a.species === "af") {
      expect(b.species).toBe("ag");
    } else {
      expect(a.species).toBe(b.species);
    }
  }

  it("always has fixed FU, OU", () => {
    for (let i = 0; i < 10; i++) {
      let shogi = Shogi.ofRuleId(114);
      shogi.start();
      const { ban } = shogi;
      expect(ban.get(new XY(5, 9)).species).toBe("ah");
      expect(ban.get(new XY(5, 1)).species).toBe("ah");
      expect(ban.get(new XY(2, 7)).species).toBe("aa");
      expect(ban.get(new XY(9, 7)).species).toBe("aa");

      expectEqualOrKaHi(ban.get(new XY(9, 9)), ban.get(new XY(1, 9)));
      expectEqualOrKaHi(ban.get(new XY(8, 9)), ban.get(new XY(2, 9)));
      expectEqualOrKaHi(ban.get(new XY(7, 9)), ban.get(new XY(3, 9)));
      expectEqualOrKaHi(ban.get(new XY(6, 9)), ban.get(new XY(4, 9)));
      expectEqualOrKaHi(ban.get(new XY(8, 8)), ban.get(new XY(2, 8)));

      expectEqualOrKaHi(ban.get(new XY(1, 1)), ban.get(new XY(9, 1)));
      expectEqualOrKaHi(ban.get(new XY(2, 1)), ban.get(new XY(8, 1)));
      expectEqualOrKaHi(ban.get(new XY(3, 1)), ban.get(new XY(7, 1)));
      expectEqualOrKaHi(ban.get(new XY(4, 1)), ban.get(new XY(6, 1)));
      expectEqualOrKaHi(ban.get(new XY(2, 2)), ban.get(new XY(8, 2)));

      // point symmetry
      expect(ban.get(new XY(8, 2)).species).toBe(ban.get(new XY(2, 8)).species);
      expect(ban.get(new XY(5, 8)).species).toBe(ban.get(new XY(5, 2)).species);
      expect(ban.get(new XY(7, 9)).species).toBe(ban.get(new XY(3, 1)).species);
    }
  });
});
