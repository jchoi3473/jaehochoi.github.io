import React from 'react';
// import Fade from 'react-reveal/Fade';
import {Img} from 'react-image'
import Sypp_desktop from './../images/Sypp_desktop.jpg'
import Sypp_calendar from './../images/Sypp_calendar.jpg'
import Tilt from 'react-tilt';
import Chrome_extension_main from './../images/Chrome_extension_main.jpg'
import Chrome_extension_main2 from './../images/Chrome_extension_main2.jpg'
import './../About/About.scss'
import './Project.scss'
import './../Components/buttons.scss'
// import syppDesktop from '../Image/SyppDesktop'
// import syppCalendar from '../Image/SyppCalendar'

const Projects = () => {

  return (
    <div className = "project-container" >
            <div className = "project-text-container" >
                <div className ='project-title-container'>
                    <div className = 'project-title'>SAVE YOUR APPS</div>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--prototype prototype-margin project-btn"
                        href={"https://jchoi3473.github.io/SYPP_Web_personal/"}
                    >
                        See Prototype
                    </a>
                </div>
                <div className='project-sub-header'>
                    Aug 2020 - Current
                </div>
                <div className='project-sub-header'>
                    Introduction :
                </div>
                <div className="project-text">Save Your APP(SYPP) aims to help reduce the burden in the recruiting process. 
                </div>
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
                <div className='project-sub-header'>
                    My Role : Front-End Developer
                </div>
                <div className="project-text">                
                I am developing the frontend part of the SYPP web application and created all relevant components. 
                The web application is based on <b>ReactJS</b> and I am utilizing <b>Redux</b> to keep track of states. 
                I used <b>REST API</b> to manage the HTTP request when retrieving information and sending edited data to the server. 
                I also implemented the <b>WebSocket API</b> to dynamically transfer the data among different the platform from different environments.</div>
      

            </div>
                
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
            <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {Sypp_calendar} alt="Sypp_calendar"/>
            </Tilt>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                More About SYPP :
                </div>
                <div className="project-text">
                Recruiting is one of the biggest aspects of college and students gets stressed during their recruiting processes. 
                They spend many hours organizing their application processes but it is always hard to keep track of them. 
                Based on the needs of students, we came up with a platform that will <b>organize all recruiting-related processes and information.</b>
                SYPP provides helpful components such as monthly/weekly calendar, 
                process tracker, note, contacts, checklist, event/conversation-note tracker and add/edit of such components.</div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
                <div data-tilt >
                <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {Chrome_extension_main} alt="Sypp desktop"/>
                </div>
            </Tilt>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                Web to Chrome Extension :
                </div>
                <div className="project-text">
                The chrome extension part of the SYPP aims to reduce the complexity of managing the application process. 
                With help of the SYPP chrome extension feature, users can perform the same tasks <b>without leaving the browser or relocating the tab.</b> 
                Users can manage(add/edit/delete) their application processes and their notes on the application. 
                SYPP helps users to not lose their focus while recruiting for their jobs.</div>
            </div>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                Future Plans? :
                </div>
                <div className="project-text">
                <li>Web Crawling Job Posting Pages</li>
                <li>Create Email Templates</li>                
                </div>
            </div>
    </div>
  );
};

export default Projects;
