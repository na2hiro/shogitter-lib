import Shogi from "../../src/Shogi";
import { move, rawMove, put, rawPut } from "../utils/shogiUtils";

describe("Taimen shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(72);
    shogi.start();
  });
  it("can chain", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 8, 8, 2, 2);
    move(shogi, 4, 3, 4, 4);
    move(shogi, 7, 6, 7, 5);
    move(shogi, 2, 1, 8, 7);
    expect(shogi).toMatchSnapshot();
  });
});
