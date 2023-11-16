import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const [showLinks, setShowLinks] = useState(false);
  
    const toggleMenu = () => {
      setShowLinks(!showLinks);
    };
return (
<div className="reach-me-section">
<div className="reach-me-content">
  <div className="reach-me-icon">
    <span>REACH ME THROUGH</span>
    <div className="menu-icon" onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  </div>
  <div className={showLinks ? 'social-links show' : 'social-links'}>
    <a href="https://www.linkedin.com/" className="linkedin">LinkedIn</a>
    <a href="https://www.facebook.com/" className="facebook">Facebook</a>
  </div>
  <p className="subtext">
    Whether you're ready to dive in or just want to discuss with me, I would be grateful if you contact with me.
  </p>
  <form className="contact-form">
    <textarea id="message" name="message" placeholder="Enter your message"></textarea>
    <button type="submit">Submit</button>
  </form>
</div>
</div>
);
}
export default Footer