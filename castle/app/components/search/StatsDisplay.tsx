import { Stats } from "@/lib/types";

type Props = {
  data: Stats;
};

export function StatsDisplay({ data }: Props) {
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
  return (
    <div className="flex w-full items-center justify-around gap-x-2 rounded-md border border-gray-600 bg-black/50 p-4">
      <h2 className="text-base font-semibold">{name}</h2>
      <div className="ml-auto flex items-center">
        <span className="text-green-600">{wld.wins}</span>
        <span className="text-red-600">{wld.losses}</span>
        <span className="text-gray-400">{wld.draws}</span>
      </div>
    </div>
  );
}
