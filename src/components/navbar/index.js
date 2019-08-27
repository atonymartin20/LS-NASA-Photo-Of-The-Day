import React from 'react';
import "./index.css";

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <span>Hamburger Button</span>
            <img src={require('../../images/NASA-logo.png')} />
            <span>Test</span>
            <span>Navbar</span>
        </div>
    )
}

export default NavBar;