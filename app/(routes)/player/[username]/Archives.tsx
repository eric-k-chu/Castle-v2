"use client";

import { DotsIcon, PawnIcon, SquareIcon } from "@/_components";
import { usePagination } from "@/_hooks";
import { Game } from "@/_lib";
import { getDaysElapsed, getGameResultColor } from "@/_utils";
import { EmptyListHeader, ListHeader } from ".";

type Props = {
  archiveList: Game[];
  username: string;
};

export function Archives({ archiveList, username }: Props) {
  const [list, page, _, switchPage] = usePagination(archiveList);

  if (list.length < 1) {
    return (
      <EmptyListHeader
        header="Latest Games"
        message="No games have been played."
      />
    );
  }

  return (
    <section className="my-8">
      <ListHeader
        icon={<PawnIcon className="h-auto w-4 fill-neutral-200 sm:w-6" />}
        header="Latest Games"
        page={`${page + 1} of ${list.length}`}
        prev={() => switchPage("prev")}
        next={() => switchPage("next")}
      />
      <div className="rounded-sm border border-neutral-800 bg-neutral-900 px-4 py-8 text-xs sm:text-sm ">
        <div className="mb-8 grid grid-cols-[0.5fr_3fr_1fr_1fr_0.5fr] px-4">
          <strong className="uppercase">time</strong>
          <strong className="uppercase">players</strong>
          <strong className="text-center uppercase">accuracy</strong>
          <strong className="text-center uppercase">class</strong>
          <strong className="text-right uppercase">link</strong>
        </div>
        {list[page].map((n) => (
          <div
            key={n.uuid}
            className={`grid grid-cols-[0.5fr_3fr_1fr_1fr_0.5fr] p-4 odd:bg-transparent even:bg-neutral-900  ${getGameResultColor(
              username,
              n.pgn,
            )}`}
          >
            <span className="text-neutral-400">
              {getDaysElapsed(n.end_time)}
            </span>
            <div className="inline">
              <div className="truncate">
                <SquareIcon className="mr-1 inline h-auto w-3 fill-white" />
                {n.white.username}
              </div>
              <div className="truncate">
                <SquareIcon className="mr-1 inline h-auto w-3 fill-black" />
                {n.black.username}
              </div>
            </div>
            <div className="inline text-center">
              <div>{n.accuracies?.white ?? "-"}</div>
              <div>{n.accuracies?.black ?? "-"}</div>
            </div>
            <div className="text-center uppercase">{n.time_class}</div>
            <a href={n.url} target="_blank" className="flex justify-end">
              <DotsIcon className="h-auto w-5 fill-neutral-200" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
