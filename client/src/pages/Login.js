import React from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../contexts/UsersContext";

function Login() {
  const { handleLogin, userInput, setUserInput } = useUsers();

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
