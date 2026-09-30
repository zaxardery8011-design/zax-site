import type { OpenSourceContent } from "../schema";

// 英文內容（A filled from B framework placeholders）。規則同 content/en/home.ts：
// README 逐字可取的就取（註明來源），取不到的依中文正本起草英文。
// 指令（start）是程式碼不是文案，照搬。
// 2026-09-23 A 改（與中文同批）：每張卡加 evidence；新增 aiwff-mini／task-ledger／hyperv-mcp／dataflywheel；
// earthlife 改過去式；移除 agy-quota。
export const openSource: OpenSourceContent = {
  meta: {
    title: "Open source | ZAX",
    description:
      "We turn the traps we hit into tools, and put them on GitHub. Stars and last update are pulled from GitHub every hour. Whether a project is alive is what GitHub says.",
  },
  hero: {
    badge: "OPEN SOURCE",
    titleEmphasis: "We turn the traps we hit into tools.",
    titleRest: "They are on GitHub.",
    body: "Stars and last update are pulled from GitHub every hour.",
    bodyEmphasis: "Whether a project is alive is what GitHub says.",
  },
  reposSection: {
    badge: "PUBLIC REPOS",
    title: "Built for our own work, exposed so developers can inspect the method",
  },
  repos: [
    {
      name: "aiwff-runtime",
      url: "/minibrain",
      repo: "zaxardery8011-design/aiwff-runtime",
      license: "MIT",
      kind: "internal",
      // README 候選：A local minimal brain. / Free to try — MOCK_WORKER=1 runs the full loop with no API key.
      pitch:
        "An open source task engine that runs on your own machine. Each task leaves a file. Default mock mode does not need an API key. To make Claude CLI actually run, you use your own Claude account.",
      start:
        "git clone https://github.com/zaxardery8011-design/aiwff-runtime\ncp .env.example .env\nnpm start",
      startNote: "",
      evidence: {
        label: "Tests are on GitHub Actions. The link is here. Pass or fail is whatever that page shows now.",
        href: "https://github.com/zaxardery8011-design/aiwff-runtime/actions",
      },
    },
    {
      name: "soplint",
      url: "https://github.com/zaxardery8011-design/soplint",
      repo: "zaxardery8011-design/soplint",
      license: "MIT",
      kind: "external",
      // README 核心工具鏈表
      pitch:
        "Static SOP audit for AI work nodes. It catches instruction drift.",
      start: "/plugin marketplace add zaxardery8011-design/soplint",
      startNote:
        "Run this inside Claude Code; if you do not want the plugin path, clone the repo and edit soplint.config.json.",
      evidence: {
        label: "Tests are on GitHub Actions. The link is here. Pass or fail is whatever that page shows now.",
        href: "https://github.com/zaxardery8011-design/soplint/actions",
      },
    },
    {
      name: "line-persona",
      url: "https://github.com/zaxardery8011-design/line-persona",
      repo: "zaxardery8011-design/line-persona",
      license: "MIT",
      kind: "external",
      // README 核心工具鏈表（取第一句）
      pitch: "BYO-AI LINE clone framework. This is how the stack reaches real users.",
      start:
        "git clone https://github.com/zaxardery8011-design/line-persona\nnpm install\nnpm start",
      startNote:
        "You need: a LINE Messaging API channel from LINE Developers (channel access token and channel secret), a model API key (any OpenAI-compatible endpoint, or a local model instead), Node 18+, and a publicly reachable webhook URL.",
      evidence: { label: "Chat with a live one on LINE", href: "https://line.me/R/ti/p/@395jcpsb" },
    },
    {
      name: "dig-loop",
      url: "https://github.com/zaxardery8011-design/dig-loop",
      repo: "zaxardery8011-design/dig-loop",
      license: "MIT",
      kind: "external",
      pitch:
        "An AI digs one domain each day for problems that are not solved yet. Solved items are not collected again. Finished digs go on the solved list.",
      start: "git clone https://github.com/zaxardery8011-design/dig-loop",
      startNote:
        "This repo is a template. Copy it and fill in your own domain. If an AI sets it up, tell that AI to read AGENTS.md first.",
      evidence: {
        label: "Header check script. Clone it and run it yourself.",
        href: "https://github.com/zaxardery8011-design/dig-loop/blob/main/tools/verify_header.py",
      },
    },
    {
      name: "grok-bot-routines-tw",
      url: "https://github.com/zaxardery8011-design/grok-bot-routines-tw",
      repo: "zaxardery8011-design/grok-bot-routines-tw",
      license: "MIT",
      kind: "external",
      pitch:
        "Plenty of guides teach you to schedule a bot. This one adds the check that it actually finished.",
      start:
        "Hand https://github.com/zaxardery8011-design/grok-bot-routines-tw to your AI and tell it to read AGENTS.md",
      startNote:
        "When it says it is done, open the Grok automation list and find that row. The row has to be there.",
      evidence: {
        label: "The AGENTS.md to read before handing this to an AI",
        href: "https://github.com/zaxardery8011-design/grok-bot-routines-tw/blob/main/AGENTS.md",
      },
    },
    {
      name: "aiwff-mini",
      url: "https://github.com/zaxardery8011-design/aiwff-mini",
      repo: "zaxardery8011-design/aiwff-mini",
      license: "Apache-2.0",
      kind: "external",
      pitch:
        "Settings and memory files that stay on your own machine. Who it is, and who you are, are written in the files. A change to those files raises a warning.",
      start: "Read README.md in this folder and install aiwff-mini for me.",
      startNote:
        "Paste this into your AI tool (Claude Code, Codex, Cursor, etc.). It lists the files it will create and waits for your OK. Requires PowerShell 7.",
      evidence: {
        label: "Install flow and self-check (no public tests yet)",
        href: "https://github.com/zaxardery8011-design/aiwff-mini#install",
      },
    },
    {
      name: "execution-proofs",
      url: "https://github.com/zaxardery8011-design/execution-proofs",
      repo: "zaxardery8011-design/execution-proofs",
      license: "MIT",
      kind: "external",
      // README 核心工具鏈表
      pitch:
        "MCP telemetry gateway. Forces agents to prove done with real files and timestamps.",
      start:
        "git clone https://github.com/zaxardery8011-design/execution-proofs\nnpm install\nnpm run build",
      startNote: "After the build, add the server to your MCP client config.",
      evidence: {
        label: "Clone the repo and run npm test",
        href: "https://github.com/zaxardery8011-design/execution-proofs/blob/main/test/core.test.ts",
      },
    },
    {
      name: "task-ledger",
      url: "https://github.com/zaxardery8011-design/task-ledger",
      repo: "zaxardery8011-design/task-ledger",
      license: "Apache-2.0",
      kind: "external",
      pitch:
        "A single-machine task ledger: progress is read from facts on disk, not from the agent's own report, and work survives a kill.",
      start: "pip install -e .\ntask-ledger demo-resume",
      startNote: "No network, no API key. Requires Python 3.10+. Currently alpha.",
      evidence: {
        label: "Offline self-test: kill it, watch it resume",
        href: "https://github.com/zaxardery8011-design/task-ledger#kill-then-resume-demo",
      },
    },
    {
      name: "hyperv-mcp",
      url: "https://github.com/zaxardery8011-design/hyperv-mcp",
      repo: "zaxardery8011-design/hyperv-mcp",
      license: "MIT",
      kind: "external",
      pitch:
        "Archived. Spec plus a PoC. Mock mode runs. No new features.",
      start:
        "git clone https://github.com/zaxardery8011-design/hyperv-mcp\npip install mcp\npython tests\\mock_server_test.py",
      startNote: "Mock mode needs no admin rights and no Hyper-V role.",
      evidence: {
        label: "Tests are on GitHub Actions. The link is here. Pass or fail is whatever that page shows now.",
        href: "https://github.com/zaxardery8011-design/hyperv-mcp/actions",
      },
    },
    {
      name: "tidetrace",
      url: "https://github.com/zaxardery8011-design/tidetrace",
      repo: "zaxardery8011-design/tidetrace",
      license: "MIT",
      kind: "external",
      // README 核心工具鏈表
      pitch:
        "Threads keyword patrol Chrome extension. Local highlight, reply tracking, and a BYOK LLM.",
      start: "git clone https://github.com/zaxardery8011-design/tidetrace",
      startNote:
        "No build step. Open chrome://extensions, turn on Developer mode, choose Load unpacked, and select this folder.",
      evidence: {
        label: "Install steps (no public screenshots yet)",
        href: "https://github.com/zaxardery8011-design/tidetrace#readme",
      },
    },
    {
      name: "dataflywheel",
      url: "https://github.com/zaxardery8011-design/dataflywheel",
      repo: "zaxardery8011-design/dataflywheel",
      license: "MIT",
      kind: "external",
      pitch:
        "Archived. Telegram takes a YouTube URL. Markdown is written to your own computer. No new features.",
      start:
        "git clone https://github.com/zaxardery8011-design/dataflywheel\npip install -r requirements.txt",
      startNote: "Requires ffmpeg and your own Gemini key.",
      evidence: {
        label: "Test file: clone the repo and run pytest",
        href: "https://github.com/zaxardery8011-design/dataflywheel/blob/main/tests/test_url_parsing.py",
      },
    },
    {
      name: "field-ops-demo",
      url: "https://github.com/zaxardery8011-design/field-ops-demo",
      repo: "zaxardery8011-design/field-ops-demo",
      license: "MIT",
      kind: "external",
      pitch:
        "A field-service demo for a small contractor: clock in, dispatch, and report from a phone. One HTML file, no build.",
      start: "git clone https://github.com/zaxardery8011-design/field-ops-demo",
      startNote: "Open index.html directly, or use the proof link to see it live.",
      evidence: {
        label: "Open the live demo",
        href: "https://zaxardery8011-design.github.io/field-ops-demo/",
      },
    },
    {
      name: "my-desktop-pet",
      url: "https://github.com/zaxardery8011-design/my-desktop-pet",
      repo: "zaxardery8011-design/my-desktop-pet",
      license: "MIT",
      kind: "external",
      // README「All repos」
      pitch: "turn your real pet photo into an animated transparent desktop companion.",
      start:
        "git clone https://github.com/zaxardery8011-design/my-desktop-pet\nnpm install\nnpm start",
      startNote: "",
      evidence: {
        label: "The full animation set (12 moves)",
        href: "https://github.com/zaxardery8011-design/my-desktop-pet/tree/master/assets/apng",
      },
    },
    {
      name: "earthlife",
      url: "https://github.com/tingyi365/earthlife",
      repo: "tingyi365/earthlife",
      license: "MIT",
      kind: "external",
      pitch:
        "A web life simulator developed entirely by an autonomous work node. It shipped a round every 30 minutes through June; development has stopped, but it is still playable online.",
      start: "git clone https://github.com/tingyi365/earthlife",
      startNote:
        "Single HTML file, no framework, no build. Open index.html directly, or play online at earthlife.pages.dev.",
      evidence: { label: "Play it online", href: "https://earthlife.pages.dev" },
    },
  ],
  labels: {
    featured: "Featured page",
    updated: "Last updated",
    quickStart: "Quick start",
    internalLink: "View local task engine →",
    externalLink: "GitHub →",
    evidence: "Proof:",
  },
  allRepos: {
    href: "https://github.com/zaxardery8011-design",
    badge: "ZAX GITHUB",
    title: "See all open source →",
    body: "Other public experiments, tools, and automation projects keep landing on GitHub. They get added to the site when the screenshots or docs are stable enough.",
  },
};
