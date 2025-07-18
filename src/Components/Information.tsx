import styles from "../assets/styles/Information.module.css"
import { translate } from "../utils/common"
import { useContext } from "react"
import { LanguageContext } from "../utils/context/LanguageContext"
import { LanguageContextType } from "../utils/types/context"


type InformationProps = {
    skill: string
}

function Information({skill}: InformationProps) {
    const {lang} = useContext(LanguageContext) as LanguageContextType

    function switchSkill(input: string) {
        const result = {title:"", content:""}
        switch(input) {
            case "client":
                result.title = translate(lang).main.skills.client.title
                result.content = translate(lang).main.skills.client.content
                break
            case "server":
                result.title = translate(lang).main.skills.server.title
                result.content = translate(lang).main.skills.server.content
                break
            case "tools":
                result.title = translate(lang).main.skills.tools.title
                result.content = translate(lang).main.skills.tools.content
                break
            case "soft":
                result.title = translate(lang).main.skills.soft.title
                result.content = translate(lang).main.skills.soft.content
                break
            default: break
        }
        return result
    }

    return(
        <section className={styles.container}>
            <div className={styles.border}></div>
            <h3 className={`${styles.title}`}>{switchSkill(skill).title}</h3>
            <p className={styles.content}>
                {switchSkill(skill).content}
                {skill === "soft"
                    ? <a href="https://my.assessfirst.com/public/profile/zhnpc3rm-arno-cotsoyannis?lang=fr-FR">profile</a>
                    : null
                }
            </p>        
        </section>
    )
}

export default Information