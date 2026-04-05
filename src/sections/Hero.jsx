
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
          <img src={`${import.meta.env.BASE_URL}/abbie.png`} alt="Abbie" />
        </div>

        {/* 右內容 */}
        <div className="hero__content">

          <div className="hero__role">
           前端工程師 <br /> React · Redux Toolkit · RESTful API · SCSS · Git
          </div>

          <h1 className="hero__main-title">
            專注於<br />
            <span className="hero__main-title--em">React 應用開發</span>打造可維護的前端架構
          </h1>

          <div className="hero__desc">
            <div className="hero__desc--sub">
              實作 Redux Toolkit 狀態管理與 API 資料流設計
            </div>
            <div className="hero__desc--small">
              能獨立完成前端開發到部署流程
            </div>
          </div>

          <div className="hero__buttons">
            <Link to="/portfolio">
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