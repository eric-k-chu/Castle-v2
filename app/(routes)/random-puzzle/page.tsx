import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";
import { RandomDailyPuzzle } from "./RandomDailyPuzzle";

export default async function RandomDailyPuzzlePage() {
  const [dailyPuzzle, err] = await ChessApi.getData(() =>
    ChessApi.getRandomDailyPuzzle(),
  );

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  if (!dailyPuzzle) return null;

  return (
    <div className="mx-auto w-full px-4 py-40">
      <RandomDailyPuzzle puzzle={dailyPuzzle} />
    </div>
  );
}
