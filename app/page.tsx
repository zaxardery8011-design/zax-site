import Link from "next/link";
import { Card, CTAButton, PageHero, SectionHeader } from "@/app/components";

const LINE_URL = "https://line.me/R/ti/p/@395jcpsb";

const featuredCases = [
  {
    name: "soplint",
    meta: "★ 40 · MIT",
    href: "https://github.com/zaxardery8011-design/soplint",
    pitch:
      "對 AI 工作節點的 SOP 執行做靜態規則審計,治長時間運行的「指令漂移」與工作紀律失修。",
    method:
      "把 SOP 落成可掃描的靜態規則,對節點產出逐條審計,抓出偏離。",
    result: "已開源上架、目前 star 前列。",
    glow: "cyan",
  },
  {
    name: "tidetrace / 潮痕",
    meta: "★ 5 · MIT",
    href: "https://github.com/zaxardery8011-design/tidetrace",
    pitch:
      "Threads 社群輿情監控 Chrome 擴充:本地關鍵字高亮 + 回覆狀態追蹤 + BYOK 多 LLM 自訂回覆生成。",
    method:
      "做成 Chrome 擴充,在地端跑關鍵字高亮與回覆追蹤,LLM 用 BYOK 自帶金鑰。",
    result: "已開源上架,功能鏈完整可裝來用。",
    glow: "none",
  },
  {
    name: "execution-proofs",
    meta: "★ 3 · MIT",
    href: "https://github.com/zaxardery8011-design/execution-proofs",
    pitch:
      "別讓 AI 說謊!基於 MCP 的本地遙測閘道,讓自動化 Client 回報「完成」時必須用真實檔案與時間戳記證明。",
    method:
      "做成 MCP 本地遙測閘道,攔下「完成」宣稱、要求附上真實檔案與時間戳。",
    result: "已開源上架,把「可查證」變成可裝的護欄。",
    glow: "purple",
  },
] as const;

const routeCards = [
  {
    eyebrow: "路線 A · 我想自己裝",
    title: "DIY：clone 下來自己跑",
    body: "會開終端機、會複製貼上就夠。預設 mock 模式免費跑通,一段 prompt 交給你的 AI coding agent 自動裝好。",
    cta: "看一鍵安裝 →",
    href: "/minibrain",
    glow: "cyan",
  },
  {
    eyebrow: "路線 B · 我想先玩 / 要人幫我做",
    title: "先體驗：LINE 主腦實驗室",
    body: "懶得碰命令列、想先確認合不合用——直接在 LINE 跟一個跑起來的主腦聊,體驗過再決定。或找我們幫你導入完整版。",
    cta: "加 LINE 先體驗 →",
    href: LINE_URL,
    glow: "purple",
  },
] as const;

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <PageHero
        animated
        id="hero"
        badge="AI 工作節點 · 開源 · 可查證"
        className="pb-24 md:pb-32"
        title={
          <>
            讓 AI 真的把事做完,
            <br />
            <span className="neon-text">而且能證明它做了。</span>
          </>
        }
        titleClassName="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
        actions={
          <>
            <CTAButton href="/minibrain">幫自己裝一台小主腦 →</CTAButton>
            <CTAButton href={LINE_URL} target="_blank" variant="ghost">
              不想裝？LINE 先體驗
            </CTAButton>
          </>
        }
      >
        <p>
          我們做在你本機跑得動的 AI 工具:丟一件事,背景跑完,
          結果與過程都是你電腦上的檔案。想自己裝一台?想先體驗?
          兩條路都給你。
        </p>
      </PageHero>

      <section
        id="minibrain"
        className="px-5 sm:px-6 py-16 md:py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader
          badge="MINI BRAIN"
          title="小主腦：裝在你自己電腦上的小型 AI 主腦"
        >
          丟一件事給它,背景跑完,結果推回來,瀏覽器看進度。所有狀態都留在你電腦裡,
          不上別人的伺服器。開源、MIT、免費跑通。
        </SectionHeader>

        <div className="grid gap-4 md:grid-cols-2">
          {routeCards.map((item) => {
            const isExternal = item.href.startsWith("https://");

            return (
              <Card
                as={isExternal ? "a" : Link}
                key={item.title}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="p-6 sm:p-7 flex min-h-72 flex-col"
                glow={item.glow}
              >
                <div className="text-xs tracking-[0.24em] text-[color:var(--accent-cyan)] mb-4">
                  {item.eyebrow}
                </div>
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed mb-6">
                  {item.body}
                </p>
                <span className="mt-auto text-sm font-semibold text-[color:var(--accent-cyan)]">
                  {item.cta}
                </span>
              </Card>
            );
          })}
        </div>
      </section>

      <section
        id="cases"
        className="px-5 sm:px-6 py-16 md:py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader
          badge="FEATURED CASES"
          title="精選案例：工作節點自己做出來的開源工具"
        >
          這些不是概念稿——是 AIWFF 工作節點實際迭代、放上 GitHub 開源的專案。
          星數與描述取自 open-source 頁。
        </SectionHeader>

        <div className="grid gap-4 lg:grid-cols-3">
          {featuredCases.map((item) => (
            <Card
              as="a"
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 flex min-h-[27rem] flex-col"
              glow={item.glow}
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <span className="shrink-0 rounded border border-[color:var(--border)] px-2 py-1 text-xs text-[color:var(--fg-1)]">
                  {item.meta}
                </span>
              </div>
              <p className="text-sm text-[color:var(--fg-1)] leading-relaxed mb-5">
                {item.pitch}
              </p>
              <div className="space-y-3 text-sm text-[color:var(--fg-1)] leading-relaxed">
                <p>
                  <span className="text-[color:var(--accent-cyan)]">怎麼做：</span>
                  {item.method}
                </p>
                <p>
                  <span className="text-[color:var(--accent-purple)]">成果：</span>
                  {item.result}
                </p>
              </div>
              <span className="mt-auto pt-6 text-sm font-semibold text-[color:var(--accent-cyan)]">
                看 repo →
              </span>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <CTAButton href="/open-source" variant="ghost">
            看全部開源專案 →
          </CTAButton>
        </div>
      </section>

      <section
        id="line"
        className="px-5 sm:px-6 py-16 md:py-20 max-w-5xl mx-auto w-full"
      >
        <div className="grid gap-6 rounded-xl border border-[color:var(--accent-cyan)]/30 bg-[color:var(--accent-cyan)]/10 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
              LINE MAIN BRAIN LAB
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              不想自己裝？在 LINE 先跟主腦聊聊
            </h2>
            <p className="text-[color:var(--fg-1)] leading-relaxed max-w-3xl">
              加 LINE 主腦實驗室,直接體驗一個跑起來的主腦怎麼回應你——
              體驗過再決定要自己裝,還是讓我們幫你導入。
            </p>
          </div>
          <CTAButton
            href={LINE_URL}
            target="_blank"
            className="w-full text-center sm:w-fit"
          >
            加 LINE 主腦實驗室 →
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
