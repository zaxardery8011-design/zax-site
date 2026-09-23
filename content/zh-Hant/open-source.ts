import type { OpenSourceContent } from "../schema";

// 逐字搬自 app/open-source/page.tsx（eaf3d25），文案未改。
export const openSource: OpenSourceContent = {
  meta: {
    title: "開源專案 | ZAX",
    description:
      "我們把踩過的坑碼化成工具,開源給站在後面的人。每張卡的星數與「最近更新」都是每小時回源 GitHub 抓的——不是我說它還活著,是 GitHub 說的。",
  },
  hero: {
    badge: "OPEN SOURCE",
    titleEmphasis: "站在巨人肩上,",
    titleRest: "長成讓人站的巨人。",
    body: "我們把踩過的坑碼化成工具,開源給站在後面的人。每張卡的星數與「最近更新」 都是每小時回源 GitHub 抓的,不是寫死的定版數字——",
    bodyEmphasis: "不是我說它還活著,是 GitHub 說的。",
  },
  reposSection: {
    badge: "PUBLIC REPOS",
    title: "做給自己用,也讓開發者直接看見做法",
  },
  repos: [
    {
      name: "本機任務引擎 (aiwff-runtime)",
      url: "/minibrain",
      repo: "zaxardery8011-design/aiwff-runtime",
      license: "MIT",
      kind: "internal",
      pitch:
        "裝在自己電腦上的開源 AI 任務主腦。預設 mock 模式免費跑通,要接真 Claude worker 時才需要付費 Claude 訂閱。",
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
      pitch:
        "對 AI 工作節點的 SOP 執行做靜態規則審計,治長時間運行的「指令漂移」與工作紀律失修。",
      start: "/plugin marketplace add zaxardery8011-design/soplint",
      startNote:
        "在 Claude Code 裡輸入這行即可;不用 plugin 就 clone repo 改 soplint.config.json。",
    },
    {
      name: "line-persona",
      url: "https://github.com/zaxardery8011-design/line-persona",
      repo: "zaxardery8011-design/line-persona",
      license: "MIT",
      kind: "external",
      pitch:
        "LINE 原生 AI 分身框架。填 env、人格與知識檔就能上線,可用自己的 API key 在雲端與本地模型之間切換。",
      start:
        "git clone https://github.com/zaxardery8011-design/line-persona\nnpm install\nnpm start",
      startNote: "",
    },
    {
      name: "Mr.Wu 桌寵 (my-desktop-pet)",
      url: "https://github.com/zaxardery8011-design/my-desktop-pet",
      repo: "zaxardery8011-design/my-desktop-pet",
      license: "MIT",
      kind: "external",
      pitch:
        "真寵物照片→AI影片→去背→Electron 透明桌寵;換照片就生整套動作庫。示範滑鼠穿透與局部像素碰撞。",
      start:
        "git clone https://github.com/zaxardery8011-design/my-desktop-pet\nnpm install\nnpm start",
      startNote: "",
    },
    {
      name: "tidetrace / 潮痕",
      url: "https://github.com/zaxardery8011-design/tidetrace",
      repo: "zaxardery8011-design/tidetrace",
      license: "MIT",
      kind: "external",
      pitch:
        "Threads 社群輿情監控 Chrome 擴充:本地關鍵字高亮 + 回覆狀態追蹤 + BYOK 多 LLM 自訂回覆生成。",
      start: "git clone https://github.com/zaxardery8011-design/tidetrace",
      startNote:
        "無 build 步驟;chrome://extensions → 開發人員模式 → 載入未封裝,選這個資料夾。",
    },
    {
      name: "execution-proofs",
      url: "https://github.com/zaxardery8011-design/execution-proofs",
      repo: "zaxardery8011-design/execution-proofs",
      license: "MIT",
      kind: "external",
      pitch:
        "別讓 AI 說謊!基於 MCP 的本地遙測閘道,讓自動化 Client 回報「完成」時必須用真實檔案與時間戳記證明。",
      start:
        "git clone https://github.com/zaxardery8011-design/execution-proofs\nnpm install\nnpm run build",
      startNote: "build 完把 server 加進你的 MCP client 設定檔。",
    },
    {
      name: "earthlife",
      url: "https://github.com/tingyi365/earthlife",
      repo: "tingyi365/earthlife",
      license: "MIT",
      kind: "external",
      pitch:
        "每 30 分鐘自主進化的網頁生活模擬器,完全由工作節點疊代開發,展示自動化提交與動態事件的閉環。",
      start: "git clone https://github.com/tingyi365/earthlife",
      startNote:
        "單一 HTML 檔、無框架無 build,直接開 index.html;或線上玩 earthlife.pages.dev。",
    },
    {
      name: "agy-quota",
      url: "https://github.com/tingyi365/agy-quota",
      repo: "tingyi365/agy-quota",
      license: "MIT",
      kind: "external",
      pitch:
        "headless 額度查詢工具:無 IDE/TTY 的自動化排程與 CI 環境下,即時查多個 LLM 提供商的額度水位。",
      start: "git clone https://github.com/tingyi365/agy-quota\nnode bin/agy-quota.js",
      startNote: "",
    },
  ],
  labels: {
    featured: "主打頁",
    updated: "最近更新",
    quickStart: "一行上手",
    internalLink: "看本機任務引擎 →",
    externalLink: "GitHub →",
  },
  allRepos: {
    href: "https://github.com/zaxardery8011-design",
    badge: "ZAX GITHUB",
    title: "看全部開源 →",
    body: "其他公開實驗、工具與自動化專案會持續放在 GitHub,等有穩定截圖或文件再補進官網。",
  },
  casesCard: {
    href: "/cases",
    badge: "REAL WORK",
    title: "這些工具跑在誰的案子上 →",
    body: "上面每個 repo 都是先有一件真的要交的事,才被寫出來的。fortune LINE bot 五月底上線,LINC 已經在 production 管幾十台機器,ZAX 會員網是老客戶圈的供貨系統。案例頁寫的是當時卡在哪、最後怎麼繞過去。",
  },
  contactLine: {
    lead: "手上有一件想自動化的事,想問能不能做,",
    link: { label: "直接說給我們聽 →", href: "/contact" },
  },
};
