import React from "react";
import styles from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={`${styles.form} ${styles.loginForm}`}>
        <h2>Login</h2>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Username"
        />
        <input
          className="form-control my-2"
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-primary mt-2 rounded-pill active">
          Login
        </button>
      </div>
      <div className={`${styles.form} ${styles.signupForm}`}>
        <h2>Signup</h2>
        <input
          className="form-control mb-2 my-2"
          type="text"
          placeholder="Username"
        />
        <input
          className="form-control my-2"
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
