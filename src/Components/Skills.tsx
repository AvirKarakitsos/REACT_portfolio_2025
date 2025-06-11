import styles from '../assets/styles/Skills.module.css'
import { useContext } from 'react'
import { LanguageContext } from '../utils/context/LanguageContext'
import { translate } from '../utils/common'
import { LanguageContextType } from '../utils/types/context'

type SkillsProps = {
    tab: string
}

function Skills({tab}: SkillsProps) {
    const {lang} = useContext(LanguageContext) as LanguageContextType

    return (
        <div className={`${styles.show} ${tab === "about" ? "" : styles.hidden}`}>
            <h2 className="subtitle">{translate(lang).main.skills.subtitle}</h2>

            <div className={styles["skills-container"]}>
                <div className="text-center">
                    <div className='flex direction-column tiny-row-gap-2'>
                        <i className="fa-solid fa-laptop font-size-medium color-grey"></i>
                        <p>client</p>
                    </div>
                    <ul className={styles.list+" no-bullet"}>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="text-center">
                    <div className='flex direction-column tiny-row-gap-2'>
                        <i className="fa-solid fa-server font-size-medium color-grey"></i>
                        <p>{translate(lang).main.skills.server}</p>
                    </div>
                    <ul className={styles.list+" no-bullet"}>
                        <li>Node JS</li>
                        <li>Express JS</li>
                        <li>Fastify</li>
                    </ul>
                </div>
                <div className="text-center">
                    <div className='flex direction-column tiny-row-gap-2'>
                        <i className="fa-solid fa-database font-size-medium color-grey"></i>
                        <p>{translate(lang).main.skills.tools}</p>
                    </div>
                    <ul className={styles.list+" no-bullet"}>
                        <li>mongoDB Atlas</li>
                        <li>mySQL</li>
                    </ul>
                </div>
                </div>
        </div>
    )
}

export default Skills