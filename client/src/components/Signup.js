import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />

      <Link to="/">Sign up</Link>
    </form>
  );
}

export default Signup;
