import { SiteShell } from "@/app/components/SiteShell";
import { geistMono, geistSans } from "@/app/lib/fonts";
import { layoutMetadata } from "@/app/lib/metadata";
import { layout } from "@/content/en/layout";
import "../globals.css";

// English root layout: /en/*. Same shell as app/(zh)/layout.tsx, copy from content/en/layout.ts.
// No footer newsletter band: the newsletter copy exists only in zh-Hant for now.
export const metadata = layoutMetadata(layout);

export default function EnRootLayout({
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
        <SiteShell content={layout} locale="en">
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
