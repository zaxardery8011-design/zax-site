"use client";

import { usePathname } from "next/navigation";

// 兩語系都有的頁面（中文路徑）。新增英文頁時在這裡加一行。
const BILINGUAL_PATHS = ["/", "/open-source"];

type LangSwitchProps = {
  /** 目前這頁的語系 */
  current: "zh-Hant" | "en";
  label: string;
  ariaLabel: string;
  fallbackNote: string;
};

function toEnglish(zhPath: string) {
  return zhPath === "/" ? "/en" : `/en${zhPath}`;
}

function toChinese(enPath: string) {
  const rest = enPath.replace(/^\/en(?=\/|$)/, "");
  return rest === "" ? "/" : rest;
}

// 停在同一頁的另一語系；該頁沒有英文版時導到 /en 並用 title 標示。
// 跨 root layout 本來就是整頁載入，所以用 <a> 而不是 <Link>。
export function LangSwitch({ current, label, ariaLabel, fallbackNote }: LangSwitchProps) {
  const pathname = usePathname() || "/";
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  let href: string;
  let fallback = false;
  if (current === "en") {
    href = toChinese(clean);
  } else if (BILINGUAL_PATHS.includes(clean)) {
    href = toEnglish(clean);
  } else {
    href = "/en";
    fallback = true;
  }

  return (
    <a
      href={href}
      hrefLang={current === "en" ? "zh-Hant" : "en"}
      aria-label={fallback ? `${ariaLabel}（${fallbackNote}）` : ariaLabel}
      title={fallback ? fallbackNote : ariaLabel}
      data-fallback={fallback ? "true" : undefined}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md px-3 text-xs btn-ghost transition"
    >
      {label}
    </a>
  );
}
