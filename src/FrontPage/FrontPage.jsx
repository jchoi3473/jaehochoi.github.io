import React, { useState } from 'react';
import './FrontPage.scss'
import './typography.scss'

import FrontPageEntities from './FrontPageEntities'
import Modal from 'react-bootstrap/Modal';
import ModalDetail from './../ModalDetail/ModalDetail'

const FrontPage = () => {
    const [show, setShow] = useState(false);
    const [modalName, setModalName] = useState('');

    const onClickComponent = (name) =>{
        setShow(true)
        setModalName(name)
    }

    return(
        <div>
            <div className = "main-container">
                <div id = 'main-title' className = "titleText">
                    JAE HO CHOI
                </div>
                <div id = 'main-title' className = "titleSubText">
                    C.S B.S. / Software Developer
                </div>
            </div>
            <div className = "main-content-container" >
                <FrontPageEntities onClickComponent = {onClickComponent}/>
            </div>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                centered
                dialogClassName="detail-modal detail-size"
                className = "sypp-create-detail-modal detail-size"
            >
                <ModalDetail modalName = {modalName}/>
                {/* <div className = "modal-container">{modalName}</div> */}
            </Modal>
        </div>
    );
}
export default FrontPage;
