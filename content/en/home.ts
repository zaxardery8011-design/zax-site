import type { HomeContent } from "../schema";

// 英文內容（A filled from B framework placeholders）。
// 規則：能從已公開的 GitHub 個人頁 README 逐字取的就取（註明來源）；
// 取不到的依中文正本起草英文。
// 註「README 候選」＝README 有意思相近但不等價的句子，留給 A 決定要不要用。
// 2026-09-23 A 改：每張卡加 evidence、result 去掉點不到的自述、新增 line-persona 卡（與中文同批）。
// 2026-09-24 對齊 A 13:35 定稿：加 northStar／starter；精選拿掉沒有公開證據的 Threads 擴充（只留開源頁），剩 4 張。
const LINE_URL = "https://line.me/R/ti/p/@395jcpsb";

export const home: HomeContent = {
  s1Hero: {
    eyebrow: "AI work nodes · open source · verifiable",
    // README H1（A 09:46 裁示英文首屏可用個人頁 tagline）
    titleLead: "Anyone can make AI agents run.",
    titleEmphasis:
      "I build the part that lets one person keep a crowd of bluffing agents in check.",
    // README 候選：…you get a local AI work node that finishes work *and* proves it.
    subtitle:
      'Every "done" needs a receipt: the result, the process, and what it failed to do all stay as files you can inspect on your own machine. Install your own node, or try a running one first.',
    primaryCta: { label: "Install a local task engine →", href: "/minibrain" },
    secondaryCta: { label: "Try it first on LINE", href: LINE_URL },
  },
  northStar: {
    lines: [
      "Everyone deserves an AI brain of their own.",
      "It lives on your machine, and everything it does can be checked.",
      "You and your brain, walking into what comes next together.",
    ],
  },
  starter: {
    lines: [
      "You don't have to understand it yourself.",
      'Give this URL to your AI and say: "Read it and explain it to me. I\'m new."',
      "Take whatever you need.",
    ],
    cta: { label: "All open-source repos →", href: "https://github.com/zaxardery8011-design" },
  },
  routes: {
    badge: "MINI BRAIN",
    title: 'Local task engine: an agent runtime where every "done" leaves a receipt',
    // README 候選：A local minimal brain. Send a task to Telegram, Claude runs it on your machine…
    intro:
      "Send it a task, let it run in the background, get the result back, and watch progress in the browser. All state stays on your machine, not on someone else's server. Open source, MIT, free to run in mock mode.",
    cards: [
      {
        eyebrow: "Path A · I want to run it myself",
        title: "DIY: clone it and run it",
        body: "If you can open a terminal and copy-paste, you can start. Mock mode runs the full loop for free, and one prompt can ask your AI coding agent to install it.",
        cta: "Read the one-prompt install →",
        href: "/minibrain",
      },
      {
        eyebrow: "Path B · I want to try it first",
        title: "Try it: LINE main brain lab",
        body: "Skip the command line for now. Talk to a running main brain in LINE, see whether the model fits your workflow, then decide whether to run your own copy or plan a fuller setup.",
        cta: "Add LINE and try it →",
        href: LINE_URL,
      },
    ],
  },
  s4OpenSource: {
    badge: "FEATURED CASES",
    title: "Featured cases: build the engine first, then add the guardrails",
    intro:
      "These are not concept drafts. They are projects iterated inside AIWFF work nodes, published on GitHub, or turned into entry points. Each card's stars and last-updated value are pulled from GitHub every hour, not frozen by hand.",
    introEmphasis: "It is not me saying the project is alive. GitHub says it.",
    cards: [
      {
        name: "aiwff-runtime",
        repo: "zaxardery8011-design/aiwff-runtime",
        license: "MIT",
        href: "/minibrain",
        // README 候選：The local agent runtime — the engine that runs disciplined agents
        pitch:
          'An agent runtime where every "done" leaves a receipt: install it on your own machine, run the full loop in mock mode first, then decide whether to connect real workers.',
        method:
          "A local file bus records tasks, progress, and outputs, so users can watch status in the browser and still inspect the file evidence later.",
        result: "Packaged into the local task engine page, install guide, and public repo so it can be adopted from zero.",
        evidence: {
          label: "Automated tests on GitHub Actions (passing)",
          href: "https://github.com/zaxardery8011-design/aiwff-runtime/actions",
        },
      },
      {
        name: "soplint",
        repo: "zaxardery8011-design/soplint",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/soplint",
        // README 核心工具鏈表
        pitch:
          "Static SOP-compliance audit for AI work nodes — catches instruction drift over long runs",
        method: "Turns SOPs into scannable static rules, audits node outputs line by line, and catches drift.",
        result: "Open source, with automated tests on every push. The star count on this card is live.",
        evidence: {
          label: "Automated tests on GitHub Actions (passing)",
          href: "https://github.com/zaxardery8011-design/soplint/actions",
        },
      },
      {
        name: "line-persona",
        repo: "zaxardery8011-design/line-persona",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/line-persona",
        pitch:
          "Fill in three files and you get an AI twin that lives on LINE, talks like you, and runs on the model you choose.",
        method:
          "Keys and model go in .env, your voice in profile.md, your data in knowledge.md. Switch between cloud and local models freely. If you don't code, have your AI read AGENTS.md and set it up for you.",
        result:
          "v0.2.0 is open source. Our Brain Lab account is live on LINE, so you can try one before building your own.",
        evidence: { label: "Chat with a live one on LINE", href: LINE_URL },
      },
      {
        name: "execution-proofs",
        repo: "zaxardery8011-design/execution-proofs",
        license: "MIT",
        href: "https://github.com/zaxardery8011-design/execution-proofs",
        // README 核心工具鏈表
        pitch:
          'MCP telemetry gateway — forces agents to prove "done" with real files & timestamps',
        method:
          'Built as a local MCP telemetry gateway that intercepts "done" claims and requires real files plus timestamps.',
        result: "Open source, test suite included. Clone it and run it yourself.",
        evidence: {
          label: "Test file: clone it and run npm test",
          href: "https://github.com/zaxardery8011-design/execution-proofs/blob/main/test/core.test.ts",
        },
      },
    ],
    labels: {
      updated: "Last updated",
      method: "Method:",
      result: "Result:",
      repoLink: "View repo →",
      entryLink: "View entry →",
      evidence: "Proof:",
    },
    allCta: { label: "See all open source projects →", href: "/en/open-source" },
  },
  // 電子報文案目前只有中文，英文版不渲染（要開請 A 先給英文文案）
  showNewsletter: false,
  s5Try: {
    badge: "LINE MAIN BRAIN LAB",
    title: "Do not want to install yet? Talk to a running main brain in LINE first",
    // README 候選：don't want to install anything? Chat with a running brain first, then decide.
    body: "Add the LINE main brain lab and see how a running brain responds to real tasks. Try the loop first, then decide whether to install your own node or plan a fuller setup.",
    // README「Elsewhere」
    cta: { label: "Add on LINE: @395jcpsb", href: LINE_URL },
  },
};
