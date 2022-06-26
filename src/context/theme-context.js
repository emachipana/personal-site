import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function changeTheme(theme) {
    setTheme(theme);
  }

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
