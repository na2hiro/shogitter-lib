import Shogi, { ShogitterCoreException } from "../../src/Shogi";
import { move, put } from "../utils/shogiUtils";
import XY from "../../src/XY";
import { Direction } from "../../src/Direction";

describe("Patrol shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(112);
    shogi.start();
  });
  it("can move freely without capturing", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 8, 8, 5, 5);
    move(shogi, 2, 2, 4, 4);
    move(shogi, 5, 5, 6, 4);
    move(shogi, 4, 4, 8, 8, true);
  });
  it("can't capture if it's not in friend's reach", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 8, 8, 3, 3, true);
    expect(() => {
      move(shogi, 2, 1, 3, 3);
    }).toThrowError(
      new ShogitterCoreException(
        "この駒は味方の利きがないため、駒を取れません。"
      )
    );
  });
  it("can capture if it's in friend's reach", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 1, 3, 2);
    move(shogi, 8, 8, 3, 3, true);
    move(shogi, 2, 1, 3, 3);
  });
});
