import { getPlayer, getPlayerClubs, getPlayerStats } from "@/_utils/fetcher";
import { PlayerProfileDisplay, PlayerDataDisplay } from "./_components";

export default async function SearchPage({
  params,
}: {
  params: { username: string };
}) {
  const username = params.username ?? "";
  const player = await getPlayer(username);
  const stats = await getPlayerStats(username);
  const clubs = await getPlayerClubs(username);

  return (
    <div className="flex w-full flex-col pt-24">
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20">
        <PlayerProfileDisplay player={player} />
        <PlayerDataDisplay data={{ stats, clubs }} />
      </div>
    </div>
  );
}
