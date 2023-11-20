import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
    const [showLinks, setShowLinks] = useState(false);
  
    const toggleMenu = () => {
      setShowLinks(!showLinks);
    };
return (
<div className="reach-me-section">
<div className="reach-me-content">
  <div className="reach-me-icon">
    <span className="title">Reach me</span>
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
<div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>
</div>
);
}
export default Footer