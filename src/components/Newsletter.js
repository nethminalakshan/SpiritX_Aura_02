import React from 'react';
import './Newsletter.css'; // Import the CSS file
import backgroundImage from './images/newsletter/erer.jpg'; // Import the background image

const Newsletter = () => {
    return (
        <div className="newsletter-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="content">
                <h2><span>Subscribe</span> to our newsletter for <br /> soccer TV listings & news.</h2>
                <form className="subscription-form">
                    <input type="email" placeholder="Your Email Address" required />
                    <button type="submit">➜</button>
                </form>
                <p>Sign up using your e-mail to receive our newsletter.</p>
            </div>
        </div>
    );
};

export default Newsletter;