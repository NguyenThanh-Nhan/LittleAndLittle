import React from "react";
import "./App.css";

import Routers from "./routers/Routers";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  return (
    <div className="wrapper">
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="app-bg">
        <Routers />
      </div>
    </div>
  );
}

export default App;
