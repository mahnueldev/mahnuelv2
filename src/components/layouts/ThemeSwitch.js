import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import GlobalThemeContext from '../../context/globalthemeContext';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

const ThemeStyle = styled.section`
  * {
    box-sizing: border-box;
  }
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;

  .checkbox {
    opacity: 0;
    position: absolute;
    /* background:${({ theme }) => theme.bg}; */
  }

  .label {
    background: var(--grey);
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 20px;
    width: 40px;
    transform: scale(1.5);
    transition: transform 0.2s linear;
  }

  .label .ball {
    background: ${({ theme }) => theme.ballColor};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 4px;
    height: 15px;
    width: 15px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(17px);
    background: ${({ theme }) => theme.ballColor};
  }
  .checkbox:checked + .label {
    transition: transform 0.2s linear;
    background: var(--grey);
  }

  .moon {
    color: #fff;
  }

  .sun {
    color: #fff;
  }
`;

const ThemeSwitch = () => {
  const globalthemeContext = useContext(GlobalThemeContext);
  const { setTheme } = globalthemeContext;

  return (
    <ThemeStyle>
      <input
        type='checkbox'
        className='checkbox'
        id='chk'
        onClick={() => setTheme((p) => (p === 'light' ? 'dark' : 'light'))}
      />
      <label className='label' htmlFor='chk'>
        <BsFillMoonFill className='moon' />
        <BsSunFill className='sun' />
        <div className='ball'></div>
      </label>
    </ThemeStyle>
  );
};

export default ThemeSwitch;
