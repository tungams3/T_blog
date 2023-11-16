import React from 'react';
import './Blog_Content.css';
import Navbar from './Navbar';

function Blog_Content(props) {
    const { image, introduction, method } = props;

    return (
        <div className="blog-content">
            <div className="blog-details">
                <img src={image} alt="Blog" />
                <p>{introduction}</p>
                <p>{method}</p>
            </div>
        </div>
    );
}

export default Blog_Content;
