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
              我是 Abbie，具備 <strong>設計 × 前端 × 心理學</strong> 的跨域背景，
              擅長從使用者需求出發，將抽象的情緒與體驗轉化為可實作的產品設計。
            </p>
  
            <p>
              熟悉 HTML、CSS、RWD、JavaScript，
              能獨立完成從設計稿到互動實作的完整開發流程，
              並具備 API 串接經驗，理解前後端資料流與協作邏輯。
            </p>

            <p>
              結訓於中彰投分署全端工程師青年專班，
              建立 Laravel、PHP 與 API 架構基礎，
              目前持續深化 React 與 Node.js，
              強化元件化與前端架構能力。
            </p>

            <p>
              具備心理學與統計背景，能以
              <strong>同理心 × 資料導向</strong>
              分析使用者需求，
              將設計轉化為更貼近行為與情境的產品體驗。
            </p>

            <p>
              同時經營插畫品牌 Abbie_draw，
              擅長視覺整合與品牌風格設計，
              將感性美感與工程邏輯結合，
              打造具有溫度與細節的數位產品。
            </p>

            {/* 🔥 加一個記憶點（面試加分） */}
            <p>
              我不只是實作介面，而是設計一段
              <strong>使用者願意留下來的體驗</strong>。
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