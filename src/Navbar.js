import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#22dd95", color: 'white  ' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: 'white' }}>AUTH</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" style={{ color: 'white' }} to={'/'}>Home</Link>
            </li> 
              <Link className="nav-link" style={{ color: 'white' }} to={'/Login'}>Login</Link>
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: 'white' }} to={'/Signup'}>Signin</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
