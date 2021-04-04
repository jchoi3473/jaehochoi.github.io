import React from 'react';
// import Fade from 'react-reveal/Fade';
import {Img} from 'react-image'
import blayhome from './../images/blayhome.jpg'
import blayImage from './../images/blayImage.jpg'
import Tilt from 'react-tilt';

import './../About/About.scss'
import './Project.scss'
import './../Components/buttons.scss'
// import syppDesktop from '../Image/SyppDesktop'
// import syppCalendar from '../Image/SyppCalendar'

const ProjectBlay = () => {

  return (
    <div className = "project-container-blay" >
            <div className = "project-text-container" >
                <div className = 'project-title'>Blay!</div>
                <div className="project-text">Blay aims to encourage people in initiating start-ups by providing a platform where one can share ideas and recruit members who share similar visions. 
                Our goal is to make a service where people can freely come and share their side-project ideas.
                 Many people experienced their side-project getting terminated after some members lost their interest in the project and stop doing their tasks. 
                 Also, there are moments when people join the project only to fulfill their needs, including experiences to build their resume, etc. 
                 Blay provides a place to share ideas where people can thoroughly discuss ideas and formulate a group consisting of only passionate people for those ideas. 
                 It is currently an open project for everyone to join.</div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
                <div data-tilt >
                <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {blayhome} alt="Sypp desktop"/>
                </div>
            </Tilt>
            <div className = "project-text-container">
                <div className="project-text">As a frontend developer at Blay, I am in charge of creating components for its web platform. 
                I am working on its log-in functions and its main page. 
                I am mainly using typescript and ReactJS.</div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
            <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {blayImage} alt="Sypp_calendar"/>
            </Tilt>

    </div>
  );
};

export default ProjectBlay;
