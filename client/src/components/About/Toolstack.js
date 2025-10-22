import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import DBeaver from "../../Assets/TechIcons/DBeaver.svg";
import MySqlWorkbench from "../../Assets/TechIcons/MySqlWorkbench.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="intelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={DBeaver} alt="DBeaver" className="tech-icon-images" />
        <div className="tech-icons-text">DBeaver</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={MySqlWorkbench} alt="MySqlWorkbench" className="tech-icon-images" />
        <div className="tech-icons-text">MySql Workbench</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
