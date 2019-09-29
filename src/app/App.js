import "./app.css";
import React from "react";
import Routes from "../service/routes/Routes";
import CustomDrawer from "../components/drawer/CustomDrawer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <CustomDrawer />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
