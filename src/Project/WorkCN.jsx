import React from 'react';
// import Fade from 'react-reveal/Fade';
import {Img} from 'react-image'
import Sypp_desktop from './../images/Sypp_desktop.jpg'
import Sypp_calendar from './../images/Sypp_calendar.jpg'
import CNPersonal from './../images/CNpersonalPic.jpg'
import CNDesk from './../images/CNdesk.jpg'
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
                <div className = 'project-title'>CN AI</div>
                <div className='project-sub-header'>
                    May 2021 - Aug 2021
                </div>
                <div className='project-sub-header'>
                    Introduction :
                </div>
                <div className="project-text">CN AI provides an end-to-end ML/DL solution from data preparation/pre-processing to the development of an AI engine.
                </div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
                <div data-tilt >
                <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {CNPersonal} alt="Sypp desktop"/>
                </div>
            </Tilt>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                    My Role : AI Engineer
                </div>
                <div className="project-text">                
                As an AI Engineer at CN AI, I participated in many project to develop AI solutions. I used <b>Python</b> language and heavily utilized <b>Pytorch</b> and <b>TensorFlow.</b> 
                I collected <b>necessary data, pre-processed data, created AI models, fine-tuned models and created APIs.</b>
                </div>
            </div>
                
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
            <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {CNDesk} alt="Sypp_calendar"/>
            </Tilt>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                Project MetaVerse AI Human :
                </div>
                <div className="project-text">
                I was in charge of creating a <b>MataVerse AI human prototype</b>. The original purpose was to create a virtual human as bank assistance. 
                However, the end goal was to develop a model that creates a virtual human for different industries in a MetaVerse. 
                The model was built with a combination of <b>lip-sync, Text-To-Speech, and face morphing(generation) models</b> with customized voice and face data. 
                </div>
            </div>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                Project Video Recommendation :
                </div>
                <div className="project-text">
                I was in charge of developing a video <b>recommendation system</b> for a mobile lecture platform. 
                However, there wasn't enough data in the database to implement a deep learning model. 
                My college and I, instead, used <b>Alternating Least Square(ALS)</b> system to provide a recommendation based on the previous watch history.
                I also created a demo website with <b>React</b> and a backend server with <b>Python Flask</b> to demonstrate the functioning recommendation system.
                </div>
            </div>

            <div className = "project-text-container">
                <div className='project-sub-header'>
                Project Fabric Detection :
                </div>
                <div className="project-text">
                I participated in creating a <b>fabric recommendation system</b> based on the fabric color.
                Because analyzing the exact color of the fabric is important in fabric recommendation, we developed a <b>Mask-RCNN</b> based model to detect the clothing.
                The model detects different types of clothes based on the mask created and analyzes the color using the <b>Kth Nearest Neighbor algorithm.</b> 
                I also implemented a backend server using <b>Python Flask</b> and created a <b>Docker server</b> for the android application.
                </div>
            </div>

            <div className = "project-text-container">
                <div className='project-sub-header'>
                Project Skin Cancer Detection :
                </div>
                <div className="project-text">
                I developed a <b>skin cancer detection model</b> with a state-of-the-art object detection model. We found out the <b>limitations of the un-preprocessed data</b> as it only resulted <b>60% ~ 70%</b> in accuracy.
                I tried different kinds of <b>image preprocessing techniques</b> and found the most optimal techniques that yielded <b>89%</b> accuracy.
                </div>
            </div>

        
    </div>
  );
};

export default Projects;
