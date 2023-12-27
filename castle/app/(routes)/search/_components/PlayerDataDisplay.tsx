"use client";

import { TABS } from "@/_lib/constants/tabs";
import { Tab } from "@/_lib/types";
import { useState } from "react";
import { StatsDisplay } from "./StatsDisplay";
import { Show } from "@/_components";

type Props = {
  username: string | null;
};

export function PlayerDataDisplay({ username }: Props) {
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
        <StatsDisplay username={username} />
      </Show>
    </>
  );
}
