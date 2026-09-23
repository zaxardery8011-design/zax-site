// 內容合約：B 管框架（app/**），A 管內容（content/**）。
// 每個語系的內容檔都必須滿足這裡的型別——英文少填一個必填欄位，npm run build 就會在型別檢查失敗，
// 不會上線半翻譯的頁。欄位名稱對應 plans/zax_site/framework_spec_v1 §3。
// 可選欄位（?）＝該區塊可以不渲染；目前中文首頁沒有的區塊（S2／S3／S6）先做成可選，等 A 填了再轉必填。

export type Locale = "zh-Hant" | "en";

export type LinkText = {
  label: string;
  href: string;
};

export type PageMeta = {
  title: string;
  description: string;
};

// ── Layout：導覽／頁尾／預設 metadata／語言切換 ──

export type SocialKind = "facebook" | "line" | "mail" | "github" | "contact";

export type LayoutContent = {
  /** <html lang> 與 og:locale */
  htmlLang: string;
  ogLocale: string;
  /** 全站預設 metadata（首頁也用這份） */
  meta: PageMeta;
  brand: string;
  /** 站內首頁路徑（中文 "/"、英文 "/en"） */
  homeHref: string;
  nav: LinkText[];
  /** 手機橫滑導覽列的 aria-label */
  mobileNavLabel: string;
  headerCta: LinkText;
  langSwitch: {
    /** 切換鈕上的字 */
    label: string;
    /** 切換鈕的 aria-label / title */
    ariaLabel: string;
    /** 目前這頁沒有另一語系版本、改導到另一語系首頁時的 title 提示 */
    fallbackNote: string;
  };
  footer: {
    brand: string;
    items: string[];
    copyright: string;
    social: { kind: SocialKind; href: string; label: string }[];
    visitorLabel: string;
    visitorPlaceholder: string;
  };
};

// ── 首頁（§3 S1–S6） ──

export type HomeRouteCard = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

export type HomeCaseCard = {
  name: string;
  /** GitHub owner/name，星數與最近更新由 B 回源帶出 */
  repo: string;
  license: string;
  href: string;
  pitch: string;
  method: string;
  result: string;
};

export type HomeContent = {
  /** S1 Hero：定位一句話 */
  s1Hero: {
    eyebrow: string;
    titleLead: string;
    titleEmphasis: string;
    subtitle: string;
    primaryCta: LinkText;
    secondaryCta: LinkText;
  };
  /** 小主腦兩條路線（現行首頁區塊，規格 §3 未列，先照現況收進合約） */
  routes: {
    badge: string;
    title: string;
    intro: string;
    cards: HomeRouteCard[];
  };
  /** S2 證據條：3 組 {數字、說明、量測日期、出處連結}。可選＝未填不渲染 */
  s2Evidence?: {
    badge: string;
    title: string;
    items: { value: string; label: string; measuredAt: string; sourceHref: string }[];
  };
  /** S3 怎麼管得住：3 欄 {名稱、一句話、對應 repo 連結}。可選＝未填不渲染 */
  s3Governance?: {
    badge: string;
    title: string;
    columns: { name: string; line: string; repoHref: string }[];
  };
  /** S4 開源生態（現行「精選案例」卡片） */
  s4OpenSource: {
    badge: string;
    title: string;
    intro: string;
    introEmphasis: string;
    cards: HomeCaseCard[];
    labels: {
      updated: string;
      method: string;
      result: string;
      repoLink: string;
      entryLink: string;
    };
    allCta: LinkText;
    /** 可選：卡片下方導向實戰案例頁的一段話＋主按鈕（開源卡≠案例，要有路去 /cases） */
    casesNote?: string;
    casesCta?: LinkText;
  };
  /** 電子報完整版區塊：目前只有中文文案，英文版設 false 不渲染 */
  showNewsletter: boolean;
  /** S5 先體驗：LINE 主腦實驗室 */
  s5Try: {
    badge: string;
    title: string;
    body: string;
    cta: LinkText;
    /** 可選：第二顆按鈕（已確定要找人做的 → 服務方案），未填不渲染 */
    secondaryCta?: LinkText;
    /** 可選：LINE ID 與 QR 圖（public/ 下路徑），未填不渲染 */
    lineId?: string;
    qrImage?: string;
  };
  /** S6 合作：在地服務。可選＝英文版可留空不渲染 */
  s6Collab?: {
    title: string;
    body: string;
    cta: LinkText;
  };
};

// ── 開源頁 ──

export type OpenSourceRepo = {
  name: string;
  url: string;
  repo: string;
  license: string;
  kind: "internal" | "external";
  pitch: string;
  start: string;
  startNote: string;
};

export type OpenSourceContent = {
  meta: PageMeta;
  hero: {
    badge: string;
    titleEmphasis: string;
    titleRest: string;
    body: string;
    bodyEmphasis: string;
  };
  reposSection: {
    badge: string;
    title: string;
  };
  repos: OpenSourceRepo[];
  labels: {
    featured: string;
    updated: string;
    quickStart: string;
    internalLink: string;
    externalLink: string;
  };
  allRepos: {
    href: string;
    badge: string;
    title: string;
    body: string;
  };
  /** 可選：收尾第二張卡，往內導向實戰案例頁；未填則收尾只有 GitHub 一張 */
  casesCard?: {
    href: string;
    badge: string;
    title: string;
    body: string;
  };
  /** 可選：收尾下方一行聯絡導流 */
  contactLine?: {
    lead: string;
    link: LinkText;
  };
};
