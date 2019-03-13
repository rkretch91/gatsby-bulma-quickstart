import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEnvelope, faCode, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

import './style.scss';

import wecarewc from '../images/wecare-wc.png';
import plc from '../images/the-plc.png';
import sh from '../images/sh-greeters.png';
import devotee from '../images/devotee.png';
import a from '../images/a-r.png';



library.add(faEye, faEnvelope, faCode, faArrowCircleRight)

const Projects = () => (
  <div>
  <div className="columns is-centered is-vcentered">
    <div className="column">
      <div className="smaller">
        <img src={plc} className="project-images" />
      </div>
    </div>
    <div className="column">
      <div className="smaller project">
        <h1 className="pacifico">The Potluck Club</h1>
        <p><strong>An organization breaking barriers with food events coming to your city soon.</strong></p>
        <p>From UX/UI Strategy to design to development, I created the entire beta version of the application, which was launched in April 2018.</p>
        <p className="has-text-centered is-size-7 is-">Ruby on Rails, PostgreSQL, JS, HTML/CSS, Bootstrap, Heroku</p>
        <FontAwesomeIcon icon="envelope" className="is-pulled-right pad-that-shit" size="1x" color="#85F4A1" />
        <FontAwesomeIcon icon="eye" className="is-pulled-right pad-that-shit" size="1x" color="gray" />
        <FontAwesomeIcon icon="code" className="is-pulled-right pad-that-shit" size="1x" color="gray" />
      </div>
    </div>
  </div>
  <div className="columns is-centered is-vcentered has-background-white-bis">
  <div className="column hidden-mob">
    <div className="smaller">
      <img src={wecarewc} className="project-images" />
    </div>
  </div>
  <div className="column">
      <div className="smaller project">
        <h1 className="pacifico">WeCare WC</h1>
        <p><strong>A company with the bold mission of redefining public restrooms in China and Asia.</strong></p>
        <p>UX/UI to creating a Wordpress template from scratch. I am also Marketing and PR Manager at the company.</p>
        <p className="has-text-centered is-size-7 is-">Wordpress CMS</p>
        <FontAwesomeIcon icon="envelope" className="is-pulled-right pad-that-shit" size="1x" color="#85F4A1" />
        <FontAwesomeIcon icon="eye" className="is-pulled-right pad-that-shit" size="1x" color="gray" />
        <FontAwesomeIcon icon="code" className="is-pulled-right pad-that-shit" size="1x" color="gray" />
      </div>
  </div>
  <div className="column hidden-tab">
    <div className="smaller">
      <img src={wecarewc} className="project-images" />
    </div>
  </div>
</div>
 <div className="columns is-centered is-vcentered">
    <div className="column">
      <div className="smaller">
        <img src={sh} className="project-images" />
      </div>
    </div>
    <div className="column">
      <div className="smaller project">
        <h1 className="pacifico">Shanghai Greeters</h1>
        <p><strong>Shanghai Greeters is a non-profit that connects visitors with local friends (or greeters).</strong></p>
        <p>Previous problems included a non-intuitive and unattractive front-end and a non-existent back-end resulting in messy Excel sheets and manual matching.</p>
        <p className="has-text-centered is-size-7 is-">Ruby on Rails, PostgreSQL, JS, HTML/CSS, Bootstrap, Heroku</p>
        <FontAwesomeIcon icon="envelope" className="is-pulled-right pad-that-shit" size="1x" color="#85F4A1" />
        <FontAwesomeIcon icon="eye" className="is-pulled-right pad-that-shit" size="1x" color="gray" />
        <FontAwesomeIcon icon="code" className="is-pulled-right pad-that-shit" size="1x" color="gray" />
      </div>
    </div>
  </div>
  <div className="columns is-centered is-vcentered has-background-white-bis">
  <div className="column hidden-mob">
    <div className="smaller">
      <img src={devotee} className="project-images" />
    </div>
  </div>
  <div className="column">
    <div className="smaller project">
      <h1 className="pacifico">Devotee Travel</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum consectetur diam in bibendum. Integer interdum laoreet est aliquet consectetur. Nunc et auctor est.</p>
      <FontAwesomeIcon icon="envelope" className="is-pulled-right pad-that-shit" size="1x" color="#85F4A1" />
      <FontAwesomeIcon icon="eye" className="is-pulled-right pad-that-shit" size="1x" color="gray" />
      <FontAwesomeIcon icon="code" className="is-pulled-right pad-that-shit" size="1x" color="gray" />
    </div>
  </div>
  <div className="column hidden-tab">
    <div className="smaller">
      <img src={devotee} className="project-images" />
    </div>
  </div>
</div>
 <div className="columns is-centered is-vcentered">
    <div className="column">
      <div className="smaller">
        <img src={a} className="project-images" />
      </div>
    </div>
    <div className="column">
      <div className="smaller project">
        <h1 className="pacifico">A&R Bakery</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum consectetur diam in bibendum. Integer interdum laoreet est aliquet consectetur. Nunc et auctor est.</p>
        <FontAwesomeIcon icon="envelope" className="is-pulled-right pad-that-shit" size="1x" color="#85F4A1" />
        <FontAwesomeIcon icon="eye" className="is-pulled-right pad-that-shit" size="1x" color="gray" />
        <FontAwesomeIcon icon="code" className="is-pulled-right pad-that-shit" size="1x" color="gray" />
      </div>
    </div>
  </div>
  <Link to="/about"><FontAwesomeIcon icon="arrow-circle-right" size="2x" color="rgba(0,0,0,.2)" className="next-button" /></Link>
</div>

  );

export default Projects;
