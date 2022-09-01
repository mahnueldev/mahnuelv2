import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    bodyColor: "var(--light)",
    textColor: "var(--dark)",
   
};
export const darkTheme = {
    bodyColor: "hsl(231,82%,15%)",
    textColor: "var(--light)",
};

export const GlobalTheme = createGlobalStyle`
body{
    background:${({theme})=> theme.bodyColor};
    color:${({theme})=> theme.textColor};
  }
`

