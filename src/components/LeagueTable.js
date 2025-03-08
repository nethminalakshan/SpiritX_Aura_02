import React from 'react';
import './LeagueTable.css';
import player1 from './images/leaguetabel/11.jpg'; // Import images
import player2 from './images/leaguetabel/22.jpg';
import player3 from './images/leaguetabel/33.jpg';
import player4 from './images/leaguetabel/44.jpg';
import videoFile from './images/leaguetabel/dd.mp4';
import posterImage from './images/leaguetabel/Screenshot 2025-03-09 000854.png';

// Player Component
const Player = ({ image, name, role, stats, age }) => {
    return (
        <div className="player">
            <img src={image} alt={name} />
            <div className="info">
                <p>{role}</p>
                <h3>{name}</h3>
                <p>{stats} | Age {age}</p>
            </div>
        </div>
    );
};

// LeagueTable Component
const LeagueTable = () => {
    const players = [
        {
            image: player1, // Use imported image
            name: 'Kanishka Gamage',
            role: 'Best Batsman',
            stats: '235 Runs | 3 Matches',
            age: 22
        },
        {
            image: player2, // Use imported image
            name: 'Dinushan Bandara',
            role: 'Best Fielder',
            stats: '201 Runs | 5 Catches | 3 Matches',
            age: 23
        },
        {
            image: player3, // Use imported image
            name: 'Nawaneeth Gunasena',
            role: 'Best All-Rounder',
            stats: '190 Runs | 5 Wickets | 2 Matches',
            age: 21
        },
        {
            image: player4, // Use imported image
            name: 'Nuwan Thushara',
            role: 'Best Bowler',
            stats: '7 Wickets | 2 Matches',
            age: 22
        }
    ];

    return (
        <div className="league-table">
            <h2>League Table</h2>
            {players.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

// FeaturedVideo Component
const FeaturedVideo = () => {
  const playVideo = () => {
      const video = document.querySelector('.video-container video');
      if (video.paused) {
          video.play();
          document.querySelector('.play-button').style.display = 'none';
      } else {
          video.pause();
          document.querySelector('.play-button').style.display = 'flex';
      }
  };

  return (
      <div className="featured-video">
          <h2>Featured Video</h2>
          <div className="video-container">
              <video src={videoFile} autoPlay muted loop poster={posterImage}></video>
              <div className="play-button" onClick={playVideo}>▶</div>
          </div>
      </div>
  );
};

// Main App Component
const App = () => {
    return (
        <div className="container">
            <LeagueTable />
            <FeaturedVideo />
        </div>
    );
};

export default App;