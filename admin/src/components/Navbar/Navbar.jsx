import React from 'react';
import './Navbar.css';
import { FaUserLarge } from "react-icons/fa6";
import logoHeader from "../../assets/icons/logo-header.png";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={logoHeader} alt="logo" />
        <FaUserLarge />
        {/* <img className='profile' src="profile" alt="profile" /> */}
    </div>
  )
}

export default Navbar;
