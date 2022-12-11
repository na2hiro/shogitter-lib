import Shogi from "../../src/Shogi";
import { move, rawMove, put } from "../utils/shogiUtils";

describe("Toruichi shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(28);
    shogi.start();
  });
  it("must capture", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    expect(() => {
      rawMove(shogi, 6, 7, 6, 6);
    }).toThrow();
  });
  it("must capture 2", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    expect(() => {
      rawMove(shogi, 8, 8, 7, 7);
    }).toThrow();
  });
  it("can move if captured", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 8, 8, 2, 2, true);
    move(shogi, 3, 1, 2, 2);
  });
});
