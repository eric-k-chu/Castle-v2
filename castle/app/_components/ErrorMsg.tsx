type Props = {
  error: string;
};

export function ErrorMsg({ error }: Props) {
  return (
    <>
      <img
        src="/images/question.png"
        alt="question mark"
        className="h-auto w-20 sm:w-24"
      />
      <h1 className="text-4xl font-semibold drop-shadow-glow">{error}</h1>
    </>
  );
}
