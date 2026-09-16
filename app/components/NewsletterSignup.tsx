"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type NewsletterSignupProps = {
  compact?: boolean;
  source: string;
};

// Kit 的 form action 是公開端點：它會出現在下方 <form action> 屬性、
// 任何訪客檢視原始碼都看得到，因此寫成預設值而非機密環境變數。
// 環境變數仍可覆蓋（換 form 時免改 code）。
const DEFAULT_NEWSLETTER_FORM_ACTION =
  "https://app.kit.com/forms/9798851/subscriptions";

const newsletterFormAction =
  process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION?.trim() ||
  DEFAULT_NEWSLETTER_FORM_ACTION;
const isNewsletterConfigured = newsletterFormAction.startsWith("https://");

// 已寄出的期數。全站唯一寫死的一個數字,寄出第一封就改這裡,下面的文案會自己跟著變。
// 不回源抓是因為 Kit 沒有公開的期數端點；寫死可以,但只能寫死在一個地方。
const ISSUES_SENT = 0;

// 寄出期數那句話,完整版與頁尾帶狀版共用同一個來源。
// 分開寫過兩次的話,寄出第一封時只會改到其中一邊。
const issuesLine =
  ISSUES_SENT === 0
    ? "目前寄出 0 期。沒做出東西的那週就不寄。"
    : `目前寄出 ${ISSUES_SENT} 期。沒做出東西的那週就不寄。`;

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

  // 輸入框 + 送出鈕 + 錯誤訊息。兩種版型共用,差別只在外層排法。
  const formBody = (
    <>
      <label className="sr-only" htmlFor={`newsletter-email-${source}`}>
        Email
      </label>
      <input
        id={`newsletter-email-${source}`}
        name="email_address"
        required
        type="email"
        placeholder="你的 email"
        className={[
          "min-h-11 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-0)]/70 px-4 py-2.5 text-sm text-[color:var(--fg-0)] outline-none transition placeholder:text-[color:var(--fg-2)] focus:border-[color:var(--accent-cyan)]",
          compact ? "w-full sm:w-56" : "",
        ].join(" ")}
      />
      <button
        className={[
          "btn-primary min-h-11 rounded-md px-5 py-2.5 text-sm transition",
          compact ? "w-full shrink-0 sm:w-auto" : "",
        ].join(" ")}
        type="submit"
      >
        訂閱實作紀錄
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
    </>
  );

  // 頁尾帶狀版:每一頁都會出現,所以刻意不放大標與長段落。
  // 首頁與 /checklist 同頁已經有完整版,頁尾再放一次一模一樣的框
  // 等於把「先講清楚你會收到什麼」這句話連講兩次,原本的克制感會變成模板噪音。
  if (compact) {
    return (
      <section className="px-5 sm:px-6 w-full py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-0)]/40 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[color:var(--fg-0)]">
              訂閱實作紀錄:這週改了什麼、哪裡踩坑、哪個做法你可以直接抄回去用。
            </p>
            <p className="mt-1 text-xs text-[color:var(--fg-2)]">{issuesLine}</p>
          </div>

          <form
            action={isNewsletterConfigured ? newsletterFormAction : undefined}
            className="flex flex-col gap-3 sm:flex-row sm:items-center lg:shrink-0"
            data-source={source}
            method="post"
            noValidate
            onSubmit={handleSubmit}
          >
            {formBody}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 sm:px-6 w-full py-16 md:py-20">
      <div className="mx-auto grid max-w-5xl gap-6 rounded-xl border border-[color:var(--accent-cyan)]/30 bg-[color:var(--accent-cyan)]/10 p-6 sm:p-8 lg:grid-cols-[1fr_minmax(18rem,24rem)] lg:items-center">
        <div>
          <div className="mb-3 text-xs tracking-[0.3em] text-[color:var(--accent-cyan)]">
            NEWSLETTER
          </div>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            要你的 email 之前,先講清楚你會收到什麼
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[color:var(--fg-1)] sm:text-base">
            寄的是上面那幾個開源專案的實作紀錄。這週改了什麼、哪裡踩坑、哪個做法你可以直接抄回去用。
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[color:var(--fg-1)] sm:text-base">
            {ISSUES_SENT === 0 ? (
              <>
                <span className="text-[color:var(--fg-0)]">目前寄出 0 期。</span>
                這份名單從今天開始,你會是最早收到的那幾個。
                沒做出東西的那週就不寄,這裡不會為了湊週更生一封出來。
              </>
            ) : (
              <>
                <span className="text-[color:var(--fg-0)]">目前寄出 {ISSUES_SENT} 期。</span>
                沒做出東西的那週就不寄,這裡不會為了湊週更生一封出來。
              </>
            )}
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
          {formBody}
        </form>
      </div>
    </section>
  );
}
