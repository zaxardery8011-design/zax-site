"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// 導覽列的一格：目前所在頁加 aria-current="page"，讀屏會唸「目前頁面」。
// 靜態預渲染時 usePathname 就有值（LangSwitch 同一招），所以 HTML 裡就帶著，不等 hydrate。
// 子路徑也算在內（/products/x 亮「產品專區」）；外觀只靠 aria-[current=page]: 類別，不另外傳狀態。
export function NavLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  const pathname = usePathname() || "/";
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const current = clean === href || (href !== "/" && clean.startsWith(`${href}/`));

  return (
    <Link href={href} aria-current={current ? "page" : undefined} className={className}>
      {children}
    </Link>
  );
}
