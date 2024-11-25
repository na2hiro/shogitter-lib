import { Move, Shogi, Direction } from "@shogitter/core";

import { EngineArgs, GameStateArgs, Player } from "../Player.js";
import { ShogiGame } from "../search/ShogiGame.js";
import { BestMove, minimax, MinimaxGame } from "../search/minimax.js";
import { ShogitterAiException } from "../ShogitterAiException.js";
import { Status } from "@shogitter/core";

/**
 * Note: With depth=2, pac man appears
 */
export class PossibilityScoringShogiGame
  extends ShogiGame
  implements MinimaxGame<Move>
{
  isTurnForPositive(): boolean {
    return this.shogi.teban.getNowDirection() === Direction.BLACK;
  }

  minimaxScore(): number {
    // TODO: this.shogi.end should work but somehow not
    const ended = this.shogi.status.num === Status.ENDED;
    if (ended) {
      const kifu = this.shogi.kifu.get(
        this.shogi.kifu.getTesuu() - 1
      ) as string;
      return (
        (kifu[1] === "9" ? 0 : kifu[1] === "1" ? -Infinity : Infinity) *
        (this.isTurnForPositive() ? 1 : -1)
      );
    }
    // This contains illegal moves, but is cheap
    const [myMove, othersMove] = this.shogi.generateMoves(true);

    return (
      (countPossibility(myMove) - countPossibility(othersMove)) *
      (this.isTurnForPositive() ? 1 : -1)
    );
  }
}

const go: Player["go"] = async function (
  { shogi: obj }: GameStateArgs,
  { depth, trace }: EngineArgs
) {
  const shogi = Shogi.ofJkf(obj);

  const game = new PossibilityScoringShogiGame(shogi);
  console.log("> minimax", depth);
  let result: BestMove<Move> = minimax(game, depth, trace);
  console.log("< minimax", result);

  if (result.moves.length === 0) {
    throw new ShogitterAiException("合法手が見つかりませんでした");
  }

  return result.moves[0];
};

export default {
  go,
} satisfies Player;

function countPossibility(moves: Move[]) {
  // Don't distinguish 成/不成, otherwise it prefers not promoting to keep both possibilities
  return moves.filter((m) => m.type !== "move" || !m.nari).length;
}
