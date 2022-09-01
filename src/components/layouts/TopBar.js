import React from 'react';
import styled from 'styled-components';
import Htext from '../comp/Htext';
import {Link} from 'react-router-dom'
import {FcAbout} from 'react-icons/fc'

const TopBarStyle = styled.div`
display: flex;
justify-content: space-between;
position: fixed;
top: 0rem;
z-index: 100;

background:var(--dark);
padding: 1rem;
width: 100vw;
ul{
    display: flex;   
}
li{
    margin: 0 2rem;
    color: var(--light);
}
#h-sty{
    color: var(--light);
    font-size: 18px;
    letter-spacing: 2px;
}

`;

const TopBar = () => {
  return (
    <TopBarStyle>
      <div>
        <Link to='/'>
        <Htext text='Mahnuel'id='h-sty'/>
         </Link>
         </div>
      <div>
        <ul>
          <Link to='/about'>
          <li><FcAbout/></li>
          </Link>
         
        </ul>
      </div>
    </TopBarStyle>
  );
};

export default TopBar;
