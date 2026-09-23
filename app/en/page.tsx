import { notFound } from "next/navigation";
import { HomeView } from "@/app/components/HomeView";
import { EN_NOT_READY_METADATA, enReady } from "@/app/lib/en-ready";
import { bilingualAlternates, pageMetadata } from "@/app/lib/metadata";
import { home } from "@/content/en/home";
import { layout } from "@/content/en/layout";

// Copy lives in content/en/home.ts; layout lives in app/components/HomeView.tsx.
// revalidate must be a static literal here (Next rejects an imported constant).
export const revalidate = 3600;

// 發布閘（app/lib/en-ready.ts）：英文首頁或 layout 還有佔位 → 404，不產出含佔位的 HTML。
export const metadata = enReady.home
  ? pageMetadata({
      title: layout.meta.title,
      description: layout.meta.description,
      path: "/en",
      languages: bilingualAlternates("/", "/en"),
      ogLocale: layout.ogLocale,
    })
  : EN_NOT_READY_METADATA;

export default function HomeEn() {
  if (!enReady.home) notFound();
  return <HomeView content={home} />;
}
