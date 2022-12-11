import Shogi from "../../src/Shogi";
import { move, put } from "../utils/shogiUtils";
import XY from "../../src/XY";
import { Direction } from "../../src/Direction";

describe("Quantum shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(108);
    shogi.start();
  });
  it("can move", () => {
    move(shogi, 7, 7, 6, 5);
    expect(shogi).toMatchSnapshot();
    expect(shogi.ban.get(new XY(6, 5)).getMovable()).toMatchSnapshot();
  });
  it("can go back and forget", () => {
    move(shogi, 7, 7, 5, 5);
    shogi.runCommand({ type: "rollback" });
    move(shogi, 7, 7, 5, 5);
  });
  it("can go back and forget", () => {
    move(shogi, 6, 7, 5, 5);
    move(shogi, 1, 3, 1, 5);
    move(shogi, 9, 7, 8, 5);
    shogi.runCommand({ type: "rollback" });
    move(shogi, 9, 7, 8, 5);
  });
  it("can go back and forget, including capture", () => {
    move(shogi, 6, 7, 5, 5);
    move(shogi, 5, 3, 5, 5);
    move(shogi, 4, 7, 5, 5);
    shogi.runCommand({ type: "rollback" });
    move(shogi, 4, 7, 5, 5);
  });
  it("can put piece with id", () => {
    move(shogi, 7, 7, 6, 5);
    move(shogi, 6, 3, 6, 5);
    move(shogi, 5, 7, 5, 3, true);
    move(shogi, 4, 3, 5, 3);
    move(shogi, 1, 7, 1, 6);
    put(shogi, 9, 5, "ff", 0);
    expect(shogi.ban.get(new XY(9, 5)).getMovable()).toMatchSnapshot();
    shogi.runCommand({ type: "rollback" });
    put(shogi, 9, 5, "ff", 1);
    expect(shogi.ban.get(new XY(9, 5)).getMovable()).toMatchSnapshot();
  });
  // King is not determined after everything is captured
  it("can finish when everything is taken", () => {
    move(shogi, 9, 7, 9, 3, true);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 9, 3, 8, 3);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 8, 3, 8, 2);
    move(shogi, 6, 1, 6, 2);
    move(shogi, 8, 2, 8, 1);
    move(shogi, 7, 1, 7, 2);
    move(shogi, 8, 1, 7, 2);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 7, 2, 7, 3);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 7, 3, 6, 3);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 6, 3, 5, 3);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 5, 3, 4, 3);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 4, 3, 3, 3);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 3, 3, 2, 3);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 2, 3, 1, 3);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 1, 3, 1, 1);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 1, 1, 2, 2);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 2, 2, 2, 1);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 2, 1, 3, 1);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 3, 1, 4, 1);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 4, 1, 5, 1);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 5, 1, 6, 2);
    expect(shogi).toMatchSnapshot();
    move(shogi, 9, 1, 9, 2);
    expect(shogi).toMatchSnapshot();
    //expect(shogi.ban.get(new XY(9, 2)).getMovable()).toHaveLength(5) // of king
    move(shogi, 6, 2, 9, 2);
    expect(shogi).toMatchSnapshot();
  });
  it("can finish when all other pieces has been captured once", () => {
    move(shogi, 9, 7, 9, 3, true);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 9, 3, 8, 3);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 8, 3, 7, 3);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 7, 3, 6, 3);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 6, 3, 5, 3);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 5, 3, 4, 3);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 4, 3, 3, 3);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 3, 3, 2, 3);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 2, 3, 1, 3);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 1, 3, 2, 2);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 2, 2, 1, 1);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 1, 1, 2, 1);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 2, 1, 3, 1);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 3, 1, 4, 1);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 4, 1, 5, 1);
    move(shogi, 9, 1, 9, 2);
    move(shogi, 5, 1, 6, 1);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 6, 1, 7, 1);
    move(shogi, 9, 1, 9, 2);
    put(shogi, 9, 1, "ff", 0);
    move(shogi, 9, 2, 9, 1);
    move(shogi, 7, 1, 8, 1);
    put(shogi, 7, 1, "ff", 0);
    move(shogi, 8, 1, 9, 1);
    move(shogi, 7, 1, 7, 2);
    expect(shogi).toMatchSnapshot();
    move(shogi, 9, 1, 8, 2);
  });
  it("put 2 pieces in a row", () => {
    move(shogi, 7, 7, 7, 3, true);
    move(shogi, 8, 1, 7, 3, true);
    move(shogi, 7, 9, 7, 3, true);
    move(shogi, 6, 1, 7, 3, true);
    put(shogi, 5, 5, "ff", 0);
    move(shogi, 1, 3, 1, 4);
    put(shogi, 4, 5, "ff", 0);
  });
  it("Resign should contain quantum data", () => {
    move(shogi, 7, 7, 7, 3, true);
    const beforeResign = shogi.getObject();
    shogi.runCommand({
      direction: Direction.BLACK,
      type: "resign",
    });
    // No quantum situation should be changed due to resign
    expect(shogi.kifu.arrayKifu[0].data.quantum).toEqual(
      shogi.kifu.arrayKifu[1].data.quantum
    );

    const shogi2 = Shogi.ofJkf(beforeResign);
    shogi2.runCommand({
      direction: Direction.BLACK,
      type: "resign",
    });
    // No quantum situation should be changed due to resign
    expect(shogi2.kifu.arrayKifu[0].data.quantum).toEqual(
      shogi2.kifu.arrayKifu[1].data.quantum
    );
  });
});
