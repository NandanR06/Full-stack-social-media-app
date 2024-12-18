import React, { useContext } from 'react'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { Route, Routes,Navigate } from 'react-router-dom'
import AuthContext from './context/AuthContext'


export default function App() {
  const {user} = useContext(AuthContext)
  return (
    <div className='app'>

      <Routes>
        <Route path='/' element={user?<Home />:<Register/>} />
        <Route path='/register' element={ user?<Navigate to ={"/"}/> : <Register />} />
        <Route path='/login' element={user?<Navigate to ={"/"}/> :  <Login />} />
        <Route path='/profile/:username' element={<Profile />} />
      </Routes>

    </div>
  )
}
