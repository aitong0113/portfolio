const images = import.meta.glob(
  "/src/assets/images/*.{png,jpg,jpeg}",
  { eager: true, import: "default" }
);

const projectList = [
  // ⭐ 主打
  {
    id: "innersoul",
    title: "InnerSoul 心途",
    category: "frontend",
    tech: ["react", "redux", "router", "scss"],

    cover: images["/src/assets/images/InnerSoul.png"],

    desc: "情緒支持型應用，整合音樂播放、情緒紀錄與日記系統",
    highlight: "State × Data Flow × Component Architecture",

    features: [
      "React + Redux Toolkit：全域狀態管理",
      "音樂播放器：播放 / 暫停 / 進度條",
      "CRUD：日記資料流",
      "React Router：SPA 架構",
      "Component 拆分設計"
    ],

    demo: "https://aitong0113.github.io/InnerSoul/#/",
    github: "https://github.com/aitong0113/InnerSoul",

    featured: true
  },

  // CalmAura 前台
  {
    id: "calmaura-frontend",
    title: "CalmAura｜電商前台",
    category: "frontend",
    tech: ["js", "firebase"],

    cover: "https:/images.unsplash.com/photo-1603006905003-be475563bc59",

    desc: "電商前台，重視購物體驗與資料同步",

    demo: "https://aitong0113.github.io/CalmAura/",
    github: "https://github.com/aitong0113/CalmAura"
  },

  // CalmAura 後台
  {
    id: "calmaura-admin",
    title: "CalmAura｜後台管理系統",
    category: "frontend",
    tech: ["js", "firebase"],

    cover: "https://plus.unsplash.com/premium_photo-1679520112650-9c2141d81a2d",

    desc: "後台支援訂單、權限與圖表管理",

    demo: "https://aitong0113.github.io/calmaura-admin/",
    github: "https://github.com/aitong0113/calmaura-admin"
  },

  // Yoga 前台
  {
    id: "yoga-frontend",
    title: "靜心陰瑜伽｜前台",
    category: "frontend",
    tech: ["vue", "ts", "firebase"],

    cover: "https:/images.unsplash.com/photo-1544367567-0f2fcb009e0b",

    desc: "Vue + TS 電商前台，分類與結帳流程優化",

    demo: "https://aitong0113.github.io/TS-yogaf/",
    github: "https://github.com/aitong0113/TS-yogaf"
  },

  // Yoga 後台
  {
    id: "yoga-admin",
    title: "靜心陰瑜伽｜後台",
    category: "frontend",
    tech: ["vue", "ts", "firebase"],

    cover: "https:/images.unsplash.com/photo-1506126613408-eca07ce68773",

    desc: "商品、訂單、優惠券管理系統",

    demo: "https://aitong0113.github.io/TS-yogab/",
    github: "https://github.com/aitong0113/TS-yogab"
  },

  // Laravel
  {
    id: "draworigin",
    title: "繪初 DrawOrigin",
    category: "design",
    tech: ["laravel", "blade"],

    cover: images["/src/assets/images/4.jpeg"],

    desc: "插畫教學品牌網站（SEO + 多頁架構）",

    github: "https://github.com/aitong0113/draworigin"
  },

  // 記帳
  {
    id: "accounting",
    title: "日常記帳",
    category: "tool",
    tech: ["js"],

    cover: images["/src/assets/images/banner.png"],

    desc: "收支管理 + Google Sheets 同步",

    demo: "https://aitong0113.github.io/VC-task5f/",
    github: "https://github.com/aitong0113/VC-task5f"
  },

  // DogAge
  {
    id: "dogage",
    title: "DogAge",
    category: "tool",
    tech: ["js"],

    cover: images["/src/assets/images/1.png"],

    desc: "JS 即時互動小工具",

    demo: "https://aitong0113.github.io/VC-Day12/",
    github: "https://github.com/aitong0113/VC-Day12"
  },

  // 心天氣
  {
    id: "mood-weather",
    title: "今日心天氣",
    category: "design",
    tech: ["js"],

    cover: images["/src/assets/images/2.png"],

    desc: "心理 × UI 互動情緒 App",

    demo: "https://aitong0113.github.io/VC-Day21/",
    github: "https://github.com/aitong0113/VC-Day21"
  },

  // WithYou
  {
    id: "withyou",
    title: "WithYou 親子平台",
    category: "design",
    tech: ["scss", "bootstrap", "jquery"],

    cover: images["/src/assets/images/withyou.jpg"],

    desc: "親子互動平台（RWD + 插畫風）",

    demo: "https://aitong0113.github.io/WithYou/",
    github: "https://github.com/aitong0113/WithYou"
  },

  // RWD 練習
  {
    id: "rwd",
    title: "RWD Layout Showcase",
    category: "frontend",
    tech: ["css"],

    cover: images["/src/assets/images/3.jpeg"],

    desc: "Flex / Grid / Masonry 練習",

    demo: "https://aitong0113.github.io/RWD-1/"
  }
];

export default projectList;