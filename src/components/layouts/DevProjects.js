import React from 'react';
import Card from '../comp/DevCard';
import projects from '../data/devprojects';
import styled from 'styled-components';
import { BsGlobe } from 'react-icons/bs';
import { AiFillAndroid } from 'react-icons/ai';


const ProjectsStyle = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  width: 100vw;
  /* gap: 1rem; */
  margin: 3rem 0;
  /**************************************************** */
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: center;
  }
`;

const DevProjects = ({ id }) => {
  return (
    <ProjectsStyle id={id}>
      {projects.map((project, index) => {
        // eslint-disable-next-line
        if (index >= 4) return;
        return (
          <Card
            key={project.index}
            title={project.name}
            img={project.img}
            vid={project.vid}
            desc={project.desc}
            link={project.link}
            btnvalue={project.status === true ? 'Live' : 'Soon!'}
            type={
              project.type === 'web' ? (
                <BsGlobe className='iconStyles' />
              ) : (
                <AiFillAndroid className='iconStyles' />
              )
            }
            stacks={project.stacks }
            github={project.github }
          />
        );
      })}
    </ProjectsStyle>
  );
};

export default DevProjects;
