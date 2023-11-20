import React  from 'react';
import './Navbar_Post.css';
function Navbar_Post(){
    const handleNavigate = () => {
        window.location.href = 'https://tungams3.github.io/T_blog'; // Replace with your desired URL
      };
    return (
        <div>
    <header>
      <nav className="navbar">
        <ul className="nav-links">
        <li>
        <button onClick={handleNavigate} >Home</button>
        </li>
        <li>
        <button onClick={handleNavigate} >About</button>
        </li>
        <li>
        <button onClick={handleNavigate} >Post</button>
        </li>
        <li>
        <button onClick={handleNavigate} >Contact</button>
        </li>
        </ul>
      </nav>
    </header>
  </div>
    );
}
export default Navbar_Post 