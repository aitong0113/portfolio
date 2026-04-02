import { Link } from "react-router-dom";
import "./Portfolio.scss";

function Portfolio() {

  const ProjectsDetail = [
    {
      id: "innersoul",
      title: "InnerSoul 心途",
      subtitle: "Emotion Tracking & Digital Companion",
      desc: "情緒支持型應用，整合音樂播放、情緒紀錄與日記系統，提升使用者自我覺察體驗。",
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
  to={`/#/project/${featuredProject.id}`}
  className="project-card featured"
>

  {/* ⭐ 圖片區 */}
  <div className="project-card__image">
    <img src={featuredProject.cover} alt={featuredProject.title} />

    {/* ⭐ overlay 要放這裡 */}
    <div className="overlay">
      <span>查看專案 →</span>
    </div>
  </div>

  {/* ⭐ 內容區 */}
  <div className="project-card__content">
    <span className="badge">Featured</span>

    <h3>{featuredProject.title}</h3>
    <p className="subtitle">{featuredProject.subtitle}</p>

    <p className="desc">{featuredProject.desc}</p>

    <p className="highlight">
      State × Data Flow × Component Architecture
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
        <Link to="/#/portfolio" className="ui-btn ui-btn--primary">查看其他專案 ↓</Link>
      </div>

    </section>
  );
}

export default Portfolio;