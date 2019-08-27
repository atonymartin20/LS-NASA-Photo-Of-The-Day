import React from 'react';
import "./index.css";
import hamburger from '../../images/Hamburger_icon.png';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <span>Hamburger Button</span>
            <img src={require('../../images/NASA-logo.png')} className="logo"/>
            <img src={hamburger} alt="Hamburger Icon" className="hamburger"/>
            <span>Test</span>
            <span>Navbar</span>
        </div>
    )
}

export default NavBar;