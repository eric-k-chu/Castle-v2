import { Show } from "@/_components";
import { LeaderboardPlayer } from "@/_lib/types";
import Link from "next/link";
import { Trend } from ".";
import { ROUTES } from "@/_lib/constants";
import {
  getBgColorFromRank,
  getBorderColorFromRank,
  getTextColorFromRank,
} from "@/_utils";

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
          <div className="flex items-center gap-x-2">
            <h1
              className={`rounded-sm bg-opacity-50 px-2 py-1 text-xs sm:text-sm ${getTextColorFromRank(
                n.rank,
              )} ${getBgColorFromRank(n.rank)}`}
            >
              {n.rank}
            </h1>
            <img
              src={
                n?.avatar ??
                "https://www.chess.com/bundles/web/images/user-image.007dad08.svg"
              }
              alt={`${n.username} avatar`}
              className={`h-6 w-6 rounded-sm border-2 sm:h-8 sm:w-8 ${getBorderColorFromRank(
                n.rank,
              )}`}
            />
            <Show when={n.title !== undefined}>
              <h1 className="inline text-sm">
                <span className="rounded-sm bg-[#7C2929] px-1 py-0.5 font-mono">
                  {n?.title}
                </span>
              </h1>
            </Show>
            <Link
              href={`${ROUTES.player}${n.username}`}
              className="space-x-2 truncate text-sm capitalize hover:underline"
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
