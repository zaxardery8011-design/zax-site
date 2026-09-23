import type { OpenSourceContent } from "../schema";

// 英文佔位（B 建框架用，A 來填）。規則同 content/en/home.ts：
// README 逐字可取的就取（註明來源），取不到的填 "[EN TBD by A] <中文原文>"。
// 指令（start）是程式碼不是文案，照搬。
export const openSource: OpenSourceContent = {
  meta: {
    title: "[EN TBD by A] 開源專案 | ZAX",
    description:
      "[EN TBD by A] 我們把踩過的坑碼化成工具,開源給站在後面的人。每張卡的星數與「最近更新」都是每小時回源 GitHub 抓的——不是我說它還活著,是 GitHub 說的。",
  },
  hero: {
    badge: "OPEN SOURCE",
    titleEmphasis: "[EN TBD by A] 站在巨人肩上,",
    titleRest: "[EN TBD by A] 長成讓人站的巨人。",
    body: "[EN TBD by A] 我們把踩過的坑碼化成工具,開源給站在後面的人。每張卡的星數與「最近更新」 都是每小時回源 GitHub 抓的,不是寫死的定版數字——",
    bodyEmphasis: "[EN TBD by A] 不是我說它還活著,是 GitHub 說的。",
  },
  reposSection: {
    badge: "PUBLIC REPOS",
    title: "[EN TBD by A] 做給自己用,也讓開發者直接看見做法",
  },
  repos: [
    {
      name: "aiwff-runtime",
      url: "/minibrain",
      repo: "zaxardery8011-design/aiwff-runtime",
      license: "MIT",
      kind: "internal",
      // README 候選：A local minimal brain. / Free to try — MOCK_WORKER=1 runs the full loop with no API key.
      pitch:
        "[EN TBD by A] 裝在自己電腦上的開源 AI 任務主腦。預設 mock 模式免費跑通,要接真 Claude worker 時才需要付費 Claude 訂閱。",
      start:
        "git clone https://github.com/zaxardery8011-design/aiwff-runtime\ncp .env.example .env\nnpm start",
      startNote: "",
    },
    {
      name: "soplint",
      url: "https://github.com/zaxardery8011-design/soplint",
      repo: "zaxardery8011-design/soplint",
      license: "MIT",
      kind: "external",
      // README 核心工具鏈表
      pitch:
        "Static SOP-compliance audit for AI work nodes — catches instruction drift over long runs",
      start: "/plugin marketplace add zaxardery8011-design/soplint",
      startNote:
        "[EN TBD by A] 在 Claude Code 裡輸入這行即可;不用 plugin 就 clone repo 改 soplint.config.json。",
    },
    {
      name: "line-persona",
      url: "https://github.com/zaxardery8011-design/line-persona",
      repo: "zaxardery8011-design/line-persona",
      license: "MIT",
      kind: "external",
      // README 核心工具鏈表（取第一句）
      pitch: "BYO-AI LINE clone framework — how the stack reaches real users.",
      start:
        "git clone https://github.com/zaxardery8011-design/line-persona\nnpm install\nnpm start",
      startNote: "",
    },
    {
      name: "my-desktop-pet",
      url: "https://github.com/zaxardery8011-design/my-desktop-pet",
      repo: "zaxardery8011-design/my-desktop-pet",
      license: "MIT",
      kind: "external",
      // README「All repos」
      pitch: "turn your real pet photo into an animated transparent desktop companion.",
      start:
        "git clone https://github.com/zaxardery8011-design/my-desktop-pet\nnpm install\nnpm start",
      startNote: "",
    },
    {
      name: "tidetrace",
      url: "https://github.com/zaxardery8011-design/tidetrace",
      repo: "zaxardery8011-design/tidetrace",
      license: "MIT",
      kind: "external",
      // README 核心工具鏈表
      pitch:
        "Threads keyword patrol Chrome extension — local highlight + reply tracking + BYOK LLM",
      start: "git clone https://github.com/zaxardery8011-design/tidetrace",
      startNote:
        "[EN TBD by A] 無 build 步驟;chrome://extensions → 開發人員模式 → 載入未封裝,選這個資料夾。",
    },
    {
      name: "execution-proofs",
      url: "https://github.com/zaxardery8011-design/execution-proofs",
      repo: "zaxardery8011-design/execution-proofs",
      license: "MIT",
      kind: "external",
      // README 核心工具鏈表
      pitch:
        'MCP telemetry gateway — forces agents to prove "done" with real files & timestamps',
      start:
        "git clone https://github.com/zaxardery8011-design/execution-proofs\nnpm install\nnpm run build",
      startNote: "[EN TBD by A] build 完把 server 加進你的 MCP client 設定檔。",
    },
    {
      name: "earthlife",
      url: "https://github.com/tingyi365/earthlife",
      repo: "tingyi365/earthlife",
      license: "MIT",
      kind: "external",
      pitch:
        "[EN TBD by A] 每 30 分鐘自主進化的網頁生活模擬器,完全由工作節點疊代開發,展示自動化提交與動態事件的閉環。",
      start: "git clone https://github.com/tingyi365/earthlife",
      startNote:
        "[EN TBD by A] 單一 HTML 檔、無框架無 build,直接開 index.html;或線上玩 earthlife.pages.dev。",
    },
    {
      name: "agy-quota",
      url: "https://github.com/tingyi365/agy-quota",
      repo: "tingyi365/agy-quota",
      license: "MIT",
      kind: "external",
      pitch:
        "[EN TBD by A] headless 額度查詢工具:無 IDE/TTY 的自動化排程與 CI 環境下,即時查多個 LLM 提供商的額度水位。",
      start: "git clone https://github.com/tingyi365/agy-quota\nnode bin/agy-quota.js",
      startNote: "",
    },
  ],
  labels: {
    featured: "[EN TBD by A] 主打頁",
    updated: "[EN TBD by A] 最近更新",
    quickStart: "[EN TBD by A] 一行上手",
    internalLink: "[EN TBD by A] 看本機任務引擎 →",
    externalLink: "GitHub →",
  },
  allRepos: {
    href: "https://github.com/zaxardery8011-design",
    badge: "ZAX GITHUB",
    title: "[EN TBD by A] 看全部開源 →",
    body: "[EN TBD by A] 其他公開實驗、工具與自動化專案會持續放在 GitHub,等有穩定截圖或文件再補進官網。",
  },
};
