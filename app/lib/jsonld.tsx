import type { LayoutContent, OpenSourceContent } from "@/content/schema";
import { SITE_URL, absoluteUrl } from "./metadata";

// JSON-LD 結構化資料（2026-09-24，AI／搜尋引擎可讀性）。
// 寫法照 Next 16 指南 node_modules/next/dist/docs/01-app/02-guides/json-ld.md：
// 在 layout / page 裡放原生 <script type="application/ld+json">，不用 next/script。
// 所有字串都從 content/** 讀，這裡不寫任何文案。

/**
 * JSON 安全序列化：JSON.stringify 不會擋 `</script>`，所以把 < > & 與 U+2028/U+2029
 * 換成 \uXXXX。換完仍是合法 JSON，JSON.parse 讀回來字串不變。
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

const ORG_ID = `${SITE_URL}/#organization`;

// sameAs 只收頁尾既有的對外社群連結（Facebook／LINE／GitHub），不收 mailto 與站內聯絡頁。
const SAME_AS_KINDS = new Set(["facebook", "line", "github"]);

/** 中英 root layout 共用：Organization + WebSite。 */
export function siteJsonLd(content: LayoutContent) {
  const sameAs = content.footer.social
    .filter((s) => SAME_AS_KINDS.has(s.kind) && /^https?:\/\//.test(s.href))
    .map((s) => s.href);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: content.brand,
        url: SITE_URL,
        description: content.meta.description,
        sameAs: [...new Set(sameAs)],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}${content.homeHref}#website`,
        name: content.brand,
        url: absoluteUrl(content.homeHref),
        description: content.meta.description,
        inLanguage: content.htmlLang,
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/** 開源頁：每張卡一筆 SoftwareSourceCode，順序與卡片相同。 */
export function openSourceJsonLd(content: OpenSourceContent, inLanguage: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: content.meta.title,
    description: content.meta.description,
    inLanguage,
    numberOfItems: content.repos.length,
    itemListElement: content.repos.map((repo, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: repo.name,
        description: repo.pitch,
        codeRepository: `https://github.com/${repo.repo}`,
        license: repo.license,
        url: absoluteUrl(repo.url),
      },
    })),
  };
}
