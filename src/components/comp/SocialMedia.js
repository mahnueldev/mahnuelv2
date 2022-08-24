import React from 'react';
import styled from 'styled-components';
import { BsGithub, BsBehance, BsLinkedin } from 'react-icons/bs';

const SocialMediaStyle = styled.div`
  display: flex;
  width: 15rem;
  height: 4rem;
  border-radius: 7.5rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  background: var(--gradient);

  .mediaicons {
    color: var(--light);
    width: 1.5rem;
  }

  .mediaicons:hover {
    color: var(--grey);
  }
  @media only screen and (max-width: 768px) {
    height:3rem;
    .mediaicons {
    width: 1.2rem;
  }
  }
`;

const SocialMedia = () => {
  return (
    <SocialMediaStyle>
      <a
        className='mediaicons'
        href='https://github.com/mahnueldev'
        rel='noreferrer'
        target='_blank'
      >
        <BsGithub />
      </a>
      <a
        className='mediaicons'
        href='https://www.behance.net/emmanuelogbodo'
        rel='noreferrer'
        target='_blank'
      >
        <BsBehance />
      </a>
      <a
        className='mediaicons'
        href='https://www.linkedin.com/in/emmanuel-ogbodo-668578123/'
        rel='noreferrer'
        target='_blank'
      >
        <BsLinkedin />
      </a>
    </SocialMediaStyle>
  );
};

export default SocialMedia;
