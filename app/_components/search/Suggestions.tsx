"use client";

import { TitledPlayer } from "@/_lib";
import { filterPlayers } from "@/_utils";
import { ChessTitle, Show } from "..";

type Props = {
  query: string;
  suggestions: TitledPlayer[] | undefined;
  onClick: (name: string) => void;
};

export function Suggestions({ query, suggestions, onClick }: Props) {
  const filtered =
    suggestions && query.length > 0 ? filterPlayers(suggestions, query) : [];

  return (
    <div
      className={`w-full max-w-2xl overflow-hidden rounded-lg bg-white pb-2 text-black ${
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
            className="w-full py-2 text-left indent-4 text-xs hover:cursor-pointer hover:bg-neutral-300 sm:text-sm"
          >
            <ChessTitle title={n.title} />
            {n.name}
          </button>
        ))}
      </Show>
      <h1 className="my-2 select-none bg-gray-200 py-1 indent-4 text-xs font-medium sm:text-sm">
        Player
      </h1>
      <button
        className="w-full py-2 text-left indent-4 text-xs hover:cursor-pointer hover:bg-neutral-300 sm:text-sm"
        onClick={() => onClick(query)}
        type="button"
      >
        {query}
      </button>
    </div>
  );
}
