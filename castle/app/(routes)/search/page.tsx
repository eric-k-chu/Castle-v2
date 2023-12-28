import { getPlayer, getPlayerClubs, getPlayerStats } from "@/_utils/fetcher";
import { PlayerProfileDisplay, PlayerDataDisplay } from "./_components";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const username = searchParams.q ?? "";
  const player = await getPlayer(username);
  const stats = await getPlayerStats(username);
  const clubs = await getPlayerClubs(username);

  return (
    <div className="flex w-full flex-col pt-24">
      <div className="mx-auto w-full max-w-7xl px-4">
        <PlayerProfileDisplay player={player} />
        <PlayerDataDisplay data={{ stats, clubs }} />
      </div>
    </div>
  );
}
