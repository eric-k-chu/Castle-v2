import { useFetcher } from "@/_hooks/useFetcher";
import { getPlayerStats } from "@/_utils/fetcher";
import { LoadingCircle, ErrorDisplay } from ".";
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
  const { data, isLoading, error } = useFetcher(getPlayerStats, username);

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

  if (!data) {
    return (
      <div className="flex w-full justify-center py-48">
        <LoadingCircle />
      </div>
    );
  }

  const {
    chess_daily,
    chess960_daily,
    chess_rapid,
    chess_bullet,
    chess_blitz,
    tactics,
    lessons,
    puzzle_rush,
    fide,
  } = data;

  return (
    <div className="flex w-full flex-col gap-4">
      {chess_daily && (
        <GameStatDisplay
          name="Chess Daily"
          wld={{
            wins: chess_daily.record.win,
            losses: chess_daily.record.loss,
            draws: chess_daily.record.draw,
          }}
        />
      )}
      {chess960_daily && (
        <GameStatDisplay
          name="Chess960 Daily"
          wld={{
            wins: chess960_daily.record.win,
            losses: chess960_daily.record.loss,
            draws: chess960_daily.record.draw,
          }}
        />
      )}
      {chess_rapid && (
        <GameStatDisplay
          name="Rapid"
          wld={{
            wins: chess_rapid.record.win,
            losses: chess_rapid.record.loss,
            draws: chess_rapid.record.draw,
          }}
        />
      )}
      {chess_bullet && (
        <GameStatDisplay
          name="Bullet"
          wld={{
            wins: chess_bullet.record.win,
            losses: chess_bullet.record.loss,
            draws: chess_bullet.record.draw,
          }}
        />
      )}
      {chess_blitz && (
        <GameStatDisplay
          name="Blitz"
          wld={{
            wins: chess_blitz.record.win,
            losses: chess_blitz.record.loss,
            draws: chess_blitz.record.draw,
          }}
        />
      )}
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
      <div className="ml-auto flex w-3/4 justify-center">
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
