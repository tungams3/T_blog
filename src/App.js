import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Blog from './Blog';
import Project from './Project';
import Blog_Post1 from './Blog_Post1';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <Routes>
      <Route
                        exact
                        path="/"
                        element={<Blog />}
                    />
      <Route path="/Project" element={<Project/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="/Contact" element={<Footer/>}/>
      <Route path="/BlogPost1" element={<Blog_Post1/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
