import React from 'react';
import Navbar from './Navbar';
import Blog_Content from './Blog_Content';
function Blog_Post1(props) {
    return (
        <div>
            <Navbar/>
            <Blog_Content image="/img/logo192.png" introduction="On-chip debug (OCD) interfaces can provide chip-level control of a target device and are a primary vector used by engineers, researchers, and hackers to extract program code or data, modify memory contents, or affect device operation on-the-fly. Depending on the complexity of the target device, manually locating available OCD interfaces can be a difficult and time consuming task, sometimes requiring physical destruction or modification of the device.

JTAGulator is an open source hardware tool that assists in identifying OCD interfaces from test points, vias, component pads, or connectors on a target device.

Assembled JTAGulators are available from Parallax, Inc. For questions and technical support, please contact support@parallax.com. Support is only provided for genuine JTAGulators, which are hot pink in color and contain verifiable serial numbers.

This design is distributed under a Creative Commons Attribution-3.0 United States license. The JTAGulator name and logo are registered trademarks of Grand Idea Studio, Inc. The trademarks may not be used on derived works without permission." Method="Research"/>
        </div>
    );
}

export default Blog_Post1;
