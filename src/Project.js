import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import Post from './Post';
function Project() {
    return (
  <div className="blog-container">
    <Post blog_name="Life Story" blog_title="Volunteer in 'leader' world" blog_link="/BlogPost2" blog_image="/volunteer.jpg" />
    <Post blog_name="Hardware hacking" blog_title="jtagulator" blog_link ="/BlogPost1" blog_image="/jtagulator.png"/>
    <Post blog_name="Raspberry Pi" blog_title="JTAG protocol" blog_image="/python-raspberry-pi-board-components.webp" blog_link="https://sysprogs.com/VisualKernel/tutorials/raspberry/jtagsetup/" />
  </div>
    );
  }
export default Project;