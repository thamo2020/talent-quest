import React from 'react';
import './Intro.css';
import banner from '../../Assets/Images/banner_img.png'
const Intro = () => {
  return (
    <div  className='header'>
       
        <div className="i-left">
            <span>Welcome to</span>
            <span>Talent</span>
            <span>Unlocking Your Potential, Empowering Your Future!</span>
        </div>
        <div className="i-right">
            <img className='banner' src={banner} alt="" srcset="" />
        </div>     
        
    </div>
  )
}

export default Intro