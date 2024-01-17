import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useReducer } from "react";

const initialState = {
  isLoading: true,
  status: "idle",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "logged-in": {
      return {
        ...state,
        isLoading: false,
        status: "logged-in",
      };
    }
  }
};

function App() {
  const [reducerState, dispatch] = useReducer(reducer, initialState);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="home"
        element={<Home reducerState={reducerState} dispatch={dispatch} />}
      />
    </Routes>
  );
}

export default App;
