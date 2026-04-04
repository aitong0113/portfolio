import "./About.scss";


function About() {
  return (
    <section className="about">
      <div className="about__inner">

        {/* ===== 左側 ===== */}
        <div className="about__left">
          <p className="about__label">ABOUT ME</p>

          <h2 className="about__title title-en">
            Hi! I'm Abbie
            <br />
            <span className="about__title--em">林艾彤</span>
          </h2>

          <div className="about__content">
            <p>
              我是 Abbie，專注於 <strong>React 前端開發</strong>，
              具備設計 × 前端 × 心理學的跨域背景，
              能從使用者需求出發，轉化為穩定且可維護的前端系統。
            </p>

            <p>
              熟悉 HTML、CSS、RWD、JavaScript，
              並具備 <strong>API 串接與資料流設計經驗</strong>，
              能獨立完成從 UI 實作、互動邏輯到部署的完整開發流程。
            </p>

            <p>
              使用 React 與 Redux Toolkit 建構應用，
              熟悉元件化設計與狀態管理，
              能打造具備 <strong>可維護性與擴展性</strong> 的前端架構。
            </p>

            <p>
              結訓於中彰投分署全端工程師青年專班，
              建立 Laravel、PHP 與 API 架構基礎，
              目前持續深化 React 與 Node.js，
              強化前端與後端整合能力。
            </p>

            <p>
              過去設計與心理學背景，
              使我在開發功能時能兼顧使用者行為與產品邏輯，
              在技術實作中提升整體使用體驗品質。
            </p>

            <p>
              我不只是實作介面，而是透過前端技術，
              <strong>能將需求轉化為具備穩定性與可維護性的前端系統</strong>
            </p>
          </div>

          <div className="about__skills">
            React · JavaScript · API Integration · RWD · SCSS · UX Thinking
          </div>
        </div>

        {/* ===== 右側 ===== */}
        <div className="about__right">

          <div className="journey-card">

            <p className="about__label about__label--right">MY JOURNEY</p>

            {/* ===== Timeline ===== */}
            <div className="timeline">
              {[
                { year: "2014.06+", title: "Visual Design", desc: "視覺設計與品牌整合" },
                { year: "2022.12+", title: "Psychology", desc: "心理學 × 使用者理解 × UX 思維" },
                { year: "2025.06+", title: "Frontend", desc: "HTML / CSS / JavaScript 實作能力" },
                { year: "2025.12~", title: "React & Node.js", desc: "專案實戰與前後端整合" },
              ].map((item, i) => (
                <div key={i} className="timeline__item">
                  <div className="timeline__dot"></div>
                  <div className="timeline__content">
                    <span className="timeline__year">{item.year}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== 核心定位句（升級🔥） ===== */}
            <p className="journey-card__quote">
              Bridging Design, Engineering, and Human Experience
            </p>

            {/* ===== Stats ===== */}
            <div className="stats">
              <div className="stats__card">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>

              <div className="stats__card">
                <h3>460h</h3>
                <p>Full-Stack Training</p>
              </div>

              <div className="stats__card">
                <h3>3×</h3>
                <p>Design × Engineering × Psychology</p>
              </div>

              <div className="stats__card">
                <h3>∞</h3>
                <p>Passion for Building Meaningful Products</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;