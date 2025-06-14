import styles from '../assets/styles/Main.module.css'
import photo from '../assets/images/contraste_25_froid_saisissant.jpg'
import github from '../assets/images/github.svg'
import twitter from '../assets/images/twitter.svg'
import linkedin from '../assets/images/linkedin_2.svg'
import instagram from '../assets/images/instagram.svg'
import { useContext, useState } from 'react'
import { sortByDate, translate } from '../utils/common'
import { ThemeContext } from '../utils/context/ThemeContext'
import { LanguageContext } from '../utils/context/LanguageContext'
import { ThemeContextType, LanguageContextType } from '../utils/types/context'
import { ProjectType } from '../utils/types/project'
import projects from '../utils/projects/projects.json'
import Card from './Card'
import { CategoryType } from '../utils/types/project'
import About from './About'
import Skills from './Skills'

const CATEGORIES: CategoryType[] = [
    {_id: 1, name: "all"},
    {_id: 2, name: "fullstack", color:"purple"},
    {_id: 3, name: "react", color:"blue"},
    {_id: 4, name: "node", color:"green"}
]

function Main() {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {lang} = useContext(LanguageContext) as LanguageContextType

    const [table, setTable] = useState<ProjectType[]>(projects)
    const [isChecked, setIsChecked] = useState(true)
    const [tag, setTag] = useState("all")

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
        <main className={`${styles.main} ${theme === "light" ? "bg-light-1" : "bg-darker-1 color-white"}`}>
            <div className={styles.container}>
                <section className={styles.topContainer}>
                    <div className={styles.up}>
                        <div className={styles.leftContent}>
                            <h1 className={styles.title}>{translate(lang).main.part1.title1}<br/>{translate(lang).main.part1.title2}</h1>
                        </div>
                        <div className={styles.rightContent}>
                            <div className={styles.imgContainer}>
                                <img src={photo} alt="photo" className={styles.img}/>
                            </div>
                            <div className={styles.subtitles}>
                                <p>Arno Cotsoyannis</p>
                                <p>{translate(lang).main.part1.subtitle1}</p>
                                <p>{translate(lang).main.part1.subtitle2}</p>
                                <p>{translate(lang).main.part1.subtitle3}</p>
                            </div>
                        </div>
                    </div>
                    <ul className={styles.linksContainer}>
                        <li className={`${styles.linkItem} ${styles.link1}`}><a className={styles.link} href="https://github.com/AvirKarakitsos" target="_blank" rel="noopener noreferrer"><img height={20} src={github} alt="lien github"/>Github</a></li>
                        <li className={`${styles.linkItem} ${styles.link2}`}><a className={styles.link} href="https://www.linkedin.com/in/arno-c-b9b56531a/" target="_blank" rel="noopener noreferrer"><img height={17} src={linkedin} alt="lien linkedin"/>Linkedin</a></li>
                        <li className={`${styles.linkItem} ${styles.link3}`}><a className={styles.link} href="https://twitter.com/AvirKarakitsos" target="_blank" rel="noopener noreferrer"><img height={17} src={twitter} alt="lien twitter"/>X/Twitter</a></li>
                        <li className={`${styles.linkItem} ${styles.link4}`}><a className={styles.link} href="https://www.instagram.com/avir.karakitsos/" target="_blank" rel="noopener noreferrer"><img height={30} src={instagram} alt="lien instagram"/>Instagram</a></li>
                    </ul>
                </section>

                <About/>

                <Skills/>

                <section id="project">
                    <button className="btn">{translate(lang).main.projects.subtitle}</button>
                    <h2 className={`${styles.subtitleProject} subtitle`}>{translate(lang).main.projects.content}</h2>
                    <ul className={styles.filterProject}>
                        {CATEGORIES.map(category => <li key={category._id}
                                                        data-tag={category.name} 
                                                        className="list-filter" 
                                                        onClick={() => handleFilter(category.name, isChecked)}
                                                        >
                                                        <button className={`${styles.buttonFilter} ${tag === category.name ? "" : "color-grey"}`}>{translate(lang).main.projects.categories[category.name]}</button>
                                                    </li>)}                                
                        <li>
                            <input type="checkbox" className={styles.sort} id="sort" name="sort" 
                                checked={isChecked} 
                                onChange={handleCheckboxChange}/>
                            {/* <label htmlFor="sort" className={styles.labelSort}>
                                {isChecked 
                                    ? <><i className="fa-solid fa-arrow-up-wide-short iconeSort"></i><span className={styles.iconeTitle}>{translate(lang).main.projects.sort[1]}</span></>
                                    : <><i className="fa-solid fa-arrow-down-short-wide iconeSort"></i><span className={styles.iconeTitle}>{translate(lang).main.projects.sort[0]}</span></>
                                }
                            </label> */}
                        </li>
                    </ul>
                    <div className={styles.boxContainer}>
                        { table.map(project => <Card key={project._id} project={project}/>) }
                    </div>
                </section>

            </div>
        </main>
    )
}

export default Main