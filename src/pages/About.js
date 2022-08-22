import React from 'react'
import styled from 'styled-components'
import DesStack from '../components/comp/DesStack'
import DevStack from '../components/comp/DevStack'

const AboutStyle =styled.section`
margin-top: 10rem;
display: flex;
justify-content: center;
@media only screen and (max-width: 768px) {
   flex-direction: column;
}

`
const About = () => {
  return (
    <AboutStyle>
    <DevStack/>
    <DesStack/>
    </AboutStyle>
  )
}

export default About