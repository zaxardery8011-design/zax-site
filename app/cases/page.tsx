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
    </main>
  );
}
