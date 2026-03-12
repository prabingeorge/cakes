import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='aboutus'>
      <h1>About Us</h1>
      <p className='aboutus-text'>
        Welcome to <span>Jon Bakes</span>, where every cake is crafted with love and passion. We believe that every celebration deserves something sweet, special, and memorable.
      </p>
      <p className='aboutus-text'>
        At <span>Jon Bakes</span>, we specialize in creating <span>freshly baked cakes, customized designs, and delicious desserts</span> that bring joy to every occasion. Whether it's a birthday, anniversary, wedding, or a simple moment worth celebrating, our cakes are made to turn your memories into delightful experiences.
      </p>
      <p className='aboutus-text'>
        Our team of passionate bakers uses <span>high-quality ingredients, creative designs, and modern baking techniques</span> to deliver cakes that not only look beautiful but taste incredible. From classic flavors to unique custom creations, we ensure every order is made fresh and delivered with care.
      </p>
      <p className='aboutus-text'>
        We are committed to providing:
      </p>
      <ul className='aboutus-list'>
        <li className='aboutus-list-item'>🎂 Freshly baked cakes made with premium ingredients</li>
        <li className='aboutus-list-item'>🎨 Custom cake designs for every celebration</li>
        <li className='aboutus-list-item'>🚚 Convenient online ordering and reliable delivery</li>
        <li className='aboutus-list-item'>💖 Exceptional customer satisfaction</li>
      </ul>
      <p className='aboutus-text'>At <span>Jon Bakes</span>, baking is more than a business — it’s our way of spreading happiness, one slice at a time.</p>
      <p className='aboutus-text'><span>Celebrate life’s sweetest moments with us.</span></p>
    </div>
  )
}

export default AboutUs;
