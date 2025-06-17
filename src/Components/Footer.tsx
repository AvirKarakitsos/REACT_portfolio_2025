import styles from '../assets/styles/Footer.module.css'
import { useContext } from "react"
import { LanguageContext } from '../utils/context/LanguageContext'
import logo from '../assets/images/logo_dark.png'
import { translate } from '../utils/common'
import { LanguageContextType } from '../utils/types/context'

function Footer() {
	const {lang} = useContext(LanguageContext) as LanguageContextType

    return(
        <footer id="footer" className={styles.section}>

			<div className={styles.listInfo}>
				<img src={logo} alt="logo" height={50} width={50} />
				<p>{translate(lang).footer.content1}</p>
				<p>{translate(lang).footer.content2}<a href='https://dribbble.com/shots/25614963-Duwy-Personal-Portfolio-Website'>Natasha Belova</a></p>
			</div>
			
			<ul className={styles.listMedia}>
				<li><a href="https://github.com/AvirKarakitsos" target="_blank" rel="noopener noreferrer">github</a></li>
				<li><a href="https://twitter.com/AvirKarakitsos" target="_blank" rel="noopener noreferrer">twitter/X</a></li>
				<li><a href="https://www.linkedin.com/in/arno-c-b9b56531a/" target="_blank" rel="noopener noreferrer">linkedin</a></li>
				<li><a href="https://www.instagram.com/avir.karakitsos/" target="_blank" rel="noopener noreferrer">instagram</a></li>
			</ul>

		</footer>
    )
}

export default Footer