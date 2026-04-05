import "./Skills.scss";

function Skills() {
  return (
    <section className="skills">

      <p className="skills__label">skills</p>
      <h2 className="skills__title">核心技術能力</h2>

      {/* ⭐ 左右 */}
      <div className="skills-compare">

        <div className="skills-compare__col">
          <h3>前端開發</h3>
          <ul>
            <li>React（Hooks / 元件架構）</li>
            <li>JavaScript（ES6+）</li>
            <li>狀態管理（Redux Toolkit）</li>
            <li>API 串接與資料流設計</li>
          </ul>
        </div>

        <div className="skills-compare__center">×</div>

        <div className="skills-compare__col">
          <h3>工程實務</h3>
          <ul>
            <li>響應式設計（RWD / SCSS）</li>
            <li>模組化架構設計</li>
            <li>Git 版本控制</li>
            <li>前端互動邏輯與行為處理</li>
          </ul>
        </div>

      </div>

      {/* ⭐ 核心（你） */}
      <div className="skills-core">
        狀態管理 × 資料流設計 × 模組化思維
      </div>

      {/* ⭐ 最後一句（超重要） */}
      <div className="skills-tagline">
        打造具可擴展性與可維護性的前端系統
      </div>

    </section>
  );
}

export default Skills;