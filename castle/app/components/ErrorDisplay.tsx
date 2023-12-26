import Image from "next/image";

type Props = {
  error: unknown;
};

export function ErrorDisplay({ error }: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-hero-2 bg-cover bg-top bg-no-repeat pt-24">
      <Image
        src="/images/question.png"
        alt="question mark"
        width="0"
        height="0"
        unoptimized
        className="h-auto w-20 sm:w-24"
      />
      <h1 className="text-4xl font-semibold drop-shadow-glow">
        {error instanceof Error ? error.message : "Something went wrong!"}
      </h1>
    </div>
  );
}
