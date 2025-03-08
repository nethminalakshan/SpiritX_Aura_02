import React, { useState } from 'react';
import './Header.css'; // Import the CSS file
import logo from './images/pngwing.com.png'; // Import the logo image
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <nav className="navbar">
                <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">MATCH CENTER</a></li>
                    <li><a href="#">LEADERBOARD</a></li>
                    <li className="logo">
                        <img src={logo} alt="Big Slam Soccer" style={{ width: '125px', height: 'auto' }} />
                    </li>
                    <li><a href="#">MY TEAM</a></li>
                    <li><a href="#">PLAYERS</a></li>
                    <li><a href="#">RULES</a></li>
                    <li className="icons">
                        <a href="#" aria-label="Search"><i className="fas fa-search"></i></a>
                    </li>
                    <li className="icons">
                        <a href="#" aria-label="Chatbox"><i className="fas fa-comments"></i></a>
                    </li>
                    <li className="icons">
                        <a href="#" aria-label="Profile"><i className="fas fa-user"></i></a>
                    </li>
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={`fas ${showMenu ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;