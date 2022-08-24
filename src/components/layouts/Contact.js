import React from 'react'
import ContactForm from '../comp/ContactForm'
import styled from 'styled-components'
import Htext from '../comp/Htext'

const ContactStyle = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 10rem;
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