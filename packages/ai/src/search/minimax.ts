import { Game } from "./Game.js";
import ShogitterAiException from "../ShogitterAiException.js";
import { randomSelect } from "./utils.js";

export interface MinimaxGame<Move> extends Game<Move> {
  minimaxScore(): number;

  isTurnForPositive(): boolean;
}

export type BestMove<Move> = {
  moves: Move[];
  score: number;
};

export function minimax<Move>(
  game: MinimaxGame<Move>,
  depth: number
): BestMove<Move> {
  return search(game, depth, []);

  function search(
    game: MinimaxGame<Move>,
    depth: number,
    moveSoFar: Move[]
  ): BestMove<Move> {
    if (depth === 0) {
      return { moves: moveSoFar, score: game.minimaxScore() };
    }
    const moves = game.getMoves();
    if (moves.length === 0) {
      return { moves: moveSoFar, score: game.minimaxScore() };
    }
    const isTurnForPositive = game.isTurnForPositive();
    let score = isTurnForPositive ? -Infinity : Infinity;
    let bestMoves: Move[] = [];
    for (const move of moves) {
      try {
        game.doMove(move);
      } catch (e) {
        console.error("error moving", move, e, game);
        throw e;
      }
      const result = search(game, depth - 1, [...moveSoFar, move]);
      if (result.score > 999 || result.score < -999) {
        console.log("score is ", result.score, "with move", move);
      }
      if (score === result.score) {
        bestMoves.push(move);
      } else if (isTurnForPositive) {
        if (score < result.score) {
          score = result.score;
          bestMoves = [move];
        }
      } else {
        if (score > result.score) {
          score = result.score;
          bestMoves = [move];
        }
      }
      game.undoMove(move);
    }

    return { moves: [...moveSoFar, randomSelect(bestMoves)], score };
  }
}
