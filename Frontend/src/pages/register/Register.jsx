import React, { useRef } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const user = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const email = useRef();
  const url = "http://localhost:5000";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Password doesn't match");
    } else {
      const data = {
        userName: user.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const res = await axios.post(`${url}/api/auth/register`, data);
        navigate("/login");

        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-left">
          <h3 className="register-logo">ReadNote</h3>
          <span className="register-desc">
            Connect with friends and the world around you on ReadNote
          </span>
        </div>
        <div className="register-right">
          <form className="register-box" onSubmit={handleSubmit}>
            <input
              placeholder="User Name"
              type="text"
              className="registerinput"
              required
              ref={user}
            />
            <input
              placeholder="Email"
              type="email"
              className="registerinput"
              required
              ref={email}
            />

            <input
              placeholder="Password"
              type="password"
              className="registerinput"
              required
              ref={password}
              minLength={6}
            />

            <input
              placeholder="Password Again"
              type="password"
              className="registerinput"
              required
              ref={passwordAgain}
            />

            <button className="register-button" type="submit">
              Sign Up
            </button>
            <button className="register-register-button">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
