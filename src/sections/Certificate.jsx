import "./Certificate.scss";

const certificates = [
  {
    img: "images/c1.jpg",
    title: "全端工程師青年專班",
    desc: "勞動力發展署中彰投分署結訓證書，460 小時網站前後端工程師養成訓練",
    tags: ["HTML/CSS", "JavaScript", "Vue", "PHP", "Laravel", "MySQL"],
  },
  {
    img: "images/hex-RWD.png",
    title: "Responsive Web Design (RWD)",
    desc: "學習 RWD 核心概念與實作方法，能因應不同裝置設計一致體驗。",
    tags: ["RWD", "HTML", "CSS", "SCSS", "Frontend"],
  },
  {
    img: "images/Google UX Design-1.png",
    title: "Foundations of UX Design",
    desc: "學習 UX 基礎理論與設計流程。",
    tags: ["UX", "Design Thinking", "User-Centered"],
  },
  {
    img: "images/hex-BS.png",
    title: "Bootstrap 5",
    desc: "熟悉格線系統與快速建立前端版型。",
    tags: ["Bootstrap", "SCSS", "RWD"],
  },
  {
    img: "images/hex-TS.png",
    title: "TypeScript Training",
    desc: "深入理解型別系統與工程思維。",
    tags: ["TypeScript", "Frontend", "Engineering"],
  },
  {
    img: "images/hex-git.png",
    title: "Git & GitHub",
    desc: "掌握版本控制與團隊協作流程。",
    tags: ["Git", "GitHub", "Collaboration"],
  },
  {
    img: "images/hex-JS.png",
    title: "JavaScript Training",
    desc: "具備基礎工程思維與實作能力。",
    tags: ["JavaScript", "Frontend", "Problem Solving"],
  },
];

function Certificate() {
  return (
    <section className="certificate">

      <div className="certificate__inner">

        <h2 className="section-title">Certificate</h2>

        <p className="section-subtitle">
          展現專業技能與學習成果，這些證書記錄了我的成長與努力。
        </p>

        <div className="certificate__masonry">
          {certificates.map((item, index) => (
            <div key={index} className="certificate-card">

              <img src={item.img} alt={item.title} />

              <div className="certificate-card__content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <div className="certificate-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Certificate;