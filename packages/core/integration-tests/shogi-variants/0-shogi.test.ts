import Shogi, { Status } from "../../src/Shogi";
import { move, put } from "../utils/shogiUtils";

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

  it("cannot eat friend", () => {
    const shogi = Shogi.ofRuleId(0);
    shogi.start();
    expect(() => move(shogi, 8, 8, 9, 9)).toThrowError();
  });
  function prepareShogiWithAigoma() {
    const shogi = Shogi.ofRuleId(0);
    shogi.start();
    move(shogi, 2, 8, 5, 8);
    move(shogi, 5, 1, 5, 2);
    move(shogi, 6, 7, 6, 6);
    move(shogi, 5, 3, 5, 4);
    move(shogi, 6, 6, 6, 5);
    move(shogi, 5, 4, 5, 5);
    move(shogi, 4, 7, 4, 6);
    move(shogi, 5, 2, 5, 3);
    move(shogi, 4, 6, 4, 5);
    move(shogi, 7, 1, 6, 2);
    move(shogi, 9, 7, 9, 6);
    move(shogi, 3, 1, 4, 2);
    move(shogi, 5, 7, 5, 6);
    move(shogi, 5, 5, 5, 6);
    return shogi;
  }
  it("judges as checkmate when aigoma is not possible", () => {
    const shogi = prepareShogiWithAigoma();
    move(shogi, 5, 8, 5, 6);
    expect(shogi.status.num).toBe(Status.PLAYING);
    put(shogi, 5, 5, "aa");
    move(shogi, 5, 6, 5, 5);
    expect(shogi.status.num).toBe(Status.ENDED);
  });
  it("judges as not checkmate if idouai is possible", () => {
    const shogi = prepareShogiWithAigoma();
    move(shogi, 9, 6, 9, 5);
    move(shogi, 8, 3, 8, 4);
    move(shogi, 9, 5, 9, 4);
    move(shogi, 8, 4, 8, 5);
    move(shogi, 9, 4, 9, 3, true);
    move(shogi, 8, 2, 8, 4);

    move(shogi, 5, 8, 5, 6);
    put(shogi, 5, 5, "aa");
    move(shogi, 5, 6, 5, 5);
    expect(shogi.status.num).toBe(Status.PLAYING);
    move(shogi, 8, 4, 5, 4);
  });
});
