import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import App from './App';
import Credentials from './pages/Credentials'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/authen" element={<Credentials />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);