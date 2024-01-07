"use client";

import Image from "next/image";
import { FinishedMatchData } from "@/_lib/types";
import { getPages, getTournamentName } from "@/_utils";
import { useMemo, useState } from "react";
import { Pagination } from "..";
import { DotsIcon } from "@/_components/icons";

type Props = {
  tournaments: FinishedMatchData[];
};

export function FinishedTournaments({ tournaments }: Props) {
  const finished = useMemo(
    () => getPages(tournaments.toReversed()),
    [tournaments],
  );
  const [page, setPage] = useState(0);

  if (finished.length < 1) {
    return <h1 className="text-center">No matches have been played.</h1>;
  }

  return (
    <>
      <div className="space-y-2">
        <header className="grid grid-cols-5 p-4 text-xs sm:text-sm">
          <strong className="col-span-2 uppercase">name</strong>
          <strong className="text-center uppercase">placement</strong>
          <strong className="text-right uppercase">wld</strong>
          <strong className="text-right uppercase">link</strong>
        </header>
        {finished[page].map((n) => (
          <div
            key={n["@id"]}
            className="grid grid-cols-5 rounded-sm p-4 text-xs odd:bg-zinc-800 even:bg-zinc-900 sm:text-sm"
          >
            <div className="col-span-2 truncate capitalize">
              {getTournamentName(n["@id"])}
            </div>
            <div className="text-center">{n.placement}</div>
            <div className="space-x-2 text-right">
              <span className="text-green-400">{n.wins}</span>
              <span className="text-red-400">{n.losses}</span>
              <span className="text-gray-400">{n.draws}</span>
            </div>
            <a target="_blank" href={n.url} className="flex justify-end">
              <DotsIcon className="h-auto w-5 fill-zinc-200" />
            </a>
          </div>
        ))}
      </div>
      <Pagination
        arrLength={finished.length}
        activePage={page}
        setter={setPage}
      />
    </>
  );
}
