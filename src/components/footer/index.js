import React from 'react';
import styled from 'styled-components'

const FooterCont = styled.footer`
    width: 100%;
    background-color: #C2c7c0;
    color: #177245;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 0px 5%;
    box-sizing: border-box;
    margin-bottom: 20px;
`;
const Footer = () => {
    return (
        <FooterCont>
            <p>
                Contact us at:
                <br />NASA Headquarters
                <br />300 E. Street SW, Suite 5R30
                <br />Washington, DC 20546
                <br />(202) 358-0001 (Office)
                <br />(202) 358-4338 (Fax)
            </p>
        </FooterCont>
    )
}

export default Footer;