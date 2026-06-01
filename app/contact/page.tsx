export default function Contact() {
  return (
    <main className="flex flex-col w-full">
      {/* ── Contact ── */}
      <section
        id="contact"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-cyan)] mb-3">
          {/* Contact */}
          CONTACT
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          想聊聊 / 想試用 / 想找問題
        </h2>
        <div className="glass rounded-xl p-6 max-w-2xl">
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
              <span className="text-[color:var(--fg-2)] w-20 text-xs">LINE</span>
              <a
                href="https://line.me/ti/p/~zaxvip888"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--accent-cyan)] hover:underline"
              >
                zaxvip888
              </a>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[color:var(--fg-2)] w-20 text-xs">所在</span>
              <span>台灣</span>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-[color:var(--border)]">
            <a
              href="mailto:zaxardery8011@gmail.com?subject=ZAX%20%E5%8F%B0%E7%81%A3%E9%9A%8A%20%E8%AB%AE%E8%A9%A2"
              className="inline-block px-5 py-2.5 rounded-md text-sm btn-primary transition"
            >
              寄信給 ZAX
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
