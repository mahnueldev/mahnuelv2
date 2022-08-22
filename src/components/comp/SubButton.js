import React from 'react';
import styled from 'styled-components';

const SubButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 6rem;
  width: 80%;
  height: 3rem;
  border-radius: 2rem;
  color: #fff;
  cursor: pointer;
 
  .btn {
    background: inherit;
    color: inherit;
    max-width: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    outline: none;
    border: none;
    cursor: inherit;
    text-align: center;
    transition: 0.3s;
    caret-color: rgba(0, 0, 0, 0);
  }
a, a:hover, a:focus, a:active{
  text-decoration: none;
      color: inherit;
  
}
  @media only screen and (max-width: 768px) {
    max-width: 4.5rem;
    width: 80%;
    height: 2.7rem;
  }
`;

const SubButton = ({ value, type, colorname,href }) => {
  return (
    <SubButtonStyles id={colorname}>
      <a target="blank" href={href}>
      <input className='btn' value={value} type={type} />
      </a>
    </SubButtonStyles>
  );
};

export default SubButton;
