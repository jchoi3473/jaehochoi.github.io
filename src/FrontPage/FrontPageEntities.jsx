import React, {useState} from 'react';
import './FrontPage.scss'
import './typography.scss'

import {Img} from 'react-image'
import desktopPic from './../images/sypp.png'
// import { Link } from 'react-scroll';
import ChromeExtension from './../images/Chrome_extension_main2.jpg'
import Vazaar from './../images/vazaar.png'
import Blay from './../images/blayicon.png'
import PersonalWeb from './../images/PersonalWebsite.JPG'
import CN from './../images/cnicon.png'
import Fade from 'react-reveal/Fade';



const FrontPageEntities = (props) => {

    const [enterAbout, setEnterAbout] = useState(false);
    const [enterSYPPWeb, setSYPPWeb] = useState(false);
    const [enterCN, setCN] = useState(false);
    const [enterSYPPCE, setSYPPCE] = useState(false);
    const [enterBLAY, setBLAY] = useState(false);
    const [enterPersonalWeb, setPersonalWeb] = useState(false);
 
  return (
    <>
    <div id="HeroComponent" className="HeroComponent-container" >
        <Fade  duration={1000} delay={500} distance="30px">
            <div onMouseEnter = {()=>setEnterAbout(true)} onMouseLeave = {()=>setEnterAbout(false)} onClick = {() => props.onClickComponent('about')}>
                <div className="HeroComponent-innerComponent"  >
                    {/* <Link to="about" smooth duration={1000}> */}
                    <div className="project-wrapper__text">
                        <h3 className="HeroComponent-title">About Me</h3>
                        <div className="HeroComponent-text HeroComponent-about-text" style={{textAlign:'left !important'}}>
                        <li>4th Year Student at Emory Univ.</li>
                        <li>B.S. Computer Scinece</li>
                        <li>Passionate Learner</li>
                        <li>Problem Solver</li>
                        <li>Early Adopter</li>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
                {enterAbout?<div className = "frontpage-detail-text">Click for more details!</div>:undefined}
            </div>
        </Fade>
    {/* <Fade  duration={1000} delay={600} distance="30px">
        <div className="HeroComponent-innerComponent">

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

        </div>
    </Fade> */}
    <Fade  duration={1000} delay={700} distance="30px">
        <div onMouseEnter = {()=>setCN(true)} onMouseLeave = {()=>setCN(false)} onClick = {() => props.onClickComponent('CN')}>
            <div className="HeroComponent-innerComponent">
                {/* <Link to="Save Your App(SYPP) Desktop" smooth duration={1000}> */}
                <div className="project-wrapper__text">
                    <h3 className="HeroComponent-title">AI Engineer at <b style={{color:'rgba(57,68,255,255)'}}>CN AI</b></h3>
                    {/* <h3 className="HeroComponent-title">{"Web Application"}</h3> */}
                    {/* <div className="HeroComponent-text">
                    SYPP aims to reduce stress in job application process. SYPP web application is the main platform where all progress tracking takes place.{' '}
                    </div> */}
                </div>
                <div className="hero-picture-container">
                    <Img style = {{width : '150px', height: '150px'}}src = {CN} alt="CN Solution"/>
                </div>
                {/* </Link> */}
            </div>
            {enterCN?<div className = "frontpage-detail-text">Click for more details!</div>:undefined}
        </div>
    </Fade>
    <Fade  duration={1000} delay={1000} distance="30px">
        <div onMouseEnter = {()=>setPersonalWeb(true)} onMouseLeave = {()=>setPersonalWeb(false)} onClick = {() => props.onClickComponent('personalWeb')}>
            <div className="HeroComponent-innerComponent">
                {/* <Link to="JaeHoChoi.github.io" smooth duration={1000}> */}
                <div className="project-wrapper__text">
                <h3 className="HeroComponent-title">Welcome to</h3>
                <h3 className="HeroComponent-title">www.JaeHoChoi0824.com</h3>
                    <div className="HeroComponent-text">Click on each components </div>
                    <div className="HeroComponent-text">for more details!</div>
                </div>
                {/* </Link> */}
                <div className="hero-picture-container">
                <Img  style = {{width : '250px', height: '150px'}}src = {PersonalWeb} alt="Save Your App(SYPP) Desktop"/>
                </div>
            </div>
            {enterPersonalWeb?<div className = "frontpage-detail-text">Click for more details!</div>:undefined}
        </div>
    </Fade>
    </div>

    <div id = 'main-title' className = "titleSubTextProject">
        PROJECT EXPERIENCE
    </div>
    <div id="HeroComponent" className="HeroComponent-container" >
    <Fade  duration={1000} delay={700} distance="30px">
        <div onMouseEnter = {()=>setSYPPWeb(true)} onMouseLeave = {()=>setSYPPWeb(false)} onClick = {() => props.onClickComponent('syppWeb')}>
            <div className="HeroComponent-innerComponent">
                {/* <Link to="Save Your App(SYPP) Desktop" smooth duration={1000}> */}
                <div className="project-wrapper__text">
                    <h3 className="HeroComponent-title">Apply with <b style={{color:'rgba(145,191,230,255)'}}>SYPP!</b></h3>
                    {/* <h3 className="HeroComponent-title">{"Web Application"}</h3> */}
                    {/* <div className="HeroComponent-text">
                    SYPP aims to reduce stress in job application process. SYPP web application is the main platform where all progress tracking takes place.{' '}
                    </div> */}
                </div>
                <div className="hero-picture-container">
                    <Img style = {{width : '150px', height: '150px'}}src = {desktopPic} alt="Save Your App(SYPP) Desktop"/>
                </div>
                {/* </Link> */}
            </div>
            {enterSYPPWeb?<div className = "frontpage-detail-text">Click for more details!</div>:undefined}
        </div>
    </Fade>
    <Fade  duration={1000} delay={800} distance="30px">
        <div onMouseEnter = {()=>setSYPPCE(true)} onMouseLeave = {()=>setSYPPCE(false)} onClick = {() => props.onClickComponent('vazaar')}>
            <div className="HeroComponent-innerComponent">
                {/* <Link to="Save Your App(SYPP) Chrome-Extension" smooth duration={1000}> */}
                <div className="project-wrapper__text">
                <h3 className="HeroComponent-title">Sell With <b style={{color:'rgba(88,155,255,255)'}}>Vazaar!</b></h3>
                    {/* <h3 className="HeroComponent-title">Chrome Extension</h3> */}
                    {/* <div className="HeroComponent-text">
                    Having trouble selling used furnitures? Try Vazaar! Vazaar aims to mitigate 2nd hand selling difficulties among Emory students.
                    </div> */}
                </div>
                <div className="hero-picture-container">
                <Img style = {{width : '150px', height: '150px'}}src = {Vazaar} alt="Save Your App(SYPP) Desktop"/>
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
                <h3 className="HeroComponent-title">Launch with <b style={{color:'rgba(35,67,146,255)'}}>BlayBus!</b></h3>
                    {/* <div className="HeroComponent-text">
                    Start-up/Side-Project launch platform where everyone can join and initiate their dreams. 
                    </div> */}
                </div>
                <div className="hero-picture-container">
                <Img  style = {{width : '150px', height: '150px'}}src = {Blay} alt="Save Your App(SYPP) Desktop"/>
                </div>
                {/* </Link> */}
            </div>
            {enterBLAY?<div className = "frontpage-detail-text">Click for more details!</div>:undefined}
        </div>
    </Fade>
    
    </div>
    
    </>
  );
};

export default FrontPageEntities;
