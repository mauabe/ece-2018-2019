import React from 'react';
import * as data from '../assets/data'
import history from '../history';

const Footer = () => {

  return (
    <div className="footer">
      <div className="columns">
        <div className="columns is-1">
        <div className="columns is-1 has-text-left">
          <span className="footer-logo">
            <img className="logo-bottom"
              src="data.logos.uclabottom"
              alt="UCLA"
              title="UCLA bottom"
            />
          </span>
          <div className="columns is-10">
            <span className="is-size-5">Samueli School of Engineering</span>
            <span className="is-size-7">The Birthplace of the Internet</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;