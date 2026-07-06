import { Card, CTAButton, SectionHeader } from "@/app/components";

export default function Contact() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      {/* ── Contact ── */}
      <section
        id="contact"
        className="px-5 sm:px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <SectionHeader
          badge="CONTACT"
          title="不用先想清楚要什麼——把最煩的一件事講給我,我幫你看。"
          titleClassName="mb-6"
        />
        <Card className="p-6 max-w-2xl">
          <div className="space-y-4 text-sm">
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">Email</span>
              <a
                href="mailto:zaxardery8011@gmail.com"
                className="text-[color:var(--accent-cyan)] hover:underline"
              >
                zaxardery8011@gmail.com
              </a>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">GitHub</span>
              <a
                href="https://github.com/zaxardery8011-design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--accent-cyan)] hover:underline"
              >
                @zaxardery8011-design
              </a>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">LINE 個人</span>
              <a href="https://line.me/R/ti/p/~zaxvip888" target="_blank" rel="noopener noreferrer" className="text-[color:var(--accent-cyan)] hover:underline">~zaxvip888</a>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">LINE 實驗室</span>
              <a href="https://line.me/R/ti/p/@395jcpsb" target="_blank" rel="noopener noreferrer" className="text-[color:var(--accent-cyan)] hover:underline">@395jcpsb</a>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">所在</span>
              <span>台灣</span>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-[color:var(--border)]">
            <CTAButton
              href="mailto:zaxardery8011@gmail.com?subject=ZAX%20%E5%8F%B0%E7%81%A3%E9%9A%8A%20%E8%AB%AE%E8%A9%A2"
              className="inline-block"
            >
              寄信給 ZAX
            </CTAButton>
          </div>
        </Card>
      </section>
    </main>
  );
}
