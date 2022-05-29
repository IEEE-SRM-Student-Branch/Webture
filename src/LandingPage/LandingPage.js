import React from 'react'
import './LandingPage.css'
import landingimg from './landingpage.png'

function LandingPage() {
  return (
    <div className='landingpage-container'>
      <div className="image-container">
        <img src={landingimg} alt="" />
      </div>
    </div>
  )
}

export default LandingPage