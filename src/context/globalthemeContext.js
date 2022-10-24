import { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalTheme } from '../styling/theme';

const globalthemeContext = createContext(null);
export default globalthemeContext;

export const GlobalThemeProvider = ({ children }) => {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem('theme'))
  };
  const [theme, setTheme] = useState(getTheme());
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <globalthemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalTheme />

        {children}
      </ThemeProvider>
    </globalthemeContext.Provider>
  );
};

// const themeToggler =()=>{
//     theme === "light" ? setTheme("lightTheme") : setTheme("darkTheme");
// }

// <globalthemeContext.Provider value={{theme, setTheme ,themeToggler }}>
//     <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
