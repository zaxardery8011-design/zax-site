import { HomeView } from "@/app/components/HomeView";
import { bilingualAlternates, pageMetadata } from "@/app/lib/metadata";
import { home } from "@/content/en/home";
import { layout } from "@/content/en/layout";

// Copy lives in content/en/home.ts; layout lives in app/components/HomeView.tsx.
// revalidate must be a static literal here (Next rejects an imported constant).
export const revalidate = 3600;

export const metadata = pageMetadata({
  title: layout.meta.title,
  description: layout.meta.description,
  path: "/en",
  languages: bilingualAlternates("/", "/en"),
  ogLocale: layout.ogLocale,
});

export default function HomeEn() {
  return <HomeView content={home} />;
}
