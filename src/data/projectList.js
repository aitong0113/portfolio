const images = import.meta.glob(
  "/src/assets/images/*.{png,jpg,jpeg}",
  { eager: true, import: "default" }
);

const projectList = [
  // ⭐ 主打
  {
    id: "innersoul",
    title: "InnerSoul 心途",
    category: "core",
    tech: ["react", "redux", "router", "scss"],

    cover: images["/src/assets/images/InnerSoul.png"],

    desc: "以 React + Redux Toolkit 建構情緒紀錄應用，整合音樂播放與日記 CRUD，建立可預測的資料流與狀態管理架構",

    miniTech: "Redux Flow: action → store → thunk → API → state → UI",
    miniDesc: "將非同步資料流集中管理，避免跨元件狀態錯亂問題",

    highlight: "State Management × Data Flow × Component Architecture",

    features: [
      "Redux Toolkit：全域狀態管理與資料同步",
      "音樂播放器：播放 / 暫停 / 進度控制",
      "日記 CRUD：完整資料流設計",
      "React Router：SPA 架構",
      "模組化 Component 設計"
    ],

    demo: "https://aitong0113.github.io/InnerSoul/#/",
    github: "https://github.com/aitong0113/InnerSoul",

    featured: true
  },

  // CalmAura 前台
  {
    id: "calmaura-frontend",
    title: "CalmAura｜電商前台",
    category: "product",
    tech: ["js", "firebase"],

    cover: images["/src/assets/images/CalmAura.jpeg"],

    desc: "電商前台系統，串接 Firebase 即時資料，實作商品瀏覽、購物車與結帳流程",
    highlight: "E-commerce Flow × Firebase × State Sync",

    demo: "https://aitong0113.github.io/CalmAura/",
    github: "https://github.com/aitong0113/CalmAura"
  },

  // CalmAura 後台
  {
    id: "calmaura-admin",
    title: "CalmAura｜後台管理系統",
    category: "system",
    tech: ["js", "firebase"],

    cover: images["/src/assets/images/CalmAura2.jpeg"],

    desc: "電商後台管理系統，支援商品、訂單與權限管理，並整合 Firebase 資料同步",
    highlight: "Dashboard × Data Management × CRUD System",

    demo: "https://aitong0113.github.io/calmaura-admin/",
    github: "https://github.com/aitong0113/calmaura-admin"
  },

  // Yoga 前台
  {
    id: "yoga-frontend",
    title: "靜心陰瑜伽｜前台",
    category: "product",
    tech: ["vue", "ts", "firebase"],

    cover: images["/src/assets/images/yoga.jpeg"],

    desc: "Vue + TypeScript 電商前台，實作商品分類、購物流程與型別安全開發",
    highlight: "Vue × TypeScript × Scalable UI",

    demo: "https://aitong0113.github.io/TS-yogaf/",
    github: "https://github.com/aitong0113/TS-yogaf"
  },

  // Yoga 後台
  {
    id: "yoga-admin",
    title: "靜心陰瑜伽｜後台",
    category: "system",
    tech: ["vue", "ts", "firebase"],

    cover: images["/src/assets/images/yoga2.jpeg"],

    desc: "後台管理系統，提供商品、訂單與優惠券管理，強化資料一致性與維護性",
    highlight: "Admin System × Data Control × Type Safety",

    demo: "https://aitong0113.github.io/TS-yogab/",
    github: "https://github.com/aitong0113/TS-yogab"
  },

  // Laravel
  {
    id: "draworigin",
    title: "繪初 DrawOrigin",
    category: "product",
    tech: ["laravel", "blade"],

    cover: images["/src/assets/images/4.jpeg"],

    desc: "Laravel 多頁式網站，結合 Blade 模板與 SEO 架構，建立內容型品牌網站",
    highlight: "Laravel × MVC × SEO Structure",

    github: "https://github.com/aitong0113/draworigin"
  },

  // 記帳
  {
    id: "accounting",
    title: "日常記帳工具",
    category: "experiment",
    tech: ["js"],

    cover: images["/src/assets/images/banner.png"],

    desc: "收支記錄工具，串接 Google Sheets API 進行資料同步與儲存",
    highlight: "API Integration × Data Sync",

    demo: "https://aitong0113.github.io/VC-task5f/",
    github: "https://github.com/aitong0113/VC-task5f"
  },

  // DogAge
  {
    id: "dogage",
    title: "DogAge 計算器",
    category: "experiment",
    tech: ["js"],

    cover: images["/src/assets/images/1.png"],

    desc: "即時互動計算工具，練習 DOM 操作與事件處理邏輯",
    highlight: "DOM Manipulation × Event Handling",

    demo: "https://aitong0113.github.io/VC-Day12/",
    github: "https://github.com/aitong0113/VC-Day12"
  },

  // 心天氣
  {
    id: "mood-weather",
    title: "今日心天氣",
    category: "product",
    tech: ["js"],

    cover: images["/src/assets/images/2.png"],

    desc: "結合心理模型的情緒互動應用，透過 UI 引導使用者進行情緒紀錄",
    highlight: "UX Flow × Interaction Design",

    demo: "https://aitong0113.github.io/VC-Day21/",
    github: "https://github.com/aitong0113/VC-Day21"
  },

  // WithYou
  {
    id: "withyou",
    title: "WithYou 親子平台",
    category: "product",
    tech: ["scss", "bootstrap", "jquery"],

    cover: images["/src/assets/images/withyou.jpg"],

    desc: "親子互動平台，使用 SCSS 與 Bootstrap 建構響應式 UI 與視覺系統",
    highlight: "RWD × UI System × Layout Design",

    demo: "https://aitong0113.github.io/WithYou/",
    github: "https://github.com/aitong0113/WithYou"
  },

  // RWD 練習
  {
    id: "rwd",
    title: "RWD Layout Showcase",
    category: "experiment",
    tech: ["css"],

    cover: images["/src/assets/images/3.jpeg"],

    desc: "使用 Flexbox、Grid 與 Masonry 建構多版型響應式佈局",
    highlight: "Responsive Layout × CSS Architecture",

    demo: "https://aitong0113.github.io/RWD-1/"
  }
];

export default projectList;