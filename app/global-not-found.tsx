import type { Metadata } from "next";
import { NewsletterSignup } from "@/app/components";
import { SiteShell } from "@/app/components/SiteShell";
import { geistMono, geistSans } from "@/app/lib/fonts";
import { layout } from "@/content/zh-Hant/layout";
import "./globals.css";

// 對不上任何路由的網址（例如打錯字的 /abc）。多 root layout 下沒有頂層 layout 可套，
// 不接這支就是 Next 內建的白底 404：沒有站上樣式、沒有導覽，訪客回不到首頁。
// 這支跳過一般渲染，所以樣式、字型、外殼都要自己帶；外殼用中文 layout（站的預設語系）。
// 字樣與 app/en/not-found.tsx 相同（Next 內建那句），不用新增 content 的字。
export const metadata: Metadata = {
  title: "404: This page could not be found.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang={layout.htmlLang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">
        <SiteShell
          content={layout}
          locale="zh-Hant"
          newsletter={<NewsletterSignup compact source="site-footer" />}
        >
          <main
            lang="en"
            className="flex flex-1 flex-col items-center justify-center gap-2 px-5 py-24 text-center"
          >
            <h1 className="text-2xl font-bold">404</h1>
            <p className="text-sm text-[color:var(--fg-1)]">This page could not be found.</p>
          </main>
        </SiteShell>
      </body>
    </html>
  );
}
