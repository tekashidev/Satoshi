import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth, AuthProvider } from './hooks/useAuth';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <useAuth>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </useAuth>
    </Router>
  );
}

export default App;