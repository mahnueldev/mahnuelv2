import React from 'react';
import styled from 'styled-components';
import { useTypewriter } from 'react-simple-typewriter';
const DtextStyle = styled.div`
  .h1-span {
    font-size: 42px;
    font-family: 'Source Code Pro', sans-serif;
    font-weight: 700;
    margin-left: ${(props) => (props.spaceLeft ? '2rem' : '0rem')};
    margin-right: ${(props) => (props.spaceRight ? '2rem' : '0rem')};
    @media only screen and (max-width: 768px) {
      font-size: 32px;
      }
  }
`;

const Dynamictext = ({ id, spaceRight = false }) => {
  const { text } = useTypewriter({
    words: ['Mahnuel', 'a Developer', 'a Designer'],
    loop: true, // Infinit
    delaySpeed: 1000,
    typeSpeed: 90,
    deleteSpeed: 60,
  });

  return (
    <DtextStyle spaceRight={spaceRight}>
      <span className='h1-span' id={id}>
        {text}
      </span>
    </DtextStyle>
  );
};

export default Dynamictext;
