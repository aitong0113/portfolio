const images = import.meta.glob(
  "/src/assets/images/*.{png,jpg,jpeg}",
  { eager: true, import: "default" }
);

import innerSoulMD from "./innersoul.md?raw";


const projectsDetail = [

  //////////////////////////////////////////////////
  // ⭐ InnerSoul
  //////////////////////////////////////////////////
  {
    id: "innersoul",
    title: "InnerSoul 心途",
    subtitle: "React 專案｜情緒紀錄 × 音樂陪伴應用平台",

    miniTech: "Redux 資料流：action → store → thunk → API → state → UI",
    miniDesc: "集中管理非同步資料流，確保跨頁與跨元件狀態一致性",

    desc: "以 React 建構情緒紀錄應用，整合音樂播放與日記 CRUD，建立可預測且穩定的資料流架構。",
    highlight: "全域狀態 × 非同步資料流 × 元件化架構",

    tech: ["React", "Redux Toolkit", "React Router", "SCSS"],
    cover: `${import.meta.env.BASE_URL}/InnerSoul.png`,
    featured: true,

    demo: "https://aitong0113.github.io/InnerSoul/",
    github: "https://github.com/aitong0113/InnerSoul",
    richDescription: innerSoulMD,
  },

  //////////////////////////////////////////////////
  // CalmAura 前台
  //////////////////////////////////////////////////
  {
    id: "calmaura-frontend",
    title: "CalmAura｜電商前台",
    subtitle: "前端專案｜電商前台應用",

    miniTech: "購物流程：商品 → 購物車 → 結帳 → 訂單",
    miniDesc: "串接 Firebase 即時資料，確保購物流程資料同步",

    desc: "實作商品瀏覽、購物車與結帳流程，優化使用者購物體驗與操作流暢度。",
    highlight: "電商流程 × 即時資料同步",

    tech: ["JavaScript", "Firebase", "RWD"],
    cover: images["/src/assets/images/CalmAura.jpeg"],

    demo: "https://aitong0113.github.io/CalmAura/",
    github: "https://github.com/aitong0113/CalmAura",
  },

  //////////////////////////////////////////////////
  // CalmAura 後台
  //////////////////////////////////////////////////
  {
    id: "calmaura-admin",
    title: "CalmAura｜後台管理系統",
    subtitle: "前端專案｜電商後台應用",

    miniTech: "資料流程：新增 → 讀取 → 更新 → 刪除",
    miniDesc: "建立商品、訂單與權限管理流程，提升資料一致性",

    desc: "提供訂單管理、營收圖表與權限控管功能，支援後台營運操作。",
    highlight: "後台系統 × 資料控管 × 圖表分析",

    tech: ["JavaScript", "Firebase", "Chart"],
    cover: images["/src/assets/images/CalmAura2.jpeg"],

    demo: "https://aitong0113.github.io/calmaura-admin/",
    github: "https://github.com/aitong0113/calmaura-admin",
  },

  //////////////////////////////////////////////////
  // Yoga 前台
  //////////////////////////////////////////////////
  {
    id: "yoga-frontend",
    title: "靜心陰瑜伽｜前台",
    subtitle: "Vue 3 × TypeScript 前端開發",

    miniTech: "型別流程：API → 型別資料 → UI",
    miniDesc: "透過 TypeScript 強化資料結構與開發安全性",

    desc: "實作商品分類、搜尋與購物流程，並導入型別系統提升程式穩定性。",
    highlight: "Vue 架構 × 型別安全",

    tech: ["Vue", "TypeScript", "Firebase"],
    cover: images["/src/assets/images/yoga.jpeg"],

    demo: "https://aitong0113.github.io/TS-yogaf/",
    github: "https://github.com/aitong0113/TS-yogaf",
  },

  //////////////////////////////////////////////////
  // Yoga 後台
  //////////////////////////////////////////////////
  {
    id: "yoga-admin",
    title: "靜心陰瑜伽｜後台",
    subtitle: "Vue 3 × TypeScript 後台開發",

    miniTech: "管理流程：資料控管 → 驗證 → 更新",
    miniDesc: "建立資料管理與驗證機制，提升系統穩定性",

    desc: "支援商品、訂單與優惠券管理，強化後台操作效率。",
    highlight: "後台 CRUD × 資料一致性",

    tech: ["Vue", "TypeScript", "Firebase"],
    cover: images["/src/assets/images/yoga2.jpeg"],

    demo: "https://aitong0113.github.io/TS-yogab/",
    github: "https://github.com/aitong0113/TS-yogab",
  },

  //////////////////////////////////////////////////
  // Laravel
  //////////////////////////////////////////////////
  {
    id: "draworigin",
    title: "繪初 DrawOrigin",
    subtitle: "Laravel 專案｜插畫品牌網站",

    miniTech: "MVC 架構：路由 → 控制器 → 視圖",
    miniDesc: "透過 MVC 分層設計提升系統結構與可維護性",

    desc: "建立插畫品牌網站與內容架構，優化 SEO 與資訊呈現。",
    highlight: "Laravel × SEO 架構",

    tech: ["Laravel", "Blade"],
    cover: images["/src/assets/images/4.jpeg"],

    github: "https://github.com/aitong0113/draworigin/tree/main",
  },

  //////////////////////////////////////////////////
  // 記帳
  //////////////////////////////////////////////////
  {
    id: "accounting",
    title: "日常記帳工具",
    subtitle: "記帳應用",

    miniTech: "資料同步：輸入 → API → Google Sheets",
    miniDesc: "將使用者資料同步至雲端表單",

    desc: "支援收支分類與資料紀錄，實現簡易記帳與雲端同步。",
    highlight: "API 串接 × 資料同步",

    tech: ["JavaScript"],
    cover: images["/src/assets/images/banner.png"],

    demo: "https://aitong0113.github.io/VC-task5f/",
    github: "https://github.com/aitong0113/VC-task5f",
  },

  //////////////////////////////////////////////////
  // DogAge
  //////////////////////////////////////////////////
  {
    id: "dogage",
    title: "DogAge",
    subtitle: "互動工具",

    miniTech: "互動流程：輸入 → 計算 → UI 更新",
    miniDesc: "透過 DOM 操作實現即時互動回饋",

    desc: "練習事件處理與輸入驗證，建立即時互動功能。",
    highlight: "DOM 操作 × 事件處理",

    tech: ["JavaScript"],
    cover: images["/src/assets/images/1.png"],

    demo: "https://aitong0113.github.io/VC-Day12/",
    github: "https://github.com/aitong0113/VC-Day12",
  },

  //////////////////////////////////////////////////
  // 心天氣
  //////////////////////////////////////////////////
  {
    id: "mood-weather",
    title: "今日心天氣",
    subtitle: "情緒互動應用",

    miniTech: "體驗流程：情緒輸入 → UI 回饋",
    miniDesc: "透過互動設計引導使用者進行情緒覺察",

    desc: "結合心理概念與互動設計，打造情緒回饋 UI。",
    highlight: "使用者體驗 × 互動設計",

    tech: ["JavaScript"],
    cover: images["/src/assets/images/2.png"],

    demo: "https://aitong0113.github.io/VC-Day21/",
    github: "https://github.com/aitong0113/VC-Day21",
  },

  //////////////////////////////////////////////////
  // WithYou
  //////////////////////////////////////////////////
  {
    id: "withyou",
    title: "WithYou 親子平台",
    subtitle: "前端專案｜繪畫陪伴平台",

    miniTech: "版面系統：Grid → 響應式 → UI 統一",
    miniDesc: "建立一致的視覺與響應式版型",

    desc: "以插畫為主軸的親子互動平台，提升內容親和力。",
    highlight: "RWD × 介面設計",

    tech: ["SCSS", "Bootstrap", "jQuery"],
    cover: images["/src/assets/images/withyou.jpg"],

    demo: "https://aitong0113.github.io/WithYou/",
    github: "https://github.com/aitong0113/WithYou",
  },

  //////////////////////////////////////////////////
  // RWD
  //////////////////////////////////////////////////
  {
    id: "rwd",
    title: "RWD 排版展示",
    subtitle: "響應式版型練習",

    miniTech: "響應式：Flex → Grid → Breakpoint",
    miniDesc: "實現跨裝置版面一致性",

    desc: "練習多版型響應式設計，提升版面適應能力。",
    highlight: "Flex × Grid × 瀑布流",

    tech: ["HTML/CSS"],
    cover: images["/src/assets/images/3.jpeg"],

    demo: "https://aitong0113.github.io/RWD-1/",
  },
];

export default projectsDetail;