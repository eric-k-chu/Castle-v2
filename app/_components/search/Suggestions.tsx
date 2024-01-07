"use client";

import { TitledPlayers } from "@/_lib/types";
import { filterPlayers } from "@/_utils";
import { Show } from "..";

type Props = {
  query: string;
  suggestions: TitledPlayers[] | undefined;
  onClick: (name: string) => void;
};

export function Suggestions({ query, suggestions, onClick }: Props) {
  const filtered =
    suggestions && query.length > 0 ? filterPlayers(suggestions, query) : [];

  return (
    <div
      className={`w-full overflow-hidden rounded-lg bg-white pb-2 text-black ${
        query.length > 0 ? "block" : "hidden"
      }`}
    >
      <Show when={filtered !== undefined && filtered.length >= 1}>
        <h1 className="mb-2 select-none bg-gray-200 py-1 indent-4 text-xs font-medium sm:text-sm">
          Titled Players
        </h1>
        {filtered?.map((n) => (
          <button
            key={n.name}
            onClick={() => onClick(n.name)}
            type="button"
            className="w-full py-2 text-left indent-4 text-xs hover:cursor-pointer hover:bg-zinc-300 sm:text-sm"
          >
            <span className="mr-1 rounded-sm bg-[#7C2929] px-1 py-0.5 font-mono text-white">
              {n.title}
            </span>
            {n.name}
          </button>
        ))}
      </Show>
      <h1 className="my-2 select-none bg-gray-200 py-1 indent-4 text-xs font-medium sm:text-sm">
        Player
      </h1>
      <button
        className="w-full py-2 text-left indent-4 text-xs hover:cursor-pointer hover:bg-zinc-300 sm:text-sm"
        onClick={() => onClick(query)}
        type="button"
      >
        {query}
      </button>
    </div>
  );
}
