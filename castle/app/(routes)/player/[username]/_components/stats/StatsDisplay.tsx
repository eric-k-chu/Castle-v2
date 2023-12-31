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
      <div className="flex w-full flex-wrap items-center justify-around gap-4 p-2 px-4">
        {gameStats.map((n) => (
          <div key={n.type} className="flex flex-col gap-y-2">
            <h1>{n.type}</h1>
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
      <div className="mt-4 px-4 py-20">
        <div className="flex w-full flex-wrap items-center justify-around gap-4">
          <Show when={tactics !== undefined}>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-semibold">Puzzles</h1>
              <h1 className="text-2xl">{tactics?.highest.rating}</h1>
              <h1 className="text-xs text-gray-400">
                {tactics?.highest.date && getDateFromUtc(tactics.highest.date)}
              </h1>
            </div>
          </Show>
          <Show when={lessons !== undefined}>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-semibold">Lessons</h1>
              <h1 className="text-2xl">{lessons?.highest.rating}</h1>
              <h1 className="text-xs text-gray-400">
                {lessons?.highest.date && getDateFromUtc(lessons.highest.date)}
              </h1>
            </div>
          </Show>
          <Show when={puzzle_rush?.best !== undefined}>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-semibold">Puzzle Rush</h1>
              <h1 className="text-2xl">{puzzle_rush?.best.score}</h1>
              <h1 className="text-xs text-gray-400">
                {puzzle_rush?.best.total_attempts}
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
      </div>
    </>
  );
}
