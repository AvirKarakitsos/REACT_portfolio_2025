import styles from "../assets/styles/Information.module.css"
import About from "./About"
import Skills from "./Skills"
import { translate } from "../utils/common"
import { useContext, useState } from "react"
import { LanguageContext } from "../utils/context/LanguageContext"
import { LanguageContextType, ThemeContextType } from "../utils/types/context"
import { ThemeContext } from "../utils/context/ThemeContext"

function Information() {
    const [tab, setTab] = useState("about")
    const {lang} = useContext(LanguageContext) as LanguageContextType
    const {theme} = useContext(ThemeContext) as ThemeContextType

    return(
        <section className={styles.container}>

            <ul className={styles.list}>
                <li className={`${theme === "light" ? "bg-light-1" : "bg-darker-2"} ${tab === "about" ? styles.itemSelected : styles.item}`} onClick={() => setTab("about")}>{translate(lang).main.about.tab}</li>
                <li className={` ${theme === "light" ? "bg-light-1" : "bg-darker-2"} ${tab === "skills" ? styles.itemSelected : styles.item}`} onClick={() => setTab("skills")}>{translate(lang).main.skills.tab}</li>
            </ul>

            <div className={`relative ${styles.content} ${tab === "about" ? styles.contentAbout : ""}  ${theme === "light" ? "bg-light-1" : "bg-darker-2"}`}>
                <About tab={tab}/>
                <Skills tab={tab}/>
            </div>
            
        </section>
    )
}

export default Information