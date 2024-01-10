import { MissingFileIcon } from ".";

export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-y-4 px-4 py-24">
      <MissingFileIcon className="h-auto w-12 fill-zinc-500 sm:w-20" />
      <h1 className="text-center text-lg font-bold text-zinc-500 sm:text-2xl">
        {message}
      </h1>
    </div>
  );
}
