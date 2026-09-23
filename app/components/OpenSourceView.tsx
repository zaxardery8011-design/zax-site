import Link from "next/link";
import type { ReactNode } from "react";
import type { OpenSourceContent } from "@/content/schema";
import { fetchRepoMetas } from "@/app/lib/github";
import { Card } from "./Card";
import { PageHero } from "./PageHero";
import { SectionHeader } from "./SectionHeader";

// 開源頁版面（中英共用）。字全部從 OpenSourceContent 來。

function Badge({
  children,
  tone = "plain",
}: {
  children: ReactNode;
  tone?: "plain" | "primary";
}) {
  const cls =
    tone === "primary"
      ? "bg-[color:var(--label)]/15 text-[color:var(--label)] border-[color:var(--label)]/30"
      : "border-[color:var(--border)] text-[color:var(--fg-1)]";
  return (
    <span className={`text-xs px-2.5 py-1 rounded border ${cls}`}>
      {children}
    </span>
  );
}

export async function OpenSourceView({ content }: { content: OpenSourceContent }) {
  const { hero, reposSection, repos, labels, allRepos } = content;
  const metas = await fetchRepoMetas(repos.map((r) => r.repo));

  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <PageHero
        badge={hero.badge}
        title={
          <>
            <span className="steel-text">{hero.titleEmphasis}</span>
            <br />
            {hero.titleRest}
          </>
        }
      >
        <p>
          {hero.body}
          <span className="text-[color:var(--fg-0)]">{hero.bodyEmphasis}</span>
        </p>
      </PageHero>

      <section className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full">
        <SectionHeader
          badge={reposSection.badge}
          title={reposSection.title}
          titleClassName="mb-10"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => {
            const meta = metas[i];
            return (
              <Card
                key={repo.repo}
                className="p-5 flex flex-col"
                glow={repo.kind === "internal" ? "primary" : "none"}
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {repo.kind === "internal" ? <Badge>{labels.featured}</Badge> : null}
                  {meta ? <Badge>★ {meta.stars}</Badge> : null}
                  <Badge tone="primary">{repo.license}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[color:var(--fg-0)]">
                  {repo.name}
                </h3>
                {meta ? (
                  <div className="text-xs text-[color:var(--fg-1)] mb-3">
                    {labels.updated}{" "}
                    <time dateTime={meta.pushedAt} className="font-mono">
                      {meta.pushedAt}
                    </time>
                  </div>
                ) : null}
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed mb-4">
                  {repo.pitch}
                </p>

                <div className="mb-4">
                  <div className="text-[11px] tracking-[0.2em] text-[color:var(--label)] mb-1.5">
                    {labels.quickStart}
                  </div>
                  <pre className="text-xs font-mono leading-relaxed rounded-lg border border-[color:var(--border)] bg-[color:var(--fg-0)]/5 p-3 overflow-x-auto whitespace-pre text-[color:var(--fg-1)]">
                    <code>{repo.start}</code>
                  </pre>
                  {repo.startNote ? (
                    <p className="text-[11px] text-[color:var(--fg-1)] mt-1.5 leading-relaxed">
                      {repo.startNote}
                    </p>
                  ) : null}
                </div>

                {repo.kind === "internal" ? (
                  <Link href={repo.url} className="mt-auto text-sm text-[color:var(--link)]">
                    {labels.internalLink}
                  </Link>
                ) : (
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm text-[color:var(--link)]"
                  >
                    {labels.externalLink}
                  </a>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      {/*
        收尾若只有 GitHub 一張卡，技術訪客看完 repo 就整批被送出站；
        他們的下一個問題是「這些人是不是真的幫人做過事」，答案在 /cases。
        所以有 casesCard 時收尾是兩條路：往外看程式碼，往內看它們跑在誰的案子上。
      */}
      <section className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full">
        <div className={content.casesCard ? "grid gap-4 lg:grid-cols-2" : undefined}>
          <Card
            as="a"
            href={allRepos.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 sm:p-8 flex flex-col h-full"
            glow="primary"
          >
            <div className="text-xs tracking-[0.3em] text-[color:var(--label)] mb-3">
              {allRepos.badge}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{allRepos.title}</h2>
            <p className="text-[color:var(--fg-1)] leading-relaxed max-w-3xl">{allRepos.body}</p>
          </Card>

          {content.casesCard ? (
            <Card
              as={Link}
              href={content.casesCard.href}
              className="p-6 sm:p-8 flex flex-col h-full"
            >
              <div className="text-xs tracking-[0.3em] text-[color:var(--label)] mb-3">
                {content.casesCard.badge}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{content.casesCard.title}</h2>
              <p className="text-[color:var(--fg-1)] leading-relaxed">{content.casesCard.body}</p>
            </Card>
          ) : null}
        </div>

        {content.contactLine ? (
          <p className="mt-6 text-sm text-[color:var(--fg-1)] leading-relaxed">
            {content.contactLine.lead}
            <Link
              href={content.contactLine.link.href}
              className="text-[color:var(--link)] hover:underline"
            >
              {content.contactLine.link.label}
            </Link>
          </p>
        ) : null}
      </section>
    </main>
  );
}
