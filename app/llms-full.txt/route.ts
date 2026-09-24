import { readFileSync } from "node:fs";
import { join } from "node:path";
import { enReady } from "@/app/lib/en-ready";
import { absoluteUrl } from "@/app/lib/metadata";
import { prefixGap } from "@/app/lib/prefixGap";
import type {
  HomeContent,
  LayoutContent,
  LinkText,
  OpenSourceContent,
} from "@/content/schema";
import { home as enHome } from "@/content/en/home";
import { layout as enLayout } from "@/content/en/layout";
import { openSource as enOpenSource } from "@/content/en/open-source";
import { home as zhHome } from "@/content/zh-Hant/home";
import { layout as zhLayout } from "@/content/zh-Hant/layout";
import { openSource as zhOpenSource } from "@/content/zh-Hant/open-source";

// /llms-full.txt（2026-09-24）：給 AI 一次讀完的全站摘要（Markdown 純文字）。
// 開頭原樣附上 public/llms.txt（內容歸 A），後面依頁面把 content/** 的字與連結排出來。
// 這裡只做排版：標題、段落、連結全部來自既有 content 檔，不寫任何新說法。
// Next 16 GET route handler 預設不快取，force-static 讓它在 build 時產出成靜態檔
// （node_modules/next/dist/docs/01-app/01-getting-started/15-route-handlers.md「Caching」）。
export const dynamic = "force-static";

const link = (l: LinkText) => `[${l.label}](${absoluteUrl(l.href)})`;
const join2 = (a: string, b: string) => `${a}${prefixGap(a)}${b}`;

function layoutSection(c: LayoutContent): string[] {
  return [
    `# ${c.meta.title}`,
    "",
    absoluteUrl(c.homeHref),
    "",
    `> ${c.meta.description}`,
    "",
    ...c.nav.map((n) => `- ${link(n)}`),
    `- ${link(c.headerCta)}`,
    "",
  ];
}

function footerSection(c: LayoutContent): string[] {
  return [
    `## ${c.footer.brand}`,
    "",
    ...c.footer.items.map((i) => `- ${i.replace(/^·\s*/, "")}`),
    ...c.footer.social.map((s) => `- ${link(s)}`),
    "",
    c.footer.copyright,
    "",
  ];
}

function homeSection(h: HomeContent): string[] {
  const out: string[] = [
    `## ${join2(h.s1Hero.titleLead, h.s1Hero.titleEmphasis)}`,
    "",
    h.s1Hero.eyebrow,
    "",
    h.s1Hero.subtitle,
    "",
    `- ${link(h.s1Hero.primaryCta)}`,
    `- ${link(h.s1Hero.secondaryCta)}`,
    "",
  ];
  if (h.northStar) out.push(...h.northStar.lines.map((l) => `> ${l}`), "");
  if (h.starter) out.push(...h.starter.lines, "", `- ${link(h.starter.cta)}`, "");

  out.push(`## ${h.routes.title}`, "", h.routes.intro, "");
  for (const card of h.routes.cards) {
    out.push(`### ${card.title}`, "", card.eyebrow, "", card.body, "");
    out.push(`- ${link({ label: card.cta, href: card.href })}`, "");
  }

  if (h.s2Evidence) {
    out.push(`## ${h.s2Evidence.title}`, "");
    for (const it of h.s2Evidence.items) {
      out.push(`- ${it.value} ${it.label} (${it.measuredAt}) ${absoluteUrl(it.sourceHref)}`);
    }
    out.push("");
  }
  if (h.s3Governance) {
    out.push(`## ${h.s3Governance.title}`, "");
    for (const col of h.s3Governance.columns) {
      out.push(`- ${link({ label: col.name, href: col.repoHref })}: ${col.line}`);
    }
    out.push("");
  }

  const os = h.s4OpenSource;
  out.push(`## ${os.title}`, "", join2(os.intro, os.introEmphasis), "");
  for (const card of os.cards) {
    out.push(
      `### ${card.name}`,
      "",
      `${absoluteUrl(card.href)} · ${card.license}`,
      "",
      card.pitch,
      "",
      join2(os.labels.method, card.method),
      "",
      join2(os.labels.result, card.result),
      "",
      join2(os.labels.evidence, link(card.evidence)),
      "",
    );
  }
  out.push(`- ${link(os.allCta)}`);
  if (os.casesCta) out.push(`- ${link(os.casesCta)}`);
  out.push("");
  if (os.casesNote) out.push(os.casesNote, "");

  out.push(`## ${h.s5Try.title}`, "", h.s5Try.body, "", `- ${link(h.s5Try.cta)}`);
  if (h.s5Try.secondaryCta) out.push(`- ${link(h.s5Try.secondaryCta)}`);
  out.push("");

  if (h.s6Collab) {
    out.push(`## ${h.s6Collab.title}`, "", h.s6Collab.body, "", `- ${link(h.s6Collab.cta)}`, "");
  }
  return out;
}

function openSourceSection(o: OpenSourceContent, path: string): string[] {
  const out: string[] = [
    `# ${o.meta.title}`,
    "",
    absoluteUrl(path),
    "",
    `> ${o.meta.description}`,
    "",
    `## ${join2(o.hero.titleEmphasis, o.hero.titleRest)}`,
    "",
    join2(o.hero.body, o.hero.bodyEmphasis),
    "",
    `## ${o.reposSection.title}`,
    "",
  ];
  for (const r of o.repos) {
    out.push(
      `### ${r.name}`,
      "",
      `${absoluteUrl(r.url)} · https://github.com/${r.repo} · ${r.license}`,
      "",
      r.pitch,
      "",
      `${o.labels.quickStart}:`,
      "",
      "```",
      r.start,
      "```",
      "",
    );
    if (r.startNote) out.push(r.startNote, "");
    out.push(join2(o.labels.evidence, link(r.evidence)), "");
  }
  out.push(`## ${o.allRepos.title}`, "", o.allRepos.body, "", absoluteUrl(o.allRepos.href), "");
  if (o.casesCard) {
    out.push(`## ${o.casesCard.title}`, "", o.casesCard.body, "", absoluteUrl(o.casesCard.href), "");
  }
  if (o.contactLine) out.push(join2(o.contactLine.lead, link(o.contactLine.link)), "");
  return out;
}

function build(): string {
  const llmsTxt = readFileSync(join(process.cwd(), "public", "llms.txt"), "utf8").replace(/\s+$/, "");
  const parts: string[][] = [
    [llmsTxt, "", "---", ""],
    layoutSection(zhLayout),
    homeSection(zhHome),
    ["---", ""],
    openSourceSection(zhOpenSource, "/open-source"),
    ["---", ""],
    footerSection(zhLayout),
  ];
  if (enReady.layout && (enReady.home || enReady.openSource)) {
    parts.push(["---", ""], layoutSection(enLayout));
    if (enReady.home) parts.push(homeSection(enHome));
    if (enReady.openSource) {
      parts.push(["---", ""], openSourceSection(enOpenSource, "/en/open-source"));
    }
    parts.push(["---", ""], footerSection(enLayout));
  }
  return parts.flat().join("\n").replace(/\n{3,}/g, "\n\n") + "\n";
}

export function GET() {
  return new Response(build(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
