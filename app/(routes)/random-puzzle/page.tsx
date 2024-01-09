import { ChessApi } from "@/_chessapi";
import { Display } from "./Display";

export default async function RandomDailyPuzzle() {
  const dailyPuzzle = await ChessApi.getRandomDailyPuzzle();

  return (
    <div className="mx-auto w-full px-4 py-40">
      <Display puzzle={dailyPuzzle} />
    </div>
  );
}
