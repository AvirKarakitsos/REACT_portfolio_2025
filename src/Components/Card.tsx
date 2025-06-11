import styles from '../assets/styles/Card.module.css'
import Collapse from './Collapse'
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../utils/context/ThemeContext';
import { LanguageContext } from '../utils/context/LanguageContext'
import { url, translate } from '../utils/common'
import { ProjectType, CategoryType, ObjectModal } from '../utils/types/project';
import { ThemeContextType, LanguageContextType } from '../utils/types/context';

type CardProps = {
    project: ProjectType,
    setModal(newState: ObjectModal | ((prevState: ObjectModal) => ObjectModal)): void,
    categories: CategoryType[]
}

function Card({project, setModal, categories}: CardProps) {
    const { theme } = useContext(ThemeContext) as ThemeContextType
    const { lang } = useContext(LanguageContext) as LanguageContextType
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isOpen, setIsOpen] = useState(false)

    const smallUrl = project.imageUrl?.split(".com/")[0] + ".com/small-" + project.imageUrl?.split(".com/")[1];
    const category = categories.filter(category => category.name === project.category)
  
    useEffect(() => {
        window.addEventListener("resize",()=> {
            setWindowWidth(window.innerWidth)
        })
    },[])

    function handleModal(id: number) {
        setModal((prevState: ObjectModal) => ({
            ...prevState,
            isOpen: true,
            videoId: id
        }))
    }

    return (
        <article 
            className={`${styles.box} ${theme === "light" ? "bg-light-1" : "bg-darker-2"} ${isOpen
                ? styles.collapseOpen
                : ""}`}>

            <div className="relative">
                <h3 className="text-center">{project.title}</h3>
                <i className={styles.bookmark+" fa-solid fa-bookmark" } style={{color: category[0].color}}></i>
            </div>

            <div>
                <picture  onClick={() => handleModal(project._id)}>
                    <source media="(max-width: 315px)" srcSet={smallUrl}/>
                    <img className={styles.image} src={url+project.imageUrl} alt={`projet ${project.title}`}/>
                </picture>
            </div>

            <section className={styles["box-section"]}>
                <p>{windowWidth > 750 && <b>Tags: </b>}<span>{project.tags}</span></p>
                {windowWidth <= 750 
                    ? <Collapse isOpen={isOpen} setIsOpen={setIsOpen} project={project}/>
                    : <p className={styles["box-description"]}>{project.content.filter((input) => (input.language === lang))[0]?.text}</p>
                }
                <div className={styles["box-bottom"]}>
                    <p><a href={project.link} target="_blank" rel="noreferrer" className={theme === "light" ? "color-grey" : "color-white"}>{translate(lang).main.projects.link}</a></p>
                    <p className={styles.date}>{project.date}</p>
                </div>
            </section>
            
        </article>    
    )
}

export default Card