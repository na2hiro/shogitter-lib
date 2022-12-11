import Shogi from "../../src/Shogi";
import { move } from "../utils/shogiUtils";

describe("Hasami shogi", () => {
  it("finishes if one has only 4 piece", () => {
    const shogi = Shogi.ofRuleId(39);
    shogi.start();
    move(shogi, 9, 9, 9, 6);
    move(shogi, 9, 1, 9, 5);
    move(shogi, 9, 6, 1, 6);
    move(shogi, 9, 5, 9, 9);
    move(shogi, 3, 9, 3, 6);
    move(shogi, 3, 1, 3, 5);
    move(shogi, 3, 6, 2, 6);
    move(shogi, 3, 5, 3, 9);
    expect(shogi.status.num).toBe(2);
  });
});
