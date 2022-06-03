import React from 'react';
import './Sponsors.css';
import logo from './Sponsor.svg'
import salesforce from './Salesforce.png'
import tesseractlights from './Tesseract-Lights.png'

const info = [
    {name:"sponsor1", src:logo},
    {name:"Salesforce Student Group SRM", src:salesforce},
    {name:"Tesseract Lights", src:tesseractlights},
    {name:"sponsor4", src:logo}
];

const Sponsor = () => {
    return (
        <div className="sponsor">
            {info.map((e) => {
                return (
                    <div className="sponsor-details">
                        <img src={e.src} alt={e.name}/>
                        <div>{e.name}</div>
                    </div>
                );
            })}
        </div>
    );
}

const Sponsors = () => {
    return (
        <div className="container">
            <div className="margin">
                <div className="sponsors-title">
                    SPONSORS
                </div>
                <div className="sponsors-subtitle">
                    Platinum Sponsors
                </div>
                <div className="sponsors-container">
                    <Sponsor/>
                </div>
            </div>
        </div>

    );
}

export default Sponsors;