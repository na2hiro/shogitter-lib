import Shogi from "../../src/Shogi";
import { move, put } from "../utils/shogiUtils";

describe("Kyoto Ginkaku shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(19);
    shogi.start();
  });
  it("can move", () => {
    move(shogi, 5, 5, 4, 4);
    move(shogi, 5, 1, 5, 2);
    expect(shogi).toMatchSnapshot();
    move(shogi, 4, 4, 4, 1);
    expect(shogi).toMatchSnapshot();
  });
});
