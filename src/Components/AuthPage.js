import React, { useState } from "react";

const AuthPage = () => {
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [birthdate, setBirthDate] = useState();

  const getName = (e) => {
    console.log("Name has been added", e.target.value);
    setName(e.target.value);
  };

  const getUserName = (e) => {
    console.log("Name has been added", e.target.value);
    setUserName(e.target.value);
  };

  const getEmail = (e) => {
    console.log("Name has been added", e.target.value);
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    console.log("Name has been added", e.target.value);
    setPassword(e.target.value);
  };

  const getBirthDate = (e) => {
    console.log("Name has been added", e.target.value);
    setBirthDate(e.target.value);
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
        />
        <input
          className="form-control loginBtns"
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-primary mt-2 rounded-pill active">
          Login
        </button>
      </div>

      <div className="form signupForm">
        <h2>Signup</h2>
        <input
          className="form-control signupBtns"
          type="text"
          placeholder="Name"
        />
        <input
          className="form-control signupBtns"
          type="text"
          placeholder="Username"
        />
        <input
          className="form-control signupBtns"
          type="text"
          placeholder="Email"
        />
        <input
          className="form-control signupBtns"
          type="password"
          placeholder="Password"
        />
        <input className="form-control signupBtns" type="date" />
        <button className="btn btn-primary mt-2 rounded-pill active">
          Signup
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
