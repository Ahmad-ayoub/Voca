import React, { useState } from "react";
import styles from "./AuthPage.module.css";

const AuthPage = () => {
  const [slide, setSlide] = useState(false);

  return (
    <div className={`${styles.pageWrapper} ${slide ? styles.slide : ""}`}>
      <div className={styles.loginForm}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className={styles.button} onClick={() => setSlide(!slide)}>
          Go to Signup
        </button>
      </div>
      <div className={styles.signupForm}>
        <h2>Signup</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className={styles.button} onClick={() => setSlide(!slide)}>
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
