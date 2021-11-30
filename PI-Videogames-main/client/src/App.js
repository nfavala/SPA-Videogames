import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import CreateGame from "./components/CreateGame/CreateGame";

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/videogame/:id" element={<Detail/>}/>
        <Route exact path="/creategame" element={<CreateGame/>}/>
      </Routes>
    </div>
  );
}

export default App;
