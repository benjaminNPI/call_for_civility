import React, { useState } from 'react';
import Header from './components/Header/index'
import Home from './pages/Home/index'
import Pledge from './pages/Pledge/index'
import About from './pages/About/index'
import Video from './pages/Video/index'
import Contact from './pages/Contact/index'
import Footer from './components/Footer/index'
import Welcome from './pages/Welcome/index'



function App() {
  const [currentpage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentpage === 'Pledge') {
      return <Pledge currentpage={currentpage} handlePageChange={handlePageChange}  />;

    }
    if (currentpage === 'About') {
      return <About currentpage={currentpage} handlePageChange={handlePageChange}  />;

    }
    if (currentpage === 'Video') {
      return <Video currentpage={currentpage} handlePageChange={handlePageChange}  />;

    }
    if (currentpage === 'Contact') {
      return <Contact currentpage={currentpage} handlePageChange={handlePageChange}  />;

    }
    if (currentpage === 'Welcome') {
      return <Welcome currentpage={currentpage} handlePageChange={handlePageChange}  />;

      
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