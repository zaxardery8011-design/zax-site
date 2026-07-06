import { Card, PageHero, SectionHeader } from "@/app/components";

const openSourceRepos = [
  {
    name: "soplint",
    url: "https://github.com/zaxardery8011-design/soplint",
    stars: 40,
    license: "MIT",
    pitch:
      "對 AI 工作節點的 SOP 執行做靜態規則審計,治長時間運行的「指令漂移」與工作紀律失修。",
  },
  {
    name: "Mr.Wu 桌寵 (my-desktop-pet)",
    url: "https://github.com/zaxardery8011-design/my-desktop-pet",
    stars: 0,
    license: "MIT",
    pitch:
      "真寵物照片→AI影片→去背→Electron 透明桌寵;換照片就生整套動作庫。示範滑鼠穿透與局部像素碰撞。",
  },
  {
    name: "tidetrace / 潮痕",
    url: "https://github.com/zaxardery8011-design/tidetrace",
    stars: 5,
    license: "MIT",
    pitch:
      "Threads 社群輿情監控 Chrome 擴充:本地關鍵字高亮 + 回覆狀態追蹤 + BYOK 多 LLM 自訂回覆生成。",
  },
  {
    name: "execution-proofs",
    url: "https://github.com/zaxardery8011-design/execution-proofs",
    stars: 3,
    license: "MIT",
    pitch:
      "別讓 AI 說謊!基於 MCP 的本地遙測閘道,讓自動化 Client 回報「完成」時必須用真實檔案與時間戳記證明。",
  },
  {
    name: "earthlife",
    url: "https://github.com/tingyi365/earthlife",
    stars: 2,
    license: "MIT",
    pitch:
      "每 30 分鐘自主進化的網頁生活模擬器,完全由工作節點疊代開發,展示自動化提交與動態事件的閉環。",
  },
  {
    name: "agy-quota",
    url: "https://github.com/tingyi365/agy-quota",
    stars: 1,
    license: "MIT",
    pitch:
      "headless 額度查詢工具:無 IDE/TTY 的自動化排程與 CI 環境下,即時查多個 LLM 提供商的額度水位。",
  },
] as const;

export default function OpenSource() {
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
          我們把踩過的坑碼化成工具,開源給站在後面的人。這裡只放已公開的 repo,
          星數與授權照目前定版資料呈現,不灌水、不補假截圖。
        </p>
      </PageHero>

      <section className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full">
        <SectionHeader
          badge="PUBLIC REPOS"
          title="做給自己用,也讓開發者直接看見做法"
          titleClassName="mb-10"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {openSourceRepos.map((repo) => (
            <Card
              as="a"
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 flex flex-col min-h-64"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs px-2.5 py-1 rounded border border-[color:var(--border)] text-[color:var(--fg-1)]">
                  ★ {repo.stars}
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-[color:var(--accent-cyan)]/15 text-[color:var(--accent-cyan)] border border-[color:var(--accent-cyan)]/30">
                  {repo.license}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[color:var(--fg-0)]">
                {repo.name}
              </h3>
              <p className="text-sm text-[color:var(--fg-1)] leading-relaxed mb-6">
                {repo.pitch}
              </p>
              <span className="mt-auto text-sm text-[color:var(--accent-cyan)]">
                GitHub →
              </span>
            </Card>
          ))}
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
