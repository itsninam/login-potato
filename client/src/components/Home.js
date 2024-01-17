import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Home({ reducerState, dispatch }) {
  const { state } = useLocation();

  const { email } = state;
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/getUsers");
        console.log(response.data);
        const currentUser = response.data.find((res) => res.email === email);
        setData(currentUser);
        dispatch({ type: "logged-in" });
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  if (reducerState.status === "idle") {
    return <p className="loading">Loading...</p>;
  }

  if (reducerState.status === "logged-in") {
    return (
      <div>
        <h2>Welcome {data.firstName}</h2>
      </div>
    );
  }
}

export default Home;
