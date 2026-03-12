import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='company-logo' src={assets.logo} alt='logo' />
          <p>Footer for the application</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <HashLink smooth to='/#root'>Home</HashLink>
            </li>
            <li>
              <HashLink smooth to='/aboutus/#root'>About us</HashLink>
            </li>
            <li>
              <HashLink smooth to='/delivery/#root'>Delivery</HashLink>
            </li>
            <li>
              <HashLink smooth to='/privacy/#root'>Privacy policy</HashLink>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7598 451 524</li>
            <li>jonbakes@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 @jonbakes.com - All Right Deserved.</p>
    </div>
  )
}

export default Footer;
