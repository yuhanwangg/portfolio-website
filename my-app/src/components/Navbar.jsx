import React from 'react';
import Logo from '../assets/logo.png';
import './Navbar.css';

function NavBar() {
    return (
        <div className="nav-bar">
            <img src={Logo} alt="no logo" />
            <ul>
                <li>about me</li>
                <li>projects</li>
                <li>contact</li>
                <div className="redIcon"></div>
            </ul>
        </div>
    );
}

export default NavBar;