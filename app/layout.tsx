import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GOATCOUNTER_CODE = "zaxtw";
const GOATCOUNTER_ENDPOINT = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;

export const metadata: Metadata = {
  title: "ZAX 台灣隊 | AI 落地工程師 (FDE)・幫你把 AI 用在你的生意上",
  description:
    "我是 AI 落地工程師(Forward Deployed Engineer)——不教你 AI、不賣你工具,從你最煩的一件重複事開始,進到你的現場把 AI 做成它自己會跑。焊接師傅的驗收紀律:做得出來、修得動,才算數。",
  openGraph: {
    title: "ZAX 台灣隊 | AI 落地工程師 (FDE)・幫你把 AI 用在你的生意上",
    description:
      "我是 AI 落地工程師(Forward Deployed Engineer)——不教你 AI、不賣你工具,從你最煩的一件重複事開始,進到你的現場把 AI 做成它自己會跑。焊接師傅的驗收紀律:做得出來、修得動,才算數。",
  },
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M13.5 21v-7.4h2.5l.4-2.9h-2.9V8.8c0-.8.2-1.4 1.4-1.4h1.6V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H7.8v2.9h2.6V21h3.1Z"
      />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M12 4C7.6 4 4 6.8 4 10.3c0 3.1 2.7 5.7 6.4 6.2.3.1.5.3.4.6l-.2 1.5c0 .4.4.7.7.5 4.2-2.1 6.7-4.7 7.7-6.5.6-.8 1-1.5 1-2.3C20 6.8 16.4 4 12 4Zm-3.4 8.1H6.9V8.6h1v2.6h.7v.9Zm1.8 0h-1V8.6h1v3.5Zm3.5 0h-.9l-1.3-1.9v1.9h-1V8.6h.9l1.3 1.9V8.6h1v3.5Zm3.2-2.6h-1.5v.5H17v.9h-1.4v.4h1.5v.8h-2.5V8.6h2.5v.9Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M4.5 6.5h15v11h-15v-11Zm.7 1.1 6.8 5 6.8-5"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.2 1.9.8 2.3.6.1-.5.3-.8.5-1-1.8-.2-3.6-.9-3.6-3.8 0-.8.3-1.5.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3-1.8 3.6-3.6 3.8.3.3.6.8.6 1.6v2c0 .2.1.5.6.4A8.5 8.5 0 0 0 12 3.5Z"
      />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M5 6.5h14v10H8l-3 2.5V6.5Zm4 4h6m-6 3h4"
      />
    </svg>
  );
}

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
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Script
          id="goatcounter-count-script"
          data-goatcounter={GOATCOUNTER_ENDPOINT}
          src="https://gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
        <Script id="goatcounter-visitor-count" strategy="afterInteractive">
          {`
            (function () {
              var attempts = 0;
              var timer = setInterval(function () {
                attempts += 1;
                if (window.goatcounter && window.goatcounter.visit_count) {
                  clearInterval(timer);
                  window.goatcounter.visit_count({
                    append: '#goatcounter-visitor-count-target',
                    type: 'html'
                  });
                }
                if (attempts > 80) {
                  clearInterval(timer);
                }
              }, 100);
            })();
          `}
        </Script>

        {/* ── Top Nav ── */}
        <nav className="sticky top-0 z-20 w-full px-5 sm:px-6 py-4 flex items-center gap-4 sm:gap-6 glass border-b border-[color:var(--border)]">
          <Link href="/" className="font-bold tracking-widest text-lg neon-text">
            ZAX
          </Link>
          <div className="hidden md:flex gap-5 text-sm text-[color:var(--fg-1)] ml-4">
            <Link href="/cases" className="hover:text-[color:var(--accent-cyan)]">實戰案例</Link>
            <Link href="/products" className="hover:text-[color:var(--accent-cyan)]">產品專區</Link>
            <Link href="/open-source" className="hover:text-[color:var(--accent-cyan)]">開源</Link>
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
        <footer className="px-5 sm:px-6 py-10 mt-auto border-t border-[color:var(--border)] text-xs text-[color:var(--fg-2)]">
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="neon-text font-bold tracking-widest">ZAX</span>
              <span>· AI 工作站 · 台灣隊</span>
              <span className="grow" />
              <span>© 2026 zax.com.tw</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/ardery8011"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ZAX Facebook"
                title="ZAX Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md btn-ghost transition"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://line.me/R/ti/p/~zaxvip888"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ZAX 個人 LINE"
                title="ZAX 個人 LINE"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md btn-ghost transition"
              >
                <LineIcon />
              </a>
              <a
                href="https://line.me/R/ti/p/@395jcpsb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AI 主腦實驗室 LINE"
                title="AI 主腦實驗室 LINE"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md btn-ghost transition"
              >
                <LineIcon />
              </a>
              <a
                href="mailto:zaxardery8011@gmail.com"
                aria-label="寄信給 ZAX"
                title="寄信給 ZAX"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md btn-ghost transition"
              >
                <MailIcon />
              </a>
              <a
                href="https://github.com/zaxardery8011-design"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ZAX GitHub"
                title="ZAX GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md btn-ghost transition"
              >
                <GithubIcon />
              </a>
              <Link
                href="/contact"
                aria-label="ZAX 聯絡頁"
                title="ZAX 聯絡頁"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md btn-ghost transition"
              >
                <ContactIcon />
              </Link>
              <span className="grow" />
              <div className="flex min-h-9 items-center gap-2 text-[color:var(--fg-1)]">
                <span>瀏覽人次</span>
                <span
                  id="goatcounter-visitor-count-target"
                  className="inline-flex items-center text-[color:var(--accent-cyan)]"
                >
                  GoatCounter
                </span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
