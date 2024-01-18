import React from "react";
import { useUsers } from "../contexts/UsersContext";

function Home() {
  const { reducerState } = useUsers();

  if (reducerState.status === "idle") {
    return <p className="loading">Loading...</p>;
  }

  if (reducerState.status === "logged-in") {
    return (
      <div>
        <h2>Welcome {reducerState.data.firstName}</h2>
      </div>
    );
  }
}

export default Home;
