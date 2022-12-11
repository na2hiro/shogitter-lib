import Shogi from "../../src/Shogi";
import { move } from "../utils/shogiUtils";

describe.skip("Chess", () => {
  it("can en passant", () => {
    const shogi = Shogi.ofRuleId(76);
    shogi.start();

    move(shogi, 6, 7, 6, 5);
    move(shogi, 8, 2, 8, 3);
    move(shogi, 6, 5, 6, 4);
    move(shogi, 5, 2, 5, 4);
    move(shogi, 6, 4, 5, 3);
    expect(shogi).toMatchSnapshot();
  });
  it("can do castling", () => {});
});
