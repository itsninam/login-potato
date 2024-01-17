import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { email, password } = userInput;

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log(response);
      navigate("/home", { state: response.data.user });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={userInput.email}
        onChange={(event) =>
          setUserInput({ ...userInput, email: event.target.value })
        }
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={userInput.password}
        onChange={(event) =>
          setUserInput({ ...userInput, password: event.target.value })
        }
      />
      <button type="submit">Login</button>
      <p>Or</p>
      <Link to="/signup">Sign up</Link>
    </form>
  );
}

export default Login;
