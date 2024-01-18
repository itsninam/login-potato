import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { UsersProvider } from "./contexts/UsersContext";

// const initialState = {
//   isLoading: true,
//   status: "idle",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "logged-in": {
//       return {
//         ...state,
//         isLoading: false,
//         status: "logged-in",
//       };
//     }
//   }
// };

function App() {
  // const [reducerState, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </UsersProvider>
  );
}

export default App;
