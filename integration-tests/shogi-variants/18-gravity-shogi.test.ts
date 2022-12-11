import Shogi from "../../src/Shogi";
import { move, put } from "../utils/shogiUtils";

describe("Gravity shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(18);
    shogi.start();
  });
  it("can move", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 9, 9, 9, 1);
    move(shogi, 8, 1, 9, 3);
    move(shogi, 8, 1, 7, 1);
    move(shogi, 6, 1, 7, 1);
    expect(shogi).toMatchSnapshot();
    put(shogi, 4, 5, "ab");
    expect(shogi).toMatchSnapshot();
  });
});
