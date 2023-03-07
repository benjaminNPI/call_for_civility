import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/index';
import Home from './pages/Home/index';
import Pledge from './pages/Pledge/index';
import About from './pages/About/index';
import Video from './pages/Video/index';
import Contact from './pages/Contact/index';
import Footer from './components/Footer/index';
import Welcome from './pages/Welcome/index';
import Letter from './pages/Letter/index';
import React, { Component } from 'react';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
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
}

export default App;