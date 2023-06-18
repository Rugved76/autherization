import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#22dd95", color: 'white  ' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: 'white' }}>AUTH</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/" style={{ color: 'white' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login" style={{ color: 'white' }}>Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Signup" style={{ color: 'white' }}>SignUp</a>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
