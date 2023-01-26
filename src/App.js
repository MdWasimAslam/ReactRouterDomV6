import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';


function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App