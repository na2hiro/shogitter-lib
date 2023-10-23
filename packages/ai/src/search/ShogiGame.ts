import { Game } from "./Game.js";
import { Move, Shogi, Status } from "@shogitter/core";

export class ShogiGame implements Game<Move> {
  private cachedMoves: Map<string, Move[]> = new Map();
  protected shogi: Shogi;

  constructor(shogi: Shogi) {
    this.shogi = shogi;
  }

  doMove(move: Move): void {
    this.shogi.runCommand(move);
  }

  getMoves(): Move[] {
    const hash = this.shogi.getHash();
    if (this.cachedMoves.has(hash)) {
      // console.log("hit");
      return this.cachedMoves.get(hash)!;
    }
    // console.log("miss");
    let reusableShogi: Shogi | null = null;
    const moves = this.shogi.generateMoves().filter((move) => {
      try {
        if (reusableShogi == null) {
          reusableShogi = Shogi.ofJkf(
            JSON.parse(JSON.stringify(this.shogi.getObject()))
          );
        }
        reusableShogi.runCommand(move);
        try {
          reusableShogi.rollback(1, true);
        } catch (e) {
          reusableShogi = null;
        }
        return true;
      } catch (e) {
        if (!("exceptionReasons" in self)) {
          (self as any)["exceptionReasons"] = {};
        }
        const { exceptionReasons } = self as any;
        if (!exceptionReasons[e.message]) exceptionReasons[e.message] = 0;
        exceptionReasons[e.message]++;

        reusableShogi = null;
        return false;
      }
    });
    this.cachedMoves.set(hash, moves);
    return moves;
  }

  undoMove(move: Move): void {
    this.shogi.rollback(1, true);
  }
}
