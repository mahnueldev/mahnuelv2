import React from 'react';
import Lottie from 'lottie-react';
import load from '../../lottie/load.json';
import styled from 'styled-components';

const AnimStyle = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 100vh;
  }
  @media only screen and (max-width: 768px) {
  }
`;

const Loadmation = () => {
  return (
    <AnimStyle>
      <div className='container'>
        <Lottie animationData={load} loop={true} speed={5} />
      </div>
    </AnimStyle>
  );
};

export default Loadmation;
