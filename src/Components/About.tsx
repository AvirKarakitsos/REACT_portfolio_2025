import styles from "../assets/styles/About.module.css"
import { translate } from "../utils/common"
import { useContext } from "react"
import { LanguageContext } from "../utils/context/LanguageContext"
import { LanguageContextType } from "../utils/types/context"


function About() {
    const {lang} = useContext(LanguageContext) as LanguageContextType
    
    return(
        <div id='about-me' className={styles.mainContainer}>
            <button className="btn">{translate(lang).main.about.tab}</button>
            
            <div className={styles.container}>
                
                <div className={styles.leftPart}>
                    <h2 className="subtitle">{translate(lang).main.about.subtitle}</h2>
                    <div className={styles.video}></div>
                </div>
                <div className={styles.rightPart}>
                    <div>
                        <h3 className={"subtitle"}>{translate(lang).main.about.title_1}</h3>
                        <p className="content">{translate(lang).main.about.content_1}</p>
                    </div>
                    <div>
                        <h3 className={"subtitle"}>{translate(lang).main.about.title_2}</h3>
                        <p className="content">{translate(lang).main.about.content_2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About