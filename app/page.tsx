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
          ZAX 台灣隊 | AI 落地工程師 · Forward Deployed Engineer
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          不教你 AI,也不賣你工具——<br />
          <span className="neon-text">我幫你把 AI 用在你的生意上。</span>
        </h1>
        <p className="text-[color:var(--fg-1)] text-base md:text-lg max-w-3xl mb-10 leading-relaxed">
          你講出最煩、最重複、最花時間的那件事,我做成它自己會跑、自己會答。
          焊接師傅的紀律:跑得起來、扛得住、修得動,才算數——不唬爛、不堆假數字。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-md text-sm btn-primary transition"
          >
            說出你最煩的一件事 →
          </Link>
          <Link
            href="/cases"
            className="px-5 py-2.5 rounded-md text-sm btn-ghost transition"
          >
            看實戰案例
          </Link>
        </div>
      </section>

      {/* ── A. 你的客戶在哪一格 ── */}
      <section
        id="where-you-are"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
          {/* Where You Are */}
          WHERE YOU ARE
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          真正在用 AI 的人,比你想的少很多
        </h2>
        <p className="text-[color:var(--fg-1)] mb-10 leading-relaxed max-w-3xl">
          把全世界的人照「用 AI 的深度」粗分四格,你會發現一件事——絕大多數人,
          包括你的同行、你的客戶,其實都還沒真的開始。
        </p>
        {/* 由淺到深,寬度遞減成金字塔感 */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="glass rounded-xl p-5 w-full">
            <div className="flex items-baseline justify-between gap-3">
              <div className="font-semibold">⬜ 還沒用</div>
              <div className="text-xs text-[color:var(--fg-2)] whitespace-nowrap">約佔多數人</div>
            </div>
            <div className="text-sm text-[color:var(--fg-1)] mt-1">連碰都沒碰過 AI</div>
          </div>
          <div className="glass rounded-xl p-5 w-full md:w-[80%]">
            <div className="flex items-baseline justify-between gap-3">
              <div className="font-semibold">🟩 偶爾用</div>
              <div className="text-xs text-[color:var(--fg-2)] whitespace-nowrap">數以億計</div>
            </div>
            <div className="text-sm text-[color:var(--fg-1)] mt-1">免費聊天機器人問一下就關掉</div>
          </div>
          <div className="glass rounded-xl p-5 w-full md:w-[60%]">
            <div className="flex items-baseline justify-between gap-3">
              <div className="font-semibold">🟨 付費用</div>
              <div className="text-xs text-[color:var(--fg-2)] whitespace-nowrap">少數</div>
            </div>
            <div className="text-sm text-[color:var(--fg-1)] mt-1">月付幾百塊在用,當工具</div>
          </div>
          <div className="glass rounded-xl p-5 w-full md:w-[42%] glow-cyan">
            <div className="flex items-baseline justify-between gap-3">
              <div className="font-semibold text-[color:var(--accent-cyan)]">🟥 深度用</div>
              <div className="text-xs text-[color:var(--accent-cyan)] whitespace-nowrap">全球極少數</div>
            </div>
            <div className="text-sm text-[color:var(--fg-1)] mt-1">嵌進每天的工作、靠它做事</div>
          </div>
        </div>
        <p className="text-[color:var(--fg-1)] leading-relaxed max-w-3xl">
          你的客戶、你的對手,幾乎都在前兩格。ZAX 在最後一格——而且不只是用,
          是替自己造工具、24 小時讓系統替我做事。我們的工作,就是把你從「偶爾問一下」
          推進到「AI 真的在幫你賺錢」的那一格。
        </p>
      </section>

      {/* ── 2. 我能幫你做什麼 ── */}
      <section
        id="what-i-do"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
          {/* What I Do */}
          WHAT I DO
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          你有這些煩惱,我幫你做成自動的
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--fg-2)] text-sm mb-2">「我每天要手動整理一堆東西才知道狀況」</div>
            <div className="font-semibold text-[color:var(--accent-cyan)]">→ 自動幫你整理 + 每天把結果丟給你</div>
          </div>
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--fg-2)] text-sm mb-2">「客人老問一樣的問題」</div>
            <div className="font-semibold text-[color:var(--accent-cyan)]">→ LINE 上的 AI 工具,客人自己問自己答</div>
          </div>
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--fg-2)] text-sm mb-2">「一堆文件/訊息,要用時找不到」</div>
            <div className="font-semibold text-[color:var(--accent-cyan)]">→ 問了就答的知識庫</div>
          </div>
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--fg-2)] text-sm mb-2">「想發 IG/YT/官網但沒時間做內容」</div>
            <div className="font-semibold text-[color:var(--accent-cyan)]">→ 半自動內容線(腳本→圖→影片)</div>
          </div>
          <div className="glass rounded-xl p-5 md:col-span-2">
            <div className="text-[color:var(--fg-2)] text-sm mb-2">「我有個流程超煩,不知道 AI 能不能幫」</div>
            <div className="font-semibold text-[color:var(--accent-cyan)]">→ 陪你拆解 + 用 AI 把它變輕</div>
          </div>
        </div>
        <p className="text-[color:var(--fg-1)] leading-relaxed max-w-3xl">
          不確定哪個適合你?把最煩的那件事講給我聽,我幫你看怎麼做、先做個小的給你試。
        </p>
      </section>

      {/* ── B. 為什麼找落地工程師 (FDE) ── */}
      <section
        id="why-fde"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
          {/* Why FDE */}
          WHY FDE
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          為什麼多數公司導入 AI 會失敗
        </h2>
        <p className="text-[color:var(--fg-1)] mb-10 leading-relaxed max-w-3xl">
          業界一個常見的觀察:超過一半的 AI 導入專案,最後沒做出成果。
          原因通常不是技術不夠強——是方法錯了。
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--fg-2)] text-xs mb-2">✗ 失敗常態</div>
            <p className="text-sm text-[color:var(--fg-2)] leading-relaxed">
              把 AI 當一般 IT 專案發包出去 → 做完沒人用
            </p>
          </div>
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">✓ 會跑的做法</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              從你最痛、最重複的那個業務流程下手,先做個小的能跑的
            </p>
          </div>
          <div className="glass rounded-xl p-5">
            <div className="text-[color:var(--fg-2)] text-xs mb-2">✗ 失敗常態</div>
            <p className="text-sm text-[color:var(--fg-2)] leading-relaxed">
              期待一次到位、全自動 → 跟現實落差太大,放棄
            </p>
          </div>
          <div className="glass rounded-xl p-5 glow-cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">✓ 會跑的做法</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              有人陪你調流程、改習慣,不是丟個工具就走人
            </p>
          </div>
        </div>
        <p className="text-[color:var(--fg-1)] leading-relaxed max-w-3xl">
          這就是 FDE(Forward Deployed Engineer,前置部署工程師)在做的事——進你的現場,
          從你的生意出發,做出真的會跑的東西。這個角色,OpenAI、Anthropic 都把它當成
          AI 真正落地的關鍵。ZAX 做的,就是台灣中小生意的 FDE:
          <span className="text-[color:var(--accent-cyan)]">不教你 AI、不賣你工具,陪你把它用在你的生意上。</span>
        </p>
      </section>

      {/* ── 3. The Brain — AIWFF ── */}
      <section
        id="brain"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
          {/* The Brain — AIWFF */}
          THE BRAIN
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          為什麼我做得又快又穩
        </h2>
        <p className="text-[color:var(--fg-1)] mb-10 leading-relaxed max-w-3xl">
          我能這麼快幫你做出來,不是因為我用的 AI 比較神——模型誰都拿得到。
          是因為我替自己建了一套常駐 AI 系統(AIWFF),這半年它幫我跑算命 bot、監控、自動發文,
          也讓我把每個踩過的坑都變成規則、現成的零件能直接改給你用。
          你付的,是我已經付過的學習成本 + 那套驗收紀律——你跳過從零摸索跟天天維護的痛。
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
          誠實揭露:目前系統以自用為主、還在持續變穩;幫朋友落地的服務正在開放。
          我只擺跑得起來的東西,不堆漂亮 landing 騙你。
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
              找我聊聊 / 試用 / 找問題
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
