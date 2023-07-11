import React from 'react';
import './Interview.css';
import interview from '../../Assets/Images/interview_img.png'
import {motion} from 'framer-motion'

const Interview = () => {
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
        <div className='interview-sec row'>
            <motion.div 
             initial="hidden" 
             animate="visible" 
             transition={transition} 
             variants={leftVariants} 
             className="in-left col-lg-6 col-md-6 col-12">
                <img className='int-image' src={interview} alt="" srcset="" />
            </motion.div>
            <motion.div 
            initial="hidden" 
            animate="visible" 
            transition={transition} 
            variants={rightVariants} 
            className="in-right col-lg-6 col-md-6 col-12">
                <span className='int-para'>Experience the seamless virtual interview process and open doors to exciting career opportunities with just a click of a button.</span>
                <br />
                <div className="intButton">
                <button className='int-btn btn-nav'>Join Interview</button>
                </div>
            </motion.div> 
        </div>
    </div>
  )
}

export default Interview