import { OpenSourceView } from "@/app/components/OpenSourceView";
import { bilingualAlternates, pageMetadata } from "@/app/lib/metadata";
import { openSource } from "@/content/en/open-source";

// Copy lives in content/en/open-source.ts; layout in app/components/OpenSourceView.tsx.
export const metadata = pageMetadata({
  ...openSource.meta,
  path: "/en/open-source",
  languages: bilingualAlternates("/open-source", "/en/open-source"),
  ogLocale: "en_US",
});

// revalidate must be a static literal here (Next rejects an imported constant).
export const revalidate = 3600;

export default function OpenSourceEn() {
  return <OpenSourceView content={openSource} />;
}
