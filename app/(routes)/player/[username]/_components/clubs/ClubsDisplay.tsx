"use client";

import Image from "next/image";
import { getDateFromUtc } from "@/_utils";
import { Clubs } from "@/_lib/types";
import { Show } from "@/_components";

type Props = {
  clubs: Clubs;
};

export function ClubsDisplay({ clubs }: Props) {
  return (
    <section className="my-8 rounded-sm bg-zinc-800 px-4 py-8">
      <Show when={clubs.clubs.length < 1}>
        <h1 className="text-center text-zinc-400">No clubs joined.</h1>
      </Show>
      <Show when={clubs.clubs.length >= 1}>
        <header className="mb-8 grid grid-cols-8 px-4">
          <strong className="col-span-6 text-xs uppercase sm:text-sm">
            Club
          </strong>
          <strong className="text-right text-xs uppercase sm:text-sm">
            Joined
          </strong>
          <strong className="text-right text-xs uppercase sm:text-sm">
            Last Active
          </strong>
        </header>
        {clubs.clubs
          .sort((a, b) => b.joined - a.joined)
          .map((n) => (
            <div
              className="grid grid-cols-8 p-4 odd:bg-transparent even:rounded-sm even:bg-zinc-900"
              key={n["@id"]}
            >
              <div className="col-span-6 flex items-center space-x-2">
                <Image
                  src={n.icon}
                  alt={`${n.name} icon`}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-sm"
                />
                <span className="text-xs sm:text-sm">{n.name}</span>
              </div>
              <h1 className="text-right text-xs sm:text-sm">
                {getDateFromUtc(n.joined).half}
              </h1>
              <h1 className="text-right text-xs sm:text-sm">
                {getDateFromUtc(n.last_activity).half}
              </h1>
            </div>
          ))}
      </Show>
    </section>
  );
}
