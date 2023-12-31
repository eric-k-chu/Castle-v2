"use client";

import Image from "next/image";
import { RegisteredMatchData } from "@/_lib/types";
import { getPages, getTournamentName } from "@/_utils";
import { useMemo, useState } from "react";
import { Pagination } from "..";

type Props = {
  tournaments: RegisteredMatchData[];
};

export function RegisteredTournaments({ tournaments }: Props) {
  const registered = useMemo(
    () => getPages(tournaments.toReversed()),
    [tournaments],
  );
  const [page, setPage] = useState(0);

  return (
    <>
      <div className="mt-4 space-y-2">
        <header className="grid grid-cols-4 p-4 text-xs">
          <strong className="col-span-2 uppercase">name</strong>
          <strong className="text-right uppercase">status</strong>
          <strong className="text-right uppercase">link</strong>
        </header>
        {registered[page].map((n) => (
          <div
            key={n["@id"]}
            className="grid grid-cols-4 rounded-sm p-4 text-xs shadow-2xl odd:bg-zinc-900 even:bg-zinc-800"
          >
            <div className="col-span-2 truncate capitalize">
              {getTournamentName(n["@id"])}
            </div>
            <div className="text-right capitalize">{n.status}</div>
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
        arrLength={registered.length}
        activePage={page}
        setter={setPage}
      />
    </>
  );
}
