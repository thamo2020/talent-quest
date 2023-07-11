import React from 'react'
import './Footer.css';
import Insta from "@iconscout/react-unicons/icons/uil-dribbble";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Wave from '../../Assets/Images/footerWave.svg'

const Footer = () => {
  return (
    <div>
        <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        
        <div className="f-icons">
          <a href="https://dribbble.com/Thamodya"> <Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/thamodya-ranasinghe-659032181/"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/thamo2020"><Gitub color="white" size={"3rem"} /></a>
        </div>
        <span>All Right Received by @TalentQuest</span>
      </div>
    </div>
    </div>
  )
}

export default Footer