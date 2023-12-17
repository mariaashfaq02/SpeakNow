import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import React from "react";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
