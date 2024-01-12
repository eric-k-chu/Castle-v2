"use client";

import { usePagination } from "@/_hooks";
import { ClubInfo } from "@/_lib";
import { getDateFromUtc } from "@/_utils";
import { EmptyListHeader, ListHeader } from ".";
import Image from "next/image";
import { PeopleIcon } from "@/_components";

type Props = {
  clubList: ClubInfo[];
};

export function Clubs({ clubList }: Props) {
  const [list, page, _, switchPage] = usePagination(clubList);

  if (list.length < 1) {
    return <EmptyListHeader header="Clubs" message="No clubs joined." />;
  }

  return (
    <section className="my-8">
      <ListHeader
        icon={<PeopleIcon className="h-auto w-4 fill-neutral-200 sm:w-6" />}
        header="Clubs"
        page={`${page + 1} of ${list.length}`}
        prev={() => switchPage("prev")}
        next={() => switchPage("next")}
      />
      <div className="rounded-sm border border-neutral-800 bg-neutral-900 px-4 py-8 text-xs sm:text-sm ">
        <div className="mb-8 grid grid-cols-[4fr_1fr_1fr] px-4">
          <strong className="uppercase">name</strong>
          <strong className="text-center uppercase">joined</strong>
          <strong className="text-right uppercase">last active</strong>
        </div>
        {list[page].map((n) => (
          <div
            className="grid grid-cols-[4fr_1fr_1fr] p-4 odd:bg-transparent even:bg-neutral-800 "
            key={n["@id"]}
          >
            <div className="flex items-center gap-x-2">
              <Image
                src={n.icon}
                alt={`${n.name} icon`}
                width={28}
                height={28}
                className="h-7 w-7 rounded-sm"
              />
              <a
                className="truncate hover:cursor-pointer hover:underline"
                href={n.url}
                target="_blank"
              >
                {n.name}
              </a>
            </div>
            <h1 className="text-center">{getDateFromUtc(n.joined).half}</h1>
            <h1 className="text-right">
              {getDateFromUtc(n.last_activity).half}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
