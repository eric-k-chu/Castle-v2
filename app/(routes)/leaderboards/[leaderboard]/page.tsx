import { getLeaderboards } from "@/_chessapi/leaderboard";
import { Leaderboard } from "@/_lib/types";
import { getLeaderboardtitle, isLeaderboardType } from "@/_utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RankOneCard, RankTwotoFiveCard, Trend } from "../_components";

type Props = {
  params: { leaderboard: string };
};

export default async function Leaderboard({ params }: Props) {
  const leaderboards = await getLeaderboards();
  const key = params.leaderboard as Leaderboard;

  if (!isLeaderboardType(key)) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-[100px] pt-24">
      <h1 className="text-2xl font-semibold capitalize sm:text-4xl">
        {getLeaderboardtitle(key)}
      </h1>
      <RankOneCard player={leaderboards[key][0]} />
      <RankTwotoFiveCard players={leaderboards[key].slice(1, 5)} />
      <div className="mt-4 rounded-sm bg-zinc-800 p-4">
        <header className="flex flex-none items-center gap-x-4 p-4 text-sm sm:gap-x-8 sm:text-base">
          <strong className="w-8 text-center capitalize sm:w-10">rank</strong>
          <strong className="capitalize">player</strong>
          <strong className="ml-auto capitalize">score</strong>
        </header>
        {leaderboards[key].slice(5).map((n) => (
          <div
            key={n.player_id}
            className="flex flex-none items-center gap-x-4 p-4 text-xs odd:bg-transparent even:rounded-sm even:bg-zinc-900 sm:gap-x-8 sm:text-sm"
          >
            <span className="w-8 text-center sm:w-10">{n.rank}</span>
            <div className="flex items-center gap-x-2">
              <img
                src={
                  n?.avatar ??
                  "https://www.chess.com/bundles/web/images/user-image.007dad08.svg"
                }
                alt={`${n.username} avatar`}
                className="h-4 w-4 rounded-sm sm:h-6 sm:w-6"
              />
              <Link
                href={`/player/${n.username}`}
                className="truncate hover:underline"
              >
                {n.username}
              </Link>
            </div>
            <div className=" ml-auto flex items-center gap-x-2">
              <Trend trend={n.trend_score} />
              <span>{n.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
