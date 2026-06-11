# zax.com.tw 官網優化規劃

## 現況體檢

- 內容目前以 page 檔 hardcode 為主；任務盤點口徑提到全站 7 個 page 都需納入後續整理。目前可見 App Router 主要頁面包含首頁、實戰案例、產品專區、關於、聯絡等，內容、卡片、CTA 與連結多直接寫在 JSX。
- 尚未拆出穩定的共用 component，例如 section header、case card、contact row、footer social link、gallery grid。
- 尚未建立 CMS 或 data layer，案例、產品、聯絡資訊、品牌資料都不易被非工程角色維護。
- SEO metadata 目前集中在 root layout，缺少各 route 的 title、description、Open Graph 圖與結構化資料。
- `public/products/gallery/` 已有大量實裝照，若持續累積到 100+ 張，需要圖片尺寸、壓縮、lazy loading、替代文字與分類策略。
- 部署設定尚未完整文件化；README 提到 Cloudflare Pages，但專案內缺少明確的 Pages build/output/env 設定檢查清單。
- RWD、a11y、轉換率 CTA 動線仍有優化空間，尤其是手機版資訊密度、圖示 aria label、表單/聯絡動線與頁面間導流。

## 優化建議

| 優先級 | 項目 | 建議內容 | Effort | Value | Risk |
| --- | --- | --- | --- | --- | --- |
| P0 | 內容資料抽離 | 把 cases、products、contact、footer links 抽到 `data/` 或 `content/` TS 檔，保留型別檢查，先不導入 CMS。 | M | High | Low |
| P0 | Component 拆分 | 拆 `SectionHeader`、`CaseCards`、`ProductCard`、`SocialIconLink`、`GalleryGrid`，避免硬編結構重複。 | M | High | Low |
| P0 | SEO meta | 每個 route 建立獨立 metadata；補 Open Graph title/description，後續再加 og image。 | S | High | Low |
| P1 | 圖片優化 | gallery 建立縮圖尺寸規則，評估改用 `next/image`、批次壓縮、分類與 alt 文案。 | M | High | Med |
| P1 | Cloudflare Pages 部署設定 | 補 Cloudflare Pages build command、output、Node 版本、環境變數與 branch 規則文件。 | S | Med | Low |
| P1 | CTA 動線 | 每頁保留單一主要 CTA，產品頁導向合利鑫聯絡，AI 服務頁導向 ZAX contact，避免使用者混淆。 | S | High | Low |
| P2 | RWD 檢查 | 用手機寬度逐頁檢查 hero、card grid、footer、gallery，調整間距與按鈕換行。 | M | Med | Low |
| P2 | a11y | 補 icon-only link 的 aria-label、圖片 alt、focus state、文字對比與鍵盤巡覽。 | M | Med | Low |
| P2 | CMS 評估 | 若內容更新頻率提高，再評估 Sanity、Contentful、Markdown/MDX 或 Git-based CMS。 | L | Med | Med |

## GoatCounter 啟用步驟

1. 到 https://goatcounter.com/ 註冊網站，取得自己的 site code。
2. 打開 `app/layout.tsx`，把 `GOATCOUNTER_CODE = "YOUR_GOATCOUNTER_CODE"` 改成實際 code。
3. GoatCounter 後台進入 site settings，開啟「Allow adding visitor counts on your website」，footer 的「瀏覽人次」才會顯示 visitor counter。
4. 部署後進站測試，確認 GoatCounter dashboard 有收到 pageview。
5. 若只看到 footer 的 GoatCounter 文字，通常代表 code 尚未替換、visitor counter 未開啟、script 被瀏覽器阻擋，或剛部署尚未有資料。

參考：GoatCounter 官方 integration script 與 visitor counter 文件

- https://goatcounter.com/
- https://goatcounter.com/help/visitor-counter

## 後續內容待補

- GoatCounter 實際 site code。
- 政府標案或大型工程實績的可公開資料：標案名、年份、內容範圍、是否可揭露機關與金額。
- 若要放「空軍航校」等案例，需先確認公開揭露範圍，再寫入 cases 或 products 實績區。
