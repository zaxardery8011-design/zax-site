# zax-site

`zax.com.tw` 個人 AI 工作站 landing page。

- **Stack**: Next.js 16 · React 19 · Tailwind v4 · App Router · TypeScript
- **Phase 1 範圍**: 5 個 section 真實內容 hardcoded (Hero / Real case / Phase 1 demo / About / Contact)
- **CMS**: 無 (Phase 1 內容寫在 `app/page.tsx`,改稿直接改 tsx)
- **後端**: 無 (Contact 用 `mailto:` 即可)

## 本地開發

```powershell
cd C:\Users\User\Desktop\demon\zax-site
npm install   # 第一次跑才需要
npm run dev   # http://localhost:3000
```

## 環境變數

訂閱表單的 Kit (ConvertKit) form action URL **已寫在
`app/components/NewsletterSignup.tsx` 的 `DEFAULT_NEWSLETTER_FORM_ACTION`**，
預設即可用，部署端不需另設環境變數。

理由：該值會渲染進 `<form action>`、對所有訪客公開，不是機密；
放進 Vercel 環境變數只會多一份要手動同步的設定。

要換 form 時可用 `NEXT_PUBLIC_NEWSLETTER_FORM_ACTION` 覆蓋（build-time，需重新 build）。
兩者皆非 `https://` 開頭時，表單顯示未開通，不會宣稱送出成功。

其他 Phase 2 變數 (LINE webhook / Meta Graph API 等) 另補 `.env.local`。

## Build

```powershell
npm run build
npm run start   # 本地預覽 production build,localhost:3000
```

| Setting | Value |
|---|---|
| Framework preset | Next.js |
| Build command | `npm run build` |
| Output directory | `.next` |
| Node version | `>= 20` (本地驗過 24.15.0) |
| Root directory | `/` |

---

## Deploy — Vercel（現況）

- **線上由 Vercel 服務**：2026-09-23 10:32 實測 `www.zax.com.tw` 回應標頭有
  `Server: Vercel`、`X-Vercel-Cache`、`X-Nextjs-Prerender`。
- **推 `master` 自動部署**：2026-09-23 09:59 推的 `9c967d5` 約 10:11 已上線
  （以線上 HTML 含該 commit 新增的句子驗證）。不需要手動觸發。
- **DNS 託管現況待確認**：網域在 PChome 註冊；下方「歷史紀錄」的 PChome → Cloudflare
  自管 DNS 步驟當初是否完成、DNS 目前是否仍在 Cloudflare，未驗。
- **英文站發布閘**：`content/en/*` 任一字串還含 `[EN TBD by A]` 時，該英文頁 build 出 404、
  中文頁不輸出 hreflang en／x-default、header 不出現語言切換鈕（判定在 `app/lib/en-ready.ts`）。
  英文填完後推 `master`，下一次部署自動上線，不用改程式。

---

## 歷史紀錄

### 原規劃：Cloudflare Pages × 自管 DNS × PChome 網域（非現況）

> 以下是最初的部署規劃，保留作紀錄；線上實際走 Vercel（見上）。

`zax.com.tw` 目前在 PChome 註冊,要把 DNS 從 PChome 預設移到 Cloudflare 自管 DNS,
然後 Cloudflare Pages 接 GitHub repo 自動 build。

#### Step 1 — Cloudflare add site

1. 登入 [dash.cloudflare.com](https://dash.cloudflare.com/) → **Add a site**
2. 輸入 `zax.com.tw` → 選 **Free plan**
3. Cloudflare 會自動掃既有 DNS record (從 PChome 抓)
4. 記下 Cloudflare 給的兩台 **name server** (形如 `xxx.ns.cloudflare.com`),Step 2 要填回 PChome

#### Step 2 — PChome 換 name server (自管 DNS)

1. 登入 PChome 網域中心 → 找到 `zax.com.tw`
2. **「網域名稱伺服器設定 (DNS / NS)」** → 改成 Step 1 的兩台 Cloudflare ns
3. 儲存。**這一步把 DNS 主控權從 PChome 移到 Cloudflare**,
   之後所有 A / CNAME / TXT record 都在 Cloudflare 改

#### Step 3 — 等 NS propagate

- DNS 變更全球生效約 **數分鐘 ~ 24 小時** (PChome → Cloudflare 通常 < 1 小時)
- 查 propagate 狀態:[whatsmydns.net](https://www.whatsmydns.net/) 輸入 `zax.com.tw` 選 `NS`
- Cloudflare dashboard 上的網域狀態變成 **Active** 才算完成

#### Step 4 — Cloudflare Pages 接 GitHub repo

1. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. 授權 GitHub → 選 `zax-site` repo → branch `main`
3. Build settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Output directory: `.next`
   - Node version (環境變數 `NODE_VERSION` 設 `20`)
4. **Save and Deploy** → 第一次 build 完拿到 `*.pages.dev` 預覽網址
5. **Custom domains** → Add:
   - `zax.com.tw` (apex)
   - `www.zax.com.tw`
6. Cloudflare 會自動建 CNAME / A record;憑證自動發 (Universal SSL)。
   完成後 `https://zax.com.tw` 直接通

### 當時為什麼不選 Vercel（原規劃的理由，現況已改走 Vercel）

- Cloudflare Pages = 100k req/day 免費 + 無流量計費門檻
- 本人不接創投線,先省一筆是一筆
- Next.js 16 在 Cloudflare 上需要 `@cloudflare/next-on-pages` adapter
  (Phase 1 用 standard Next.js build 跑得起來,後續若要 edge runtime 再切)

---

## Roadmap

- [x] Phase 1 — 5 section landing (本 repo)
- [ ] Phase 2 — `/blog` 區段 + RSS (MDX,還是不接 CMS)
- [ ] Phase 3 — `/products/social-poster` 子頁,接 social-poster Phase 1 demo 截圖
- [ ] Phase 4 — `/products/fortune` 子頁,接 LINE bot QR code

---

## 視覺風格 reference

以 `app/globals.css` 頂部註解為準（色票與規則都寫在那裡）：

- **主調：銀／墨**。亮面是不變色的鋼本色（`--metal-face`），深面是墨色（`--metal-ink`）；
  銀族一律中性無彩，不混入任何回火色相。大面積只用銀與墨。
- **回火金＝主 CTA 與熱影響區**。`--cta-fill` 用回火金（`--temper-gold`）；回火色（金 → 銅，
  `--temper-band`）只出現在熱影響區：CTA hover、頁尾分隔線、卡片左緣、hero 一道弧。
  紫藍回火色不用。
- **焊弧橘只做警示與深底連結**（`--arc-orange`，也用於點亮高光），不當主 CTA。
- 版面 class：`.plate-ink`（深底面板）、`.metal-card`（亮面卡片）、`.steel-text`、
  `.temper-rule-top`、`.btn-primary`／`.btn-ghost`。

## License / 授權

本站原始碼公開是為了透明與展示 build in public 的過程。不授權複製、修改、散布，或再利用於其他網站、產品或商業用途；All rights reserved。想借鏡做法或討論實作方式，歡迎開 issue 交流。

This source code is public for transparency and to show the build-in-public process. It is not licensed for copying, modification, distribution, or reuse in other websites, products, or commercial projects; all rights reserved. If you want to discuss the approach or implementation ideas, please open an issue.
