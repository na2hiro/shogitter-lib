import Shogi from "../../src/Shogi";
import { assertCell, assertCellIsNull, move } from "../utils/shogiUtils";

describe("Kiruke shogi", () => {
  it("can go back", () => {
    const shogi = Shogi.ofRuleId(36);
    shogi.start();
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 8, 8, 2, 2, true);
    move(shogi, 3, 1, 2, 2);
    expect(shogi).toMatchSnapshot();
  });
});
