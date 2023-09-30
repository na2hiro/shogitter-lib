import { PlayerType } from "../playerRegistry.js";
import Player from "../Player.js";
import randomPlayer from "./randomPlayer.js";
import possibilityMaximizerPlayer from "./possibilityMaximizerPlayer.js";

export function loadModuleOnServer(playerType: PlayerType): Player {
  switch (playerType) {
    case "random":
      return randomPlayer;
    case "possibilityMaximizer":
      return possibilityMaximizerPlayer;
  }
}
