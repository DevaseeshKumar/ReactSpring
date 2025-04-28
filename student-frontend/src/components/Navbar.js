import React from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => (
  <nav className="navbar" role="navigation">
    <div className="navbar-left">
      <span className="logo" onClick={() => onNavigate('home')}>Student Portal</span>
    </div>
    <div className="navbar-center">
      <ul className="nav-links">
        <li>
          <button className="nav-btn" onClick={() => onNavigate('add')}>Add Student</button>
        </li>
        <li>
          <button className="nav-btn" onClick={() => onNavigate('view')}>View Students</button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
