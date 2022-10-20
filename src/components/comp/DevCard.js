import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import SubButton from './SubButton';
import { AiFillHtml5, AiOutlineInfoCircle } from 'react-icons/ai';
import { DiReact, DiCssTricks, DiMysql, DiNodejsSmall } from 'react-icons/di';
import { SiMongodb, SiJavascript, SiFirebase, SiNextdotjs } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { BiServer } from 'react-icons/bi';

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  border-radius: 2rem 2rem 0rem 0rem;
  align-items: center;
  margin: 1rem;

  @media only screen and (max-width: 768px) {
    width: 90%;
    margin: 0.5rem;
  }
`;
const CardMedia = styled.div`
  width: inherit;
  height: 15rem;
  border-radius: 2rem 0rem 0rem 0rem;
  background: var(--grey);

  img,
  .card-image-sty {
    border-radius: inherit;
  }

  .react-player {
    border-radius: inherit;
    /* position: relative; */
    transform: translate(0, -101.8%);
  }
  /********************************** */
  @media only screen and (min-width: 920px) {
    height: 14rem;
  }
  @media only screen and (max-width: 768px) {
    height: 19rem;
  }
`;

const CardDescription = styled.div`
  background: var(--light-grey);
  width: inherit;
  
  .show-desc {
    display: flex;
    flex-direction: column;
    width: inherit;
    padding: 1rem;
    
  }
  .hide-show-desc {
    display: none;
  }
  #stack-flex {
    display: flex;
    color: var(--dark);
    margin: 1rem 0;
  }
  /******************************* */
  /* STACK COLORS */
  #stack-size {
    width: 1.5rem;
    margin: 0 0.3rem;
  }
  .html:hover {
    color: #dd4b25;
  }
  .css:hover {
    color: #2853de;
  }
  .javascript:hover {
    color: #e4d04b;
  }
  .react:hover {
    color: #46caf2;
  }
  .react-native:hover {
    color: #1589c8;
  }
  .server:hover {
    color: #e83412;
  }
  .nextjs:hover {
    color: #616165;
  }
  .nodejs:hover {
    color: #62965d;
  }
  .firebase:hover {
    color: #f2c12a;
  }
  .mongodb:hover {
    color: #00e15f;
  }
  .mysql:hover {
    color: #005c83;
  }
  /***************************************** */
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 6.5rem;
  border-radius: 0rem 0rem 2rem 2rem;
  background: ${({theme})=> theme.bodyColor};
  border: 1px solid var(--grey);
  :hover {
    box-shadow: 0px -35px 30px var(--brand1-blur);
  }
  #card-heading {
    font-size: 22px;
    align-items: left;
  }
  .cardinfo-top {
    display: flex;
    width: 30rem;
    margin-bottom: 0.3rem;
    justify-content: space-between;
    align-items: center;
  }
  .cardinfo-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    width: 30rem;
  }

  @media only screen and (max-width: 768px) {
    .cardinfo-top {
      width: 16rem;
    }
    .cardinfo-bottom {
      width: 16rem;
    }
  }
`;
const LineDiv = styled.div`
  max-width: 100vw;
  width: 90%;
  height: 0.1px;
  background: var(--grey);
  opacity: 0.3;
  /******************************************* */
`;
/**************************************************** */
const icons = {
  html: <AiFillHtml5 className='html' id='stack-size' />,
  css: <DiCssTricks className='css' id='stack-size' />,
  javascript: <SiJavascript className='javascript' id='stack-size' />,
  react: <DiReact className='react' id='stack-size' />,
  'react-native': (
    <TbBrandReactNative className='react-native' id='stack-size' />
  ),
  server: <BiServer className='server' id='stack-size' />,
  nextjs: <SiNextdotjs className='nextjs' id='stack-size' />,
  nodejs: <DiNodejsSmall className='nodejs' id='stack-size' />,
  firebase: <SiFirebase className='firebase' id='stack-size' />,
  mongodb: <SiMongodb className='mongodb' id='stack-size' />,
  sql: <DiMysql className='mysql' id='stack-size' />,
};

const Card = ({
  type,
  btnvalue,
  img,
  vid,
  title,
  link,
  stacks,
  desc,
  github,
}) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <CardStyle>
      <CardMedia>
        <img src={img} alt='' className='card-img-sty' />

        <ReactPlayer
          className='react-player'
          url={vid}
          poster={img}
          type='video.mp4'
          width='100%'
          height='100%'
          loop={true}
          playing={true}
        />
      </CardMedia>
      <CardDescription>
        <div
          className={!showDesc ? 'hide-show-desc' : 'show-desc'}
          tabIndex={0}
        >
          <div style={{color: 'var(--dark)'}}>{desc}</div>
          <div id='stack-flex'>
            {stacks.map((stack, index) => icons[stack])}
          </div>
          <a target='blank' href={github}>
            <p style={{ color: '#e83412', textDecoration: 'underline' }}>
              Github
            </p>
          </a>
        </div>
      </CardDescription>
      <CardInfo>
        <div className='cardinfo-top'>
          <h1 id='card-heading'>{title}</h1>
          <SubButton
            type='type'
            value={btnvalue}
            colorname='bluebtn'
            href={link}
          />
        </div>
        <LineDiv />
        <div className='cardinfo-bottom'>
          <div>{type}</div>
          <div>
            <AiOutlineInfoCircle onClick={() => setShowDesc(!showDesc)} />
          </div>
        </div>
      </CardInfo>
    </CardStyle>
  );
};

export default Card;
