import type { OpenSourceContent } from "../schema";

// 英文內容（A filled from B framework placeholders）。規則同 content/en/home.ts：
// README 逐字可取的就取（註明來源），取不到的依中文正本起草英文。
// 指令（start）是程式碼不是文案，照搬。
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
    },
    {
      name: "earthlife",
      url: "https://github.com/tingyi365/earthlife",
      repo: "tingyi365/earthlife",
      license: "MIT",
      kind: "external",
      pitch:
        "A web life simulator that evolves itself every 30 minutes through work-node iteration, showing a closed loop of automated commits and dynamic events.",
      start: "git clone https://github.com/tingyi365/earthlife",
      startNote:
        "Single HTML file, no framework, no build. Open index.html directly, or play online at earthlife.pages.dev.",
    },
    {
      name: "agy-quota",
      url: "https://github.com/tingyi365/agy-quota",
      repo: "tingyi365/agy-quota",
      license: "MIT",
      kind: "external",
      pitch:
        "A headless quota checker for automation schedules and CI environments without an IDE or TTY, reporting live quota levels across multiple LLM providers.",
      start: "git clone https://github.com/tingyi365/agy-quota\nnode bin/agy-quota.js",
      startNote: "",
    },
  ],
  labels: {
    featured: "Featured page",
    updated: "Last updated",
    quickStart: "Quick start",
    internalLink: "View local task engine →",
    externalLink: "GitHub →",
  },
  allRepos: {
    href: "https://github.com/zaxardery8011-design",
    badge: "ZAX GITHUB",
    title: "See all open source →",
    body: "Other public experiments, tools, and automation projects keep landing on GitHub. They get added to the site when the screenshots or docs are stable enough.",
  },
};
