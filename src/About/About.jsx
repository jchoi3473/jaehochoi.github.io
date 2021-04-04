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
        <div className = 'about-title'>ABOUT ME</div>
        <Row className="about-wrapper">
          <Col md={5} sm={10}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Img style = {{width : '300px', height: '300px'}}src = {profile} alt="Profile Image"/>
            </div>
            </Fade>
          </Col>
          <Col md={6} sm={10}>
            <Fade duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {'Hello, everyone! \n I am an undergraduate CS student at Emory University.'}
                </p>
                <p className="about-wrapper__info-text">
                  {'I am a problem solver. I enjoy finding problems around me, cracking them down, analyzing them, and coming up with creative ways to tackle them. I came to Emory undecided but my problem-solving characters naturally allured me into the CS.'}
                </p>
                <p className="about-wrapper__info-text">
                  {'I love learning new technologies. Although I am currently working on building web applications using ReactJS, I cannot wait until I get a chance to learn other programming frameworks!'}
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
                      Project Works
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
                      <div className="skill-body-sub">Computer Science, B.S.</div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="skill-content-padding">
                      <li className="skill-body">Java</li>
                      <li className="skill-body">JavaScript</li>
                      <li className="skill-body">ReactJS</li>
                      <li className="skill-body">HTML / (S)CSS</li>
                      <li className="skill-body">Python</li>
                      <li className="skill-body">PostgreSQL</li>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="skill-content-padding">
                      <li className="skill-body">Save Your APP(SYPP) Web Application</li>
                      <li className="skill-body">Save Your APP(SYPP) Chrome Extension</li>
                      <li className="skill-body">BLAY</li>
                      <li className="skill-body">Web Portfolio</li>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div className="skill-content-padding">
                      <li className="skill-body">Early adopter in new technologies</li>
                      <li className="skill-body">
                        Crazy in PC building, love to follow up with recent technologies
                      </li>
                      <li className="skill-body">Play web-based real-time strategy games</li>
                      <li className="skill-body">League of Legends</li>
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