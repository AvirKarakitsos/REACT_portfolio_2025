import { createContext, ReactNode, useState } from "react"
import { ThemeContextType } from "../types/context.js";

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState(localStorage.getItem("mode") ?? "light")
    const toggleTheme = (input: string) => {
        setTheme(input)
        localStorage.setItem("mode", input)
    }
 
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}