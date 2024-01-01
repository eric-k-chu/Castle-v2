"use client";

import { Show } from "@/_components";
import { Stats } from "@/_lib/types";
import { extractStats, getDateFromUtc } from "@/_utils";

type Props = {
  stats: Stats;
};

export function StatsDisplay({ stats }: Props) {
  const gameStats = extractStats(stats);

  const { puzzle_rush, tactics } = stats;

  return (
    <section className="rounded-sm bg-zinc-900 p-6">
      <div className="flex flex-1 flex-wrap items-center justify-around gap-8">
        {gameStats.map((n) => (
          <div className="group relative space-y-2" key={n.type}>
            <strong className="text-sm uppercase sm:text-base">{n.type}</strong>
            <h2
              className={`text-base sm:text-lg ${
                parseFloat(n.pct) >= 50 ? "text-green-400" : "text-red-400"
              }`}
            >
              {n.pct}
              <span className="pl-1 text-xs">%</span>
            </h2>
            <h3 className="text-xs text-zinc-400">
              {n.wins + n.losses + n.draws} games
            </h3>
            <div
              role="tooltip"
              className="absolute bottom-0 left-10 z-10 hidden space-y-2 rounded-md bg-zinc-700 p-4 text-xs group-hover:block"
            >
              <div className="flex text-green-400">
                <span className="pr-1">wins:</span>
                <span>{n.wins}</span>
              </div>
              <div className="flex text-red-400">
                <span className="pr-1">losses:</span>
                <span>{n.losses}</span>
              </div>
              <div className="flex text-zinc-400">
                <span className="pr-1">draws:</span>
                <span>{n.draws}</span>
              </div>
            </div>
          </div>
        ))}
        <Show when={tactics !== undefined}>
          <div className="space-y-2">
            <strong className="text-sm uppercase sm:text-base">Puzzles</strong>
            <h2 className="text-base sm:text-lg">{tactics?.highest.rating}</h2>
            <h3 className="text-xs text-zinc-400">
              {tactics?.highest.date && getDateFromUtc(tactics.highest.date)}
            </h3>
          </div>
        </Show>
        <Show when={puzzle_rush.best !== undefined}>
          <div className="space-y-2">
            <strong className="text-sm uppercase sm:text-base">
              Puzzle Rush
            </strong>
            <h2 className="text-base sm:text-lg">{puzzle_rush.best?.score}</h2>
            <h3 className="text-xs text-zinc-400">
              {puzzle_rush.best?.total_attempts} attempts
            </h3>
          </div>
        </Show>
      </div>
    </section>
  );
}
