import React from 'react';
import styled from 'styled-components';

const InputButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 8rem;
  width: 80%;
  height: 3rem;
  border-radius: 2rem;
  color: #fff;
  cursor: pointer;
  :hover > .animate-icon {
    transform: rotate(-18deg);
    transition: 0.2s ease;
  }

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
  .animate-icon {
    width: 1.5rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 7rem;
    width: 80%;
    height: 2.7rem;
    .animate-icon {
      width: 1.2rem;
    }
  }
`;

const InputButton = ({ value, type, icon }) => {
  return (
    <InputButtonStyles id='blackbtn'>
      <input className='btn' value={value} disabled type={type} />
      <div className='animate-icon'>{icon}</div>
    </InputButtonStyles>
  );
};

export default InputButton;
