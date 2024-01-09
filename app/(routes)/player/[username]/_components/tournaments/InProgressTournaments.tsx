"use client";

import { InProgMatchData } from "@/_lib";
import { getPages, getTournamentName } from "@/_utils";
import { useMemo, useState } from "react";
import { Pagination } from "@/_components";
import { DotsIcon } from "@/_components/icons";

type Props = {
  tournaments: InProgMatchData[];
};

export function InProgressTournaments({ tournaments }: Props) {
  const inProgress = useMemo(
    () => getPages(tournaments.toReversed()),
    [tournaments],
  );
  const [page, setPage] = useState(0);

  if (inProgress.length < 1) {
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
        {inProgress[page].map((n) => (
          <div
            key={n["@id"]}
            className="grid grid-cols-4 rounded-sm p-4 text-xs odd:bg-transparent even:bg-zinc-800 sm:text-sm"
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
        arrLength={inProgress.length}
        activePage={page}
        setter={setPage}
      />
    </>
  );
}
