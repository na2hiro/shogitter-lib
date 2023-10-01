import { ShogiSerialization } from "@shogitter/core";
import { KifuCommand } from "@shogitter/core";

export type GoArgs = {
  shogi: ShogiSerialization;
};
export interface Player {
  go: (args: GoArgs) => Promise<KifuCommand>;
}
