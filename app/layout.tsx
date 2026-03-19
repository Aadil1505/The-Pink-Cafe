import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";

const pinkFont = localFont({
  src: "../public/fonts/pink.woff2",
  variable: "--font-pink",
});

const carrara = localFont({
  src: "../public/fonts/carrara.woff2",
  variable: "--font-carrara",
});

export const metadata: Metadata = {
  title: "The Pink Cafe | Rockville Centre, NY",
  description:
    "A charming pink-themed cafe and bakery in Rockville Centre, NY. Fresh pastries, specialty coffee, matcha, brunch, and afternoon tea. 24 Park Ave.",
  keywords: [
    "Pink Cafe",
    "Rockville Centre",
    "cafe",
    "bakery",
    "brunch",
    "afternoon tea",
    "Long Island",
    "pastries",
    "coffee",
  ],
  openGraph: {
    title: "The Pink Cafe | Rockville Centre, NY",
    description:
      "Fresh pastries, specialty coffee & brunch in the heart of Rockville Centre.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pinkFont.variable} ${carrara.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
