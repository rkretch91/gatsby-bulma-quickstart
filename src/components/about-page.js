import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

import './style.scss';

import ryan from '../images/mask-man.jpg';

library.add(faArrowCircleRight)

const About = () => (
  <div>
    <div className="columns is-centered is-vcentered">
      <div className="column is-half">
        <img src={ryan} className="project-images" />
      </div>
    </div>
    <Link to="/"><FontAwesomeIcon icon="arrow-circle-right" size="2x" color="rgba(0,0,0,.2)" className="next-button" /></Link>
</div>

  );

export default About;
