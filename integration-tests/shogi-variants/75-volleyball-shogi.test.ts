import Shogi from "../../src/Shogi";
import { move, rawMove, put, rawPut } from "../utils/shogiUtils";

describe("Volleyball shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(75);
    shogi.start();
  });
  it("cannot move same piece twice", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 8, 8, 3, 3, true);
    expect(() => rawMove(shogi, 3, 3, 5, 1)).toThrow();
  });
  it("cannot move same piece twice, including put", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 8, 8, 3, 3, true);
    move(shogi, 1, 7, 1, 6);
    move(shogi, 2, 2, 3, 3);
    put(shogi, 9, 5, "af");
    expect(() => rawMove(shogi, 9, 5, 5, 9)).toThrow();
  });
  it("doesn't finish when it's checkmate at the moment", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 8, 8, 3, 3, false);
    move(shogi, 5, 7, 5, 6);
    move(shogi, 3, 1, 4, 2);
    move(shogi, 5, 3, 5, 4);
    move(shogi, 5, 1, 5, 2);
    move(shogi, 3, 3, 4, 2, false);
    put(shogi, 5, 3, "ad");
    move(shogi, 8, 9, 7, 7);
    move(shogi, 4, 1, 4, 2);
    move(shogi, 5, 2, 5, 3);
    put(shogi, 9, 5, "af");
    expect(shogi).toMatchSnapshot();
  });
  it("finishes when king is captured", () => {
    move(shogi, 7, 7, 7, 6);
    move(shogi, 8, 9, 7, 7);
    move(shogi, 6, 7, 6, 6);
    move(shogi, 5, 1, 4, 2);
    move(shogi, 3, 3, 3, 4);
    move(shogi, 1, 3, 1, 4);
    move(shogi, 1, 7, 1, 6);
    move(shogi, 2, 9, 1, 7);
    move(shogi, 1, 9, 1, 8);
    move(shogi, 4, 2, 3, 3);
    move(shogi, 9, 3, 9, 4);
    move(shogi, 9, 1, 9, 3);
    move(shogi, 7, 7, 8, 5);
    move(shogi, 6, 6, 6, 5);
    move(shogi, 8, 8, 3, 3, true);
  });
});
