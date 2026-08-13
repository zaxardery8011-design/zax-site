"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type NewsletterSignupProps = {
  compact?: boolean;
  source: string;
};

const newsletterFormAction =
  process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION?.trim() ?? "";
const isNewsletterConfigured = newsletterFormAction.startsWith("https://");

export function NewsletterSignup({ compact = false, source }: NewsletterSignupProps) {
  const [status, setStatus] = useState<"idle" | "error" | "unconfigured">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!isNewsletterConfigured) {
      event.preventDefault();
      setStatus("unconfigured");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email_address") ?? "").trim();

    if (!email) {
      event.preventDefault();
      setStatus("error");
      return;
    }
  }

  return (
    <section
      className={[
        "px-5 sm:px-6 w-full",
        compact ? "py-10" : "py-16 md:py-20",
      ].join(" ")}
    >
      <div className="mx-auto grid max-w-5xl gap-6 rounded-xl border border-[color:var(--accent-cyan)]/30 bg-[color:var(--accent-cyan)]/10 p-6 sm:p-8 lg:grid-cols-[1fr_minmax(18rem,24rem)] lg:items-center">
        <div>
          <div className="mb-3 text-xs tracking-[0.3em] text-[color:var(--accent-cyan)]">
            NEWSLETTER
          </div>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            每週一封，記錄 AI agent 與自建主腦的實作過程
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[color:var(--fg-1)] sm:text-base">
            會寄實作紀錄、開源專案更新、踩坑筆記與可複製的工作流。週更，不灌水；
            Kit 帳號開通前，這裡先保留前端訂閱介面。
          </p>
          <Link
            href="/checklist"
            className="mt-5 inline-flex text-sm font-semibold text-[color:var(--accent-cyan)] hover:underline"
          >
            看 AI agent 紀律檢查表 →
          </Link>
        </div>

        <form
          action={isNewsletterConfigured ? newsletterFormAction : undefined}
          className="flex flex-col gap-3"
          data-source={source}
          method="post"
          noValidate
          onSubmit={handleSubmit}
        >
          <label className="sr-only" htmlFor={`newsletter-email-${source}`}>
            Email
          </label>
          <input
            id={`newsletter-email-${source}`}
            name="email_address"
            required
            type="email"
            placeholder="你的 email"
            className="min-h-11 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-0)]/70 px-4 py-2.5 text-sm text-[color:var(--fg-0)] outline-none transition placeholder:text-[color:var(--fg-2)] focus:border-[color:var(--accent-cyan)]"
          />
          <button className="btn-primary min-h-11 rounded-md px-5 py-2.5 text-sm transition" type="submit">
            訂閱週更紀錄
          </button>
          {status === "unconfigured" ? (
            <p aria-live="polite" className="text-sm text-[color:var(--accent-cyan)]">
              訂閱功能設定中，請稍後再試。
            </p>
          ) : null}
          {status === "error" ? (
            <p aria-live="polite" className="text-sm text-[color:var(--accent-purple)]">
              請先填入 email。
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
