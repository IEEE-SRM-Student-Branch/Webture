/**
 * Landing Page
 */

// Dependencies
import React, { useState, useEffect } from "react";
import "./LandingPage.css";

function LandingPage() {
  // const [participantCount, setParticipantCount] = useState(0);

  // useEffect(() => {
  //   const fetchParticipantsCount = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://ieee-webture.herokuapp.com/api/participants-count"
  //       );
  //       const data = await response.json();
  //       setParticipantCount(data.data.participants.count);
  //     } catch (error) {
  //       setParticipantCount(0);
  //     }
  //   };

  //   const FETCH_TIME = 1000 * 30; // Every 30 seconds
  //   const intervalId = setInterval(fetchParticipantsCount, FETCH_TIME);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div className="container-fluid">
      <div className="landingpage">
        <div className="Webture-browser">
          {/* Browser Tab */}
          <div className="browser__tab">
            <span>Awesome Web Browser</span>
            <i className="fa-solid fa-xmark"></i>
            <div className="tab-design"></div>
          </div>

          {/* Browser Navigation */}
          <div className="browser__navigation">
            <i className="fa-solid fa-arrow-left"></i>
            <i className="fa-solid fa-arrow-right"></i>
            <i className="fa-solid fa-rotate-right"></i>
            <div className="browser__navigation-url">
              <i className="fa-solid fa-globe"></i>
              <span>https://localhost:3000/webture/</span>
            </div>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className="browser__body">
            <div className="browser__body-content">
              <h1>Webture</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
