import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Midsection from './midsection';
import Footer from './footer';
import Bodyp1 from './bodyp1'

const Layout = ({ children }) => (
	<div>
		<Helmet />
    <Bodyp1 />
	</div>
);

export default Layout;
