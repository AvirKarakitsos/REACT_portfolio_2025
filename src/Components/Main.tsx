import styles from '../assets/styles/Main.module.css'
import photo from '../assets/images/photo-baobab.png'
import github from '../assets/images/github.png'
import twitter from '../assets/images/x-logo.jpg'
import linkedin from '../assets/images/linkedin.png'
import gmail from '../assets/images/gmail.png'
import baobabBlack from '../assets/images/baobab_black.svg'
import baobabWhite from '../assets/images/baobab_white.svg'

import { useContext, useState } from 'react'
import { sortByDate, translate } from '../utils/common'
import { ThemeContext } from '../utils/context/ThemeContext'
import { LanguageContext } from '../utils/context/LanguageContext'
import { ThemeContextType, LanguageContextType } from '../utils/types/context'
import { ObjectModal, ProjectType } from '../utils/types/project'
import projects from '../utils/projects/projects.json'
import Card from './Card'
import Modal from './Modal'
import Information from './Information'
import { CategoryType } from '../utils/types/project'

const CATEGORIES: CategoryType[] = [
    {_id: 1, name: "all"},
    {_id: 2, name: "fullstack", color:"purple"},
    {_id: 3, name: "react", color:"blue"},
    {_id: 3, name: "node", color:"green"}
]

function Main() {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {lang} = useContext(LanguageContext) as LanguageContextType

    const [table, setTable] = useState<ProjectType[]>(projects)
    const [isChecked, setIsChecked] = useState(true)
    const [tag, setTag] = useState("all")
    const [modal, setModal] = useState<ObjectModal>({isOpen: false, videoId: null})

    const handleFilter = function(tag: string, isTrue: boolean) {
		if(tag === "all") {
            const copy = [...projects]
            const filterSort = sortByDate(copy, isTrue)
			setTable(filterSort)
		}
		else {
			const copy = [...projects]
			const filter = copy?.filter(element => element.category === tag)
            const filterSort = sortByDate(filter, isTrue)
			setTable(filterSort)
		}
		setTag(tag)
	}

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        handleFilter(tag, event.target.checked);
      };

    return(
        <main className={`${styles["main"]} ${theme === "light" ? "bg-light-2" : "bg-darker-1 color-white"}`}>
            <div className={styles["container"]}>
                {
                    theme === "light"
                        ? <>
                            <img src={baobabBlack} alt="baobab" className={`absolute ${styles["baobab-left"]}`}/>
                            <img src={baobabBlack} alt="baobab" className={`absolute ${styles["baobab-right"]}`}/>            
                        </>
                        : <>
                            <img src={baobabWhite} alt="baobab" className={`absolute ${styles["baobab-left"]}`}/>
                            <img src={baobabWhite} alt="baobab" className={`absolute ${styles["baobab-right"]}`}/>
                        </>
                }

                <section className={styles["top-container"]}>
                    <div className="relative">
                        <div className={`${styles["frame-left"]} absolute ${theme === "light" ? "border-black" : "border-white"}`}></div>
                        <img className= {`${styles["image-left"]} relative`}  src={photo} alt="Allée de baobabs à Madagascar"/>
                    </div>
                    <div className={styles["div-right"]}>
                        <h1 className={styles["title"]}>Arno Cotsoyannis</h1>
                        <h2 className={styles.subtitle}>{translate(lang).main.part1.subtitle}</h2>
                        <ul className={`${styles["links-container"]} no-bullet relative`}>
                            <li className={`${styles["link-1"]} absolute`}><a href="https://github.com/AvirKarakitsos" target="_blank" rel="noopener noreferrer"><img height={30} width={30} className="border-cercle" src={github} alt="lien github"/></a></li>
                            <li className={`${styles["link-2"]} absolute`}><a href="https://www.linkedin.com/in/arno-c-b9b56531a/" target="_blank" rel="noopener noreferrer"><img height={30} width={30} className="border-cercle" src={linkedin} alt="lien instagram"/></a></li>
                            <li className={`${styles["link-3"]} absolute`}><a href="https://twitter.com/AvirKarakitsos" target="_blank" rel="noopener noreferrer"><img height={30} width={30} className="border-cercle" src={twitter} alt="lien twitter"/></a></li>
                            <li className={`${styles["link-4"]} absolute`}><img height={30} width={30} className="border-cercle" onClick={() => alert('arnocotso8@gmail.com')} src={gmail} alt="email"/></li>
                        </ul>
                    </div>
                </section>

                <Information/>

                <Modal  modal={modal} setModal={setModal} projects={projects}/>

                <section id="project" className="section-1 flex direction-column medium-row-gap">
                    <h2 className="subtitle">{translate(lang).main.projects.subtitle}</h2>
                    <ul className={styles["project-filter"]}>
                        {CATEGORIES.map(category => <li key={category._id}
                                                        data-tag={category.name} 
                                                        className="list-filter" 
                                                        onClick={() => handleFilter(category.name, isChecked)}
                                                        >
                                                        <button className={`btn-filter no-border ${tag === category.name ? "" : "color-grey"}`}>{translate(lang).main.projects.categories[category.name]}</button>
                                                    </li>)}                                
                                                    <li>
                                                        <input type="checkbox" className={styles.sort} id="sort" name="sort" 
                                                            checked={isChecked} 
                                                            onChange={handleCheckboxChange}/>
                                                        <label htmlFor="sort" className={styles.labelSort}>
                                                            {isChecked 
                                                                ? <><i className="fa-solid fa-arrow-up-wide-short iconeSort"></i><span className={styles.iconeTitle}>{translate(lang).main.projects.sort[1]}</span></>
                                                                : <><i className="fa-solid fa-arrow-down-short-wide iconeSort"></i><span className={styles.iconeTitle}>{translate(lang).main.projects.sort[0]}</span></>
                                                            }
                                                        </label>
                                                    </li>
                    </ul>
                    <div className={styles["box-container"]}>
                        { table.map(project => <Card key={project._id} project={project} categories={CATEGORIES} setModal= {setModal}/>) }
                    </div>
                </section>

            </div>
        </main>
    )
}

export default Main