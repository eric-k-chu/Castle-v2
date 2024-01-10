/* eslint-disable @next/next/no-img-element */

import { ChessApi } from "@/_chessapi";

type Props = {
  params: { code: string };
};

export default async function CountryPage({ params }: Props) {
  const [country, err] = await ChessApi.getData(() =>
    ChessApi.getPlayersByCountry(params.code.toUpperCase()),
  );

  if (err !== null) {
    return (
      <div className="mx-auto w-full px-4 py-24 sm:max-w-lg min-[878px]:max-w-3xl lg:max-w-4xl">
        <h1>{err}</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full px-4 py-24 sm:max-w-lg min-[878px]:max-w-3xl lg:max-w-4xl">
      {country?.players.map((n) => <div key={n}>{n}</div>)}
    </div>
  );
}
