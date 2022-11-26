import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Towns from "./components/Towns";
import TownInfo from "./components/TownInfo";
import PlaygroundList from "./components/PlaygroundList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/towns" element={<Towns />} />
        <Route path="/allPlaygrounds" element={<PlaygroundList/>} />
        <Route path="/towns/:id/:townName" element={<TownInfo />} />
      </Routes>
      </Router>
  );
}

export default App;
