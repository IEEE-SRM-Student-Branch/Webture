import React from 'react'
import './Nav.css';
import Logo from './IEEE Logo.png'
import Logo1 from './Salesforce Logo.png'

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light  sticky-top" style={{"background": "#97CCCF"}}>
    <div class="container-fluid" >
    <div className="navbar-brand"  href="/" toggleNavKey={0} >
      <span className="logo">
       <a href="https://www.ieeesrmist.in/">
      <img src={Logo} height="50" width="120" style={{"margin-left":"20px"}} alt="IEEE LOGO" /></a>
      </span>
      <span className="logo1">
       <a href="/">
      <img src={Logo1} height="60" width="60" style={{"margin-left":"10px"}} alt="SALESFORCE LOGO" /></a>
      </span>
        </div>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="/" class="nav-item nav-link active" id="about">About</a>
                <a href="/" class="nav-item nav-link active" id="sponsor">Sponsors</a>
                <a href="/" class="nav-item nav-link active" id="reg">Register</a>
              
            </div>
            
        </div>
    </div>
</nav>
  </>
  );
}
