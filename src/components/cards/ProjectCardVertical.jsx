import "./ProjectCardVertical.scss";

function ProjectCardVertical({ project, featured }) {
  const { title, cover, tech = [] } = project;

  return (
    <div className={`project-card-vertical ${featured ? "project-card--featured" : ""}`}>

      {/* 圖片 */}
      <div className="project-card-vertical__image">
        <img src={cover} alt={title} />

        <div className="overlay">
          <span>查看專案 →</span>
        </div>
      </div>

      {/* 內容 */}
      <div className="project-card-vertical__content">
        <h3>{title}</h3>

        <div className="tags">
          {tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProjectCardVertical;