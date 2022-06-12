import React from "react";

import "./AboutWebture.css";

function AboutWebture() {
  return (
    <div className="container-fluid" id="about">
      <div className="about" id="about">
        {/* Browser Container */}
        <div className="container__browser">
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
              <span>localhost:3000/IEEE</span>
            </div>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>

          {/* Browser Body */}
          <div className="browser__body">
            <div className="browser__body-content">
              <div className="bowser__body-title">
                <h2 style={{ marginBottom: 50 }}>About IEEE</h2>
              </div>
              <p>
                <i>
                  IEEE SRM is not just any student club rather a prolific
                  student chapter and multitude of the scholarly that aims in
                  advancing technology for Humanity reminds the technology
                  community and the world that IEEE stands at the forefront of
                  technological change for the betterment of humanity.{" "}
                </i>
              </p>
              <p>
                No matter how advanced technology gets, there will always be a
                divide keeping us from truly knowing a few work-related domains.
              </p>
              <p>
                Here at IEEE, we bridge that gap with engaging activities across
                various such domains, where no work goes obscure.
              </p>
              <p>
                Every student, every passion and every interest matters to us
                and all are well-addressed and acknowledged.
              </p>
              <p>
                It is also a shared-platform for the exultant upbringing of new
                ideas or projects into furtherance.
              </p>
              <q>
                There’s no power for change greater than a community discovering
                what it cares about.
              </q>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWebture;
