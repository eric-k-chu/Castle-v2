"use client";

import Image from "next/image";
import { getDateFromUtc } from "@/_utils";
import { Clubs } from "@/_lib/types";

type Props = {
  clubs: Clubs;
};

export function ClubsDisplay({ clubs }: Props) {
  return (
    <div className="flex w-full flex-col items-center">
      <table className="w-full text-xs sm:text-sm">
        <thead>
          <tr className="uppercase text-gray-200">
            <th>&nbsp;</th>
            <th className="text-left">club</th>
            <th className="hidden px-6 text-left sm:table-cell">joined</th>
            <th className="hidden px-6 text-left sm:table-cell">
              last activity
            </th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody className="uppercase">
          {clubs.clubs
            .sort((a, b) => b.joined - a.joined)
            .map((n) => (
              <tr
                key={n["@id"]}
                className="hover:cursor-pointer hover:bg-zinc-950"
              >
                <td className="p-4">
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={n.icon}
                      alt={`${n.name} club icon`}
                      className="h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] rounded-full"
                    />
                  }
                </td>
                <td className="py-4">{n.name}</td>
                <td className="hidden px-6 py-4 sm:table-cell">
                  {getDateFromUtc(n.joined)}
                </td>
                <td className="hidden px-6 py-4 sm:table-cell">
                  {getDateFromUtc(n.last_activity)}
                </td>
                <td className="py-4 pl-6 text-right">
                  <a href={n.url} target="_blank">
                    <Image
                      src="/icons/dots.svg"
                      alt="link"
                      width="0"
                      height="0"
                      className="h-auto w-4"
                    />
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}