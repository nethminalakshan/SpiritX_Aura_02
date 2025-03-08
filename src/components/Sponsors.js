import React from 'react';
import './Sponsors.css'; // Import the CSS file
import pumaLogo from './images/sponsers/puma.png'; // Import sponsor logos
import adidasLogo from './images/sponsers/adidas.png';
import nikeLogo from './images/sponsers/nike.png';
import redbullLogo from './images/sponsers/redbull.png';

const Sponsors = () => {
    return (
        <section className="sponsors-section">
            <h2><span></span> Our Sponsors</h2>
            <div className="sponsors-container">
                <img src={pumaLogo} alt="Puma" />
                <img src={adidasLogo} alt="Adidas" />
                <img src={nikeLogo} alt="Nike" />
                <img src={redbullLogo} alt="RedBull" />
            </div>
        </section>
    );
};

export default Sponsors;