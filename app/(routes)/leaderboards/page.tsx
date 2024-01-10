import { ChessApi } from "@/_chessapi";
import { LeaderboardsDisplay } from "./LeaderboardsDisplay";
import { ErrorMessage } from "@/_components";

export default async function Leaderboards() {
  const [leaderboards, err] = await ChessApi.getData(() =>
    ChessApi.getLeaderboards(),
  );

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  if (!leaderboards) return null;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-24">
      <LeaderboardsDisplay leaderboards={leaderboards} />
    </div>
  );
}
