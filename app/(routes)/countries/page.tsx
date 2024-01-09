/* eslint-disable @next/next/no-img-element */
import { Country } from "@/_lib";
import { getCountries } from "@/_utils";

export default function Countries() {
  const countries = getCountries();

  return (
    <div className="mx-auto w-full px-4 py-24 sm:max-w-lg min-[878px]:max-w-3xl lg:max-w-4xl">
      <h1 className="text-center">Countries</h1>
      <div className="flex flex-wrap">
        {countries.map((n, i) => (
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
  return (
    <div className="group rounded-lg border border-zinc-800 hover:cursor-pointer">
      <div className="relative h-[150px] max-h-[150px] min-h-[150px] w-full">
        <img
          className="h-full w-full rounded-t-lg object-cover object-center"
          src={country.src}
          alt={`${country.code} flag`}
        />
        <div className="absolute bottom-0 flex h-full w-full items-center justify-center rounded-t-lg bg-zinc-900/60 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100 sm:text-sm md:text-base lg:text-lg">
          <h5 className="font-semibold">{country.code}</h5>
        </div>
      </div>
      <div className="rounded-b-lg bg-zinc-900 px-2 py-4">
        <h5 className="mb-2 space-x-2 truncate text-base sm:text-sm md:text-base lg:text-lg">
          {country.name}
        </h5>
      </div>
    </div>
  );
}
