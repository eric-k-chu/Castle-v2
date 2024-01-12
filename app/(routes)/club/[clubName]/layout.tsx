import { ChessImgBackground } from "@/_components";

export default function ClubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChessImgBackground>
      <div className="mx-auto w-full max-w-lg px-4 py-20 md:max-w-2xl lg:max-w-4xl">
        {children}
      </div>
    </ChessImgBackground>
  );
}
