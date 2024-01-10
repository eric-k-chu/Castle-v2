import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";
import { Display } from "./Display";

export default async function RandomDailyPuzzle() {
  const [dailyPuzzle, err] = await ChessApi.getData(() =>
    ChessApi.getRandomDailyPuzzle(),
  );

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  if (!dailyPuzzle) return null;

  return (
    <div className="mx-auto w-full px-4 py-40">
      <Display puzzle={dailyPuzzle} />
    </div>
  );
}
