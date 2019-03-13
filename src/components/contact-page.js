import React from 'react';
import { Link } from "gatsby"

import './style.scss';

const Contact = () => (
  <div>
    <div className="columns is-centered is-vcentered">
      <div className="column is-half">
         <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    </div>
</div>

  );

export default Contact;
