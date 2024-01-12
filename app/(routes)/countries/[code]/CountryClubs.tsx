"use client";

import { CountryClubs } from "@/_lib";
import { getIdentifier } from "@/_utils";
import { List } from "./List";

type Props = {
  clubs: CountryClubs;
};

export function CountryClubs({ clubs }: Props) {
  return (
    <List
      list={clubs.clubs.toSorted()}
      link={`/club/`}
      converter={getIdentifier}
    />
  );
}
