import innerSoulMD from "./innersoul.md?raw";

const projectsDetail = [
  //////////////////////////////////////////////////
  // InnerSoul
  //////////////////////////////////////////////////
  {
    id: "innersoul",
    title: "InnerSoul 心途",
    subtitle: "Emotion Tracking × Digital Companion",
    desc: "以情緒覺察為核心，整合日記與音樂陪伴，打造可持續的自我對話體驗。",
    highlight: "完整實作 Redux 狀態流與模組化架構",

    tech: ["React", "Redux Toolkit", "Router", "SCSS"],
    cover: "/images/InnerSoul.png",

    demo: "https://aitong0113.github.io/InnerSoul/",
    github: "https://github.com/aitong0113/InnerSoul",

    richDescription: innerSoulMD,
  },

  //////////////////////////////////////////////////
  // CalmAura 前台
  //////////////////////////////////////////////////
  {
    id: "calmaura-frontend",
    title: "CalmAura｜香氛蠟燭電商前台",
    subtitle: "E-commerce Frontend Experience",
    desc: "專注使用者購物流程，優化購物車、訂單與資料同步體驗。",
    highlight: "完整電商流程實作（購物 → 結帳 → 訂單）",

    tech: ["JavaScript", "Firebase", "RWD"],
    cover:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1740&auto=format&fit=crop",

    demo: "https://aitong0113.github.io/CalmAura/",
    github: "https://github.com/aitong0113/CalmAura",
  },

  //////////////////////////////////////////////////
  // CalmAura 後台
  //////////////////////////////////////////////////
  {
    id: "calmaura-admin",
    title: "CalmAura｜電商後台管理系統",
    subtitle: "Admin Dashboard System",
    desc: "提供訂單管理、營收圖表與權限控管的後台系統。",
    highlight: "後台 CRUD + 圖表分析 + 權限設計",

    tech: ["JavaScript", "Firebase", "Chart"],
    cover:
      "https://plus.unsplash.com/premium_photo-1679520112650-9c2141d81a2d?w=400",

    demo: "https://aitong0113.github.io/calmaura-admin/",
    github: "https://github.com/aitong0113/calmaura-admin",
  },

  //////////////////////////////////////////////////
  // Yoga 前台
  //////////////////////////////////////////////////
  {
    id: "yoga-frontend",
    title: "靜心陰瑜伽｜電商前台",
    subtitle: "Vue 3 × TypeScript E-commerce",
    desc: "以 Vue3 + TS 打造完整購物流程，強化使用者體驗。",
    highlight: "Vue3 Composition API + TypeScript 實戰",

    tech: ["Vue", "TypeScript", "Firebase"],
    cover:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1740&auto=format&fit=crop",

    demo: "https://aitong0113.github.io/TS-yogaf/",
    github: "https://github.com/aitong0113/TS-yogaf",
  },

  //////////////////////////////////////////////////
  // Yoga 後台
  //////////////////////////////////////////////////
  {
    id: "yoga-admin",
    title: "靜心陰瑜伽｜後台管理系統",
    subtitle: "Admin System with Vue3",
    desc: "支援商品、訂單與優惠券管理的後台系統。",
    highlight: "完整後台資料管理與圖片上傳",

    tech: ["Vue", "TypeScript", "Firebase"],
    cover:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1740&auto=format&fit=crop",

    demo: "https://aitong0113.github.io/TS-yogab/",
    github: "https://github.com/aitong0113/TS-yogab",
  },

  //////////////////////////////////////////////////
  // DrawOrigin
  //////////////////////////////////////////////////
  {
    id: "draworigin",
    title: "繪初 DrawOrigin｜品牌網站",
    subtitle: "Laravel Multi-page Website",
    desc: "以 Laravel 打造插畫品牌網站，強化 SEO 與內容管理。",
    highlight: "MVC 架構 + SEO 優化",

    tech: ["Laravel", "Blade", "MVC"],
    cover: "/images/4.jpeg",

    github: "https://github.com/aitong0113/draworigin/tree/main",
  },

  //////////////////////////////////////////////////
  // 記帳 App
  //////////////////////////////////////////////////
  {
    id: "accounting-app",
    title: "日常記帳｜收支管理 App",
    subtitle: "Personal Finance Tracker",
    desc: "支援分類、預算與統計的個人記帳工具。",
    highlight: "Google Sheets 即時同步",

    tech: ["JavaScript", "Google Sheets"],
    cover: "/images/banner.png",

    demo: "https://aitong0113.github.io/VC-task5f/",
    github: "https://github.com/aitong0113/VC-task5f",
  },

  //////////////////////////////////////////////////
  // DogAge
  //////////////////////////////////////////////////
  {
    id: "dogage",
    title: "DogAge｜互動小工具",
    subtitle: "JavaScript Interaction Practice",
    desc: "練習即時輸入與 DOM 操作的互動工具。",
    highlight: "輸入驗證 + 即時回饋",

    tech: ["JavaScript", "DOM"],
    cover: "/images/1.png",

    demo: "https://aitong0113.github.io/VC-Day12/",
    github: "https://github.com/aitong0113/VC-Day12",
  },

  //////////////////////////////////////////////////
  // Mood Weather
  //////////////////////////////////////////////////
  {
    id: "mood-weather",
    title: "今日心天氣",
    subtitle: "Emotion UI Interaction",
    desc: "結合心理學與 UI 設計的情緒探索 App。",
    highlight: "主題切換 + 動畫互動",

    tech: ["JavaScript", "UI/UX"],
    cover: "/images/2.png",

    demo: "https://aitong0113.github.io/VC-Day21/",
    github: "https://github.com/aitong0113/VC-Day21",
  },

  //////////////////////////////////////////////////
  // WithYou
  //////////////////////////////////////////////////
  {
    id: "withyou",
    title: "WithYou｜親子陪伴平台",
    subtitle: "Illustration × Interaction",
    desc: "以插畫與互動設計打造親子陪伴平台。",
    highlight: "RWD + 多頁式架構",

    tech: ["SCSS", "Bootstrap", "jQuery"],
    cover: "/images/withyou.jpg",

    demo: "https://aitong0113.github.io/WithYou/",
    github: "https://github.com/aitong0113/WithYou",
  },

  //////////////////////////////////////////////////
  // RWD Showcase
  //////////////////////////////////////////////////
  {
    id: "rwd-showcase",
    title: "RWD Layout Showcase",
    subtitle: "CSS Layout Practice",
    desc: "整合 Flex、Grid 與 Masonry 的排版練習。",
    highlight: "多版型實戰練習",

    tech: ["HTML/CSS", "Flex", "Grid"],
    cover: "/images/3.jpeg",

    demo: "https://aitong0113.github.io/RWD-1/",
  },
];

export default projectsDetail;