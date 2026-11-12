const GITHUB_OWNER = "zaxardery8011-design";

// GitHub public repositories fetched from the owner's public-repos API on
// 2026-10-01. Keep this explicit so /go cannot become an open redirect.
const ALLOWED_REPOS = new Set([
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

const SOURCE_PATTERN = /^[a-z0-9_-]{1,32}$/;

// 連結預覽和爬蟲也會打 /go（貼文時 Threads/FB 會先抓一次網址），Next 也會拿 GET 自動回 HEAD。
// 這些都不是人點的，但不在這裡丟掉：照樣記一筆，多標 method 和 bot，算點擊時自己濾。
// 空 UA 也算 bot：瀏覽器一定會帶 UA。
const BOT_UA_PATTERN =
  /bot|crawl|spider|slurp|facebookexternalhit|meta-externalagent|externalhit|preview|linkexpanding|curl|wget|python|go-http|java\/|okhttp|headless/i;

export async function GET(
  request: Request,
  context: RouteContext<"/go/[repo]">,
) {
  const { repo } = await context.params;

  if (!ALLOWED_REPOS.has(repo)) {
    return new Response("Not Found", { status: 404 });
  }

  const requestedSource = new URL(request.url).searchParams.get("src") ?? "";
  const src = SOURCE_PATTERN.test(requestedSource) ? requestedSource : "other";

  const ua = request.headers.get("user-agent") ?? "";
  const bot = ua === "" || BOT_UA_PATTERN.test(ua);

  console.log(
    JSON.stringify({
      evt: "go_click",
      repo,
      src,
      method: request.method,
      bot,
      ts: new Date().toISOString(),
    }),
  );

  return Response.redirect(`https://github.com/${GITHUB_OWNER}/${repo}`, 302);
}
