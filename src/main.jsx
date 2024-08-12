import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddCreator from './pages/AddCreator.jsx'
import ViewCreator from './pages/ViewCreator.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     <App />    
    </BrowserRouter>
  </React.StrictMode>
);
