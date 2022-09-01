import React from 'react'
import OrangeFile from '../svg/OrangeFile'
import styled from 'styled-components'
import Htext from '../components/comp/Htext'
import DesProjects from '../components/layouts/DesProjects'

const DesStyle = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 7rem;
margin-bottom: 8rem;
.ico-sty{
  width: 5rem;
  margin-bottom: 1rem;
}
#dt-sty{
  padding: 1rem 15rem;
  text-align: center;
}
.htext-sty{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  margin: 0 1rem;
}


/************************************ */
@media only screen and (max-width: 768px) {
  #dt-sty{
    padding: 1rem 1rem;
    text-align: left;
  }
  .ico-sty{
      width: 2.5rem;
    }
}

`


const Des = () => {
  return (
    <DesStyle>
    <div className='ico-sty'>
       <OrangeFile/>
    </div>
    <div className='htext-sty'>
    <Htext text='UX/UI Design' id='gradient-text'/>
    </div>
<DesProjects id='margin-top'/>
    </DesStyle>
  )
}

export default Des