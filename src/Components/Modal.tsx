import { useEffect, useRef } from 'react';
import styles from '../assets/styles/Modal.module.css'
import { ObjectModal, ProjectType } from '../utils/types/project';
import { url } from '../utils/common';

type ModalType = {
    modal: ObjectModal,
    setModal(newState: ObjectModal | ((prevState: ObjectModal) => ObjectModal)): void;
    project: ProjectType
}

function Modal({modal, setModal, project}: ModalType) {
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
                {project.video === ""
                    ? <img className={styles.image} src={url+project.imageUrl} alt={`projet ${project.title}`}/>
                    : <video src={url+project.video}></video>
                }   
            </div>
        </dialog>
    )
}

export default Modal