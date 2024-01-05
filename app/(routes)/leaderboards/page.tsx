import { getLeaderboards } from "@/_chessapi/leaderboard";
import { LeaderboardsDisplay } from "./LeaderboardsDisplay";

export default async function Leaderboards() {
  const leaderboards = await getLeaderboards();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-20">
      <LeaderboardsDisplay leaderboards={leaderboards} />
    </div>
  );
}
