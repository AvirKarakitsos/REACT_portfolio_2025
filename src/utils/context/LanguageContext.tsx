import { createContext, ReactNode, useState } from "react"
import { LanguageContextType } from "../types/context.js";

type LanguageProviderProps = {
    children: ReactNode;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [lang, setLang] = useState(localStorage.getItem("lang") ?? "fr")

    const toggleLanguage = (input: string) => {
        setLang(input)
        localStorage.setItem("lang", input)
    }
 
    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}