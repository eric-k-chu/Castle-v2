"use client";

import { usePagination } from "@/_hooks";
import { Clubs } from "@/_lib";
import { getDateFromUtc } from "@/_utils";
import Image from "next/image";
import { ListHeader } from "../../ListHeader";
import { EmptyListHeader } from "../../EmptyListHeader";

type Props = {
  clubs: Clubs;
};

export function ClubsDisplay({ clubs }: Props) {
  const [list, page, _, switchPage] = usePagination(
    clubs.clubs.toSorted((a, b) => b.joined - a.joined),
  );

  if (list.length < 1) {
    return <EmptyListHeader header="Clubs" message="No clubs joined." />;
  }

  return (
    <section className="my-8">
      <ListHeader
        header="Clubs"
        page={`${page + 1} of ${list.length}`}
        prev={() => switchPage("prev")}
        next={() => switchPage("next")}
      />
      <div className="rounded-sm bg-neutral-900 px-4 py-8">
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
        {list[page].map((n) => (
          <div
            className="grid grid-cols-10 p-4 odd:bg-transparent even:rounded-sm even:bg-neutral-800"
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
      </div>
    </section>
  );
}
