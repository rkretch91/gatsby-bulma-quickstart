import React from 'react';

import About from '../components/about-page';
import Header from '../components/header';
import PageTransition from 'gatsby-plugin-page-transitions';

class AboutPage extends React.Component {
  render() {
    const title = "About"
    return (
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
  transitionTime={1000}
>
    <Header title={title} />
    <About />
</PageTransition>
)
  }
}

export default AboutPage;
