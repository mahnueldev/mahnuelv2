import React from 'react';
import Htext from '../components/comp/Htext';
import Dynamictext from '../components/comp/Dynamictext';
import MainButton from '../components/comp/MainButton';
import styled from 'styled-components';
import Meetrix from '../images/meetrix.png';
import Ptext from '../components/comp/Ptext';
import BottomBar from '../components/layouts/BottomBar';
import {MdWavingHand} from 'react-icons/md'

const HomeStyle = styled.div`
  display: flex;
  .substyle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 99vh;
    margin-left: 10rem;
    padding: 2rem;
    /* position: relative; */
  }
  .flexy {
    display: flex;
  }
  .left-sec {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 35rem;
  }
  .textpad {
    padding: 1rem 20rem 1rem 0rem;
  }
  /* ********************************************************************* */
  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    .substyle {
      flex-direction: column;
      margin-left: 1rem;
      margin-top: 5rem;
      padding: 0rem;
     
    }

    img {
      margin-top: 5rem;
      width: 20rem;
    }
    .textpad {
      padding: 1rem 0rem;
    }
  }
`;

const Home = () => {
  
  return (
    <HomeStyle>
      <div className='substyle'>
        <div className='left-sec'>
          <Htext text='Hello!' />
          <div className='flexy'>
            <Htext text='I am' spaceRight />
            <Dynamictext id='gradient-text' />
          </div>
          <div className='textpad'>
            <Ptext
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium'
            />
          </div>
          <br />
          <MainButton type='type' value='About' colorname='blackbtn' icon= {<MdWavingHand /> } />
        </div>
        <div className='right-sec'>
          <img src={Meetrix} alt='' />
        </div>
      </div>
      <BottomBar />
    </HomeStyle>
  );
};

export default Home;
