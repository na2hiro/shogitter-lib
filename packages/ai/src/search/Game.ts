export interface Game<Move> {
  getMoves(): Move[];
  doMove(move: Move): void;
  undoMove(move: Move): void;
}
