import React from 'react';
import styled from 'styled-components';
import DesStack from '../components/comp/stack/DesStack';
import DevStack from '../components/comp/stack/DevStack';
import Htext from '../components/comp/Htext';
import Contact from '../components/layouts/Contact';
import Footer from '../components/layouts/Footer';
import Meetrix from '../images/meetrix.png';
import Ptext from '../components/comp/Ptext';

const AboutStyle = styled.section`
  margin-top: 8rem;
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
const AboutDiv = styled.div`
  display: flex;
  margin: 2rem 8rem;
  justify-content: center;
  align-items: center;
  img {
    width: 20rem;
    height: 20rem;
    margin-left: 9rem;
  }
  .right-sec {
    padding-left: 10rem;
    margin-right: 9rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 2rem 1rem;
    img {
    width: 14rem;
    height: 14rem;
    margin-left: 0rem;
  }
    .right-sec {
      padding: 2rem 1rem;
      margin-right: 0rem;
      
    }
  }
`;
const About = () => {
  return (
    <AboutStyle>
      <Htext text='About' id='gradient-text' />
      <AboutDiv>
        <div className='left-sec'>
          <img src={Meetrix} alt='' />
        </div>
        <div className='right-sec'>
          <Ptext
            text='My name is Emmanuel Ogbodo; I specialise in building engaging digital experiences. I am passionate about cutting-edge technology, and I love to create aesthetically pleasing interfaces and intuitively implemented UX. And hey..., I can build it with code too 😉.
            I am energetic and positive, a dreamer and an innovator. I love a good challenge. '
          />
        </div>
      </AboutDiv>
      <div className='stackstyle'>
        <DevStack />
        <DesStack />
      </div>

      <Contact />
      <Footer />
    </AboutStyle>
  );
};

export default About;
