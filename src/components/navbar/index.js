import React from 'react';
import "./index.css";
import hamburger from '../../images/Hamburger_icon.png';
import logo from '../../images/NASA-logo.png';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <img src={hamburger} alt="Hamburger Icon" className="hamburger"/>
            <img src={logo} alt="NASA logo" className="logo"/>
        </div>
    )
}

export default NavBar;