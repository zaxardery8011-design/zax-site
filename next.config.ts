import type { NextConfig } from "next";

// 資安盾牌（2026-09-24）：全站安全標頭。
// 借鏡：Next.js 官方 headers / CSP 指南、OWASP Secure Headers Project、vercel/next.js examples/with-strict-csp。
// 全站是靜態預渲染頁，nonce 需要動態渲染，所以不走 proxy + nonce，直接在這裡掛固定標頭。

// CSP 先用 Report-Only：只回報、不擋。允許清單依站上實際外部資源盤出來：
// - script-src gc.zgo.at：GoatCounter 的 count.js（SiteShell）
// - script-src 'unsafe-inline'：靜態頁的 Next/React 內嵌啟動腳本（__next_f）與 GoatCounter 訪客數 inline 腳本，無 nonce 可用
// - connect-src zaxtw.goatcounter.com：count.js 的 /count beacon 與首頁訪客數 /counter/*.json
// - img-src zaxtw.goatcounter.com：count.js 在不支援 sendBeacon 時退回用圖片打點
// - style-src 'unsafe-inline'：React style 屬性與 Next 注入的 inline style
// - font-src 'self'：next/font/google 在 build 時自託管字型，不向 Google 取
// - form-action app.kit.com：電子報表單 POST 到 Kit（NewsletterSignup）
// 轉 enforce 前再加 upgrade-insecure-requests（Report-Only 會忽略它，只會吵 console）。
const cspReportOnly = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://gc.zgo.at",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://zaxtw.goatcounter.com",
  "font-src 'self'",
  "connect-src 'self' https://zaxtw.goatcounter.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://app.kit.com",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  // 不加 preload：preload 進瀏覽器內建清單後很難撤回，要隊長另外決定。
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  // 只關站上用不到的功能。clipboard-write 不關：/minibrain 的「複製安裝提示」要用。
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), hid=(), bluetooth=(), midi=(), magnetometer=(), gyroscope=(), accelerometer=(), display-capture=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Content-Security-Policy-Report-Only", value: cspReportOnly },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
