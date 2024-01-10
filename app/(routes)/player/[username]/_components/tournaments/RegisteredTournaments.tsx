"use client";

import { DotsIcon, Pagination } from "@/_components";
import { RegisteredMatchData } from "@/_lib";
import { getPages, getTournamentName } from "@/_utils";
import { useMemo, useState } from "react";

type Props = {
  tournaments: RegisteredMatchData[];
};

export function RegisteredTournaments({ tournaments }: Props) {
  const registered = useMemo(
    () => getPages(tournaments.toReversed()),
    [tournaments],
  );
  const [page, setPage] = useState(0);

  if (registered.length < 1) {
    return <h1 className="text-center">No matches have been played.</h1>;
  }

  return (
    <>
      <div className="space-y-2">
        <header className="grid grid-cols-4 p-4 text-xs sm:text-sm">
          <strong className="col-span-2 uppercase">name</strong>
          <strong className="text-right uppercase">status</strong>
          <strong className="text-right uppercase">link</strong>
        </header>
        {registered[page].map((n) => (
          <div
            key={n["@id"]}
            className="grid grid-cols-4 rounded-sm p-4 text-xs odd:bg-transparent even:bg-zinc-900 sm:text-sm"
          >
            <div className="col-span-2 truncate capitalize">
              {getTournamentName(n["@id"])}
            </div>
            <div className="text-right capitalize">{n.status}</div>
            <a target="_blank" href={n.url} className="flex justify-end">
              <DotsIcon className="h-auto w-5 fill-zinc-200" />
            </a>
          </div>
        ))}
      </div>
      <Pagination
        arrLength={registered.length}
        activePage={page}
        setter={setPage}
      />
    </>
  );
}
