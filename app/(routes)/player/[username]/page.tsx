import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";
import { getAllPlayerData } from "@/_utils";
import {
  ArchivesDisplay,
  ClubsDisplay,
  ProfileDisplay,
  StatsDisplay,
  TournamentsDisplay,
} from "./_components";

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
        <ProfileDisplay player={data.player} />
        <StatsDisplay stats={data.stats} />
        <ClubsDisplay clubs={data.clubs} />
        <ArchivesDisplay archive={data.archives} username={username} />
        <TournamentsDisplay tournaments={data.tournaments} />
      </div>
    </div>
  );
}
