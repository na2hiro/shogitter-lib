import Shogi from "../../src/Shogi";
import { move, put } from "../utils/shogiUtils";

describe("Shishiou", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(22);
    shogi.start();
  });
  it("can move", () => {
    move(shogi, 5, 1, 5, 3);
    move(shogi, 7, 7, 7, 6);
    move(shogi, 5, 3, 6, 4);
    move(shogi, 6, 4, 6, 5);
    expect(shogi).toMatchSnapshot();
  });
});
