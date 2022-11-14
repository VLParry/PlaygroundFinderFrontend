import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Towns from "./components/Towns";
import Playgrounds from "./components/Playgrounds";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/towns" element={<Towns />} />
        <Route path="/playgrounds" element={<Playgrounds />} />
      </Routes>
      </Router>
  );
}

export default App;
