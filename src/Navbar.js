import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
  <div>
    <header>
      <nav className="navbar">
        <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        </ul>
      </nav>
    </header>
  </div>
    );
  }
export default Navbar;