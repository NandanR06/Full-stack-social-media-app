import React from 'react'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

export default function App() {
  return (
    <div className='app'>
      <Register />
      <Login />
      <Home />
      <Profile />
    </div>
  )
}
