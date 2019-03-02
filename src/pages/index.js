import React from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import PageTransition from 'gatsby-plugin-page-transitions';

const IndexPage = () => (
  <PageTransition
    defaultStyle={{
      transition: 'right 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      right: '100%',
      position: 'absolute',
      width: '100%',
    }}
    transitionStyles={{
      entering: { right: '0%' },
      entered: { right: '0%' },
      exiting: { right: '100%' },
    }}
    transitionTime={1000}
  >
    <Layout />
  </PageTransition>
  );

export default IndexPage;
