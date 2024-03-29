import { PlayerType } from "../playerRegistry.js";
import { Player } from "../Player.js";
import randomPlayer from "./randomPlayer.js";
import possibilityistPlayer from "./possibilityistPlayer.js";

export function loadModuleOnServer(playerType: PlayerType): Player {
  switch (playerType) {
    case "random":
      return randomPlayer;
    case "possibilityist":
      return possibilityistPlayer;
  }
}
