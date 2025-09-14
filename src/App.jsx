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
    projects: "개인 금융 시각화 다이어리 등",
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
    awards: "경기도 교육감 표창",
    projects: "Todo Calender 제작 등",
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
              우리는 다양한 프로젝트와 협업을 통해 성장하고, 기술로 세상을 따뜻하게 채워나가고자 합니다.
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

        {/* Skill Stack 섹션 */}
        <section className="skills-section py-5 bg-light">
          <div className="container-fluid text-center px-4">
            <h3 className="fw-bold mb-4">Skill Stack</h3>
            <div className="d-flex justify-content-center gap-5">
              <div className="skill-item">
                <img src="./C_Logo.svg" alt="C/C++" width="60" />
                <p className="mt-2">C/C++</p>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="60" />
                <p className="mt-2">Python</p>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="60" />
                <p className="mt-2">HTML</p>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="60" />
                <p className="mt-2">CSS</p>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" width="60" />
                <p className="mt-2">JS</p>
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
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    Q. NULL 팀 이름의 의미는 무엇인가요?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    NULL은 아무것도 없음과 동시에 모든 것을 담을 수 있다는 뜻을 담고 있어, '무한한 가능성'을 의미합니다. 
                    저희는 무한한 기회와 도전, 배움, 그리고 성장의 가능성을 세상에 그려낼 것입니다.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faqTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    Q. 디미고 스타트업톤에 참가하기 위해 어떤 노력을 했나요?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    저희는 단순히 포트폴리오를 문자로 기술한 것이 아니라,포트폴리오 웹사이트를 제작함으로써 
                    대회에서 필요한 언어와 툴과 같은 기술들을 사전에 상기하고 학습하여, 대회를 더욱 원활히 진행할 수 있도록 준비하였습니다.
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
                    디미고 스타트업톤의 경험을 바탕으로, 더 많은 대회에 참가하여 창의적인 아이디어를 창출하고, 끊임없이 성장해 나가며 무한한 가능성을 세상에 담아내고자 합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 팀 슬로건 */}
        <section className="text-center py-5 bg-light">
          <h2 className="fw-bold">기술로 세상을 채우다, NULL</h2>
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
