import React from 'react'
import './LandingPage.css'
import landingimg from './landingpage.png'

function LandingPage() {
  return (
    <div className='landingpage-container'>
      <div className="image-container">
        <div className="landing-url">
          https://www.scriptstudio.in
        </div>
        <div className="landing-title">
          SCRIPT STUDIO JMD
        </div>
        <img src={landingimg} alt="" />
      </div>
    </div>
  )
}

export default LandingPage