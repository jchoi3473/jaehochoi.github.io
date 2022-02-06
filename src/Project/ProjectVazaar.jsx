import React from 'react';
// import Fade from 'react-reveal/Fade';
import {Img} from 'react-image'
import Vazaar_Main from './../images/vazaar1.PNG'
import Vazaar_all from './../images/vazaar3.PNG'
import Vazaar_post from './../images/vazaar2.PNG'

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

                    <div className = 'project-title'>VAZAAR</div>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--prototype prototype-margin project-btn"
                        href={"https://www.vazaar.app"}
                    >
                        See Prototype
                    </a>
                </div>
                <div className='project-sub-header'>
                    Aug 2021 - Current
                </div>
                <div className='project-sub-header'>
                    Introduction :
                </div>
                <div className="project-text">Vazaar aims to mitigate difficulties in 2nd hand selling within Emory community.
                </div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
                <div data-tilt >
                <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {Vazaar_Main} alt="Sypp desktop"/>
                </div>
            </Tilt>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                    My Role : Co-Leader / FrontEnd Developer
                </div>
                <div className="project-text">                
                I am in charge of the project and am leading the frontend development of the Vazaar web application.
                The web application is based on <b>ReactJS</b>. I used <b>REST API</b> to manage the HTTP request when retrieving information and sending edited data to the server. 
                My teamn and I utilized Microsoft Azure DevOps to facilitate Agile Development style. 
                </div>
            </div>
                
            <div className = "project-text-container">
                <div className='project-sub-header'>
                More About Vazaar :
                </div>
                <div className="project-text">
                Vazaar started with a group of Emory students who struggled with <b>2nd hand selling</b> system in Emory community. 
                Need to sell your couch quickly or purchase a new dining table? Look no further - Vazaar exists to help college students <b>save money and easily find necessary products</b> needed in college by building a safe marketplace. <b>Platforms such as Vezzy and Facebook Marketplace may lead to further headaches due to the clutter of products without categories and simplicity. </b>
                Vazaar aims to solve this very issue with a <b>focus on furniture</b>, as it is among the most necessary items to buy and sell when moving in and out of off-campus housing.
                </div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
                <div data-tilt >
                <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {Vazaar_all} alt="Sypp desktop"/>
                </div>
            </Tilt>
            <div className = "project-text-container">
                <div className="project-text">
                Students who move off-campus seek furniture for their new living space. However, there exists several obstacles: high costs, lack of personal vehicle, and uncertainty on what to do with the furniture upon graduation. Thus, most students find it cost-efficient to purchase used furniture. 
                Vazaar brings these considerations all together: <b>a user-friendly platform where sellers can easily list their used furniture in a categorized and organized manner while providing simplicity for buyers</b> in purchasing exactly what they are seeking.
                </div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
                <div data-tilt >
                <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {Vazaar_post} alt="Sypp desktop"/>
                </div>
            </Tilt>
            <div className = "project-text-container">
                <div className="project-text">
                Vazaar is <b>exclusive to the community</b>. Only Emory students are allowed to list and buy on the platform, and <b>credentials are verified</b> through the user’s university email address. This ensures a local population for easy meet-ups and local sales, lessening the likelihood of scams.
                </div>
            </div>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                Future Plans? :
                </div>
                <div className="project-text">
                <li><b>Launch the service</b> among Emory students</li>
                <li>Launch the service for <b>other Universities</b></li>                
                </div>
            </div>
    </div>
  );
};

export default Projects;
