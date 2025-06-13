import styles from '../assets/styles/Card.module.css'
import { useState } from 'react';
// import { ThemeContext } from '../utils/context/ThemeContext';
// import { LanguageContext } from '../utils/context/LanguageContext'
import { url } from '../utils/common'
import { ProjectType, ObjectModal } from '../utils/types/project';
import Modal from './Modal';
// import { ThemeContextType, LanguageContextType } from '../utils/types/context';

type CardProps = {
    project: ProjectType,
}

function Card({project}: CardProps) {
    // const { theme } = useContext(ThemeContext) as ThemeContextType
    // const { lang } = useContext(LanguageContext) as LanguageContextType
    //const [isOpen, setIsOpen] = useState(false)
    const [mouseEvent, setMouseEvent] = useState(false)

    const smallUrl = project.imageUrl?.split(".com/")[0] + ".com/small-" + project.imageUrl?.split(".com/")[1];

    const [modal, setModal] = useState<ObjectModal>({isOpen: false, videoId: null})

    function handleModal(id: number) {
        
        setModal((prevState: ObjectModal) => ({
            ...prevState,
            isOpen: true,
            videoId: id
        }))
    }

    return (
        <>
        <article>
            <div 
                className={styles.box}
                onClick={() => handleModal(project._id)} 
                onMouseEnter={()=> setMouseEvent(prev=> !prev)}
                onMouseLeave={()=> setMouseEvent(prev=> !prev)}
            >
                <picture>
                    <source media="(max-width: 315px)" srcSet={smallUrl}/>
                    <img className={styles.image} src={url+project.imageUrl} alt={`projet ${project.title}`}/>
                </picture>
                
                    {mouseEvent ? <div className={styles.titleContainer}>
                                    <h4>{project.title}</h4>
                                    <i className={`fa-solid fa-arrow-up ${styles.arrow}`}></i> 
                                </div>
                                : null }
            </div> 
        </article>

        <Modal modal={modal}setModal={setModal} project={project}/>
        </>
    )
}

export default Card