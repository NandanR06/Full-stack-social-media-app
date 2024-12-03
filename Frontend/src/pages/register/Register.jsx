import React from 'react'
import "./Register.css"
export default function Register() {
  return (
    <div className='register'>
      <div className="register-wrapper">
        <div className="register-left">
            <h3 className="register-logo">ReadNote</h3>
            <span className="register-desc">Connect with friends and the world around you on ReadNote</span>
        </div>
        <div className="register-right">
            <div className="register-box">
                <input placeholder='User Name' type="email" className="registerinput" /> 
                <input placeholder='Email' type="email" className="registerinput" /> 

                <input placeholder="Password" type="password" className="registerinput" />

                <input placeholder='Password Again' type="password" className="registerinput" /> 

                <button className='register-button'>Sign Up</button> 
                <button className="register-register-button">Log into Account</button>
                </div>

        </div>
      </div>
    </div>
  )
}
