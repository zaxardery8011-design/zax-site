import Link from "next/link";
import { Card, CTAButton, PageHero, SectionHeader } from "@/app/components";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      {/* ── 1. Hero ── */}
      <PageHero
        animated
        id="hero"
        badge="ZAX 台灣隊 | AI 落地工程師 · Forward Deployed Engineer"
        className="pb-28 md:pb-36"
        title={
          <>
            不教你 AI,也不賣你工具——
            <br />
            <span className="neon-text">我幫你把 AI 用在你的生意上。</span>
          </>
        }
        titleClassName="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
        actions={
          <>
            <CTAButton href="/contact">說出你最煩的一件事 →</CTAButton>
            <CTAButton href="/cases" variant="ghost">
              看實戰案例
            </CTAButton>
          </>
        }
      >
        <p>
          你講出最煩、最重複、最花時間的那件事,我做成它自己會跑、自己會答。
          焊接師傅的紀律:跑得起來、扛得住、修得動,才算數——不唬爛、不堆假數字。
        </p>
      </PageHero>

      {/* ── 1B. Our Way ── */}
      <section
        id="our-way"
        className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader
          badge="OUR WAY"
          descriptionClassName="text-base md:text-lg"
          title={<span className="neon-text">站在巨人肩上,長成讓人站的巨人。</span>}
          titleClassName="leading-tight mb-4"
        >
          Stand on giants. Grow into one. Let others stand on you.
        </SectionHeader>
      </section>

      {/* ── A. 你的客戶在哪一格 ── */}
      <section
        id="where-you-are"
        className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader badge="WHERE YOU ARE" title="真正在用 AI 的人,比你想的少很多">
          把全世界的人照「用 AI 的深度」粗分四格,你會發現一件事——絕大多數人,
          包括你的同行、你的客戶,其實都還沒真的開始。
        </SectionHeader>
        {/* 由淺到深,寬度遞減成金字塔感 */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <Card className="p-5 w-full">
            <div className="flex items-baseline justify-between gap-3">
              <div className="font-semibold">⬜ 還沒用</div>
              <div className="text-xs text-[color:var(--fg-2)] whitespace-nowrap">約佔多數人</div>
            </div>
            <div className="text-sm text-[color:var(--fg-1)] mt-1">連碰都沒碰過 AI</div>
          </Card>
          <Card className="p-5 w-full md:w-[80%]">
            <div className="flex items-baseline justify-between gap-3">
              <div className="font-semibold">🟩 偶爾用</div>
              <div className="text-xs text-[color:var(--fg-2)] whitespace-nowrap">數以億計</div>
            </div>
            <div className="text-sm text-[color:var(--fg-1)] mt-1">免費聊天機器人問一下就關掉</div>
          </Card>
          <Card className="p-5 w-full md:w-[60%]">
            <div className="flex items-baseline justify-between gap-3">
              <div className="font-semibold">🟨 付費用</div>
              <div className="text-xs text-[color:var(--fg-2)] whitespace-nowrap">少數</div>
            </div>
            <div className="text-sm text-[color:var(--fg-1)] mt-1">月付幾百塊在用,當工具</div>
          </Card>
          <Card className="p-5 w-full md:w-[42%]" glow="cyan">
            <div className="flex items-baseline justify-between gap-3">
              <div className="font-semibold text-[color:var(--accent-cyan)]">🟥 深度用</div>
              <div className="text-xs text-[color:var(--accent-cyan)] whitespace-nowrap">全球極少數</div>
            </div>
            <div className="text-sm text-[color:var(--fg-1)] mt-1">嵌進每天的工作、靠它做事</div>
          </Card>
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
        className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader
          badge="WHAT I DO"
          descriptionClassName="hidden"
          title="你有這些煩惱,我幫你做成自動的"
          titleClassName="mb-10"
        />
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card className="p-5">
            <div className="text-[color:var(--fg-2)] text-sm mb-2">「我每天要手動整理一堆東西才知道狀況」</div>
            <div className="font-semibold text-[color:var(--accent-cyan)]">→ 自動幫你整理 + 每天把結果丟給你</div>
          </Card>
          <Card className="p-5">
            <div className="text-[color:var(--fg-2)] text-sm mb-2">「客人老問一樣的問題」</div>
            <div className="font-semibold text-[color:var(--accent-cyan)]">→ LINE 上的 AI 工具,客人自己問自己答</div>
          </Card>
          <Card className="p-5">
            <div className="text-[color:var(--fg-2)] text-sm mb-2">「一堆文件/訊息,要用時找不到」</div>
            <div className="font-semibold text-[color:var(--accent-cyan)]">→ 問了就答的知識庫</div>
          </Card>
          <Card className="p-5">
            <div className="text-[color:var(--fg-2)] text-sm mb-2">「想發 IG/YT/官網但沒時間做內容」</div>
            <div className="font-semibold text-[color:var(--accent-cyan)]">→ 半自動內容線(腳本→圖→影片)</div>
          </Card>
          <Card className="p-5 md:col-span-2">
            <div className="text-[color:var(--fg-2)] text-sm mb-2">「我有個流程超煩,不知道 AI 能不能幫」</div>
            <div className="font-semibold text-[color:var(--accent-cyan)]">→ 陪你拆解 + 用 AI 把它變輕</div>
          </Card>
        </div>
        <p className="text-[color:var(--fg-1)] leading-relaxed max-w-3xl">
          不確定哪個適合你?把最煩的那件事講給我聽,我幫你看怎麼做、先做個小的給你試。
        </p>
      </section>

      {/* ── B. 為什麼找落地工程師 (FDE) ── */}
      <section
        id="why-fde"
        className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader badge="WHY FDE" title="為什麼多數公司導入 AI 會失敗">
          業界一個常見的觀察:超過一半的 AI 導入專案,最後沒做出成果。
          原因通常不是技術不夠強——是方法錯了。
        </SectionHeader>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card className="p-5">
            <div className="text-[color:var(--fg-2)] text-xs mb-2">✗ 失敗常態</div>
            <p className="text-sm text-[color:var(--fg-2)] leading-relaxed">
              把 AI 當一般 IT 專案發包出去 → 做完沒人用
            </p>
          </Card>
          <Card className="p-5" glow="cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">✓ 會跑的做法</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              從你最痛、最重複的那個業務流程下手,先做個小的能跑的
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-[color:var(--fg-2)] text-xs mb-2">✗ 失敗常態</div>
            <p className="text-sm text-[color:var(--fg-2)] leading-relaxed">
              期待一次到位、全自動 → 跟現實落差太大,放棄
            </p>
          </Card>
          <Card className="p-5" glow="cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">✓ 會跑的做法</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              有人陪你調流程、改習慣,不是丟個工具就走人
            </p>
          </Card>
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
        className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader badge="THE BRAIN" title="為什麼我做得又快又穩">
          我能這麼快幫你做出來,不是因為我用的 AI 比較神——模型誰都拿得到。
          是因為我替自己養出一支 AI 大腦團隊(AIWFF):它會自己拆事、自己指派 AI 同事去做、
          自己監控有沒有真的跑完,出狀況也會先告警、先修復。
          你付的,是我已經付過的學習成本 + 這套 24 小時運作的驗收紀律。
        </SectionHeader>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card className="p-5" glow="cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">AI FLEET</div>
            <div className="font-semibold mb-1">多機協作的大腦艦隊</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              它不只是一個 AI,而是一支會自己派工、自己監控、自己修復的 AI 大腦團隊。
              核心大腦、第二大腦與多台運算節點,24 小時接力做事。
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">HEALTH WATCH</div>
            <div className="font-semibold mb-1">跨機健康監控</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              我把監控本行「不只錄影,還要確認真的錄到」的習慣,用在 AI 自己身上。
              任一節點異常,系統會自動偵測、提醒,降低人工盯場成本。
            </p>
          </Card>
          <Card className="p-5" glow="purple">
            <div className="text-[color:var(--accent-purple)] text-xs mb-2">SOUL GOVERNANCE</div>
            <div className="font-semibold mb-1">安全與自主的平衡</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              AI 的身份與核心規則有完整性保護,不讓它被亂改;
              但也保留空間,讓系統能提出我一開始沒預見的進化方向。
            </p>
          </Card>
        </div>
        <p className="text-xs text-[color:var(--fg-2)]">
          誠實揭露:AIWFF 是自家長期運作中的大腦艦隊,正在持續長大;
          我只擺跑得起來、能被監控、能被修復的東西。
        </p>
      </section>

      {/* ── 3. 入口卡 ── */}
      <section className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card as={Link} href="/cases" className="p-6" glow="cyan">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">CASES</div>
            <div className="font-semibold mb-1 text-lg">實戰案例 →</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              fortune bot · LINC · 會員網 · social-poster
            </p>
          </Card>
          <Card as={Link} href="/open-source" className="p-6" glow="purple">
            <div className="text-[color:var(--accent-purple)] text-xs mb-2">OPEN SOURCE</div>
            <div className="font-semibold mb-1 text-lg">開源作品 →</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              我們開源的工具:soplint · 桌寵 · 潮痕 · execution-proofs…
            </p>
          </Card>
          <Card
            as="a"
            href="https://line.me/R/ti/p/%40395jcpsb"
            target="_blank"
            rel="noopener"
            className="p-6"
            glow="cyan"
          >
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">LINE BOT</div>
            <div className="font-semibold mb-1 text-lg">體驗 AI 主腦實驗室 →</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              加好友,從 LINE 直接試用主腦實驗室入口
            </p>
          </Card>
          <Card as={Link} href="/about" className="p-6">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-2">ABOUT</div>
            <div className="font-semibold mb-1 text-lg">關於 ZAX →</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              白天焊金屬,晚上焊系統
            </p>
          </Card>
          <Card as={Link} href="/contact" className="p-6" glow="purple">
            <div className="text-[color:var(--accent-purple)] text-xs mb-2">CONTACT</div>
            <div className="font-semibold mb-1 text-lg">聯絡 →</div>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
              找我聊聊 / 試用 / 找問題
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}
