import React from 'react';
import styled from 'styled-components';

const PtextStyle = styled.div`
 .font-sty{
  line-height: 1.5rem;
}


@media only screen and (max-width: 768px) {
      .font-sty{
        font-size: 12px;
        line-height: 1.2rem;
      }
    }
`;

const Ptext = ({ text, id }) => {
  return (
    <PtextStyle>
      <p className='font-sty' id={id}>
        {text}
      </p>
    </PtextStyle>
  );
};

export default Ptext;
