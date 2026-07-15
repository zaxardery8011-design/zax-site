import { Card, CTAButton, SectionHeader } from "@/app/components";

const servicePackages = [
  {
    code: "P-line",
    name: "LINE 分身架設",
    summary: "把品牌或個人資料接進 LINE bot,先做一個可上線、可自己維護的 AI 分身。",
    bullets: [
      "協助申請 Messaging API 與 webhook 上線",
      "填寫 env、persona、knowledge 基礎資料",
      "交付使用教學,不含後續代管維運",
    ],
    href:
      "mailto:zaxardery8011@gmail.com?subject=LINE%E5%88%86%E8%BA%AB%E6%9E%B6%E8%A8%AD%E8%AB%AE%E8%A9%A2",
    cta: "詢問 LINE 分身架設",
  },
  {
    code: "P-runtime",
    name: "小主腦導入",
    summary: "幫願意本機自跑的人,把小主腦從安裝、mock 驗證走到可理解的使用邊界。",
    bullets: [
      "本機安裝教練與環境檢查",
      "mock 驗證與真實 worker 串接邊界說明",
      "使用手冊導讀與後續自跑方式整理",
    ],
    href:
      "mailto:zaxardery8011@gmail.com?subject=%E5%B0%8F%E4%B8%BB%E8%85%A6%E5%B0%8E%E5%85%A5%E8%AB%AE%E8%A9%A2",
    cta: "詢問小主腦導入",
  },
  {
    code: "P-full",
    name: "完整版客製大腦",
    summary: "把多節點、規則與既有流程接起來,做成可複製、可查證的專案制工作腦。",
    bullets: [
      "多節點、規則與既有流程客製串接",
      "客製 SOP 與工作節點邊界整理",
      "可附 soplint 紀律現況售前評估",
    ],
    href:
      "mailto:zaxardery8011@gmail.com?subject=%E5%AE%8C%E6%95%B4%E7%89%88%E5%AE%A2%E8%A3%BD%E8%AB%AE%E8%A9%A2",
    cta: "詢問完整版客製",
  },
] as const;

export default function Contact() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <section
        id="packages"
        className="px-5 sm:px-6 pt-20 pb-12 max-w-5xl mx-auto w-full"
      >
        <SectionHeader
          badge="PACKAGES"
          title="你可以從哪一層開始"
          titleClassName="mb-8"
        >
          不一定要一次做完整套。先從 LINE 分身、小主腦導入,或直接做客製大腦都可以。
        </SectionHeader>

        <div className="grid gap-4 lg:grid-cols-3">
          {servicePackages.map((item) => (
            <Card key={item.code} className="p-6 flex min-h-[29rem] flex-col">
              <div className="text-xs tracking-[0.24em] text-[color:var(--accent-cyan)] mb-4">
                {item.code}
              </div>
              <h2 className="text-xl font-bold mb-3">{item.name}</h2>
              <p className="text-sm text-[color:var(--fg-1)] leading-relaxed mb-5">
                {item.summary}
              </p>
              <ul className="space-y-2 text-sm text-[color:var(--fg-1)] leading-relaxed mb-5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-[color:var(--accent-cyan)]">-</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <p className="text-sm font-semibold text-[color:var(--fg-0)] mb-4">
                  價格：洽詢
                </p>
                <CTAButton href={item.href} className="w-full justify-center">
                  {item.cta}
                </CTAButton>
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-5 text-xs text-[color:var(--fg-2)] leading-relaxed">
          交付驗收後 7 天內免費微調,超過另計；LLM/API 費用由客戶自己的帳號負擔,不含在報價內；簽約與發票主體目前為臻安鑫實業社。
        </p>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="px-5 sm:px-6 pt-12 pb-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader
          badge="CONTACT"
          title="不用先想清楚要什麼——把最煩的一件事講給我,我幫你看。"
          titleClassName="mb-6"
        />
        <Card className="p-6 max-w-2xl">
          <div className="space-y-4 text-sm">
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">Email</span>
              <a
                href="mailto:zaxardery8011@gmail.com"
                className="text-[color:var(--accent-cyan)] hover:underline"
              >
                zaxardery8011@gmail.com
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
              <span className="text-[color:var(--fg-2)] w-20 text-xs">LINE 個人</span>
              <a href="https://line.me/R/ti/p/~zaxvip888" target="_blank" rel="noopener noreferrer" className="text-[color:var(--accent-cyan)] hover:underline">~zaxvip888</a>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">LINE 實驗室</span>
              <a href="https://line.me/R/ti/p/@395jcpsb" target="_blank" rel="noopener noreferrer" className="text-[color:var(--accent-cyan)] hover:underline">@395jcpsb</a>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">所在</span>
              <span>台灣</span>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-[color:var(--border)]">
            <CTAButton
              href="mailto:zaxardery8011@gmail.com?subject=ZAX%20%E5%8F%B0%E7%81%A3%E9%9A%8A%20%E8%AB%AE%E8%A9%A2"
              className="inline-block"
            >
              寄信給 ZAX
            </CTAButton>
          </div>
        </Card>
      </section>
    </main>
  );
}
