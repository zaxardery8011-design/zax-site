// 星數與最近更新一律回源 GitHub,不寫死在頁面裡。
// 首頁與 /open-source 共用同一支,避免兩頁各抓各的又漂移。
export const REPO_META_REVALIDATE = 3600;

export type RepoMeta = { stars: number; pushedAt: string };

// 抓不到就回 null——寧可不顯示,也不顯示一個過期的數字。
export async function fetchRepoMeta(repo: string): Promise<RepoMeta | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REPO_META_REVALIDATE },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (typeof data?.stargazers_count !== "number" || !data?.pushed_at) {
      return null;
    }
    return {
      stars: data.stargazers_count,
      pushedAt: String(data.pushed_at).slice(0, 10),
    };
  } catch {
    return null;
  }
}

export function fetchRepoMetas(
  repos: readonly string[],
): Promise<(RepoMeta | null)[]> {
  return Promise.all(repos.map((r) => fetchRepoMeta(r)));
}
