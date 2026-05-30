export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* ── Top Nav ── */}
      <nav className="sticky top-0 z-20 w-full px-6 py-4 flex items-center gap-6 glass border-b border-[color:var(--border)]">
        <a href="#hero" className="font-bold tracking-widest text-lg neon-text">
          ZAX
        </a>
        <div className="hidden md:flex gap-5 text-sm text-[color:var(--fg-1)] ml-4">
          <a href="#real-case" className="hover:text-[color:var(--accent-cyan)]">實戰案例</a>
          <a href="#demo" className="hover:text-[color:var(--accent-cyan)]">Phase 1 demo</a>
          <a href="#about" className="hover:text-[color:var(--accent-cyan)]">關於 ZAX</a>
          <a href="#contact" className="hover:text-[color:var(--accent-cyan)]">聯絡</a>
        </div>
        <div className="grow" />
        <a
          href="#contact"
          className="text-xs px-3 py-1.5 rounded-md btn-ghost transition"
        >
          諮詢
        </a>
      </nav>

      {/* ── 1. Hero ── */}
      <section
        id="hero"
        className="px-6 pt-24 pb-28 md:pt-32 md:pb-36 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-6">
          {/* Hero badge */}
          ZAX · 個人 AI 工作站
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          一個人、台南、二手 server,<br />
          <span className="neon-text">把 AI 變成自己用得到的工作站。</span>
        </h1>
        <p className="text-[color:var(--fg-1)] text-base md:text-lg max-w-3xl mb-10 leading-relaxed">
          不跟巨頭打軍備,也不追炫技指標。把每一個跑得起來的 agent、bot、自動化流程,
          收斂成一條主腦線;做給自己用,順手做給朋友用。
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#real-case"
            className="px-5 py-2.5 rounded-md text-sm btn-primary transition"
          >
            看實戰案例
          </a>
          <a
            href="#demo"
            className="px-5 py-2.5 rounded-md text-sm btn-ghost transition"
          >
            看 Phase 1 demo
          </a>
        </div>
      </section>

      {/* ── 2. Real case ── */}
      <section
        id="real-case"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-purple)] mb-3">
          {/* Real case section */}
          02 · REAL CASE
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          fortune LINE bot — 5/29 上線
        </h2>
        <p className="text-[color:var(--fg-1)] mb-10 leading-relaxed max-w-3xl">
          fortune 系統是 ZAX 主腦線上第一個跑到「真實朋友 user」的產品。
          AI 算命 LINE bot — 接 LINE webhook、本地 qwen3 30B 出文、4 主題卡片 +
          三派折疊 + hero 區塊;目前先在朋友開的通訊行落地試用。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">UPSTREAM</div>
            <div className="font-semibold mb-1">本地 qwen3 30B</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              Combo prompt hard contract + extractTopics 4 變體寬鬆 regex,
              讓 30B 穩穩出 4 主題不偷懶。
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

      {/* ── 3. Phase 1 demo ── */}
      <section
        id="demo"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
          {/* Phase 1 demo */}
          03 · PHASE 1 DEMO
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

      {/* ── 4. About ── */}
      <section
        id="about"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-purple)] mb-3">
          {/* About */}
          04 · ABOUT
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About — 一個人,沒有團隊。
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-[color:var(--fg-1)] leading-relaxed">
          <div className="glass rounded-xl p-6">
            <p className="mb-3">
              ZAX 是 一個人的工作站。台南、二手 server、不跟巨頭軍備、
              不堆漂亮數字、不接創投線。
            </p>
            <p>
              寫程式 → 失業 → 寫 AI → 把每天用得到的工具收成一條主腦線。
              工作站 = 自己用 + 順手給朋友用。
            </p>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-3">守則</div>
            <ul className="space-y-2 text-sm">
              <li>· 不寫「處理 N 萬筆」假數字</li>
              <li>· 不堆漂亮 landing 騙看的人</li>
              <li>· 跑得起來、用得到、修得動 — 才會擺上來</li>
              <li>· 朋友先用,陌生人之後再說</li>
              <li>· 失敗會留 log,不會 PR 掉</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. Contact ── */}
      <section
        id="contact"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
          {/* Contact */}
          05 · CONTACT
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          想聊聊 / 想試用 / 想找問題
        </h2>
        <div className="glass rounded-xl p-6 max-w-2xl">
          <div className="space-y-4 text-sm">
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">Email</span>
              <a
                href="mailto:ardery8011@gmail.com"
                className="text-[color:var(--accent-cyan)] hover:underline"
              >
                ardery8011@gmail.com
              </a>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">GitHub</span>
              <a
                href="https://github.com/zaxardery8011-design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--accent-cyan)] hover:underline"
              >
                @zaxardery8011-design
              </a>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">所在</span>
              <span>台南</span>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-[color:var(--border)]">
            <a
              href="mailto:ardery8011@gmail.com?subject=ZAX%20%E8%AB%AE%E8%A9%A2"
              className="inline-block px-5 py-2.5 rounded-md text-sm btn-primary transition"
            >
              寄信給 ZAX
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 py-10 mt-auto border-t border-[color:var(--border)] text-xs text-[color:var(--fg-2)]">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-3">
          <span className="neon-text font-bold tracking-widest">ZAX</span>
          <span>· 個人 AI 工作站 · 台南</span>
          <span className="grow" />
          <span>© 2026 zax.com.tw</span>
        </div>
      </footer>
    </main>
  );
}
