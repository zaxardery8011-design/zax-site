import Link from "next/link";
import { Card, PageHero, SectionHeader } from "@/app/components";
import { fetchRepoMetas } from "@/app/lib/github";
import { pageMetadata } from "@/app/lib/metadata";

export const metadata = pageMetadata({
  title: "開源專案 | ZAX",
  description:
    "我們把踩過的坑碼化成工具,開源給站在後面的人。每張卡的星數與「最近更新」都是每小時回源 GitHub 抓的——不是我說它還活著,是 GitHub 說的。",
  path: "/open-source",
});

// 每小時回源 GitHub 一次：星數與最近更新日期都不是寫死的定版數字。
// 注意：Next 要求這個值是靜態字面量,不能是 import 進來的常數(會擋 build)。
export const revalidate = 3600;

const openSourceRepos = [
  {
    name: "小主腦 (aiwff-runtime)",
    url: "/minibrain",
    repo: "zaxardery8011-design/aiwff-runtime",
    license: "MIT",
    kind: "internal",
    pitch:
      "裝在自己電腦上的開源 AI 任務主腦。預設 mock 模式免費跑通,要接真 Claude worker 時才需要付費 Claude 訂閱。",
    start:
      "git clone https://github.com/zaxardery8011-design/aiwff-runtime\ncp .env.example .env\nnpm start",
    startNote: "",
  },
  {
    name: "soplint",
    url: "https://github.com/zaxardery8011-design/soplint",
    repo: "zaxardery8011-design/soplint",
    license: "MIT",
    kind: "external",
    pitch:
      "對 AI 工作節點的 SOP 執行做靜態規則審計,治長時間運行的「指令漂移」與工作紀律失修。",
    start: "/plugin marketplace add zaxardery8011-design/soplint",
    startNote:
      "在 Claude Code 裡輸入這行即可;不用 plugin 就 clone repo 改 soplint.config.json。",
  },
  {
    name: "line-persona",
    url: "https://github.com/zaxardery8011-design/line-persona",
    repo: "zaxardery8011-design/line-persona",
    license: "MIT",
    kind: "external",
    pitch:
      "LINE 原生 AI 分身框架。填 env、人格與知識檔就能上線,可用自己的 API key 在雲端與本地模型之間切換。",
    start:
      "git clone https://github.com/zaxardery8011-design/line-persona\nnpm install\nnpm start",
    startNote: "",
  },
  {
    name: "Mr.Wu 桌寵 (my-desktop-pet)",
    url: "https://github.com/zaxardery8011-design/my-desktop-pet",
    repo: "zaxardery8011-design/my-desktop-pet",
    license: "MIT",
    kind: "external",
    pitch:
      "真寵物照片→AI影片→去背→Electron 透明桌寵;換照片就生整套動作庫。示範滑鼠穿透與局部像素碰撞。",
    start:
      "git clone https://github.com/zaxardery8011-design/my-desktop-pet\nnpm install\nnpm start",
    startNote: "",
  },
  {
    name: "tidetrace / 潮痕",
    url: "https://github.com/zaxardery8011-design/tidetrace",
    repo: "zaxardery8011-design/tidetrace",
    license: "MIT",
    kind: "external",
    pitch:
      "Threads 社群輿情監控 Chrome 擴充:本地關鍵字高亮 + 回覆狀態追蹤 + BYOK 多 LLM 自訂回覆生成。",
    start: "git clone https://github.com/zaxardery8011-design/tidetrace",
    startNote:
      "無 build 步驟;chrome://extensions → 開發人員模式 → 載入未封裝,選這個資料夾。",
  },
  {
    name: "execution-proofs",
    url: "https://github.com/zaxardery8011-design/execution-proofs",
    repo: "zaxardery8011-design/execution-proofs",
    license: "MIT",
    kind: "external",
    pitch:
      "別讓 AI 說謊!基於 MCP 的本地遙測閘道,讓自動化 Client 回報「完成」時必須用真實檔案與時間戳記證明。",
    start:
      "git clone https://github.com/zaxardery8011-design/execution-proofs\nnpm install\nnpm run build",
    startNote: "build 完把 server 加進你的 MCP client 設定檔。",
  },
  {
    name: "earthlife",
    url: "https://github.com/tingyi365/earthlife",
    repo: "tingyi365/earthlife",
    license: "MIT",
    kind: "external",
    pitch:
      "每 30 分鐘自主進化的網頁生活模擬器,完全由工作節點疊代開發,展示自動化提交與動態事件的閉環。",
    start: "git clone https://github.com/tingyi365/earthlife",
    startNote:
      "單一 HTML 檔、無框架無 build,直接開 index.html;或線上玩 earthlife.pages.dev。",
  },
  {
    name: "agy-quota",
    url: "https://github.com/tingyi365/agy-quota",
    repo: "tingyi365/agy-quota",
    license: "MIT",
    kind: "external",
    pitch:
      "headless 額度查詢工具:無 IDE/TTY 的自動化排程與 CI 環境下,即時查多個 LLM 提供商的額度水位。",
    start:
      "git clone https://github.com/tingyi365/agy-quota\nnode bin/agy-quota.js",
    startNote: "",
  },
] as const;

function Badge({
  children,
  tone = "plain",
}: {
  children: React.ReactNode;
  tone?: "plain" | "cyan";
}) {
  const cls =
    tone === "cyan"
      ? "bg-[color:var(--accent-cyan)]/15 text-[color:var(--accent-cyan)] border-[color:var(--accent-cyan)]/30"
      : "border-[color:var(--border)] text-[color:var(--fg-1)]";
  return (
    <span className={`text-xs px-2.5 py-1 rounded border ${cls}`}>
      {children}
    </span>
  );
}

export default async function OpenSource() {
  const metas = await fetchRepoMetas(openSourceRepos.map((r) => r.repo));

  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <PageHero
        badge="OPEN SOURCE"
        title={
          <>
            <span className="neon-text">站在巨人肩上,</span>
            <br />
            長成讓人站的巨人。
          </>
        }
      >
        <p>
          我們把踩過的坑碼化成工具,開源給站在後面的人。每張卡的星數與「最近更新」
          都是每小時回源 GitHub 抓的,不是寫死的定版數字——
          <span className="text-[color:var(--fg-0)]">
            不是我說它還活著,是 GitHub 說的。
          </span>
        </p>
      </PageHero>

      <section className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full">
        <SectionHeader
          badge="PUBLIC REPOS"
          title="做給自己用,也讓開發者直接看見做法"
          titleClassName="mb-10"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {openSourceRepos.map((repo, i) => {
            const meta = metas[i];
            return (
              <Card
                key={repo.name}
                className="p-5 flex flex-col"
                glow={repo.kind === "internal" ? "cyan" : "none"}
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {repo.kind === "internal" ? <Badge>主打頁</Badge> : null}
                  {meta ? <Badge>★ {meta.stars}</Badge> : null}
                  <Badge tone="cyan">{repo.license}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[color:var(--fg-0)]">
                  {repo.name}
                </h3>
                {meta ? (
                  <div className="text-xs text-[color:var(--fg-1)] mb-3">
                    最近更新{" "}
                    <time dateTime={meta.pushedAt} className="font-mono">
                      {meta.pushedAt}
                    </time>
                  </div>
                ) : null}
                <p className="text-sm text-[color:var(--fg-1)] leading-relaxed mb-4">
                  {repo.pitch}
                </p>

                <div className="mb-4">
                  <div className="text-[11px] tracking-[0.2em] text-[color:var(--accent-cyan)] mb-1.5">
                    一行上手
                  </div>
                  <pre className="text-xs font-mono leading-relaxed rounded-lg border border-[color:var(--border)] bg-black/30 p-3 overflow-x-auto whitespace-pre text-[color:var(--fg-1)]">
                    <code>{repo.start}</code>
                  </pre>
                  {repo.startNote ? (
                    <p className="text-[11px] text-[color:var(--fg-1)] mt-1.5 leading-relaxed">
                      {repo.startNote}
                    </p>
                  ) : null}
                </div>

                {repo.kind === "internal" ? (
                  <Link
                    href={repo.url}
                    className="mt-auto text-sm text-[color:var(--accent-cyan)]"
                  >
                    看小主腦 →
                  </Link>
                ) : (
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm text-[color:var(--accent-cyan)]"
                  >
                    GitHub →
                  </a>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full">
        <Card
          as="a"
          href="https://github.com/zaxardery8011-design"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 sm:p-8 block"
          glow="cyan"
        >
          <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
            ZAX GITHUB
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">看全部開源 →</h2>
          <p className="text-[color:var(--fg-1)] leading-relaxed max-w-3xl">
            其他公開實驗、工具與自動化專案會持續放在 GitHub,等有穩定截圖或文件再補進官網。
          </p>
        </Card>
      </section>
    </main>
  );
}
