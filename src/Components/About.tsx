import styles from "../assets/styles/About.module.css"
import { translate } from "../utils/common"
import { useContext } from "react"
import { LanguageContext } from "../utils/context/LanguageContext"
import { LanguageContextType } from "../utils/types/context"

type AboutProps = {
    tab: string
}

function About({tab}: AboutProps) {
    const {lang} = useContext(LanguageContext) as LanguageContextType
    
    return(
        <div className={`${styles.show} ${tab === "about" ? "" : styles.hidden}`}>
            <h2 className="subtitle">{translate(lang).main.about.subtitle}</h2>
            <p className="section-4 line-height">{translate(lang).main.about.content_1}</p>
            <p className="section-4 line-height">{translate(lang).main.about.content_2}</p>
        </div>
    )
}

export default About