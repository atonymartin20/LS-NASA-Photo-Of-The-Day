import React from 'react';
import "./index.css";
import hamburger from '../../images/Hamburger_icon.png';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <img src={hamburger} alt="Hamburger Icon" className="hamburger"/>
            <img src={require('../../images/NASA-logo.png')} className="logo"/>
            <span>Something Here</span>
        </div>
    )
}

export default NavBar;