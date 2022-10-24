import React from 'react';
import {Img} from 'react-image'
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Fade from 'react-reveal/Fade';
import profile from './../images/profile.jpg'
import './About.scss'


const About = (props) => {

    return(
        <div className = 'about-container'>
        <Container>
        <div className = 'about-title'>About Me</div>
        <Row className="about-wrapper">
          <Col md={5} sm={10}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Img style = {{width : '300px', height: '400px'}}src = {profile} alt="Profile Image"/>
            </div>
            </Fade>
          </Col>
          <Col md={6} sm={10}>
            <Fade duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                As someone who enjoys the challenges presented by learning new frameworks that can best attest to the ever-evolving world, I have always faced limitations in bringing my new findings to actuality. 
                </p>
                <p className="about-wrapper__info-text">
                My personal journey of building web applications sprang from a need to mitigate difficulties that I have faced as a college student. However, transitioning my needs to satisfaction did not necessarily resolve the needs of the people. Going beyond the traditional frame of web development, I dove into AI that I had no prior experience with to unlock the full potential of my applications and managed to expand my limits and capabilities. I always seek ways to gain more valuable experiences by acquiring new knowledges and implementing them in accordance with my objectives.
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
        <div className="skill-container">
          <div className = 'about-subtitle'>More About Myself</div>
          <Fade duration={1000} delay={1000} distance="30px">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="skill-tab" eventKey="first">
                      Education
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="skill-tab" eventKey="second">
                      Programming
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="skill-tab" eventKey="third">
                      Experience
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="skill-tab" eventKey="fourth">
                      Other Interest
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="skill-content-padding">
                      <li className="skill-body">Emory Univsersity</li>
                      <div className="skill-body-sub">Bachelor of Sciecne in Computer Science</div>
                      <div className="skill-body-sub">Atlanta, GA | Aug 2016 - Dec 2022</div>
                      {/* <div className="skill-body-sub"></div> */}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="skill-content-padding">
                      <li className="skill-body">Java, Python, C, JavaScript</li>
                      {/* <li className="skill-body">Python</li>
                      <li className="skill-body">C</li>
                      <li className="skill-body">JavaScript</li> */}
                      <li className="skill-body">React.js, Node.js</li>
                      <li className="skill-body">HTML / (S)CSS</li>
                      <li className="skill-body">PostgreSQL, Amazon Web Services(AWS)</li>
                      <li className="skill-body">Machine Learning, Web Development</li>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="skill-content-padding">
                      <li className="skill-body">Amazon Web Services(AWS), <b>Specialist Solutions Architect Intern</b></li>
                      <li className="skill-body">CN AI, <b>AI Engineer Intern</b></li>
                      <li className="skill-body">Save Your APP(SYPP), <b>Front-End Engineer</b></li>
                      <li className="skill-body">Vazaar, <b>Front-End Engineer</b></li>
                      <li className="skill-body">BLAY, <b>Front-End Engineer</b></li>
                      <li className="skill-body">Web Portfolio</li>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div className="skill-content-padding">
                      <li className="skill-body">Early adopter in new technologies</li>
                      <li className="skill-body">Windows/Linux/MacOS familiarity</li>
                      <li className="skill-body">Crazy in PC building</li>
                      <li className="skill-body">Love to follow up with recent technology gadgets</li>
                      <li className="skill-body">Play web-based real-time strategy games</li>
                      <li className="skill-body">League of Legends / PUBG</li>
                      <li className="skill-body">Golf</li>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
          </Fade>
        </div>
      </Container>
        </div>
    );
}
export default About