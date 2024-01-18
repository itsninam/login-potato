import React, { createContext, useContext, useState, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const initialState = {
  isLoading: true,
  status: "idle",
  data: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "logged-in": {
      return {
        ...state,
        isLoading: false,
        status: "logged-in",
        data: action.payload,
      };
    }
  }
};

const UsersContext = createContext();

function UsersProvider({ children }) {
  const [reducerState, dispatch] = useReducer(reducer, initialState);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInput;

  async function fetchData(user) {
    console.log("login");
    try {
      const response = await axios.get("http://localhost:3001/getUsers");
      console.log(response.data);

      const currentUser = response.data.find((res) => res.email === user.email);

      dispatch({ type: "logged-in", payload: currentUser });
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log(response);
      navigate("/home");
      fetchData(response.data.user);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <UsersContext.Provider
      value={{
        reducerState,
        handleLogin,
        email,
        password,
        setUserInput,
        userInput,
        fetchData,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UsersContext);
  return context;
}
export { UsersProvider, useUsers };
