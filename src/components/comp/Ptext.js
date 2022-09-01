import React from 'react';
import styled from 'styled-components';

const PtextStyle = styled.div`
 .font-sty{
  line-height: 1.8rem;
}


@media only screen and (max-width: 768px) {
      .font-sty{
        font-size: 14px;
        line-height: 1.5rem;
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
