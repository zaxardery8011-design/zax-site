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
      "守則寫得再好也是我自己講的。開源頁每一張卡都點得到。張數以那頁為準。每張卡的星數與最近更新是每小時回源抓的,上手要貼的指令也印在卡上。",
    cta: "看全部開源專案 →",
    href: "/open-source",
    glow: "primary",
  },
  {
    eyebrow: "看案子",
    title: "實戰案例",
    body:
      "實際做過的案子:fortune LINE bot(已下線)、LINC 遠端 VM 群監控、ZAX 會員網、soplint、LINE 實驗室。每則寫清楚做了什麼、拿什麼驗。",
    cta: "看實戰案例 →",
    href: "/cases",
    glow: "none",
  },
  {
    eyebrow: "自己跑一次",
    title: "本機任務引擎導入",
    body:
      "硬需求只有 Node.js 18 以上跟 git。預設 mock 不需要 API key。要叫 Claude CLI 真的跑，要用你自己的 Claude 帳號。跑完 demo 會印出產物路徑,那個檔案就在你電腦上。",
    cta: "看怎麼裝 →",
    href: "/minibrain",
    glow: "secondary",
  },
] as const;

export const metadata = pageMetadata({
  title: "關於 ZAX | 讓 AI 真的把事做完，而且能證明它做了",
  description:
    "讓 AI 真的把事做完，而且能證明它做了。這裡的我們是人加他的主腦。人做判斷，AI 協助做事與查證。不賣打包好的腦。",
  path: "/about",
});

export default function About() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      {/* About */}
      <section
        id="about"
        className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader
          accent="secondary"
          badge="ABOUT"
          title="讓 AI 真的把事做完，而且能證明它做了。"
          titleClassName="mb-6"
        />
        <div className="grid md:grid-cols-2 gap-6 text-[color:var(--fg-1)] leading-relaxed">
          <Card className="p-6">
            <p className="mb-3">
              這裡的我們是人加他的主腦。人做判斷，AI 協助做事與查證。不賣打包好的腦。
            </p>
            <p>
              把驗收寫進本機任務引擎。人決定派什麼。AI 做事。做完留檔。跑得起來、扛得住、修得動，才算數。
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-[color:var(--label)] text-xs mb-3">守則</div>
            <ul className="space-y-2 text-sm">
              <li>· 不寫「處理 N 萬筆」假數字</li>
              <li>· 不堆漂亮 landing 騙看的人</li>
              <li>· 跑得起來、用得到、修得動，才擺上來</li>
              <li>· 朋友先用,陌生人之後再說</li>
              <li>· 失敗會留 log,不會 PR 掉</li>
            </ul>
          </Card>
        </div>
        <Card className="p-6 mt-6 text-[color:var(--fg-1)] leading-relaxed">
          <div className="text-[color:var(--label)] text-xs tracking-[0.3em] mb-3">
            FDE · AI 落地工程師
          </div>
          <p>
            最近這個角色有了名字:Forward Deployed Engineer(FDE,中文叫 AI 落地工程師)。人到現場，把一件事做成每天用得到的系統。我做的就是這個。驗收標準是:做不出來、修不動,我不會擺上來給你看。
          </p>
        </Card>

        {/* 出口:上面講完了,底下是可以自己去看的 */}
        <div className="mt-16">
          <SectionHeader
            badge="NEXT"
            title="上面那些都是我自己講的。底下是你可以自己去看的。"
          >
            擺上來的東西都能點進去查:程式在 GitHub、案子寫了拿什麼驗、本機任務引擎可以裝起來自己跑一次。
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
                <div className="text-xs tracking-[0.24em] text-[color:var(--label)] mb-4">
                  {item.eyebrow}
                </div>
                <h2 className="text-xl font-bold mb-3">{item.title}</h2>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  {item.body}
                </p>
                <span className="mt-auto pt-6 text-sm font-semibold text-[color:var(--link)]">
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
        <p className="mt-8 text-sm text-[color:var(--label)]">
          判斷與拍板：隊長；草稿與查證：主腦。
        </p>
      </section>
    </main>
  );
}
