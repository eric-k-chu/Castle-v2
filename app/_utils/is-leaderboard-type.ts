import { LEADERBOARDS } from "@/_lib/constants";

export function isLeaderboardType(slug: string): boolean {
  return LEADERBOARDS.some(
    (n) => n.toLocaleLowerCase() === slug.toLocaleLowerCase(),
  );
}
