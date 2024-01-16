import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <Link to="/home">Login</Link>
      <p>Or</p>
      <Link to="/signup">Sign up</Link>
    </form>
  );
}

export default Login;
