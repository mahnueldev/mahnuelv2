import React from 'react';
import Lottie from 'lottie-react';
import msgFailed from '../../lottie/msgfailed.json';
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

const MessageFailed = () => {
  return (
    <AnimStyle>
      <div className='container'>
        <Lottie animationData={msgFailed} loop={false} speed={5} />
      </div>
    </AnimStyle>
  );
};

export default MessageFailed;
