import { ChessTitle } from "@/_components";
import { TrophyIcon } from "@/_components/icons";
import { LEADERBOARDS, ROUTES } from "@/_lib";
import { Leaderboards } from "@/_lib";
import { getTextColorFromRank } from "@/_utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  leaderboards: Leaderboards;
};

export function Leaderboards({ leaderboards }: Props) {
  const leaderboardModes = Object.keys(
    leaderboards,
  ) as (keyof typeof LEADERBOARDS)[];

  return (
    <section className="mx-auto max-w-sm space-y-4 sm:max-w-md md:max-w-lg lg:max-w-2xl">
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <TrophyIcon className="inline h-auto w-4 fill-neutral-200 sm:w-5 md:w-7" />
        <strong className="text-lg uppercase sm:text-2xl md:text-4xl">
          leaderboards
        </strong>
      </div>
      {leaderboardModes.map((n) => (
        <div
          key={n}
          className="flex flex-wrap items-center justify-center gap-8 rounded-sm border border-neutral-800 bg-neutral-900 py-6 md:justify-start md:gap-0 md:py-8"
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
                href={`${ROUTES.player}/${n.username.toLocaleLowerCase()}`}
                className="flex items-center gap-x-2 rounded-sm p-1 text-xs hover:bg-neutral-700 sm:text-sm"
              >
                <span className={`${getTextColorFromRank(n.rank)} w-4`}>
                  #{n.rank}
                </span>
                <Image
                  src={n?.avatar ?? "/icons/default-avatar.svg"}
                  width={0}
                  height={0}
                  alt={`${n.username} avatar`}
                  className="size-6 rounded-sm"
                />
                <div className="space-x-2 truncate capitalize">
                  <ChessTitle title={n.title} />
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
