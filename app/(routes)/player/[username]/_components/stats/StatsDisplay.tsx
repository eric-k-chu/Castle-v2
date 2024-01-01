"use client";

import { Show } from "@/_components";
import { Stats } from "@/_lib/types";
import { extractStats, getDateFromUtc } from "@/_utils";

type Props = {
  stats: Stats;
};

export function StatsDisplay({ stats }: Props) {
  const gameStats = extractStats(stats);

  const { puzzle_rush, lessons, tactics, fide } = stats;

  let gameStatDisplay: JSX.Element;

  if (gameStats.length < 1) {
    gameStatDisplay = <></>;
  } else {
    gameStatDisplay = (
      <div className="flex flex-col items-start justify-around gap-6 rounded-md bg-zinc-900 py-12 pl-[35%] sm:flex-row sm:flex-wrap sm:items-center sm:px-4 sm:py-28">
        {gameStats.map((n) => (
          <div key={n.type} className="flex flex-col gap-y-2">
            <h1 className="font-semibold uppercase">{n.type}</h1>
            <h1 className="text-2xl">
              {n.pct}
              <span className="pl-1 text-xs">%</span>
            </h1>
            <div className="space-x-2 text-xs">
              <span className="text-green-400">{n.wins}</span>
              <span className="text-red-400">{n.losses}</span>
              <span className="text-gray-400">{n.draws}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {gameStatDisplay}
      <div className="mt-2 flex flex-col items-start justify-around gap-6 rounded-md bg-zinc-900 py-12 pl-[35%] sm:flex-row sm:flex-wrap sm:items-center sm:px-4 sm:py-28">
        <Show when={tactics !== undefined}>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-semibold uppercase">Puzzles</h1>
            <h1 className="text-2xl">{tactics?.highest.rating}</h1>
            <h1 className="text-xs text-gray-400">
              {tactics?.highest.date && getDateFromUtc(tactics.highest.date)}
            </h1>
          </div>
        </Show>
        <Show when={lessons !== undefined}>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-semibold uppercase">Lessons</h1>
            <h1 className="text-2xl">{lessons?.highest.rating}</h1>
            <h1 className="text-xs text-gray-400">
              {lessons?.highest.date && getDateFromUtc(lessons.highest.date)}
            </h1>
          </div>
        </Show>
        <Show when={puzzle_rush?.best !== undefined}>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-semibold uppercase">Puzzle Rush</h1>
            <h1 className="text-2xl">
              {puzzle_rush?.best?.score || "No attempts have been made"}
            </h1>
            <h1 className="text-xs text-gray-400">
              {puzzle_rush?.best?.total_attempts || ""}
              <span className="pl-1">attempts</span>
            </h1>
          </div>
        </Show>
        <Show when={fide !== undefined}>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-semibold">FIDE Rating</h1>
            <h1 className="text-2xl">{fide}</h1>
            <a
              className="text-xs text-gray-400 hover:underline"
              target="_blank"
              href="https://www.chess.com/terms/fide-chess"
            >
              What is Fide?
            </a>
          </div>
        </Show>
      </div>
    </>
  );
}
