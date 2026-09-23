import { SiteShell } from "@/app/components/SiteShell";
import { EN_NOT_READY_METADATA, enReady } from "@/app/lib/en-ready";
import { geistMono, geistSans } from "@/app/lib/fonts";
import { layoutMetadata } from "@/app/lib/metadata";
import { layout } from "@/content/en/layout";
import "../globals.css";

// English root layout: /en/*. Same shell as app/(zh)/layout.tsx, copy from content/en/layout.ts.
// No footer newsletter band: the newsletter copy exists only in zh-Hant for now.
// 發布閘（app/lib/en-ready.ts）：layout 內容還有佔位時，不渲染 SiteShell、metadata 也不用那份內容，
// 這樣底下頁面 notFound() 出來的 404 HTML 裡不會帶任何佔位字串。
export const metadata = enReady.layout ? layoutMetadata(layout) : EN_NOT_READY_METADATA;

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!enReady.layout) {
    return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
      </html>
    );
  }

  return (
    <html
      lang={layout.htmlLang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <SiteShell content={layout} locale="en">
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
