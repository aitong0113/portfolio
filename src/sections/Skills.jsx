import "./Skills.scss";

function Skills() {
  return (
    <section className="skills">

      <p className="skills__label">SKILLS</p>
      <h2 className="skills__title">跨域整合能力</h2>


      {/* ⭐ 左右 */}
      <div className="skills-compare">

        <div className="skills-compare__col">
          <h3>Design</h3>
          <ul>
            <li>Figma / Wireframe</li>
            <li>UX / User Flow</li>
            <li>Visual Design</li>
            <li>Brand & Illustration</li>
          </ul>
        </div>

        <div className="skills-compare__center">×</div>

        <div className="skills-compare__col">
          <h3>Engineering</h3>
          <ul>
            <li>React / JavaScript</li>
            <li>API Integration</li>
            <li>RWD / SCSS</li>
            <li>Git Workflow</li>
          </ul>
        </div>

      </div>

      {/* ⭐ 核心（你） */}
      <div className="skills-core">
        規劃 × 整合 × 系統思維
      </div>
      
      {/* ⭐ 最後一句（超重要） */}
      <div className="skills-tagline">
        Design × Engineering × Psychology
      </div>

    </section>
  );
}

export default Skills;