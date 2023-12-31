"use client";

import { TABS } from "@/_lib/constants";
import { Clubs, MonthlyArchive, Stats, Tab, Tournaments } from "@/_lib/types";
import { useState } from "react";
import { Show } from "@/_components";
import {
  ArchivesDisplay,
  ClubsDisplay,
  StatsDisplay,
  TournamentsDisplay,
} from ".";

type Props = {
  data: {
    stats: Stats;
    clubs: Clubs;
    archives: MonthlyArchive;
    tournaments: Tournaments;
  };
  username: string;
};

export function PlayerDataDisplay({ data, username }: Props) {
  const [selected, setSelected] = useState<Tab>("stats");

  return (
    <>
      <ul className="flex items-center justify-between gap-x-2 overflow-x-auto sm:gap-x-4">
        {TABS.map((tab) => (
          <li
            className={`w-full select-none rounded-md px-4 py-2 text-center text-xs capitalize transition-colors hover:cursor-pointer hover:bg-zinc-700 sm:text-sm ${
              selected === tab ? "bg-zinc-600" : "bg-zinc-800"
            }`}
            onClick={() => setSelected(tab)}
            key={tab}
          >
            {tab}
          </li>
        ))}
      </ul>
      <Show when={selected === "stats"}>
        <StatsDisplay stats={data.stats} />
      </Show>
      <Show when={selected === "clubs"}>
        <ClubsDisplay clubs={data.clubs} />
      </Show>
      <Show when={selected === "archives"}>
        <ArchivesDisplay archive={data.archives} username={username} />
      </Show>
      <Show when={selected === "tournaments"}>
        <TournamentsDisplay tournaments={data.tournaments} />
      </Show>
    </>
  );
}
