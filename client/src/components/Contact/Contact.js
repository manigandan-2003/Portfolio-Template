import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import axios from "axios";
import Particle from "../Particle";

const contactItems = [
  {
    icon: <Mail className="contact-icon" />,
    title: "Email",
    value: "nachiappanmanigandan@gmail.com",
    link: "mailto:nachiappanmanigandan@gmail.com",
  },
  {
    icon: <Linkedin className="contact-icon" />,
    title: "LinkedIn",
    value: "@manigandan-n",
    link: "https://www.linkedin.com/in/manigandan-n",
  },
  {
    icon: <Github className="contact-icon" />,
    title: "GitHub",
    value: "@manigandan-2003",
    link: "https://github.com/manigandan-2003",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("https://localhost:5000/api/contact", formData);
      setStatus("Message sent successfully ✅");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <Particle />
        <Container className="contact-content">
          <Row style={{ justifyContent: "center", padding: "20px 0" }}>
            <Col md={6} className="contact-section-column">
              <p className="contact-section-title">Get In Touch</p>
              <div className="contact-section-content">
                <div className="contact-intro">
                  <p>
                    I'm always interested in new opportunities and collaborations.
                    Feel free to reach out!
                  </p>
                </div>
                <ul className="contact-links">
                  {contactItems.map((item, index) => (
                    <li key={index} className="contact-activity">
                      <div className="contact-item-box">
                        <div className="contact-icon-box">{item.icon}</div>
                        <div className="contact-text">
                          <span className="contact-item-title">{item.title}</span>
                          <a href={item.link} target="_blank" rel="noreferrer">
                            {item.value}
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={6} className="contact-section-column">
              <p className="contact-section-title">Send a Message</p>
              <div className="contact-section-content">
                <p className="form-note">
                  Fill out the form below and I'll get back to you as soon as possible
                </p>
                <div className="contact-form-box">
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <div className="form-button-container">
                      <button type="submit">
                        <Send className="telegram-icon" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
                <p className="status">{status}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Contact;