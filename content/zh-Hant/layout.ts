import type { LayoutContent } from "../schema";

// 逐字搬自 app/layout.tsx（eaf3d25），文案未改。langSwitch 為本次新增字樣。
export const layout: LayoutContent = {
  htmlLang: "zh-Hant",
  ogLocale: "zh_TW",
  meta: {
    title: "ZAX | 讓一個人管得住一群會唬爛的 AI",
    description:
      "ZAX 做本機任務引擎與 AI 工作站:每個「做完了」都要留收據,結果與過程都留在你看得到的檔案裡。",
  },
  brand: "ZAX",
  homeHref: "/",
  nav: [
    { href: "/cases", label: "實戰案例" },
    { href: "/products", label: "產品專區" },
    { href: "/minibrain", label: "本機任務引擎" },
    { href: "/open-source", label: "開源" },
    { href: "/checklist", label: "檢查表" },
    { href: "/about", label: "關於 ZAX" },
    { href: "/contact", label: "聯絡" },
  ],
  mobileNavLabel: "頁面導覽",
  headerCta: { href: "/contact", label: "找我聊聊" },
  langSwitch: {
    label: "EN",
    ariaLabel: "English",
    fallbackNote: "此頁尚無英文版，將前往英文首頁",
  },
  footer: {
    brand: "ZAX",
    items: [
      "· aiwff-runtime open source · MIT",
      "· 技術支援: GitHub Issues",
      "· 完整版 / 客製: zax.com.tw",
    ],
    copyright: "© 2026 zax.com.tw",
    social: [
      { kind: "facebook", href: "https://www.facebook.com/ardery8011", label: "ZAX Facebook" },
      { kind: "line", href: "https://line.me/R/ti/p/~zaxvip888", label: "ZAX 個人 LINE" },
      { kind: "mail", href: "mailto:zaxardery8011@gmail.com", label: "寄信給 ZAX" },
      { kind: "github", href: "https://github.com/zaxardery8011-design", label: "ZAX GitHub" },
      { kind: "contact", href: "/contact", label: "ZAX 聯絡頁" },
    ],
    visitorLabel: "瀏覽人次",
    visitorPlaceholder: "GoatCounter",
  },
};
