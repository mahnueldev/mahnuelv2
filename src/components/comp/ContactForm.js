import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { useRef } from 'react';
import MainButton from './MainButton';
import { RiSendPlaneFill } from 'react-icons/ri';

const ContactFormStyle = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 .form-input, textarea{
  min-width: 30rem;
  width: 80%;
 }
 .form-input{
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    border-radius: 10rem;
    background: var(--light-grey);
    margin: 1rem;
    color: var(--dark);
    resize: none;
    outline: none;
    border: none;
  }
  .form-input:focus {
    outline: none;
    box-shadow: 0 3px 10px var(--grey);
  }
  .form-input:active {
    outline: none;
  }
  textarea {
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    border-radius: 1rem;
    background: var(--light-grey);
    margin: 1rem;
    color: var(--dark);
    resize: none;
    outline: none;
    border: none;
    font-family: 'Montserrat', monospace;
    font-weight: 600;
  }
  textarea:focus {
    box-shadow: 0 3px 10px var(--grey);
  }

  /* Button Style */

  /* Mobile View */
  @media only screen and (max-width: 768px) {
    .form-input, textarea{
      max-width: 22rem;
      min-width: 20rem;
     
 }
  }
  /* End of View */
`;

function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_awbp133',
        'template_sbqsclc',
        e.target,
        'HzJZm0M5gmvuosszB'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert('Email sent!');
  };

  return (
    <ContactFormStyle>
      <div className='container'>
        <form ref={form} onSubmit={sendEmail}>
          <input
          className='form-input'
            type='text'
            name='name'
            placeholder='Your full Name'
            required
            
          />
          <input className='form-input' type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required>
            {' '}
          </textarea>
<br/><br/>
          <MainButton
            type='submit'
            value='Send'
            colorname='blackbtn'
            icon={<RiSendPlaneFill className='iconStyles'/> }
          />
        </form>
      </div>
    </ContactFormStyle>
  );
}

export default ContactForm;
