import React from 'react';
import styled from 'styled-components';
import DesStack from '../components/comp/stack/DesStack';
import DevStack from '../components/comp/stack/DevStack';
import Htext from '../components/comp/Htext';
import Contact from '../components/layouts/Contact';
import Footer from '../components/layouts/Footer';

const AboutStyle = styled.section`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .stackstyle {
    width: 100%;
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
const About = () => {
  return (
    <AboutStyle>
      <Htext text='About' id='gradient-text' />
      <div className='stackstyle'>
        <DevStack />
        <DesStack />
      </div>
      <Footer />
      <Contact />
    </AboutStyle>
  );
};

export default About;
