import Image from "next/image";

type Props = {
  error: string;
};

export function ErrorMsg({ error }: Props) {
  return (
    <>
      <Image
        src="/images/question.png"
        alt="question mark"
        width="0"
        height="0"
        unoptimized
        className="h-auto w-20 sm:w-24"
      />
      <h1 className="text-4xl font-semibold drop-shadow-glow">{error}</h1>
    </>
  );
}
