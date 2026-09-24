import type { ReactNode } from "react";
import { Card, CTAButton, PageHero, SectionHeader } from "@/app/components";
import { fetchRepoMeta, type RepoMeta } from "@/app/lib/github";
import { pageMetadata } from "@/app/lib/metadata";

export const metadata = pageMetadata({
  title: "實戰案例 | ZAX",
  description:
    "已經在跑的案子:fortune LINE bot、LINC 遠端 VM 群監控、ZAX 會員網、soplint、AI 主腦實驗室。開源那幾個的星數與最近更新是回源 GitHub 抓的,不是寫死的定版數字。",
  path: "/cases",
});

// 每小時回源 GitHub 一次:soplint 那則的星數與最近更新都不是寫死的定版數字。
// 注意:Next 要求這個值是靜態字面量,不能是 import 進來的常數(會擋 build)。
export const revalidate = 3600;

const SOPLINT_REPO = "zaxardery8011-design/soplint";

type Glow = "none" | "primary" | "secondary";
type Accent = "primary" | "secondary";

type SummaryCard = {
  accent?: Accent;
  body: ReactNode;
  glow?: Glow;
  label: string;
  title: string;
};

type RealCase = {
  // 沒有可查證的三張卡就不給卡——寧可少一排,也不排三句複述標題的話。
  cards?: SummaryCard[];
  cta?: ReactNode;
  description: ReactNode;
  descriptionClassName?: string;
  footer?: ReactNode;
  id: string;
  title: string;
};

const REAL_CASES: RealCase[] = [
  {
    id: "real-case",
    title: "fortune LINE bot — 5/29 上線（已下線）",
    description: (
      <>
        fortune 系統是 ZAX 主腦線上第一個跑到「真實朋友 user」的產品。
        AI 算命 LINE bot — 接 LINE webhook、本地 AI 模型出文、4 主題卡片 +
        三派折疊 + hero 區塊;當時在朋友開的通訊行落地試用。算命功能已經下線,
        同一個 LINE 帳號現在是下面的「AI 主腦實驗室」。
      </>
    ),
    cards: [
      {
        label: "UPSTREAM",
        title: "本地 AI 模型",
        glow: "primary",
        body: (
          <>
            Combo prompt hard contract + extractTopics 4 變體寬鬆 regex,
            讓本地模型穩穩出 4 主題不偷懶。
          </>
        ),
      },
      {
        label: "DELIVERY",
        title: "LINE bot v5",
        body: (
          <>
            MODE_REGISTRY 單一真實來源 (Tarot / Bazi / Numerology…),
            13 cmdlet 收攏成一張表。
          </>
        ),
      },
      {
        accent: "secondary",
        label: "REAL USER",
        title: "朋友通訊行實測",
        glow: "secondary",
        body: <>不是百萬 DAU,是身邊朋友。能持續用、會主動回饋,就是真實場景。</>,
      },
    ],
  },
  {
    id: "real-case-linc",
    title: "LINC — 遠端 VM 群監控儀表板",
    description: (
      <>
        幫客戶裝完 VM 之後,下一個真實痛點是「人眼盯不過來幾十台機器」。
        LINC 把自架 VM 群的畫面集中到一個瀏覽器頁面,
        拖拉分類、即時看狀態、出狀況時 AI 視覺辨識先一步抓出來。
        已 production 服務既有付費客戶,不是 demo。
      </>
    ),
    footer: (
      <p className="text-xs text-[color:var(--fg-2)]">
        Live (login required) ·{" "}
        <a
          href="https://lc.zaxtw.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--link)] hover:underline"
        >
          lc.zaxtw.com
        </a>
      </p>
    ),
    cards: [
      {
        label: "PAIN",
        title: "幾十台機器同時跑",
        glow: "primary",
        body: (
          <>
            自架 VM 群跑長時運算、多機並行任務,
            人眼輪不過來,出事時通常已經晚了一輪。
          </>
        ),
      },
      {
        label: "STACK",
        title: "Vue 3 + FastAPI + YOLO11",
        body: (
          <>
            前端 Vue 3 SPA + 後端 FastAPI;Go TURN (WebRTC) 串影像、
            Cloudflare tunnel 對外、YOLO11 在 inference server 做視覺辨識。
          </>
        ),
      },
      {
        accent: "secondary",
        label: "STATUS",
        title: "已 production",
        glow: "secondary",
        body: (
          <>
            對既有 VM 裝機客戶開放,自架機房 + Tailnet 私網 + cloudflared
            對外 HTTPS,登入後才看得到畫面。
          </>
        ),
      },
    ],
  },
  {
    id: "real-case-member",
    title: "ZAX 會員網 — 老客戶圈 穩定供貨",
    description: (
      <>
        ZAX 會員網是集團最早一條變現線。沒有公開廣告、不對外擴張,
        服務集團多年累積的老客戶。下一代會員系統規劃中,
        持續延伸這條線的價值。
      </>
    ),
    cards: [
      {
        label: "LEGACY",
        title: "集團原會員網",
        glow: "primary",
        body: (
          <>
            ZAX 集團 multi-year 累積的老客戶圈,統編 81177549,
            不公開廣告、口碑線運作。
          </>
        ),
      },
      {
        label: "CHANNEL",
        title: "LINE 為主 / PAYUNi 全通道",
        body: (
          <>
            既有客戶日常下單以 LINE 為主,大額金流走 PAYUNi 全通道
            (一次付清 / Apple Pay / ATM / 超商代碼)。
          </>
        ),
      },
      {
        accent: "secondary",
        label: "NEXT",
        title: "下一代會員系統",
        glow: "secondary",
        body: (
          <>
            規劃中:整合線上扣款 + 紅利錢包 + LINE 通知歸口,
            把老客戶體驗收成一條線。
          </>
        ),
      },
    ],
  },
  {
    id: "real-case-soplint",
    title: "soplint — AI agent 行為規範 lint 工具",
    description: (
      <>
        長時間跑的 AI 工作節點會「指令漂移」:SOP 還在,但做出來的事慢慢偏掉。
        soplint 把 SOP 落成可掃描的靜態規則,對節點產出逐條審計——
        查的是行為,不是設定檔格式。下面每一格都能點進 repo 自己對。
      </>
    ),
    footer: (
      <p className="text-xs text-[color:var(--fg-2)]">
        GitHub ·{" "}
        <a
          href="https://github.com/zaxardery8011-design/soplint"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--link)] hover:underline"
        >
          github.com/zaxardery8011-design/soplint
        </a>
      </p>
    ),
    // cards 在 render 時由 GitHub 回源填入,見 soplintCards()。
  },
  {
    id: "real-case-ai-brain-line",
    title: "AI 主腦實驗室 LINE bot",
    description: (
      <>
        想先看主腦長什麼樣又不想碰命令列,這是最短的一條路:加好友就能跟一個
        正在跑的主腦對話:問它主腦是什麼、怎麼打造自己的大腦,看它記得你什麼,
        或出題抓它的錯。我們不公布它的使用者數——
        還沒有值得拿出來講的數字,有了再補。
      </>
    ),
    descriptionClassName: "mb-6",
    cta: (
      <CTAButton
        href="https://line.me/R/ti/p/%40395jcpsb"
        target="_blank"
        className="inline-block"
      >
        📱 加好友體驗主腦實驗室
      </CTAButton>
    ),
  },
];

// soplint 那三張卡:數字一律回源 GitHub。抓不到就整張卡不出現,
// 不留一個去年的星數在這裡冒充今天的證據(同 app/lib/github.ts 的原則)。
function soplintCards(meta: RepoMeta | null): SummaryCard[] {
  const cards: SummaryCard[] = [];

  if (meta) {
    cards.push({
      label: "STARS",
      title: `★ ${meta.stars}`,
      glow: "primary",
      body: <>此刻 GitHub 上的星數,每小時回源一次。不是我打上去的定版數字。</>,
    });
    cards.push({
      label: "LAST PUSH",
      title: meta.pushedAt,
      body: <>最近一次 push 的日期。這個 repo 還活著不是我說的,是 git 說的。</>,
    });
  }

  cards.push({
    accent: "secondary",
    label: "CI",
    title: "ubuntu / macOS / windows",
    glow: "secondary",
    body: (
      <>
        測試在三個 OS 上各跑一輪,最近一次全綠。Actions 頁公開,可以自己點進去看。
      </>
    ),
  });

  return cards;
}

function SummaryCardView({ accent = "primary", body, glow = "none", label, title }: SummaryCard) {
  const labelClass =
    accent === "secondary"
      ? "text-[color:var(--label)]"
      : "text-[color:var(--label)]";

  return (
    <Card className="p-5" glow={glow}>
      <div className={`${labelClass} text-xs mb-2`}>{label}</div>
      <div className="font-semibold mb-1">{title}</div>
      <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">{body}</p>
    </Card>
  );
}

function RealCaseSection({
  cards,
  cta,
  description,
  descriptionClassName = "mb-10",
  footer,
  id,
  title,
}: RealCase) {
  return (
    <section id={id} className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full">
      <SectionHeader
        accent="secondary"
        badge="REAL CASE"
        descriptionClassName={descriptionClassName}
        title={title}
      >
        {description}
      </SectionHeader>
      {cta}
      {cards && cards.length > 0 && (
        <div
          className={`grid md:grid-cols-3 gap-4 ${cta ? "mt-10" : ""} ${footer ? "mb-6" : ""}`}
        >
          {cards.map((card) => (
            <SummaryCardView key={`${id}-${card.label}-${card.title}`} {...card} />
          ))}
        </div>
      )}
      {footer}
    </section>
  );
}

export default async function Cases() {
  const soplintMeta = await fetchRepoMeta(SOPLINT_REPO);
  const cases = REAL_CASES.map((caseItem) =>
    caseItem.id === "real-case-soplint"
      ? { ...caseItem, cards: soplintCards(soplintMeta) }
      : caseItem,
  );

  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <PageHero
        baseClassName="px-5 sm:px-6 pt-20 pb-4 max-w-5xl mx-auto w-full"
        title={<span className="steel-text">實戰案例</span>}
        titleClassName="text-3xl sm:text-4xl md:text-5xl font-bold"
      />

      {cases.map((caseItem) => (
        <RealCaseSection key={caseItem.id} {...caseItem} />
      ))}

      {/* ── Phase 1 demo — social-poster ── */}
      <section id="demo" className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full">
        <SectionHeader
          badge="PHASE 1 DEMO"
          title="social-poster — 11 產業社群發文 SaaS"
        >
          social-poster 是下一條 user-facing 線。獨立 Next.js 專案,Phase 1
          全 Demo Mode (fake data / fake publish),畫面同時當 Meta App Review demo 素材;
          Phase 5 才接真實 Meta Graph API。
        </SectionHeader>

        <Card className="p-6 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--label)]/20 text-[color:var(--label)] border border-[color:var(--label)]/30">
              Phase 1 · Demo Mode
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--label)]/15 text-[color:var(--label)] border border-[color:var(--label)]/30">
              Top 3 seed: 房仲 / 美業 / 餐飲
            </span>
            <span className="text-xs px-2.5 py-1 rounded border border-[color:var(--border)] text-[color:var(--fg-1)]">
              + 8 產業 prompt 同結構差 template
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-[color:var(--fg-2)] text-xs mb-1">STACK</div>
              <div className="text-[color:var(--fg-0)]">
                Next.js 16 · Prisma 7 · Tailwind v4 · Gemini 2.5 Pro (走 AIWFF external_router)
              </div>
            </div>
            <div>
              <div className="text-[color:var(--fg-2)] text-xs mb-1">SCOPE</div>
              <div className="text-[color:var(--fg-0)]">
                Dashboard · 11 industry seed · 6 model schema · 5 phase 計畫
              </div>
            </div>
            <div>
              <div className="text-[color:var(--fg-2)] text-xs mb-1">BLOCKER</div>
              <div className="text-[color:var(--fg-0)]">
                Meta App Review 排隊中 (7-30 天) — code 不卡,審核才卡
              </div>
            </div>
            <div>
              <div className="text-[color:var(--fg-2)] text-xs mb-1">NEXT</div>
              <div className="text-[color:var(--fg-0)]">
                Phase 1 dashboard 視覺定稿後再鎖品牌名
              </div>
            </div>
          </div>
        </Card>
        <p className="text-xs text-[color:var(--fg-2)]">
          狀態真實揭露:Phase 1 dashboard 在做,Meta App Review 排隊中,
          不假裝已經有真實付費用戶。
        </p>
      </section>

      {/* ── Self-built — 自家實測 ── */}
      <section id="self-built" className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full">
        <SectionHeader badge="SELF-BUILT" title="自家實測 — 我先拿自己開刀">
          我做得出來、跑得起來,才敢拿來幫你做。下面這些,全是我自己每天真的在用的東西。
        </SectionHeader>

        <div className="flex flex-col gap-8">
          <Card className="p-5" glow="primary">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--label)]/15 text-[color:var(--label)] border border-[color:var(--label)]/30">
                自家實測
              </span>
              <span className="text-xs text-[color:var(--fg-2)]">用在我自己的社群經營</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-5">
              社群貼文:從「想半天擠不出」到「3 分鐘出草稿」
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="rounded-lg p-4 bg-[color:var(--label)]/10 border border-[color:var(--label)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--label)] mb-1.5">
                  BEFORE
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  想經營粉專卻每天擠不出文;好不容易寫了,又一股 AI
                  味、不像自己講話。
                </p>
              </div>
              <div className="rounded-lg p-4 bg-[color:var(--label)]/10 border border-[color:var(--label)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--label)] mb-1.5">
                  AFTER
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  丟幾篇舊文進去,3 分鐘出一版「像自己寫的」草稿,順一下就能發。
                </p>
              </div>
            </div>
            <ol className="flex flex-col gap-2 mb-5 text-sm text-[color:var(--fg-1)]">
              <li className="flex gap-3">
                <span className="text-[color:var(--label)] font-bold">1.</span>
                把自己幾篇舊貼文貼進工具,它先學會你的語氣、用詞、節奏
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--label)] font-bold">2.</span>
                套上我驗證過、實際有成效的貼文結構(公式骨架)
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--label)] font-bold">3.</span>
                產出一篇「像你自己寫」的草稿,你順一下就能發
              </li>
            </ol>
            <div className="rounded-lg overflow-hidden border border-[color:var(--border)] mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/case1_tool.png" alt="社群貼文工具實際畫面" className="block w-full" />
            </div>
            <p className="text-xs text-[color:var(--fg-2)] mb-4">
              ↑ 工具實際畫面:左邊貼舊文＋主題,右邊內建貼文公式,按一下就出文
            </p>
            <p className="text-xs text-[color:var(--fg-2)] border-l-2 border-[color:var(--label)] pl-3 leading-relaxed">
              誠實註記:這是我自家在用的工具,目前用在我自己的社群經營上。你正在看的這頁、以及我發的貼文,都是它做出來的。
            </p>
          </Card>

          <Card className="p-5" glow="secondary">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--label)]/15 text-[color:var(--label)] border border-[color:var(--label)]/30">
                自家實測
              </span>
              <span className="text-xs text-[color:var(--fg-2)]">每天消化十幾支影片</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-5">
              一小時的影片 / 長資料,幾分鐘變成重點懶人包
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="rounded-lg p-4 bg-[color:var(--label)]/10 border border-[color:var(--label)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--label)] mb-1.5">
                  BEFORE
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  一堆教學影片、會議錄影、長報告,要看完再整理就累,最後都擱著。
                </p>
              </div>
              <div className="rounded-lg p-4 bg-[color:var(--label)]/10 border border-[color:var(--label)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--label)] mb-1.5">
                  AFTER
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  丟一個連結,幾分鐘拿到一頁繁中重點,不再被「待看清單」追著跑。
                </p>
              </div>
            </div>
            <ol className="flex flex-col gap-2 mb-5 text-sm text-[color:var(--fg-1)]">
              <li className="flex gap-3">
                <span className="text-[color:var(--label)] font-bold">1.</span>
                丟一個影片連結進去
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--label)] font-bold">2.</span>
                系統自己下載、把整段話轉成逐字稿
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--label)] font-bold">3.</span>
                濃縮成一頁繁體中文重點,全程不用動手
              </li>
            </ol>
            <p className="text-xs text-[color:var(--fg-2)] border-l-2 border-[color:var(--label)] pl-3 leading-relaxed">
              誠實註記:自家每日在跑的流程,成本幾乎是零(用本地與免費資源)。
            </p>
          </Card>

          <Card className="p-5" glow="primary">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--label)]/15 text-[color:var(--label)] border border-[color:var(--label)]/30">
                自家實測
              </span>
              <span className="text-xs text-[color:var(--fg-2)]">不靠人記憶去追進度</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-5">
              交辦的事「有沒有真的做完」,讓系統自己盯
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="rounded-lg p-4 bg-[color:var(--label)]/10 border border-[color:var(--label)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--label)] mb-1.5">
                  BEFORE
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  交辦出去常以為做完了其實沒有,要一件一件回頭追,耗神又容易漏。
                </p>
              </div>
              <div className="rounded-lg p-4 bg-[color:var(--label)]/10 border border-[color:var(--label)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--label)] mb-1.5">
                  AFTER
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  沒做完的會自己被攔下來,我只看真正需要我判斷的。
                </p>
              </div>
            </div>
            <ol className="flex flex-col gap-2 mb-5 text-sm text-[color:var(--fg-1)]">
              <li className="flex gap-3">
                <span className="text-[color:var(--label)] font-bold">1.</span>
                每件任務「回報完成」時,系統自動再派一個獨立檢查
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--label)] font-bold">2.</span>
                去驗它是不是真的做到,做不到就退回重做
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--label)] font-bold">3.</span>
                不靠人記憶追進度,漏接的自動被攔下
              </li>
            </ol>
            <p className="text-xs text-[color:var(--fg-2)] border-l-2 border-[color:var(--label)] pl-3 leading-relaxed">
              誠實註記:這是我自家系統每天在跑的機制。
            </p>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[color:var(--fg-1)] mb-6 leading-relaxed">
            換你了:說出你最煩、最重複、最花時間的那件事,其他交給我。
          </p>
          <CTAButton href="/contact" className="inline-block">
            說出你最煩的一件事 →
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
