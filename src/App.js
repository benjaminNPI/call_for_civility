import React, { useState } from 'react';
import Header from './components/Header/index'
import Home from './pages/Home/index'
import Pledge from './pages/Pledge/index'
import About from './pages/About/index'
import Donate from './pages/Donate/index'
import Video from './pages/Video/index'
import Contact from './pages/Contact/index'
import Footer from './components/Footer/index'
import Welcome from './pages/Welcome/index'



function App() {
  const [currentpage, setCurrentPage] = useState('/Home');

  const renderPage = () => {
    if (currentpage === 'Pledge') {
      return <Pledge />;
    }
    if (currentpage === 'About') {
      return <About />;
    }
    if (currentpage === 'Donate') {
      return <Donate />;
    }
    if (currentpage === 'Video') {
      return <Video />;
    }
    if (currentpage === 'Contact') {
      return <Contact />;
    }
    if (currentpage === 'Welcome') {
      return <Welcome />;
    }
    if (currentpage === 'Home') {
      return <Home currentpage={currentpage} handlePageChange={handlePageChange}  />;
    }
    return <Home currentpage={currentpage} handlePageChange={handlePageChange}  />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentpage={currentpage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App;