import { Card, CTAButton, PageHero, SectionHeader } from "@/app/components";

const serviceItems = [
  {
    title: "監控器材經銷批發",
    desc: "提供監控器材供應、批發與現場工程銜接，服務台南及南部地區。",
  },
  {
    title: "IP 網路型影音保全對講機系統",
    desc: "整合影像、門禁、對講與保全需求，協助場域建立可維護的網路型系統。",
  },
  {
    title: "商用音響設備系統",
    desc: "依場域規模規劃商用音響、廣播與周邊設備配置。",
  },
  {
    title: "周邊配件",
    desc: "供應監控、影音對講、商用音響相關周邊配件與耗材。",
  },
  {
    title: "工程服務",
    desc: "從需求確認、設備配置到現場建置，提供南部地區工程服務。",
  },
];

const brands = [
  {
    name: "欣永成科技 BENELINK",
    badge: "一級代理",
    desc: "合利鑫科技代理品牌，支援監控與相關產品線供應。",
  },
  {
    name: "優美達 UMDEYE 對講機系統",
    badge: "代理品牌",
    desc: "IP 網路型影音對講系統,室內機、門口機到管理機同一套架構。實際供應型號列在下方產品線。",
  },
];

// 這六個型號原本擠在上面那張品牌卡的一行敘述裡,產品線區塊擺的是四個永遠不會填上的
// 灰色骨架。真東西在,只是沒被擺到該擺的位置。規格與報價不寫死在頁面上,問現場才準。
const productLine = [
  { model: "M10", name: "10 吋室內機", group: "室內機" },
  { model: "P7", name: "7 吋室內機", group: "室內機" },
  { model: "U60", name: "門口機", group: "門口機" },
  { model: "U2000", name: "大門口機", group: "門口機" },
  { model: "D9000", name: "管理機", group: "管理中心" },
  { model: "U70", name: "緊急對講機", group: "緊急對講" },
];

const contactItems = [
  { label: "電話", value: "06-2703600", href: "tel:062703600" },
  { label: "Email", value: "hlc2703600@gmail.com", href: "mailto:hlc2703600@gmail.com" },
  { label: "LINE ID", value: "@hlc2703600", href: "https://line.me/R/ti/p/@hlc2703600" },
  { label: "Facebook", value: "合利鑫科技", href: "https://www.facebook.com/HLC2703600" },
  { label: "地址", value: "台南市仁德區中山路730號(仁德家樂福對面)" },
  { label: "營業時間", value: "週一至週五 08:30–18:00(週末公休)" },
  { label: "服務範圍", value: "台南為主，含南部地區" },
];

export default function Products() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <PageHero
        badge="PRODUCTS · 合利鑫科技"
        title={
          <>
            <span className="neon-text">合利鑫科技有限公司</span>
            <br />
            監控器材 · 影音對講 · 商用音響 · 工程服務
          </>
        }
      >
        <p className="mb-6">
          ZAX 提供 AI 落地服務，硬體產品線由關係企業「合利鑫科技」供應。
          這裡把分工講清楚：ZAX 做服務落地，合利鑫做產品供應與工程建置。
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-[color:var(--fg-1)]">
          <span className="px-3 py-1.5 rounded-md btn-ghost">統一編號 64906121</span>
          <span className="px-3 py-1.5 rounded-md btn-ghost">設立 2017 年</span>
          <span className="px-3 py-1.5 rounded-md btn-ghost">台南與南部地區服務</span>
        </div>
      </PageHero>

      <section className="px-5 sm:px-6 py-12 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-4">
          {serviceItems.map((item) => (
            <Card key={item.title} className="p-5">
              <div className="font-semibold mb-2 text-lg text-[color:var(--accent-cyan)]">
                {item.title}
              </div>
              <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 max-w-5xl mx-auto w-full">
        <SectionHeader
          accent="purple"
          badge="AUTHORIZED BRANDS"
          headingClassName="text-2xl md:text-3xl font-bold mb-8"
          title="代理品牌"
        />
        <div className="grid md:grid-cols-2 gap-4">
          {brands.map((brand) => (
            <Card key={brand.name} className="p-6">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-xl font-bold">{brand.name}</h3>
                <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--accent-cyan)]/15 text-[color:var(--accent-cyan)] border border-[color:var(--accent-cyan)]/30">
                  {brand.badge}
                </span>
              </div>
              <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                {brand.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 max-w-5xl mx-auto w-full">
        <Card className="p-6" glow="cyan">
          <SectionHeader
            badge="PROJECTS"
            descriptionClassName="hidden"
            headingClassName="text-2xl md:text-3xl font-bold mb-4"
            title="南部工程實績"
          />
          <p className="text-[color:var(--fg-1)] leading-relaxed max-w-3xl">
            服務台南及南部地區社區大樓、店面、工廠、校園等場域之監控、影音對講與廣播系統建置。
            個案的業主名稱與金額不在這頁揭露。要確認做過哪些場域,直接打電話問比較快。
          </p>
        </Card>
      </section>

      <section className="px-5 sm:px-6 py-12 max-w-5xl mx-auto w-full">
        <SectionHeader
          badge="PRODUCT LINE"
          descriptionClassName="mb-8"
          headingClassName="text-2xl md:text-3xl font-bold mb-4"
          title="產品線 · 優美達 UMDEYE"
        >
          下面六台是這條線目前實際供應的型號。沒列出來的品項不代表調不到,問了才知道。
          規格與報價會隨場域配置不同,以現場確認為準,不在這頁寫死。
        </SectionHeader>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {productLine.map((item) => (
            <Card key={item.model} className="p-5">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-2xl font-bold text-[color:var(--accent-cyan)]">
                  {item.model}
                </span>
                {item.group === item.name ? null : (
                  <span className="text-xs text-[color:var(--fg-2)]">{item.group}</span>
                )}
              </div>
              <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                {item.name}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-[color:var(--fg-1)]">
          要問哪一台,直接把型號傳到{" "}
          <a
            href="https://line.me/R/ti/p/@hlc2703600"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--accent-cyan)] hover:underline"
          >
            LINE @hlc2703600
          </a>
          ,或用下面的電話與 Email。
        </p>
      </section>

      <section className="px-5 sm:px-6 py-12 max-w-5xl mx-auto w-full">
        <Card className="p-6">
          <div className="text-xs tracking-[0.3em] text-[color:var(--accent-purple)] mb-4">CONTACT</div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {contactItems.map((item) => (
              <div key={item.label} className="flex gap-3">
                <span className="text-[color:var(--fg-2)] w-20 shrink-0 text-xs">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[color:var(--accent-cyan)] hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-[color:var(--fg-1)]">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full">
        <Card className="p-8" glow="purple">
          <p className="text-[color:var(--fg-0)] text-lg md:text-xl mb-6 leading-relaxed">
            需要監控器材、影音對講、商用音響或南部工程服務，可直接聯絡合利鑫科技確認產品與現場需求。
          </p>
          <CTAButton
            href="https://line.me/R/ti/p/@hlc2703600"
            target="_blank"
            className="inline-block"
          >
            詢問產品與工程服務 →
          </CTAButton>
        </Card>
      </section>
    </main>
  );
}
