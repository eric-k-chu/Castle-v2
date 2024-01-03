import { getLeaderboards } from "@/_chessapi/leaderboard";
import { Show } from "@/_components";
import { Leaderboard } from "@/_lib/types";
import { getLeaderboardtitle, isLeaderboardType } from "@/_utils";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { leaderboard: string };
};

export default async function Leaderboard({ params }: Props) {
  const leaderboards = await getLeaderboards();
  const key = params.leaderboard as Leaderboard;

  if (!isLeaderboardType(key)) {
    notFound();
  }

  const first = leaderboards[key][0];
  const second = leaderboards[key][1];
  const third = leaderboards[key][2];
  const fourth = leaderboards[key][3];
  const fifth = leaderboards[key][4];

  return (
    <div className="mx-auto max-w-5xl px-4 pb-[100px] pt-24">
      <h1 className="text-2xl font-semibold capitalize sm:text-4xl">
        {getLeaderboardtitle(key)}
      </h1>
      <div className="relative mt-4 flex items-center gap-x-4 overflow-hidden rounded-sm bg-zinc-800 px-4 py-6">
        <img
          src={
            first?.avatar ??
            "https://www.chess.com/bundles/web/images/user-image.007dad08.svg"
          }
          alt={`${first.username} avatar`}
          className="absolute right-0 object-cover"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(25,25,55,0), rgba(25,25,55,.5))",
          }}
        />
        <h1 className="rounded-sm bg-amber-500/50 px-[.75rem] py-2 text-2xl text-amber-400 sm:text-4xl">
          1
        </h1>
        <img
          src={
            first?.avatar ??
            "https://www.chess.com/bundles/web/images/user-image.007dad08.svg"
          }
          alt={`${first.username} avatar`}
          className="h-20 w-20 rounded-sm border-2 border-amber-400 sm:h-24 sm:w-24"
        />
        <Show when={first.title !== undefined}>
          <h1 className="text-2xl sm:text-4xl">
            <span className="rounded-sm bg-[#7C2929] px-1 py-0.5 font-mono">
              {first.title}
            </span>
          </h1>
        </Show>
        <Link
          className="text-2xl hover:underline sm:text-4xl"
          href={`/player/${first.username}`}
          role="heading"
          aria-level={1}
        >
          {first.username}
        </Link>
      </div>
      <div className="mt-16">
        {leaderboards[key].slice(5).map((n) => (
          <div key={n.player_id}>
            <h1>{n.username}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
