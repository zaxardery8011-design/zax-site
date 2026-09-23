import type { HomeContent } from "../schema";

// 逐字搬自 app/page.tsx（eaf3d25），文案未改。
// 原本 JSX 裡跨行的段落，瀏覽器看到的是「行與行之間補一個半形空白」，這裡照渲染結果保留那個空白。
const LINE_URL = "https://line.me/R/ti/p/@395jcpsb";

export const home: HomeContent = {
  s1Hero: {
    eyebrow: "AI 工作節點 · 開源 · 可查證",
    titleLead: "別人讓 AI 跑得動,",
    titleEmphasis: "我們讓一個人管得住一群會唬爛的 AI。",
    subtitle:
      "每個「做完了」都要留收據——結果、過程、它哪裡沒做到, 都是你電腦上查得到的檔案。想自己裝一台?想先體驗? 兩條路都給你。",
    primaryCta: { label: "幫自己裝一台本機任務引擎 →", href: "/minibrain" },
    secondaryCta: { label: "不想裝？LINE 先體驗", href: LINE_URL },
  },
  routes: {
    badge: "MINI BRAIN",
    title: "本機任務引擎：每個「做完了」都要留收據的 agent runtime",
    intro:
      "丟一件事給它,背景跑完,結果推回來,瀏覽器看進度。所有狀態都留在你電腦裡, 不上別人的伺服器。開源、MIT、免費跑通。",
    cards: [
      {
        eyebrow: "路線 A · 我想自己裝",
        title: "DIY：clone 下來自己跑",
        body: "會開終端機、會複製貼上就夠。預設 mock 模式免費跑通,一段 prompt 交給你的 AI coding agent 自動裝好。",
        cta: "看一鍵安裝 →",
        href: "/minibrain",
      },
      {
        eyebrow: "路線 B · 我想先玩 / 要人幫我做",
        title: "先體驗：LINE 主腦實驗室",
        body: "懶得碰命令列、想先確認合不合用——直接在 LINE 跟一個跑起來的主腦聊,體驗過再決定。或找我們幫你導入完整版。",
        cta: "加 LINE 先體驗 →",
        href: LINE_URL,
      },
    ],
  },
  s4OpenSource: {
    badge: "FEATURED CASES",
    title: "精選案例：先有引擎,再把護欄補齊",
    intro:
      "這些不是概念稿——是 AIWFF 工作節點實際迭代、放上 GitHub 開源或整理成入口的專案。 每張卡的星數與「最近更新」都是每小時回源 GitHub 抓的,不是寫死的定版數字——",
    introEmphasis: "不是我說它還活著,是 GitHub 說的。",
    cards: [
      {
        name: "本機任務引擎 / aiwff-runtime",
        repo: "zaxardery8011-design/aiwff-runtime",
        license: "MIT",
        href: "/minibrain",
        pitch:
          "每個「做完了」都要留收據的 agent runtime:裝在自己電腦上,先用 mock 模式免費跑通,再決定要不要接真實 worker。",
        method:
          "用本機檔案匯流排保存任務、進度與產出,讓使用者能在瀏覽器看狀態,也能回頭查檔案證據。",
        result: "已整理成本機任務引擎頁、安裝手冊與公開 repo,可從零開始導入。",
      },
      {
        name: "soplint",
        repo: "zaxardery8011-design/soplint",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/soplint",
        pitch:
          "對 AI 工作節點的 SOP 執行做靜態規則審計,治長時間運行的「指令漂移」與工作紀律失修。",
        method: "把 SOP 落成可掃描的靜態規則,對節點產出逐條審計,抓出偏離。",
        result: "已開源上架、目前 star 前列。",
      },
      {
        name: "tidetrace / 潮痕",
        repo: "zaxardery8011-design/tidetrace",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/tidetrace",
        pitch:
          "Threads 社群輿情監控 Chrome 擴充:本地關鍵字高亮 + 回覆狀態追蹤 + BYOK 多 LLM 自訂回覆生成。",
        method: "做成 Chrome 擴充,在地端跑關鍵字高亮與回覆追蹤,LLM 用 BYOK 自帶金鑰。",
        result: "已開源上架,功能鏈完整可裝來用。",
      },
      {
        name: "execution-proofs",
        repo: "zaxardery8011-design/execution-proofs",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/execution-proofs",
        pitch:
          "別讓 AI 說謊!基於 MCP 的本地遙測閘道,讓自動化 Client 回報「完成」時必須用真實檔案與時間戳記證明。",
        method: "做成 MCP 本地遙測閘道,攔下「完成」宣稱、要求附上真實檔案與時間戳。",
        result: "已開源上架,把「可查證」變成可裝的護欄。",
      },
    ],
    labels: {
      updated: "最近更新",
      method: "怎麼做：",
      result: "成果：",
      repoLink: "看 repo →",
      entryLink: "看入口 →",
    },
    allCta: { label: "看全部開源專案 →", href: "/open-source" },
  },
  showNewsletter: true,
  s5Try: {
    badge: "LINE MAIN BRAIN LAB",
    title: "不想自己裝？在 LINE 先跟主腦聊聊",
    body: "加 LINE 主腦實驗室,直接體驗一個跑起來的主腦怎麼回應你—— 體驗過再決定要自己裝,還是讓我們幫你導入。",
    cta: { label: "加 LINE 主腦實驗室 →", href: LINE_URL },
  },
};
