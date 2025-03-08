import React from 'react';
import './Scoreboard.css';

// Import the provided images
import team1Logo from '../components/images/www.png'; // Panjab Battalion logo
import team2Logo from '../components/images/ww.png'; // Dikundi Cricket logo

const Scoreboard = () => {
  return (
    <div className="scoreboard-container">
      <div className="board">
        <div className="scoreboard">
          <div className="team">
            <img src={team1Logo} alt="Panjab Battalion Logo" />
            <span>Panjab Battalion</span>
          </div>
          <div className="score">
            <span>175/5 - 176/3</span>
          </div>
          <div className="team">
            <img src={team2Logo} alt="Dikundi Cricket Logo" />
            <span>Dikundi Cricket</span>
          </div>
        </div>
        <div className="details">
          <span className="date">August 7, 2019</span>
          <span className="stadium">Cricket Stadium, UOM</span>
        </div>
        <button className="game-info">GAME INFO</button>
      </div>
    </div>
  );
};

export default Scoreboard;