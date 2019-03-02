import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'

import './style.scss';

import wecarewc from '../images/wecare-wc.png';
import plc from '../images/the-plc.png';
import sh from '../images/sh-greeters.png';
import devotee from '../images/devotee.png';
import a from '../images/a-r.png';



library.add(faEye, faEnvelope, faCode)

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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum consectetur diam in bibendum. Integer interdum laoreet est aliquet consectetur. Nunc et auctor est.</p>
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum consectetur diam in bibendum. Integer interdum laoreet est aliquet consectetur. Nunc et auctor est.</p>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum consectetur diam in bibendum. Integer interdum laoreet est aliquet consectetur. Nunc et auctor est.</p>
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
</div>

  );

export default Projects;
