import React, { useContext, useRef, useState } from "react";
import './Contact.css';
import Phone from "@iconscout/react-unicons/icons/uil-phone";
import Home from "@iconscout/react-unicons/icons/uil-home";
import { themeContext } from "../../Context";
import {motion} from 'framer-motion'


const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
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
    <div className="c-section">
         <div className="contact-form" id="contact">
      <motion.div 
       initial="hidden" 
       animate="visible" 
       transition={transition} 
       variants={leftVariants}
       className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span style={{color:"var(--Orange)"}}>Contact Us</span>
          <div className="contact row">
            <div className="tel col" >
            <span style={{color: darkMode?'white': ''}}> <Phone color="#FC5C02" size={"1.2rem"} />&nbsp; Call Us </span><br />
            <span style={{color: darkMode?'white': ''}}>+94 1256 234 123 </span><br />
            </div>
            <div className="address col">
            <span style={{color: darkMode?'white': ''}}><Home color="#FC5C02" size={"1.2rem"} /> &nbsp; Come to us</span><br />
            <span style={{color: darkMode?'white': ''}}>No 123, </span><br />
            <span style={{color: darkMode?'white': ''}}>abd rd,</span><br />
            <span style={{color: darkMode?'white': ''}}>Colombo 3</span>
            </div>
          </div>
          
         
        
        </div>
      </motion.div>
      
      <div 
       initial="hidden" 
       animate="visible" 
       transition={transition} 
       variants={rightVariants}
       className="c-right">
        <form ref={form} onSubmit={""}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="btn-nav"/>
         
          
        </form>
      </div>
    </div>
    </div>
   
  );
};

export default Contact;
