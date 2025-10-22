import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid about-image" />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="about-section-column">
              <p className="about-section-title">Education</p>
              <div className="about-section-content" style={{ justifyContent: "center" }}>
                <p>
                  B.Tech in Computer Science Engineering
                  <br />
                  Specialization: Artificial Intelligence & Machine Learning
                  <br />
                  Vellore Institute of Technology (VIT), Amaravati
                  <br />
                  Graduated: 2025 | CGPA: 8.44
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="about-section-column">
              <p className="about-section-title">Work Experience</p>
              <div className="about-section-content" style={{ justifyContent: "center" }}>
                <p className="work-timeline">
                  Junior Software Engineer – SigaInfotech
                  <br />
                  <span className="timeline-badge">Apr 2025 – Sep 2025</span>
                </p>
                <p className="about-section-title">Key Contributions</p>
                <ul className="contribution-list">
                  <li>
                    Revamped the Carrez old-age home management platform,
                    building 15+ responsive UI pages and integrating REST
                    APIs, improving feature load speed by 30% and enhancing
                    user engagement.
                  </li>
                  <li>
                    Engineered 4+ backend entities and corresponding APIs to
                    enable new business workflows, reducing manual admin
                    operations by 40%.
                  </li>
                  <li>
                    Worked on EasyDine, a restaurant management system,
                    focusing on Superadmin portal API integration.
                  </li>
                  <li>
                    Collaborated with cross-functional teams using Git, Jira,
                    and Microsoft Teams to deliver 5+ production-ready
                    features within sprint timelines, ensuring zero critical
                    bugs post-deployment.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
          {/* <Github /> */}
        </Container>
      </Container>
    </>
  );
}

export default About;