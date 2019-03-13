import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

import './style.scss';

import about from '../images/about-photo.png';

library.add(faArrowCircleRight)

const About = () => (
  <div>
    <div className="columns is-centered is-vcentered">
      <div className="column is-half has-text-centered">
        <img src={about} className="image is-128x128 smaller"/>
        <br/>
        <p>I am a web developer and designer based most of the time in Berlin. I highly value projects that focus on positive social and environmental impact.</p>
        <br/>
        <p>In addition to freelance web development and design, I work as Marketing and PR Manager at WeCare WC, run a social impact organization called Big Spoons, and teach coding workshops at Le Wagon (Worldwide) and Digital Career Institute (Berlin)</p>
      </div>
    </div>
    <Link to="/contact"><FontAwesomeIcon icon="arrow-circle-right" size="2x" color="rgba(0,0,0,.2)" className="next-button" /></Link>
</div>

  );

export default About;
