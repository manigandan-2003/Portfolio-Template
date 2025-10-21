import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am <b className="purple">Manigandan N</b>, a Computer Science Engineering student 
              specialized in <b className="purple">Artificial Intelligence & Machine Learning</b>. 
              I have hands-on experience as a <b className="purple">Junior Software Engineer (Part-Time)</b>, 
              working on full-stack web development projects using <b className="purple">React, Node.js, MongoDB</b>.
              <br />
              <br />
              I enjoy creating scalable and efficient applications, integrating complex APIs, and delivering 
              production-ready features. Some of my notable achievements include 
              <b className="purple"> 2nd place in a national hackathon </b> for my project 
              <b className="purple"> NavX — an online transportation software</b>.
              <br />
              <br />
              I am proficient in
              <i>
                <b className="purple"> Java, JavaScript, Node.js, Express.js</b>
              </i>
              , and I love working across both frontend and backend stacks.
              <br />
              <br />
              My key areas of interest include building
              <i>
                <b className="purple"> Web Applications and AI-powered solutions</b>
              </i>
              , and exploring innovative ways to solve real-world problems.
              <br />
              <br />
              Whenever possible, I enjoy developing projects with 
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b>
              </i>
              , as well as experimenting with <b className="purple">Spring Boot</b> for backend development.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
