import React, { useState } from 'react';
import Header from './components/Header/index'
import Home from './pages/Home/index'
import Pledge from './pages/Pledge/index'
import About from './pages/About/index'
import Donate from './pages/Donate/index'
import Video from './pages/Video/index'
import Contact from './pages/Contact/index'



function App() {
  const [currentPage, setCurrentPage] = useState('/');

  const renderPage = () => {
    if (currentPage === 'Pledge') {
      return <Pledge />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Donate') {
      return <Donate />;
    }
    if (currentPage === 'Video') {
      return <Video />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Home') {
      return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  )
}

export default App;