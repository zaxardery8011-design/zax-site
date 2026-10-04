import { pageMetadata } from "@/app/lib/metadata";
import { redirect } from "next/navigation";

export const metadata = pageMetadata({
  title: "我們怎麼運作",
  description: "主腦、副腦、節點怎麼分工，每一件交辦怎麼走完",
  path: "/how-we-run",
});

export default function HowWeRun() {
  redirect("/how-we-run/index.html");
}
