import React from 'react';
import * as data from '../assets/data';
import logo from '../assets/UCLA_footer_600.svg';
import history from '../history';


const Footer = () => {

  // src="data.logos.uclabottom"
  return (
    <div className="footer">
    <div className="container">
      <div className="columns">

        <div className="columns is-2">
          <span className="footer-logo">
            <img className="logo-bottom"
              src={logo}
              alt="UCLA"
              title="UCLA footer"
              />
          </span>
        </div>

        <div className="columns is-8">
          <div className="is-size-6 ">Samueli School of Engineering
          <br />
          Electrical and Computer Engineering Department
          </div>
        </div>

        <div className="columns is-2"> </div>

      </div>
    </div>
    </div>
  );
}

export default Footer;
