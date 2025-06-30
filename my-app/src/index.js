// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ use this for React 18+
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
