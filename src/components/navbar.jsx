import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import { useState } from 'react'




const navbar = () => {
const [showMenu,setShowMenu]=useState(false);
const handleButtonToggle=()=>{
setShowMenu(!showMenu);
};
  return ( 
    <div className='navibar'>
        <ul className= {`navlist ${showMenu ? 'show' : ''}`}>
          <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
          <li><Link to='skills'smooth={true} duration={1000}>Skills</Link></li> 
          <li><Link to='projects' smooth={true} duration={1000}>Portfolio</Link></li>
          <li><Link to='footer' smooth={true} duration={1000}>Contact</Link></li>
        </ul>
        <button id="menu" onClick={handleButtonToggle}>
        <i class="fa-solid fa-bars" />
        </button>
    </div>
  )
}

export default navbar