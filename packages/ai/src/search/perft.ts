import { Game } from "./Game.js";

export function perft<T>(game: Game<T>, depth: number) {
  if (depth == 0) return 1;
  let res = 0;
  for (const move of game.getMoves()) {
    game.doMove(move);
    res += perft(game, depth - 1);
    game.undoMove(move);
  }
  return res;
}
