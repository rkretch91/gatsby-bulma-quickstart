import React from 'react';
import { FaGithub } from 'react-icons/fa';
import heart from '../images/heart.png';
import ProjectPage from '../pages/projects'
import AboutPage from '../pages/about'

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';

const Header = props => (
  <div className="is-flex is-horizontal-center">
    <h1 className="is-size-1 has-text-centered pacifico header">{props.title}</h1>
    <img src={heart} className="image is-32x32 knudge" />
  </div>
);

export default Header;
