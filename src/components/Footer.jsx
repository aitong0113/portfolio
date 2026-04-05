
import { MdEmail } from "react-icons/md";
import { FaLine, FaGithub, FaBehance, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <h2 className="footer__title">
          打造<span>可用且可擴展</span>的前端系統
        </h2>

        <p className="footer__desc">
          專注於 React 與前端架構，
          打造可維護且真正被使用的產品。
          <br />
          如果你正在找一位能把設計與工程整合的前端工程師，
          或對我的專案有興趣，歡迎與我聯絡。
        </p>

        <div className="footer__buttons">
          <a href="mailto:aitong0113@gmail.com" className="ui-btn ui-btn--primary">
            <MdEmail className="btn__icon" />
            Email
          </a>

          <a href="https://line.me/ti/p/iui71zPXUK" target="_blank" rel="noopener noreferrer" className="ui-btn ui-btn--outline">
            <FaLine className="btn__icon" />
            LINE
          </a>

          <a href="https://github.com/aitong0113" target="_blank" rel="noopener noreferrer" className="ui-btn ui-btn--outline">
            <FaGithub className="btn__icon" />
            GitHub
          </a>

          <a href="https://www.behance.net/abbie_draw" target="_blank" rel="noopener noreferrer" className="ui-btn ui-btn--outline">
            <FaBehance className="btn__icon" />
            Behance
          </a>

          <a href="https://instagram.com/abbie_draw" target="_blank" rel="noopener noreferrer" className="ui-btn ui-btn--outline">
            <FaInstagram className="btn__icon" />
            Instagram
          </a>
        </div>

      </div>

      <div className="footer__bottom">
        © 2025 Abbie Lin · Frontend Developer × UI/UX Designer × Illustrator
      </div>
    </footer>
  );
}

export default Footer;