import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    bodyColor: "var(--light)",
    textColor: "var(--dark)",
    btntextColor: "var(--light)",
    buttonColor: "var(--dark)",
   
};
export const darkTheme = {
    bodyColor: "#1a1f42",
    textColor: "var(--light)",
    btntextColor: "var(--dark)",
    buttonColor: "var(--light)",
    gradientText: "linear-gradient(90deg, var(--light),  var(--brand2))"
};

export const GlobalTheme = createGlobalStyle`
body{
    background:${({theme})=> theme.bodyColor};
    color:${({theme})=> theme.textColor};
  }
  #gradient-text {
  background-image:${({theme})=> theme.gradientText};
}
#blackbtn{
  background: ${({theme})=> theme.buttonColor};
  color: ${({theme})=> theme.btntextColor};
 
 }
`

