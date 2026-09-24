import { Card } from "./Card";
import { CTAButton } from "./CTAButton";
import { SectionHeader } from "./SectionHeader";

// 方案區同時出現在 /services 與 /contact。文字只放這一份,兩頁不會各改各的。
// 逐字搬自 app/(zh)/contact/page.tsx（d110c71）,文案未改。

// 這頁每個行動原本都只有 mailto 一條路。瀏覽器沒設定郵件程式時,mailto 是點了沒反應
// 的靜默失敗,所以每個出口都並排一條 LINE,兩條路指向同一個人。
export const LINE_PERSONAL_URL = "https://line.me/R/ti/p/~zaxvip888";
export const EMAIL = "zaxardery8011@gmail.com";

// /contact 原有的 meta description（逐字）。/services 講的是同一組方案,共用這一句,不另寫。
export const PACKAGES_META_DESCRIPTION =
  "三個方案:LINE 分身架設、本機任務引擎導入、完整版客製大腦。每個方案都寫清楚含什麼、不含什麼,每個出口都有 email 與 LINE 兩條路。";

export const servicePackages = [
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
    name: "本機任務引擎導入",
    summary: "幫願意本機自跑的人,把本機任務引擎（aiwff-runtime）從安裝、mock 驗證走到可理解的使用邊界。",
    bullets: [
      "本機安裝教練與環境檢查",
      "mock 驗證與真實 worker 串接邊界說明",
      "使用手冊導讀與後續自跑方式整理",
    ],
    href:
      "mailto:zaxardery8011@gmail.com?subject=%E6%9C%AC%E6%A9%9F%E4%BB%BB%E5%8B%99%E5%BC%95%E6%93%8E%E5%B0%8E%E5%85%A5%E8%AB%AE%E8%A9%A2",
    cta: "詢問本機任務引擎導入",
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

export function ServicePackages() {
  return (
    <section
      id="packages"
      className="px-5 sm:px-6 pt-20 pb-12 max-w-5xl mx-auto w-full"
    >
      <SectionHeader
        badge="PACKAGES"
        title="你可以從哪一層開始"
        titleClassName="mb-8"
      >
        不一定要一次做完整套。先從 LINE 分身、本機任務引擎導入,或直接做客製大腦都可以。
      </SectionHeader>

      <div className="grid gap-4 lg:grid-cols-3">
        {servicePackages.map((item) => (
          <Card key={item.code} className="p-6 flex min-h-[29rem] flex-col">
            <div className="text-xs tracking-[0.24em] text-[color:var(--label)] mb-4">
              {item.code}
            </div>
            <h2 className="text-xl font-bold mb-3">{item.name}</h2>
            <p className="text-sm text-[color:var(--fg-1)] leading-relaxed mb-5">
              {item.summary}
            </p>
            <ul className="space-y-2 text-sm text-[color:var(--fg-1)] leading-relaxed mb-5">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-[color:var(--label)]">-</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <p className="text-sm font-semibold text-[color:var(--fg-0)] mb-4">
                價格：洽詢
              </p>
              <CTAButton href={item.href} className="block w-full text-center">
                {item.cta}
              </CTAButton>
              <CTAButton
                href={LINE_PERSONAL_URL}
                target="_blank"
                variant="ghost"
                className="mt-3 block w-full text-center"
              >
                或加 LINE 直接問 →
              </CTAButton>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-5 text-sm text-[color:var(--fg-1)] leading-relaxed">
        寄信鍵如果點下去沒反應,是你的瀏覽器沒接郵件程式,不是壞掉。直接把信寄到{" "}
        <span className="font-mono text-[color:var(--fg-0)]">{EMAIL}</span>
        ,或走上面那條 LINE。兩條都是我本人收。
      </p>

      <p className="mt-5 text-xs text-[color:var(--fg-2)] leading-relaxed">
        交付驗收後 7 天內免費微調,超過另計；LLM/API 費用由客戶自己的帳號負擔,不含在報價內；簽約與發票主體目前為臻安鑫實業社。
      </p>
    </section>
  );
}
