import React from "react";
import "./Sponsors.css";
import logo from "./Unacademy_logo.png";
import salesforce from "../assets/SalesforceLogo.png";
import tesseractlights from "./Tesseract-Lights.png";

const info = [
  { name: "Unacademy", src: logo },
  { name: "Salesforce Student Group SRM", src: salesforce },
  { name: "Tesseract Lights", src: tesseractlights },
];

const Sponsor = () => {
  return (
    <div className="sponsor">
      {info.map((e) => {
        return (
          <div className="sponsor-details" key={e.name}>
            <img src={e.src} alt={e.name} />
          </div>
        );
      })}
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className="container-fluid">
      <div className="margin">
        <div className="sponsors-title">
          <h2>SPONSORS</h2>
        </div>
        <div className="sponsors-container">
          <Sponsor />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
