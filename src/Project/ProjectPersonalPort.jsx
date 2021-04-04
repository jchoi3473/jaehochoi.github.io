import React from 'react';
// import Fade from 'react-reveal/Fade';
import {Img} from 'react-image'
import PersonalWebsite from './../images/PersonalWebsite.JPG'
import PersonalWebsite2 from './../images/PersonalWebsite2.JPG'
import Tilt from 'react-tilt';

import './../About/About.scss'
import './Project.scss'
import './../Components/buttons.scss'
// import syppDesktop from '../Image/SyppDesktop'
// import syppCalendar from '../Image/SyppCalendar'

const ProjectPersonalPort = () => {

  return (
    <div className = "project-container-blay" >
            <div className = "project-text-container" >
                <div className = 'project-title'>JAEHOCHOI0824.COM</div>
                <div className="project-text">I created my personal portfolio website. In addition to function as my portfolio, 
                this website serves as my personal playground where I can implement features I learned from the experience. 
                This website is created using ReactJS.
                 It is currently an open project for everyone to join.</div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
                <div data-tilt >
                <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {PersonalWebsite} alt="Sypp desktop"/>
                </div>
            </Tilt>
            <div className = "project-text-container">
                <div className="project-text">
                I started by using a template made by "jacobo-martinez" from github. 
                However, as I was fixing the template, I wanted to implement skills I acquired from working on projects and researches.
                In addition to the static website design I had in my mind, I used some modals, and some css tricks to make the web more interactive.
                I used only ReactJS to create this website. I am planning to add more features as I learn more in the future. 
                </div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
            <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {PersonalWebsite2} alt="Sypp_calendar"/>
            </Tilt>

    </div>
  );
};

export default ProjectPersonalPort;
