import { ShogiSerialization } from "@shogitter/core";
import { KifuCommand } from "@shogitter/core";

export type GameStateArgs = {
  shogi: ShogiSerialization;
};
export type EngineArgs = {
  depth: number;
  trace?: boolean;
};
export interface Player {
  go: (args: GameStateArgs, engineArgs?: EngineArgs) => Promise<KifuCommand>;
}
