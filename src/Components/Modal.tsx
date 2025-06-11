import { useEffect, useRef } from 'react';
import styles from '../assets/styles/Modal.module.css'
import { ObjectModal, ProjectType } from '../utils/types/project';
import { url } from '../utils/common';

type ModalType = {
    modal: ObjectModal,
    projects: ProjectType[]
    setModal(newState: ObjectModal | ((prevState: ObjectModal) => ObjectModal)): void;
}

function Modal({modal, setModal, projects}: ModalType) {
    const refModal = useRef<HTMLDialogElement>(null);
    
    useEffect(() => {
        if (modal.isOpen) {
            refModal.current?.showModal();
        } else {
            refModal.current?.close();
        }
    }, [modal.isOpen]);

    return(
        <dialog 
            id="modal" 
            className={styles.modal} 
            ref={refModal} 
            onClick={() => setModal((prevState) => ({
                ...prevState,
                isOpen: false
              }))
            }>
            <div className="modal-container flex" onClick ={(event) => event.stopPropagation()}>
                {modal.isOpen
                    ? projects.filter(project => project._id === modal.videoId)[0].video != ""
                        ? <video className={styles.video} src={url+projects.filter(project => project._id === modal.videoId)[0].video} controls autoPlay muted={true}></video>
                        : <img src={url+projects.filter(project => project._id === modal.videoId)[0].imageUrl}/>
                    : null
                }
                </div>
        </dialog>
    )
}

export default Modal