
/**
 * App
 */

// Dependencies
import './App.css';
import AboutWebture from './components/AboutWebture/AboutWebture';
import Footer from './components/Footer/Footer';
import Landing from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import RegButton from './components/RegButton/RegButton';
import Sponsors from './components/sponsors/Sponsors.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <AboutWebture />
      <Sponsors />
      <RegButton />
      <Footer />
    </div>
  );
}

export default App;
