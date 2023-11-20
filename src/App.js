import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import { HashRouter} from "react-router-dom";
import Blog from './Blog';
import Blog_Post1 from './Blog_Post1';
import Blog_Post2 from './Blog_Post2';
function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
      <Route
                        exact
                        path="/"
                        element={<Blog />}
                    />
      <Route path="/BlogPost1" element={<Blog_Post1/>}/>
      <Route path="/BlogPost2" element={<Blog_Post2/>}/>

      </Routes>
    </HashRouter>
  );
}

export default App;
