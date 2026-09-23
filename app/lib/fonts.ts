import { Geist, Geist_Mono } from "next/font/google";

// 兩個 root layout（app/(zh)、app/en）共用同一組字型。
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
