import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();


function DarkModeProvider({ children }) {

    const [isDarkMode, setIsDarkMode] = useState(false);
    function toggleDarkMode() {
        setIsDarkMode(isDarkMode => !isDarkMode);
    }
    useEffect(function () {
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
            document.documentElement.classList.remove('light-mode');
        }
        else {
            document.documentElement.classList.add('light-mode');
            document.documentElement.classList.remove('dark-mode');
        }
    }, [isDarkMode])
    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
    </DarkModeContext.Provider>
}



function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined) throw new Error('Using Context Values OutSide the Context Provider area');
    return context
}

export { useDarkMode, DarkModeProvider }