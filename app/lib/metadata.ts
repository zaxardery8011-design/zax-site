import type { Metadata } from "next";
import type { LayoutContent } from "@/content/schema";

export const SITE_URL = "https://www.zax.com.tw";

// hreflang：一頁同時有中英版時，兩語系都掛同一組 languages；x-default 指中文。
export function bilingualAlternates(zhPath: string, enPath: string) {
  return {
    "zh-Hant": zhPath,
    en: enPath,
    "x-default": zhPath,
  };
}

/**
 * 分享卡片的圖。八頁共用同一張(來源 scripts/og-cover.html)。
 *
 * 為什麼要在每一頁的 openGraph 裡明寫一次:Next 合併 metadata 時,
 * 頁面的 openGraph 物件是整塊蓋掉 layout 那份,不是逐欄合併 ——
 * 所以 layout 寫了 images 也救不了任何一個子頁面。同 siteName / locale 的處理。
 */
export const OG_IMAGE = {
  url: "/og-cover.png",
  width: 1200,
  height: 630,
  alt: "ZAX:讓 AI 真的把事做完,而且能證明它做了。",
} as const;

// 一頁的 <title> 與它分享出去的 og:title 必須是同一句話。
// 分開寫兩份,改一邊就會分岔 —— 而分享卡片那一份,自己在站上永遠看不到,錯了也不會被發現。
// 所以這裡只收一份文案,title / og:title / canonical / og:url 全部從它長出來。
export function pageMetadata({
  title,
  description,
  path,
  languages,
  ogLocale = "zh_TW",
}: {
  title: string;
  description: string;
  /** 站內絕對路徑,例如 "/cases"。canonical 與 og:url 共用。 */
  path: string;
  /** 有另一語系版本時傳 bilingualAlternates(...)，輸出 hreflang */
  languages?: Record<string, string>;
  ogLocale?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: languages ? { canonical: path, languages } : { canonical: path },
    // Next 合併 metadata 時,頁面這個 openGraph 物件會整塊蓋掉 layout 的那份
    // (不是逐欄合併),所以 siteName 與 locale 必須在這裡再寫一次,否則只有首頁有。
    openGraph: {
      title,
      description,
      url: path,
      siteName: "ZAX",
      locale: ogLocale,
      type: "website",
      images: [OG_IMAGE],
    },
  };
}

// root layout 的預設 metadata（每一頁沒自己寫 metadata 時的退路）。
// metadataBase 一定要有:各頁的 canonical 與 og:url 用相對路徑寫,靠它組成絕對網址。
export function layoutMetadata(content: LayoutContent): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: content.meta.title,
    description: content.meta.description,
    alternates: { canonical: content.homeHref },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: content.homeHref,
      siteName: "ZAX",
      locale: content.ogLocale,
      type: "website",
      images: [OG_IMAGE],
    },
    // 有圖了就要用大圖卡:summary 只會擠出一張縮圖,1200x630 的字會小到看不見。
    twitter: {
      card: "summary_large_image",
    },
  };
}
