import React, {useState} from 'react';
import './FrontPage.scss'
import './typography.scss'

import {Img} from 'react-image'
import desktopPic from './../images/Sypp_desktop.jpg'
// import { Link } from 'react-scroll';
import ChromeExtension from './../images/Chrome_extension_main2.jpg'
import Blay from './../images/blayhome.jpg'
import PersonalWeb from './../images/PersonalWebsite.JPG'
import Fade from 'react-reveal/Fade';



const FrontPageEntities = (props) => {

    const [enterAbout, setEnterAbout] = useState(false);
    const [enterSYPPWeb, setSYPPWeb] = useState(false);
    const [enterSYPPCE, setSYPPCE] = useState(false);
    const [enterBLAY, setBLAY] = useState(false);
    const [enterPersonalWeb, setPersonalWeb] = useState(false);
 
  return (
    <div id="HeroComponent" className="HeroComponent-container" >
        <Fade  duration={1000} delay={500} distance="30px">
            <div onMouseEnter = {()=>setEnterAbout(true)} onMouseLeave = {()=>setEnterAbout(false)} onClick = {() => props.onClickComponent('about')}>
                <div className="HeroComponent-innerComponent"  >
                    {/* <Link to="about" smooth duration={1000}> */}
                    <div className="project-wrapper__text">
                        <h3 className="HeroComponent-title">About Me</h3>
                        <div className="HeroComponent-text">
                        <li>3rd Year Student at Emory Univ.</li>
                        <li>B.S. Computer Scinece</li>
                        <li>Passionate Learner!</li>
                        <li>Problem Solver</li>
                        <li>Early Adopter</li>
                        <li>Currently working on frontend part of two projects: SYPP and BLAY</li>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
                {enterAbout?<div className = "frontpage-detail-text">Click for more details!</div>:undefined}
            </div>
        </Fade>
    <Fade  duration={1000} delay={600} distance="30px">
        <div className="HeroComponent-innerComponent">
            {/* <Link to="about" smooth duration={1000}> */}
            <div className="project-wrapper__text">
                <h3 className="HeroComponent-title">Programming Skills</h3>
                <div className="HeroComponent-text">
                <li>Java</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>ReactJS</li>
                <li>HTML/(S)CSS</li>
                <li>PostgreSQL</li>
                </div>
            </div>
            {/* </Link> */}
        </div>
    </Fade>
    <Fade  duration={1000} delay={700} distance="30px">
        <div onMouseEnter = {()=>setSYPPWeb(true)} onMouseLeave = {()=>setSYPPWeb(false)} onClick = {() => props.onClickComponent('syppWeb')}>
            <div className="HeroComponent-innerComponent">
                {/* <Link to="Save Your App(SYPP) Desktop" smooth duration={1000}> */}
                <div className="project-wrapper__text">
                    <h3 className="HeroComponent-title">{"Save Your App(SYPP)"}</h3>
                    <h3 className="HeroComponent-title">{"Web Application"}</h3>
                    <div className="HeroComponent-text">
                    SYPP aims to reduce stress in job application process. SYPP web application is the main platform where all progress tracking takes place.{' '}
                    </div>
                </div>
                <div className="hero-picture-container">
                    <Img style = {{width : '250px', height: '150px'}}src = {desktopPic} alt="Save Your App(SYPP) Desktop"/>
                </div>
                {/* </Link> */}
            </div>
            {enterSYPPWeb?<div className = "frontpage-detail-text">Click for more details!</div>:undefined}
        </div>
    </Fade>
    <Fade  duration={1000} delay={800} distance="30px">
        <div onMouseEnter = {()=>setSYPPCE(true)} onMouseLeave = {()=>setSYPPCE(false)} onClick = {() => props.onClickComponent('syppCE')}>
            <div className="HeroComponent-innerComponent">
                {/* <Link to="Save Your App(SYPP) Chrome-Extension" smooth duration={1000}> */}
                <div className="project-wrapper__text">
                    <h3 className="HeroComponent-title">Save Your App(SYPP)</h3>
                    <h3 className="HeroComponent-title">Chrome Extension</h3>
                    <div className="HeroComponent-text">
                    To enhance the user experience of the platform, SYPP utilizes a chrome extension which shares most features of the web application but provides more convinience.
                    </div>
                </div>
                <div className="hero-picture-container">
                <Img style = {{width : '250px', height: '150px'}}src = {ChromeExtension} alt="Save Your App(SYPP) Desktop"/>
                </div>
                {/* </Link> */}
            </div>
            {enterSYPPCE?<div className = "frontpage-detail-text">Click for more details!</div>:undefined}

        </div>
      </Fade>
      <Fade  duration={1000} delay={900} distance="30px">
        <div onMouseEnter = {()=>setBLAY(true)} onMouseLeave = {()=>setBLAY(false)} onClick = {() => props.onClickComponent('blay')}>
            <div className="HeroComponent-innerComponent">
                {/* <Link to="Blay" smooth duration={1000}> */}
                <div className="project-wrapper__text">
                    <h3 className="HeroComponent-title">Blay!</h3>
                    <div className="HeroComponent-text">
                    Start-up launch platform where everyone can join and initiate their dreams. 
                    </div>
                </div>
                <div className="hero-picture-container">
                <Img className ="imageStyle" style = {{width : '250px', height: '150px'}}src = {Blay} alt="Save Your App(SYPP) Desktop"/>
                </div>
                {/* </Link> */}
            </div>
            {enterBLAY?<div className = "frontpage-detail-text">Click for more details!</div>:undefined}
        </div>
    </Fade>
    <Fade  duration={1000} delay={1000} distance="30px">
        <div onMouseEnter = {()=>setPersonalWeb(true)} onMouseLeave = {()=>setPersonalWeb(false)} onClick = {() => props.onClickComponent('personalWeb')}>
            <div className="HeroComponent-innerComponent">
                {/* <Link to="JaeHoChoi.github.io" smooth duration={1000}> */}
                <div className="project-wrapper__text">
                    <h3 className="HeroComponent-title">www.JaeHoChoi0824.com</h3>
                    <div className="HeroComponent-text">Personal website build using ReactJS. Click on each components for more details!</div>
                </div>
                {/* </Link> */}
                <div className="hero-picture-container">
                <Img className ="imageStyle" style = {{width : '250px', height: '150px'}}src = {PersonalWeb} alt="Save Your App(SYPP) Desktop"/>
                </div>
            </div>
            {enterPersonalWeb?<div className = "frontpage-detail-text">Click for more details!</div>:undefined}
        </div>
    </Fade>
    </div>
  );
};

export default FrontPageEntities;
