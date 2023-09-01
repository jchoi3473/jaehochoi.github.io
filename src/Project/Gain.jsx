import React from 'react';


import './../About/About.scss'
import './Project.scss'
import './../Components/buttons.scss'
// import syppDesktop from '../Image/SyppDesktop'
// import syppCalendar from '../Image/SyppCalendar'

const Gain = () => {

  return (
    <div className = "project-container" >
            <div className = "project-text-container" >
                <div className = 'project-title'>Gain</div>
                <div className='project-sub-header'>
                    Feb 2023 - Current
                </div>
                <div className='project-sub-header'>
                    Introduction :
                </div>
                <div className="project-text">I am currently working as a full stack software engineer at Gain. As my experience at Gain is ongoing, only brief summaries are included.
                </div>
            </div>

            <div className = "project-text-container">
                <div className='project-sub-header'>
                    My Role : Full Stack Software Engineer
                </div>
                <div className="project-text">                
                <b className='project-text-bold'>
                •	I am currently working on company portal platform's feature development.
               <br/>
                •	I am also working on Data Integration / Ingestion related tasks. <br/>
                •	I designed and implemented an automated ingestion/reconciliation pipeline.<br/>
                •	I spearheaded the integration of GPT3.5 into company's portal.                <br/>
                <br/>
                Angular, .Net Framework, MySQL, Python, and AWS services(Redshift, EC2).<br/>
                </b>
                </div>
                
                
            </div>
                
        
        
    </div>
  );
};

export default Gain;
