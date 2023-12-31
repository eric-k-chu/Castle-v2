"use client";

import { filterPlayers } from "@/_utils/filter-players";
import { TitledPlayers } from "@/_lib/types";
import { useRouter } from "next/navigation";

type Props = {
  query: string;
  playerList: TitledPlayers[];
};

export function SearchSuggestions({ query, playerList }: Props) {
  const router = useRouter();
  const players = query.length > 0 ? filterPlayers(playerList, query, 5) : [];

  const isOpen = query.length > 0 && players && players.length > 0;

  return (
    <div
      className={`absolute top-5 z-[9] w-full rounded-b-3xl bg-white pt-6 sm:top-8 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative w-full items-center space-y-4 border-t border-t-gray-300 py-6">
        <section className="w-full">
          <h1 className="mb-2 pl-6 text-xs">Titled Players</h1>
          <ul className="space-y-2 text-sm">
            {players?.map((player) => (
              <li
                className="px-1 py-2 hover:cursor-pointer hover:bg-gray-200"
                key={player.name}
                onClick={() => router.push(`/player/${[player.name]}`)}
              >
                <span className="pl-6">
                  <span className="rounded-sm bg-[#7C2929] px-1 py-0.5 font-mono text-white">
                    {player.title}
                  </span>
                </span>
                &nbsp;{player.name}
              </li>
            ))}
          </ul>
        </section>
        <h1 className="absolute bottom-2 right-4 select-none text-xs italic text-gray-400">
          Suggestions
        </h1>
      </div>
    </div>
  );
}
