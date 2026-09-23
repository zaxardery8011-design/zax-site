import type { LayoutContent } from "../schema";

// 英文佔位（B 建框架用，A 來填）。
// 規則：能從已公開的 GitHub 個人頁 README 逐字取的就取（註明來源）；
// 取不到的一律填 "[EN TBD by A] <中文原文>"，B 不自寫行銷英文。
// 原本就是英文的字樣（ZAX、ZAX Facebook、ZAX GitHub、GoatCounter、© 行）照搬。
export const layout: LayoutContent = {
  htmlLang: "en",
  ogLocale: "en_US",
  meta: {
    title: "[EN TBD by A] ZAX | 讓一個人管得住一群會唬爛的 AI",
    description:
      "[EN TBD by A] ZAX 做本機任務引擎與 AI 工作站:每個「做完了」都要留收據,結果與過程都留在你看得到的檔案裡。",
  },
  brand: "ZAX",
  homeHref: "/en",
  nav: [
    { href: "/cases", label: "[EN TBD by A] 實戰案例" },
    { href: "/products", label: "[EN TBD by A] 產品專區" },
    { href: "/minibrain", label: "[EN TBD by A] 本機任務引擎" },
    { href: "/en/open-source", label: "[EN TBD by A] 開源" },
    { href: "/checklist", label: "[EN TBD by A] 檢查表" },
    { href: "/about", label: "[EN TBD by A] 關於 ZAX" },
    { href: "/contact", label: "[EN TBD by A] 聯絡" },
  ],
  mobileNavLabel: "[EN TBD by A] 頁面導覽",
  headerCta: { href: "/contact", label: "[EN TBD by A] 找我聊聊" },
  langSwitch: {
    label: "中文",
    ariaLabel: "中文版",
    fallbackNote: "中文版",
  },
  footer: {
    brand: "ZAX",
    items: [
      "[EN TBD by A] · aiwff-runtime open source · MIT",
      "[EN TBD by A] · 技術支援: GitHub Issues",
      // README「Elsewhere」：zax.com.tw — full AIWFF version, custom builds, and consulting.
      "· zax.com.tw — full AIWFF version, custom builds, and consulting.",
    ],
    copyright: "© 2026 zax.com.tw",
    social: [
      { kind: "facebook", href: "https://www.facebook.com/ardery8011", label: "ZAX Facebook" },
      { kind: "line", href: "https://line.me/R/ti/p/~zaxvip888", label: "[EN TBD by A] ZAX 個人 LINE" },
      { kind: "line", href: "https://line.me/R/ti/p/@395jcpsb", label: "[EN TBD by A] AI 主腦實驗室 LINE" },
      { kind: "mail", href: "mailto:zaxardery8011@gmail.com", label: "[EN TBD by A] 寄信給 ZAX" },
      { kind: "github", href: "https://github.com/zaxardery8011-design", label: "ZAX GitHub" },
      { kind: "contact", href: "/contact", label: "[EN TBD by A] ZAX 聯絡頁" },
    ],
    visitorLabel: "[EN TBD by A] 瀏覽人次",
    visitorPlaceholder: "GoatCounter",
  },
};
