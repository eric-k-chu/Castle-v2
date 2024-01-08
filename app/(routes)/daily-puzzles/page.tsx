import { ChessApi } from "@/_chessapi/ChessApi";

export default async function DailyPuzzles() {
  const dailyPuzzle = await ChessApi.getDailyPuzzle();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-[100px] pt-40">
      <h1 className="text-center">DailyPuzzles</h1>
    </div>
  );
}
