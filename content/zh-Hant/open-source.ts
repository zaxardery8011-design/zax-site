import type { OpenSourceContent } from "../schema";

// 逐字搬自 app/open-source/page.tsx（eaf3d25）。
// 2026-09-23 A 改：每張卡加 evidence（點得到的證據）；新增 aiwff-mini／task-ledger／hyperv-mcp／dataflywheel；
// earthlife 改過去式（最後 commit 2026-06-17）；移除 agy-quota（無可附證據）；新增 field-ops-demo（隊長 12:48 確認示範頁公司名為虛構）。
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
      evidence: {
        label: "GitHub Actions 自動測試（綠燈）",
        href: "https://github.com/zaxardery8011-design/aiwff-runtime/actions",
      },
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
      evidence: {
        label: "GitHub Actions 自動測試（綠燈）",
        href: "https://github.com/zaxardery8011-design/soplint/actions",
      },
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
      evidence: {
        label: "加 LINE 直接跟跑起來的分身聊",
        href: "https://line.me/R/ti/p/@395jcpsb",
      },
    },
    {
      name: "aiwff-mini",
      url: "https://github.com/zaxardery8011-design/aiwff-mini",
      repo: "zaxardery8011-design/aiwff-mini",
      license: "Apache-2.0",
      kind: "external",
      pitch: "跑在自己電腦上的個人主腦：有靈魂檔、跨對話記憶，靈魂檔被偷改會告警。",
      start: "Read README.md in this folder and install aiwff-mini for me.",
      startNote:
        "把這句貼給你的 AI 工具（Claude Code、Codex、Cursor 等），它會先列出要建立的檔、等你同意才裝。需要 PowerShell 7。",
      evidence: {
        label: "安裝流程與自檢（還沒有公開測試）",
        href: "https://github.com/zaxardery8011-design/aiwff-mini#install",
      },
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
      evidence: {
        label: "測試檔，clone 後 npm test 自己跑",
        href: "https://github.com/zaxardery8011-design/execution-proofs/blob/main/test/core.test.ts",
      },
    },
    {
      name: "task-ledger",
      url: "https://github.com/zaxardery8011-design/task-ledger",
      repo: "zaxardery8011-design/task-ledger",
      license: "Apache-2.0",
      kind: "external",
      pitch:
        "讓 AI 不能亂報進度的單機任務帳本：收據落地、進度只認磁碟事實、程序被砍也接得回來。",
      start: "pip install -e .\ntask-ledger demo-resume",
      startNote: "不用網路、不用 API key。需要 Python 3.10 以上。目前是 alpha。",
      evidence: {
        label: "離線自檢：砍掉再續跑給你看",
        href: "https://github.com/zaxardery8011-design/task-ledger#kill-then-resume-demo",
      },
    },
    {
      name: "hyperv-mcp",
      url: "https://github.com/zaxardery8011-design/hyperv-mcp",
      repo: "zaxardery8011-design/hyperv-mcp",
      license: "MIT",
      kind: "external",
      pitch:
        "用 MCP 讓 AI 管 Hyper-V 虛擬機：開機、快照、還原。目前是規格加 PoC，先用 mock 模式跑。",
      start:
        "git clone https://github.com/zaxardery8011-design/hyperv-mcp\npip install mcp\npython tests\\mock_server_test.py",
      startNote: "mock 模式不用管理員權限、不用裝 Hyper-V。",
      evidence: {
        label: "GitHub Actions 自動測試（綠燈）",
        href: "https://github.com/zaxardery8011-design/hyperv-mcp/actions",
      },
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
      evidence: {
        label: "安裝步驟（還沒有公開截圖）",
        href: "https://github.com/zaxardery8011-design/tidetrace#readme",
      },
    },
    {
      name: "dataflywheel",
      url: "https://github.com/zaxardery8011-design/dataflywheel",
      repo: "zaxardery8011-design/dataflywheel",
      license: "MIT",
      kind: "external",
      pitch: "手機用 Telegram 丟 YouTube 網址，整理好的 Markdown 筆記落在你自己的電腦。",
      start:
        "git clone https://github.com/zaxardery8011-design/dataflywheel\npip install -r requirements.txt",
      startNote: "需要 ffmpeg 與自己的 Gemini key。",
      evidence: {
        label: "測試檔",
        href: "https://github.com/zaxardery8011-design/dataflywheel/blob/main/tests/test_url_parsing.py",
      },
    },
    {
      name: "field-ops-demo",
      url: "https://github.com/zaxardery8011-design/field-ops-demo",
      repo: "zaxardery8011-design/field-ops-demo",
      license: "MIT",
      kind: "external",
      pitch: "工程行內部網站示範：手機打卡、派工、回報，單一 HTML 檔、不用 build。",
      start: "git clone https://github.com/zaxardery8011-design/field-ops-demo",
      startNote: "直接開 index.html，或點證據連結線上看。",
      evidence: {
        label: "直接開來用的示範頁",
        href: "https://zaxardery8011-design.github.io/field-ops-demo/",
      },
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
      evidence: {
        label: "整套動作圖（12 組）",
        href: "https://github.com/zaxardery8011-design/my-desktop-pet/tree/master/assets/apng",
      },
    },
    {
      name: "earthlife",
      url: "https://github.com/tingyi365/earthlife",
      repo: "tingyi365/earthlife",
      license: "MIT",
      kind: "external",
      pitch:
        "由工作節點自主疊代開發的網頁生活模擬器，6 月間每 30 分鐘提交一輪，現已停更、線上仍可玩。",
      start: "git clone https://github.com/tingyi365/earthlife",
      startNote:
        "單一 HTML 檔、無框架無 build,直接開 index.html;或線上玩 earthlife.pages.dev。",
      evidence: { label: "線上直接玩", href: "https://earthlife.pages.dev" },
    },
  ],
  labels: {
    featured: "主打頁",
    updated: "最近更新",
    quickStart: "一行上手",
    internalLink: "看本機任務引擎 →",
    externalLink: "GitHub →",
    evidence: "證據：",
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
