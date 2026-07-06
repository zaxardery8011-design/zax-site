'use client';

import { useState } from "react";

type CopyInstallPromptProps = {
  promptText: string;
};

export function CopyInstallPrompt({ promptText }: CopyInstallPromptProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");

  async function copyWithTextarea() {
    const textarea = document.createElement("textarea");
    textarea.value = promptText;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";
    document.body.appendChild(textarea);
    textarea.select();

    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (!ok) {
      throw new Error("execCommand copy failed");
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(promptText);
      setStatus("copied");
    } catch {
      try {
        await copyWithTextarea();
        setStatus("copied");
      } catch {
        setStatus("manual");
      }
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={handleCopy}
        className="w-full sm:w-fit px-5 py-3 rounded-md btn-primary text-sm transition"
      >
        {status === "copied" ? "已複製安裝 prompt" : "複製這段安裝 prompt"}
      </button>
      <p
        aria-live="polite"
        className="min-h-5 text-sm text-[color:var(--fg-1)]"
      >
        {status === "copied"
          ? "已複製，可以貼給 Codex / Claude Code 這類 coding agent。"
          : status === "manual"
            ? "瀏覽器擋下自動複製，請直接選取上方 prompt 手動複製。"
            : ""}
      </p>
    </div>
  );
}
