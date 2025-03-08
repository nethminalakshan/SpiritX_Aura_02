import React from 'react';
import './Footer.css'; // Import the CSS file
import image1 from './images/footer/1.jpg'; // Import images
import image2 from './images/footer/11.jpg';
import image3 from './images/footer/111.jpg';
import image4 from './images/footer/fans.jpg';
import image5 from './images/footer/1111.jpg';
import facebookIcon from './images/footer/2222.png'; // Import social icons
import instagramIcon from './images/footer/22.png';
import pinterestIcon from './images/footer/2.png';
import linkedinIcon from './images/footer/22.png';

const Footer = () => {
    return (
        <footer>
            <div className="top-section">
                <img src={image1} alt="Football" />
                <img src={image2} alt="Football" />
                <img src={image3} alt="Football" />
                <img src={image4} alt="Football" />
                <img src={image5} alt="Football" />
            </div>
            <div className="bottom-section">
                <div className="footer-column">
                    <h3>Contact Info</h3>
                    <p>We’re a professional Sports club in University of Moratuwa, Sri Lanka, founded in 1997.</p>
                    <br />
                    <p>The club has spent its entire history, with the exception of the 1997–2002 and 2020–24 seasons.</p>
                </div>
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Marketplace</a></li>
                        <li><a href="#">Media Kit</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>&nbsp;</h3>
                    <ul>
                        <li><a href="#">League Table</a></li>
                        <li><a href="#">Schedule</a></li>
                        <li><a href="#">Players</a></li>
                        <li><a href="#">Forum</a></li>
                    </ul>
                </div>
                <div className="footer-column newsletter">
                    <h3>Newsletter</h3>
                    <p>We’ll send updates straight to your inbox. Let’s stay connected!</p>
                    <div className="newsletter-box">
                        <input type="email" placeholder="Enter Your Email Address" />
                        <button>➤</button>
                    </div>
                    <div className="social-icons">
                        <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
                        <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
                        <a href="#"><img src={pinterestIcon} alt="Pinterest" /></a>
                        <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright 2025 Team Aura, All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;