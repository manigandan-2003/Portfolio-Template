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
              I am <b className="purple">Manigandan Nachiappan</b>, a Computer
              Science Engineering graduate specialized in{" "}
              <b className="purple">
                Artificial Intelligence & Machine Learning
              </b>
              . I am currently working as a{" "}
              <b className="purple">Frontend Developer</b> at
              <b className="purple"> Tata Consultancy Services (TCS)</b> on the
              TCS BANCS banking platform, with prior experience as a{" "}
              <b className="purple">Full Stack Developer</b> at
              <b className="purple"> Siga Infotech</b>. I have hands-on
              experience in
              <b className="purple">
                {" "}
                React, Node.js, JavaScript, Java, XML, and Oracle SQL
              </b>
              , building scalable enterprise and full-stack web applications.
              <br />
              <br />I enjoy creating scalable and efficient applications,
              integrating complex APIs, and delivering production-ready
              features. Some of my notable achievements include
              <b className="purple"> 2nd place in a national hackathon </b> for
              my project(Team Project)
              <b className="purple">
                {" "}
                NavX — an online transportation software
              </b>
              .
              <br />
              <br />I am proficient in
              <i>
                <b className="purple"> Java, JavaScript, Node.js, Express.js</b>
              </i>
              , and I love working across both frontend and backend stacks.
              <br />
              <br />
              My key areas of interest include building
              <i>
                <b className="purple">
                  {" "}
                  Web Applications and AI-powered solutions
                </b>
              </i>
              , and exploring innovative ways to solve real-world problems.
              <br />
              <br />
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
