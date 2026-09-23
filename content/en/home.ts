import type { HomeContent } from "../schema";

// 英文佔位（B 建框架用，A 來填）。
// 規則：能從已公開的 GitHub 個人頁 README 逐字取的就取（註明來源）；
// 取不到的一律填 "[EN TBD by A] <中文原文>"，B 不自寫行銷英文。
// 註「README 候選」＝README 有意思相近但不等價的句子，留給 A 決定要不要用。
const LINE_URL = "https://line.me/R/ti/p/@395jcpsb";

export const home: HomeContent = {
  s1Hero: {
    eyebrow: "[EN TBD by A] AI 工作節點 · 開源 · 可查證",
    // README H1（A 09:46 裁示英文首屏可用個人頁 tagline）
    titleLead: "Anyone can make AI agents run.",
    titleEmphasis:
      "I build the part that lets one person keep a crowd of bluffing agents in check.",
    // README 候選：…you get a local AI work node that finishes work *and* proves it.
    subtitle:
      "[EN TBD by A] 每個「做完了」都要留收據——結果、過程、它哪裡沒做到, 都是你電腦上查得到的檔案。想自己裝一台?想先體驗? 兩條路都給你。",
    primaryCta: { label: "[EN TBD by A] 幫自己裝一台本機任務引擎 →", href: "/minibrain" },
    secondaryCta: { label: "[EN TBD by A] 不想裝？LINE 先體驗", href: LINE_URL },
  },
  routes: {
    badge: "MINI BRAIN",
    title: "[EN TBD by A] 本機任務引擎：每個「做完了」都要留收據的 agent runtime",
    // README 候選：A local minimal brain. Send a task to Telegram, Claude runs it on your machine…
    intro:
      "[EN TBD by A] 丟一件事給它,背景跑完,結果推回來,瀏覽器看進度。所有狀態都留在你電腦裡, 不上別人的伺服器。開源、MIT、免費跑通。",
    cards: [
      {
        eyebrow: "[EN TBD by A] 路線 A · 我想自己裝",
        title: "[EN TBD by A] DIY：clone 下來自己跑",
        body: "[EN TBD by A] 會開終端機、會複製貼上就夠。預設 mock 模式免費跑通,一段 prompt 交給你的 AI coding agent 自動裝好。",
        cta: "[EN TBD by A] 看一鍵安裝 →",
        href: "/minibrain",
      },
      {
        eyebrow: "[EN TBD by A] 路線 B · 我想先玩 / 要人幫我做",
        title: "[EN TBD by A] 先體驗：LINE 主腦實驗室",
        body: "[EN TBD by A] 懶得碰命令列、想先確認合不合用——直接在 LINE 跟一個跑起來的主腦聊,體驗過再決定。或找我們幫你導入完整版。",
        cta: "[EN TBD by A] 加 LINE 先體驗 →",
        href: LINE_URL,
      },
    ],
  },
  s4OpenSource: {
    badge: "FEATURED CASES",
    title: "[EN TBD by A] 精選案例：先有引擎,再把護欄補齊",
    intro:
      "[EN TBD by A] 這些不是概念稿——是 AIWFF 工作節點實際迭代、放上 GitHub 開源或整理成入口的專案。 每張卡的星數與「最近更新」都是每小時回源 GitHub 抓的,不是寫死的定版數字——",
    introEmphasis: "[EN TBD by A] 不是我說它還活著,是 GitHub 說的。",
    cards: [
      {
        name: "aiwff-runtime",
        repo: "zaxardery8011-design/aiwff-runtime",
        license: "MIT",
        href: "/minibrain",
        // README 候選：The local agent runtime — the engine that runs disciplined agents
        pitch:
          "[EN TBD by A] 每個「做完了」都要留收據的 agent runtime:裝在自己電腦上,先用 mock 模式免費跑通,再決定要不要接真實 worker。",
        method:
          "[EN TBD by A] 用本機檔案匯流排保存任務、進度與產出,讓使用者能在瀏覽器看狀態,也能回頭查檔案證據。",
        result: "[EN TBD by A] 已整理成本機任務引擎頁、安裝手冊與公開 repo,可從零開始導入。",
      },
      {
        name: "soplint",
        repo: "zaxardery8011-design/soplint",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/soplint",
        // README 核心工具鏈表
        pitch:
          "Static SOP-compliance audit for AI work nodes — catches instruction drift over long runs",
        method: "[EN TBD by A] 把 SOP 落成可掃描的靜態規則,對節點產出逐條審計,抓出偏離。",
        result: "[EN TBD by A] 已開源上架、目前 star 前列。",
      },
      {
        name: "tidetrace",
        repo: "zaxardery8011-design/tidetrace",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/tidetrace",
        // README 核心工具鏈表
        pitch:
          "Threads keyword patrol Chrome extension — local highlight + reply tracking + BYOK LLM",
        method:
          "[EN TBD by A] 做成 Chrome 擴充,在地端跑關鍵字高亮與回覆追蹤,LLM 用 BYOK 自帶金鑰。",
        result: "[EN TBD by A] 已開源上架,功能鏈完整可裝來用。",
      },
      {
        name: "execution-proofs",
        repo: "zaxardery8011-design/execution-proofs",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/execution-proofs",
        // README 核心工具鏈表
        pitch:
          'MCP telemetry gateway — forces agents to prove "done" with real files & timestamps',
        method:
          "[EN TBD by A] 做成 MCP 本地遙測閘道,攔下「完成」宣稱、要求附上真實檔案與時間戳。",
        result: "[EN TBD by A] 已開源上架,把「可查證」變成可裝的護欄。",
      },
    ],
    labels: {
      updated: "[EN TBD by A] 最近更新",
      method: "[EN TBD by A] 怎麼做：",
      result: "[EN TBD by A] 成果：",
      repoLink: "[EN TBD by A] 看 repo →",
      entryLink: "[EN TBD by A] 看入口 →",
    },
    allCta: { label: "[EN TBD by A] 看全部開源專案 →", href: "/en/open-source" },
  },
  // 電子報文案目前只有中文，英文版不渲染（要開請 A 先給英文文案）
  showNewsletter: false,
  s5Try: {
    badge: "LINE MAIN BRAIN LAB",
    title: "[EN TBD by A] 不想自己裝？在 LINE 先跟主腦聊聊",
    // README 候選：don't want to install anything? Chat with a running brain first, then decide.
    body: "[EN TBD by A] 加 LINE 主腦實驗室,直接體驗一個跑起來的主腦怎麼回應你—— 體驗過再決定要自己裝,還是讓我們幫你導入。",
    // README「Elsewhere」
    cta: { label: "Add on LINE: @395jcpsb", href: LINE_URL },
  },
};
