import React from 'react';
import styled from 'styled-components';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiAdobexd, SiFigma } from 'react-icons/si';
import DesExtraStack from './DesExtraStack';

const DesStackStyle = styled.section`
  width: 29rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p{
    font-size: 14px;
  }
  @media only screen and (max-width: 768px) {
      width: 23rem;
      p{
        font-size: 12px;
      }
    }
  #stack-title {
    margin-bottom: 1rem;
    text-align: center;
  }
  #stack-slider {
    display: flex;
    flex-direction: row;
    align-content: stretch;
    position: relative;
    width: 100%;
    height: 50px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  #stack-slider::before {
    content: ' ';
    position: absolute;
    height: 1px;
    width: 100%;
    width: calc(100% * (4 / 5));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--gradient);
  }
  #stack-sliderinput,
  #stack-sliderlabel {
    box-sizing: border-box;
    flex: 1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  #stack-slider label {
    display: inline-block;
    position: relative;
    width: 20%;
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  #stack-slider  #divname::before {
    content: '';
    /* position: absolute; */
    /* left: 50%; */
    padding-top: 50px;
    padding-left: 60px;
    transform: translate(-50%, 45px);
    /* font-size: 14px; */
    /* letter-spacing: 0.4px; */
    /* font-weight: 400; */
    white-space: nowrap;
    opacity: 0.2;
    transition: all 0.15s ease-in-out;
  }
  #stack-slider label::after {
    content: ' ';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border: 1px solid var(--grey);
    background: var(--light);
    border-radius: 50%;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 1;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }
  #stack-slider label:hover::after {
    transform: translate(-50%, -50%) scale(1.25);
  }
  #stack-slider input {
    display: none;
  }
  #stack-sliderinput:checked + label::before {
    width: 8rem;
    opacity: 1;
  }
  #stack-slider input:checked + label,#divname::after {
    border-width: 1px;
    transform: scale(1.2);
    transition: 0.5s;
  }
  #stack-slider input:checked ~ #dot {
    opacity: 1;
  }
  #stack-slider input:checked:nth-child(1) ~ #dot {
    left: 10%;
  }
  #stack-slider input:checked:nth-child(3) ~ #dot {
    left: 30%;
  }
  #stack-slider input:checked:nth-child(5) ~ #dot {
    left: 50%;
  }
  #stack-slider input:checked:nth-child(7) ~ #dot {
    left: 70%;
  }
  #stack-slider input:checked:nth-child(9) ~ #dot {
    left: 90%;
  }
  #stack-slider #dot {
    display: block;
    position: absolute;
    top: 50%;
    width: 22px;
    height: 22px;
    background: var(--brand2);
    border-radius: 50%;
    transition: all 0.15s ease-in-out;
    transform: translate(-50%, -50%);
    border: 2px solid var(--light);
    opacity: 0;
    z-index: 2;
  }
  #stack-slider input + label::before {
    transform: translate(-50%, 45px) scale(0.9);
    transition: all 0.15s linear;
  }
  #stack-slider input:checked + label::before {
    transform: translate(-50%, 45px) scale(1.1);
    transition: all 0.15s linear;
  }

  #divname {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 2rem;
    margin-left: 2rem;
    
  }
`;
const DesStack = () => {
  return (
    <DesStackStyle>
      <h1 id='stack-title'>Design Stack</h1>
      <div id='stack-slider'>
        <input type='radio' name='stack-name' id='1b' value='1b' />
        <label htmlFor='1b'>
          <div id='divname'>
            <SiAdobephotoshop className='iconStyles'/>
            <p>Photoshop</p>
          </div>
        </label>
        <input type='radio' name='stack-name' id='2b' value='2b' />
        <label htmlFor='2b'>
          <div id='divname'>
            <SiAdobeillustrator className='iconStyles'/>
            <p>illustrator</p>
          </div>
        </label>
        <input type='radio' name='stack-name' id='3b' value='3b' />
        <label htmlFor='3b'>
          <div id='divname'>
            <SiAdobeaftereffects className='iconStyles'/>
            <p>AfterEffects</p>
          </div>
        </label>
        <input type='radio' name='stack-name' id='4b' value='4b' />
        <label htmlFor='4b'>
          <div id='divname'>
            <SiAdobexd className='iconStyles'/>
            <p>XD</p>
          </div>
        </label>
        <input type='radio' name='stack-name' id='5b' value='5b' />
        <label htmlFor='5b'>
          <div id='divname'>
            <SiFigma className='iconStyles'/>
            <p>Figma</p>
          </div>
        </label>
       
        
        <div id='dot'></div>
      </div>
      <br/><br/> <br/><br/>
      <DesExtraStack/>
    </DesStackStyle>
  );
};

export default DesStack;
