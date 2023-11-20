import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ handleScroll }) =>  {
  // Add refs for other sections as needed
    return (
  <div>
    <header>
      <nav className="navbar">
        <ul className="nav-links">
        <li>
          <button>Home</button>
        </li>
        <li>
          <button onClick={() => handleScroll('aboutRef')}>About</button>
        </li>
        <li>
        <button onClick={() => handleScroll('projectRef')}>Post</button>
        </li>
        <li>
        <button onClick={() => handleScroll('contactRef')}>Contact</button>
        </li>
        </ul>
      </nav>
    </header>
  </div>
    );
  }
export default Navbar;