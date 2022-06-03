/**
 * Navbar Component
 */

// Dependencies
import React from 'react';
import './Navbar.css';
import Logo from '../assets/IEEELogo.png'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  sticky-top " style={{ "background": "#97CCCF" }}>

        <div className="navbar-brand" href="/" toggleNavKey={0} >
          <span className="logo">
            <a href="https://www.ieeesrmist.in/">
              <img src={Logo} height="50" width="120" style={{ "margin-left": "20px" }} alt="IEEE LOGO" /></a>
          </span>
          
        </div>
        <div type="button"className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <i className='fa fa-bars fa-xl' style={{color:'black'}}></i>
        </div>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mt-3 ">
            <a href="/" className="nav-item nav-link active text-center " id="about"><h3>About</h3></a>
            <a href="/" className="nav-item nav-link active text-center " id="sponsor"><h3>Sponsors</h3></a>
            <a href="/" className="nav-item nav-link active text-center " id="reg"><h3>Register</h3></a>

          </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar;