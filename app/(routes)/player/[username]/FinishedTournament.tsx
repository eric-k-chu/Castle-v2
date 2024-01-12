"use client";

import { DotsIcon, TrophyIcon } from "@/_components";
import { usePagination } from "@/_hooks";
import { FinishedTournament } from "@/_lib";
import { extractNameFromUrl } from "@/_utils";
import { EmptyListHeader, ListHeader } from ".";

type Props = {
  tournamentList: FinishedTournament[];
  header: string;
  emptyMsg: string;
};

export function FinishedTournament({
  tournamentList,
  header,
  emptyMsg,
}: Props) {
  const [list, page, _, switchPage] = usePagination(tournamentList.toSorted());

  if (list.length < 1) {
    return <EmptyListHeader header={header} message={emptyMsg} />;
  }

  return (
    <section className="my-8">
      <ListHeader
        icon={
          <TrophyIcon className="h-auto w-4 fill-neutral-900 sm:w-6 dark:fill-neutral-200" />
        }
        header={header}
        page={`${page + 1} of ${list.length}`}
        prev={() => switchPage("prev")}
        next={() => switchPage("next")}
      />
      <div className="rounded-sm border border-neutral-400 bg-neutral-200 px-4 py-8 text-xs sm:text-sm dark:border-neutral-800 dark:bg-neutral-900 ">
        <div className="mb-8 grid grid-cols-[4fr_1fr_1fr_0.5fr] px-4">
          <strong className="uppercase">name</strong>
          <strong className="text-center uppercase">placement</strong>
          <strong className="text-center uppercase">wins</strong>
          <strong className="text-right uppercase">link</strong>
        </div>
        {list[page].map((n) => (
          <div
            key={n["@id"]}
            className="grid grid-cols-[4fr_1fr_1fr_0.5fr] p-4 odd:bg-transparent even:bg-neutral-300 dark:even:bg-neutral-800"
          >
            <span className="capitalize">{extractNameFromUrl(n["@id"])}</span>
            <span className="text-center">{n.placement}</span>
            <span className="text-center">{n.wins}</span>
            <a className="flex justify-end" target="_blank" href={n.url}>
              <DotsIcon className="h-auto w-5 fill-neutral-200" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
