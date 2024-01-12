import { ErrorMessage } from "@/_components";
import { getCountries, getCountryPlayersAndClubs } from "@/_utils";
import { CountryPlayers } from "./CountryPlayers";
import Image from "next/image";
import { CountryClubs } from "./CountryClubs";
import { ChessApi } from "@/_chessapi";

type Props = {
  params: { code: string };
};

export default async function CountryPage({ params }: Props) {
  const countryCode = params.code.toUpperCase();
  const country = getCountries().find((n) => n.code === countryCode);

  if (!country) {
    return <ErrorMessage message={`${countryCode} does not exist.`} />;
  }

  const [data, err] = await ChessApi.getData(() =>
    getCountryPlayersAndClubs(countryCode),
  );

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  if (!data) return null;

  return (
    <>
      <h1 className="flex items-center space-x-4 text-xl font-semibold uppercase sm:text-2xl md:text-4xl">
        <span className="mr-1 font-light text-primary-1">
          &#40;{country?.code}&#41;
        </span>
        {country?.name}
        <Image
          src={country?.src}
          alt={`${countryCode} flag`}
          width={0}
          height={0}
          className="inline h-auto w-8 rounded-sm border border-neutral-700 sm:w-10"
        />
      </h1>
      <div className="mt-4 flex w-full flex-col gap-4 sm:flex-row">
        <section className="w-full sm:w-1/2">
          <h2 className="text-center text-base font-semibold sm:text-lg md:text-xl">
            Players
          </h2>
          <CountryPlayers players={data.players} />
        </section>
        <section className="w-full sm:w-1/2">
          <h2 className="text-center text-base font-semibold sm:text-lg md:text-xl">
            Clubs
          </h2>
          <CountryClubs clubs={data.clubs} />
        </section>
      </div>
    </>
  );
}
