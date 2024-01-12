"use client";

import { DotsIcon } from "@/_components";
import { usePagination } from "@/_hooks";
import { UnfinishedTournament } from "@/_lib";
import { extractNameFromUrl } from "@/_utils";
import { EmptyListHeader, ListHeader } from ".";

type Props = {
  tournamentList: UnfinishedTournament[];
  icon?: JSX.Element;
  header: string;
  emptyMsg: string;
};

export function UnfinishedTournament({
  tournamentList,
  icon,
  header,
  emptyMsg,
}: Props) {
  const [list, page, _, switchPage] = usePagination(tournamentList);

  if (list.length < 1) {
    return <EmptyListHeader header={header} message={emptyMsg} />;
  }

  return (
    <section className="my-8">
      <ListHeader
        icon={icon}
        header={header}
        page={`${page + 1} of ${list.length}`}
        prev={() => switchPage("prev")}
        next={() => switchPage("next")}
      />
      <div className="rounded-sm border border-neutral-800 bg-neutral-900 px-4 py-8 text-xs sm:text-sm">
        <div className="mb-8 grid grid-cols-[4fr_1fr_0.5fr] px-4">
          <strong className="uppercase">name</strong>
          <strong className="text-center uppercase">status</strong>
          <strong className="text-right uppercase">link</strong>
        </div>
        {list[page].map((n) => (
          <div
            key={n["@id"]}
            className="grid grid-cols-[4fr_1fr_0.5fr] p-4 odd:bg-transparent even:bg-neutral-800"
          >
            <span className="capitalize">{extractNameFromUrl(n["@id"])}</span>
            <span className="text-center capitalize">{n.status}</span>
            <a className="flex justify-end" target="_blank" href={n.url}>
              <DotsIcon className="h-auto w-5 fill-neutral-200" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
