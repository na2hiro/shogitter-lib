import Shogi from "../../src/Shogi";
import { move } from "../utils/shogiUtils";

describe("Speed shogi", () => {
  it("can pass", () => {
    const shogi = Shogi.ofRuleId(66);
    shogi.start();
    move(shogi, 7, 7, 7, 6);
    move(shogi, 7, 6, 7, 5);
    move(shogi, 7, 5, 7, 4);
    shogi.runCommand({ type: "pass" });

    move(shogi, 5, 1, 4, 2);
  });

  it("cannot eat friend", () => {
    const shogi = Shogi.ofRuleId(66);
    shogi.start();
    expect(() => move(shogi, 8, 8, 9, 9)).toThrowError();
  });
});
