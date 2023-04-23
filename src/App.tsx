import React from "react";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Contacts from "./components/Contacts";
import ChartsAndMaps from "./components/ChartsAndMaps";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/chartsmaps" element={<ChartsAndMaps />} />
      </Routes>
    </Router>
  );
}

export default App;
