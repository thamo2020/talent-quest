import React from 'react';
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
// import logo_light from "../../Assets/Images/logo_lighbg.png";

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
        <div className="logo">
            TalenQuest
            {/* <img className='logo-light' src={logo_light} alt="" /> */}
        </div>
            <Toggle />
       
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
                <li>Home</li>
                <li>Interview</li>
                <li>About </li>
                <li>Testimonials</li>
                <li>Contact </li>
            </ul>
          </div> 
          <button className='button btn-nav'> Sign Up </button> 
          <button className='btn-nav'>Log In</button>
        </div>

    </div>
  )
}

export default Navbar
