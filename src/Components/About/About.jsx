import React from 'react';
import './About.css';
import aboutImage from '../../Assets/Images/office_img.png'
import {motion} from 'framer-motion'

const About = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
  // Animation variants
   const leftVariants = {
     hidden: { opacity: 0, x: -100 },
     visible: { opacity: 1, x: 0 },
   };
 
   const rightVariants = {
     hidden: { opacity: 0, x: 100 },
     visible: { opacity: 1, x: 0 },
   };
 
  return (
    <div>
       <span className='a-heading'>Do you know About &nbsp;</span>
      <div className="about-sec row">
        <motion.div 
        initial="hidden" 
        animate="visible" 
        transition={transition} 
        variants={leftVariants} 
        className="a-left col-lg-6 col-md-6 col-12">
         
            <div>
            <span className='a-para'>At our recruitment agency, we are passionate about connecting talent with opportunity. With a deep understanding of the ever-evolving job market, we strive to bridge the gap between exceptional candidates and top-tier employers. Our dedicated </span>
           
            </div>
            
           
        </motion.div>
        <motion.div 
        initial="hidden" 
        animate="visible" 
        transition={transition} 
        variants={rightVariants} 
        className="a-right col-lg-6 col-md-6 col-12">
        
        <img className='a-image' src={aboutImage} alt="about image" />
        </motion.div>
      </div>
    </div>
  )
}

export default About