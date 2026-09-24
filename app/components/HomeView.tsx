import Link from "next/link";
import type { HomeContent } from "@/content/schema";
import { fetchRepoMetas } from "@/app/lib/github";
import { prefixGap } from "@/app/lib/prefixGap";
import { Card } from "./Card";
import { CTAButton } from "./CTAButton";
import { NewsletterSignup } from "./NewsletterSignup";
import { PageHero } from "./PageHero";
import { SectionHeader } from "./SectionHeader";

// 首頁版面（中英共用）。字全部從 HomeContent 來，這支不放文案。
// 星數與最近更新由 fetchRepoMetas 每小時回源 GitHub（revalidate 寫在各語系的 page.tsx）。

type Glow = "none" | "primary" | "secondary";

// 卡片強調色是版面決定（B 管），依位置給，不放進內容檔。
const ROUTE_GLOW: Glow[] = ["primary", "secondary"];
const CASE_GLOW: Record<string, Glow> = {
  "zaxardery8011-design/aiwff-runtime": "primary",
  "zaxardery8011-design/execution-proofs": "secondary",
};

const isExternalHref = (href: string) => href.startsWith("https://");

export async function HomeView({ content }: { content: HomeContent }) {
  const {
    s1Hero,
    northStar,
    starter,
    newbie,
    routes,
    s2Evidence,
    s3Governance,
    s4OpenSource,
    s5Try,
    s6Collab,
  } = content;
  const metas = await fetchRepoMetas(s4OpenSource.cards.map((c) => c.repo));

  const s5Cta = (
    <CTAButton
      href={s5Try.cta.href}
      target={isExternalHref(s5Try.cta.href) ? "_blank" : undefined}
      className="w-full text-center sm:w-fit"
    >
      {s5Try.cta.label}
    </CTAButton>
  );
  // 已確定要找人做的訪客，這區是首頁唯一能直達服務方案的地方——少了這顆就只剩 LINE 一條路。
  const s5Ctas = s5Try.secondaryCta ? (
    <div className="flex flex-col gap-3 sm:w-fit">
      {s5Cta}
      <CTAButton
        href={s5Try.secondaryCta.href}
        variant="ghost"
        className="w-full text-center sm:w-fit"
      >
        {s5Try.secondaryCta.label}
      </CTAButton>
    </div>
  ) : (
    s5Cta
  );

  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <PageHero
        animated
        id="hero"
        badge={s1Hero.eyebrow}
        className="pb-24 md:pb-32"
        title={
          <>
            {s1Hero.titleLead}
            <br />
            <span className="steel-text">{s1Hero.titleEmphasis}</span>
          </>
        }
        titleClassName="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
        actions={
          <>
            <CTAButton href={s1Hero.primaryCta.href}>{s1Hero.primaryCta.label}</CTAButton>
            <CTAButton
              href={s1Hero.secondaryCta.href}
              target={isExternalHref(s1Hero.secondaryCta.href) ? "_blank" : undefined}
              variant="ghost"
            >
              {s1Hero.secondaryCta.label}
            </CTAButton>
          </>
        }
      >
        <p>{s1Hero.subtitle}</p>
      </PageHero>

      {/* 北極星：方向句，不取代 hero 的能力句；沒填不渲染 */}
      {northStar ? (
        <section
          id="north-star"
          className="px-5 sm:px-6 pb-12 md:pb-16 max-w-5xl mx-auto w-full"
        >
          <div className="border-l-2 border-[color:var(--link)] pl-5 sm:pl-6 space-y-2">
            {northStar.lines.map((line) => (
              <p key={line} className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                {line}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {/* 新手入口：一段話＋一顆按鈕；沒填不渲染 */}
      {starter ? (
        <section
          id="starter"
          className="px-5 sm:px-6 pb-12 md:pb-16 max-w-5xl mx-auto w-full"
        >
          <Card className="p-6 sm:p-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between" interactive={false}>
            <div className="space-y-1 text-sm sm:text-base text-[color:var(--fg-1)] leading-relaxed">
              {starter.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <CTAButton
              href={starter.cta.href}
              target={isExternalHref(starter.cta.href) ? "_blank" : undefined}
              variant="ghost"
              className="w-full text-center sm:w-fit shrink-0"
            >
              {starter.cta.label}
            </CTAButton>
          </Card>
        </section>
      ) : null}

      {/* 新手 30 秒：適合／不適合／錢花在哪／不寫程式怎麼開始；整區或單格沒填不渲染 */}
      {newbie ? (
        <section
          id="newbie"
          className="px-5 sm:px-6 pb-12 md:pb-16 max-w-5xl mx-auto w-full"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-5">{newbie.title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {newbie.fit ? (
              <Card className="p-6" interactive={false}>
                <h3 className="text-sm font-semibold text-[color:var(--label)] mb-3">
                  {newbie.labels.fit}
                </h3>
                <ul className="space-y-2 text-sm text-[color:var(--fg-1)] leading-relaxed">
                  {newbie.fit.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ) : null}
            {newbie.notFit ? (
              <Card className="p-6" interactive={false}>
                <h3 className="text-sm font-semibold text-[color:var(--label)] mb-3">
                  {newbie.labels.notFit}
                </h3>
                <ul className="space-y-2 text-sm text-[color:var(--fg-1)] leading-relaxed">
                  {newbie.notFit.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ) : null}
            {/* 錢花在哪：一次性／每月兩欄，不寫單價；佔滿整列 */}
            <Card id="cost" className="p-6 md:col-span-2" interactive={false}>
              <h3 className="text-sm font-semibold text-[color:var(--label)] mb-4">
                {newbie.labels.cost}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {(
                  [
                    [newbie.labels.oneTime, newbie.cost.oneTime],
                    [newbie.labels.monthly, newbie.cost.monthly],
                  ] as const
                ).map(([label, items]) => (
                  <div key={label}>
                    <h4 className="font-semibold text-[color:var(--fg-0)] mb-2">{label}</h4>
                    <ul className="space-y-2 text-sm text-[color:var(--fg-1)] leading-relaxed">
                      {items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-[color:var(--label)]">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {newbie.cost.note ? (
                <p className="mt-5 text-xs text-[color:var(--fg-2)] leading-relaxed">
                  {newbie.cost.note}
                </p>
              ) : null}
            </Card>
            {newbie.startNoCode ? (
              <Card className="p-6" interactive={false}>
                <h3 className="text-sm font-semibold text-[color:var(--label)] mb-3">
                  {newbie.labels.startNoCode}
                </h3>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                  {newbie.startNoCode}
                </p>
              </Card>
            ) : null}
          </div>
        </section>
      ) : null}

      {s2Evidence ? (
        <section
          id="evidence"
          className="px-5 sm:px-6 py-16 md:py-20 max-w-5xl mx-auto w-full"
        >
          <SectionHeader badge={s2Evidence.badge} title={s2Evidence.title} />
          <div className="grid gap-4 md:grid-cols-3">
            {s2Evidence.items.map((item) => (
              <Card key={item.label} className="p-6 flex flex-col" interactive={false}>
                <div className="text-3xl font-bold steel-text mb-3">{item.value}</div>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed mb-4">
                  {item.label}
                </p>
                <a
                  href={item.sourceHref}
                  target={isExternalHref(item.sourceHref) ? "_blank" : undefined}
                  rel={isExternalHref(item.sourceHref) ? "noopener noreferrer" : undefined}
                  className="mt-auto text-xs text-[color:var(--link)]"
                >
                  <time className="font-mono">{item.measuredAt}</time>
                </a>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section
        id="minibrain"
        className="px-5 sm:px-6 py-16 md:py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader badge={routes.badge} title={routes.title}>
          {routes.intro}
        </SectionHeader>

        <div className="grid gap-4 md:grid-cols-2">
          {routes.cards.map((item, i) => {
            const isExternal = isExternalHref(item.href);

            return (
              <Card
                as={isExternal ? "a" : Link}
                key={item.title}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="p-6 sm:p-7 flex min-h-72 flex-col"
                glow={ROUTE_GLOW[i] ?? "none"}
              >
                <div className="text-xs tracking-[0.24em] text-[color:var(--label)] mb-4">
                  {item.eyebrow}
                </div>
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed mb-6">
                  {item.body}
                </p>
                <span className="mt-auto text-sm font-semibold text-[color:var(--link)]">
                  {item.cta}
                </span>
              </Card>
            );
          })}
        </div>
      </section>

      {s3Governance ? (
        <section
          id="governance"
          className="px-5 sm:px-6 py-16 md:py-20 max-w-5xl mx-auto w-full"
        >
          <SectionHeader badge={s3Governance.badge} title={s3Governance.title} />
          <div className="grid gap-4 md:grid-cols-3">
            {s3Governance.columns.map((col) => (
              <Card
                as="a"
                key={col.name}
                href={col.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3">{col.name}</h3>
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">{col.line}</p>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section
        id="cases"
        className="px-5 sm:px-6 py-16 md:py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader badge={s4OpenSource.badge} title={s4OpenSource.title}>
          {s4OpenSource.intro}
          {prefixGap(s4OpenSource.intro)}
          <span className="text-[color:var(--fg-0)]">{s4OpenSource.introEmphasis}</span>
        </SectionHeader>

        <div className="grid gap-4 lg:grid-cols-3">
          {s4OpenSource.cards.map((item, i) => {
            const isExternal = isExternalHref(item.href);
            const meta = metas[i];
            const CardLink = isExternal ? "a" : Link;

            // 卡片裡有證據連結，整張卡不能再是 <a>（巢狀 a 不合法）：
            // 改由底部連結的 ::after 蓋滿整張卡，證據連結 z-10 浮在上面。
            return (
              <Card
                key={item.href}
                className="p-6 flex min-h-[27rem] flex-col"
                glow={CASE_GLOW[item.repo] ?? "none"}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <span className="shrink-0 rounded border border-[color:var(--border)] px-2 py-1 text-xs text-[color:var(--fg-1)]">
                    {meta ? `★ ${meta.stars} · ${item.license}` : item.license}
                  </span>
                </div>
                {meta ? (
                  <div className="text-xs text-[color:var(--fg-1)] mb-4">
                    {s4OpenSource.labels.updated}{" "}
                    <time dateTime={meta.pushedAt} className="font-mono">
                      {meta.pushedAt}
                    </time>
                  </div>
                ) : (
                  <div className="mb-4" />
                )}
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed mb-5">
                  {item.pitch}
                </p>
                <div className="space-y-3 text-sm text-[color:var(--fg-1)] leading-relaxed">
                  <p>
                    <span className="text-[color:var(--label)]">
                      {s4OpenSource.labels.method}
                    </span>
                    {prefixGap(s4OpenSource.labels.method)}
                    {item.method}
                  </p>
                  <p>
                    <span className="text-[color:var(--label)]">
                      {s4OpenSource.labels.result}
                    </span>
                    {prefixGap(s4OpenSource.labels.result)}
                    {item.result}
                  </p>
                </div>
                <p className="mt-4 text-xs text-[color:var(--fg-1)]">
                  {s4OpenSource.labels.evidence}
                  {prefixGap(s4OpenSource.labels.evidence)}
                  <a
                    href={item.evidence.href}
                    target={isExternalHref(item.evidence.href) ? "_blank" : undefined}
                    rel={isExternalHref(item.evidence.href) ? "noopener noreferrer" : undefined}
                    className="relative z-10 underline underline-offset-2 text-[color:var(--link)]"
                  >
                    {item.evidence.label}
                  </a>
                </p>
                <CardLink
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="mt-auto pt-6 text-sm font-semibold text-[color:var(--link)] after:absolute after:inset-0 after:rounded-xl"
                >
                  {isExternal ? s4OpenSource.labels.repoLink : s4OpenSource.labels.entryLink}
                </CardLink>
              </Card>
            );
          })}
        </div>

        {/* 開源卡不是案例：這區若只有「看全部開源」一顆鈕，首頁本文就沒有任何一條路通往 /cases。 */}
        {s4OpenSource.casesNote ? (
          <p className="mt-8 text-[color:var(--fg-1)] leading-relaxed max-w-3xl">
            {s4OpenSource.casesNote}
          </p>
        ) : null}

        <div className={`${s4OpenSource.casesNote ? "mt-6" : "mt-8"} flex flex-wrap gap-3`}>
          {s4OpenSource.casesCta ? (
            <CTAButton href={s4OpenSource.casesCta.href}>{s4OpenSource.casesCta.label}</CTAButton>
          ) : null}
          <CTAButton href={s4OpenSource.allCta.href} variant="ghost">
            {s4OpenSource.allCta.label}
          </CTAButton>
        </div>
      </section>

      {content.showNewsletter ? <NewsletterSignup source="home" /> : null}

      <section
        id="line"
        className="px-5 sm:px-6 py-16 md:py-20 max-w-5xl mx-auto w-full"
      >
        <div className="grid gap-6 rounded-xl border border-[color:var(--label)]/30 bg-[color:var(--label)]/10 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs tracking-[0.3em] text-[color:var(--label)] mb-3">
              {s5Try.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{s5Try.title}</h2>
            <p className="text-[color:var(--fg-1)] leading-relaxed max-w-3xl">{s5Try.body}</p>
            {s5Try.lineId ? (
              <p className="mt-3 font-mono text-sm text-[color:var(--fg-0)]">{s5Try.lineId}</p>
            ) : null}
          </div>
          {s5Try.qrImage ? (
            <div className="flex flex-col items-start gap-4 sm:items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s5Try.qrImage}
                alt={s5Try.lineId ?? ""}
                width={160}
                height={160}
                className="rounded-lg bg-white p-2"
              />
              {s5Ctas}
            </div>
          ) : (
            s5Ctas
          )}
        </div>
      </section>

      {s6Collab ? (
        <section
          id="collab"
          className="px-5 sm:px-6 py-16 md:py-20 max-w-5xl mx-auto w-full"
        >
          <SectionHeader title={s6Collab.title}>{s6Collab.body}</SectionHeader>
          <CTAButton href={s6Collab.cta.href}>{s6Collab.cta.label}</CTAButton>
        </section>
      ) : null}
    </main>
  );
}
