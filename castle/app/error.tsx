"use client";

import { ErrorMsg } from "./components";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-y-8 bg-hero bg-cover bg-top bg-no-repeat">
      <ErrorMsg error={error.message} />
      <button
        className="rounded-lg bg-blue-600 px-4 py-2 text-lg font-semibold"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
