import { ShogiSerialization } from "@shogitter/core";
import { KifuCommand } from "@shogitter/core";

export type GameStateArgs = {
  shogi: ShogiSerialization;
};
export type EngineArgs = {
  depth: number;
};
export interface Player {
  go: (args: GameStateArgs, engineArgs?: EngineArgs) => Promise<KifuCommand>;
}
