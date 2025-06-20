import styles from '../assets/styles/Header.module.css'
import logo1 from '../assets/images/logo_light.png'
import logo2 from '../assets/images/logo_dark_mode.png'
import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/context/ThemeContext.js'
import { LanguageContext } from '../utils/context/LanguageContext.js'
import { translate } from '../utils/common.js'
import { LanguageContextType, ThemeContextType } from '../utils/types/context.js'
  

function Header() {
	const {theme, toggleTheme} = useContext(ThemeContext) as ThemeContextType
	const {lang, toggleLanguage} = useContext(LanguageContext) as LanguageContextType
	const [open, setOpen] = useState(false)

	function switchColor(input: string) {
		let color = null
		if(input === "light") color = "border-black"
		else if(input === "dark") color = "border-white"
		return color
	}
	
    return (
        <header className={`${styles.header} ${theme === "light" ? "bg-light-1" : "bg-darker-1 color-white"}`}>
			{theme === "light"
				? <img height={40} src={logo1} alt="logo"/>
				: <img height={40} src={logo2} alt="logo"/>
			}

			<nav className={styles.navbar}>	
				<ul className={!open 
					? `${styles.listNavbar}  ${styles.anchor} ${theme === "light" ? "bg-light-1" : "bg-darker-2"}`
					: `${styles.listNavbar}  ${styles.anchor} ${styles.slide} ${theme === "light" ? "bg-light-1" : "bg-darker-2"}`}>
					<li><a className="no-decoration" href='#about-me'>{translate(lang).header.about}</a></li>
					<li><a className="no-decoration" href='#skill'>{translate(lang).header.skill}</a></li>
					<li><a className="no-decoration" href='#project'>{translate(lang).header.projects}</a></li>
				</ul>
			</nav>
				
			<div className={styles.options}>
				<ul className={styles.listLang}>
					<li className={`${styles.itemLang} ${lang === "fr" ? switchColor(theme) : ""}`} onClick={() => toggleLanguage("fr")}><button className="no-border">FR</button></li>
					<li className={`${styles.itemLang} ${lang === "en" ? switchColor(theme) : ""}`} onClick={() => toggleLanguage("en")}><button className="no-border">EN</button></li>
				</ul>

				<ul className={styles.listMode}>
					{theme === "light"
						? <li><button  onClick={() => toggleTheme("dark")} className={`${styles.itemMode}`}><i className="fa-regular fa-moon"></i>{translate(lang).header.mode}</button></li>
						: <li><button onClick={() => toggleTheme("light")}  className={`${styles.itemMode} bg-light-1 color-black`}><i className="fa-solid fa-sun color-black"></i>{translate(lang).header.mode}</button></li>
					}
					<li className={styles.buttonContainer}>
						<button
							className={`${styles.button}`}
							onClick={() => setOpen((value) => !value)}
						>
							<i className="fa-solid fa-bars"></i>
						</button>
					</li>
				</ul>
			</div>

        </header>
    )
}

export default Header