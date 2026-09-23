import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";
import type { LayoutContent, Locale, SocialKind } from "@/content/schema";
import { LangSwitch } from "./LangSwitch";

// 兩個 root layout（app/(zh)、app/en）共用的外殼：導覽、頁尾、GoatCounter。
// 字全部從 content/<locale>/layout.ts 來，這支只管版面。

const GOATCOUNTER_CODE = "zaxtw";
const GOATCOUNTER_ENDPOINT = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M13.5 21v-7.4h2.5l.4-2.9h-2.9V8.8c0-.8.2-1.4 1.4-1.4h1.6V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H7.8v2.9h2.6V21h3.1Z"
      />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M12 4C7.6 4 4 6.8 4 10.3c0 3.1 2.7 5.7 6.4 6.2.3.1.5.3.4.6l-.2 1.5c0 .4.4.7.7.5 4.2-2.1 6.7-4.7 7.7-6.5.6-.8 1-1.5 1-2.3C20 6.8 16.4 4 12 4Zm-3.4 8.1H6.9V8.6h1v2.6h.7v.9Zm1.8 0h-1V8.6h1v3.5Zm3.5 0h-.9l-1.3-1.9v1.9h-1V8.6h.9l1.3 1.9V8.6h1v3.5Zm3.2-2.6h-1.5v.5H17v.9h-1.4v.4h1.5v.8h-2.5V8.6h2.5v.9Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M4.5 6.5h15v11h-15v-11Zm.7 1.1 6.8 5 6.8-5"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.2 1.9.8 2.3.6.1-.5.3-.8.5-1-1.8-.2-3.6-.9-3.6-3.8 0-.8.3-1.5.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3-1.8 3.6-3.6 3.8.3.3.6.8.6 1.6v2c0 .2.1.5.6.4A8.5 8.5 0 0 0 12 3.5Z"
      />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M5 6.5h14v10H8l-3 2.5V6.5Zm4 4h6m-6 3h4"
      />
    </svg>
  );
}

const socialIcon: Record<SocialKind, () => ReactNode> = {
  facebook: FacebookIcon,
  line: LineIcon,
  mail: MailIcon,
  github: GithubIcon,
  contact: ContactIcon,
};

const socialClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-md btn-ghost transition";

export function SiteShell({
  children,
  content,
  locale,
  newsletter,
}: {
  children: ReactNode;
  content: LayoutContent;
  locale: Locale;
  /** 頁尾上方的電子報帶狀版；英文版沒有英文文案，不傳就不渲染 */
  newsletter?: ReactNode;
}) {
  const { footer } = content;

  return (
    <>
      <Script
        id="goatcounter-count-script"
        data-goatcounter={GOATCOUNTER_ENDPOINT}
        src="https://gc.zgo.at/count.js"
        strategy="afterInteractive"
      />
      <Script id="goatcounter-visitor-count" strategy="afterInteractive">
        {`
            (function () {
              fetch('https://zaxtw.goatcounter.com/counter/%2F.json')
                .then(function (response) {
                  if (!response.ok) {
                    throw new Error('GoatCounter request failed');
                  }
                  return response.json();
                })
                .then(function (data) {
                  var target = document.getElementById('goatcounter-visitor-count-target');
                  if (target && typeof data.count === 'string') {
                    target.textContent = data.count;
                  }
                })
                .catch(function () {
                  // Keep the placeholder when the counter is unavailable.
                });
            })();
          `}
      </Script>

      {/* ── Top Nav ──
          觸控目標：導覽每一格 min-h-11（44px）。響應式基線量到舊版膠囊約 30px 高，是每頁 <44px 目標數的主因。 */}
      <header className="sticky top-0 z-20 w-full">
        <nav className="w-full px-5 sm:px-6 py-2 flex items-center gap-4 sm:gap-6 plate-ink border-b border-[color:var(--border)]">
          <Link
            href={content.homeHref}
            className="inline-flex min-h-11 items-center font-bold tracking-widest text-lg steel-text"
          >
            {content.brand}
          </Link>
          <div className="hidden md:flex gap-5 text-sm text-[color:var(--fg-1)] ml-4">
            {content.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center hover:text-[color:var(--link)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="grow" />
          <LangSwitch current={locale} {...content.langSwitch} />
          <Link
            href={content.headerCta.href}
            className="inline-flex min-h-11 items-center text-xs px-3 rounded-md btn-ghost transition"
          >
            {content.headerCta.label}
          </Link>
        </nav>

        {/* 手機那排。上面那排在 md 以下整個 hidden,沒有漢堡選單,
            等於窄螢幕只到得了首頁跟 /contact。這排補上。
            原本用橫向捲動,但捲軸是藏起來的:375px 下這排內容寬 535px、
            可視只有 373px,「關於 ZAX」跟「聯絡」被切在右邊界外,
            而畫面上沒有任何東西告訴你還能往右滑。改成換行,七項一次全在。 */}
        <nav
          aria-label={content.mobileNavLabel}
          className="md:hidden w-full plate-ink border-b border-[color:var(--border)]"
        >
          <div className="flex flex-wrap gap-x-1.5 px-5 py-1 text-xs text-[color:var(--fg-1)]">
            {content.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center px-2.5 rounded-md btn-ghost transition whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {children}

      {newsletter}

      {/* ── Footer ── */}
      <footer className="px-5 sm:px-6 py-10 mt-auto temper-rule-top text-xs text-[color:var(--fg-2)]">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="steel-text font-bold tracking-widest">{footer.brand}</span>
            {footer.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <span className="grow" />
            <span>{footer.copyright}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {footer.social.map((s) => {
              const Icon = socialIcon[s.kind];
              if (s.href.startsWith("/")) {
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    className={socialClass}
                  >
                    <Icon />
                  </Link>
                );
              }
              const external = s.href.startsWith("https://");
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  title={s.label}
                  className={socialClass}
                >
                  <Icon />
                </a>
              );
            })}
            <span className="grow" />
            <div className="flex min-h-9 items-center gap-2 text-[color:var(--fg-1)]">
              <span>{footer.visitorLabel}</span>
              <span
                id="goatcounter-visitor-count-target"
                className="inline-flex items-center text-[color:var(--label)]"
              >
                {footer.visitorPlaceholder}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
