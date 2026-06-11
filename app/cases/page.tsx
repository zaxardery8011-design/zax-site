import Link from "next/link";

export default function Cases() {
  return (
    <main className="flex flex-col w-full">
      <section className="px-6 pt-20 pb-4 max-w-5xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold neon-text">實戰案例</h1>
      </section>

      {/* ── Real case — fortune ── */}
      <section
        id="real-case"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-purple)] mb-3">
          {/* Real case section */}
          REAL CASE
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          fortune LINE bot — 5/29 上線
        </h2>
        <p className="text-[color:var(--fg-1)] mb-10 leading-relaxed max-w-3xl">
          fortune 系統是 ZAX 主腦線上第一個跑到「真實朋友 user」的產品。
          AI 算命 LINE bot — 接 LINE webhook、本地 AI 模型出文、4 主題卡片 +
          三派折疊 + hero 區塊;目前先在朋友開的通訊行落地試用。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">UPSTREAM</div>
            <div className="font-semibold mb-1">本地 AI 模型</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              Combo prompt hard contract + extractTopics 4 變體寬鬆 regex,
              讓本地模型穩穩出 4 主題不偷懶。
            </p>
          </div>
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">DELIVERY</div>
            <div className="font-semibold mb-1">LINE bot v5</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              MODE_REGISTRY 單一真實來源 (Tarot / Bazi / Numerology…),
              13 cmdlet 收攏成一張表。
            </p>
          </div>
          <div className="glass rounded-xl p-5 glow-purple">
            <div className="text-[color:var(--accent-purple)] text-xs mb-2">REAL USER</div>
            <div className="font-semibold mb-1">朋友通訊行實測</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              不是百萬 DAU,是身邊朋友。能持續用、會主動回饋,就是真實場景。
            </p>
          </div>
        </div>
      </section>

      {/* ── Real case — LINC ── */}
      <section
        id="real-case-linc"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-purple)] mb-3">
          {/* Real case section — LINC */}
          REAL CASE
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          LINC — 遠端 VM 群監控儀表板
        </h2>
        <p className="text-[color:var(--fg-1)] mb-10 leading-relaxed max-w-3xl">
          幫客戶裝完 VM 之後,下一個真實痛點是「人眼盯不過來幾十台機器」。
          LINC 把自架 VM 群的畫面集中到一個瀏覽器頁面,
          拖拉分類、即時看狀態、出狀況時 AI 視覺辨識先一步抓出來。
          已 production 服務既有付費客戶,不是 demo。
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">PAIN</div>
            <div className="font-semibold mb-1">幾十台機器同時跑</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              自架 VM 群跑長時運算、多機並行任務,
              人眼輪不過來,出事時通常已經晚了一輪。
            </p>
          </div>
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">STACK</div>
            <div className="font-semibold mb-1">Vue 3 + FastAPI + YOLO11</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              前端 Vue 3 SPA + 後端 FastAPI;Go TURN (WebRTC) 串影像、
              Cloudflare tunnel 對外、YOLO11 在 inference server 做視覺辨識。
            </p>
          </div>
          <div className="glass rounded-xl p-5 glow-purple">
            <div className="text-[color:var(--accent-purple)] text-xs mb-2">STATUS</div>
            <div className="font-semibold mb-1">已 production</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              對既有 VM 裝機客戶開放,自架機房 + Tailnet 私網 + cloudflared
              對外 HTTPS,登入後才看得到畫面。
            </p>
          </div>
        </div>
        <p className="text-xs text-[color:var(--fg-2)]">
          Live (login required) ·{" "}
          <a
            href="https://lc.zaxtw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--accent-cyan)] hover:underline"
          >
            lc.zaxtw.com
          </a>
        </p>
      </section>

      {/* ── Real case — ZAX 會員網 ── */}
      <section
        id="real-case-member"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-purple)] mb-3">
          {/* Real case section — ZAX 會員網 */}
          REAL CASE
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ZAX 會員網 — 老客戶圈 穩定供貨
        </h2>
        <p className="text-[color:var(--fg-1)] mb-10 leading-relaxed max-w-3xl">
          ZAX 會員網是集團最早一條變現線。沒有公開廣告、不對外擴張,
          服務集團多年累積的老客戶。下一代會員系統規劃中,
          持續延伸這條線的價值。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">LEGACY</div>
            <div className="font-semibold mb-1">集團原會員網</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              ZAX 集團 multi-year 累積的老客戶圈,統編 81177549,
              不公開廣告、口碑線運作。
            </p>
          </div>
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">CHANNEL</div>
            <div className="font-semibold mb-1">LINE 為主 / PAYUNi 全通道</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              既有客戶日常下單以 LINE 為主,大額金流走 PAYUNi 全通道
              (一次付清 / Apple Pay / ATM / 超商代碼)。
            </p>
          </div>
          <div className="glass rounded-xl p-5 glow-purple">
            <div className="text-[color:var(--accent-purple)] text-xs mb-2">NEXT</div>
            <div className="font-semibold mb-1">下一代會員系統</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              規劃中:整合線上扣款 + 紅利錢包 + LINE 通知歸口,
              把老客戶體驗收成一條線。
            </p>
          </div>
        </div>
      </section>

      {/* ── Real case — soplint ── */}
      <section
        id="real-case-soplint"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-purple)] mb-3">
          {/* Real case section — soplint */}
          REAL CASE
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          soplint — AI agent 行為規範 lint 工具
        </h2>
        <p className="text-[color:var(--fg-1)] mb-10 leading-relaxed max-w-3xl">
          soplint 是開源 AI agent 行為規範 lint 工具，lint behavior, not config。
          GitHub 已 public，CI 三平台綠。
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">FOCUS</div>
            <div className="font-semibold mb-1">Lint behavior</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              檢查 AI agent 行為規範，而不是只檢查設定檔格式。
            </p>
          </div>
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">OPEN SOURCE</div>
            <div className="font-semibold mb-1">已 public</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              專案公開在 GitHub，方便外部查看與後續協作。
            </p>
          </div>
          <div className="glass rounded-xl p-5 glow-purple">
            <div className="text-[color:var(--accent-purple)] text-xs mb-2">CI</div>
            <div className="font-semibold mb-1">三平台綠</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              CI 已在三平台通過，維持基礎品質閘門。
            </p>
          </div>
        </div>
        <p className="text-xs text-[color:var(--fg-2)]">
          GitHub ·{" "}
          <a
            href="https://github.com/zaxardery8011-design/soplint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--accent-cyan)] hover:underline"
          >
            github.com/zaxardery8011-design/soplint
          </a>
        </p>
      </section>

      {/* ── Real case — AI brain lab LINE bot ── */}
      <section
        id="real-case-ai-brain-line"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-purple)] mb-3">
          {/* Real case section — AI brain lab LINE bot */}
          REAL CASE
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          AI 主腦實驗室 LINE bot
        </h2>
        <p className="text-[color:var(--fg-1)] mb-6 leading-relaxed max-w-3xl">
          AI 主腦實驗室 LINE bot 是 AI 算命 + 主腦實驗室入口，已上線。
        </p>
        <a
          href="https://line.me/R/ti/p/%40395jcpsb"
          target="_blank"
          rel="noopener"
          className="inline-block px-5 py-2.5 rounded-md text-sm btn-primary transition mb-10"
        >
          📱 加好友體驗主腦實驗室
        </a>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">ENTRY</div>
            <div className="font-semibold mb-1">主腦實驗室入口</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              用 LINE bot 承接外部使用者進入 AI 主腦實驗室。
            </p>
          </div>
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">FEATURE</div>
            <div className="font-semibold mb-1">AI 算命</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              以 AI 算命作為入口功能，讓使用者從具體互動開始。
            </p>
          </div>
          <div className="glass rounded-xl p-5 glow-purple">
            <div className="text-[color:var(--accent-purple)] text-xs mb-2">STATUS</div>
            <div className="font-semibold mb-1">已上線</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              目前狀態已上線，後續可再補流量或使用者數據。
            </p>
          </div>
        </div>
      </section>

      {/* ── Real case — AI brain lab Discord ── */}
      <section
        id="real-case-ai-brain-discord"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-purple)] mb-3">
          {/* Real case section — AI brain lab Discord */}
          REAL CASE
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          AI 主腦實驗室 Discord 社群
        </h2>
        <p className="text-[color:var(--fg-1)] mb-10 leading-relaxed max-w-3xl">
          AI 主腦實驗室 Discord 是對外社群，含影片蒸餾廳 / 開源工坊頻道。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">COMMUNITY</div>
            <div className="font-semibold mb-1">對外社群</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              作為 AI 主腦實驗室對外交流與沉澱的 Discord 社群。
            </p>
          </div>
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">CHANNEL</div>
            <div className="font-semibold mb-1">影片蒸餾廳</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              頻道聚焦影片內容蒸餾與整理。
            </p>
          </div>
          <div className="glass rounded-xl p-5 glow-purple">
            <div className="text-[color:var(--accent-purple)] text-xs mb-2">CHANNEL</div>
            <div className="font-semibold mb-1">開源工坊</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              頻道聚焦開源專案與工坊式協作。
            </p>
          </div>
        </div>
      </section>

      {/* ── Phase 1 demo — social-poster ── */}
      <section
        id="demo"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
          {/* Phase 1 demo */}
          PHASE 1 DEMO
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          social-poster — 11 產業社群發文 SaaS
        </h2>
        <p className="text-[color:var(--fg-1)] mb-10 leading-relaxed max-w-3xl">
          social-poster 是下一條 user-facing 線。獨立 Next.js 專案,Phase 1
          全 Demo Mode (fake data / fake publish),畫面同時當 Meta App Review demo 素材;
          Phase 5 才接真實 Meta Graph API。
        </p>

        <div className="glass rounded-xl p-6 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--accent-purple)]/20 text-[color:var(--accent-purple)] border border-[color:var(--accent-purple)]/30">
              Phase 1 · Demo Mode
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--accent-cyan)]/15 text-[color:var(--accent-cyan)] border border-[color:var(--accent-cyan)]/30">
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
        </div>
        <p className="text-xs text-[color:var(--fg-2)]">
          狀態真實揭露:Phase 1 dashboard 在做,Meta App Review 排隊中,
          不假裝已經有真實付費用戶。
        </p>
      </section>

      {/* ── Self-built — 自家實測 ── */}
      <section
        id="self-built"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
          {/* Self-built section */}
          SELF-BUILT
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          自家實測 — 我先拿自己開刀
        </h2>
        <p className="text-[color:var(--fg-1)] mb-12 leading-relaxed max-w-3xl">
          我做得出來、跑得起來,才敢拿來幫你做。下面這些,全是我自己每天真的在用的東西。
        </p>

        <div className="flex flex-col gap-8">
          {/* Self-built case 1 — social poster (featured, with image) */}
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--accent-cyan)]/15 text-[color:var(--accent-cyan)] border border-[color:var(--accent-cyan)]/30">
                自家實測
              </span>
              <span className="text-xs text-[color:var(--fg-2)]">
                用在我自己的社群經營
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-5">
              社群貼文:從「想半天擠不出」到「3 分鐘出草稿」
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="rounded-lg p-4 bg-[color:var(--accent-purple)]/10 border border-[color:var(--accent-purple)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--accent-purple)] mb-1.5">
                  BEFORE
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  想經營粉專卻每天擠不出文;好不容易寫了,又一股 AI
                  味、不像自己講話。
                </p>
              </div>
              <div className="rounded-lg p-4 bg-[color:var(--accent-cyan)]/10 border border-[color:var(--accent-cyan)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--accent-cyan)] mb-1.5">
                  AFTER
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  丟幾篇舊文進去,3 分鐘出一版「像自己寫的」草稿,順一下就能發。
                </p>
              </div>
            </div>
            <ol className="flex flex-col gap-2 mb-5 text-sm text-[color:var(--fg-1)]">
              <li className="flex gap-3">
                <span className="text-[color:var(--accent-cyan)] font-bold">1.</span>
                把自己幾篇舊貼文貼進工具,它先學會你的語氣、用詞、節奏
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--accent-cyan)] font-bold">2.</span>
                套上我驗證過、實際有成效的貼文結構(公式骨架)
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--accent-cyan)] font-bold">3.</span>
                產出一篇「像你自己寫」的草稿,你順一下就能發
              </li>
            </ol>
            <div className="rounded-lg overflow-hidden border border-[color:var(--border)] mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/case1_tool.png"
                alt="社群貼文工具實際畫面"
                className="block w-full"
              />
            </div>
            <p className="text-xs text-[color:var(--fg-2)] mb-4">
              ↑ 工具實際畫面:左邊貼舊文＋主題,右邊內建貼文公式,按一下就出文
            </p>
            <p className="text-xs text-[color:var(--fg-2)] border-l-2 border-[color:var(--accent-cyan)] pl-3 leading-relaxed">
              誠實註記:這是我自家在用的工具,目前用在我自己的社群經營上。你正在看的這頁、以及我發的貼文,都是它做出來的。
            </p>
          </div>

          {/* Self-built case 2 — video digest */}
          <div className="glass rounded-xl p-5 glow-purple">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--accent-cyan)]/15 text-[color:var(--accent-cyan)] border border-[color:var(--accent-cyan)]/30">
                自家實測
              </span>
              <span className="text-xs text-[color:var(--fg-2)]">
                每天消化十幾支影片
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-5">
              一小時的影片 / 長資料,幾分鐘變成重點懶人包
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="rounded-lg p-4 bg-[color:var(--accent-purple)]/10 border border-[color:var(--accent-purple)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--accent-purple)] mb-1.5">
                  BEFORE
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  一堆教學影片、會議錄影、長報告,要看完再整理就累,最後都擱著。
                </p>
              </div>
              <div className="rounded-lg p-4 bg-[color:var(--accent-cyan)]/10 border border-[color:var(--accent-cyan)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--accent-cyan)] mb-1.5">
                  AFTER
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  丟一個連結,幾分鐘拿到一頁繁中重點,不再被「待看清單」追著跑。
                </p>
              </div>
            </div>
            <ol className="flex flex-col gap-2 mb-5 text-sm text-[color:var(--fg-1)]">
              <li className="flex gap-3">
                <span className="text-[color:var(--accent-purple)] font-bold">1.</span>
                丟一個影片連結進去
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--accent-purple)] font-bold">2.</span>
                系統自己下載、把整段話轉成逐字稿
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--accent-purple)] font-bold">3.</span>
                濃縮成一頁繁體中文重點,全程不用動手
              </li>
            </ol>
            <p className="text-xs text-[color:var(--fg-2)] border-l-2 border-[color:var(--accent-purple)] pl-3 leading-relaxed">
              誠實註記:自家每日在跑的流程,成本幾乎是零(用本地與免費資源)。
            </p>
          </div>

          {/* Self-built case 3 — task auto-verify */}
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--accent-cyan)]/15 text-[color:var(--accent-cyan)] border border-[color:var(--accent-cyan)]/30">
                自家實測
              </span>
              <span className="text-xs text-[color:var(--fg-2)]">
                不靠人記憶去追進度
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-5">
              交辦的事「有沒有真的做完」,讓系統自己盯
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="rounded-lg p-4 bg-[color:var(--accent-purple)]/10 border border-[color:var(--accent-purple)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--accent-purple)] mb-1.5">
                  BEFORE
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  交辦出去常以為做完了其實沒有,要一件一件回頭追,耗神又容易漏。
                </p>
              </div>
              <div className="rounded-lg p-4 bg-[color:var(--accent-cyan)]/10 border border-[color:var(--accent-cyan)]/20">
                <div className="text-xs tracking-[0.2em] text-[color:var(--accent-cyan)] mb-1.5">
                  AFTER
                </div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  沒做完的會自己被攔下來,我只看真正需要我判斷的。
                </p>
              </div>
            </div>
            <ol className="flex flex-col gap-2 mb-5 text-sm text-[color:var(--fg-1)]">
              <li className="flex gap-3">
                <span className="text-[color:var(--accent-cyan)] font-bold">1.</span>
                每件任務「回報完成」時,系統自動再派一個獨立檢查
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--accent-cyan)] font-bold">2.</span>
                去驗它是不是真的做到,做不到就退回重做
              </li>
              <li className="flex gap-3">
                <span className="text-[color:var(--accent-cyan)] font-bold">3.</span>
                不靠人記憶追進度,漏接的自動被攔下
              </li>
            </ol>
            <p className="text-xs text-[color:var(--fg-2)] border-l-2 border-[color:var(--accent-cyan)] pl-3 leading-relaxed">
              誠實註記:這是我自家系統每天在跑的機制。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[color:var(--fg-1)] mb-6 leading-relaxed">
            換你了:說出你最煩、最重複、最花時間的那件事,其他交給我。
          </p>
          <Link
            href="/contact"
            className="inline-block px-5 py-2.5 rounded-md text-sm btn-primary transition"
          >
            說出你最煩的一件事 →
          </Link>
        </div>
      </section>
    </main>
  );
}
