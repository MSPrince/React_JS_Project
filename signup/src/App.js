import React from 'react'

import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './component/Home'
import Registration from './component/Register'
import Login from './component/Login'
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Registration/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App