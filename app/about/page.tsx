import Link from "next/link";
import { Card, CTAButton, SectionHeader } from "@/app/components";
import { pageMetadata } from "@/app/lib/metadata";

// 這頁講的全是自述。自述沒有出口就是死巷,所以底下三張卡各自指向站上一個
// 可以自己去看的東西,文字只描述那邊已經有的內容,不在這頁新增任何宣稱。
const exits = [
  {
    eyebrow: "看程式",
    title: "開源專案",
    body:
      "守則寫得再好也是我自己講的。八個 repo 都在 GitHub 上,每張卡的星數與最近更新是每小時回源抓的,上手要貼的指令也印在卡上。",
    cta: "看全部開源專案 →",
    href: "/open-source",
    glow: "cyan",
  },
  {
    eyebrow: "看案子",
    title: "實戰案例",
    body:
      "已經在跑的那幾個:fortune LINE bot、LINC 遠端 VM 群監控、ZAX 會員網、soplint、AI 主腦實驗室。每則寫清楚做了什麼、拿什麼驗。",
    cta: "看實戰案例 →",
    href: "/cases",
    glow: "none",
  },
  {
    eyebrow: "自己跑一次",
    title: "裝一台小主腦",
    body:
      "硬需求只有 Node.js 18 以上跟 git。預設 mock 模式不用錢、不用 API key,跑完 demo 會印出產物路徑,那個檔案就在你電腦上。",
    cta: "看怎麼裝 →",
    href: "/minibrain",
    glow: "purple",
  },
] as const;

export const metadata = pageMetadata({
  title: "關於 ZAX | 白天焊金屬,晚上焊系統",
  description:
    "ZAX 是一個焊工的工作站。本業是精密氬焊(TIG / ASME 等級),後來把同一套「要嘛通過檢驗、要嘛打掉重來」的紀律,寫進一套會自己派工的常駐 AI 主腦。",
  path: "/about",
});

export default function About() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      {/* ── About ── */}
      <section
        id="about"
        className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader
          accent="purple"
          badge="ABOUT"
          title="About — 白天焊金屬,晚上焊系統。"
          titleClassName="mb-6"
        />
        <div className="grid md:grid-cols-2 gap-6 text-[color:var(--fg-1)] leading-relaxed">
          <Card className="p-6">
            <p className="mb-3">
              ZAX 不是一間科技公司,是一個焊工的工作站。本業是精密氬焊(TIG / ASME 等級),焊的是不能漏、要扛壓力的管路——這行沒有「差不多」:要嘛通過檢驗、壓力測試,要嘛打掉重來,沒有騙的空間。
            </p>
            <p>
              後來開始寫 AI,發現寫系統跟焊接是同一回事:跑得起來、扛得住、修得動,才算數。於是把這套匠人驗收的紀律,寫進一套會自己派工、自己記憶、自己修正的常駐 AI 主腦(AIWFF)。一個人,做給自己用,順手給朋友用。
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-3">守則</div>
            <ul className="space-y-2 text-sm">
              <li>· 不寫「處理 N 萬筆」假數字</li>
              <li>· 不堆漂亮 landing 騙看的人</li>
              <li>· 跑得起來、用得到、修得動 — 才會擺上來</li>
              <li>· 朋友先用,陌生人之後再說</li>
              <li>· 失敗會留 log,不會 PR 掉</li>
            </ul>
          </Card>
        </div>
        <Card className="p-6 mt-6 text-[color:var(--fg-1)] leading-relaxed">
          <div className="text-[color:var(--accent-purple)] text-xs tracking-[0.3em] mb-3">
            FDE · AI 落地工程師
          </div>
          <p>
            最近這個角色有了名字:Forward Deployed Engineer(FDE,中文叫 AI 落地工程師)。講白話就是——不待在辦公室裡寫通用工具,而是直接進到你的現場,搞懂你的流程、你最煩的那件事,然後用 AI 幫你做出一套真的會跑、你每天用得到的系統。我做的就是這個。差別是,我還帶著焊接的驗收標準:做不出來、修不動,我不會擺上來給你看。
          </p>
        </Card>

        {/* ── 出口:上面講完了,底下是可以自己去看的 ── */}
        <div className="mt-16">
          <SectionHeader
            badge="NEXT"
            title="上面那些都是我自己講的。底下是你可以自己去看的。"
          >
            擺上來的東西都能點進去查:程式在 GitHub、案子寫了拿什麼驗、小主腦可以裝起來自己跑一次。
          </SectionHeader>

          <div className="grid gap-4 md:grid-cols-3">
            {exits.map((item) => (
              <Card
                as={Link}
                key={item.href}
                href={item.href}
                className="p-6 flex min-h-64 flex-col"
                glow={item.glow}
              >
                <div className="text-xs tracking-[0.24em] text-[color:var(--accent-cyan)] mb-4">
                  {item.eyebrow}
                </div>
                <h2 className="text-xl font-bold mb-3">{item.title}</h2>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  {item.body}
                </p>
                <span className="mt-auto pt-6 text-sm font-semibold text-[color:var(--accent-cyan)]">
                  {item.cta}
                </span>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/contact">要聊你現場那件事 →</CTAButton>
            <CTAButton href="/checklist" variant="ghost">
              先看派工檢查表
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
