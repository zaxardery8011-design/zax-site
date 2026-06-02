import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZAX 台灣隊 | 幫你把 AI 用在你的生意上",
  description:
    "不教你 AI、不賣你工具——從你最煩的一件重複事開始，幫你把 AI 做成它自己會跑。焊接師傅的驗收紀律：做得出來、修得動，才算數。",
  openGraph: {
    title: "ZAX 台灣隊 | 幫你把 AI 用在你的生意上",
    description:
      "不教你 AI、不賣你工具——從你最煩的一件重複事開始，幫你把 AI 做成它自己會跑。焊接師傅的驗收紀律：做得出來、修得動，才算數。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ── Top Nav ── */}
        <nav className="sticky top-0 z-20 w-full px-6 py-4 flex items-center gap-6 glass border-b border-[color:var(--border)]">
          <Link href="/" className="font-bold tracking-widest text-lg neon-text">
            ZAX
          </Link>
          <div className="hidden md:flex gap-5 text-sm text-[color:var(--fg-1)] ml-4">
            <Link href="/cases" className="hover:text-[color:var(--accent-cyan)]">實戰案例</Link>
            <Link href="/about" className="hover:text-[color:var(--accent-cyan)]">關於 ZAX</Link>
            <Link href="/contact" className="hover:text-[color:var(--accent-cyan)]">聯絡</Link>
          </div>
          <div className="grow" />
          <Link
            href="/contact"
            className="text-xs px-3 py-1.5 rounded-md btn-ghost transition"
          >
            找我聊聊
          </Link>
        </nav>

        {children}

        {/* ── Footer ── */}
        <footer className="px-6 py-10 mt-auto border-t border-[color:var(--border)] text-xs text-[color:var(--fg-2)]">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-3">
            <span className="neon-text font-bold tracking-widest">ZAX</span>
            <span>· AI 工作站 · 台灣隊</span>
            <span className="grow" />
            <span>© 2026 zax.com.tw</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
