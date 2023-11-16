import React from 'react';
import Navbar from './Navbar'; // Importing the Navbar component
import Footer from './Footer';
import Project from './Project';
import './Blog.css';

function Blog() {
    return (
        <div>
        <Navbar /> {/* Adding the Navbar component */}
      <section id="blog" style={{textAlign: "center"}}>
      <div className="blog-heading">
          <h3>My Project</h3>
      </div>
     </section>
        <Project />
        <Footer />
      </div>
    );
}
export default Blog;