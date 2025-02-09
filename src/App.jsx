import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Search from './components/Search';

import Schedule from './components/Schedule';
import Logobar from './components/Logobar';
import Admin from './components/Admin/Admin';
import NavBar from './components/NavBar';
import AdminLogin from './components/Admin/AdminLogin'


// Import background image
import bgImage from './assets/bg.png';
import ProtectedRoute from './components/ProtectedRoute';

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
          <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } 
        />
        <Route path='/admin-login' element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

