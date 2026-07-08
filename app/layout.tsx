import type { Metadata } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

const fredoka = Fredoka({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const nunitoSans = Nunito_Sans({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Adams Farm Labradoodles",
    template: "%s | Adams Farm Labradoodles",
  },
  description:
    "ALAA Gold Paw accredited Australian Labradoodle breeder in Greensboro, NC. Raised in loving homes with 30–40 hours of socialization and ENS programming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunitoSans.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
