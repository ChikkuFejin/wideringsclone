import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./grain.css";
import ReactLenis from "lenis/react";
import { GlobelContextProvider } from "@/Context/GlobelContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Scilens     ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <main>
        <GlobelContextProvider>
          {children}
          </GlobelContextProvider>
      </main>

      </body>
      </ReactLenis>
    </html>
  );
}
