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

Phase 1 不需要任何環境變數。Phase 2 (要接 LINE webhook / Meta Graph API 等)
再補 `.env.local`。

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

## Deploy — Cloudflare Pages × 自管 DNS × PChome 網域

`zax.com.tw` 目前在 PChome 註冊,要把 DNS 從 PChome 預設移到 Cloudflare 自管 DNS,
然後 Cloudflare Pages 接 GitHub repo 自動 build。

### Step 1 — Cloudflare add site

1. 登入 [dash.cloudflare.com](https://dash.cloudflare.com/) → **Add a site**
2. 輸入 `zax.com.tw` → 選 **Free plan**
3. Cloudflare 會自動掃既有 DNS record (從 PChome 抓)
4. 記下 Cloudflare 給的兩台 **name server** (形如 `xxx.ns.cloudflare.com`),Step 2 要填回 PChome

### Step 2 — PChome 換 name server (自管 DNS)

1. 登入 PChome 網域中心 → 找到 `zax.com.tw`
2. **「網域名稱伺服器設定 (DNS / NS)」** → 改成 Step 1 的兩台 Cloudflare ns
3. 儲存。**這一步把 DNS 主控權從 PChome 移到 Cloudflare**,
   之後所有 A / CNAME / TXT record 都在 Cloudflare 改

### Step 3 — 等 NS propagate

- DNS 變更全球生效約 **數分鐘 ~ 24 小時** (PChome → Cloudflare 通常 < 1 小時)
- 查 propagate 狀態:[whatsmydns.net](https://www.whatsmydns.net/) 輸入 `zax.com.tw` 選 `NS`
- Cloudflare dashboard 上的網域狀態變成 **Active** 才算完成

### Step 4 — Cloudflare Pages 接 GitHub repo

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

---

## 為什麼不是 Vercel?

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

設計參考 `C:\AIWFF\agent\public\index.html` 與 dashboard 既有 neon
配色:`#070b18 / #0b1730 / #11264a` 深色漸層 + `#4ff0de` 青 / `#b48fff` 紫
neon accent + glassmorphism cards (見 `app/globals.css` 的 `.glass` / `.neon-text`)。
