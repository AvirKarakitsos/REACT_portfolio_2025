import { useContext, useEffect, useRef } from 'react';
import styles from '../assets/styles/Modal.module.css'
import { ObjectModal, ProjectType } from '../utils/types/project';
import { url } from '../utils/common';
import { LanguageContext } from '../utils/context/LanguageContext';
import { LanguageContextType, ThemeContextType } from '../utils/types/context';
import { ThemeContext } from "../utils/context/ThemeContext"
import { translate } from '../utils/common';

type ModalType = {
    modal: ObjectModal,
    setModal(newState: ObjectModal | ((prevState: ObjectModal) => ObjectModal)): void;
    project: ProjectType
}

function Modal({modal, setModal, project}: ModalType) {
    const refModal = useRef<HTMLDialogElement>(null);
    const { lang } = useContext(LanguageContext) as LanguageContextType
    const {theme} = useContext(ThemeContext) as ThemeContextType

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
            <div 
                className={`${styles.container} ${theme === "light" ? "bg-light-1" : "bg-darker-1 color-white"}`} 
                onClick ={(event) => event.stopPropagation()}>
                
                {project.video === ""
                    ? <img className={styles.media} src={url+project.imageUrl} alt={`projet ${project.title}`}/>
                    : <video className={styles.media} src={url+project.video}></video>
                }

                <div className={styles.rightPart}>
                    <h3 className='subtitle'>{project.title}</h3>
                    <p className='italic'>{project.tags}</p>
                    <p>{project.content.filter((item) =>(item.language === lang))[0]?.text}</p>
                    <p><a href={project.link}>{translate(lang).main.projects.link}</a></p>
                    {/* <p className='text-right'>{project.date}</p> */}
                </div>
            </div>
        </dialog>
    )
}

export default Modal