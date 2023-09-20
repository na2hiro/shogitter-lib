import Shogi from "../../src/Shogi";
import { move } from "../utils/shogiUtils";

describe("Under water shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(77);
    shogi.start();
  });
  it("can move", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 2, 3, 2, 4);
    move(shogi, 8, 8, 3, 3, true);
    move(shogi, 8, 3, 8, 4);
    expect(shogi).toMatchSnapshot();
  });
});
