import React from 'react';
// import Fade from 'react-reveal/Fade';
import {Img} from 'react-image'
import Sypp_desktop from './../images/Sypp_desktop.jpg'
import Sypp_calendar from './../images/Sypp_calendar.jpg'
import Tilt from 'react-tilt';

import './../About/About.scss'
import './Project.scss'
import './../Components/buttons.scss'
// import syppDesktop from '../Image/SyppDesktop'
// import syppCalendar from '../Image/SyppCalendar'

const Projects = () => {

  return (
    <div className = "project-container" >
            <div className = "project-text-container" >
                <div className = 'project-title'>SAVE YOUR APPS(SYPP) WEB</div>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--prototype prototype-margin project-btn"
                    href={"https://jchoi3473.github.io/SYPP_Web_personal/"}
                >
                    See Prototype
                </a>
                <div className="project-text">Save Your APP(SYPP) aims to help reduce the burden in the recruiting process. 
                Recruiting is one of the biggest aspects of college and students gets stressed during their recruiting processes. 
                They spend many hours organizing their application processes but it is always hard to keep track of them. 
                Based on the needs of students, we came up with a platform that will organize all recruiting-related processes and information.</div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
                <div data-tilt >
                <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {Sypp_desktop} alt="Sypp desktop"/>
                </div>
            </Tilt>
            <div className = "project-text-container">
                <div className="project-text">Based on the needs of the users, SYPP implements helpful components such as monthly/weekly calendar, 
                process tracker, note/contacts/checklist/event/conversation-note tracker and add/edit of such components. 
                I am developing the frontend part of the SYPP web application and created all relevant components. 
                The web application is based on ReactJS and I am utilizing Redux to keep track of states. 
                I used REST API to manage the HTTP request when retrieving information and sending edited data to the server. 
                I am also planning to implement the WebSocket API to dynamically transfer the data among different the platform from different environments.</div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
            <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {Sypp_calendar} alt="Sypp_calendar"/>
            </Tilt>

    </div>
  );
};

export default Projects;
