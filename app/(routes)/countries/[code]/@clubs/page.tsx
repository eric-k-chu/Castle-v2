import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";
import { extractClubUrlId, getClubName } from "@/_utils";
import { List } from "../List";

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

  if (!clubs) return null;

  return (
    <List
      list={clubs.clubs.map((n) => getClubName(n)).toSorted()}
      link={`/club/`}
    />
  );
}
