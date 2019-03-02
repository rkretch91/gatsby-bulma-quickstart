import React from 'react';

import Projects from '../components/projects-page';
import Header from '../components/header';
import PageTransition from 'gatsby-plugin-page-transitions';

const ProjectPage = () => (
  <PageTransition
  defaultStyle={{
    transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
    left: '100%',
    position: 'absolute',
    width: '100%',
  }}
  transitionStyles={{
    entering: { left: '0%' },
    entered: { left: '0%' },
    exiting: { left: '100%' },
  }}
  transitionTime={500}
>
    <Header />
    <Projects />
</PageTransition>
)

export default ProjectPage;
