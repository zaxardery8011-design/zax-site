import { pageMetadata } from "@/app/lib/metadata";
import { Card, CTAButton, NewsletterSignup, PageHero, SectionHeader } from "@/app/components";

const EXECUTION_PROOFS_URL =
  "https://github.com/zaxardery8011-design/execution-proofs";

type ChecklistItem = {
  rule: string;
  check: string;
};

type ChecklistGroup = {
  label: string;
  title: string;
  intro: string;
  items: readonly ChecklistItem[];
};

const groups: readonly ChecklistGroup[] = [
  {
    label: "BEFORE DISPATCH",
    title: "派工前：把「做完」定義成可以驗的東西",
    intro: "多數失控不是 agent 做錯，是任務從一開始就沒有可驗的完成線。",
    items: [
      {
        rule: "完成定義寫成檔案層的斷言，不是動詞。",
        check:
          "把「整理好報表」改寫成「這個路徑的檔案存在，而且內容含這個欄位」。寫不出來就代表還沒想清楚，先不要派。",
      },
      {
        rule: "驗收指令在派工前就寫好，跟任務一起交出去。",
        check:
          "任務單上要有一行可以直接複製貼上執行的指令。事後才想驗法，通常會挑到一個剛好會過的驗法。",
      },
      {
        rule: "一張單只放一件事。",
        check:
          "如果驗收需要兩個以上不相干的判斷，拆成兩張單。合併的單失敗時，你分不出是哪一半壞了。",
      },
    ],
  },
  {
    label: "EVIDENCE",
    title: "證據：退出碼 0 不算證據",
    intro: "假綠燈幾乎都長同一個樣子。流程回報成功，產物那一端沒人去看。",
    items: [
      {
        rule: "跑完了跟有東西出來，要分開檢查。",
        check:
          "退出碼是流程的狀態，不是產物的狀態。排程回報成功但檔案是空的，帳面上看起來一模一樣。",
      },
      {
        rule: "檔案存在不等於寫成功。",
        check:
          "由寫入的那一端自己讀回來比對。用另一個程序確認檔案在，只證明有東西被建立，不證明內容是對的。",
      },
      {
        rule: "檔案時間只有「最後一次被寫」的意思。",
        check:
          "不要拿產物的修改時間回推某段工作何時開始。要起訖時間，就在流程裡各記一筆。",
      },
      {
        rule: "產出有沒有被用到，要去下游看。",
        check:
          "查消費端的紀錄，不是查產出端有沒有生出來。生出來沒人讀的東西，在報表上跟成功沒有差別。",
      },
    ],
  },
  {
    label: "REPORT",
    title: "回報：已驗證跟推測要分開寫",
    intro: "回報寫得順，是因為推測跟事實混在同一段話裡。分開寫就會卡住，那個卡住的地方就是問題。",
    items: [
      {
        rule: "每個數字都要指得出它是哪一條指令跑出來的。",
        check: "指不出來就標未驗。標未驗不丟臉，把未驗的數字寫成結論才是。",
      },
      {
        rule: "數字要附查法與時間。",
        check:
          "同一個數字換個查法就變了，代表其中一個查法是錯的。這時候要停下來，不是挑好看的那個。",
      },
      {
        rule: "沒做的事要點名。",
        check:
          "回報結尾列出這次跳過了什麼、為什麼跳過。只講做完的部分，等於把範圍悄悄縮小。",
      },
    ],
  },
  {
    label: "ZERO",
    title: "說「沒有」之前：先確認你查得夠寬",
    intro: "「查無」是最容易產生的假結論。查得比實際窄，就會查出一個很乾淨的零。",
    items: [
      {
        rule: "寫下「查無」之前，先確認搜尋範圍。",
        check: "大小寫、遞迴、名稱前綴變體各試一次。三個裡漏一個，零就是假的。",
      },
      {
        rule: "分母是零的比率不是 0%。",
        check:
          "先確認被統計的東西真的有進到統計裡。沒有樣本的 0%，跟失敗率 0% 是完全不同的兩件事。",
      },
      {
        rule: "「全部就這些」要說得出清單怎麼來的。",
        check:
          "附上實際查詢條件與命中總數。窮盡感通常來自查詢條件，不是來自世界。",
      },
    ],
  },
  {
    label: "REVERSIBLE",
    title: "可逆性：退不回來的事不要交給自動流程",
    intro: "agent 可以把每一步都準備好。最後那一下不可逆的，留給人按。",
    items: [
      {
        rule: "刪除或覆寫之前，先打開來看。",
        check: "對目標路徑做一次讀取再動手。路徑打錯的代價，跟多讀一次的代價不成比例。",
      },
      {
        rule: "改設定之前，先留一份現況。",
        check: "改完要能用一行指令還原。還原不了的改動，就不該讓自動化自己做。",
      },
      {
        rule: "不可逆的步驟不放進自動流程。",
        check: "把它抽出來變成一個需要人確認的關卡。這一條擋掉的事故，比其他所有條加起來多。",
      },
    ],
  },
] as const;

const totalItems = groups.reduce((sum, group) => sum + group.items.length, 0);

export const metadata = pageMetadata({
  title: "AI agent 紀律檢查表 | ZAX",
  description: `派工給 AI agent 前後的 ${totalItems} 條紀律，每一條都配一個可以當場執行的驗法。完整清單直接看，不用留 email。`,
  path: "/checklist",
});

export default function ChecklistPage() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <PageHero
        badge={`CHECKLIST · ${totalItems} 條`}
        title={
          <>
            <span className="steel-text">AI agent 紀律檢查表</span>
            <br />
            派工前先把驗收線拉清楚
          </>
        }
        actions={
          <>
            <CTAButton href="#list">直接看清單 →</CTAButton>
            <CTAButton
              href={EXECUTION_PROOFS_URL}
              target="_blank"
              variant="ghost"
            >
              看把這些變成護欄的工具
            </CTAButton>
          </>
        }
      >
        <p>
          這是我們自己每天在跑的規矩，不是整理來的心法。
          {totalItems} 條裡每一條都配一個可以當場執行的驗法，你能拿它去戳自己的流程。
          整份就在這頁，不用留 email，也不用下載任何檔案。
        </p>
      </PageHero>

      <section
        id="list"
        className="px-5 sm:px-6 pb-4 max-w-5xl mx-auto w-full flex flex-col gap-14"
      >
        {groups.map((group) => (
          <div key={group.label}>
            <SectionHeader
              badge={group.label}
              title={group.title}
              descriptionClassName="mb-8"
            >
              {group.intro}
            </SectionHeader>

            <div className="grid gap-4 md:grid-cols-2">
              {group.items.map((item) => (
                <Card
                  key={item.rule}
                  className="p-5 sm:p-6 flex flex-col"
                  interactive={false}
                >
                  <h3 className="text-base sm:text-lg font-bold text-[color:var(--fg-0)] leading-relaxed mb-3">
                    {item.rule}
                  </h3>
                  <p className="text-sm text-[color:var(--fg-1)] leading-relaxed">
                    <span className="text-[color:var(--label)]">怎麼驗：</span>
                    {item.check}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="px-5 sm:px-6 py-16 max-w-5xl mx-auto w-full">
        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--metal-ink-raise)] p-6 sm:p-8">
          <div className="text-xs tracking-[0.3em] text-[color:var(--label)] mb-3">
            WHY NO PDF
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            這頁本來掛著一個下載鍵，檔案一直沒生出來
          </h2>
          <p className="text-[color:var(--fg-1)] leading-relaxed max-w-3xl mb-6">
            那個鍵按下去是 404。與其讓它繼續掛在那裡，不如把內容直接放上來。
            上面第二組講的就是這件事：說「已完成」的時候，要有人真的去按按看。
          </p>
          <CTAButton href="/minibrain" variant="ghost">
            看這套規矩跑在什麼東西上 →
          </CTAButton>
        </div>
      </section>

      <NewsletterSignup source="checklist" />
    </main>
  );
}
