import styles from '../assets/styles/Skills.module.css'
import { useContext } from 'react'
import { LanguageContext } from '../utils/context/LanguageContext'
import { translate } from '../utils/common'
import { LanguageContextType } from '../utils/types/context'
import Information from './Information'


function Skills() {
    const {lang} = useContext(LanguageContext) as LanguageContextType

    return(
        <div id='skill' className={styles.mainContainer}>
            <div className="btn">{translate(lang).main.skills.tab}</div>
            
            <div className={styles.container}>
                
                <div className={styles.leftPart}>
                    <h2 className="subtitle">{translate(lang).main.skills.subtitle}</h2>
                    <p className={styles.subcontent}>{translate(lang).main.skills.content}</p>
                </div>
                <div className={styles.rightPart}>
                    <Information skill="client"/>
                    <Information skill="server"/>
                    <Information skill="tools"/>
                    <Information skill="soft"/>
                </div>
            </div>
        </div>
    )
       
}

export default Skills