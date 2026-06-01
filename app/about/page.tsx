export default function About() {
  return (
    <main className="flex flex-col w-full">
      {/* ── About ── */}
      <section
        id="about"
        className="px-6 py-20 max-w-5xl mx-auto w-full"
      >
        <div className="text-xs tracking-[0.3em] text-[color:var(--accent-purple)] mb-3">
          {/* About */}
          ABOUT
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About — 白天焊金屬,晚上焊系統。
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-[color:var(--fg-1)] leading-relaxed">
          <div className="glass rounded-xl p-6">
            <p className="mb-3">
              ZAX 不是一間科技公司,是一個焊工的工作站。本業是精密氬焊(TIG / ASME 等級),焊的是不能漏、要扛壓力的管路——這行沒有「差不多」:要嘛通過檢驗、壓力測試,要嘛打掉重來,沒有騙的空間。
            </p>
            <p>
              後來開始寫 AI,發現寫系統跟焊接是同一回事:跑得起來、扛得住、修得動,才算數。於是把這套匠人驗收的紀律,寫進一套會自己派工、自己記憶、自己修正的常駐 AI 主腦(AIWFF)。一個人,做給自己用,順手給朋友用。
            </p>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="text-[color:var(--accent-cyan)] text-xs mb-3">守則</div>
            <ul className="space-y-2 text-sm">
              <li>· 不寫「處理 N 萬筆」假數字</li>
              <li>· 不堆漂亮 landing 騙看的人</li>
              <li>· 跑得起來、用得到、修得動 — 才會擺上來</li>
              <li>· 朋友先用,陌生人之後再說</li>
              <li>· 失敗會留 log,不會 PR 掉</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
