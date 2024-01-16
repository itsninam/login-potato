import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { firstName, email, password } = userInput;

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/signup", {
        firstName,
        email,
        password,
      });
      navigate("/");

      console.log(response);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
  };
  return (
    <form onSubmit={handleSignupSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={userInput.firstName}
        onChange={(event) =>
          setUserInput({ ...userInput, firstName: event.target.value })
        }
      />
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

      <button type="submit">Sign up</button>
    </form>
  );
}

export default Signup;
