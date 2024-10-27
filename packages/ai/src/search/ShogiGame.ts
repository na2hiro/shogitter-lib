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
    // TODO: shogi's hash must contain teban, but it's hold back due to backward compatibility
    const hash = this.shogi.getHash() + this.shogi.teban.get();
    if (this.cachedMoves.has(hash)) {
      return this.cachedMoves.get(hash)!;
    }
    // console.log("miss");
    let reusableShogi: Shogi | null = null;
    const moves = this.shogi.generateMoves().filter((move) => {
      try {
        if (reusableShogi == null) {
          reusableShogi = this.shogi.clone();
        }
        reusableShogi.runCommand(move);
        try {
          reusableShogi.rollback(1, true);
        } catch (e) {
          reusableShogi = null;
        }
        return true;
      } catch (e) {
        if (typeof self !== "undefined") {
          if (!("exceptionReasons" in self)) {
            (self as any)["exceptionReasons"] = {};
          }
          const { exceptionReasons } = self as any;
          if (!exceptionReasons[e.message]) exceptionReasons[e.message] = 0;
          exceptionReasons[e.message]++;
        }

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
