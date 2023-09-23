import { ShogiSerialization } from "@shogitter/core";
import { KifuCommand } from "@shogitter/core/lib/Command";

export type GoArgs = {
  shogi: ShogiSerialization;
};
export default interface Bot {
  go: (args: GoArgs) => Promise<KifuCommand>;
}
