"use client";

import {
  FinishedMatchData,
  InProgMatchData,
  RegisteredMatchData,
  TournamentState,
  Tournaments,
} from "@/_lib/types";
import {
  FinishedTournaments,
  InProgressTournaments,
  RegisteredTournaments,
} from "..";
import { Show } from "@/_components";
import { TOURNAMENT_STATE } from "@/_lib/constants/tournament-state";
import { useState } from "react";

type Props = {
  tournaments: Tournaments;
};

export function TournamentsDisplay({ tournaments }: Props) {
  const [selected, setSelected] = useState<TournamentState>("finished");

  return (
    <div className="w-full p-4">
      <div className="space-x-2">
        {TOURNAMENT_STATE.map((n) => (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className={`capitalize hover:text-white ${
              selected === n ? "text-white" : "text-gray-500"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
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
  );
}