import { useState } from 'react';
import './App.css';
import { NavLink, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home';
import Support from './component/Support';
import About from './component/About';
import Labs from './component/Labs';
import NotFound from './component/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/support" activeClassName="active">Support</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/labs" activeClassName="active">Labs</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
