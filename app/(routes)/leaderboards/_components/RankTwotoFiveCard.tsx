import { ChessTitle } from "@/_components";
import { LeaderboardPlayer } from "@/_lib";
import Link from "next/link";
import { Trend } from ".";
import { ROUTES } from "@/_lib";
import {
  getBgColorFromRank,
  getBorderColorFromRank,
  getTextColorFromRank,
} from "@/_utils";
import Image from "next/image";
import { title } from "process";

type Props = {
  players: LeaderboardPlayer[];
};

export function RankTwotoFiveCard({ players }: Props) {
  return (
    <div className="mt-4 space-y-4 lg:grid lg:grid-cols-4 lg:gap-x-4 lg:space-y-0">
      {players.map((n) => (
        <div
          className="flex items-center justify-between space-y-0 rounded-sm bg-zinc-900 p-4 lg:block lg:space-y-2"
          key={n.player_id}
        >
          <div className="flex items-center gap-x-2 text-xs sm:text-sm">
            <h1
              className={`rounded-sm bg-opacity-50 px-2 py-1 ${getTextColorFromRank(
                n.rank,
              )} ${getBgColorFromRank(n.rank)}`}
            >
              {n.rank}
            </h1>
            <Image
              src={n?.avatar ?? "/icons/default-avatar.svg"}
              alt={`${n.username} avatar`}
              unoptimized
              width={0}
              height={0}
              className={`h-6 w-6 rounded-sm border-2 sm:h-8 sm:w-8 ${getBorderColorFromRank(
                n.rank,
              )}`}
            />
            <ChessTitle title={n.title} />
            <Link
              href={`${ROUTES.player}/${n.username}`}
              className="space-x-2 truncate capitalize hover:underline"
            >
              <span>{n.username}</span>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-x-2 rounded-sm bg-zinc-800 px-2 py-1">
            <Trend trend={n?.trend_score} />
            <h1 className="text-center text-xs sm:text-sm">{n.score}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
