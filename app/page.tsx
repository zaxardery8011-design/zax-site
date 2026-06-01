import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* ── 1. Hero ── */}
      <section
        id="hero"
        className="px-6 pt-24 pb-28 md:pt-32 md:pb-36 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-6">
          {/* Hero badge */}
          ZAX 台灣隊 | AI 工作站
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          ZAX 台灣隊、二手 server,<br />
          <span className="neon-text">把 AI 變成自己用得到的工作站。</span>
        </h1>
        <p className="text-[color:var(--fg-1)] text-base md:text-lg max-w-3xl mb-10 leading-relaxed">
          不跟巨頭打軍備,也不追炫技指標。把每一個跑得起來的 agent、bot、自動化流程,
          收斂成一條主腦線;做給自己用,順手做給朋友用。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/cases"
            className="px-5 py-2.5 rounded-md text-sm btn-primary transition"
          >
            看實戰案例
          </Link>
          <Link
            href="/cases"
            className="px-5 py-2.5 rounded-md text-sm btn-ghost transition"
          >
            看 Phase 1 demo
          </Link>
        </div>
      </section>

      {/* ── 2. The Brain — AIWFF ── */}
      <section
        id="brain"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
          {/* The Brain — AIWFF */}
          THE BRAIN
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          AIWFF — 跑在自己機器上的主腦
        </h2>
        <p className="text-[color:var(--fg-1)] mb-10 leading-relaxed max-w-3xl">
          上面這些 bot、儀表板、SaaS,不是各做各的——背後是同一套常駐 AI 主腦在
          派工、記憶、自我修正。它叫 AIWFF:跑在自己的 Windows + GPU,有長期記憶、
          會自己把需求拆成任務派給 worker、自己檢查對錯、沒人盯著也能持續推進。
          不是雲端套殼,是一套自己編排、自己決策的 Agent OS。
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">BRAIN</div>
            <div className="font-semibold mb-1">常駐主腦 + 派工</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              主腦讀需求 → 拆任務 → 派 worker → 驗收;daemon + watchdog
              24 小時不掛,死了自己重生。
            </p>
          </div>
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">MEMORY · ROUTING</div>
            <div className="font-semibold mb-1">記得住 + 會分流</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              檔案式長期記憶,踩過的坑會記住;跨模型路由——關鍵留強模型,
              雜活丟本地 / 免費,省成本。
            </p>
          </div>
          <div className="glass rounded-xl p-5 glow-purple">
            <div className="text-[color:var(--accent-purple)] text-xs mb-2">EVOLUTION</div>
            <div className="font-semibold mb-1">越用越穩</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              成果自動沉澱回記憶,血淚教訓變規則、規則再碼化寫死——
              這條進化回圈,是市面 agent 框架少見的一層。
            </p>
          </div>
        </div>
        <p className="text-xs text-[color:var(--fg-2)]">
          狀態真實揭露:目前以自用為主(上面的算命、監控、發文都靠它跑出來),
          對外介紹整理中(影片系列 + 操作手冊);幫朋友落地的服務規劃中。
        </p>
      </section>

      {/* ── 3. 入口卡 ── */}
      <section className="px-6 py-20 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/cases" className="glass rounded-xl p-6 glow-cyan transition hover:scale-[1.02]">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">CASES</div>
            <div className="font-semibold mb-1 text-lg">實戰案例 →</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              fortune bot · LINC · 會員網 · social-poster
            </p>
          </Link>
          <Link href="/about" className="glass rounded-xl p-6 transition hover:scale-[1.02]">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">ABOUT</div>
            <div className="font-semibold mb-1 text-lg">關於 ZAX →</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              白天焊金屬,晚上焊系統
            </p>
          </Link>
          <Link href="/contact" className="glass rounded-xl p-6 glow-purple transition hover:scale-[1.02]">
            <div className="text-[color:var(--accent-purple)] text-xs mb-2">CONTACT</div>
            <div className="font-semibold mb-1 text-lg">聯絡 →</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              諮詢 / 試用 / 找問題
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
