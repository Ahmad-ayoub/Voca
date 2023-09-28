import React from "react";
import myimage from "../Images/doodle_page.jpg";
import myimage2 from "../Images/doodle_page_2.jpg";

const AuthPage = () => {
  return (
    <div className="pageWrapper">
      <h1 className="appTitle">Voca</h1>
      <div
        className="form loginForm"
        style={{ backgroundImage: `url(${myimage})` }}
      >
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

      <div
        className="form signupForm"
        style={{ backgroundImage: `url(${myimage2})` }}
      >
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
