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
    subtitle: "React State Management Architecture",

    miniTech: "Redux Flow：action → store → thunk → API → state → UI",
    miniDesc: "集中管理非同步資料流，確保跨頁與跨元件狀態一致性",

    desc: "以 React 建構情緒紀錄應用，整合音樂播放與日記 CRUD，建立可預測的資料流架構。",
    highlight: "Global State × Async Flow × Component Architecture",

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
    subtitle: "E-commerce Frontend",

    miniTech: "User Flow：product → cart → checkout → order",
    miniDesc: "串接 Firebase 即時資料，確保購物流程資料同步",

    desc: "實作商品瀏覽、購物車與結帳流程，優化使用者購物體驗。",
    highlight: "E-commerce Flow × Firebase Sync",

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
    subtitle: "Admin Dashboard System",

    miniTech: "CRUD Flow：create → read → update → delete",
    miniDesc: "建立商品、訂單與權限管理流程，提升資料一致性",

    desc: "提供訂單管理、營收圖表與權限控管功能。",
    highlight: "Dashboard × Data Control × Chart",

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
    subtitle: "Vue 3 × TypeScript",

    miniTech: "Typed Flow：API → typed state → UI",
    miniDesc: "透過 TypeScript 強化資料結構與開發安全性",

    desc: "實作商品分類、購物流程與型別安全開發。",
    highlight: "Vue Composition API × Type Safety",

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
    subtitle: "Vue Admin System",

    miniTech: "Admin Flow：data control → validation → update",
    miniDesc: "建立資料管理與驗證流程，提升系統穩定性",

    desc: "支援商品、訂單與優惠券管理。",
    highlight: "Admin CRUD × Data Consistency",

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
    subtitle: "Laravel MVC Website",

    miniTech: "MVC：route → controller → view",
    miniDesc: "透過 MVC 分層提升程式結構與可維護性",

    desc: "建立插畫品牌網站與內容架構。",
    highlight: "Laravel × SEO Structure",

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
    subtitle: "Finance Tracker",

    miniTech: "API Sync：input → request → Google Sheets",
    miniDesc: "將使用者資料同步至雲端表單",

    desc: "支援收支分類與資料同步。",
    highlight: "API Integration × Data Sync",

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
    subtitle: "JS Interaction Tool",

    miniTech: "Interaction：input → calculate → UI update",
    miniDesc: "透過 DOM 操作實現即時互動回饋",

    desc: "練習事件處理與輸入驗證。",
    highlight: "DOM × Event Handling",

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
    subtitle: "Emotion Interaction App",

    miniTech: "UX Flow：emotion → UI feedback",
    miniDesc: "透過互動設計引導情緒覺察",

    desc: "結合心理模型的情緒 UI 應用。",
    highlight: "UX × Interaction",

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
    subtitle: "Illustration × UI",

    miniTech: "Layout：grid → responsive → UI system",
    miniDesc: "建立一致的視覺與響應式版型",

    desc: "插畫導向的親子互動平台。",
    highlight: "RWD × UI Design",

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
    title: "RWD Layout Showcase",
    subtitle: "CSS Layout Practice",

    miniTech: "Responsive：flex → grid → breakpoint",
    miniDesc: "實現跨裝置的版面一致性",

    desc: "多版型響應式排版練習。",
    highlight: "Flex × Grid × Masonry",

    tech: ["HTML/CSS"],
    cover: images["/src/assets/images/3.jpeg"],

    demo: "https://aitong0113.github.io/RWD-1/",
  },
];

export default projectsDetail;