import { getPlayerData } from "@/_utils/fetcher";
import { ClubsDisplay, ProfileDisplay, StatsDisplay } from "./_components";

type Props = {
  params: { username: string };
};

export default async function SearchPage({ params }: Props) {
  const username = params.username ?? "";
  const { player, stats, clubs, archives, tournaments } =
    await getPlayerData(username);

  return (
    <div className="pb-[400px] pt-20">
      <div className="mx-auto w-full max-w-5xl px-4">
        <ProfileDisplay player={player} />
        <StatsDisplay stats={stats} />
        <ClubsDisplay clubs={clubs} />
      </div>
    </div>
  );
}
