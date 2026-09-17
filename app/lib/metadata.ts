import type { Metadata } from "next";

// 一頁的 <title> 與它分享出去的 og:title 必須是同一句話。
// 分開寫兩份,改一邊就會分岔 —— 而分享卡片那一份,自己在站上永遠看不到,錯了也不會被發現。
// 所以這裡只收一份文案,title / og:title / canonical / og:url 全部從它長出來。
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  /** 站內絕對路徑,例如 "/cases"。canonical 與 og:url 共用。 */
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    // Next 合併 metadata 時,頁面這個 openGraph 物件會整塊蓋掉 layout 的那份
    // (不是逐欄合併),所以 siteName 與 locale 必須在這裡再寫一次,否則只有首頁有。
    openGraph: {
      title,
      description,
      url: path,
      siteName: "ZAX",
      locale: "zh_TW",
      type: "website",
    },
  };
}
