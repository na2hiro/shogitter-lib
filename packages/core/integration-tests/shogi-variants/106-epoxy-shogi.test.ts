import Shogi from "../../src/Shogi";
import { move, rawMove, put } from "../utils/shogiUtils";
import { XY } from "../../src";

describe("Epoxy shogi", () => {
  it("can move", () => {
    const shogi = Shogi.ofRuleId(106);
    shogi.start();
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 8, 8, 3, 3);
    move(shogi, 3, 4, 3, 5);
    expect(shogi).toMatchSnapshot();
    expect(() => {
      rawMove(shogi, 3, 4, 4, 5);
    }).toThrow("二歩です");
  });
  it("cannot move when pieces overlap", () => {
    const shogi = Shogi.ofRuleId(106);
    shogi.start();
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 8, 8, 3, 3, true);
    move(shogi, 5, 1, 6, 2);
    expect(() => {
      rawMove(shogi, 3, 3, 3, 2);
    }).toThrow("駒が重なります");
  });
});
