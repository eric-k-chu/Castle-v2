import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";
import { getAllPlayerData } from "@/_utils";
import { Archives } from "./Archives";
import { Clubs } from "./Clubs";
import { FinishedTournament } from "./FinishedTournament";
import { Profile } from "./Profile";
import { Stats } from "./Stats";
import { UnfinishedTournament } from "./UnfinishedTournament";

type Props = {
  params: { username: string };
};

export default async function SearchPage({ params }: Props) {
  const username = params.username ?? "";
  const [data, err] = await ChessApi.getData(() => getAllPlayerData(username));

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  if (!data) return null;

  return (
    <div className="py-20">
      <div className="mx-auto w-full max-w-lg px-4 md:max-w-2xl lg:max-w-4xl">
        <Profile player={data.player} />
        <Stats stats={data.stats} />
        <Clubs
          clubList={data.clubs.clubs.toSorted((a, b) => b.joined - a.joined)}
        />
        <Archives
          archiveList={data.archives.games.toReversed()}
          username={username}
        />
        <FinishedTournament
          tournamentList={data.tournaments.finished.toSorted()}
          header="Finished Tournaments"
          emptyMsg="No tournaments finished."
        />
        <UnfinishedTournament
          tournamentList={data.tournaments.in_progress.toSorted()}
          header="In Progress Tournaments"
          emptyMsg="No tournaments in progress."
        />
        <UnfinishedTournament
          tournamentList={data.tournaments.registered.toSorted()}
          header="Registered Tournaments"
          emptyMsg="No tournaments registered."
        />
      </div>
    </div>
  );
}
