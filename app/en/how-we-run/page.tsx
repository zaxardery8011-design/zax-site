import { pageMetadata } from "@/app/lib/metadata";

export const metadata = pageMetadata({
  title: "How we run",
  description:
    "How the main brain, sub-brains, and nodes divide work so every assignment reaches completion.",
  path: "/en/how-we-run",
  ogLocale: "en_US",
});

export default function HowWeRunEn() {
  return (
    <main className="flex w-full flex-1">
      <iframe
        className="h-screen w-full border-0"
        src="/how-we-run/index.html"
        title="How we run"
      />
    </main>
  );
}
