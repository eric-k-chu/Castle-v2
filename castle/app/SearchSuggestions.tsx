import { useLoadData } from "./hooks/useLoadData";
import { getAllTitledPlayers, filterCountries, filterPlayers } from "./lib/api";
import { Error } from "./components/Error";
import { Country } from "./lib/types";

type Props = {
  query: string;
  countryList: Country[];
};

export function SearchSuggestions({ query, countryList }: Props) {
  const { data, error } = useLoadData(getAllTitledPlayers);

  if (error) {
    return <Error error={error} />;
  }

  const players = filterPlayers(data, query);
  const countries = filterCountries(countryList, query);

  const isPlayers = players && players.length > 0;
  const isCountries = countries.length > 0;
  const isOpen = query.length > 0 && (isPlayers || isCountries);

  return (
    <div
      className={`absolute top-5 z-[9] flex w-full rounded-b-3xl bg-white pt-6 sm:top-8 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex h-full w-full flex-col items-center gap-y-4 border-t border-t-gray-300 py-6">
        <section
          className={`flex w-full flex-col ${isPlayers ? "block" : "hidden"}`}
        >
          <h1 className="mb-2 pl-6 text-xs">Titled Players</h1>
          <ul className="space-y-2 text-sm">
            {players?.map((player) => (
              <li
                className="px-1 py-2 hover:cursor-pointer hover:bg-gray-200"
                key={player.name}
              >
                <span className="pl-6">
                  <span className="rounded-sm bg-[#7C2929] px-1 py-0.5 font-mono text-white">
                    {player.title}
                  </span>
                </span>
                &nbsp;{player.name}
              </li>
            ))}
          </ul>
        </section>
        <section
          className={`flex w-full flex-col ${isCountries ? "block" : "hidden"}`}
        >
          <h1 className="mb-2 pl-6 text-xs">Countries</h1>
          <ul className="space-y-2 text-sm">
            {countries.map((n) => (
              <li
                key={n.code}
                className="flex items-center p-1 hover:cursor-pointer hover:bg-gray-200"
              >
                <span className="pl-6">
                  <img
                    src={n.src}
                    alt={n.code}
                    className="w-5 rounded-sm border border-gray-400 sm:w-6"
                  />
                </span>
                &nbsp;{n.code}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
