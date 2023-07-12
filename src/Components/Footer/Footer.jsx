import React from 'react'
import './Footer.css';
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Wave from '../../Assets/Images/footerWave.svg'

const Footer = () => {
  return (
    <div>
        <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        
        <div className="f-icons">
          <a href=""> <Insta color="white" size={"3rem"} /></a>
          <a href=""><Facebook color="white" size={"3rem"} /></a>
          <a href=""><Linkedin color="white" size={"3rem"} /></a>
        </div>
        
        <span >All Right Received by @TalentQuest</span>

      </div>
    </div>
    </div>
  )
}

export default Footer