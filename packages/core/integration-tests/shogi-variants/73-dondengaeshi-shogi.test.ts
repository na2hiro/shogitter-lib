import Shogi from "../../src/Shogi";
import { move } from "../utils/shogiUtils";

describe("Donden Gaeshi shogi", () => {
  it("can move", () => {
    const shogi = Shogi.ofRuleId(73);
    shogi.start();
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 8, 8, 2, 2, true);
    move(shogi, 2, 1, 2, 2);
    expect(shogi).toMatchSnapshot();
  });
});
