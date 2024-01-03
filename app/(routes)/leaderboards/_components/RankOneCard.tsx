import { Show } from "@/_components";
import { LeaderboardPlayer } from "@/_lib/types";
import Link from "next/link";
import { Trend } from ".";

type Props = {
  player: LeaderboardPlayer;
};

export function RankOneCard({ player }: Props) {
  return (
    <div className="relative mt-4 flex items-center gap-x-4 overflow-hidden rounded-sm bg-zinc-800 px-4 py-6">
      <img
        src={
          player?.avatar ??
          "https://www.chess.com/bundles/web/images/user-image.007dad08.svg"
        }
        alt={`${player.username} avatar`}
        className="absolute right-0 object-cover"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(25,25,55,0), rgba(25,25,55,.5))",
        }}
      />
      <h1 className="rounded-sm bg-amber-500/50 px-[.75rem] py-2 text-2xl text-amber-400 sm:text-4xl">
        {player.rank}
      </h1>
      <img
        src={
          player?.avatar ??
          "https://www.chess.com/bundles/web/images/user-image.007dad08.svg"
        }
        alt={`${player.username} avatar`}
        className="h-20 w-20 rounded-sm border-2 border-amber-400 sm:h-24 sm:w-24"
      />
      <div className="space-y-2">
        <div className="flex items-center gap-x-4">
          <Show when={player.title !== undefined}>
            <h1 className="text-2xl sm:text-4xl">
              <span className="rounded-sm bg-[#7C2929] px-1 py-0.5 font-mono">
                {player.title}
              </span>
            </h1>
          </Show>
          <Link
            className="text-2xl hover:underline sm:text-4xl"
            href={`/player/${player.username}`}
            role="heading"
            aria-level={1}
          >
            {player.username}
          </Link>
        </div>
        <div className="flex w-fit items-center gap-x-2 rounded-sm bg-zinc-900 px-2 py-1">
          <Trend
            trend={player?.trend_score}
            size="w-5"
            textSize="text-lg sm:text-xl"
          />
          <h1 className="text-lg sm:text-xl">{player.score}</h1>
        </div>
      </div>
    </div>
  );
}
