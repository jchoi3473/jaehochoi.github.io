import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';
import pdf from '../files/Jae Ho Choi Resume Web.pdf'


import './Footer.scss'


const Footer = () => {

    function onClickButton() {
        navigator.clipboard.writeText('jcho427@emory.edu');
        alert("email copied!")
        // setButtonText('Email Copied!');
    }

    return(
        <div>
            <div className ="footer-icon-container">
                <Fade  duration={1000} delay={1200} distance="30px">
                <a href={'https://github.com/jchoi3473'}>
                    <FontAwesomeIcon className = "footer-icon" icon={faGithub}/>
                </a>
                <a href={'https://www.linkedin.com/in/jae-ho-choi-3424a5125/'}>
                    <FontAwesomeIcon className = "footer-icon" icon={faLinkedin}/>
                </a>
                <a href={'https://www.facebook.com/jay.choi.12/'}>
                    <FontAwesomeIcon className = "footer-icon" icon={faFacebook}/>
                </a>
                <a href={'https://www.instagram.com/jay_c824/'}>
                    <FontAwesomeIcon className = "footer-icon" icon={faInstagram}/>
                </a>
                <a onClick = {()=>onClickButton()}>
                    <FontAwesomeIcon className = "footer-icon" icon={faEnvelopeSquare}/>
                </a>
                <a className = "footer-text"  href={pdf}>Resume</a>
                </Fade>
            </div>
        </div>
    )
}
export default Footer;