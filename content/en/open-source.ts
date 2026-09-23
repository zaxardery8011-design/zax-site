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
      "We turn the traps we hit into tools, then open source them for the people building after us. Each card's stars and last-updated value are pulled from GitHub every hour. It is not me saying the project is alive. GitHub says it.",
  },
  hero: {
    badge: "OPEN SOURCE",
    titleEmphasis: "Build on what came before,",
    titleRest: "then leave stronger ground for others.",
    body: "We turn the traps we hit into tools, then open source them for the people building after us. Each card's stars and last-updated value are pulled from GitHub every hour, not frozen by hand.",
    bodyEmphasis: "It is not me saying the project is alive. GitHub says it.",
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
        "An open source AI task brain that runs on your own machine. Mock mode runs the full loop for free; a paid Claude subscription is only needed when you connect real Claude workers.",
      start:
        "git clone https://github.com/zaxardery8011-design/aiwff-runtime\ncp .env.example .env\nnpm start",
      startNote: "",
      evidence: {
        label: "Automated tests on GitHub Actions (passing)",
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
        "Static SOP-compliance audit for AI work nodes — catches instruction drift over long runs",
      start: "/plugin marketplace add zaxardery8011-design/soplint",
      startNote:
        "Run this inside Claude Code; if you do not want the plugin path, clone the repo and edit soplint.config.json.",
      evidence: {
        label: "Automated tests on GitHub Actions (passing)",
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
      pitch: "BYO-AI LINE clone framework — how the stack reaches real users.",
      start:
        "git clone https://github.com/zaxardery8011-design/line-persona\nnpm install\nnpm start",
      startNote: "",
      evidence: { label: "Chat with a live one on LINE", href: "https://line.me/R/ti/p/@395jcpsb" },
    },
    {
      name: "aiwff-mini",
      url: "https://github.com/zaxardery8011-design/aiwff-mini",
      repo: "zaxardery8011-design/aiwff-mini",
      license: "Apache-2.0",
      kind: "external",
      pitch:
        "A personal brain that runs on your own machine: a soul file, memory across chats, and a warning when the soul file is quietly changed.",
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
        'MCP telemetry gateway — forces agents to prove "done" with real files & timestamps',
      start:
        "git clone https://github.com/zaxardery8011-design/execution-proofs\nnpm install\nnpm run build",
      startNote: "After the build, add the server to your MCP client config.",
      evidence: {
        label: "Test file: clone it and run npm test",
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
        "A single-machine task ledger that keeps AI agents from inventing progress: receipts on disk, progress from disk facts only, and work that survives a kill.",
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
        "An MCP server that lets AI manage Hyper-V VMs: start, checkpoint, roll back. Currently spec plus PoC; start with mock mode.",
      start:
        "git clone https://github.com/zaxardery8011-design/hyperv-mcp\npip install mcp\npython tests\\mock_server_test.py",
      startNote: "Mock mode needs no admin rights and no Hyper-V role.",
      evidence: {
        label: "Automated tests on GitHub Actions (passing)",
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
        "Threads keyword patrol Chrome extension — local highlight + reply tracking + BYOK LLM",
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
        "Send a YouTube URL from your phone via Telegram, and a distilled Markdown note lands on your own computer.",
      start:
        "git clone https://github.com/zaxardery8011-design/dataflywheel\npip install -r requirements.txt",
      startNote: "Requires ffmpeg and your own Gemini key.",
      evidence: {
        label: "Test file",
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
