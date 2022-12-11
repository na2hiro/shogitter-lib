import Shogi from "../../src/Shogi";
import { move, rawMove } from "../utils/shogiUtils";

describe("Madras shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(40);
    shogi.start();
  });
  it("cannot move when it can be captured by a piece with the same kind", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    expect(() => rawMove(shogi, 8, 8, 2, 2, true)).toThrow();
  });
});
