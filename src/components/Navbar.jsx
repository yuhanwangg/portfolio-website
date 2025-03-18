import React from 'react';
import Logo from '../assets/logo.png';
import './Navbar.css';

function NavBar() {
    return (
        <div className="nav-bar">
            <img src={Logo} alt="no logo" />
            <ul>
                <li><a href="#am">about me</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contacts">contact</a></li>
                <div className="redIcon"></div>
            </ul>
        </div>
    );
}

export default NavBar;