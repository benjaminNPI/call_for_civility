import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index';
import Home from './pages/Home/index';
import Pledge from './pages/Pledge/index';
import About from './pages/About/index';
import Video from './pages/Video/index';
import Contact from './pages/Contact/index';
import Footer from './components/Footer/index';
import Welcome from './pages/Welcome/index';
import Letter from './pages/Letter/index';
import React from 'react';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} >
        </Route>
        <Route path="/about-us" element={<About />} >
        </Route>
        <Route path="/video" element={<Video />} >
        </Route>
        <Route path="/contact" element={<Contact />} >
        </Route>
        <Route path="/pledge" element={<Pledge />} >
        </Route>
        <Route path="/welcome" element={<Welcome />} >
        </Route>
        <Route path="/letter-clarion-call-for-civility" element={<Letter />} >
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;