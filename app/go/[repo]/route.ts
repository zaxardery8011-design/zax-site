import { ALLOWED_REPOS, GITHUB_OWNER } from "@/app/lib/go";

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
