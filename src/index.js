import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from "@emotion/react";
import { global } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={global}/>
    <App />
  </React.StrictMode>
);
