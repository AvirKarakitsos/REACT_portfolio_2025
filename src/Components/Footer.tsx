import styles from '../assets/styles/Footer.module.css'
import background from '../assets/images/footer-bg.jpg'
import smallUrl from '../assets/images/footer-bg-small.jpg'
import { useContext } from "react"
import { ThemeContext } from "../utils/context/ThemeContext"
import { LanguageContext } from '../utils/context/LanguageContext'
import { translate } from '../utils/common'
import { LanguageContextType, ThemeContextType } from '../utils/types/context'

function Footer() {
	const {theme} = useContext(ThemeContext) as ThemeContextType
	const {lang} = useContext(LanguageContext) as LanguageContextType

    return(
        <footer id="footer" className={`${styles.section}  ${theme === "light" ? "" : "bg-darker-2 color-white"}`}>

			<p className="footer-contact">{translate(lang).footer.contact} : arnocotso8@gmail.com</p>
			
			<ul className="flex small-column-gap no-bullet">
				<li><a href="https://github.com/AvirKarakitsos" target="_blank" rel="noopener noreferrer">github</a></li>
				<li><a href="https://twitter.com/AvirKarakitsos" target="_blank" rel="noopener noreferrer">twitter/X</a></li>
				<li><a href="https://www.linkedin.com/in/arno-c-b9b56531a/" target="_blank" rel="noopener noreferrer">linkedin</a></li>
			</ul>

			<picture>
                <source media="(max-width: 750px)" srcSet={smallUrl}/>
                <img className={`${styles.image} ${theme === "light" ? styles.light : styles.black}`} src={background} alt='paysage avec un voilier'/>
            </picture>
			
		</footer>
    )
}

export default Footer