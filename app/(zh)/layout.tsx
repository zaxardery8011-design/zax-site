import { NewsletterSignup } from "@/app/components";
import { SiteShell } from "@/app/components/SiteShell";
import { geistMono, geistSans } from "@/app/lib/fonts";
import { layoutMetadata } from "@/app/lib/metadata";
import { layout } from "@/content/zh-Hant/layout";
import "../globals.css";

// 中文 root layout：網址維持原樣（/、/cases…），字從 content/zh-Hant/layout.ts 來。
export const metadata = layoutMetadata(layout);

export default function ZhRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={layout.htmlLang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <SiteShell
          content={layout}
          locale="zh-Hant"
          newsletter={<NewsletterSignup compact source="site-footer" />}
        >
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
