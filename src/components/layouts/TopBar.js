import React from 'react';
import styled from 'styled-components';
import Htext from '../comp/Htext';
import {Link} from 'react-router-dom'

const TopBarStyle = styled.div`
display: flex;
justify-content: space-between;

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
          <li>About</li>
          </Link>
          <Link to='/contact'>
          <li>Contact</li>
          </Link>
        </ul>
      </div>
    </TopBarStyle>
  );
};

export default TopBar;
