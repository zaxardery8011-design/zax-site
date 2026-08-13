import { CTAButton, NewsletterSignup, PageHero, SectionHeader } from "@/app/components";

const CHECKLIST_DOWNLOAD_PATH = "/downloads/ai-agent-discipline-checklist.pdf";

export default function ChecklistPage() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <PageHero
        badge="CHECKLIST"
        title={
          <>
            <span className="neon-text">AI agent 紀律檢查表</span>
            <br />
            派工前先把驗收線拉清楚
          </>
        }
      >
        <p className="mb-6">
          這份檢查表會整理我在自建主腦與開源 agent 工具裡反覆用到的紀律：
          任務邊界、證據、回報、驗證與可逆性。PDF 檔案尚在另一條線產製中，
          目前先保留下載位置。
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <CTAButton href={CHECKLIST_DOWNLOAD_PATH}>
            下載檢查表 PDF →
          </CTAButton>
          <span className="text-sm text-[color:var(--fg-2)]">
            檔案待補：{CHECKLIST_DOWNLOAD_PATH}
          </span>
        </div>
      </PageHero>

      <section className="px-5 sm:px-6 py-12 max-w-5xl mx-auto w-full">
        <SectionHeader
          badge="WHAT IS INSIDE"
          title="會檢查的不是設定，是 agent 有沒有真的照規矩工作"
        >
          內容會聚焦在實務派工前後最容易漂掉的幾件事：任務是否有明確完成定義、
          是否能用檔案或指令驗證、回報是否分清楚已驗證與推測，以及失敗時能不能退回重做。
        </SectionHeader>
      </section>

      <NewsletterSignup source="checklist" />
    </main>
  );
}
