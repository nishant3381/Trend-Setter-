import React from 'react';
import './Hero.css';

import bg_video from '../assets/video.mp4'
const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className='back-video'>
          <source src={bg_video}/>
      </video>
      <div className="content">
        <h1>BE STYLISH & BE UNIQUE</h1>
        <h2>TRENDING WATCHES COLLECTION</h2>
         <a href='login'>Trend Setter</a>
      </div>
    </div>
  );
}

export default Hero;
