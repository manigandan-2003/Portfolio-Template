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
            <br />
            I currently work as a{" "}
            <span className="purple">Frontend Developer at Tata Consultancy Services (TCS)</span>{" "}
            on the TCS BANCS banking platform and previously worked as a{" "}
            <span className="purple">Full Stack Developer at SigaInfotech</span>.{" "}
            I have hands-on experience building{" "}
            <span className="purple">enterprise and full-stack web applications</span> using{" "}
            <span className="purple">
              React, Node.js, Express, MongoDB, JavaScript, Java, XML, and Oracle SQL
            </span>.
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