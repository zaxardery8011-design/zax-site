// /en/* 的 404 畫面。英文頁沒過發布閘（app/lib/en-ready.ts）時 notFound() 會落到這裡；
// 沒有這支，多 root layout 下 /en 的 404 是一頁空白。
// 字樣與站上其他不存在網址的預設 404 相同（Next 內建那句），不用 content/en 的任何字。
export default function EnNotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-2 px-5 py-24 text-center">
      <h1 className="text-2xl font-bold">404</h1>
      <p className="text-sm text-[color:var(--fg-1)]">This page could not be found.</p>
    </main>
  );
}
