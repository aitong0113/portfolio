import "./Certificate.scss";

const certificates = [
  {
    img: `${import.meta.env.BASE_URL}/c1.jpg`,
    title: "全端工程師青年專班",
    desc: "完成 460 小時前後端訓練，具備從資料庫到前端介面的完整開發能力。",
    tags: ["HTML/CSS", "JavaScript", "Vue", "PHP", "Laravel", "MySQL"],
  },
  {
    img: `${import.meta.env.BASE_URL}/hex-JS.png`,
    title: "JavaScript Training",
    desc: "具備 JavaScript 問題拆解能力，能獨立完成互動邏輯與資料處理。",
    tags: ["JavaScript", "Frontend", "Problem Solving"],
  },
  {
    img: `${import.meta.env.BASE_URL}/hex-TS.png`,
    title: "TypeScript Training",
    desc: "能運用型別系統提升程式穩定性，建立可維護的前端架構。",
    tags: ["TypeScript", "Frontend", "Engineering"],
  },
  {
    img: `${import.meta.env.BASE_URL}/hex-RWD.png`,
    title: "Responsive Web Design (RWD)",
    desc: "能設計跨裝置響應式版面，確保不同螢幕尺寸下的使用體驗一致。",
    tags: ["RWD", "HTML", "CSS", "SCSS", "Frontend"],
  },
  {
    img: `${import.meta.env.BASE_URL}/hex-BS.png`,
    title: "Bootstrap 5",
    desc: "能快速建立結構化 UI，提升開發效率並維持版面一致性。",
    tags: ["Bootstrap", "SCSS", "RWD"],
  },
  {
    img: `${import.meta.env.BASE_URL}/hex-git.png`,
    title: "Git & GitHub",
    desc: "熟悉版本控制流程，能進行分支管理與團隊協作開發。",
    tags: ["Git", "GitHub", "Collaboration"],
  },
  {
    img: `${import.meta.env.BASE_URL}/Google UX Design-1.png`,
    title: "Foundations of UX Design",
    desc: "具備使用者導向設計思維，能從需求轉化為具體介面與體驗流程。",
    tags: ["UX", "Design Thinking", "User-Centered"],
  },
];

function Certificate() {
  return (
    <section className="certificate">

      <div className="certificate__inner">

        <h2 className="section-title">Engineering Training</h2>

        <p className="section-subtitle">
          這些學習與實作經歷，構成我目前的前端工程能力基礎
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