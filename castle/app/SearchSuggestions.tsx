import { useLoadData } from "./hooks/useLoadData";
import { getAllTitledPlayers } from "./lib/api";
import { Error } from "./components/Error";

type Props = {
  query: string;
};

export function SearchSuggestions({ query }: Props) {
  const { data, error } = useLoadData(getAllTitledPlayers);

  if (error) {
    return <Error error={error} />;
  }

  const players = data
    ?.filter((player) =>
      player.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    )
    .slice(0, 3);

  return (
    <div
      className={`absolute top-8 z-[9] flex w-full rounded-b-3xl bg-white pt-6 ${
        query.length > 0 && players && players?.length > 0 ? "block" : "hidden"
      }`}
    >
      <div className="flex h-full w-full flex-col items-center border-t border-t-gray-300 py-6">
        <section className="flex w-full flex-col">
          <h1 className="mb-2 pl-6 text-xs">Titled Players</h1>
          <ul className="space-y-2 text-sm">
            {players?.map((player) => (
              <li
                className="px-1 py-2 hover:cursor-pointer hover:bg-gray-200"
                key={player.name}
              >
                <span className="pl-6">
                  <span className="rounded-sm bg-[#7C2929] p-1 font-mono text-white">
                    {player.title}
                  </span>
                </span>
                &nbsp;{player.name}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
