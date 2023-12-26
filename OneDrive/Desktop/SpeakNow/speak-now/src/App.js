import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './Pages/Home Page/HomePage';
import React from "react";
import About from './Pages/About Page/About';
import Features from './Pages/Features Page/Features';
import Team from './Pages/Team Page/Team';
import Contact from './Pages/Contact Page/Contact';


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
