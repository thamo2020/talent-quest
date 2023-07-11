import React from 'react';
import './Intro.css';
import banner from '../../Assets/Images/banner_img.png'
import {motion} from 'framer-motion';


const Intro = () => {
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
    <div  className='header row'>
       
        <motion.div
         initial="hidden" 
        animate="visible" 
        transition={transition} 
        variants={leftVariants} 
        className="i-left col-lg-6 col-md-6 col-12">
            <span>Welcome to</span>
            <span>Talent</span>
            <span>Unlocking Your Potential, Empowering Your Future!</span>
        </motion.div>
        <motion.div 
        initial="hidden"
        animate="visible" 
        transition={transition} 
        variants={rightVariants} // Animation variants
        className="i-right col-lg-6 col-md-6 col-12">
            <img className='banner' src={banner} alt="" srcset="" />
        </motion.div>     
        
    </div>
  )
}

export default Intro