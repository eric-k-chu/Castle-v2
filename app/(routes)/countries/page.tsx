"use client";

/* eslint-disable @next/next/no-img-element */
import { SearchIcon, FlagIcon } from "@/_components";
import { Country, ROUTES } from "@/_lib";
import { getCountries } from "@/_utils";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function Countries() {
  const [filter, setFilter] = useState("");
  const countries = useMemo(() => getCountries(), []);

  const filteredCountries = countries.filter(
    (n) =>
      n.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      n.code.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

  return (
    <div className="mx-auto min-h-screen w-full px-4 py-24 text-neutral-900 dark:text-neutral-200 sm:max-w-lg min-[878px]:max-w-3xl lg:max-w-4xl">
      <div className="mb-2 flex items-center">
        <div className="flex items-center gap-x-2 sm:gap-x-4">
          <FlagIcon className="inline h-auto w-5 fill-neutral-900 stroke-neutral-900 dark:fill-neutral-200 dark:stroke-neutral-200 sm:w-6 md:w-8" />
          <strong className="text-lg uppercase sm:text-2xl md:text-4xl">
            Countries
          </strong>
        </div>
        <section className="ml-4 flex items-center border-b border-b-neutral-400 p-1 focus-within:ring-1 focus-within:ring-blue-600 dark:border-b-neutral-800">
          <input
            className="bg-transparent focus:outline-none"
            onChange={(e) => setFilter(e.currentTarget.value)}
            value={filter}
          />
          <SearchIcon className="h-auto w-4 fill-neutral-900 dark:fill-neutral-200" />
        </section>
      </div>
      <div className="flex flex-wrap">
        {filteredCountries.map((n, i) => (
          <div
            key={i}
            className="w-full p-1 sm:w-1/2 min-[878px]:w-1/3 lg:w-1/4"
          >
            <Card country={n} />
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  country: Country;
};

function Card({ country }: Props) {
  const router = useRouter();
  return (
    <div
      className="group rounded-lg border border-neutral-400 hover:cursor-pointer dark:border-neutral-800"
      onClick={() => router.push(`${ROUTES.countries}/${country.code}`)}
    >
      <div className="relative h-[150px] max-h-[150px] min-h-[150px] w-full">
        <img
          className="h-full w-full rounded-t-lg object-cover object-center"
          src={country.src}
          alt={`${country.code} flag`}
        />
        <div className="absolute bottom-0 flex h-full w-full items-center justify-center rounded-t-lg bg-neutral-900/0 transition-colors duration-150 ease-in-out group-hover:bg-neutral-900/50 sm:text-sm md:text-base lg:text-lg">
          <h5 className="font-semibold text-neutral-200 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
            {country.code}
          </h5>
        </div>
      </div>
      <div className="rounded-b-lg bg-neutral-200 px-2 py-4 transition-colors duration-150 ease-in-out dark:bg-neutral-900">
        <h5 className="mb-2 space-x-2 truncate text-base sm:text-sm md:text-base lg:text-lg">
          {country.name}
        </h5>
      </div>
    </div>
  );
}
