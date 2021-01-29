import React, { useState } from "react";
import axios from "axios";
import * as Yup from 'yup';
import schema from '../helpers/formSchema'


const Login = (props) => {
  const [ credentials, setCredentials ] = 
    useState({
      username:'',
      password:''
    });
  const [formErrors, setFormErrors] = 
    useState({
      username: '',
      password:''
    })

  const handleChange = (evt, name, value) => {
    Yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
      })
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value
    });
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        window.localStorage.setItem('token', res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => { console.log(err)});
  }




  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <div>
      <h1>
      <div>{formErrors.username}</div>
      <div>{formErrors.password}</div>
        Welcome to the Bubble App!
      </h1>
      <form onSubmit={handleLogin}>
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

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.