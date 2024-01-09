"use client";

import { MonthlyArchive } from "@/_lib";
import { getDaysElapsed, getGameResultColor, getPages } from "@/_utils";
import { useState } from "react";
import { Pagination } from "@/_components";
import { DotsIcon, SquareIcon } from "@/_components/icons";

type Props = {
  archive: MonthlyArchive;
  username: string;
};

export function ArchivesDisplay({ archive, username }: Props) {
  const [page, setPage] = useState(0);
  const games = getPages(archive.games.toReversed());

  if (games.length < 1) {
    return (
      <section className="my-8">
        <h1 className="py-2 text-lg font-semibold uppercase">Archives</h1>
        <div className="rounded-sm bg-zinc-900 px-4 py-8">
          <h1 className="text-center text-zinc-400">
            No games have been played.
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="my-8">
      <h1 className="py-2 text-lg font-semibold uppercase">Archives</h1>
      <div className="rounded-sm bg-zinc-900 px-4 py-8">
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
        {games[page].map((n) => (
          <div
            key={n.uuid}
            className={`my-1 grid grid-cols-10 border-l-8 p-4 text-xs odd:bg-transparent even:rounded-sm even:bg-zinc-800 sm:text-sm ${getGameResultColor(
              username,
              n.pgn,
            )}`}
          >
            <div className="col-span-2 text-xs text-zinc-400 sm:col-span-1 sm:text-sm">
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
              <DotsIcon className="h-auto w-5 fill-zinc-200" />
            </a>
          </div>
        ))}
        <Pagination
          setter={setPage}
          activePage={page}
          arrLength={games.length}
        />
      </div>
    </section>
  );
}
