import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Github from "../../Assets/TechIcons/Github.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import PostgreSql from "../../Assets/TechIcons/PostgreSql.svg";
import MySql from "../../Assets/TechIcons/MySql.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Jwt from "../../Assets/TechIcons/Jwt.svg";
import Html from "../../Assets/TechIcons/Html.svg";
import Sequlize from "../../Assets/TechIcons/Sequelize.svg";
import Css from "../../Assets/TechIcons/Css.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Jwt} alt="jwt" />
        <div className="tech-icons-text">Jwt</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Html} alt="html" />
        <div className="tech-icons-text">Html</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Css} alt="css" />
        <div className="tech-icons-text">Css</div>
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Github} alt="github" />
        <div className="tech-icons-text">Github</div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="redis" />
        <div className="tech-icons-text">Redis</div>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt="kubernetes" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <img src={MySql} alt="MySQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PostgreSql} alt="MySQL" />
        <div className="tech-icons-text">PostgreSql</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Sequlize} alt="Sequlize" />
        <div className="tech-icons-text">Sequlize</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="haskell" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col> */}
    </Row>
  );
}

export default Techstack;
