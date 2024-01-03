import { Show } from "@/_components";
import { LEADERBOARDS } from "@/_lib/constants";
import { Leaderboards, Leaderboard } from "@/_lib/types";
import { getLeaderboardtitle } from "@/_utils";
import Link from "next/link";

type Props = {
  leaderboards: Leaderboards;
};

export function LeaderboardsDisplay({ leaderboards }: Props) {
  function getColor(
    i: number,
  ): "text-amber-400" | "text-white" | "text-amber-600" {
    if (i === 0) return "text-amber-400";
    if (i === 2) return "text-amber-600";
    return "text-white";
  }

  return (
    <section className="mx-auto max-w-xl space-y-4">
      {LEADERBOARDS.map((n) => (
        <div
          key={n}
          className="flex flex-wrap items-center justify-center gap-8 rounded-sm bg-zinc-800 py-6 md:justify-start md:gap-0 md:py-8"
        >
          <Link
            href={`/leaderboards/${n}`}
            className="w-full text-center font-semibold capitalize md:w-1/3"
          >
            {getLeaderboardtitle(n)}
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
