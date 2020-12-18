import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials ] = useState({
    username:"",
    password:"",
  });

  const handleChange = e => {
    setCredentials({ 
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        window.localStorage.setItem('token', res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <p>Login Here!</p>
      <form onSubmit={login}>
        <label>Username:
          <input
            type="string"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            />
        </label>
        <label>Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            />
        </label>
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
