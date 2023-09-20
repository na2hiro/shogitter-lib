import Shogi from "../../src/Shogi";
import { move } from "../utils/shogiUtils";

describe("Othello shogi", () => {
  it("can move", () => {
    const shogi = Shogi.ofRuleId(42);
    shogi.start();
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 8, 8, 3, 3, true);
    move(shogi, 3, 1, 3, 2);
    expect(shogi).toMatchSnapshot();
  });
});
