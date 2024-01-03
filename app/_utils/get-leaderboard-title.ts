import { Leaderboard } from "@/_lib/types";

export function getLeaderboardtitle(n: Leaderboard): string {
  switch (n) {
    case "live_blitz":
    case "live_bullet":
    case "live_rapid":
    case "live_crazyhouse":
    case "live_bughouse":
    case "live_blitz960":
      return n.split("live_")[1];
    case "live_threecheck":
      return "3 Check";
    case "live_kingofthehill":
      return "King of the Hill";
    case "rush":
      return "Puzzle Rush";
    case "battle":
      return "Puzzle Battle";
    case "tactics":
      return "Puzzles";
    default:
      return n;
  }
}
