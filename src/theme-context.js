import { createContext, useContext, useState } from "react";
const defaultTheme = { theme: "light" };
const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
