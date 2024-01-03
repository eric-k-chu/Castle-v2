import { getLeaderboards } from "@/_chessapi/leaderboard";
import { LeaderboardsDisplay } from "./LeaderboardsDisplay";

export default async function Leaderboards() {
  const leaderboards = await getLeaderboards();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-[100px] pt-40">
      <LeaderboardsDisplay leaderboards={leaderboards} />
    </div>
  );
}
