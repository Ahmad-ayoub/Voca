import React, { useState } from "react";
import axios from "axios";

const AuthPage = () => {
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [birthdate, setBirthDate] = useState();
  const [message, setMessage] = useState();

  const getName = (e) => {
    console.log("Name has been added", e.target.value);
    setName(e.target.value);
  };

  const getUserName = (e) => {
    console.log("Username has been added", e.target.value);
    setUserName(e.target.value);
  };

  const getEmail = (e) => {
    console.log("Email has been added", e.target.value);
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    console.log("Password has been added", e.target.value);
    setPassword(e.target.value);
  };

  const getBirthDate = (e) => {
    console.log("Birthdate has been added", e.target.value);
    setBirthDate(e.target.value);
  };

  const loginUser = (event) => {
    event.preventDefault();
    axios
      .post("/login", { username, password })
      .then((response) => {
        console.log(response.data.message);
        getUserName(response.data.message);
        setMessage("You logged in!");
      })
      .catch((error) => {
        console.log(error);
        setMessage("Failed to log in. Please check your credentials.");
      });
  };

  const registerUser = (event) => {
    event.preventDefault();
    axios
      .post("/register", {
        name,
        username,
        email,
        password,
        birthdate,
      })
      .then((response) => {
        console.log(response.data.message);
        // getUserName(response.data.message);
        setMessage("You Registered!");
      })
      .catch((error) => {
        console.log(error);
        setMessage("Failed to log in. Please check your credentials.");
      });
  };

  return (
    <div className="pageWrapper">
      <h1 className="appTitle">Voca</h1>
      <div className="form loginForm">
        <h2>Login</h2>
        <input
          className="form-control loginBtns"
          type="text"
          placeholder="Username"
          onChange={getUserName}
          required
        />
        <input
          className="form-control signupBtns"
          type="text"
          placeholder="email"
          onChange={getEmail}
          required
        />
        <input
          className="form-control loginBtns"
          type="password"
          placeholder="Password"
          onChange={getPassword}
          required
        />
        <button
          className="btn btn-primary mt-2 rounded-pill active"
          onClick={loginUser}
        >
          Login
        </button>
        <p>{message}</p>
      </div>

      <div className="form signupForm">
        <h2>Signup</h2>
        <input
          className="form-control signupBtns"
          type="text"
          placeholder="Name"
          onChange={getName}
          required
        />
        <input
          className="form-control signupBtns"
          type="text"
          placeholder="Username"
          onChange={getUserName}
          required
        />
        <input
          className="form-control signupBtns"
          type="text"
          placeholder="Email"
          onChange={getEmail}
          required
        />
        <input
          className="form-control signupBtns"
          type="password"
          placeholder="Password"
          onChange={getPassword}
          required
        />
        <input
          className="form-control signupBtns"
          type="date"
          onChange={getBirthDate}
          required
        />
        <button
          className="btn btn-primary mt-2 rounded-pill active"
          onClick={registerUser}
        >
          Signup
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default AuthPage;
