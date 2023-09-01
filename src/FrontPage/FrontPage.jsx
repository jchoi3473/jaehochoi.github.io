import React, { useState } from 'react';
import './FrontPage.scss'
import './typography.scss'

import FrontPageEntities from './FrontPageEntities'
import Modal from 'react-bootstrap/Modal';
import ModalDetail from './../ModalDetail/ModalDetail'
import OuterModalDetal from './../OuterModal/OuterModalDetail'
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Fade } from "react-awesome-reveal";
import {Img} from 'react-image'
import Resume from './../images/resume.png'
import CN from './../images/cnicon.png'
import Gain from './../images/Gain.png'
import AWS from './../images/Amazon_Web_Services_Logo.svg'
import Vazaar from './../images/vazaar.png'
import Blay from './../images/blayicon.png'
import SYPP from './../images/sypp.png'
import Knot from './../images/knot.png'
import Rextend from './../images/rextend.png'
import ResumeFile from './../files/Jae-Ho-Choi-Resume-Web.pdf'
const FrontPage = () => {
    const [show, setShow] = useState(false);
    const [modalName, setModalName] = useState('');
    const [outerShow, setOuterShow] = useState(false);
    const [outerModelName, setOuterModalName] = useState('')
    const [enterAbout, setEnterAbout] = useState(false);

    const onClickComponent = (name) =>{
        setShow(true)
        setModalName(name)
    }

    const onCloseModal = (e) =>{
        setShow(false)
    }

    const onClickOuterComponent = (name) =>{
        setOuterShow(true)
        setOuterModalName(name)
    }
    const onCloseOuterModal = (e) =>{
        setOuterShow(false)
    }

    return(
        <div>
            <div className = "main-container">
                <div id = 'main-title' className = "titleText">
                    JAE HO CHOI
                </div>
                <div id = 'main-title' className = "titleSubText">
                    B.S. in Computer Science / Software Engineer
                </div>
            </div>
            <div>
                <br/>
                <div id = 'main-title' className = "webrule">
                    Click on each item to view more...:D
                </div>
            </div>
            {/* <div className = "main-content-container" >
                <FrontPageEntities onClickComponent = {onClickComponent}/>
            </div> */}
            <div className='Outercomponent-container'>
                <Fade className='Innercomponent-container' duration={1000} delay={500} distance="30px">
                    <div onMouseEnter = {()=>setEnterAbout(true)} onMouseLeave = {()=>setEnterAbout(false)} onClick={() => onClickComponent('about')}>
                        <div className="HeroComponentApp-innerComponent outer-modal-app">
                            {/* <Link to="about" smooth duration={1000}> */}
                            <div className="project-wrapper__text">
                                {/* <h3 className="HeroComponent-title">About Me</h3> */}
                                <div className="HeroComponent-text HeroComponent-about-text" style={{textAlign:'left !important'}}>
                                <li>Emory 12/2022 Grad</li>
                                <li>B.S. Computer Scinece</li>
                                <li>Fullstack Engineer</li>
                                <li>Cloud / AI Enthusiast</li>
                                <li>Problem Solver</li>
                                </div>
                            </div>
                            {/* </Link> */}
                        </div>
                        <h3 className="frontpage-title">About Me</h3>
                    </div>
                </Fade>
                <Fade  duration={1000} delay={500} distance="30px">
                    <a href= {ResumeFile}>
                        <div>
                            <div className="HeroComponentApp-innerComponent outer-modal-app">
                                    <Img style = {{width : '170px', height: '170px'}}src = {Resume} alt="Resume"/>
                            </div>
                        </div>
                        <h3 className="frontpage-title">Download Resume</h3>
                    </a>
                </Fade>
                <Fade  duration={1000} delay={500} distance="30px">
                    <div onMouseEnter = {()=>setEnterAbout(true)} onMouseLeave = {()=>setEnterAbout(false)} onClick={()=>onClickOuterComponent('work')}>
                        <div className="outer-dialog-innerComponent">
                            <div className="outer-picture-container">
                                <Img style = {{width : '60px', height: '60px'}}src = {Gain} alt="Gain"/>
                            </div>
                            <div className="outer-picture-container">
                                <Img style = {{width : '60px', height: '60px'}}src = {AWS} alt="Gain"/>
                            </div>
                            <div className="outer-picture-container">
                                <Img style = {{width : '60px', height: '60px'}}src = {CN} alt="Gain"/>
                            </div>
                        </div>
                        <h3 className="frontpage-title">Work Experience</h3>
                    </div>
                </Fade>
                <Fade  duration={1000} delay={500} distance="30px">
                    <div onMouseEnter = {()=>setEnterAbout(true)} onMouseLeave = {()=>setEnterAbout(false)} onClick={()=>onClickOuterComponent('project')}>
                        <div className="outer-dialog-innerComponent">
                            <div className="outer-picture-container">
                                <Img style = {{width : '60px', height: '60px'}}src = {Knot} alt="Knot"/>
                            </div>
                            <div className="outer-picture-container">
                                <Img style = {{width : '60px', height: '60px'}}src = {Rextend} alt="Rextend"/>
                            </div>
                            <div className="outer-picture-container">
                                <Img style = {{width : '60px', height: '60px'}}src = {SYPP} alt="Gain"/>
                            </div>
                            <div className="outer-picture-container">
                                <Img style = {{width : '60px', height: '60px'}}src = {Vazaar} alt="Gain"/>
                            </div>
                            <div className="outer-picture-container">
                                <Img style = {{width : '60px', height: '60px'}}src = {Blay} alt="Gain"/>
                            </div>
                            {/* <div className="outer-picture-container">
                                <Img style = {{width : '60px', height: '60px'}}src = {CN} alt="Gain"/>
                            </div> */}
                        </div>
                        <h3 className="frontpage-title">Project Experience</h3>

                    </div>
                </Fade>
            </div>

            <Modal
             show={outerShow}
             onHide={() => setOuterShow(false)}
             centered
             dialogClassName="detail-modal detail-size"
             className = "sypp-create-detail-modal detail-size">
                <OuterModalDetal outerModelName = {outerModelName} onClickComponent = {onClickComponent}/>
            </Modal>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                centered
                dialogClassName="detail-modal detail-size"
                className = "sypp-create-detail-modal detail-size"
            >
                <ModalDetail onCloseModal = {onCloseModal} modalName = {modalName}/>
                {/* <div className = "modal-container">{modalName}</div> */}
            </Modal>
        </div>
    );
}
export default FrontPage;
