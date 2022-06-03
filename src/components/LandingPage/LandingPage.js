import React from 'react'
import './LandingPage.css'

function LandingPage() {

  return (
    <div className='container-fluid'>
      <div className='landingpage'>
        <div className='Webture-browser'>

          {/* Browser Tab */}
          <div className='browser__tab'>
            <span>Awesome Web Browser</span>
            <i class="fa-solid fa-xmark"></i>
            <div className='tab-design'></div>
          </div>

          {/* Browser Navigation */}
          <div className='browser__navigation'>
            <i className="fa-solid fa-arrow-left"></i>
            <i className="fa-solid fa-arrow-right"></i>
            <i className="fa-solid fa-rotate-right"></i>
            <div className='browser__navigation-url'>
              <i className="fa-solid fa-globe"></i>
              <span>https://webture.ieeesrmist.in/</span>
            </div>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className='browser__body'>
            <div className='browser__body-content'>
              <h1>Webture</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage