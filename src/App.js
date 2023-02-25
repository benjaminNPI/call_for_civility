import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/index';
import Home from './pages/Home/index';
import Pledge from './pages/Pledge/index';
import About from './pages/About/index';
import Video from './pages/Video/index';
import Contact from './pages/Contact/index';
import Footer from './components/Footer/index';
import Welcome from './pages/Welcome/index';
import { useEffect } from "react";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} >
          </Route>
          <Route path="/about" element={<About />} >
          </Route>
          <Route path="/video" element={<Video />} >
          </Route>
          <Route path="/contact" element={<Contact />} >
          </Route>
          <Route path="/pledge" element={<Pledge />} >
          </Route>
          <Route path="/pledge/learn-more" element={<Welcome />} >
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
