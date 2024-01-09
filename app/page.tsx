import { getPlayerSuggestions } from "@/_utils";
import { ChessImgBackground } from "./_components";
import { Search } from "./_components/search";
import { Logo } from "./_components/icons";

export default async function HomePage() {
  const suggestions = await getPlayerSuggestions();

  return (
    <ChessImgBackground>
      <div className="flex h-screen flex-col items-center justify-center px-2">
        <div className="mb-12 flex w-full max-w-2xl items-center justify-center gap-x-4 sm:gap-x-8">
          <Logo className="fill-primary-1 h-16 w-auto sm:h-24" />
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold uppercase sm:text-4xl">
              Castle
            </h1>
            <p className="hidden text-xl font-medium capitalize text-gray-200 sm:block">
              a chess.com search engine.
            </p>
          </div>
        </div>
        <Search suggestions={suggestions} />
      </div>
    </ChessImgBackground>
  );
}
