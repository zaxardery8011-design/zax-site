import { pageMetadata } from "@/app/lib/metadata";
import { redirect } from "next/navigation";

export const metadata = pageMetadata({
  title: "How we run",
  description:
    "How the main brain, sub-brains, and nodes divide work so every assignment reaches completion.",
  path: "/en/how-we-run",
  ogLocale: "en_US",
});

export default function HowWeRunEn() {
  redirect("/how-we-run/index.html");
}
