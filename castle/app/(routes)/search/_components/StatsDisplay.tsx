import { ErrorDisplay, LoadingCircle } from "@/_components";
import { useFetcher } from "@/_hooks/useFetcher";
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

  const {
    chess_daily,
    chess960_daily,
    chess_rapid,
    chess_bullet,
    chess_blitz,
  } = stats;

  return (
    <div className="flex w-full flex-col gap-4">
      <h1>test</h1>
    </div>
  );
}

type GameStatProps = {
  name: string;
  wld: {
    wins: number;
    losses: number;
    draws: number;
  };
};

function GameStatDisplay({ name, wld }: GameStatProps) {
  const data = [
    {
      name: "Wins",
      count: wld.wins,
    },
    {
      name: "Losses",
      count: wld.losses,
    },
    {
      name: "Draws",
      count: wld.draws,
    },
  ];

  return (
    <div className="flex w-full items-center justify-around gap-x-2 rounded-md border border-gray-600 bg-black p-4">
      <h2 className="flex w-1/4 justify-center text-base font-semibold">
        {name}
      </h2>
      <div className="ml-auto flex hidden w-3/4 justify-center">
        <BarChart width={500} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="count"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </div>
    </div>
  );
}
