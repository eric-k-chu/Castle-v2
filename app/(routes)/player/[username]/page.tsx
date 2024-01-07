import { getPlayerData } from "@/_utils/fetcher";
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
  const { player, stats, clubs, archives, tournaments } =
    await getPlayerData(username);

  return (
    <div className="py-20">
      <div className="mx-auto w-full max-w-lg px-4 md:max-w-2xl lg:max-w-4xl">
        <ProfileDisplay player={player} />
        <StatsDisplay stats={stats} />
        <ClubsDisplay clubs={clubs} />
        <ArchivesDisplay archive={archives} username={username} />
        <TournamentsDisplay tournaments={tournaments} />
      </div>
    </div>
  );
}
