import React from 'react'
import SocialMedia from '../comp/SocialMedia'
import styled from 'styled-components'
import CodeBg from '../../images/codebg.png'

const FooterStyle = styled.section`
margin-bottom: 10rem;

backgroundImg{
    width: 100vw;
}
`

const footer = ({img= CodeBg}) => {
  return (
    <FooterStyle >
        <backgroundImg src={img} alt=''/>
        <SocialMedia/>
    
    </FooterStyle>
  )
}

export default footer