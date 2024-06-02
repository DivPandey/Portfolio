import React from "react";
import {container,Row, Col} from "react-bootstrap";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import Fade from "react-reveal/Fade";
import { AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Particle from "../../Particle";
import myselfContainer from "src\modules\myself\myselfContainer.js";
import Contactus from "../../modules/contactUs/contactus";

export default function Home() {
    return (
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={8} className="home-header">
                <h1
                  style={{ paddingBottom: 15, fontSize: "175px" }}
                  className="heading"
                >
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
  
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Divyanshu Pandey</strong>
                </h1>
                <div className="typing-homeclass">
                  <Typing />
                </div>
                <div className="sociallink-home">
                  <ul className="homeaboutsociallinks">
                    <li className="socialicons">
                      <a
                        href="https://github.com/DivPandey"
                        target="_blank"
                        rel="noreferrer"
                        className="iconcolour  homesocialicons"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="socialicons">
                      <a
                        href="www.linkedin.com/in/divyanshu-pandey-0418a12ab"
                        target="_blank"
                        rel="noreferrer"
                        className="iconcolour  homesocialicons"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    
                    
                    <li className="socialicons">
                      <a
                        href="mailto:divyanshu.23bcs10085@ms.sst.scaler.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="iconcolour homesocialicons"
                      >
                        <FaGoogle />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} style={{ paddingBottom: 20 }}>
                <div className="img-home-main">
                  <Tilt>
                    <Fade cascade>
                      <img
                        src="./profile.png"
                        alt="home pic"
                        className="img-fluid"
                      />
                    </Fade>
                  </Tilt>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <myselfContainer />
        <Contactus />
      </section>
    );
  }