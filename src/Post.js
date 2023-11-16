import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

function Post(props) {
    const {blog_name,blog_title}=props;
    return (
        <div className="blog-box">
        <div className="blog-img">
          <img alt="blog" src="images\DONE-73.jpg"/> 
        </div>
        <div class="blog-text">
          <span className="demo">{blog_name}</span>
          <Link to= "/BlogPost1" className="blog-title">{blog_title}</Link>
          <p>Together with my work, I have done this project on my free time.This project explores powerful tool to identify jtag, figure out hardware security threat.</p>
          <Link to="/BlogPost1">Read More</Link>
        </div>
        </div>
    );
  }
export default Post;