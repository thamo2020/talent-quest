import React from 'react';
import './Testimonials.css';
import { motion } from 'framer-motion';
import photo1 from "../../Assets/Images/photo5.jpg"
import photo2 from "../../Assets/Images/photo2.jpeg"
import photo3 from "../../Assets/Images/photo3.jpg"

const Testimonials = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='t-section'>
      <span className='t-header'>What people &nbsp;</span>
      <div className= "App">
        <div className="section">
          <div className="container">
            <motion.div
              className="card"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="card-body">
                <div className="imgBx">
                  <img src={photo1} style={{height: "150px" }} alt="" />
                </div>
                <div className="contentBx">
                  <h3 className="card-title">Mary Johnson</h3>
                  <span>Creative Designer</span>
                  <span>"This recruitment agency exceeded my expectations. Their personalized approach and attention to my career needs were impressive. I found the perfect job that aligns with my skills and aspirations. Highly recommended!"</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="card"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card-body">
                <div className="imgBx">
                  <img src={photo2} style={{height: "150px" }} alt="" />
                </div>
                <div className="contentBx">
                  <h3 className="card-title">Mary Johnson</h3>
                  <span>Manager</span>
                  <span>"This recruitment agency exceeded my expectations. Their personalized approach and attention to my career needs were impressive. I found the perfect job that aligns with my skills and aspirations. Highly recommended!"</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="card-body">
                <div className="imgBx">
                  <img src={photo3} style={{height: "150px" }} alt="" />
                </div>
                <div className="contentBx">
                  <h3 className="card-title">Mary Johnson</h3>
                  <span>Creative Designer</span>
                  <span>"This recruitment agency exceeded my expectations. Their personalized approach and attention to my career needs were impressive. I found the perfect job that aligns with my skills and aspirations. Highly recommended!"</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
