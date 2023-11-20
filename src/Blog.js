import React,{ useRef } from 'react';
import Navbar from './Navbar'; // Importing the Navbar component
import Footer from './Footer';
import Project from './Project';
import About  from './About';
import './Blog.css';

function Blog() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScroll = (refName) => {
    if (refName === 'aboutRef') {
      scrollToSection(aboutRef);
    } else if (refName === 'projectRef'){
      scrollToSection(projectRef)
    } else if (refName=== 'contactRef'){
        scrollToSection(contactRef);
      }
    }
    // Add more conditions for other sections
    return (
        <div>
        <Navbar handleScroll={handleScroll} />        
        <section ref={aboutRef}>
        <About />
        </section>
      <section ref={projectRef}>
      <section id="blog" style={{textAlign: "center"}}>
      <div className="blog-heading">
          <h3>My Posts</h3>
      </div>
     </section>
      </section>
      <Project />
        
      <section ref={contactRef}>
        <Footer />
      </section>
      </div>
    );
  }
export default Blog;