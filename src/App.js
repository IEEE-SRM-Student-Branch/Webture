/**
 * App
 */

// Dependencies
import './App.css';
import AboutIEEE from './components/AboutIEEE/AboutIEEE';
import AboutWebture from './components/AboutWebture/AboutWebture';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import RegButton from './components/RegButton/RegButton';
import Sponsor from './components/Sponsor/Sponsor';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <AboutWebture />
      <AboutIEEE />
      <Sponsor />
      <RegButton/>
      <Footer />
    </div>
  );
}

export default App;
