import { ALLOWED_REPOS, GITHUB_OWNER } from "@/app/lib/go";

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
