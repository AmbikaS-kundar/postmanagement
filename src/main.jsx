// src/main.jsx (or src/main.tsx)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // 👈 Make sure this is imported
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> // 👈 App component must be rendered here
  </React.StrictMode>,
)