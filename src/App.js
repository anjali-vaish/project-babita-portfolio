import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Certifications from './Certifications';
import GetInTouch from './GetInTouch';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className="nav-link">
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/certifications" className="nav-link">
                Certifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/GetInTouch" className="nav-link">
                Get in Touch
              </NavLink>
            </li>
            <li>
              <a
                href={`${process.env.PUBLIC_URL}/Profile.pdf`}
                className="nav-link"
                download
              >
                Download Bio Sketch
              </a>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/GetInTouch" element={<GetInTouch />} />
          {/* Add additional routes as necessary */}
        </Routes>

        {/* Overlay bars for animation */}
        <div className="overlay-bar overlay-bar-left"></div>
        <div className="overlay-bar overlay-bar-right"></div>
      </div>
    </Router>
  );
}

export default App;
