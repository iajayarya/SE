import React from 'react'
import logo from '../../src/logo.png';
export default function Navbar() {
  return (
    <nav className="navbar navbar-inverse outNavbar">
  <div className="container-fluid">
    <div className="navbar-header">
      {/* <a className="navbar-brand" href="#">WebSiteName</a> */}
      {/* <img src={logo} alt="" /> */}
    </div>
    <ul className="nav navbar-nav leftNavPart">

      <li className="active text-white">  <img src={logo} alt="" style={{height:'30px'}} /></li>
      <li className="active text-white"><span className='text-white' style={{color:'black'}}>Blockular Inc.</span></li>
     
     
    </ul>
    <ul className="nav navbar-nav navbar-right" style={{color:'black'}}>
      <li><a href="#"><span className="user" style={{color:'black'}}>About</span > </a></li>
      <li><a href="#"><span className="log-in" style={{color:'black'}}>Connet Wallet &rarr;</span> </a></li>
    </ul>
    {/* <hr/> */}
  </div>

</nav>
  
  )
}
