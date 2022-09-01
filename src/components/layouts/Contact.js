import React from 'react'
import ContactForm from '../comp/ContactForm'
import styled from 'styled-components'
import Htext from '../comp/Htext'

const ContactStyle = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10rem 0;
`

const Contact = () => {
  return (
    <ContactStyle>
      <Htext text='Contact' id='gradient-text'/>
      <ContactForm/>
      </ContactStyle>
  )
}

export default Contact