import React from 'react';
import styled from 'styled-components';

const HtextStyle = styled.div`
  .h1-span {
    font-size: 42px;
    font-family: 'Source Code Pro', sans-serif;
    font-weight: 700;
    margin-left: ${(props) =>
      props.spaceLeft ? '2rem' : '0rem'};
    margin-right: ${(props) =>
      props.spaceRight ? '2rem' : '0rem'};
  @media only screen and (max-width: 768px) {
    font-size: 32px; 
    }
  }
  
`;

const Htext = ({ text, id, spaceRight = false, spaceLeft = false }) => {
  return (
    <HtextStyle spaceRight={spaceRight} spaceLeft={spaceLeft}>
      <span className='h1-span' id={id} >
        {text}
      </span>
    </HtextStyle>
  );
};

export default Htext;
