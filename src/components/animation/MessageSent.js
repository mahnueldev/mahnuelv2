import React from 'react';
import Lottie from 'lottie-react';
import msgSent from '../../lottie/msgsent.json';
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

const MessageSent = () => {
  return (
    <AnimStyle>
      <div className='container'>
        <Lottie animationData={msgSent} loop={false} speed={5} />
      </div>
    </AnimStyle>
  );
};

export default MessageSent;
