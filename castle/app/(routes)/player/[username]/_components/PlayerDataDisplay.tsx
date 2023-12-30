"use client";

import { TABS } from "@/_lib/constants";
import { Clubs, MonthlyArchive, Stats, Tab } from "@/_lib/types";
import { useState } from "react";
import { Show } from "@/_components";
import { ArchivesDisplay, ClubsDisplay, StatsDisplay } from ".";

type Props = {
  data: {
    stats: Stats;
    clubs: Clubs;
    archives: MonthlyArchive;
  };
  username: string;
};

export function PlayerDataDisplay({ data, username }: Props) {
  const [selected, setSelected] = useState<Tab>("stats");

  return (
    <>
      <ul className="flex w-full items-center justify-around overflow-x-auto border-b border-b-gray-600">
        {TABS.map((tab) => (
          <li
            className={`w-full select-none px-4 py-2 text-center text-xs capitalize hover:cursor-pointer hover:bg-gray-700 sm:text-sm ${
              selected === tab
                ? "text-white underline underline-offset-[12px]"
                : "text-gray-500"
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
        <div>TOURNAMENTS</div>
      </Show>
    </>
  );
}
