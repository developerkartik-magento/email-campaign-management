
import React, { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
    
    const [theme, setTheme] = useState("blue");
useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "blue"
        ? "purple"
        : "blue"
    );
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
export function useTheme() {
  return useContext(ThemeContext);
}
