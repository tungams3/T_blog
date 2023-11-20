import React from 'react';
import './Blog_Content.css';

function Blog_Content(props) {
    const { image, introduction, method,title } = props;

    return (
        <div className="blog-content">
            <div className="blog-details">
                <img src={image} alt="Blog" />
                <p>{title}</p>
                <p>{introduction}</p>
                <br/>
                <p>{method}</p>
            </div>
        </div>
    );
}

export default Blog_Content;
