import type { Metadata } from "next";
import { Card, CTAButton, SectionHeader } from "@/app/components";
import { CopyInstallPrompt } from "./CopyInstallPrompt";

const REPO_URL = "https://github.com/zaxardery8011-design/aiwff-runtime";
const INSTALL_DOC_URL =
  "https://github.com/zaxardery8011-design/aiwff-runtime/blob/master/docs/zh-TW/install.md";
const USAGE_DOC_URL =
  "https://github.com/zaxardery8011-design/aiwff-runtime/blob/master/docs/zh-TW/usage.md";
const ISSUES_URL =
  "https://github.com/zaxardery8011-design/aiwff-runtime/issues";
const LINE_URL = "https://line.me/R/ti/p/@395jcpsb";

const installPrompt = `你是我的本機 coding agent。請幫我安裝並驗證 aiwff-runtime。

目標：
- clone 官方 repo 到本機工作資料夾
- 只跑 mock demo
- 不接 Telegram、LINE、Claude OAuth、Task Scheduler
- 不讀取、上傳或修改我的私人檔案
- 安裝完成後啟動 WebUI，並回報可開啟的 localhost URL

步驟：
1. git clone https://github.com/zaxardery8011-design/aiwff-runtime
2. cd aiwff-runtime
3. 檢查 Node.js 與 npm：node --version；npm --version。Node.js 必須 >= 18。
4. npm install
5. npm run doctor
6. MOCK_WORKER=1 npm run demo
7. npm run verify-demo
8. npm run web
9. 回報：demo task id / artifact path / verifier verdict / localhost URL

如果任何一步失敗，不要亂改系統、不要接 Telegram/OAuth、不要改 Task Scheduler；先停下來回報錯誤與你已執行的命令。`;

const installCommands = `git clone https://github.com/zaxardery8011-design/aiwff-runtime
cd aiwff-runtime
# 對你的 AI coding agent 說：「照 INSTALL_AI.md 幫我裝好」`;

const scenarioCards = [
  {
    title: "全在你本機",
    label: "LOCAL FILES",
    body: "待辦、進度、結果都放在你看得到的資料夾裡，不是雲端 SaaS。你可以直接查檔案、備份、搬走。",
  },
  {
    title: "開箱免費跑通",
    label: "MOCK MODE",
    body: "第一次安裝不需 API key、不需付費帳號、不需 Telegram，就能看完整「丟任務、跑起來、拿結果」。",
  },
  {
    title: "改文字檔就改個性",
    label: "TEXT FIRST",
    body: "想改它的做事方式，就改幾個文字檔，不用先寫程式，也不用先接一堆服務。",
  },
  {
    title: "可選接 Telegram",
    label: "OPTIONAL CHAT",
    body: "想用手機傳訊息丟任務、收結果就接；不想接也能只用瀏覽器。本體是純 Node.js 18+。",
  },
] as const;

const docLinks = [
  {
    title: "安裝手冊 install.md",
    href: INSTALL_DOC_URL,
    body: "一步步把它裝起來、跑通第一次；一開始就先講清楚哪些免費、哪些需要付費。",
  },
  {
    title: "使用手冊 usage.md",
    href: USAGE_DOC_URL,
    body: "學會怎麼用、產出在哪、怎麼調個性。",
  },
  {
    title: "GitHub repo",
    href: REPO_URL,
    body: "想看細節、設定欄位和架構，就看原始碼。",
  },
  {
    title: "GitHub Issues",
    href: ISSUES_URL,
    body: "卡住請到 GitHub Issues 留問題，我們在那邊追。",
  },
] as const;

export const metadata: Metadata = {
  title: "小主腦 | 開源本機 AI 任務主腦",
  description:
    "小主腦是裝在自己電腦上的開源 AI 任務主腦。預設 mock 模式免費跑通，要接真 Claude worker 時才需要付費 Claude 訂閱。",
};

function BillingCallout({ tone = "light" }: { tone?: "light" | "dark" }) {
  const classes =
    tone === "dark"
      ? "border-amber-300/30 bg-amber-300/10 text-amber-100"
      : "border-amber-300/40 bg-amber-300/12 text-amber-100";

  return (
    <div className={`rounded-lg border p-4 leading-relaxed ${classes}`}>
      <p className="text-base">
        免費跑通 <strong>mock 模式</strong> 不用錢、不需 API key。只有要讓它真的叫 Claude
        幫你做事時，才需要 <strong>付費的 Claude 訂閱</strong>；這件事我們裝之前就講清楚。
      </p>
    </div>
  );
}

export default function MiniBrainPage() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <section className="px-5 sm:px-6 pt-20 pb-14 md:pt-28 md:pb-20 max-w-5xl mx-auto w-full">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-5">
              開源 · MIT · 全在你本機
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              幫自己裝一台 <span className="neon-text">小主腦</span>
            </h1>
            <p className="text-base md:text-lg text-[color:var(--fg-1)] leading-relaxed max-w-3xl mb-6">
              把一件事丟給它，它會在你電腦裡跑，做完把結果交回來；你也能用瀏覽器看進度。所有狀態都留在你電腦的檔案裡，不上別人的伺服器。
            </p>
            <BillingCallout />
          </div>

          <div className="flex flex-col gap-4">
            <CTAButton href="#install" className="w-full justify-center sm:w-fit">
              看一鍵安裝
            </CTAButton>
            <CTAButton
              href="#docs"
              variant="ghost"
              className="w-full justify-center sm:w-fit"
            >
              先讀安裝手冊
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-16 max-w-5xl mx-auto w-full">
        <SectionHeader badge="WHAT IT DOES" title="它能幫你做什麼">
          小主腦不是雲端聊天工具；它是一個把任務、進度和產出都留在本機的最小 AI 任務 runtime。
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {scenarioCards.map((item) => (
            <Card key={item.title} className="p-5" interactive={false}>
              <div className="text-xs tracking-[0.24em] text-[color:var(--accent-purple)] mb-4">
                {item.label}
              </div>
              <h2 className="text-xl font-bold mb-3 text-[color:var(--fg-0)]">
                {item.title}
              </h2>
              <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="install"
        className="px-5 sm:px-6 py-16 max-w-5xl mx-auto w-full"
      >
        <SectionHeader badge="INSTALL" title="最快上手：讓 AI 幫你裝">
          兩步：clone 下來、把 prompt 貼給 Codex / Claude Code 這類 coding agent。跑完你會拿到一個可開的本機網址，預設是{" "}
          <code>http://127.0.0.1:3100</code>。
        </SectionHeader>

        <Card className="p-5 sm:p-7" interactive={false} glow="cyan">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-xs px-3 py-1.5 rounded border border-[color:var(--accent-cyan)]/30 bg-[color:var(--accent-cyan)]/10 text-[color:var(--accent-cyan)]">
              MIT 開源，可先審再跑
            </span>
            <span className="text-xs px-3 py-1.5 rounded border border-[color:var(--accent-purple)]/30 bg-[color:var(--accent-purple)]/10 text-[color:var(--accent-purple)]">
              零外部相依 · 純 Node.js 18+
            </span>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded border border-[color:var(--border)] text-[color:var(--fg-0)] hover:text-[color:var(--accent-cyan)] transition"
            >
              看原始碼 repo
            </a>
          </div>

          <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg border border-[color:var(--border)] bg-[#050814] p-4 text-sm leading-relaxed text-[color:var(--fg-0)]">
            <code>{installCommands}</code>
          </pre>

          <details className="mt-5 rounded-lg border border-[color:var(--border)] bg-[#050814]/55 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-[color:var(--accent-cyan)]">
              展開看它會請 AI 做哪些步驟，包含失敗時怎麼處理
            </summary>
            <pre className="mt-4 max-h-[34rem] overflow-x-auto whitespace-pre-wrap text-sm leading-relaxed text-[color:var(--fg-1)]">
              <code>{installPrompt}</code>
            </pre>
          </details>

          <div className="mt-5">
            <CopyInstallPrompt promptText={installPrompt} />
          </div>

          <div className="mt-5">
            <BillingCallout tone="dark" />
          </div>
        </Card>
      </section>

      <section
        id="docs"
        className="px-5 sm:px-6 py-16 max-w-5xl mx-auto w-full"
      >
        <SectionHeader badge="DOCS / GITHUB" title="想深入？看手冊與原始碼">
          安裝、使用、架構與支援入口都放在公開 repo；技術支援走 GitHub Issues，完整版或客製再找 zax.com.tw。
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2">
          {docLinks.map((item) => (
            <Card
              as="a"
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 flex flex-col min-h-48"
            >
              <h2 className="text-xl font-bold mb-3 text-[color:var(--fg-0)]">
                {item.title}
              </h2>
              <p className="text-sm text-[color:var(--fg-1)] leading-relaxed mb-5">
                {item.body}
              </p>
              <span className="mt-auto text-sm text-[color:var(--accent-cyan)]">
                開啟連結 →
              </span>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-16 max-w-5xl mx-auto w-full">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center rounded-xl border border-[color:var(--accent-cyan)]/30 bg-[color:var(--accent-cyan)]/10 p-6 sm:p-8">
          <div>
            <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
              TRY FIRST
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              不想自己裝？先玩玩看
            </h2>
            <p className="text-[color:var(--fg-1)] leading-relaxed max-w-3xl">
              不確定合不合用、或懶得碰命令列，可以先到 LINE 主腦實驗室直接跟一個跑起來的主腦聊，體驗過再決定要不要自己裝。
            </p>
          </div>
          <CTAButton
            href={LINE_URL}
            target="_blank"
            className="w-full justify-center sm:w-fit"
          >
            加 LINE 主腦實驗室
          </CTAButton>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-16 max-w-5xl mx-auto w-full">
        <div className="rounded-xl border border-[color:var(--border)] bg-[#050814]/35 p-6 sm:p-8 text-center">
          <div className="text-xs tracking-[0.3em] text-[color:var(--accent-purple)] mb-3">
            FULL AIWFF / CUSTOM
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            想要完整版 / 客製化？
          </h2>
          <p className="mx-auto max-w-3xl text-[color:var(--fg-1)] leading-relaxed mb-6">
            小主腦是開源最小版本。若你要多台機器一起跑、要規則控管、要接進你自己的流程，或想要有人幫你導入客製，聊聊。
          </p>
          <CTAButton href="/contact" className="w-full justify-center sm:w-fit">
            聯絡 zax.com.tw
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
