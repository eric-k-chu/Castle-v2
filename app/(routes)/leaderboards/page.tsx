import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";
import { Leaderboards } from "./Leaderboards";

export default async function LeaderboardsPage() {
  const [leaderboards, err] = await ChessApi.getData(() =>
    ChessApi.getLeaderboards(),
  );

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  if (!leaderboards) return null;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-24">
      <Leaderboards leaderboards={leaderboards} />
    </div>
  );
}
