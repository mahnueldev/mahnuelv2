import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }
  
:root{
  --brand1: #0F2395; 
  --brand1-light: #407bff; 
  --brand1-blur: rgba(15,35,149,0.3);
  --brand2: #E87A51;
  --brand2-light: #FBBDA7;
  --brand2-blur: rgba(220,149,149,0.3);
  --light: #FBFBFB;
  --dark: #3A3A3A;
  --dark-blur: rgba(0,0,0,0.3);
  --grey: #A4A4A4;
  --light-grey: #eeeeec;
  --gradient: linear-gradient(90deg, var(--brand1),  var(--brand2));

}   

  
html{
    font-size: 16px;
    font-family: 'Montserrat', monospace;
    font-weight: 300;
    color: var(--black);
    max-width: 100%;
    overflow-x: hidden;
}
h1 {
  font-weight: 700;
  font-family: 'Source Code Pro', sans-serif;
}
  ul{
    margin: 0 auto;
    list-style: none;
    
    
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .iconStyles{
  color: var(--grey); 
  width: 1.5rem;  
}
#gradient-text {
  background-image:var(--gradient);
  -webkit-background-clip: text;
  color: transparent;
}
.space-left{
  margin-left: 2rem;
}
.space-right{
  margin-right: 2rem;
}

/* Button Color */
#blackbtn{
  background: var(--dark);
  transition: 0.2s;
  box-shadow: 0 3px 10px var(--dark-blur);
 }
#bluebtn{
  background: var(--brand1);
  transition: 0.2s;
  :hover {
    box-shadow: 0 3px 10px var(--brand1);
    background: var(--gradient);
  }
 }
 
#orangebtn{
  background: var(--brand2);
transition: 0.2s;
  :hover {
    box-shadow: 0 3px 10px var(--brand2);
    background: var(--gradient);
  }

 }
#gradientbtn{
  background: var(--gradient);
 }

 #margin-top{
  margin-top: 15rem;
 }
 /**************************************** */
 /* Svg styling */
 
    
  .st0 {
    fill:var(--brand1-light)
  }
  .st1{
    fill:var(--brand1)
  }
  .st2{
    opacity:.7;
    fill:var(--light)
  }
  .st3{
    opacity:.4
  }
  .st4{
    opacity:.8;
    fill:var(--light)
  }
  /*********************/
  .sv0{
    fill:var(--brand2-light);
  }
  .sv1{
    fill:var(--brand2)
  }
  .sv2{
    opacity:.7;
    fill:var(--light)
  }
  .sv3{
    opacity:.4
  }
  .sv4{
    opacity:.8;
    fill:var(--light)
  }
        
/**************************************** */
@media only screen and (max-width: 768px) {
  h1{
    font-size: 18px;
  }
  #margin-top{
  margin-top: 5rem;
 }
    }
`;
export default GlobalStyles;
