/* eslint-disable @next/next/no-img-element */
import { ChessTitle } from "@/_components";
import { LeaderboardPlayer } from "@/_lib";
import Link from "next/link";
import { Trend } from ".";
import { ROUTES } from "@/_lib";
import Image from "next/image";

type Props = {
  player: LeaderboardPlayer;
};

export function RankOneCard({ player }: Props) {
  return (
    <div className="relative mt-4 flex items-center gap-x-4 overflow-hidden rounded-sm bg-zinc-900 px-4 py-6">
      <img
        src={player?.avatar ?? "/icons/default-avatar.svg"}
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
      <Image
        src={player?.avatar ?? "/icons/default-avatar.svg"}
        unoptimized
        width={0}
        height={0}
        alt={`${player.username} avatar`}
        className="h-16 w-16 rounded-sm border-2 border-amber-400 sm:h-24 sm:w-24"
      />
      <div className="space-y-2">
        <div className="flex items-center gap-x-2 text-lg sm:text-4xl">
          <ChessTitle title={player.title} />
          <Link
            className="text-lg hover:underline sm:text-4xl"
            href={`${ROUTES.player}/${player.username}`}
            role="heading"
            aria-level={1}
          >
            {player.username}
          </Link>
        </div>
        <div className="flex w-fit items-center gap-x-2 rounded-sm bg-zinc-800 px-2 py-1">
          <Trend
            trend={player?.trend_score}
            size="w-5"
            textSize="text-sm sm:text-xl"
          />
          <h1 className="text-sm sm:text-xl">{player.score}</h1>
        </div>
      </div>
    </div>
  );
}
