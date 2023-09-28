export type PlayerType = "random";

export interface PlayerEntry {
  id: PlayerType;
  name: string;
  file: string;
  caveats?: { rule: number; level: "error" | "warning"; text: string }[];
}

export const playerRegistry: PlayerEntry[] = [
  {
    id: "random",
    file: "randomPlayer.js",
    name: "ランダムbot",
  },
];

export function getPlayer(playerType: PlayerType) {
  return playerRegistry.find((p) => p.id === playerType);
}

export function getESMURL(entry: PlayerEntry) {
  return `https://esm.sh/@shogitter/ai/lib/player/${entry.file}`;
}
