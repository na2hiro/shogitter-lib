import Shogi from "../src/Shogi";
import XY, { XYMatcher } from "../src/XY";
import { Species } from "../src/Ban";
import { move, rawMove, put } from "./utils/shogiUtils";

describe("Basic", () => {
  it("can move pieces", () => {
    const shogi = Shogi.ofRuleId(0);
    expect(shogi).toMatchSnapshot();
    shogi.start();

    moveAndSnapshot(shogi, 7, 7, 7, 6);
    moveAndSnapshot(shogi, 3, 3, 3, 4);
    moveAndSnapshot(shogi, 8, 8, 2, 2, true);
    moveAndSnapshot(shogi, 3, 1, 2, 2);
    putAndSnapshot(shogi, 4, 5, "af");
    moveAndSnapshot(shogi, 4, 1, 3, 2);
    moveAndSnapshot(shogi, 4, 5, 3, 4);
    putAndSnapshot(shogi, 9, 5, "af");
    moveAndSnapshot(shogi, 7, 9, 6, 8);
  });
  it("throws Error for invalid move", () => {
    const shogi = Shogi.ofRuleId(0);
    shogi.start();

    expect(() => {
      rawMove(shogi, 7, 7, 7, 5);
    }).toThrow();
  });

  it("can judge tsumi", () => {
    const shogi = Shogi.ofRuleId(0);
    expect(shogi).toMatchSnapshot();
    shogi.start();

    move(shogi, 7, 7, 7, 6);
    move(shogi, 5, 3, 5, 4);
    move(shogi, 8, 8, 3, 3, false);
    move(shogi, 3, 1, 4, 2);
    move(shogi, 3, 3, 4, 2, false);
    move(shogi, 5, 1, 5, 2);
    putAndSnapshot(shogi, 5, 3, "ad");
  });

  it("is isomorphic on serialization/deserialization", () => {
    let shogi = Shogi.ofRuleId(0);
    shogi.start();
    shogi = isIso(shogi);
    move(shogi, 7, 7, 7, 6);
    shogi = isIso(shogi);
    move(shogi, 3, 3, 3, 4);
    shogi = isIso(shogi);
    move(shogi, 8, 8, 2, 2, true);
    shogi = isIso(shogi);
    move(shogi, 3, 1, 2, 2);
    shogi = isIso(shogi);
    put(shogi, 4, 5, "af");
    shogi = isIso(shogi);
    move(shogi, 4, 1, 3, 2);
    shogi = isIso(shogi);

    function isIso(shogi: Shogi) {
      const obj = shogi.getObject();
      const shogi2 = Shogi.ofJkf(obj);
      const obj2 = shogi2.getObject();
      expect(obj).toEqual(obj2);
      return shogi2;
    }
  });

  function moveAndSnapshot(
    shogi: Shogi,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    nari = false
  ) {
    const from = new XY(fromX, fromY);
    const movables = shogi.ban.get(from).getMovable();
    expect(movables).toMatchSnapshot();
    const to = movables.filter((move) => XYMatcher(toX, toY)(move.XY))[0].XY;
    expect(to).toBeTruthy();
    shogi.move(from, to, nari);
    expect(shogi).toMatchSnapshot();
  }

  function putAndSnapshot(
    shogi: Shogi,
    toX: number,
    toY: number,
    species: Species
  ) {
    shogi.put(new XY(toX, toY), species, shogi.teban.get());
    expect(shogi).toMatchSnapshot();
  }
});
