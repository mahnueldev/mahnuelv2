import React from 'react'
import BlueFile from '../svg/BlueFile'
import styled from 'styled-components'
import Htext from '../components/comp/Htext'
import DevProjects from '../components/layouts/DevProjects'

const DevStyle = styled.section`
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


const Dev = () => {
  return (
    <DevStyle>
    <div className='ico-sty'>
       <BlueFile/>
    </div>
    <div className='htext-sty'>
    <Htext text='Web & Mobile Development' id='gradient-text'/>
    </div>
   
<DevProjects id='margin-top'/>
    </DevStyle>
  )
}

export default Dev