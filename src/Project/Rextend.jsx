import React from 'react';
// import Fade from 'react-reveal/Fade';
import {Img} from 'react-image'
import Sypp_desktop from './../images/Sypp_desktop.jpg'
import Sypp_calendar from './../images/Sypp_calendar.jpg'
import CNPersonal from './../images/CNpersonalPic.jpg'
import CNDesk from './../images/CNdesk.jpg'
import RextendPic from './../images/rextend-chrome1.PNG'
import {Tilt} from 'react-tilt';
import Chrome_extension_main from './../images/Chrome_extension_main.jpg'
import Chrome_extension_main2 from './../images/Chrome_extension_main2.jpg'
import './../About/About.scss'
import './Project.scss'
import './../Components/buttons.scss'
// import syppDesktop from '../Image/SyppDesktop'
// import syppCalendar from '../Image/SyppCalendar'

const Rextend = () => {

  return (
    <div className = "project-container" >
            <div className = "project-text-container" >
                <div className = 'project-title'>Rextend</div>
                <div className='project-sub-header'>
                    July 2023 - Current
                </div>
                <div className='project-sub-header'>
                    Introduction :
                </div>
                <div className="project-text">I am leading the development of Rextend. Rextend maximizes job seekers' efficiency by delivering information that is specifically relevant to them.
                </div>
            </div>

            <div className = "project-text-container">
                <div className='project-sub-header'>
                    My Role : Project Leader / Full Stack Engineer
                </div>
                <div className="project-text">                
                As a project leader, I am responsible for finalizing the structure of the application. I also dedicate significant effort to assigning tasks among my colleagues. While my main focus is on frontend development, I also take on backend/Python server tasks.
                </div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
            <Img className = "project-image" style = {{width : '500px', height: '600px'}}src = {RextendPic} alt="Sypp_calendar"/>
            </Tilt>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                Overview :
                </div>
                <div className="project-text">
                Rextend is a Chrome extension designed to facilitate job seekers' access while they browse through job boards, currently focusing on LinkedIn. The extension offers personalized summaries of job listings based on the user's searches. By perusing these concise descriptions, users can optimize their job search time, as they can efficiently apply to jobs that align with their preferences. 
                <br/>
                Additionally, Rextend maintains a record of all applied applications, enabling users to easily track their submissions. Furthermore, users have the option to share their lists of applied jobs along with their corresponding descriptions. This feature can provide encouragement to individuals in similar circumstances, further streamlining their recruitment process.
                <br/>
                Rextend can be accessed as a chrome extension. However, it will stay opened as users search through job board. 
                </div>
            </div>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                Development :
                </div>
                <div className="project-text">
                It utilizes React, Node.js, MongoDB and Python(with some packages/APIs)
                </div>
            </div>
    </div>
  );
};

export default Rextend;
