import React from 'react';
import logoFooter from '../assets/UCLA_footer_600.svg';


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
          <div className="school-name">Samueli School of Engineering</div>
          <div className="school-name">Electrical and Computer Engineering Department </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
