import { ChessApi } from "@/_chessapi";
import { LeaderboardsDisplay } from "./LeaderboardsDisplay";

export default async function Leaderboards() {
  const leaderboards = await ChessApi.getLeaderboards();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-24">
      <LeaderboardsDisplay leaderboards={leaderboards} />
    </div>
  );
}
