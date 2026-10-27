export const GITHUB_OWNER = "zaxardery8011-design";

// GitHub public repositories fetched from the owner's public-repos API on
// 2026-10-01. Keep this explicit so /go cannot become an open redirect.
export const ALLOWED_REPOS = new Set([
  "aiwff-claude-plugin",
  "aiwff-mini",
  "aiwff-runtime",
  "dataflywheel",
  "dig-loop",
  "execution-proofs",
  "field-ops-demo",
  "grok-bot-routines-tw",
  "hyperv-mcp",
  "line-persona",
  "minibrain-cli",
  "minibrain-kit",
  "my-desktop-pet",
  "soplint",
  "task-ledger",
  "tidetrace",
  "x-fetch",
  "zax-site",
  "zax-social-assets",
  "zaxardery8011-design",
]);

const OWNER_REPO_URL = new RegExp(`^https://github\\.com/${GITHUB_OWNER}/([^/?#]+)/?$`);

// 站內連到自家 repo 時改走 /go/<repo>?src=<來源>，讓導流計數真的收得到點擊；
// 不在白名單的（別人的 repo、子路徑）原樣回傳，不會變成 404。
export function goHref(url: string, src: string): string {
  const repo = OWNER_REPO_URL.exec(url)?.[1];
  return repo && ALLOWED_REPOS.has(repo) ? `/go/${repo}?src=${src}` : url;
}
