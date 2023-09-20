import Shogi from "../../src/Shogi";
import { move } from "../utils/shogiUtils";

describe("Shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(0);
    shogi.start();
  });
  it("can move", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 8, 8, 2, 2, true);
    move(shogi, 3, 1, 2, 2);
    expect(shogi).toMatchSnapshot();
    shogi.runCommand({ type: "rollback" });
    shogi.runCommand({ type: "rollback" });
    shogi.runCommand({ type: "rollback" });
    shogi.runCommand({ type: "rollback" });
    expect(shogi).toMatchSnapshot();
  });
});
