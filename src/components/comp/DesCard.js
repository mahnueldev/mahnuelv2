import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import SubButton from './SubButton';
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobexd,
  SiFigma,
} from 'react-icons/si';
import { AiOutlineInfoCircle } from 'react-icons/ai';

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
    color: var(--grey);
    margin: 1rem 0;
  }
  /******************************* */
  /* STACK COLORS */
  #stack-size {
    width: 1.5rem;
    margin: 0 0.3rem;
  }
  .photoshop:hover {
    color: #2f9ff2;
  }
  .illustrator:hover {
    color: #f29200;
  }
  .figma:hover {
    color: #f26c5d;
  }
  .xd:hover {
    color: #f25cea;
  }
  .aftereffects:hover {
    color: #9191f2;
  }
  /******************************* */
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
    box-shadow: 0px -35px 30px var(--brand2-blur);
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
  photoshop: <SiAdobephotoshop className='photoshop' id='stack-size' />,
  illustrator: <SiAdobeillustrator className='illustrator' id='stack-size' />,
  figma: <SiFigma className='figma' id='stack-size' />,
  xd: <SiAdobexd className='xd' id='stack-size' />,
  aftereffects: (
    <SiAdobeaftereffects className='aftereffects' id='stack-size' />
  ),
};

const DesCard = ({ btnvalue, img, vid, title, link, stacks, desc }) => {
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
        </div>
      </CardDescription>
      <CardInfo>
        <div className='cardinfo-top'>
          <h1 id='card-heading'>{title}</h1>
          <SubButton
            type='type'
            value={btnvalue}
            colorname='orangebtn'
            href={link}
          />
        </div>
        <LineDiv />
        <div className='cardinfo-bottom'>
          <div> </div>
          <div>
            <AiOutlineInfoCircle onClick={() => setShowDesc(!showDesc)} />
          </div>
        </div>
      </CardInfo>
    </CardStyle>
  );
};

export default DesCard;
