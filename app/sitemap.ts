import type { MetadataRoute } from "next";
import { enReady } from "@/app/lib/en-ready";
import { absoluteUrl, bilingualAlternates } from "@/app/lib/metadata";
import { layout as zhLayout } from "@/content/zh-Hant/layout";

// sitemap.xml（2026-09-24）。Next 16 metadata route：
// node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md
// 靜態產生（不用 request-time API），所以內容在 build 時定案。
//
// 頁面清單：中文頁＝中文首頁＋中文導覽列裡的站內連結（content/zh-Hant/layout.ts），
// 導覽列就是站上真實存在的頁；英文頁只列已過發布閘（app/lib/en-ready.ts）的。
// lastModified：用 build 時間（每次部署＝網站內容的新版本）。沒用各頁 git 時間，
// 因為部署平台的 clone 可能是淺的，拿到的時間不可靠。
const BUILD_TIME = new Date();

// 中英成對的頁：與各頁 metadata 的 bilingualAlternates(...) 同一組。
const EN_PAIRS: { zh: string; en: string; ready: boolean }[] = [
  { zh: "/", en: "/en", ready: enReady.home },
  { zh: "/open-source", en: "/en/open-source", ready: enReady.openSource },
];

function languages(zh: string, en: string) {
  return Object.fromEntries(
    Object.entries(bilingualAlternates(zh, en)).map(([k, v]) => [k, absoluteUrl(v)]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const zhPaths = [
    ...new Set([
      zhLayout.homeHref,
      ...zhLayout.nav.map((n) => n.href).filter((h) => h.startsWith("/")),
    ]),
  ];
  const pairs = EN_PAIRS.filter((p) => p.ready);

  const entries: MetadataRoute.Sitemap = zhPaths.map((path) => {
    const pair = pairs.find((p) => p.zh === path);
    return {
      url: absoluteUrl(path),
      lastModified: BUILD_TIME,
      ...(pair ? { alternates: { languages: languages(pair.zh, pair.en) } } : {}),
    };
  });

  for (const pair of pairs) {
    entries.push({
      url: absoluteUrl(pair.en),
      lastModified: BUILD_TIME,
      alternates: { languages: languages(pair.zh, pair.en) },
    });
  }

  return entries;
}
