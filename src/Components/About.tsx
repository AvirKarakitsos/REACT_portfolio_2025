import styles from "../assets/styles/About.module.css"
import { translate } from "../utils/common"
import { useContext, useEffect, useRef } from "react"
import { LanguageContext } from "../utils/context/LanguageContext"
import { LanguageContextType } from "../utils/types/context"
import clip from "../assets/videos/clip.mp4"

function About() {
    const {lang} = useContext(LanguageContext) as LanguageContextType
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            console.log(videoRef.current)
            videoRef.current.volume = 0.2;
        }
    }, []);
    
    return(
        <div id='about-me' className={styles.mainContainer}>
            <div className="btn">{translate(lang).main.about.tab}</div>
            
            <div className={styles.container}>
                
                <div className={styles.leftPart}>
                    <h2 className="subtitle">{translate(lang).main.about.subtitle}</h2>
                    <video ref={videoRef} className={styles.video} controls>
                        <source src={clip} type="video/mp4" />
                    </video>
                </div>
                <div className={styles.rightPart}>
                    <div>
                        <h3 className="subtitle">{translate(lang).main.about.title_1}</h3>
                        <p className={styles.content}>{translate(lang).main.about.content_1}</p>
                    </div>
                    <div>
                        <h3 className="subtitle">{translate(lang).main.about.title_2}</h3>
                        <p className={styles.content}>{translate(lang).main.about.content_2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About