import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

/* 멤버 정보 배열: 실제 이미지 파일명(kjw.jpg 등)은 public 폴더 또는 적절한 경로에 두세요 */
const members = [
  {
    name: "강지원",
    img: "./kjw.jpg",
    role: "개발",
    awards: "교내 표창장 - 봉사상",
    projects: "종합 코딩 실력 향상 플랫폼 등",
    instagram: "@j1_k.w0n",
    insta_link: "https://www.instagram.com/j1_k.w0n/",
    notion: "https://www.notion.so/NULL-26acbac7b93f8020a75bd180a7032cc9?source=copy_link"
  },
  {
    name: "이지후",
    img: "./ljh.jpg",
    role: "개발",
    awards: "NYPC, 한국정보올림피아드 수상 등",
    projects: ".",
    instagram: "@slow090820",
    insta_link: "https://www.instagram.com/slow090820/",
    notion: "https://www.notion.so/STARTUPTHON-26aaa238d89a80d29d6dd8e97aad19cd"
  },
  {
    name: "한재인",
    img: "./hji.jpg",
    role: "기획",
    awards: "NYPC 특별상",
    projects: "종합 코딩 실력 향상 플랫폼 등",
    instagram: "@hji_0715",
    insta_link: "https://www.instagram.com/hji_0715/",
    notion: "https://www.notion.so/26bf85c86a9e802da020eaa9eafd0b83?source=copy_link"
  },
  {
    name: "한재찬",
    img: "./hjc.jpg",
    role: "디자인 및 총괄",
    awards: ".",
    projects: "Todo Calender 제작 프로젝트 등",
    instagram: "@chn_hcn",
    insta_link: "https://www.instagram.com/chn_hcn/",
    notion: "https://www.notion.so/Portfolio-26a999ff48a180e8835ee0780b20e8f3?source=copy_link"
  }
];

function App() {
  // hovered: 현재 마우스 오버된 카드의 인덱스
  const [hovered, setHovered] = useState(null);

  return (
    <div className="App">
      {/* 헤더: 전체 너비를 사용하도록 container-fluid 사용 */}
      <nav className="navbar shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">NULL</span>
        </div>
      </nav>

      {/* 메인 컨텐츠: 세로 플렉스 구조 유지 */}
      <main className="main-content">
        {/* About Us: 필요 시 내부 텍스트만 container로 제한 가능 */}
        <section className="about-section py-5">
          <div className="container-fluid text-center px-5">
            <h3 className="fw-bold mb-3">About Us</h3>
            <p className="text-muted">
              NULL 팀은 창의적인 아이디어와 기술력을 바탕으로 사회적 가치를 실현하는 것을 목표로 합니다.<br />
              우리는 다양한 프로젝트와 협업을 통해 성장하고, 기술로 세상을 따뜻하게 만들고자 합니다.
            </p>
          </div>
        </section>

        {/* 카드 섹션: 전체 너비 사용 (container-fluid) */}
        <div className="cards-wrapper container-fluid px-4">
          {members.map((member, idx) => (
            <div
              key={idx}
              className={`card-wrapper ${hovered === idx ? "active" : hovered !== null ? "inactive" : ""}`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="profile-card text-center p-4 shadow-sm">
                {hovered === idx ? (
                  /* 마우스 오버 시 상세 정보 출력 */
                  <div className="details">
                    <h5>{member.name}</h5>
                    <p><b>직군:</b> {member.role}</p>
                    <p><b>수상:</b> {member.awards}</p>
                    <p><b>프로젝트:</b> {member.projects}</p>
                    <p>
                      <b>인스타그램:</b>{" "}
                      <a href={member.insta_link} target="_blank" rel="noreferrer">
                        {member.instagram}
                      </a>
                    </p>
                    <a href={member.notion} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                      Notion
                    </a>
                  </div>
                ) : (
                  /* 기본 카드(아바타 + 이름) */
                  <>
                    {/* .avatar 클래스로 이미지 크기/비율 제어 */}
                    <img src={member.img} alt={member.name} className="avatar mb-3 img-fluid" />
                    <h6>{member.name}</h6>
                  </> 
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 카드 안내 문구 */}
        <div className="text-center mt-2">
          <small className="guide-text">👉 카드를 눌러보거나 마우스를 올려보세요!</small>
        </div>

        {/* 대표 프로젝트 섹션 (container-fluid 사용) */}
        <section className="projects-section py-5">
          <div className="container-fluid px-4">
            <h3 className="text-center fw-bold mb-4">대표 프로젝트</h3>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="project-card p-4 shadow-sm h-100">
                  <h5>스마트팜 AI 시스템</h5>
                  <p>
                    인공지능과 IoT를 결합해 농업의 효율성을 높이는 솔루션.
                    드론·센서를 활용하여 작물의 생육 환경을 최적화합니다.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-card p-4 shadow-sm h-100">
                  <h5>청소년 웰다잉 플랫폼</h5>
                  <p>
                    청소년과 청년이 삶의 의미를 돌아보고 기록할 수 있는
                    감성 저널링 기반의 웹/앱 서비스.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Stack 섹션 */}
        <section className="skills-section py-5 bg-light">
          <div className="container-fluid text-center px-4">
            <h3 className="fw-bold mb-4">Skill Stack</h3>
            <div className="d-flex justify-content-center gap-5">
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="60" />
                <p className="mt-2">Python</p>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="60" />
                <p className="mt-2">React</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="faq-section py-5">
          <div className="container-fluid px-4">
            <h3 className="fw-bold mb-4 text-center">FAQ</h3>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    Q. NULL 팀 이름의 의미는 무엇인가요?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    NULL은 ‘무한한 가능성’을 의미합니다. 아무것도 없지만, 동시에 모든 것을 담을 수 있다는 뜻을 담고 있습니다.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faqTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    Q. 주요 프로젝트는 어떤 게 있나요?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    .
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faqThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                    Q. 앞으로의 목표는 무엇인가요?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    더 많은 사회적 문제 해결에 기여하고, 글로벌 무대에서도 인정받는 팀이 되는 것이 목표입니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 팀 슬로건 */}
        <section className="text-center py-5 bg-light">
          <h2 className="fw-bold">기술로 세상을 따뜻하게, NULL</h2>
          <p className="text-muted">사회적 가치와 혁신을 함께 추구하는 팀</p>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="text-center py-3 bg-dark text-white">
        <small>© 2025 NULL Team Portfolio</small>
      </footer>
    </div>
  );
}

export default App;
