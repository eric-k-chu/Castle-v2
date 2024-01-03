import { LeaderboardPlayer } from "@/_lib/types";
import Link from "next/link";

type Props = {
  players: LeaderboardPlayer[];
};

export function RankTwotoFiveCard({ players }: Props) {
  function getColor<T extends "border" | "text" | "bg">(
    rank: number,
    type: T,
  ): `${T}-white` | `${T}-amber-500` | `${T}-zinc-400` {
    if (rank === 2) return `${type}-white`;
    if (rank === 3) return `${type}-amber-500`;
    return `${type}-zinc-400`;
  }

  return (
    <div className="mt-4 grid grid-cols-4 gap-x-4">
      {players.map((n) => (
        <div
          className="flex items-center gap-x-2 rounded-sm bg-zinc-800 p-4"
          key={n.player_id}
        >
          <h1 className="text-lg sm:text-2xl">{n.rank}</h1>
          <img
            src={
              n?.avatar ??
              "https://www.chess.com/bundles/web/images/user-image.007dad08.svg"
            }
            alt={`${n.username} avatar`}
            className={`h-8 w-8 rounded-sm border-2 sm:h-12 sm:w-12 ${getColor(
              n.rank,
              "border",
            )}`}
          />
          <Link href={`/player/${n.username}`} className="capitalize">
            {n.username}
          </Link>
        </div>
      ))}
    </div>
  );
}
