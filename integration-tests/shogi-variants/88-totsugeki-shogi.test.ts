import Shogi from "../../src/Shogi";
import { move, rawMove, put, rawPut } from "../utils/shogiUtils";

describe("Totsugeki shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(88);
    shogi.start();
  });
  it("can move", () => {
    move(shogi, 5, 9, 6, 8);
    move(shogi, 3, 3, 3, 4);
    expect(() => rawMove(shogi, 6, 8, 5, 9)).toThrow();
  });
});
