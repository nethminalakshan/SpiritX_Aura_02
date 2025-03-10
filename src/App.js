
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all <Route> components inside <Routes> */}
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;