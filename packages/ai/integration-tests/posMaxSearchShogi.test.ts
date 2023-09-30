import { Shogi } from "@shogitter/core";
import { PossibilityScoringShogiGame } from "../src/players/possibilityMaximizerPlayer";
import { minimax } from "../src/search/minimax";
import type { randomSelect } from "../src/search/utils";

vi.mock("../src/search/utils", () => {
  const randomSelectMock: typeof randomSelect = <T>(arr: T[]) => {
    return arr[0];
  };
  return {
    randomSelect: randomSelectMock,
  };
});

describe("posMaxSearch with Shogi", () => {
  let shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(0);
    shogi.start();
  });

  it("returns no move with depth=0", async () => {
    const game = new PossibilityScoringShogiGame(shogi);

    const result = minimax(game, 0);

    expect(result.moves).toHaveLength(0);
  });

  it("returns something with depth=1", async () => {
    const game = new PossibilityScoringShogiGame(shogi);

    const result = minimax(game, 1);

    expect(result).toMatchInlineSnapshot(`
      {
        "moves": [
          {
            "from": [
              7,
              7,
            ],
            "nari": false,
            "to": [
              7,
              6,
            ],
            "type": "move",
          },
        ],
        "score": 5,
      }
    `);
  });
});
