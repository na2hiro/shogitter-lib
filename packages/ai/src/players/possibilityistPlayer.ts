import { Move, Shogi, ShogiSerialization, Direction } from "@shogitter/core";

import { EngineArgs, GameStateArgs, Player } from "../Player.js";
import { ShogiGame } from "../search/ShogiGame.js";
import { BestMove, minimax, MinimaxGame } from "../search/minimax.js";

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
    const ended = this.shogi.isEnded();
    if (ended) {
      // TODO: this doesn't happen by some reasons and bot is ignorant on checkmate
      console.log("ended", ended.kifu[0][1]);
      return ended.kifu[0][1] === "1" ? Infinity : -Infinity;
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
  { depth }: EngineArgs
) {
  const shogi = Shogi.ofJkf(obj);

  const game = new PossibilityScoringShogiGame(shogi);
  console.log("> minimax", depth);
  let result: BestMove<Move> = minimax(game, depth);
  console.log("< minimax", result);

  return result.moves[0];
};

export default {
  go,
} satisfies Player;

function countPossibility(moves: Move[]) {
  // Don't distinguish 成/不成, otherwise it prefers not promoting to keep both possibilities
  return moves.filter((m) => m.type === "put" || !m.nari).length;
}
