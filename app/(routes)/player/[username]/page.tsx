import { ChessApi } from "@/_chessapi";
import { ErrorMessage, TrophyIcon } from "@/_components";
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
    <div className="mx-auto w-full max-w-lg px-4 py-20 text-neutral-900 md:max-w-2xl lg:max-w-4xl dark:text-neutral-200">
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
        icon={
          <TrophyIcon className="h-auto w-4 fill-neutral-900 sm:w-6 dark:fill-neutral-200" />
        }
        header="In Progress Tournaments"
        emptyMsg="No tournaments in progress."
      />
      <UnfinishedTournament
        tournamentList={data.tournaments.registered.toSorted()}
        icon={
          <TrophyIcon className="h-auto w-4 fill-neutral-900 sm:w-6 dark:fill-neutral-200" />
        }
        header="Registered Tournaments"
        emptyMsg="No tournaments registered."
      />
    </div>
  );
}
