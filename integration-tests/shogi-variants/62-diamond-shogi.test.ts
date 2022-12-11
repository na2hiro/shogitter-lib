import Shogi from "../../src/Shogi";
import { move } from "../utils/shogiUtils";

describe("Diamond shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(62);
    shogi.start();
  });
  it("can move", () => {
    move(shogi, 8, 8, 6, 6);
    move(shogi, 2, 1, 4, 5);
    move(shogi, 2, 9, 4, 5);
    move(shogi, 2, 2, 4, 4);
    move(shogi, 4, 5, 6, 1);
    expect(shogi).toMatchSnapshot();
  });
});
