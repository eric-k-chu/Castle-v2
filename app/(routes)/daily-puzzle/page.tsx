import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";
import { getDateFromUtc } from "@/_utils";
import Image from "next/image";

export default async function DailyPuzzle() {
  const [dailyPuzzle, err] = await ChessApi.getData(() =>
    ChessApi.getDailyPuzzle(),
  );

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  if (!dailyPuzzle) return null;

  return (
    <div className="mx-auto w-full px-4 py-40 text-neutral-900 dark:text-neutral-200">
      <section className="mx-auto flex max-w-md flex-col items-center space-y-4 border border-neutral-400 sm:max-w-lg sm:flex-row sm:bg-neutral-200 md:max-w-2xl lg:max-w-4xl dark:border-neutral-800 dark:sm:bg-neutral-900 ">
        <div className="w-full space-y-2 sm:w-1/2">
          <Image
            src={dailyPuzzle.image}
            alt="daily puzzle board"
            width={0}
            height={0}
            unoptimized
            className="h-auto w-[500px]"
          />
        </div>
        <div className="w-full text-center sm:w-1/2">
          <a
            className="py-2 text-lg font-semibold capitalize hover:underline md:text-xl"
            target="_blank"
            href={dailyPuzzle.url}
          >
            {dailyPuzzle.title}&#8599;
          </a>
          <h2 className="py-1 text-sm text-neutral-500 sm:text-base md:text-lg dark:text-neutral-400">
            {getDateFromUtc(dailyPuzzle.publish_time).full}
          </h2>
        </div>
      </section>
    </div>
  );
}
