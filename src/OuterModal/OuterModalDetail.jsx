import React, {useState} from 'react';
import About from '../About/About';
import Projects from '../Project/Project';
import ProjectSYPPCE from '../Project/ProjectSYPPCE'
import ProjectVazaar from '../Project/ProjectVazaar'
import ProjectBlay from '../Project/ProjectBlay'
import ProjectPersonalPort from '../Project/ProjectPersonalPort'
import WorkCN from '../Project/WorkCN'
import WorkAWS from '../Project/WorkAWS'
import { Fade } from "react-awesome-reveal";
import {Img} from 'react-image'
import Vazaar from './../images/vazaar.png'
import Blay from './../images/blayicon.png'
import Gain from './../images/Gain.png'
import AWS from './../images/Amazon_Web_Services_Logo.svg'
import CN from './../images/cnicon.png'
import Knot from './../images/knot.png'
import Rextend from './../images/rextend.png'
import desktopPic from './../images/sypp.png'


import './OuterModalDetail.scss';
const OuterModalDetail = (props) => {
    const [enterKnot, setEnterKnot] = useState(false);

   const display = () =>{
        if(props.outerModelName === 'work'){
            return(
                <>
                  <Fade className='outer-modal-outerComponent' duration={1000} delay={700} distance="30px">
                        <div  onClick = {() => props.onClickComponent('gain')}>
                            <div className="outer-modal-innerComponent">
                                <div className="project-wrapper__text">
                                    <h3 className="HeroComponent-title">Full Stack SWE</h3>
                               
                                </div>
                                <div className="hero-picture-container">
                                    <Img style = {{width : '90px', height: '90px'}}src = {Gain} alt="Gain"/>
                                </div>
                                {/* </Link> */}
                            </div>
                            <h3 className="outermodal-title">Gain</h3>
                        </div>
                    </Fade>
                    <Fade className='outer-modal-outerComponent' duration={1000} delay={700} distance="30px">
                        <div  onClick = {() => props.onClickComponent('personalWeb')}>
                            <div className="outer-modal-innerComponent">
                                <div className="project-wrapper__text">
                                    <h3 className="HeroComponent-title">Solutions Architect</h3>
                                  
                                </div>
                                <div className="hero-picture-container">
                                    <Img style = {{width : '90px', height: '90px'}}src = {AWS} alt="AWS"/>
                                </div>
                            </div>
                            <h3 className="outermodal-title">Amazon Web Services</h3>
                        </div>
                    </Fade>
                    <Fade className='outer-modal-outerComponent' duration={1000} delay={700} distance="30px">
                        <div  onClick = {() => props.onClickComponent('CN')}>
                            <div className="outer-modal-innerComponent">
                                <div className="project-wrapper__text">
                                    <h3 className="HeroComponent-title">AI Engineer</h3>
                                </div>
                                <div className="hero-picture-container">
                                    <Img style = {{width : '90px', height: '90px'}}src = {CN} alt="CN"/>
                                </div>
                            </div>
                            <h3 className="outermodal-title">CN AI</h3>
                        </div>
                    </Fade>
                </>
            );
        }
        else if(props.outerModelName === 'project'){
            return(
                <>
                <Fade className='outer-modal-outerComponent' duration={1000} delay={700} distance="30px">
                      <div onMouseEnter = {()=>setEnterKnot(true)} onMouseLeave = {()=>setEnterKnot(false)}>
                          <div className="outer-modal-innerComponent">
                              <div className="project-wrapper__text">
                                  <h3 className="HeroComponent-title">CO-Founder / Full Stack SWE</h3>
                             
                              </div>
                              <div className="hero-picture-container">
                                  <Img style = {{width : '90px', height: '90px'}}src = {Knot} alt="Knot"/>
                              </div>
                              {/* </Link> */}
                              {enterKnot?<div className = "frontpage-detail-text">Coming Soon!</div>:undefined}
                          </div>
                          <h3 className="outermodal-title">Tie your KNOT</h3>
                      </div>
                  </Fade>
                  <Fade className='outer-modal-outerComponent' duration={1000} delay={700} distance="30px">
                      <div onClick = {() => props.onClickComponent('rextend')}>
                          <div className="outer-modal-innerComponent">
                              <div className="project-wrapper__text">
                                  <h3 className="HeroComponent-title">{'Project Leader  / Full Stack SWE'}</h3>
                                
                              </div>
                              <div className="hero-picture-container">
                                  <Img style = {{width : '90px', height: '90px'}}src = {Rextend} alt="Rextend"/>
                              </div>
                          </div>
                          <h3 className="outermodal-title">Easy recruiting Rextend</h3>
                      </div>
                  </Fade>
                  <Fade className='outer-modal-outerComponent' duration={1000} delay={700} distance="30px">
                      <div  onClick = {() => props.onClickComponent('syppWeb')}>
                          <div className="outer-modal-innerComponent">
                              <div className="project-wrapper__text">
                                  <h3 className="HeroComponent-title">Frontend Engineer</h3>
                              </div>
                              <div className="hero-picture-container">
                                  <Img style = {{width : '90px', height: '90px'}}src = {desktopPic} alt="CN"/>
                              </div>
                          </div>
                          <h3 className="outermodal-title">Apply with SYPP</h3>
                      </div>
                  </Fade>
                  <Fade className='outer-modal-outerComponent' duration={1000} delay={700} distance="30px">
                      <div  onClick = {() => props.onClickComponent('personalWeb')}>
                          <div className="outer-modal-innerComponent">
                              <div className="project-wrapper__text">
                                  <h3 className="HeroComponent-title">Frontend Engineer</h3>
                              </div>
                              <div className="hero-picture-container">
                                  <Img style = {{width : '90px', height: '90px'}}src = {Vazaar} alt="Vazaar"/>
                              </div>
                          </div>
                          <h3 className="outermodal-title">Buy/Sell with VAZAAR</h3>
                      </div>
                  </Fade>
                  <Fade className='outer-modal-outerComponent' duration={1000} delay={700} distance="30px">
                      <div  onClick = {() => props.onClickComponent('personalWeb')}>
                          <div className="outer-modal-innerComponent">
                              <div className="project-wrapper__text">
                                  <h3 className="HeroComponent-title">Frontend Engineer</h3>
                              </div>
                              <div className="hero-picture-container">
                                  <Img style = {{width : '90px', height: '90px'}}src = {Blay} alt="Blay"/>
                              </div>
                          </div>
                          <h3 className="outermodal-title">Launch with Blay</h3>
                      </div>
                  </Fade>
              </>
            );
        }
        else{
            return
        }
    }
     
    return(
        <div className='outer-modal-container'>
          {display()}
        </div>
    );
}
export default OuterModalDetail