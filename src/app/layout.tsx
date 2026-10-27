import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../../public/sites/customgpt-ai/fonts/inter-variable-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CustomGPT.ai | Custom GPTs from Your Content for Business",
  description:
    "CustomGPT.ai empowers businesses with custom GPTs—AI agents built from your content. Deliver exceptional customer experiences and maximize employee efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
