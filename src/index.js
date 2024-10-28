import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Earthquake from './pages/earthquake';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EarthP1 from './earth/p1-1';
import EarthP2 from './earth/p1-2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/earthquake" element={<Earthquake />} />
        <Route path="/p1-1" element={<EarthP1 />} />
        <Route path="/p1-2" element={<EarthP2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
