import React from 'react';
// import Fade from 'react-reveal/Fade';
import {Img} from 'react-image'
import Chrome_extension_main from './../images/Chrome_extension_main.jpg'
import Chrome_extension_main2 from './../images/Chrome_extension_main2.jpg'
import Tilt from 'react-tilt';

import './../About/About.scss'
import './Project.scss'
import './../Components/buttons.scss'
// import syppDesktop from '../Image/SyppDesktop'
// import syppCalendar from '../Image/SyppCalendar'

const ProjectSYPPCE = () => {

  return (
    <div className = "project-container" >
            <div className = "project-text-container" >
                <div className = 'project-title'>SAVE YOUR APPS(SYPP) CHROME EXTENSION</div>
                <div className="project-text">SYPP has a chrome extension that provides a better user experience of the platform. 
                The chrome extension part of the SYPP aims to reduce the complexity of managing the application process. 
                When a person applies from job recruiting websites and wants to keep track of the application process, 
                one needs to change website tabs or desktop screens and manage relevant information. 
                With help of the SYPP chrome extension feature, users can perform the same tasks without leaving the browser or relocating the tab. 
                Users can manage(add/edit/delete) their application processes and their notes on the application. 
                SYPP helps users to not lose their focus while recruiting for their jobs</div>
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
                <div className="project-text">I worked on the frontend part of the chrome extension. 
                Similar to the web application, I utilized ReactJS, Redux, REST API, and WebSocket API to build the extension. 
                I took components from the web application and modified them to work on the chrome extension. 
                I customized manifest.json to satisfy the chrome extension requirements.</div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
            <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {Chrome_extension_main2} alt="Sypp_calendar"/>
            </Tilt>

    </div>
  );
};

export default ProjectSYPPCE;
