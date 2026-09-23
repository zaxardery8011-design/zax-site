import { OpenSourceView } from "@/app/components/OpenSourceView";
import { enReady } from "@/app/lib/en-ready";
import { bilingualAlternates, pageMetadata } from "@/app/lib/metadata";
import { openSource } from "@/content/zh-Hant/open-source";

// Copy lives in content/zh-Hant/open-source.ts; layout in app/components/OpenSourceView.tsx.
export const metadata = pageMetadata({
  ...openSource.meta,
  path: "/open-source",
  // 英文版還沒過發布閘（app/lib/en-ready.ts）就不輸出 hreflang en／x-default，只留 canonical。
  languages: enReady.openSource
    ? bilingualAlternates("/open-source", "/en/open-source")
    : undefined,
});

// revalidate must be a static literal here (Next rejects an imported constant).
export const revalidate = 3600;

export default function OpenSource() {
  return <OpenSourceView content={openSource} />;
}
