/**
 * Footer Component
 */

// Dependencies
import React from "react";
import { GiTechnoHeart } from "react-icons/gi";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="madeby">
        <h3>
          Made with <GiTechnoHeart color="red" /> IEEE SRM SB{" "}
        </h3>
      </div>
      <div className="rights">
        <a
          href="https://www.ieeesrmist.in/privacypolicy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy
        </a>
        <a
          href="https://hacktrix.ieeesrmist.in/"
          target="_blank"
          rel="noreferrer"
        >
          Terms
        </a>
        <a
          href="https://devfolio.co/code-of-conduct"
          target="_blank"
          rel="noreferrer"
        >
          Code of conduct
        </a>
      </div>
    </div>
  );
}

export default Footer;
