import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/_components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Castle",
  description: "A player search engine powered by Chess.com's API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={inter.className}
        style={{
          backgroundPosition: "top",
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.5) 70%), url('/images/hero.png')",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
