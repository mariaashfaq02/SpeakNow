import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import React from "react";
import About from './Pages/About';
import Features from './Pages/Features';
import Team from './Pages/Team';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
