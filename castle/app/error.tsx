"use client";

type Props = {
  error: Error;
};

export default function ErrorBoundary({ error }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-hero bg-cover bg-top bg-no-repeat">
      <h1 className="text-3xl font-semibold">{error.message}</h1>
    </div>
  );
}
