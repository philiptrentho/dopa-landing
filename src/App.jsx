import './assets/fonts.css';
import './App.css';
import Carousel from './components/Carousel';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="app-container">
      <Carousel />
      <HeroSection />
    </div>
  );
}

export default App;
