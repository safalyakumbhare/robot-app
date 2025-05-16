import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import OrderManagement from './pages/OrderManagement';
import Tracking from './pages/Tracking';
import ControlPanel from './pages/ControlPanel';
import About from './pages/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<OrderManagement />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/control-panel" element={<ControlPanel />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
