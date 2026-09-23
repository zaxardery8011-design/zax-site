import type { LayoutContent } from "../schema";

// 英文內容（A filled from B framework placeholders）。
// 規則：能從已公開的 GitHub 個人頁 README 逐字取的就取（註明來源）；
// 取不到的依中文正本起草英文。
// 原本就是英文的字樣（ZAX、ZAX Facebook、ZAX GitHub、GoatCounter、© 行）照搬。
export const layout: LayoutContent = {
  htmlLang: "en",
  ogLocale: "en_US",
  meta: {
    title: "ZAX | One person keeping a crowd of bluffing AI agents in check",
    description:
      'ZAX builds local task engines and AI workstations where every "done" leaves a receipt, and both result and process stay in files you can inspect.',
  },
  brand: "ZAX",
  homeHref: "/en",
  nav: [
    { href: "/cases", label: "Cases" },
    { href: "/products", label: "Products" },
    { href: "/minibrain", label: "Local task engine" },
    { href: "/en/open-source", label: "Open source" },
    { href: "/checklist", label: "Checklist" },
    { href: "/about", label: "About ZAX" },
    { href: "/contact", label: "Contact" },
  ],
  mobileNavLabel: "Page navigation",
  headerCta: { href: "/contact", label: "Talk to me" },
  langSwitch: {
    label: "中文",
    ariaLabel: "中文版",
    fallbackNote: "中文版",
  },
  footer: {
    brand: "ZAX",
    items: [
      "· aiwff-runtime open source · MIT",
      "· Technical support: GitHub Issues",
      // README「Elsewhere」：zax.com.tw — full AIWFF version, custom builds, and consulting.
      "· zax.com.tw — full AIWFF version, custom builds, and consulting.",
    ],
    copyright: "© 2026 zax.com.tw",
    social: [
      { kind: "facebook", href: "https://www.facebook.com/ardery8011", label: "ZAX Facebook" },
      { kind: "line", href: "https://line.me/R/ti/p/~zaxvip888", label: "ZAX personal LINE" },
      { kind: "mail", href: "mailto:zaxardery8011@gmail.com", label: "Email ZAX" },
      { kind: "github", href: "https://github.com/zaxardery8011-design", label: "ZAX GitHub" },
      { kind: "contact", href: "/contact", label: "ZAX contact page" },
    ],
    visitorLabel: "Visitors",
    visitorPlaceholder: "GoatCounter",
  },
};
