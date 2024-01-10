import { ChessImgBackground } from "@/_components";

export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChessImgBackground>{children}</ChessImgBackground>;
}
