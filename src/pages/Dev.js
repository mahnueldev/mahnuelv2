import React from 'react'
import BlueFile from '../svg/BlueFile'
import styled from 'styled-components'
import Htext from '../components/comp/Htext'
import Ptext from '../components/comp/Ptext'
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
    <Ptext id='dt-sty' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam'/>
<DevProjects id='margin-top'/>
    </DevStyle>
  )
}

export default Dev