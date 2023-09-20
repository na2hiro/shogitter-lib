import Shogi from "../../src/Shogi";
import { move } from "../utils/shogiUtils";

describe("Naname shogi", () => {
  it("generated correct display kifu", () => {
    const shogi = Shogi.ofRuleId(32);
    shogi.start();
    move(shogi, 5, 7, 4, 6);

    expect(shogi.kifu.arrayKifu[0].disp).not.toContain("undefined");
  });
});
