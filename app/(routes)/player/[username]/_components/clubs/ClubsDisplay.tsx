"use client";

import Image from "next/image";
import { getDateFromUtc, getPages } from "@/_utils";
import { Clubs } from "@/_lib/types";
import { Show } from "@/_components";
import { useMemo, useState } from "react";
import { Pagination } from "..";

type Props = {
  clubs: Clubs;
};

export function ClubsDisplay({ clubs }: Props) {
  const [page, setPage] = useState(0);
  const pClubs = useMemo(
    () => getPages(clubs.clubs.toSorted((a, b) => b.joined - a.joined)),
    [clubs],
  );

  return (
    <section className="my-8">
      <h1 className="py-2 text-lg font-semibold uppercase">Clubs</h1>
      <div className="rounded-sm bg-zinc-800 px-4 py-8">
        <Show when={clubs.clubs.length < 1}>
          <h1 className="text-center text-zinc-400">No clubs joined.</h1>
        </Show>
        <Show when={clubs.clubs.length >= 1}>
          <header className="mb-8 grid grid-cols-10 px-4">
            <strong className="col-span-6 text-xs uppercase sm:text-sm">
              Club
            </strong>
            <strong className="col-span-2 text-right text-xs uppercase sm:text-sm">
              Joined
            </strong>
            <strong className="col-span-2 text-right text-xs uppercase sm:text-sm">
              Active
            </strong>
          </header>
          {pClubs[page].map((n) => (
            <div
              className="grid grid-cols-10 p-4 odd:bg-transparent even:rounded-sm even:bg-zinc-900"
              key={n["@id"]}
            >
              <div className="col-span-6 flex items-center space-x-2">
                <Image
                  src={n.icon}
                  alt={`${n.name} icon`}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-sm"
                />
                <a
                  className="truncate text-xs hover:cursor-pointer hover:underline sm:text-sm"
                  href={n.url}
                  target="_blank"
                >
                  {n.name}
                </a>
              </div>
              <h1 className="col-span-2 text-right text-xs sm:text-sm">
                {getDateFromUtc(n.joined).half}
              </h1>
              <h1 className="col-span-2 text-right text-xs sm:text-sm">
                {getDateFromUtc(n.last_activity).half}
              </h1>
            </div>
          ))}
          <Pagination
            setter={setPage}
            activePage={page}
            arrLength={pClubs.length}
          />
        </Show>
      </div>
    </section>
  );
}
