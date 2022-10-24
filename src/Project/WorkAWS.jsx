import React from 'react';
// import Fade from 'react-reveal/Fade';
import {Img} from 'react-image'
import Sypp_desktop from './../images/Sypp_desktop.jpg'
import Sypp_calendar from './../images/Sypp_calendar.jpg'
import CNPersonal from './../images/CNpersonalPic.jpg'
import CNDesk from './../images/CNdesk.jpg'
import AWS1 from './../images/aws1.jpg'
import AWS2 from './../images/aws6.jpg'
import AWS5 from './../images/aws5.jpg'
import AWS7 from './../images/aws7.png'

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
                <div className = 'project-title'>Amazon Web Services(AWS)</div>
                <div className='project-sub-header'>
                    May 2022 - Aug 2022
                </div>
                <div className='project-sub-header'>
                    Introduction :
                </div>
                <div className="project-text">For the duration of the internship, I was assigned to WorldWide Specialist Organization(WWSO) - Analytics team and was assigned a project “Fast track your Customer’s Analytics journey with a Modern data platform.” For the project, I was assigned four tasks to facilitate the customer’s Analytics journey. I achieved the following tasks: Analytics Specialist Solutions Architect (SSA) Korea Team wiki, Redshift document translation, introduction to Analytics engagement with the web-based application, and streaming data anomaly detection with Amazon Redshift.
                </div>
            </div>
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
                <div data-tilt >
                <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {AWS1} alt="Sypp desktop"/>
                </div>
            </Tilt>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                    My Role : Specialist Solutions Architect Intern
                </div>
                <div className="project-text">                
                As a Specialist Solutions Architect Intern at AWS, I participated in many projects and familiarized myself with the AWS cloud. I attended multiple Immersion Days at the AWS office and was able to observe architectures created by solutions architects that solve customer cases.
                I mainly worked with internal tools and accounts to explore AWS cloud services and heavily focused on Analytic services including Redshift, Open Search, and Kinesis. I expanded my skills by learning the AWS ML solution, SageMaker, to incorporate its functionalities within my project. 
                I also acquired AWS certification: Solutions Architect Associate and was able to utilize the knowledge I learned while studying for the exam.
                </div>
            </div>
                
            <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
            >
            <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {AWS2} alt="Sypp_calendar"/>
            </Tilt>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                Streaming Data Anomaly Detection with Amazon RedShift :
                </div>
                <div className="project-text">
                As one of the internship tasks, I decided to utilize Amazon Redshift and its related features to inform internal customers about the capabilities of Amazon Redshift. I created a user scenario to deliver a workshop. 
                <br/>
                User Scenario for this task is “XYZ Corps owns factories that process raw materials with machines and those machines produce temperature data with sensors. XYZ corps wishes to make data-driven decisions using Analytics services on AWS and wants to start with finding anomalies in their data. Finding anomalies is crucial as outputs not satisfying the criteria will cause a loss and not addressing the issues directly will cause further loss.”
                To address the XYZ corps’ requirements, I proposed Streaming Data Anomaly Detection with Amazon Redshift.
                <br/>
                <br/>
                The workflow of this solution is represented as follow:
                <br/>
                <b className='project-text-bold'>
                •	Redshift is utilized as the data warehouse solution.                 <br/>
                •	Kinesis Data stream is utilized to stream real-time data                <br/>
                •	SageMaker is used to train and deploy AI/ML model using its notebook instances                <br/>
                •	Redshift Bring Your Own Model (BYOM) is used to predict score using SQL                <br/>
                •	Step Function and Lambda functions are used to automate the process                <br/>
                •	Grafana is used to visualize the anomaly score in real-time                <br/>
                </b>
                <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
                >
                <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {AWS5} alt="Sypp_calendar"/>
                </Tilt>
                </div>
                <div className="project-text">
                <br/>
                Redshift enables SQL queries to perform analytics and predicted values from AI/ML models could bring new insights when combined with other data or tables using SQL. The architecture utilizes the SageMaker Random Cut Forest machine learning algorithm to predict anomaly scores and uses three standard deviations above the mean anomaly score as a threshold to classify a data point as an anomaly.
                <br/>
                <br/>
                After the initialization steps of the architecture, inferencing, visualization, and retraining the model are automated. The procedures of creating the architecture are currently documented as a Quip document and will be transferred into a markdown document for better utilization. Documents related to this workshop will be shared and co-owned with the manager for future maintenance.
                </div>
            </div>
            <div className = "project-text-container">
                <div className='project-sub-header'>
                Introduction to Analytics Engagement with Web-Based Application :
                </div>
                <div className="project-text">
                Our internal customers including Account SAs, Sales Specialists, and other internal customers, sometimes need guidance toward Analytics services, engagements, and programs. Some customers are not very familiar with who/when/how to engage with Analytics Specialists and look for assistance.                <br/>
                <br/>
                I was given a task to lead a development effort for a self-service application (Pythia) to address those issues. To provide the correct guidance for customers’ situations, I conducted 1:1s to learn about common customers’ scenarios, details on programs, and Specialists’ tasks. I also looked into Wisdom, wiki, and Amazon Broadcast to collect more information on the programs and roles of each specialist. I utilized Quill (Pythia development tool) to construct Pythia.
                <br/>
                <br/>
                During the development phase, I took the following approaches:
                <br/>
                <b className='project-text-bold'>
                •	Collected and stored all relevant information on Quip<br/>
                •	Created questions and answers based on a decision-tree structure with customized routes on Quill<br/>
                •	Created recommendations with details on Quill<br/>
                •	Created rules to provide recommendations at the end on Quill<br/>
        <br/>
                </b>
                </div>
                <div className="project-text">
                <br/>
                The production preview of Pythia is created with Quill and can be accessed with a URL. The content of the Quill will be reviewed internally for future publication on Pythia. I wrote the main document which instructs the maintenance of Pythia-related documents and functions and shared it with the team members.                 <br/>
                <br/>
                </div>
            </div>

            <div className = "project-text-container">
                <div className='project-sub-header'>
                AWS Certification: Associate Solutions Architect :
                </div>
                <Tilt className="thumbnail-rounded" options={{reverse: false, max: 8, perspective: 1000, scale: 1,
                            speed: 300, transition: true, axis: null, reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',}}
                >
                <Img className = "project-image" style = {{width : '600px', height: '400px'}}src = {AWS7} alt="Sypp_calendar"/>
                </Tilt>
                <div className="project-text">
                    During the internship, I was able to utilize internal AWS account to explore AWS cloud services. To fully utilize the resources provided by AWS, I decided to take AWS certification exam. The certification proves one's understandings in AWS technology across a wide range of AWS services. 
                <br/>
                    Over the course of internship period, I conducted 1:1s, participated in internal meetings, customer meetings and Immersion Days, and joined internal classes and bootcamps. On top of resources provided by AWS, I took online bootcamps to fill in necessary information. 
                <br/>
                <br/>
                    Two weeks before the termination of the internship, I took the certification test and was able to achieve a passing score. 
                <br/>
                </div>
            </div>
        
    </div>
  );
};

export default Projects;
