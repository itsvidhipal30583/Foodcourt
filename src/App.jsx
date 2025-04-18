import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import Login from './Components/Login'
import Cart from './Components/Cart'

import { ToastContainer } from 'react-toastify'
import SimpleSlider from './Components/SimpleSlider'

import ProtectedRoute from './context/ProtectedRoute'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/slider' element={< SimpleSlider />} />
          <Route path='./prop' element={<FunctionProp/>}/>
         

        </Routes>
        <ToastContainer/>
      </BrowserRouter>
        </div>
  )
}

export default App
