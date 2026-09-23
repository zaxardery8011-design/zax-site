import { HomeView } from "@/app/components/HomeView";
import { enReady } from "@/app/lib/en-ready";
import { bilingualAlternates, pageMetadata } from "@/app/lib/metadata";
import { home } from "@/content/zh-Hant/home";
import { layout } from "@/content/zh-Hant/layout";

// Copy lives in content/zh-Hant/home.ts; layout lives in app/components/HomeView.tsx.
// revalidate must be a static literal here (Next rejects an imported constant).
export const revalidate = 3600;

export const metadata = pageMetadata({
  title: layout.meta.title,
  description: layout.meta.description,
  path: "/",
  // 英文版還沒過發布閘（app/lib/en-ready.ts）就不輸出 hreflang en／x-default，只留 canonical。
  languages: enReady.home ? bilingualAlternates("/", "/en") : undefined,
  ogLocale: layout.ogLocale,
});

export default function Home() {
  return <HomeView content={home} />;
}
