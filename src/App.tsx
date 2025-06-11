import { ThemeProvider } from './utils/context/ThemeContext.js';
import { LanguageProvider } from './utils/context/LanguageContext.js';

import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Main from './Components/Main.js';

function App() {

  return (
	<ThemeProvider>
		<LanguageProvider>
			<Header/>
			<Main/>
			<Footer/>
		</LanguageProvider>
	</ThemeProvider>
  )
}

export default App
