import React from 'react';
import './AppDownload.css';
import { FaAppStore, FaStore } from "react-icons/fa6";

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className="app-download-platforms">
        <FaAppStore />
        <FaStore />
        {/* <img src="playstore" alt="playstore" /> */}
        {/* <img src="appstore" alt="appstore" /> */}
      </div>
    </div>
  )
}

export default AppDownload;
