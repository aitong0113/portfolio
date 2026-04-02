import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./PortfolioList.scss";
import ProjectCardVertical from "../components/cards/ProjectCardVertical";
import projectList from "../data/projectList";

function Portfolio() {

  // 🔥 狀態
  const [category, setCategory] = useState("all");
  const [tech, setTech] = useState("all");

  // 🔥 自動分類（來自資料）
  const categories = useMemo(() => {
    return ["all", ...new Set(projectList.map((p) => p.category))];
  }, []);

  const techList = useMemo(() => {
    return ["all", ...new Set(projectList.flatMap((p) => p.tech))];
  }, []);

  // 🔥 篩選
  const filtered = useMemo(() => {
    return projectList.filter((p) => {
      return (
        (category === "all" || p.category === category) &&
        (tech === "all" || p.tech.includes(tech))
      );
    });
  }, [category, tech]);

  // 🔥 主打（真正分離）
  const featured = filtered.find((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  // 🔥 中文 mapping（面試加分）
  const categoryMap = {
    all: "全部",
    frontend: "前端",
    design: "設計",
    tool: "工具",
  };

  const techMap = {
    all: "全部",
    react: "React",
    vue: "Vue",
    js: "JavaScript",
    ts: "TypeScript",
    scss: "SCSS",
    firebase: "Firebase",
    laravel: "Laravel",
  };

  return (
    <section className="portfolio-page">
      <div className="container">

        {/* HERO */}
        <div className="portfolio-hero">
          <p className="label">PORTFOLIO</p>
          <h1>
            把想法變成<span>真正可用</span>的產品
          </h1>
          <p className="subtitle">
            Frontend・UI/UX・Illustration — 從設計到實作
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
                  onClick={() => setCategory(c)}
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

        {/* ⭐ 主打卡 */}
        {featured && (
          <Link to={`/#/project/${featured.id}`} className="card-link">
            <ProjectCardVertical project={featured} featured />
          </Link>
        )}

        {/* ⭐ 其他卡片 */}
        <div className="project-grid">
          {others.map((p) => (
            <Link key={p.id} to={`/#/project/${p.id}`} className="card-link">
              <ProjectCardVertical project={p} />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;