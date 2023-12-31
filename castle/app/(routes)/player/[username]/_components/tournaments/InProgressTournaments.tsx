"use client";

import Image from "next/image";
import { InProgMatchData } from "@/_lib/types";
import { getPages, getTournamentName } from "@/_utils";
import { useMemo, useState } from "react";
import { Pagination } from "..";

type Props = {
  tournaments: InProgMatchData[];
};

export function InProgressTournaments({ tournaments }: Props) {
  const inProgress = useMemo(() => getPages(tournaments), [tournaments]);
  const [page, setPage] = useState(0);

  return (
    <>
      <div className="mt-4 space-y-2">
        <header className="grid grid-cols-2 p-4 text-xs">
          <strong className="uppercase">name</strong>
          <strong className="text-right uppercase">link</strong>
        </header>
        {inProgress[page].map((n) => (
          <div
            key={n["@id"]}
            className="grid grid-cols-2 rounded-sm p-4 text-xs shadow-2xl odd:bg-zinc-900 even:bg-zinc-800"
          >
            <div className="truncate capitalize">
              {getTournamentName(n["@id"])}
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
        arrLength={inProgress.length}
        activePage={page}
        setter={setPage}
      />
    </>
  );
}
