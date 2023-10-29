import { describe, it } from "vitest";
import { PutCommand, Shogi } from "../../src";
import { move } from "../utils/shogiUtils";

describe("Go", () => {
  it("can generate moves using infinite amount of hands", () => {
    const shogi = Shogi.ofRuleId(85);
    const moves = shogi.generateMoves();
    expect(moves).toHaveLength(19 * 19);
    expect(moves[1].type).toBe("put");
    expect((moves[1] as PutCommand).put).toBe("yo");
  });
});
