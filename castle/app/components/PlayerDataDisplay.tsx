"use client";

import { TABS } from "@/lib/constants/tabs";
import { Tab } from "@/lib/types";
import { useState } from "react";
import { Loading } from ".";
import { DataDisplay } from "./search";

type Props = {
  isLoading: boolean | undefined;
  username: string | null;
};

export function PlayerDataDisplay({ isLoading, username }: Props) {
  const [selected, setSelected] = useState<Tab>("stats");

  if (isLoading) return <Loading />;

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
      <DataDisplay tab={selected} username={username} />
    </>
  );
}
