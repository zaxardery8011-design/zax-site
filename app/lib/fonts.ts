import { Geist, Geist_Mono } from "next/font/google";

// 兩個 root layout（app/(zh)、app/en）共用同一組字型。
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 等寬字不 preload：預設每頁都在 <head> 以 High 優先權先抓這支 woff2，
// 但只有 /open-source 和寬版 /contact 的首屏有等寬字，其他頁不是在首屏下方就是根本沒用到。
// 不 preload 時，瀏覽器排版遇到等寬字才去抓；swap 加上 Next 自帶的 fallback 字距調整，換字時版面幾乎不動。
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});
