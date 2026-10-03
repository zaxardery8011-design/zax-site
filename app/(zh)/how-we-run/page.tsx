import { pageMetadata } from "@/app/lib/metadata";

export const metadata = pageMetadata({
  title: "我們怎麼運作",
  description: "主腦、副腦、節點怎麼分工，每一件交辦怎麼走完",
  path: "/how-we-run",
});

export default function HowWeRun() {
  return (
    <main className="flex w-full flex-1">
      <iframe
        className="h-screen w-full border-0"
        src="/how-we-run/index.html"
        title="我們怎麼運作"
      />
    </main>
  );
}
