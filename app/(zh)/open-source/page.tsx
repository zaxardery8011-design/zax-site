import { OpenSourceView } from "@/app/components/OpenSourceView";
import { bilingualAlternates, pageMetadata } from "@/app/lib/metadata";
import { openSource } from "@/content/zh-Hant/open-source";

// Copy lives in content/zh-Hant/open-source.ts; layout in app/components/OpenSourceView.tsx.
export const metadata = pageMetadata({
  ...openSource.meta,
  path: "/open-source",
  languages: bilingualAlternates("/open-source", "/en/open-source"),
});

// revalidate must be a static literal here (Next rejects an imported constant).
export const revalidate = 3600;

export default function OpenSource() {
  return <OpenSourceView content={openSource} />;
}
