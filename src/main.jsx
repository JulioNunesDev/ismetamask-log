import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<App />} /> 
     <Route path='/login' element={<Home />} /> 
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
)
