"use client";

import {
  FinishedMatchData,
  InProgMatchData,
  RegisteredMatchData,
  TournamentState,
  Tournaments,
} from "@/_lib";
import {
  FinishedTournaments,
  InProgressTournaments,
  RegisteredTournaments,
} from "..";
import { Show } from "@/_components";
import { useState } from "react";

type Props = {
  tournaments: Tournaments;
};

export function TournamentsDisplay({ tournaments }: Props) {
  const [selected, setSelected] = useState<TournamentState>("finished");

  function convertToTitle(n: TournamentState): string {
    if (n === "finished") return "Finished";
    if (n === "in_progress") return "In Progress";
    if (n === "registered") return "Registered";
    return "";
  }

  return (
    <section className="my-8">
      <div className="flex items-center justify-between">
        <h1 className="py-2 text-lg font-semibold uppercase">Tournaments</h1>
        <div className="pt-1">
          {["finished", "in_progress", "registered"].map((n) => (
            <button
              key={n}
              onClick={() => setSelected(n as TournamentState)}
              className={`rounded-t-md px-4 py-2 hover:text-white ${
                selected === n
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-950 text-zinc-500"
              }`}
            >
              {convertToTitle(n as TournamentState)}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-sm bg-zinc-900 px-4 py-8">
        <Show when={selected === "finished"}>
          <FinishedTournaments
            tournaments={tournaments[selected] as FinishedMatchData[]}
          />
        </Show>
        <Show when={selected === "in_progress"}>
          <InProgressTournaments
            tournaments={tournaments[selected] as InProgMatchData[]}
          />
        </Show>
        <Show when={selected === "registered"}>
          <RegisteredTournaments
            tournaments={tournaments[selected] as RegisteredMatchData[]}
          />
        </Show>
      </div>
    </section>
  );
}
