import Shogi from "../../src/Shogi";
import { assertCell, assertCellIsNull, move } from "../utils/shogiUtils";

describe("Reflect bishop shogi", () => {
  it("can go back", () => {
    const shogi = Shogi.ofRuleId(37);
    shogi.start();
    move(shogi, 9, 7, 9, 6);
    move(shogi, 3, 1, 3, 2);
    move(shogi, 8, 8, 5, 3, true);
    move(shogi, 2, 2, 5, 3);
    expect(shogi).toMatchSnapshot();
  });
});
