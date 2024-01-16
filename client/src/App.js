import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
