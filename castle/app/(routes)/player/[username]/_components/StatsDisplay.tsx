"use client";

import { Show } from "@/_components";
import { Stats } from "@/_lib/types";
import { extractStats } from "@/_utils";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Label,
} from "recharts";

type Props = {
  stats: Stats;
};

export function StatsDisplay({ stats }: Props) {
  const gameStats = extractStats(stats);

  const { puzzle_rush, lessons, tactics, fide } = stats;

  let gameStatDisplay: JSX.Element;

  if (gameStats.length < 1) {
    gameStatDisplay = (
      <div className="flex w-full justify-center rounded-md border border-gray-600 bg-black py-[10rem]">
        <h2 className="font-2xl text-base text-gray-600">
          No game data found.
        </h2>
      </div>
    );
  } else {
    gameStatDisplay = (
      <div className="flex w-full flex-col items-center gap-4 rounded-md border border-gray-600 bg-black p-2 px-4">
        <ResponsiveContainer width="80%" height={400}>
          <BarChart
            data={gameStats}
            barSize={20}
            margin={{ top: 10, right: 15, bottom: 40, left: 15 }}
          >
            <CartesianGrid />
            <XAxis dataKey="type" fill="#A9A9A9">
              <Label value="Game Modes" position="bottom" />
            </XAxis>
            <YAxis fill="#A9A9A9" />
            <Tooltip />
            <Legend verticalAlign="top" height={40} />
            <Bar
              dataKey="wins"
              name="Wins"
              fill="#81b64c"
              activeBar={<Rectangle fill="green" stroke="green" />}
            />
            <Bar
              dataKey="losses"
              name="Losses"
              fill="#fa412d"
              activeBar={<Rectangle fill="red" stroke="red" />}
            />
            <Bar
              dataKey="draws"
              name="Draws"
              fill="#808080"
              activeBar={<Rectangle fill="gray" stroke="gray" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <>
      {gameStatDisplay}
      <div className="mt-4 flex w-full flex-col items-center gap-4 rounded-md border border-gray-600 bg-black px-4 py-20">
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <Show when={tactics !== undefined}>
            <div className="flex w-1/3 flex-col items-center gap-y-2">
              <h1 className="text-4xl">{tactics?.highest.rating}</h1>
              <h1 className="text-lg font-semibold">Puzzles</h1>
            </div>
          </Show>
          <Show when={lessons !== undefined}>
            <div className="flex w-1/3 flex-col items-center gap-y-2">
              <h1>{lessons?.highest.rating}</h1>
              <h1 className="text-lg font-semibold">Lessons</h1>
            </div>
          </Show>
          <Show
            when={
              puzzle_rush !== undefined && Object.keys(puzzle_rush).length !== 0
            }
          >
            <div className="flex w-1/3 flex-col items-center gap-y-2">
              <h1 className="text-4xl">{puzzle_rush?.best.score}</h1>
              <h1 className="text-lg font-semibold">Puzzle Rush</h1>
            </div>
          </Show>
        </div>
        <Show when={fide !== undefined}>
          <div className="mt-4 flex w-full flex-col items-center gap-y-2">
            <h1 className="text-4xl">{fide}</h1>
            <h1 className="text-lg font-semibold">FIDE Rating</h1>
          </div>
        </Show>
      </div>
    </>
  );
}
