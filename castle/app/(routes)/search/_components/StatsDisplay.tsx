"use client";

import { ErrorDisplay, LoadingCircle } from "@/_components";
import { useFetcher } from "@/_hooks/useFetcher";
import { extractData } from "@/_utils";
import { getPlayerStats } from "@/_utils/fetcher";
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
  username: string | null;
};

export function StatsDisplay({ username }: Props) {
  const {
    data: stats,
    isLoading,
    error,
  } = useFetcher(getPlayerStats, username);

  if (isLoading) {
    return (
      <div className="flex w-full justify-center py-48">
        <LoadingCircle />
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (!stats) return null;

  const data = extractData(stats);

  if (data.length < 1) {
    return (
      <div className="flex w-full justify-center rounded-md border border-gray-600 bg-black py-[10rem]">
        <h2 className="font-2xl text-base text-gray-600">
          No game data found.
        </h2>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-md border border-gray-600 bg-black p-2 px-4">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          barSize={20}
          margin={{ top: 5, right: 5, bottom: 40, left: 15 }}
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
