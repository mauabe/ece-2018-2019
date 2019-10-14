import React from 'react';
import logoFooter from '../assets/images/ucla-samueli-logo.svg';


const Footer = () => {

  return (
    <div className=" site-footer ">
      <div className="footer-container">

        <div className=" footer-logo">
          <img
            src={logoFooter}
            alt="UCLA"
            title="UCLA footer"
          />
        </div>

        <div className="footer-school">
          <div className="school-name">Electrical and Computer Engineering Department </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
