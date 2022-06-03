/**
 * About Webture Page
 */

// Dependencies
import React from 'react';

import './AboutWebture.css'

function AboutWebture() {
  return (
    <div className='container'>
      {/* Browser Container */}
      <div className='container__browser'>

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
            <span>https://webture.ieeesrmist.in/about</span>
          </div>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        {/* Browser Body */}
        <div className='browser__body'>
          <div className='browser__body-content'>
            <h2>About</h2>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            <q>Lorem Ipsum Random quote for content</q>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutWebture;