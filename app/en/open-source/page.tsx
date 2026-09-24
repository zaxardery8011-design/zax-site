import { notFound } from "next/navigation";
import { OpenSourceView } from "@/app/components/OpenSourceView";
import { EN_NOT_READY_METADATA, enReady } from "@/app/lib/en-ready";
import { JsonLd, openSourceJsonLd } from "@/app/lib/jsonld";
import { bilingualAlternates, pageMetadata } from "@/app/lib/metadata";
import { layout } from "@/content/en/layout";
import { openSource } from "@/content/en/open-source";

// Copy lives in content/en/open-source.ts; layout in app/components/OpenSourceView.tsx.
// 發布閘（app/lib/en-ready.ts）：這頁或 layout 還有佔位 → 404，不產出含佔位的 HTML。
export const metadata = enReady.openSource
  ? pageMetadata({
      ...openSource.meta,
      path: "/en/open-source",
      languages: bilingualAlternates("/open-source", "/en/open-source"),
      ogLocale: "en_US",
    })
  : EN_NOT_READY_METADATA;

// revalidate must be a static literal here (Next rejects an imported constant).
export const revalidate = 3600;

export default function OpenSourceEn() {
  if (!enReady.openSource) notFound();
  return (
    <>
      <JsonLd data={openSourceJsonLd(openSource, layout.htmlLang)} />
      <OpenSourceView content={openSource} />
    </>
  );
}
