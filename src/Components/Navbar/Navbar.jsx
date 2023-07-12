import React,{ useState } from 'react';
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='n-wrapper'>
        <div className="n-left">
        <div className="logo">
            TalenQuest
            {/* <img className='logo-light' src={logo_light} alt="" /> */}
        </div>
            <Toggle />
       
        </div>
        <div className={`n-right ${showMenu ? 'active' : ''}`}>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <FiMenu size={24} />
        </div>
        <div className={`n-list ${showMenu ? 'active' : ''}`}>
            <ul>
                <li>Home</li>
                <li>Interview</li>
                <li>About </li>
                <li>Testimonials</li>
                <li>Contact </li>
                <li> <button className='button btn-nav'> Sign Up </button> </li>
                <li><button className='btn-nav'>Log In</button></li>
            </ul>
          </div> 
         
          
        </div>

    </div>
    
  )
}

export default Navbar
