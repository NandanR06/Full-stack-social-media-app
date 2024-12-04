import React from 'react'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div className='app'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile/:username' element={<Profile />} />
      </Routes>

    </div>
  )
}
