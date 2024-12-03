import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className='login'>
      <div className="login-wrapper">
        <div className="login-left">
            <h3 className="login-logo">ReadNote</h3>
            <span className="login-desc">Connect with friends and the world around you on ReadNote</span>
        </div>
        <div className="login-right">
            <div className="login-box">
                <input placeholder='Email' type="email" className="logininput" /> 
                <input placeholder="Password" type="password" className="logininput" />
                <button className='login-button'>Log In</button> 
                <span className="login-forgot">Forgot password?</span>
                <button className="login-register-button">Create a New Account</button>
                </div>

        </div>
      </div>
    </div>
  )
}
