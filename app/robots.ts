import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/metadata";

// robots.txt（2026-09-24，隊長：「現在所有的網站應該都是讓 AI 找到」）。
// Next 16 metadata route：node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/robots.md
// 全站開放；主要 AI 爬蟲另外逐一點名 Allow，讓「歡迎」是明寫的，不是靠 * 推論。
// 名稱拼法依各家官方文件（2026-09-24 查）：
// - OpenAI  https://developers.openai.com/api/docs/bots
// - Anthropic https://support.claude.com/en/articles/8896518
// - Perplexity https://docs.perplexity.ai/guides/bots
// - Google-Extended https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// - Applebot-Extended https://support.apple.com/en-us/119829
// - CCBot https://commoncrawl.org/ccbot
// - Bytespider：ByteDance 無可連的官方文件，名稱取自它 UA 字串裡的 token（compatible; Bytespider; ...）
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
