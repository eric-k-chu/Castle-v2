/* eslint-disable @next/next/no-img-element */
import { ChessApi } from "@/_chessapi/";
import { ErrorMessage } from "@/_components";
import { LEADERBOARDS, ROUTES } from "@/_lib";
import Link from "next/link";
import { RankOneCard, RankTwotoFiveCard, Trend } from "../";

type Props = {
  params: { leaderboard: string };
};

export default async function Leaderboard({ params }: Props) {
  const [leaderboards, err] = await ChessApi.getData(() =>
    ChessApi.getLeaderboards(),
  );
  const key = params.leaderboard as keyof typeof LEADERBOARDS;
  const keys = Object.keys(LEADERBOARDS) as (keyof typeof LEADERBOARDS)[];

  if (!keys.includes(key)) {
    return <ErrorMessage message={"This game mode does not exist."} />;
  }

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  if (!leaderboards) return null;

  const requestedLeaderboard = leaderboards[key];
  const requestedLeaderboardTitle = LEADERBOARDS[key];

  return (
    <div className="mx-auto px-4 py-20 sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
      <h1 className="text-2xl font-semibold uppercase sm:text-4xl">
        {requestedLeaderboardTitle}
      </h1>
      <RankOneCard player={requestedLeaderboard[0]} />
      <RankTwotoFiveCard players={requestedLeaderboard.slice(1, 5)} />
      <div className="mt-4 rounded-sm bg-neutral-900 p-4">
        <header className="flex flex-none items-center gap-x-4 p-4 text-sm sm:gap-x-8 sm:text-base">
          <strong className="w-8 text-center capitalize sm:w-10">rank</strong>
          <strong className="capitalize">player</strong>
          <strong className="ml-auto capitalize">score</strong>
        </header>
        {requestedLeaderboard.slice(5).map((n) => (
          <div
            key={n.player_id}
            className="flex flex-none items-center gap-x-4 p-4 text-xs odd:bg-transparent even:rounded-sm even:bg-neutral-800 sm:gap-x-8 sm:text-sm"
          >
            <span className="w-8 text-center sm:w-10">{n.rank}</span>
            <div className="flex items-center gap-x-2">
              <img
                src={n?.avatar ?? "/icons/default-avatar.svg"}
                alt={`${n.username} avatar`}
                className="h-4 w-4 rounded-sm sm:h-6 sm:w-6"
              />
              <Link
                href={`${ROUTES.player}/${n.username}`}
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
