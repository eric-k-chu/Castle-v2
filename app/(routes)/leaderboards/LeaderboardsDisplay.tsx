import { Show } from "@/_components";
import { LEADERBOARDS, ROUTES } from "@/_lib/constants";
import { Leaderboards } from "@/_lib/types";
import Link from "next/link";

type Props = {
  leaderboards: Leaderboards;
};

export function LeaderboardsDisplay({ leaderboards }: Props) {
  const leaderboardModes = Object.keys(
    leaderboards,
  ) as (keyof typeof LEADERBOARDS)[];

  function getColor(
    i: number,
  ): "text-amber-400" | "text-white" | "text-amber-600" {
    if (i === 1) return "text-amber-400";
    if (i === 3) return "text-amber-600";
    return "text-white";
  }

  return (
    <section className="mx-auto max-w-sm space-y-4 sm:max-w-md md:max-w-lg lg:max-w-2xl">
      <strong className="text-lg uppercase sm:text-2xl md:text-4xl">
        leaderboards
      </strong>
      {leaderboardModes.map((n) => (
        <div
          key={n}
          className="flex flex-wrap items-center justify-center gap-8 rounded-sm bg-zinc-800 py-6 md:justify-start md:gap-0 md:py-8"
        >
          <Link
            href={`${ROUTES.leaderboards}/${n}`}
            className="w-full text-center font-semibold uppercase hover:underline md:w-1/3"
          >
            {LEADERBOARDS[n]}
          </Link>
          <div className="w-full px-4 md:w-2/3">
            {leaderboards[n].slice(0, 5).map((n) => (
              <Link
                key={n.player_id}
                href={`/player/${n.username.toLocaleLowerCase()}`}
                className="flex items-center gap-x-2 rounded-sm p-1 text-xs hover:bg-zinc-900 sm:text-sm"
              >
                <span className={`${getColor(n.rank)} w-4`}>#{n.rank}</span>
                <img
                  src={n.avatar}
                  alt={`${n.username} avatar`}
                  className="h-6 w-6 rounded-sm"
                />
                <div className="space-x-2 truncate capitalize">
                  <Show when={n.title !== undefined}>
                    <span className="rounded-sm bg-[#7C2929] px-1 py-0.5 font-mono">
                      {n?.title}
                    </span>
                  </Show>
                  <span>{n.username}</span>
                </div>
                <span className="ml-auto">{n.score}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
