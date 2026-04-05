import { Link } from "react-router-dom";
import "./Portfolio.scss";

function Portfolio() {

  const ProjectsDetail = [
    {
      id: "innersoul",
      title: "InnerSoul 心途",

      subtitle: "React 專案｜情緒紀錄 × 音樂陪伴應用平台",

      desc: "以 React 建構情緒追蹤應用，透過 Redux Toolkit 管理全域狀態，解決跨頁與跨元件資料同步問題，建立可預測的資料流架構。",

      // ⭐ 新增這兩個
      miniTech: "Redux資料流: action → store → thunk → API → state → UI",
      miniDesc: "將非同步資料流集中管理，避免跨元件狀態錯亂問題",

      highlight: "全域狀態 × 非同步資料流 × 元件化架構",

      tech: ["React", "Redux Toolkit", "React Router", "SCSS"],

      cover: `${import.meta.env.BASE_URL}/InnerSoul.png`,
      featured: true,
    }
  ];

  const featuredProject = ProjectsDetail.find(p => p.featured);

  return (
    <section className="portfolio">

      <div className="portfolio__header">
        <p className="portfolio__label">PORTFOLIO</p>
        <h2>精選作品</h2>
      </div>

      <div className="portfolio__grid--single">

        <Link
          to={`/project/${featuredProject.id}`}
          className="project-card featured"
        >

          {/* ⭐ 圖片區 */}
          <div className="project-card__image">
            <img src={featuredProject.cover} alt={featuredProject.title} />

            <div className="overlay">
              <span>查看專案 →</span>
            </div>
          </div>

          {/* ⭐ 內容區 */}
          <div className="project-card__content">
            <span className="badge">Featured</span>

            <h3>{featuredProject.title}</h3>
            <p className="subtitle">{featuredProject.subtitle}</p>


            <p className="mini-tech">
              {featuredProject.miniTech}
            </p>
            <p className="mini-desc">
              {featuredProject.miniDesc}
            </p>

            <p className="desc">{featuredProject.desc}</p>

            <p className="highlight">
              {featuredProject.highlight}
            </p>

            <div className="tags">
              {featuredProject.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>

        </Link>

      </div>

      <div className="portfolio__more">
        <Link to="/portfolio" className="ui-btn ui-btn--primary">
          查看其他專案 ↓
        </Link>
      </div>

    </section>
  );
}

export default Portfolio;