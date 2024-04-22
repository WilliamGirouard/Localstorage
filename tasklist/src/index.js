import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tasklist from './fonction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tasklist />
  </React.StrictMode>
);
