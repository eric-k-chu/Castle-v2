import { getLeaderboards } from "@/_chessapi/leaderboard";
import { Show } from "@/_components";
import { Leaderboard } from "@/_lib/types";
import { getLeaderboardtitle, isLeaderboardType } from "@/_utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RankOneCard, RankTwotoFiveCard } from "../_components";

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
      <div className="mt-4">
        {leaderboards[key].slice(5).map((n) => (
          <div key={n.player_id}>
            <h1>{n.username}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
