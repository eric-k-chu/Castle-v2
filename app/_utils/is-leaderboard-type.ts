import { LEADERBOARDS } from "@/_lib/constants";

export function isLeaderboardType(slug: string): boolean {
  if (slug === undefined) return false;

  return LEADERBOARDS.some(
    (n) => n.toLocaleLowerCase() === slug.toLocaleLowerCase(),
  );
}
