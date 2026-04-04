import "./Skills.scss";

function Skills() {
  return (
    <section className="skills">

      <p className="skills__label">SKILLS</p>
      <h2 className="skills__title">核心技術能力</h2>

      {/* ⭐ 左右 */}
      <div className="skills-compare">

        <div className="skills-compare__col">
          <h3>Frontend Development</h3>
          <ul>
            <li>React (Hooks / Component Architecture)</li>
            <li>JavaScript (ES6+)</li>
            <li>State Management (Redux Toolkit)</li>
            <li>API Integration & Data Flow</li>
          </ul>
        </div>

        <div className="skills-compare__center">×</div>

        <div className="skills-compare__col">
          <h3>Engineering Practice</h3>
          <ul>
            <li>Responsive Design (RWD / SCSS)</li>
            <li>Modular Architecture</li>
            <li>Git Version Control</li>
            <li>UI Logic & Interaction Handling</li>
          </ul>
        </div>

      </div>

      {/* ⭐ 核心（你） */}
      <div className="skills-core">
        狀態管理 × 資料流設計 × 模組化思維
      </div>
      
      {/* ⭐ 最後一句（超重要） */}
      <div className="skills-tagline">
        Build scalable and maintainable frontend systems
      </div>

    </section>
  );
}

export default Skills;