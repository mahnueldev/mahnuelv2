import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { RiSendPlaneFill } from 'react-icons/ri';
import MessageSent from '../animation/MessageSent';
import MessageFailed from '../animation/MessageFailed';
import Ptext from './Ptext';

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
  .form-input,
  textarea {
    min-width: 30rem;
    width: 80%;
  }
  .form-input {
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
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: blue;
    gap: 1rem;
    max-width: 8rem;
    width: 80%;
    height: 3rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    transition: 0.3s;
    :hover > .animate-icon {
    transform: rotate(-18deg);
    transition: 0.2s ease;
  }
    
  }
  .btn:focus {
    outline: none;
    box-shadow: none;
  }

  /* Mobile View */
  @media only screen and (max-width: 768px) {
    .form-input,
    textarea {
      max-width: 22rem;
      min-width: 20rem;
    }
  }
  /* End of View */
`;

function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };
  
  const [status, setStatus] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
   const {REACT_APP_SERVICEID,REACT_APP_TEMPLATEID,REACT_APP_PRIVATEKEY} = process.env
    emailjs
      .sendForm(
        `${REACT_APP_SERVICEID}`,
       `${REACT_APP_TEMPLATEID}`,
        e.target,
        `${REACT_APP_PRIVATEKEY}`
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setValues({
            name: '',
            email: '',
            message: '',
          });
          setStatus('SUCCESS');
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };
  useEffect(() => {
    if (status === 'SUCCESS' || 'FAILED') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

 

  const renderAlert = () => (
    <div className='anime-center'>
      {(status === 'SUCCESS') ? <MessageSent /> : <MessageFailed />}
     
        
    </div>
  );

  return (
    <>
      {status && renderAlert()}
      <ContactFormStyle>
        <div className='container'>
          <form onSubmit={sendEmail}>
            <input
            // value={values.name}
              handleChange={handleChange}
              className='form-input'
              type='text'
              name='name'
              placeholder='Your full Name'
              required
            />
            <input
              handleChange={handleChange}
              className='form-input'
              type='email'
              name='email'
              placeholder='Your Email'
              required
            />
            <textarea
              handleChange={handleChange}
              name='message'
              rows='7'
              type='text'
              placeholder='Your Message'
              required
            >
              {' '}
            </textarea>
            <br />
            <br />
            <button id= 'blackbtn' className='btn' type='submit' colorname='blackbtn'>
              <Ptext text='Send' />
              <RiSendPlaneFill className='iconStyles animate-icon' />
            </button>
          </form>
        </div>
      </ContactFormStyle>
    </>
  );
}

export default ContactForm;
