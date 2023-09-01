import React from 'react';
import About from '../About/About';
import Projects from '../Project/Project';
import ProjectSYPPCE from './../Project/ProjectSYPPCE'
import ProjectVazaar from './../Project/ProjectVazaar'
import ProjectBlay from './../Project/ProjectBlay'
import ProjectPersonalPort from './../Project/ProjectPersonalPort'
import WorkCN from './../Project/WorkCN'
import WorkAWS from './../Project/WorkAWS'
import Gain from '../Project/Gain';
import Rextend from '../Project/Rextend';
import './ModalDetail.scss';
const FrontPageEntities = (props) => {
   const display = () =>{
        if(props.modalName === 'about'){
            return(
                <div className ="modal-container" style = {{width : 'inherit'}}>
                    <About />
                </div>
            );
        }
        else if(props.modalName === 'gain'){
            return(
                <div className ="modal-container"  style = {{height : 'inherit'}}>
                    <Gain />
                </div>
            );
        }
        else if(props.modalName === 'CN'){
            return(
                <div className ="modal-container"  style = {{height : 'inherit'}}>
                    <WorkCN />
                </div>
            );
        }
        else if(props.modalName === 'rextend'){
            return(
                <div className ="modal-container"  style = {{height : 'inherit'}}>
                    <Rextend />
                </div>
            );
        }
        else if(props.modalName === 'syppWeb'){
            return(
                <div className ="modal-container"  style = {{height : 'inherit'}}>
                    <Projects />
                </div>
            );
        }else if(props.modalName === 'vazaar'){
            return(
                <div className ="modal-container">
                    <ProjectVazaar/>
                </div>
            );
        }else if(props.modalName === 'blay'){
            return(
                <div className ="modal-container">
                    <ProjectBlay/>
                </div>
            );
        }else if(props.modalName === 'personalWeb'){
            return(
                <div className ="modal-container">
                    <WorkAWS/>
                </div>
            );
        }
        else{
            return
        }
    }
     
    return(
        <div style={{width:'fit-content'}}>
        { display() }
        </div>
    );
}
export default FrontPageEntities