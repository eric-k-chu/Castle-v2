"use client";

import Image from "next/image";
import { FinishedMatchData } from "@/_lib/types";
import { getPages, getTournamentName } from "@/_utils";
import { useMemo, useState } from "react";
import { Pagination } from "..";

type Props = {
  tournaments: FinishedMatchData[];
};

export function FinishedTournaments({ tournaments }: Props) {
  const finished = useMemo(
    () => getPages(tournaments.reverse()),
    [tournaments],
  );
  const [page, setPage] = useState(0);

  return (
    <>
      <div className="mt-4 space-y-2">
        <header className="grid grid-cols-5 p-4 text-xs">
          <strong className="col-span-2 uppercase">name</strong>
          <strong className="text-center uppercase">placement</strong>
          <strong className="text-right uppercase">wld</strong>
          <strong className="text-right uppercase">link</strong>
        </header>
        {finished[page].map((n) => (
          <div
            key={n["@id"]}
            className="grid grid-cols-5 rounded-sm p-4 text-xs shadow-2xl odd:bg-zinc-900 even:bg-zinc-800"
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
              <Image
                src="/icons/dots.svg"
                alt="link"
                width={0}
                height={0}
                className="h-5 w-auto"
              />
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
