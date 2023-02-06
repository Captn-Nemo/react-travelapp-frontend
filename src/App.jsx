import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import HomePage from "./modules/HomePage";
import SignUp from "./modules/SignUp";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
