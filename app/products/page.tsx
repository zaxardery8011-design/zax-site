import fs from "fs";
import path from "path";
import Link from "next/link";

// build 時讀 public/products/gallery 取全部圖檔名 (server component)
function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "products", "gallery");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .sort();
  } catch {
    return [];
  }
}

const categories = [
  { name: "監控設備", desc: "XVR/NVR/Wi-Fi 套組,東訊/陞泰/漢威——台灣製造、非陸製優先,資安看得見" },
  { name: "網路設備", desc: "從佈線到設備,把網路做到穩、不斷線" },
  { name: "電腦 PC", desc: "文書、遊戲、工作站客製組裝,挑得到、修得動" },
  { name: "光纖系列", desc: "光纖線材與週邊,長距離也清晰" },
  { name: "遊戲系列", desc: "遊戲主機/週邊,玩家在地補給" },
  { name: "客製化專區", desc: "你的場域、你的需求,量身規劃實裝方案" },
];

export default function Products() {
  const images = getGalleryImages();

  return (
    <main className="flex flex-col w-full">
      {/* ── Hero ── */}
      <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-20 max-w-5xl mx-auto w-full">
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-6">
          {/* Products */}
          PRODUCTS · 在地工程
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="neon-text">監控 · 網路 · 電腦 · 光纖 · 遊戲</span>
          <br />
          在地實裝,台灣製造優先
        </h1>
        <p className="text-[color:var(--fg-1)] text-base md:text-lg max-w-3xl leading-relaxed">
          從監控設備到電腦組裝,焊接師傅的實裝紀律:裝得穩、扛得住、修得動。要嘛通過驗收,要嘛打掉重做——這套標準,我也用在你的設備上。
        </p>
      </section>

      {/* ── 分類卡片牆 ── */}
      <section className="px-6 py-12 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((c) => (
            <div key={c.name} className="glass rounded-xl p-5">
              <div className="font-semibold mb-2 text-lg text-[color:var(--accent-cyan)]">
                {c.name}
              </div>
              <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 品牌條 ── */}
      <section className="px-6 py-12 max-w-5xl mx-auto w-full">
        <div className="glass rounded-xl p-6">
          <div className="text-[color:var(--accent-purple)] text-xs tracking-[0.3em] mb-4">
            合作品牌
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="text-sm px-3 py-1.5 rounded-md btn-ghost">
              東訊 TECOM(台灣製造)
            </span>
            <span className="text-sm px-3 py-1.5 rounded-md btn-ghost">
              陞泰 AVTECH(台灣製造)
            </span>
            <span className="text-sm px-3 py-1.5 rounded-md btn-ghost">
              漢威聯合 Honeywell(非陸製)
            </span>
          </div>
          <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
            監控設備優先選台製/非陸製——資安與售後,在地的才安心。
          </p>
        </div>
      </section>

      {/* ── 實裝實拍藝廊 ── */}
      <section className="px-6 py-12 max-w-5xl mx-auto w-full">
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
          {/* Gallery */}
          實裝實拍
        </div>
        <p className="text-[color:var(--fg-1)] mb-8 leading-relaxed max-w-3xl">
          以下是實際出貨/施工的設備照,不是型錄美圖。
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {images.map((name) => (
            <div
              key={name}
              className="glass rounded-lg overflow-hidden aspect-square"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/products/gallery/${name}`}
                alt="ZAX 實裝實拍設備照"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-20 max-w-5xl mx-auto w-full">
        <div className="glass rounded-xl p-8 glow-cyan">
          <p className="text-[color:var(--fg-0)] text-lg md:text-xl mb-6 leading-relaxed">
            要裝監控、組電腦、拉網路光纖?把你的場域跟需求講給我,我幫你規劃、報價。
          </p>
          <Link
            href="/contact"
            className="inline-block px-5 py-2.5 rounded-md text-sm btn-primary transition"
          >
            找我估 / 詢價 →
          </Link>
        </div>
      </section>
    </main>
  );
}
