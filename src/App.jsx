import './assets/fonts.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import HeroSection from './components/HeroSection';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app-container">
            <Carousel />
            <HeroSection />
          </div>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
