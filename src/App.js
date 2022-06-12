/**
 * App
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Dependencies
import "./App.css";
import AboutWebture from "./components/AboutWebture/AboutWebture";
import Footer from "./components/Footer/Footer";
import Landing from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import RegButton from "./components/RegButton/RegButton";
import Sponsors from "./components/sponsors/Sponsors.jsx";
import Teams from "./components/Teams";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <div className="App">
                <Navbar />
                <Landing />
                <AboutWebture />
                <Sponsors />
                <RegButton />
                <Footer />
              </div>
            }
          />
          <Route path="speakers" element={<Teams />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
