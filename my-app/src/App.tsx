import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './features/components/LoginComponent';
import Register from './features/components/Register';
import CurrencyComponent from './features/components/CurrencyComponent';
import Navbar from './features/components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="moving-film"><CurrencyComponent /></div>
        <hr className='hr' />
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;