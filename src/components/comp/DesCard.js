import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import SubButton from './SubButton';


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
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 6.5rem;
  border-radius: 0rem 0rem 2rem 2rem;
  background: var(--white);
  border: 1px solid var(--grey);
  :hover{
  box-shadow: 0px -35px 30px var(--brand2-blur);
  }
  #card-heading {
    font-size: 22px;
    align-items: left;
  }
  .cardinfo-top {
    display: flex;
    width: 30rem;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .cardinfo-bottom{
    display: flex;
    margin-top: 0.5rem;
   width:3rem;
  }
 
  @media only screen and (max-width: 768px) {
    .cardinfo-top {
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
const DesCard = ({ btnvalue, img, vid, title, link, stack }) => {
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
      <CardInfo>
        <div className='cardinfo-top'>
          <h1 id='card-heading'>{title}</h1>
          <SubButton type='type' value={btnvalue} colorname='orangebtn' href={link} />  
        </div>
        <LineDiv />
        <div className='cardinfo-bottom'>
        <div>{stack}</div>
        </div>
      </CardInfo>
    </CardStyle>
  );
};

export default DesCard;
