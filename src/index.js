import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from './components/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <GlobalStyle/>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
