import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import disaster from "../../Assets/Projects/disaster.png";
import github from "../../Assets/Projects/github.jpeg";
import ipl from "../../Assets/Projects/ipl.jpg";
import navx from "../../Assets/Projects/navx.png";
import riders from "../../Assets/Projects/riders.png";
import smarthelmet from "../../Assets/Projects/smarthelmet.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disaster}
              isBlog={false}
              title="Disaster Escalation Framework (Group Project)"
              description="A comprehensive framework designed to quickly respond to and escalate actions during disaster situations, ensuring rapid information sharing, real-time tracking, and coordinated decision-making. The system allows teams to log incidents, assign responsibilities, and track progress, reducing response time during emergencies."
              ghLink="https://github.com/manigandan-2003/ECS-App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="RepoBot - AI Software Engineer on GitHub"
              description="Developed a GitHub bot that analyzes code, interacts with other contributors, generates pull requests for existing issues, and improves documentation and README files. Designed and implemented the complete architecture and end-to-end functionality."
              ghLink="https://github.com/manigandan-2003/GithubApiTesting"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ipl}
              isBlog={false}
              title="IPL Match Win Prediction"
              description="Created a machine learning model to predict the outcome of IPL matches using a dataset spanning from 2008 to 2022, achieving an accuracy rate of 95% by using Random Forest algorithm. Utilized NumPy and Pandas for data preprocessing and Scikit-learn for model training."
              ghLink="https://github.com/manigandan-2003/IPL-Prediction-2022"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={navx}
              isBlog={false}
              title="NavX - Online Transportation Software (Group Project)"
              description="NavX is an online transportation software specializing in carpooling, designed to revolutionize inter-city travel. Built using the MERN stack, it offers a cost-effective, efficient, and secure ride-sharing platform. The project integrates cutting-edge monitoring and alert systems to ensure passenger safety."
              ghLink="https://github.com/manigandan-2003/NavX"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={riders}
              isBlog={false}
              title="Riders Paradise - Virtual Bike Showroom (Group Project)"
              description="web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to browse, explore, and interact with a virtual bike showroom. Users can view detailed bike specifications, images, and features, compare multiple models, and filter bikes based on brand, type, or performance criteria."
              ghLink="https://github.com/manigandan-2003/Riders-Paradise"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smarthelmet}
              isBlog={false}
              title="Smart Helmet for Underground Miners (Group Project)"
              description="Developed a smart helmet solution for enhancing safety in mining operations and used 2 Arduino UNO boards for sensor integration and it is just a prototype. Implemented sensors to detect poisonous gases, measure temperature and humidity, and monitor pressure changes."
              ghLink="https://github.com/manigandan-2003/ECS-App"
              demoLink="" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
