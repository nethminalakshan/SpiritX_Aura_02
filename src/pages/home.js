import React from 'react';
import Slider from '../components/slider'
import Scoreboard from '../components/Scoreboard';
import NewsUpdates from '../components/NewsUpdates';
import LeagueTable from '../components/LeagueTable';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter  from '../components/Newsletter';
import Sponsors from '../components/Sponsors';
const images = [
  {
    src: 'https://img.freepik.com/free-photo/portrait-person-playing-cricket-sport_23-2151702096.jpg?t=st=1741426894~exp=1741430494~hmac=9a1d219754a9c9ad287f7e0710073a86b3b9df876e5d5d80a4fbeb5c8dcb17e9&w=1380',
  },
  {
    src: 'https://img.freepik.com/free-photo/cricket-match-with-player_23-2151702186.jpg?t=st=1741428444~exp=1741432044~hmac=2b8ce313d798fd34c737b70059c42cb8d7e8e1063ea77238c6895bc2f675d3a3&w=1380',
  },
  {
    src: 'https://img.freepik.com/free-photo/cricket-match-with-player_23-2151702177.jpg?t=st=1741428822~exp=1741432422~hmac=941999678353ee1c5abc576ff2fd7b14f0bd319074912f65d458318ae89d8c95&w=1380',
  },
  {
    src: 'https://img.freepik.com/free-photo/portrait-person-playing-cricket-sport_23-2151702111.jpg?t=st=1741428927~exp=1741432527~hmac=bd194331ba47d31808758961cdb7457c795dad1c945a95a78930b8d226d2d9c3&w=1380',
  },
  {
    src: 'https://img.freepik.com/free-photo/cricket-match-with-player_23-2151702212.jpg?t=st=1741428980~exp=1741432580~hmac=73b00745f48a15121fde65603001ba1e3e861b3e102a4de7a8ee6845a81a0202&w=1380',
  },
];

function Home() {
  return (
    <div className="App">
      <Header/>
      <Slider images={images} />
      <Scoreboard/>
      <LeagueTable/>
      <NewsUpdates/>
      <Newsletter/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default Home;