
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectDetail.scss";
import { FaPlayCircle, FaGithub } from "react-icons/fa";
import projects from "../data/projectsDetail";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";


function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div style={{ padding: 40 }}>找不到專案</div>;

  return (
    <>
      {/* 返回 */}
      <div className="project-back-wrapper">
        <button onClick={() => navigate(-1)}>← 返回</button>
      </div>

      {/* HERO */}
      <section className="project-hero">
        <div className="project__hero-product">
          <div className="hero-left">
            <img src={project.cover} alt={project.title} />
          </div>
          <div className="hero-right">
            <h1>{project.title}</h1>
            <p className="subtitle">{project.subtitle}</p>
            <p className="desc">{project.desc}</p>
            <p className="highlight">{project.highlight}</p>
            <ul className="line-list">
              {project.heroList && project.heroList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div className="tags">
              {project.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>
            <div className="cta">
              {project.demo && (
                <a href={project.demo} target="_blank" className="ui-btn ui-btn--primary">
                  <FaPlayCircle className="btn__icon" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" className="ui-btn ui-btn--outline">
                  <FaGithub className="btn__icon" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 內容 */}
      <div className="project project-detail-container">
        {/* richDescription（完整文案） */}
        {project.richDescription && (
          <section className="project__section project__section--desc">
            <div className="project-rich-desc">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");

                    if (!inline && match) {
                      const codeText = String(children).replace(/\n$/, "");

                      return (
                        <div className="code-block">
                          <SyntaxHighlighter
                            style={oneLight}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          >
                            {codeText}
                          </SyntaxHighlighter>
                        </div>
                      );
                    }

                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {project.richDescription}
              </ReactMarkdown>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default ProjectDetail;