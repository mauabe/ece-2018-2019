import React from 'react';
import * as data from '../assets/data';
import logoFooter from '../assets/UCLA_footer_600.svg';
import history from '../history';


const Footer = () => {

  // src="data.logos.uclabottom"
  return (
    <div className=" site-footer ">
      <div className="container">

        <div className=" footer-logo">
          <img
            src={logoFooter}
            alt="UCLA"
            title="UCLA footer"
          />
        </div>

          {/* <div className="tile is-ancestor is-6"> */}
            <div className="footer-school">
              <div className="school-name">Samueli School of Engineering</div>
              <div className="school-name">Electrical and Computer Engineering Department </div>
              {/* <div className="dept-name">Electrical and Computer Engineering Department</div> */}
            </div>
          {/* </div> */}

      </div>
    </div>
  );
}

export default Footer;
