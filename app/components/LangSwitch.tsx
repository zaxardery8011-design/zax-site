"use client";

import { usePathname } from "next/navigation";

type LangSwitchProps = {
  /** 目前這頁的語系 */
  current: "zh-Hant" | "en";
  /** 兩語系都有、且英文已過發布閘的頁面（中文路徑）。由 SiteShell 依 app/lib/en-ready.ts 傳入 */
  bilingualPaths: string[];
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
export function LangSwitch({
  current,
  bilingualPaths,
  label,
  ariaLabel,
  fallbackNote,
}: LangSwitchProps) {
  const pathname = usePathname() || "/";
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  let href: string;
  let fallback = false;
  if (current === "en") {
    href = toChinese(clean);
  } else if (bilingualPaths.includes(clean)) {
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
