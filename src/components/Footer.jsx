
import { MdEmail } from "react-icons/md";
import { FaLine, FaGithub, FaBehance, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <h2 className="footer__title">
          把想法變成<span>真正可用</span> 的產品
        </h2>

        <p className="footer__desc">
          期待未來有機會合作，一起創造更具影響力與品質的作品。<br />
          歡迎找我聊聊合作機會、專案提案，或交流設計與技術心得。
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