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
            <p className="about__intro">
              我是 Abbie，專注於 <strong>React 前端開發</strong>，
              能將需求轉化為穩定且可維護的前端系統。
            </p>

            <ul className="about__list">
              <li>
                熟悉 <strong>React / Redux Toolkit</strong>，
                具備狀態管理與資料流設計能力
              </li>
              <li>
                具備 <strong>API 串接與非同步資料處理</strong>，
                可完成完整開發流程
              </li>
              <li>
                熟悉 <strong>元件化設計（Component-based）</strong>，
                建立可維護與可擴展架構
              </li>
              <li>
                具備 <strong>需求拆解與跨部門溝通能力</strong>
              </li>
            </ul>

            <p className="about__highlight">
              不只是實作功能，
              而是將需求轉化為
              <strong>具備結構與可維護性的前端系統</strong>
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
                {
                  year: "2014.06+",
                  title: "設計基礎",
                  desc: "培養視覺表達與資訊結構能力"
                },
                {
                  year: "2022.12+",
                  title: "使用者理解",
                  desc: "建立使用者行為洞察與產品思維"
                },
                {
                  year: "2025.06+",
                  title: "前端開發",
                  desc: "專注 JavaScript 與 React 應用開發能力"
                },
                {
                  year: "2025.12~",
                  title: "工程能力整合",
                  desc: "強化資料流設計與前後端整合能力"
                }
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
              將需求轉化為具可維護性與擴展性的前端系統
            </p>

            {/* ===== Stats ===== */}
            <div className="stats">
              <div className="stats__card">
                <h3>5+</h3>
                <p>完成專案數</p>
              </div>

              <div className="stats__card">
                <h3>460h</h3>
                <p>全端開發訓練時數</p>
              </div>

              <div className="stats__card">
                <h3>3+</h3>
                <p>跨領域整合能力<br />（使用者 × 工程 × 設計）</p>
              </div>

              <div className="stats__card">
                <h3>∞</h3>
                <p>持續學習與產品開發動能</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;