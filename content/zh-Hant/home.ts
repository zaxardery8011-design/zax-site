import type { HomeContent } from "../schema";

// 逐字搬自 app/page.tsx（eaf3d25）。
// 2026-09-23 A 改：每張卡加 evidence（點得到的證據）、result 去掉點不到的自述、新增 line-persona 卡。
// 2026-09-24 對齊 A 13:35 定稿：加北極星（northStar）與新手入口（starter）；精選拿掉沒有公開證據的 Threads 擴充（只留開源頁），剩 4 張。
// 原本 JSX 裡跨行的段落，瀏覽器看到的是「行與行之間補一個半形空白」，這裡照渲染結果保留那個空白。
const LINE_URL = "https://line.me/R/ti/p/@395jcpsb";

export const home: HomeContent = {
  s1Hero: {
    eyebrow: "AI 工作節點 · 開源 · 可查證",
    titleLead: "讓 AI 真的把事做完,",
    titleEmphasis: "而且能證明它做了。",
    subtitle:
      "每個「做完了」都留收據 結果、過程、沒做到的地方 都能回頭查 想先看自己跟 AI 缺哪一段 可以從健檢開始 想裝本機任務引擎或先在 LINE 聊 也有入口",
    primaryCta: { label: "幫自己裝一台本機任務引擎 →", href: "/minibrain" },
    secondaryCta: { label: "用過或想一起玩 到未來村報到 →", href: "https://future-village.github.io/" },
  },
  northStar: {
    lines: ["陪每個人養出自己的「我們」", "這裡的「我們」是隊長＋主腦 人做判斷 AI 協助做事與查證", "先找你跟 AI 缺哪一段 再補工具、教材或陪跑 不賣打包好的腦"],
  },
  starter: {
    lines: ["AI 健檢 公開測試版", "把 repo 丟給你的 AI 先讀說明 對照你的自評與電腦上的掃描結果", "工具會誤判 結果要由人再看 分享前先刪掉私人內容 不要貼原始紀錄"],
    cta: { label: "看健檢說明與已知誤判 →", href: "https://github.com/zaxardery8011-design/aiwff-checkup-public" },
  },
  // 錢花在哪：只從 /contact 方案文字整理，不寫單價、不加 /contact 沒有的費用項目（A 裁示 a2b-20260924_074945-04cedcbb）。
  // 草稿，隊長過目後才合 master。適合／不適合／不寫程式怎麼開始三格未授權，不填。
  newbie: {
    title: "錢花在哪",
    labels: { cost: "費用不寫在這頁。寫信或加 LINE 問。", oneTime: "一次性", monthly: "後續（依用量）" },
    cost: {
      oneTime: [
        "方案費用：LINE 分身架設、本機任務引擎導入、完整版客製。把你電腦裡的資料接成查得到的工作紀錄。不一定要一次做完整套。費用不寫在這頁。寫信或加 LINE 問。",
        "LINE 分身架設包含：協助申請 Messaging API 與 webhook 上線、填寫基礎資料、交付使用教學。",
        "驗收後 7 天內的小改另寫在報價裡。",
      ],
      monthly: [
        "LLM/API 費用：由你自己的帳號負擔，不含在報價內。",
      ],
      // 「不含代管」放小註不放右欄，免得被讀成另有月費代管（A 裁示 a2b-20260924_092744-57cebdb4）。
      note: "LINE 分身架設不含後續代管維運。三個方案各自含什麼、不含什麼，看服務方案頁。",
    },
  },
  routes: {
    badge: "MINI BRAIN",
    title: "先看怎麼做 再決定要不要自己裝",
    intro:
      "丟一件事給它,背景跑完,結果推回來,瀏覽器看進度。待辦、進度和結果是你電腦上的檔。你可以打開、備份、搬走。開源、MIT。預設 mock 不需要 API key。要叫 Claude CLI 真的跑，要用你自己的 Claude 帳號。",
    cards: [
      {
        eyebrow: "路線 A · 我想自己裝",
        title: "DIY：clone 下來自己跑",
        body: "會開終端機、會複製貼上就夠。預設 mock 不需要 API key。要叫 Claude CLI 真的跑，要用你自己的 Claude 帳號。一段 prompt 交給你的 AI coding agent 自動裝好。",
        cta: "看一鍵安裝 →",
        href: "/minibrain",
      },
      {
        eyebrow: "路線 B · 我想先看實際怎麼跑",
        title: "AIWFF 研發廠區（A 機）導覽",
        body: "看一件任務怎麼被派出去、留下結果 再回頭查證 這是隊長自己用的研發廠區 公開的本機任務引擎是一個起步入口 不是整台 A 機的打包複製",
        cta: "看 ZAX 台灣隊完整導覽 →",
        href: "https://www.youtube.com/watch?v=t75XOEyOELQ",
      },
    ],
  },
  s4OpenSource: {
    badge: "FEATURED OPEN SOURCE",
    title: "精選開源專案：先有引擎,再把護欄補齊",
    intro:
      "這些是 AIWFF 研發廠區（A 機）迭代後公開的工具與入口 想看引擎從 aiwff-runtime 開始 想查規則看 soplint 想拿 LINE 分身看 line-persona 星數與最近更新看卡片 不在文案裡寫死",
    introEmphasis: "不是我說它還活著,是 GitHub 說的。",
    cards: [
      {
        name: "本機任務引擎 / aiwff-runtime",
        repo: "zaxardery8011-design/aiwff-runtime",
        license: "MIT",
        href: "/minibrain",
        pitch:
          "每個「做完了」都要留收據的 agent runtime:裝在自己電腦上。預設 mock 不需要 API key。要叫 Claude CLI 真的跑，要用你自己的 Claude 帳號。再決定要不要接真實 worker。",
        method:
          "用本機檔案匯流排保存任務、進度與產出,讓使用者能在瀏覽器看狀態,也能回頭查檔案證據。",
        result: "已整理成本機任務引擎頁、安裝手冊與公開 repo,可從零開始導入。",
        evidence: {
          label: "測試在 GitHub Actions，連結在這。過不過以那個頁面當下的結果為準。",
          href: "https://github.com/zaxardery8011-design/aiwff-runtime/actions",
        },
      },
      {
        name: "soplint",
        repo: "zaxardery8011-design/soplint",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/soplint",
        pitch:
          "對 AI 工作節點的 SOP 執行做靜態規則審計,治長時間運行的「指令漂移」與工作紀律失修。",
        method: "把 SOP 落成可掃描的靜態規則,對節點產出逐條審計,抓出偏離。",
        result: "已開源，每次提交都跑自動測試；星數在卡片上即時更新。",
        evidence: {
          label: "測試在 GitHub Actions，連結在這。過不過以那個頁面當下的結果為準。",
          href: "https://github.com/zaxardery8011-design/soplint/actions",
        },
      },
      {
        name: "line-persona / LINE 影分身",
        repo: "zaxardery8011-design/line-persona",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/line-persona",
        pitch: "填三個檔，就有一隻活在 LINE 上、講你的話、用你自己選的模型的 AI 分身。",
        method:
          ".env 放鑰匙與模型、profile.md 放口吻、knowledge.md 放資料；雲端或本地模型隨切，不會寫程式可以直接叫 AI 讀 AGENTS.md 幫你架。",
        result: "v0.2.0 已開源。LINE 實驗室的帳號就在線上，可以先加來聊。",
        evidence: { label: "加 LINE 直接跟跑起來的分身聊", href: LINE_URL },
      },
      {
        name: "dig-loop / 挖洞迴圈",
        repo: "zaxardery8011-design/dig-loop",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/dig-loop",
        pitch:
          "AI 每天去一個領域挖還沒被解決的問題。解過的不收。做完寫進已解清單。",
        method:
          "挖到的先對已解清單。沒解過的收回來。人決定值不值得做。",
        result: "挖過的有記下來才算。下一輪不再收同一個洞。",
        evidence: {
          label: "檔頭檢查程式，clone 後自己跑",
          href: "https://github.com/zaxardery8011-design/dig-loop/blob/main/tools/verify_header.py",
        },
      },
      {
        name: "grok-bot-routines-tw",
        repo: "zaxardery8011-design/grok-bot-routines-tw",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/grok-bot-routines-tw",
        pitch: "建排程的教學很多。這裡多教一件事。確認它真的做完。",
        method:
          "把 repo 交給你的 AI，或交給 Grok Bot。兩邊都要打開自動化清單核對。",
        result: "AI 說建好了不算數。清單上有那一列才算。",
        evidence: {
          label: "交給 AI 之前先讀的 AGENTS.md",
          href: "https://github.com/zaxardery8011-design/grok-bot-routines-tw/blob/main/AGENTS.md",
        },
      },
      {
        name: "execution-proofs",
        repo: "zaxardery8011-design/execution-proofs",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/execution-proofs",
        pitch:
          "別讓 AI 說謊!基於 MCP 的本地遙測閘道,讓自動化 Client 回報「完成」時必須用真實檔案與時間戳記證明。",
        method: "做成 MCP 本地遙測閘道,攔下「完成」宣稱、要求附上真實檔案與時間戳。",
        result: "已開源，附測試檔，clone 下來自己跑得到。",
        evidence: {
          label: "測試檔，clone 後 npm test 自己跑",
          href: "https://github.com/zaxardery8011-design/execution-proofs/blob/main/test/core.test.ts",
        },
      },
    ],
    labels: {
      updated: "最近更新",
      method: "怎麼做：",
      result: "成果：",
      repoLink: "看 repo →",
      entryLink: "看入口 →",
      evidence: "證據：",
    },
    allCta: { label: "看全部開源專案 →", href: "/open-source" },
    casesNote:
      "上面這些是我們自己開源的工具。想看它們跑在誰的案子上。fortune LINE bot 5/29 上線（已下線）、LINC 正在幫客戶管幾十台 VM、ZAX 會員網是老客戶圈的供貨系統。那些寫在實戰案例頁。",
    casesCta: { label: "看實戰案例 →", href: "/cases" },
  },
  showNewsletter: true,
  s5Try: {
    badge: "NEXT STEP",
    title: "不想自己裝？先在 LINE 聊,或直接看服務方案",
    body: "加 LINE 實驗室,跟一個跑起來的 LINE 分身聊。已經確定要找人做的,服務方案頁分三層寫:LINE 分身架設、本機任務引擎導入、完整版客製。把你電腦裡的資料接成查得到的工作紀錄。每層含什麼、不含什麼都列出來了。",
    cta: { label: "加 LINE 實驗室 →", href: LINE_URL },
    secondaryCta: { label: "看服務方案 →", href: "/services" },
  },
};
