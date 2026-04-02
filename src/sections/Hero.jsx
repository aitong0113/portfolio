
import { FaFolderOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">

        {/* 左圖 */}
        <div className="hero__image">
          <img src={`${import.meta.env.BASE_URL}/abbie.jpg`} alt="Abbie" />
        </div>

        {/* 右內容 */}
        <div className="hero__content">

          <div className="hero__role">
            FRONTEND ENGINEER · UI/UX DESIGNER
          </div>

          <h1 className="hero__main-title">
            我把設計落實為<br />
            真正可用的
            <span className="hero__main-title--em">前端</span>體驗
          </h1>

          <div className="hero__desc">
            <div className="hero__desc--sub">
              將設計轉化為可運作的產品
            </div>
            <div className="hero__desc--small">
              結合設計、工程與心理的前端開發者
            </div>
          </div>

          <div className="hero__buttons">
            <Link to="/#/portfolio">
              <button className="ui-btn ui-btn--primary">
                <FaFolderOpen className="btn__icon" />
                查看作品
              </button>
            </Link>

            <a href="https://github.com/aitong0113" className="ui-btn ui-btn--outline" target="_blank" rel="noopener noreferrer">
              <FaGithub className="btn__icon" />
              GitHub
            </a>

            <a
              href={`${import.meta.env.BASE_URL}/resume.pdf`}
              download
              className="ui-btn ui-btn--outline"
            >
              <HiOutlineDocumentArrowDown className="btn__icon" />
              下載履歷
            </a>
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;