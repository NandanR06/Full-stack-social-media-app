import React, { useContext, useRef } from "react";
import CircularProgress from '@mui/material/CircularProgress';

import "./Login.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const url = "http://localhost:5000";

  // const handleClick =async  (e) => {
  //   e.preventDefault();
  //   // const loginCall = async (userCredintial, dispatch) => {
  //     const url = "http://localhost:5000";

  //     dispatch({ type: "Login_starts" });
  //     try {
  //       const res = await axios.post(`${url}/api/auth/login`,  { email: email.current.value, password: password.current.value });
  //       console.log(res.data);
  //       dispatch({ type: "Login_Success", payload: res.data });
  //     } catch (error) {
  //       dispatch({ type: "Login_Failure", payload: error });
  //     }
  //   // };

  //   //  console.log(email.current.value,password.current.value);
  //   // loginCall(
  //   //   { email: email.current.value, password: password.current.value },
  //   //   dispatch
  //   // );
  //   // console.log(user);
  // };


  const handleClick = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000";
  
    dispatch({ type: "Login_starts" });
  
    try {
      const res = await axios.post(`${url}/api/auth/login`, {
        email: email.current.value,
        password: password.current.value,
      });
      dispatch({ type: "Login_Success", payload: res.data });
    } catch (error) {
      console.error(error.response?.data || error.message);
      dispatch({ type: "Login_Failure", payload: error });
    }
  };
  

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">ReadNote</h3>
          <span className="login-desc">
            Connect with friends and the world around you on ReadNote
          </span>
        </div>
        <div className="login-right">
          <form className="login-box" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              className="logininput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="logininput"
              ref={password}
              required
              minLength={6}
            />
            <button className="login-button" disabled={isFetching}>
              {isFetching ?<CircularProgress color="white" size="25px" />: "Log In"}
            </button>
            <span className="login-forgot">Forgot password?</span>
            <button className="login-register-button">
            {isFetching ?<CircularProgress color="white" size="25px" />: "Create a New Account"}
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
