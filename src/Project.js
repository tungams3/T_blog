import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import Post from './Post';
function Project() {
    return (
  <div className="blog-container">
    <Post blog_name="Hardware hacking" blog_title="jtagulator"/>
    <Post blog_name="Raspberry Pi" blog_title="UART"/>
    <Post blog_name="Travelling" blog_title="Countries" />
  </div>
    );
  }
export default Project;