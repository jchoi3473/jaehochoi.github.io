import React from 'react';
import About from '../About/About';
import Projects from '../Project/Project';
import ProjectSYPPCE from './../Project/ProjectSYPPCE'
import ProjectBlay from './../Project/ProjectBlay'
import ProjectPersonalPort from './../Project/ProjectPersonalPort'
const FrontPageEntities = (props) => {
   const display = () =>{
        if(props.modalName === 'about'){
            return(
                <div className ="modal-container" style = {{width : 'inherit'}}>
                    <About />
                </div>
            );
        }else if(props.modalName === 'syppWeb'){
            return(
                <div className ="modal-container"  style = {{height : 'inherit'}}>
                    <Projects />
                </div>
            );
        }else if(props.modalName === 'syppCE'){
            return(
                <div className ="modal-container">
                    <ProjectSYPPCE/>
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
                    <ProjectPersonalPort/>
                </div>
            );
        }
        else{
            return
        }
    }
     
    return(
        <div>
        { display() }
        </div>
    );
}
export default FrontPageEntities