import React from 'react'
import {BrowserRouter, Route, Routes,Link, Navigate} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import './App.css'
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      
      {/* This will render if path is not found in the routes usually an error page */}
      <Route path='*' element={<ErrorPage />} />


      {/* If Path is not avaiable then the below code will redirect it to Homepage using Navigate */}
      {/* <Route path='*' element={<Navigate to={'/'} />} /> */}

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App