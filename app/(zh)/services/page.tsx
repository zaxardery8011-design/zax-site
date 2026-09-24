import { CTAButton } from "@/app/components";
import {
  PACKAGES_META_DESCRIPTION,
  ServicePackages,
} from "@/app/components/ServicePackages";
import { pageMetadata } from "@/app/lib/metadata";
import { layout } from "@/content/zh-Hant/layout";

// 首頁寫「服務方案頁分三層寫」,但方案原本只放在 /contact,AI 助理照首頁找不到這頁只能猜。
// 這裡給方案一個獨立網址；文字與 /contact 共用 ServicePackages 同一份,未改字。
// 頁尾聯絡鈕用導覽列既有的 headerCta（字與連結都從 content 來,不另寫）。
// 中文限定：英文版不做,不進 EN_PAIRS,sitemap 只從中文導覽列帶到這頁。
export const metadata = pageMetadata({
  title: "服務方案 | ZAX",
  description: PACKAGES_META_DESCRIPTION,
  path: "/services",
});

export default function Services() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <ServicePackages />
      <section className="px-5 sm:px-6 pt-4 pb-20 max-w-5xl mx-auto w-full">
        <CTAButton href={layout.headerCta.href} className="inline-block text-center">
          {layout.headerCta.label}
        </CTAButton>
      </section>
    </main>
  );
}
