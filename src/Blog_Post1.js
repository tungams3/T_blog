import React from 'react';
import Navbar from './Navbar';
import Navbar_Post from './Navbar_Post';
import Blog_Content from './Blog_Content';
function Blog_Post1(props) {
    return (
        <div>
            <Navbar_Post />
            <Blog_Content image={process.env.PUBLIC_URL+ "/Jtag_illustrate.jpg"} introduction="JTAG is short for Joint Test Action Group and generally refers to on-chip debugging interfaces that follow the IEEE 1149.x standard. The standard doesn’t mandate a certain connection – it just dictates a standard for communicating with chips in a device. It uses 5 pins: TCK, TMS, TDI, TDO and (options) TRST; which are (Test) Clock, Mode Select, Data In, Data Out, and Reset.

It can be useful to hardware hackers in various ways, such as extracting device IDs, extracting firmware, overwriting memory." Method="Research"/>
        </div>
    );
}

export default Blog_Post1;
