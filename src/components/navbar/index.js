import React from 'react';
import styled from 'styled-components'

// import "./index.css";
import hamburger from '../../images/Hamburger_icon.png';
import logo from '../../images/NASA-logo.png';

const NavBarCont = styled.div`
    width: 100%;
    max-width: 1200px;
    background-color: #00baff;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 0px 5%;
    box-sizing: border-box;
    position: fixed;
    top: 0;
`;

const HamburgerImg = styled.img`
    width: 100%;
    max-width: 50px;
    margin-right: auto;
`;

const LogoImg = styled.img`
    width: 100%;
    max-width: 100px;
    margin-right: auto;
`;

const NavBar = () => {
    return (
        <NavBarCont>
            <HamburgerImg src={hamburger} alt="Hamburger Icon" className="hamburger"/>
            <LogoImg src={logo} alt="NASA logo" className="logo"/>
            {/* <img src={hamburger} alt="Hamburger Icon" className="hamburger"/> */}
            {/* <img src={logo} alt="NASA logo" className="logo"/> */}
        </NavBarCont>
    )
}

// .nav-bar {
//     width: 100%;
//     max-width: 1200px;
//     background-color: #00baff;
//     height: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1.5rem;
//     padding: 0px 5%;
//     box-sizing: border-box;
//     position: fixed;
//     top: 0;
// }

// .logo {
//     width: 100%;
//     max-width: 100px;
//     margin-right: auto;
// }

// .nav-bar .hamburger {
//     width: 100%;
//     max-width: 50px;
//     margin-right: auto;
// }
export default NavBar;