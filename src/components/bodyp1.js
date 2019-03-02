import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

import './style.scss';

import heart from '../images/heart.png';

library.add(faArrowCircleRight)

const Bodyp1 = () => (
   <div id="home">
      <div className="columns is-vcentered">
        <div className="column is-one-third is-three-quarters-mobile">
          <div className="smaller-2">
            <img src={heart} alt="Heart" className="animation-1" />
          </div>
        </div>
        <div className="column is-two-thirds has-text-centered">
          <div className="smaller">
            <p><span className="pacifico underline">Ryan</span> is a Berlin-based <b>designer</b>, <b>web developer</b> and <b>public speaker</b> who specializes in projects with an urban and global impact.</p>
            <Link to="/projects"><FontAwesomeIcon icon="arrow-circle-right" size="2x" /></Link>
          </div>
        </div>
      </div>
    </div>

  );

export default Bodyp1;
