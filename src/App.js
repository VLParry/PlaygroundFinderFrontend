import {useState, useEffect} from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Towns from "./components/Towns";
import TownInfo from "./components/TownInfo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [towns, setTowns] = useState([])
  const [townPlaygrounds, setTownPlaygrounds] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/towns")
      .then((r) => r.json())
      .then((data) => {
        setTowns(data);
      });
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/towns" element={<Towns allTowns={towns} setTowns={setTowns}/>} />
        <Route path="/towns/:id" element={<TownInfo allTowns={towns} setTowns={setTowns} townPlaygrounds={townPlaygrounds} setTownPlaygrounds={setTownPlaygrounds}/>} />
      </Routes>
      </Router>
  );
}

export default App;
