import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaBehance,
  FaLine,
  FaChevronRight,
  FaEye,
  FaDownload,
  FaTimes,
} from "react-icons/fa";
import "./Contact.scss";

// ─── 資料 ──────────────────────────────────────
const CONTACT_LINKS = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    sub: "aitong0113@gmail.com",
    desc: "合作洽詢（24 小時內回覆）",
    href: "mailto:aitong0113@gmail.com",
  },
  {
    icon: <FaLine />,
    label: "LINE",
    sub: "點此加入好友",
    desc: "快速溝通需求 / 專案討論",
    href: "https://line.me/ti/p/iui71zPXUK",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    sub: "github.com/aitong0113",
    desc: "查看專案架構與程式實作",
    href: "https://github.com/aitong0113",
    target: "_blank",
  },
  {
    icon: <FaBehance />,
    label: "Behance",
    sub: "設計作品集",
    desc: "查看 UI / 設計作品",
    href: "https://www.behance.net/abbie_draw",
    target: "_blank",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    sub: "@abbie_draw",
    desc: "插畫創作與日常分享",
    href: "https://instagram.com/abbie_draw",
    target: "_blank",
  },
];

const SKILLS = [
  "React", "Vue 3", "TypeScript", "JavaScript",
  "HTML/CSS", "SCSS", "Laravel", "Firebase",
  "Figma", "Git", "RWD", "Procreate",
];

const EXPERIENCE = [
  {
    title: "全端工程師青年專班",
    date: "2024",
    sub: "勞動力發展署 中彰投分署 · 460 小時",
    desc: "HTML/CSS、JavaScript、Vue、PHP、Laravel、MySQL 完整訓練",
  },
  {
    title: "Google UX Design 專業證書",
    date: "2024–2025",
    sub: "Google · Coursera",
    desc: "Foundations of UX、Empathize/Define/Ideate 等課程",
  },
  {
    title: "六角學院系列課程",
    date: "2024–2025",
    sub: "",
    desc: "TypeScript、RWD、Bootstrap、Git、JS 工程師養成班",
  },
];

const PROJECTS = [
  {
    title: "InnerSoul 心途",
    tech: "React / Redux",
    desc: "情緒追蹤 Web App，音樂播放器、日記 CRUD、SPA 路由設計",
  },
  {
    title: "靜心陰瑜伽 電商",
    tech: "Vue 3 / TypeScript",
    desc: "前後台完整電商系統，優惠券、訂單管理、Firebase 整合",
  },
];

// ─── 動畫 variants ──────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};



// ─── ResumeModal ────────────────────────────────
function ResumeModal({ onClose }) {
  // ⭐ 履歷圖片（放 public）
  const resumeImages = [
    `${import.meta.env.BASE_URL}/resume-1.png`,
    `${import.meta.env.BASE_URL}/resume-2.png`,
    `${import.meta.env.BASE_URL}/resume-3.png`,
    `${import.meta.env.BASE_URL}/resume-4.png`,
    `${import.meta.env.BASE_URL}/resume-5.png`,
    `${import.meta.env.BASE_URL}/resume-6.png`,
  ];

  return (
    <div
      className="resume-modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="resume-modal-box">

        {/* ── Header ── */}
        <div className="modal-header">
          <div>
            <h4>Abbie Lin — 履歷預覽</h4>
            <p className="modal-header-meta">
              最後更新 2026.04 · 繁體中文版
            </p>
          </div>

          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* ── ⭐ 圖片滾動區（核心） ── */}
        <div className="modal-body">
          <div className="resume-images">
            {resumeImages.map((src, i) => (
              <img key={i} src={src} alt={`resume-${i + 1}`} />
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="modal-footer">
          <button
            className="modal-btn modal-btn-close"
            onClick={onClose}
          >
            關閉
          </button>

          <a
            href={`${import.meta.env.BASE_URL}/resume.pdf`}
            download
            className="modal-btn modal-btn-dl"
          >
            <FaDownload />
            下載 PDF
          </a>
        </div>

      </div>
    </div>
  );
}

// ─── Contact（主元件）──────────────────────────
function Contact() {
  const [modalOpen, setModalOpen] = useState(false);


  // 修正：useState → useEffect（ESC 監聽要用 useEffect 才正確）
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // modal 開啟時鎖定 body scroll
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  return (
    <>
      <section className="contact">
        {/* 滿版背景層 */}
        <div className="contact-bg" aria-hidden="true" />

        {/* ── 裝飾層 ── */}
        <div className="contact-deco" aria-hidden="true" />
        <div className="contact-deco-2" aria-hidden="true" />
        <div className="contact-deco-3" aria-hidden="true" />
        <div className="contact-deco-4" aria-hidden="true" />
        <div className="dot dot-1" aria-hidden="true" />
        <div className="dot dot-2" aria-hidden="true" />
        <div className="dot dot-3" aria-hidden="true" />

        <div className="container">

          {/* ══ 左側 ══ */}
          <div className="contact-left">
            <p className="label">
              Contact
            </p>

            <h1>
              把設計，轉成<span>真正可用的產品</span>
            </h1>

            <p className="subtitle">
              Frontend Engineer · React · Data Flow
            </p>

            <p className="desc">
              我專注於 React 與資料流架構，
              將 UI 與需求轉化為穩定且可維護的前端產品，
              並優化使用者操作流程與整體體驗。
            </p>

            <p className="highlight-list">
              ✔ React / Redux 實戰專案<br />
              ✔ 電商 / 後台系統開發經驗<br />
              ✔ 從設計到上線的整合能力<br />
              ✔ 心理 × 使用者體驗 × 前端開發
            </p>

            <h2>目前開放前端合作</h2>

            <p className="desc">
              目前開放正職與接案合作，
              如果你正在找能把設計變成產品的工程師，
              現在就可以直接聯繫我。
            </p>

            {/* 聯絡卡片列表 */}
            <div className="contact-list">
              {CONTACT_LINKS.map((item, i) => (
                <a
                  key={item.label}
                  className="contact-item"
                  href={item.href}
                  target={item.target ?? "_self"}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  variants={fadeUp}
                  custom={5 + i}
                >

                  <div className="contact-item-icon" aria-hidden="true">
                    {item.icon}
                  </div>

                  <div className="contact-item-text">
                    <p>{item.label}</p>
                    <span>{item.sub}</span>
                    <small className="contact-desc">{item.desc}</small>
                  </div>

                  <span className="contact-item-arrow" aria-hidden="true">
                    <FaChevronRight />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ══ 右側履歷卡 ══ */}
          <div
            className="resume-card"
          >
            <p className="resume-eyebrow">Resume</p>

            <h3>
              下載我的<em>履歷</em>
            </h3>

            <p className="resume-desc">
              完整呈現我的前端開發能力、專案經驗與產品思維。
              適合用於面試與合作評估。
            </p>

            <div className="resume-tags">
              {[
                "Frontend Engineering",
                "React & State Management",
                "UI → Product Implementation",
                "UX & Interaction Thinking",
              ].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="resume-actions">

              <button
                className="btn primary"
                onClick={() => setModalOpen(true)}
                aria-label="開啟履歷預覽"
              >
                <FaEye />
                預覽履歷
              </button>
              <a
                href={`${import.meta.env.BASE_URL}/resume.pdf`}
                download
                className="btn ghost"
              >
                <FaDownload />
                下載 PDF
              </a>

            </div>

            <div className="resume-divider" />

            <div className="resume-footer">
              <span className="resume-update">最後更新：2026 年 4 月</span>

            </div>
          </div>

        </div>
      </section>

      {/* ── Modal（無動畫，直接顯示/隱藏）── */}
      {modalOpen && (
        <ResumeModal onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export default Contact;
