"use client";

import { DotsIcon, SquareIcon } from "@/_components";
import { usePagination } from "@/_hooks";
import { MonthlyArchive } from "@/_lib";
import { getDaysElapsed, getGameResultColor } from "@/_utils";
import { EmptyListHeader } from "../../EmptyListHeader";
import { ListHeader } from "../../ListHeader";

type Props = {
  archive: MonthlyArchive;
  username: string;
};

export function ArchivesDisplay({ archive, username }: Props) {
  const [list, page, _, switchPage] = usePagination(archive.games.toReversed());

  if (list.length < 1) {
    return (
      <EmptyListHeader
        header="Latest Games"
        message="No games have been played."
      />
    );
  }

  return (
    <section className="my-8">
      <ListHeader
        header="Latest Games"
        page={`${page + 1} of ${list.length}`}
        prev={() => switchPage("prev")}
        next={() => switchPage("next")}
      />
      <div className="rounded-sm bg-neutral-900 px-4 py-8">
        <header className="mb-8 grid grid-cols-10 px-4">
          <strong className="col-span-2 text-xs uppercase sm:col-span-1 sm:text-sm">
            time
          </strong>
          <strong className="col-span-5 text-xs uppercase sm:col-span-6 sm:text-sm">
            players
          </strong>
          <strong className="hidden text-right text-xs uppercase sm:block sm:text-sm">
            acc
          </strong>
          <strong className="text-right text-xs uppercase sm:text-sm">
            class
          </strong>
          <strong className="col-span-2 text-right text-xs uppercase sm:col-span-1 sm:text-sm">
            link
          </strong>
        </header>
        {list[page].map((n) => (
          <div
            key={n.uuid}
            className={`my-1 grid grid-cols-10 border-l-8 p-4 text-xs odd:bg-transparent even:rounded-sm even:bg-neutral-800 sm:text-sm ${getGameResultColor(
              username,
              n.pgn,
            )}`}
          >
            <div className="col-span-2 text-xs text-neutral-400 sm:col-span-1 sm:text-sm">
              {getDaysElapsed(n.end_time)}
            </div>
            <div className="col-span-5 sm:col-span-6">
              <div className="truncate">
                <SquareIcon className="mr-1 inline h-auto w-3 fill-white" />
                {n.white.username}
              </div>
              <div className="truncate">
                <SquareIcon className="mr-1 inline h-auto w-3 fill-black" />
                {n.black.username}
              </div>
            </div>
            <div className="hidden text-right sm:block">
              <div>{n.accuracies?.white ?? "-"}</div>
              <div>{n.accuracies?.black ?? "-"}</div>
            </div>
            <div className="text-right uppercase">{n.time_class}</div>
            <a
              href={n.url}
              target="_blank"
              className="col-span-2 flex justify-end hover:cursor-pointer sm:col-span-1"
            >
              <DotsIcon className="h-auto w-5 fill-neutral-200" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
