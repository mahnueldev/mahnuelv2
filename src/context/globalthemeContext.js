import { createContext, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalTheme } from '../styling/theme'

const globalthemeContext = createContext();
export default globalthemeContext;

export const GlobalThemeProvider = ({ children }) => {
    const [theme, setTheme] = localStorage.getItem('theme', 'light');
    const themeToggler =()=>{
        theme === "light" ? setTheme("lightTheme") : setTheme("darkTheme");
        
    } 

  


  return (
    <globalthemeContext.Provider value={{theme, setTheme, themeToggler  }}>
       <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
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
     
