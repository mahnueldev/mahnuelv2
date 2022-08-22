import React from 'react'
import OrangeFile from '../svg/OrangeFile'
import styled from 'styled-components'
import Htext from '../components/comp/Htext'
import Ptext from '../components/comp/Ptext'
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
    <Ptext id='dt-sty' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam'/>
<DesProjects id='margin-top'/>
    </DesStyle>
  )
}

export default Des