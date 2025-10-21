import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();

