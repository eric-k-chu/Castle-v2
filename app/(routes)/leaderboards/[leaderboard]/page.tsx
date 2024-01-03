import { Leaderboard } from "@/_lib/types";
import { getLeaderboardtitle, isLeaderboardType } from "@/_utils";
import { notFound } from "next/navigation";

type Props = {
  params: { leaderboard: string };
};

export default async function Leaderboard({ params }: Props) {
  if (!isLeaderboardType(params.leaderboard)) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-[100px] pt-40">
      <h1>{getLeaderboardtitle(params.leaderboard as Leaderboard)}</h1>
    </div>
  );
}
