import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import ScrollToTop from './components/ScrollToTop/index';
import Home from './pages/Home/index';
import Pledge from './pages/Pledge/index';
import About from './pages/About/index';
import Video from './pages/Video/index';
import Contact from './pages/Contact/index';
import Welcome from './pages/Welcome/index';
import Letter from './pages/Letter/index';
import Accessibility from './pages/Accessibility/index';
import NotFound from './pages/NotFound/index';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/letter-clarion-call-for-civility" element={<Letter />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
