import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthContextProvider } from './context/AuthContext';
import { SearchContextProvider } from './context/SearchContext';

const root = createRoot(document.getElementById('root')); // Replace 'root' with your actual root element ID
root.render(

  <App/>

 );


