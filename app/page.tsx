import { getPlayerSuggestions } from "@/_utils";
import { ErrorMessage } from "./_components";
import { Search } from "./_components/search";
import { Logo } from "./_components/icons";
import { ChessApi } from "./_chessapi";

export default async function HomePage() {
  const [suggestions, err] = await ChessApi.getData(() =>
    getPlayerSuggestions(),
  );

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  if (!suggestions) return null;

  return (
    <main
      style={{
        backgroundPosition: "top",
        backgroundImage:
          "linear-gradient(to top, rgba(9, 9, 11, 1) 10%, rgba(9, 9, 11, 0.7) 90%), url('/images/hero.png')",
      }}
    >
      <div className="flex h-screen flex-col items-center justify-center px-2">
        <div className="mb-2 flex w-full max-w-2xl items-center justify-center gap-x-4 sm:gap-x-8">
          <Logo className="h-20 w-auto sm:h-32" />
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold uppercase text-neutral-200 sm:text-4xl">
              Castle
            </h1>
            <p className="hidden text-xl font-medium text-gray-200 sm:block">
              Powered by Chess.com's API
            </p>
          </div>
        </div>
        <Search suggestions={suggestions} />
      </div>
    </main>
  );
}
