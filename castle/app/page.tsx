import { SearchInput } from "./SearchInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overscroll-none bg-gradient-to-t from-black to-black/40 to-90%">
      <div className="mb-12 mt-64 text-center">
        <h1 className="text-4xl font-semibold uppercase tracking-wide drop-shadow-lg">
          CASTLE
        </h1>
        <p className="mt-4 text-lg font-medium text-gray-200 drop-shadow-lg">
          A player search engine. Powered by Chess.com API
        </p>
      </div>
      <SearchInput />
    </main>
  );
}
