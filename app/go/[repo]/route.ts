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

  console.log(
    JSON.stringify({ evt: "go_click", repo, src, ts: new Date().toISOString() }),
  );

  return Response.redirect(`https://github.com/${GITHUB_OWNER}/${repo}`, 302);
}
