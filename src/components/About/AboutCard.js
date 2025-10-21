import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Manigandan Nachiappan</span> from{" "}
            <span className="purple">Pudukkottai, Tamil Nadu, India</span>.
            <br />I recently graduated with a B.Tech in{" "}
            <span className="purple">Computer Science Engineering </span>
            specializing in{" "}
            <span className="purple">
              Artificial Intelligence & Machine Learning
            </span>{" "}
            from
            <span className="purple">
              {" "}
              Vellore Institute of Technology, Amaravati
            </span>.
            <br />I have hands-on experience as a{" "}
            <span className="purple">
              Junior Software Engineer (Part-Time)
            </span>{" "}
            and enjoy building{" "}
            <span className="purple">full-stack web applications</span> using{" "}
            <span className="purple">React, Node.js, Express, and MongoDB</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing and watching cricket 🏏
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games 🎮
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;