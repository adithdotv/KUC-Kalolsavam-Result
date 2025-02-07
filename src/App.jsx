import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Search from './components/Search';
import Schedule from './components/Schedule';
import Logobar from './components/Logobar';
import NavBar from './components/NavBar';


// Import background image
import bgImage from './assets/bg.png';

function App() {
  return (
    <div className="App">
      {/* Apply background image with fixed attachment */}
      <div
        className="bg-overlay"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ></div>

      <BrowserRouter>
        {/* Common components for all pages */}
        <Logobar />
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Schedule' element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
