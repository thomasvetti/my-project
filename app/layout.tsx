import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import Header from "./components/header";

import Navbar  from "./components/navbar";


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TarreDev Landing Page",
  description: "Landing page made by TarreDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header/>
        {children}
      </body>
    </html>
  );
}