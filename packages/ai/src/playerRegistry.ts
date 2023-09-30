export type PlayerType = "random" | "possibilityMaximizer";

export interface PlayerEntry {
  id: PlayerType;
  name: string;
  file: string;
  caveats?: { rule: number; level: "error" | "warning"; text: string }[];
}

export const playerRegistry: PlayerEntry[] = [
  {
    id: "possibilityMaximizer",
    file: "possibilityMaximizerPlayer.js",
    name: "最大選択肢bot",
    caveats: [
      {
        rule: 66,
        level: "error",
        text: "パスができないため、停止したり一人千日手したりしてしまう",
      },
    ],
  },
  {
    id: "random",
    file: "randomPlayer.js",
    name: "ランダムbot",
    caveats: [
      {
        rule: 66,
        level: "error",
        text: "パスができないため、停止したり一人千日手したりしてしまう",
      },
    ],
  },
];

export function getPlayer(playerType: PlayerType) {
  return playerRegistry.find((p) => p.id === playerType);
}

export function getESMURL(entry: PlayerEntry) {
  return `https://esm.sh/@shogitter/ai/lib/players/${entry.file}`;
}
