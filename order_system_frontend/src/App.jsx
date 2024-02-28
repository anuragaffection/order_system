import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import Error404 from './pages/Error404'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
