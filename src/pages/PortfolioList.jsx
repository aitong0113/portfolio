import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./PortfolioList.scss";
import ProjectCardVertical from "../components/cards/ProjectCardVertical";
import projectList from "../data/projectList";

function Portfolio() {
  const [category, setCategory] = useState("all");
  const [tech, setTech] = useState("all");

  ////////////////////////////////////////////////////////
  // 🔥 分類資料
  ////////////////////////////////////////////////////////

  const categories = useMemo(() => {
    return ["all", ...new Set(projectList.map((p) => p.category))];
  }, []);

  const techList = useMemo(() => {
    return ["all", ...new Set(projectList.flatMap((p) => p.tech))];
  }, []);

  ////////////////////////////////////////////////////////
  // 🔥 篩選邏輯
  ////////////////////////////////////////////////////////

  const filtered = useMemo(() => {
    return projectList.filter((p) => {
      return (
        (category === "all" || p.category === category) &&
        (tech === "all" || p.tech.includes(tech))
      );
    });
  }, [category, tech]);

  ////////////////////////////////////////////////////////
  // 🔥 主打（永遠存在，不受 filter 影響）
  ////////////////////////////////////////////////////////

  const featured = projectList.find((p) => p.featured);

  ////////////////////////////////////////////////////////
  // 🔥 其他卡片（才用 filtered）
  ////////////////////////////////////////////////////////

  const others = filtered.filter((p) => !p.featured);

  ////////////////////////////////////////////////////////
  // 🔥 顯示名稱
  ////////////////////////////////////////////////////////

  const categoryMap = {
    all: "全部作品",
    core: "核心專案",
    product: "產品開發",
    system: "系統 / 後台",
    experiment: "練習 / 工具",
  };

  const techMap = {
    all: "全部技術",

    react: "React",
    redux: "Redux",
    router: "Router",

    js: "JavaScript",
    ts: "TypeScript",

    scss: "SCSS",
    css: "CSS",

    firebase: "Firebase",
    laravel: "Laravel",
    blade: "Blade",

    bootstrap: "Bootstrap",
    jquery: "jQuery",
  };

  ////////////////////////////////////////////////////////
  // 🔥 UI
  ////////////////////////////////////////////////////////

  return (
    <section className="portfolio-page">
      <div className="container">

        {/* HERO */}
        <div className="portfolio-hero">
          <p className="label">PORTFOLIO</p>

          <h1>
            將需求轉化為<span>真正可用</span>的產品
          </h1>

          <p className="subtitle">
            Frontend Engineer · React · State Management · Data Flow Architecture
          </p>
        </div>

        {/* FILTER */}
        <div className="portfolio-filter">

          {/* 類別 */}
          <div className="filter-row">
            <span className="filter-label">分類</span>

            <div className="filter-list">
              {categories.map((c) => (
                <button
                  key={c}
                  className={category === c ? "active" : ""}
                  onClick={() => {
                    setCategory(c);
                    setTech("all"); // 🔥 避免 filter 卡死
                  }}
                >
                  {categoryMap[c] || c}
                </button>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* 技術 */}
          <div className="filter-row">
            <span className="filter-label">技術</span>

            <div className="filter-list">
              {techList.map((t) => (
                <button
                  key={t}
                  className={tech === t ? "active" : ""}
                  onClick={() => setTech(t)}
                >
                  {techMap[t] || t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ⭐ 主打卡（永遠顯示） */}
        {featured && (
          <Link to={`/project/${featured.id}`} className="card-link featured-card">
            <ProjectCardVertical project={featured} featured />
          </Link>
        )}

        {/* ⭐ 其他卡片 */}
        <div className="project-grid">
          {others.length > 0 ? (
            others.map((p) => (
              <Link key={p.id} to={`/project/${p.id}`} className="card-link">
                <ProjectCardVertical project={p} />
              </Link>
            ))
          ) : (
            <p className="empty">目前沒有符合條件的作品</p>
          )}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;