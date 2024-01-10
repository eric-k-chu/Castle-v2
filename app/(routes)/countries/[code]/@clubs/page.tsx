import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";

type Props = {
  params: { code: string };
};

export default async function CountryClubs({ params }: Props) {
  const [clubs, err] = await ChessApi.getData(() =>
    ChessApi.getClubsByCountry(params.code.toUpperCase()),
  );
  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  return (
    <ul className="mt-4 rounded-md bg-neutral-900 p-4">
      {clubs?.clubs.map((n) => (
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
