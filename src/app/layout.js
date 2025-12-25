"use client";
import { Geist, Geist_Mono, Outfit, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import "flowbite";
import Navber from "@/Components/Navber";
import { SessionProvider } from "next-auth/react";

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const viewport = {
  themeColor: "#4285f4",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${hindSiliguri.className} antialiased bg-gradient-to-b from-[#d2dbdd] to-[#eff0db] min-h-screen w-full`}>
        <SessionProvider>
          <Navber />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
