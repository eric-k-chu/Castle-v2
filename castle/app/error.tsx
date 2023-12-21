"use client";

type Props = {
  error: Error;
};

export default function ErrorBoundary({ error }: Props) {
  return (
    <div className="absolute inset-0 w-full bg-red-500 px-4">
      <h1 className="text-lg font-semibold">{error.message}</h1>
    </div>
  );
}
