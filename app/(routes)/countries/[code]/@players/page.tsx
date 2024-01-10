import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";

type Props = {
  params: { code: string };
};

export default async function CountryPlayers({ params }: Props) {
  const [players, err] = await ChessApi.getData(() =>
    ChessApi.getPlayersByCountry(params.code.toUpperCase()),
  );

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  return (
    <ul className="mt-4 rounded-md bg-neutral-900 p-4">
      {players?.players.map((n) => (
        <li
          key={n}
          className="truncate p-2 odd:bg-neutral-800 even:bg-transparent"
        >
          {n}
        </li>
      ))}
    </ul>
  );
}
