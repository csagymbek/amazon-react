import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Login.css";
import { db, auth } from "../configs/firebase";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => res && history.push("/"))
      .catch((error) => console.error(error));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => res && history.push("/"))
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signin" onClick={signIn} type="submit">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button className="login__register" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}
