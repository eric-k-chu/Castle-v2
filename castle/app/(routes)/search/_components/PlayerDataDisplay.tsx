"use client";

import { TABS } from "@/_lib/constants";
import { Clubs, Stats, Tab } from "@/_lib/types";
import { useState } from "react";
import { Show } from "@/_components";
import { ClubsDisplay, StatsDisplay } from ".";

type Props = {
  data: {
    stats: Stats;
    clubs: Clubs;
  };
};

export function PlayerDataDisplay({ data }: Props) {
  const [selected, setSelected] = useState<Tab>("stats");

  return (
    <>
      <ul className="mt-4 flex items-center gap-2 overflow-x-auto pb-4">
        {TABS.map((tab) => (
          <li
            className={`select-none rounded-md border border-gray-600 px-4 py-2 text-xs hover:cursor-pointer hover:bg-gray-600 sm:text-sm ${
              selected === tab ? "bg-gray-600" : "bg-black"
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
      <Show when={selected === "tournaments"}>
        <div>TOURNAMENTS</div>
      </Show>
      <Show when={selected === "archives"}>
        <div>ARCHIVES</div>
      </Show>
    </>
  );
}
