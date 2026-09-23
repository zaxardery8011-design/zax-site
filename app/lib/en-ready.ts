import { home } from "@/content/en/home";
import { layout } from "@/content/en/layout";
import { openSource } from "@/content/en/open-source";

// 英文發布閘：content/en/* 還有 A 沒填完的佔位，就不讓那一頁上線。
// 判定只看內容本身（不另設開關）：A 把某頁最後一個佔位填掉，下一次 build 那頁就自動上線。
// 這些值在 build 時從 import 進來的內容物件算出，頁面是靜態產出，所以等於 build 時定案。

/** content/en/* 取不到英文時填的佔位前綴（見 content/en/layout.ts 頂部說明） */
export const EN_PLACEHOLDER = "[EN TBD by A]";

/** 遞迴掃物件／陣列裡的每個字串，任何一個含佔位就算沒填完。 */
export function hasPlaceholder(value: unknown): boolean {
  if (typeof value === "string") return value.includes(EN_PLACEHOLDER);
  if (Array.isArray(value)) return value.some(hasPlaceholder);
  if (value !== null && typeof value === "object") {
    return Object.values(value).some(hasPlaceholder);
  }
  return false;
}

export type EnReadiness = {
  /** 導覽／頁尾／預設 metadata。沒填完＝整個英文站都不上線 */
  layout: boolean;
  /** /en（已含 layout 條件） */
  home: boolean;
  /** /en/open-source（已含 layout 條件） */
  openSource: boolean;
};

export function enReadiness(content: {
  layout: unknown;
  home: unknown;
  openSource: unknown;
}): EnReadiness {
  const layoutReady = !hasPlaceholder(content.layout);
  return {
    layout: layoutReady,
    home: layoutReady && !hasPlaceholder(content.home),
    openSource: layoutReady && !hasPlaceholder(content.openSource),
  };
}

export const enReady: EnReadiness = enReadiness({ layout, home, openSource });

/**
 * 英文頁沒填完時用的 metadata：不帶任何佔位字串，加 noindex 當保險
 * （頁面本身會 notFound()，Next 對 404 也會自動加 noindex；這份是 layout 層的第二道）。
 */
export const EN_NOT_READY_METADATA = {
  title: "404",
  robots: { index: false, follow: false },
} as const;
