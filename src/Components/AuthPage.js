import React from "react";

const AuthPage = () => {
  return (
    <div className="pageWrapper">
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
          placeholder="Username"
        />
        <input
          className="form-control signupBtns"
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-primary mt-2 rounded-pill active">
          Signup
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
