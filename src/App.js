import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Physics from './components/Physics/Physics';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='App-NavBar'>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/physics" element={<Physics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;