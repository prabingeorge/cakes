import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import logoFooter from "../../assets/icons/amora-logo.png";

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='company-logo' src={logoFooter} alt='logo' />
          <p>Footer for the application</p>
          <div className="footer-social-icons">
            {/* <img src="fb" alt="facebook" />
            <img src="tw" alt="twitter" />
            <img src="link" alt="linkedin" /> */}
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-222-1111</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 @ Tomato.com - All Right Deserved.</p>
    </div>
  )
}

export default Footer;
