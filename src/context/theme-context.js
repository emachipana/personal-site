import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function changeTheme() {
    if(theme === "dark") return setTheme("light");
    setTheme("dark");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme
      }}
    >
      { children }
    </ThemeContext.Provider>
  )
};

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
