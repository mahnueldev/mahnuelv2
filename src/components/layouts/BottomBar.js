import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import AnimBlueFile from '../../svg/AnimBlueFile';
import AnimOrangeFile from '../../svg/AnimOrangeFile';
import { Link } from 'react-router-dom';
// import Loadmation from '../animation/Loadmation';

const BottomBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: var(--light);
  background: var(--dark-blur);
  position: fixed;
  z-index: 100;
  bottom: 0;
  backdrop-filter: blur(15px);
  /* left: 50%; */

  ul {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    
    li {
      display: block;
      margin-bottom: 10rem;
      transition: 0.3s ease...;
      &:hover {
      }
    }
  }
  p {
    font-size: 18px;
    padding: 1rem;
  }

  .arrow-up {
    top: 0.5rem;
    width: 2rem;
    position: absolute;
    cursor: pointer;
    right: 50%;

    transition: 0.2s;
    transform-origin: center center;
  }

  /* .arrow-down:hover {
    transform: translate(0, -5px);
  }
   */
  .hide-items {
    max-height: 3rem;
    transition: max-height 1s ease-out;
  }
  .nav-items {
    max-height: 20rem;
    transition: max-height 1s ease-in;
    .arrow-up {
      position: absolute;
      top: 0.5rem;
      left: 50%;
      right: 50%;
      display: block;
      margin: 0 0 0 auto;
      width: 2rem;
      cursor: pointer;
      transition: 0.2s;
      transform-origin: center center;
      transform: rotate(180deg);
    }
  }

  .ico-sty {
    margin: 5rem;
    width: 15rem;
    
   
  }
  @media only screen and (max-width: 768px) {
    ul{
      
      width: 40%;
    }
    .ico-sty {
      margin: 8rem 4rem;
    width: 6rem;
  }
}
`;

const BottomBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <BottomBarStyle>
      <ul className={!showNav ? 'navItems hide-items' : 'nav-items'}>
        <div
          className='arrow-up'
          onClick={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <IoIosArrowUp />
        </div>
        <br />
        <br />
        <br />

        <li onClick={() => setShowNav(!showNav)}>
          <div className='ico-sty'>
          <Link to='/dev' >
            <AnimBlueFile />
            </Link>
          </div>
        </li>
        <li onClick={() => setShowNav(!showNav)} >
          <div className='ico-sty'>
          <Link to='/des' >
            <AnimOrangeFile />
            </Link>
          </div>
        </li>
      </ul>
    </BottomBarStyle>
  );
};

export default BottomBar;
